(ns client.users.views
  (:require [re-frame.core :as rf]
            [reagent.core :as r]
            [goog.functions :refer [debounce]]
            [fork.re-frame :as fork]
            [struct.core :as st]))

(defn format-date [date]
  (if (empty? date)
    date
    (subs  (.toISOString (js/Date. date)) 0 10)))

(def user-schema
  {:first-name [[st/required :message "First Name is required."]]
   :last-name [[st/required :message "Last Name is required."] st/string]
   :address [[st/required :message "Address is required."] st/string]
   :health-insurance-number [[st/required :message "Health Insurance Number is required."]
                             [st/max-count 16 :message "Health insurance number has to be 16 characters length"]
                             [st/min-count 16 :message "Health insurance number has to be 16 characters length"]
                             st/string]
   :birthday [[st/required :message "Birthday is required."] st/string]})

(defn validate [values]
  (let [errors (st/validate user-schema values)]
    (reduce-kv (fn [acc k v] (assoc acc k (:message v))) {} (first errors))))

(def input-style "w-full rounded-md border-2 border-gray-400 py-2 px-4 bg-transparent")
(def debounced-get-suggested-addresses (debounce #(rf/dispatch [:get-suggested-addresses %]) 300))
(defn on-address-widget-change [e]
  (let [val (-> e .-target .-value)]
    (rf/dispatch [:change-value :address val])
    (debounced-get-suggested-addresses val)))
(defn on-address-item-click [address]
  (rf/dispatch [:change-value :address address])
  (rf/dispatch [:clear-suggested-addresses]))

(defn address-widget-dropdown-item [address]
  [:a#menu-item-2.text-gray-700.block.px-4.py-2.text-sm.hover:bg-gray-200
   {:tabIndex "-1", :role "menuitem", :href "#"
    :key address
    :on-click #(on-address-item-click address)}
   address])

(defn address-widget []
  (let [suggested-addresses @(rf/subscribe [:suggested-addresses])]
    [:div.relative
     [:textarea.w-full.rounded-md.border-2.border-gray-400.py-2.px-4
      {:on-change on-address-widget-change
       :name "user[address]"
       :value @(rf/subscribe [:form-data :address])}]
     (when (not (empty? suggested-addresses))
       [:div.w-full.origin-top-right.absolute.right-0.mt-2.w-56.rounded-md.shadow-lg.bg-white.ring-1.ring-black.ring-opacity-5.divide-y.divide-gray-100.focus:outline-none
        {:tabIndex "-1",
         :aria-labelledby "menu-button",
         :aria-orientation "vertical",
         :role "menu"}
        (map address-widget-dropdown-item suggested-addresses)])]))

(defn spiner []
  [:svg {:class "animate-spin h-20 w-20 mr-3 rounded-full border-dashed border-4 border-blue-500"
         :view-box "0 0 24 24"}])

(defn display-error [name touched errors]
  (when (and (touched name) (name errors))
    [:div {:class "w-full text-red-500 text-sm absolute top-16 pt-1"} (name errors)]))
(defn user-form [options]
  [fork/form  options
   (fn [{:keys [values
                handle-submit
                handle-change
                submitting?
                handle-blur
                form-id
                errors
                touched]}]
     [:form
      {:on-submit handle-submit :id form-id}
      [:div {:class "w-full m-auto form grid grid-cols-2 gap-4"}
       [:label.flex.flex-col.relative "First Name:"
        [:input  {:class input-style
                  :type :text
                  :name :first-name
                  :on-change handle-change
                  :on-blur handle-blur
                  :value (values :first-name)}]
        (display-error :first-name touched errors)]
       [:label.flex.flex-col.relative "Last Name:"
        [:input  {:class input-style
                  :type :text
                  :name :last-name
                  :on-change handle-change
                  :on-blur handle-blur
                  :value (values :last-name)}]
        (display-error :last-name touched errors)]
       [:label.flex.flex-col.relative "Sex:"
        [:select {:class (str input-style " h-full")
                  :name :sex
                  :on-change handle-change
                  :on-blur handle-blur
                  :value (values :sex)}
         (map (fn [[k v]] ^{:key k} [:option {:value v} k])
              [["Male" "male"] ["Female" "female"]])]]
       [:label.flex.flex-col.relative "Birthday:"
        [:input {:class input-style
                 :type :date
                 :name :birthday
                 :on-change handle-change
                 :on-blur handle-blur
                 :value (values :birthday)}]
        (display-error :birthday touched errors)]
       [:label.flex.flex-col.relative "Health Insurance Number:"
        [:input {:class input-style
                 :name :health-insurance-number
                 :on-change handle-change
                 :on-blur handle-blur
                 :value (values :health-insurance-number)}]
        (display-error :health-insurance-number touched errors)]
       [:label.flex.flex-col.relative "Address"
        [:input {:class input-style
                 :name :address
                 :on-change handle-change
                 :on-blur handle-blur
                 :value (values :address)}]
        (display-error :address touched errors)]]
      [:div.flex.justify-end
       [:button.bg-green-500.text-white.text-lg.rounded-md.p-4.hover:bg-green-300.cursor-pointer.mt-5
        {:type "submit"}
        "Submit"]]])])

(defn create-user-form [] (fn [] [user-form {:initial-values {:sex "male"}
                                             :validation validate
                                             :path [:creat-user]
                                             :prevent-default? true
                                             :clean-on-unmount? true
                                             :keywordize-keys true
                                             :on-submit (fn [{:keys [values]}] (rf/dispatch [:create-user values]))
                                             :form-id "create-user"}]))

(defn update-user-form [default-data] (fn [] [user-form {:initial-values default-data
                                                         :validation validate
                                                         :path [:udpate-user]
                                                         :prevent-default? true
                                                         :clean-on-unmount? true
                                                         :keywordize-keys true
                                                         :on-submit (fn [{:keys [values]}] (rf/dispatch [:update-user values]))
                                                         :form-id "update-user"}]))

(def data-to-render [:first-name :last-name :sex :birthday :health-insurance-number :address])
(defn header-row [title]
  ^{:key title} [:th.px-6.py-3.text-left.text-xs.font-medium.text-gray-500.uppercase.tracking-wider
                 {:scope "col"}
                 title])
(defn column [user key]
  ^{:key (:id user)}[:td.px-6.py-4.whitespace-nowrap
     [:div.text-sm.font-medium.text-gray-900 (key user)]])
(defn user-info [user]
  ^{:key (:id user)} [:tr
                      (map (fn [k] [column user k]) data-to-render)
                      [:td.px-6.py-4.whitespace-nowrap.text-right.text-sm.font-medium
                       [:div.flex.items-center
                        (if @(rf/subscribe [:loading :users :actions])
                          [spiner]
                          [:div
                           [:button.text-indigo-600.hover:text-indigo-900.mr-4
                            {:on-click #(rf/dispatch [:open-modal [update-user-form user]])}
                            "Edit"]
                           [:button.text-red-600.hover:text-red-900
                            {:on-click #(rf/dispatch [:delete-user (:id user)])}
                            "Delete"]])]]])
(defn user-row [user]
  (let [state (r/atom "read")]
    (if (= state "read")
      (user-info user)
      (user-info user))))

(defn modal []
  (when @(rf/subscribe [:modals :opened])
    [:div.fixed.z-10.inset-0.overflow-y-auto
     {:aria-modal "true",
      :role "dialog",
      :aria-labelledby "modal-title"}
     [:div.flex.items-end.justify-center.min-h-screen.pt-4.px-4.pb-20.text-center.sm:block.sm:p-0
      [:div.fixed.inset-0.bg-gray-500.bg-opacity-75.transition-opacity
       {:aria-hidden "true"
        :on-click #(rf/dispatch [:close-modal])}]
      [:span.hidden.sm:inline-block.sm:align-middle.sm:h-screen
       {:aria-hidden "true"}
       "​"]
      [:div.inline-block.align-bottom.bg-white.rounded-lg.text-left.overflow-hidden.shadow-xl.transform.transition-all.sm:my-8.sm:align-middle.sm:max-w-lg.sm:w-full
       [:div.bg-gray-50.px-4.py-3.sm:px-6
        @(rf/subscribe [:modals :data])]]]]))

(defn main []
  (let [users @(rf/subscribe [:users])]
    [:main
     [:div {:class "container w-4/5 mx-auto pt-52"}
      [:div.flex.justify-end.mb-4
       [:button.bg-green-500.text-white.text-lg.rounded-md.p-4.hover:bg-green-300.cursor-pointer.mt-5
        {:type "button"
         :on-click #(rf/dispatch [:open-modal [create-user-form]])}
        "Create User"]]
      (cond @(rf/subscribe [:loading :users :all]) [:div
                                                    [:div.mx-auto.w-10
                                                     [spiner]]]
            (empty? users) [:h1.text-center.text-7xl "There are no users"]
            :else [:div.flex.flex-col
                   [:div.-my-2.overflow-x-auto.sm:-mx-6.lg:-mx-8
                    [:div.py-2.align-middle.inline-block.min-w-full.sm:px-6.lg:px-8
                     [:div.shadow.overflow-hidden.border-b.border-gray-200.sm:rounded-lg
                      [:table.min-w-full.divide-y.divide-gray-200
                       [:thead.bg-gray-50
                        [:tr
                         (map header-row ["First Name" "Last Name" "Sex" "Birthday" "Health Insurance Number" "Address"])
                         [:th.relative.px-6.py-3
                          {:scope "col"}
                          [:span.sr-only "Edit"]]]]
                       [:tbody.bg-white.divide-y.divide-gray-200
                        (map user-row users)]]]]]])]
     [modal]]))
