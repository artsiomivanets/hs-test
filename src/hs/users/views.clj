(ns hs.users.views
  (:require [hiccup.form :refer [form-to
                                 with-group
                                 text-field
                                 text-area
                                 submit-button
                                 drop-down]]
            [hiccup.core :refer [html]]))

(def input-style "w-full rounded-md border-2 border-gray-400 py-2 px-4")

(defn humanize [keyword]
  (-> keyword
      name
      (clojure.string/replace  #"-" " ")
      clojure.string/capitalize))

(defn display-error [msg]
  [:div {:class "w-full mb-2 text-red-500"} msg])

(defn display-errors [errors name]
  [:div.errors
   (->> errors
        (filter (fn [[k _]] (= k name)))
        (map (fn [[_ v]] (->  v :message display-error))))])

(defn form-template [{:keys [first-name last-name birthday sex address health-insurance-number]
                      :or {first-name "" last-name "" birthday "" sex "" address "" health-insurance-number ""}}
                     errors]
  (with-group :user [:div {:class "w-1/2 m-auto form grid grid-cols-2 gap-3"}
                     [:label.block "First Name:"
                      (text-field {:class input-style} :first-name first-name)
                      (display-errors errors :first-name)]
                     [:label.block
                      [:div "Last Name:"]
                      (text-field {:class input-style} :last-name last-name)
                      (display-errors errors :last-name)]
                     [:label.block
                      [:div.text-lg "Sex:"]
                      (drop-down {:class (str input-style " bg-transparent")} :sex [["Male" "male"] ["Female" "female"]] sex)
                      (display-errors errors :sex)]
                     [:label.block
                      [:div.text-lg "Birthday:"]
                      (text-field {:class (str input-style " w-1/5") :type :date} :birthday (.toString birthday))
                      (display-errors errors :birthday)]
                     [:label.block.col-span-2.text-lg "Health Insurance Number:"
                      [:div {:class "text-lg"}
                       (text-field {:class input-style} :health-insurance-number health-insurance-number)
                       (display-errors errors :health-insurance-number)]]
                     [:label.block.col-span-2.text-lg "Address:"
                      [:div#address-widget {:class "text-lg"}
                       (text-area {:class input-style} :address address)]
                      [:errors
                       (display-errors errors :address)]]
                     [:div {:class "col-span-2"}
                      [:button {:class "block mx-auto bg-purple-600 text-white py-2 rounded-md uppercase font-bold w-full"} "submit"]]]))

(defn new-user
  ([]
   (new-user {} {}))
  ([user]
   (new-user user {}))
  ([user errors]
   (html [:div
          (form-to [:post "/users"]
                   (form-template user errors))])))

(defn edit-user
  ([]
   (edit-user {} {}))
  ([user]
   (edit-user user {}))
  ([user errors]
   (html [:div
          (form-to [:patch (str "/users/" (:id user))]
                   (form-template user errors))])))

(def columns-to-render [:first-name :last-name :address :sex :birthday :health-insurance-number])
(defn header-row [title]
  [:th.px-6.py-3.text-left.text-xs.font-medium.text-gray-500.uppercase.tracking-wider
   {:scope "col"}
   title])
(defn body-info-row [{:keys [first-name last-name address birthday id sex health-insurance-number]}]
  [:tr
   [:td.px-6.py-4.whitespace-nowrap
    [:div.flex.items-center
     [:div.text-sm.font-medium.text-gray-900 first-name]]]
   [:td.px-6.py-4.whitespace-nowrap
    [:div.text-sm.font-medium.text-gray-900 last-name]]
   [:td.px-6.py-4.whitespace-nowrap
    [:div.text-sm.font-medium.text-gray-900 address]]
   [:td.px-6.py-4.whitespace-nowrap.text-sm.text-gray-900 sex]
   [:td.px-6.py-4.whitespace-nowrap
    [:span.text-md.leading-5.font-semibold.text-gray-900 (.toString birthday)]]
   [:td.px-6.py-4.whitespace-nowrap.text-sm.text-gray-900 health-insurance-number]
   [:td.px-6.py-4.whitespace-nowrap.text-right.text-sm.font-medium
    [:div.flex.items-center
     [:a.text-indigo-600.hover:text-indigo-900
      {:href (str "/users/" id "/edit")}
      "Edit"]
     (form-to {:class "mb-0 ml-2"} [:delete (str "/users/" id)]
              (submit-button {:class "cursor-pointer text-red-600 font-bold b"} "Delete"))]]])
(defn show-users [users]
  (html
   [:div
    [:div.links.flex.justify-between.mb-5
     [:div#user-form]
     [:div#user-links
      [:a.bg-green-500.text-white.text-lg.rounded-md.p-4
       {:href "/users/new"}
       "New user"]]]
    (if (empty? users)
      [:h1.text-center.text-7xl "There are no users"]
      [:div.flex.flex-col
       [:div.-my-2.overflow-x-auto.sm:-mx-6.lg:-mx-8
        [:div.py-2.align-middle.inline-block.min-w-full.sm:px-6.lg:px-8
         [:div.shadow.overflow-hidden.border-b.border-gray-200.sm:rounded-lg
          [:table.min-w-full.divide-y.divide-gray-200
           [:thead.bg-gray-50
            [:tr
             (map #(-> % humanize header-row) columns-to-render)
             [:th.relative.px-6.py-3
              {:scope "col"}
              [:span.sr-only "Edit"]]]]
           [:tbody.bg-white.divide-y.divide-gray-200
            (map body-info-row users)]]]]]])]))
