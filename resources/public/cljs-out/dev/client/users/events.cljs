(ns client.users.events
  (:require [ajax.core :as ajax]
            [day8.re-frame.http-fx]
            [re-frame.core :as rf]))

(rf/reg-event-db
 :change-value
 (fn [db [_ name value]]
   (assoc-in db [:form-data name] value)))

(rf/reg-event-fx
 :get-suggested-addresses
 (fn [_db [_ value]]
   {:http-xhrio {:method :get
                 :uri "https://app.geocodeapi.io/api/v1/autocomplete"
                 :params {:apikey "6d06f520-d110-11eb-aecc-39dfc19dc391"
                          :text value}
                 :timeout 5000
                 :response-format (ajax/json-response-format {:keywords? true})
                 :on-success [:success-suggested-addresses]
                 :on-failure [:failure-suggested-addresses]}}))

(rf/reg-event-db
 :success-suggested-addresses
 (fn [db [_ result]]
   (-> db
       (assoc-in [:suggested-addresses] (->> (:features result)
                                             (map #(-> % :properties :label))
                                             distinct))
       (assoc-in [:ui :address-widget :state] "shown"))))
(rf/reg-event-db
 :clear-suggested-addresses
 (fn [db _]
   (assoc-in db [:suggested-addresses] [])))

(rf/reg-event-db
 :failure-suggested-addresses
 (fn [db _]
   (assoc-in db [:suggested-addresses] [])))
