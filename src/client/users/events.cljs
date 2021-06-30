(ns client.users.events
  (:require [ajax.core :as ajax]
            [day8.re-frame.http-fx]
            [re-frame.core :as rf]))

(rf/reg-event-fx
 :initialize
 (fn [_ _]
   {:db {:users {:data []}
         :loading {}}
    :dispatch [:request-users]}))

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

(rf/reg-event-fx
 :request-users
 (fn [{:keys [db]} _]
   {:http-xhrio {:method :get
                 :uri "http://localhost:3001/users"
                 :timeout 5000
                 :response-format (ajax/json-response-format {:keywords? true})
                 :on-success [:success-request-users]
                 :on-failure [:failure-request-users]}
    :db (-> db
            (assoc-in [:loading :users :all] true))}))

(rf/reg-event-db
 :success-request-users
 (fn [db [_ result]]
   (-> db
       (assoc-in [:loading :users :all] false)
       (assoc-in [:users] {:data result :error nil}))))

(rf/reg-event-db
 :failure-request-users
 (fn [db [_ result]]
   (-> db
       (update-in [:loading :users] assoc :all false)
       (assoc-in  [:users] {:error result}))))

(rf/reg-event-fx
 :delete-user
 (fn [{:keys [db]} [_ id]]
   {:http-xhrio {:method :delete
                 :uri (str "http://localhost:3001/users/" id)
                 :timeout 5000
                 :format (ajax/json-request-format)
                 :response-format (ajax/json-response-format {:keywords? true})
                 :on-success [:success-delete-user id]
                 :on-failure [:failure-delete-user]}
    :db (-> db
            (update-in [:loading :users] assoc :actions true))}))

(rf/reg-event-db
 :success-delete-user
 (fn [db [_ id]]
   (-> db
       (update-in [:loading :users] assoc :actions false)
       (update-in [:users :data] #(remove (fn [u] (= id (:id u))) %)))))

(rf/reg-event-db
 :failure-delete-user
 (fn [db _]
   (-> db
       (update-in [:loading :users] assoc :actions false))))

(rf/reg-event-fx
 :create-user
 (fn [{:keys [db]} [_ payload]]
   {:http-xhrio {:method :post
                 :uri "http://localhost:3001/users"
                 :params {:data payload}
                 :timeout 5000
                 :format (ajax/json-request-format)
                 :response-format (ajax/json-response-format {:keywords? true})
                 :on-success [:success-create-user]
                 :on-failure [:failure-create-user]}
    :db (-> db
            (update-in [:loading :users] assoc :modal true))}))

(rf/reg-event-fx
 :success-create-user
 (fn [{:keys [db]} [_ user]]
   {:db (-> db
            (update-in [:loading :users] assoc :modal false)
            (update-in [:users :data] conj user))
    :dispatch [:close-modal]}))

(rf/reg-event-db
 :failure-create-user
 (fn [db _]
   (-> db
       (update-in [:loading :users] assoc :modal false))))

(rf/reg-event-fx
 :update-user
 (fn [{:keys [db]} [_ payload]]
   {:http-xhrio {:method :patch
                 :uri (str "http://localhost:3001/users/" (:id payload))
                 :params {:data (dissoc payload :id)}
                 :timeout 5000
                 :format (ajax/json-request-format)
                 :response-format (ajax/json-response-format {:keywords? true})
                 :on-success [:success-update-user payload]
                 :on-failure [:failure-update-user]}
    :db (-> db
            (update-in [:loading :users] assoc :modal true))}))

(rf/reg-event-fx
 :success-update-user
 (fn [{:keys [db]} [_ user]]
   {:db (-> db
            (update-in [:loading :users] assoc :modal false)
            (update-in [:users :data] (fn [users] (map #(if (= (:id %) (:id user))
                                                          user
                                                          %) users)) user))
    :dispatch [:close-modal]}))

(rf/reg-event-db
 :failure-update-user
 (fn [db _]
   (-> db
       (update-in [:loading :users] assoc :modal false))))

(rf/reg-event-db
 :open-modal
 (fn [db [_ data]]
   (-> db
       (assoc-in [:modals :opened] true)
       (assoc-in [:modals :data] data))))

(rf/reg-event-db
 :close-modal
 (fn [db _]
   (-> db
       (assoc-in [:modals :opened] false)
       (assoc-in [:modals :data] nil))))
(comment
  (rf/dispatch [:initialize])
  (rf/dispatch [:create-user {:first-name "asdfasf"
                              :birthday "1996-10-10"
                              :last-name "asdf"
                              :address "asdf"
                              :health-insurance-number "1234567890123456"
                              :sex "male"}])
  (rf/dispatch [:close-modal])
  (rf/dispatch [:open-modal [:div "hello"]]) (rf/dispatch [:open-modal [:div "hello"]])
  (rf/dispatch [:request-users]))
