(ns client.users.views
  (:require [re-frame.core :as rf]
            [goog.functions :refer [debounce]]))

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
