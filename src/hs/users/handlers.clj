(ns hs.users.handlers
  (:require [hs.users.db]
            [ring.util.response :refer [response not-found]]
            [struct.core :as st]))

(def user-schema
  {:first-name [[st/required :message "First Name is required."]]
   :last-name [[st/required :message "Last Name is required."] st/string]
   :address [[st/required :message "Address is required."] st/string]
   :health-insurance-number [[st/required :message "Health Insurance Number is required."]
                             [st/max-count 16 :message "Health insurance number has to be 16 characters length"]
                             [st/min-count 16 :message "Health insurance number has to be 16 characters length"]
                             st/string]
   :birthday [[st/required :message "Birthday is required."] st/string]})

(defn users [req]
  (response (hs.users.db/all (:db req))))

(defn upd [req]
  (let [{:keys [params db]} req
        [errors _] (st/validate user-schema (:data params))
        id (-> params :id Integer/parseInt)]
    (if (empty? errors)
      (if (> (hs.users.db/update-user! db (:data params) {:id id}) 0)
        (response (hs.users.db/find-by-id db id)))
      (response errors))))
(defn delete [req]
  (let [{{:keys [id]} :params db :db} req
        updated (hs.users.db/delete-user! db (-> id Integer/parseInt))]
    (if (> updated 0)
      (response {:result updated})
      (not-found id))))

(defn create [req]
  (let [{:keys [params db]} req
        [errors validated-data] (st/validate user-schema (:data params))]
    (if (empty? errors)
      (-> (hs.users.db/add-user! db validated-data)
          response)
      (response errors))))
