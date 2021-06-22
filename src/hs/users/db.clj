(ns hs.users.db
  (:require [hs.db :refer [db-url]]
            [next.jdbc.result-set :as rs]
            [next.jdbc.sql :refer [find-by-keys delete! get-by-id insert! query update!]]))

(defn snake-case [s] (clojure.string/replace s #"-" "_"))
(defn all []
  (query db-url
         ["select * from users"]
         {:builder-fn rs/as-unqualified-kebab-maps}))

(defn find-by-id [id]
  (get-by-id db-url
             :users
             id
             {:builder-fn rs/as-unqualified-kebab-maps}))
(defn where [keys]
  (find-by-keys db-url
                :users
                (if (empty? (:birthday keys)) keys
                    (update keys :birthday #(java.time.LocalDate/parse %)))
                {:column-fn snake-case
                 :builder-fn rs/as-unqualified-kebab-maps}))

(defn add-user! [data]
  (insert! db-url
           :users
           (update data :birthday #(java.time.LocalDate/parse %))
           {:column-fn snake-case}))

(defn delete-user! [id]
  (delete! db-url :users {:id id}))

(defn update-user! [data by]
  (update! db-url
           :users
           (update data :birthday #(java.time.LocalDate/parse %))
           by
           {:column-fn snake-case}))

(update-in {:a 1} [:b] #(cond (not-empty %) inc))
