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
