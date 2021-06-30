(ns users.handlers-test
  (:require [clojure.test :refer :all]
            [next.jdbc :as jdbc]
            [hs.db :refer [test-db]]
            [hs.web :refer [make-app]]))

(def user-data  {:first-name "test-name"
                 :last-name "test-last-name"
                 :birthday "1996-01-26"
                 :health-insurance-number "1234567890123456"
                 :sex "male"
                 :address "test"})

(deftest all-users
  (let [app (make-app test-db "test")
        res (-> {:request-method :get
                 :uri "/users"}
                app)]
    (is (empty? (:body res)))))

(deftest create-user
  (jdbc/with-transaction [tx test-db {:rollback-only true}]
    (let [app (make-app tx "test")
          res (-> {:request-method :post
                   :params {:data user-data}
                   :uri "/users"}
                  app)]
      (is (= user-data (dissoc (:body res) :id))))))

(deftest update-user
  (jdbc/with-transaction [tx test-db {:rollback-only true}]
    (let [user (hs.users.db/add-user! tx user-data)
          app (make-app tx "test")
          updated-user (assoc user-data :sex "female")
          res (-> {:request-method :patch
                   :params {:data updated-user}
                   :uri (str "/users/" (:id user))}
                  app)]
      (is (= updated-user (dissoc (:body res) :id))))))

(deftest delete-user
  (jdbc/with-transaction [tx test-db {:rollback-only true}]
    (let [user (hs.users.db/add-user! tx user-data)
          app (make-app tx "test")
          res (-> {:request-method :delete
                   :uri (str "/users/" (:id user))}
                  app)]
      (is (empty? (hs.users.db/all tx))))))
