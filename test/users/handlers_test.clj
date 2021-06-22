(ns users.handlers-test
  (:require [clojure.test :refer :all]
            [hs.web :refer [app]]
            [hs.db :refer [db-url]]
            [next.jdbc :as jdbc]
            [ring.mock.request :as mock]))

(def user-data  {:first-name "test-name"
                 :last-name "test-last-name"
                 :birthday "1996-01-26"
                 :health-insurance-number "1234567890123456"
                 :sex "male"
                 :address "test"})
(deftest users-inex-test
  (is (-> (mock/request :get "/users")
          app
          :status
          (= 200))))

(deftest new-user-test
  (is (-> (mock/request :get "/users/new")
          app
          :status
          (= 200))))

(deftest create-user-test
  (let [result (-> (mock/request :post "/users")
                   (assoc-in [:params :user] user-data)
                   app
                   :status)]
    (is (not-empty (hs.users.db/where {:first-name (:first-name user-data)})))
    (is (= result 302))))

(deftest create-user-failed-test
  (let [user-data {:first-name "test-name"}
        result (-> (mock/request :post "/users")
                   (assoc-in [:params :user] user-data)
                   app
                   :status)]
    (is (empty? (hs.users.db/where {:first-name (:first-name user-data)})))
    (is (= result 200))))

(deftest delete-user-test
  (hs.users.db/add-user! (assoc user-data :first-name "test-to-delete"))
  (let [user (-> (hs.users.db/where {:first-name "test-to-delete"}) first)
        req (mock/request :delete (str "/users/" (:id user)))]

    (is (not-empty user))
    (is (= (-> req app :status) 302))
    (is (empty? (hs.users.db/where {:first-name "test-to-delete"})))))

(deftest update-user-test
  (hs.users.db/add-user! user-data)
  (let [user (-> (hs.users.db/where user-data) first)
        req (-> (mock/request :patch (str "/users/" (:id user)))
                (assoc-in [:params :user] (assoc user-data :first-name "updated")))]
    (is (= (-> req app :status) 302))
    (is (not-empty (hs.users.db/where {:first-name "updated"})))))

(defn wrap-into-transaction [f]
  (jdbc/with-transaction [tx db-url {:rollback-only true}]
    (binding [db-url tx] (f))))

(use-fixtures :each wrap-into-transaction)
