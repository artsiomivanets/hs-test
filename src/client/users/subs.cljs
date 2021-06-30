(ns client.users.subs
  (:require [re-frame.core :as rf]))

(rf/reg-sub
 :address-widget-state
 (fn [db _]
   (get-in db [:ui :address-widget :state] :hidden)))

(rf/reg-sub
 :form-data
 (fn [db [_ name]]
   (get-in db [:form-data name] "")))

(rf/reg-sub
 :suggested-addresses
 (fn [db _]
   (get-in db [:suggested-addresses] [])))


(rf/reg-sub
 :users
 (fn [db _]
   (get-in db [:users :data] [])))

(rf/reg-sub
 :loading
 (fn [db [_ & path]]
   (get-in db (concat [:loading] (vec path)))))


(rf/reg-sub
  :modals
  (fn [db [_ key]]
    (get-in db [:modals key])))
