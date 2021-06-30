(ns hs.users.db
  (:require [next.jdbc.result-set :as rs]
            [next.jdbc.sql :refer [get-by-id delete! insert! query update!]]))

(defn date-format [date]
  (-> (java.text.SimpleDateFormat. "yyyy-MM-dd")
      (.format date)))

(date-format (java.util.Date.))

(extend-protocol rs/ReadableColumn
  java.sql.Date
  (rs/read-column-by-label [^java.sql.Date v _]
    (date-format v))
  (rs/read-column-by-index [^java.sql.Date v _2 _3]
    (date-format v)))

(defn snake-case [s] (clojure.string/replace s #"-" "_"))
(defn all [db]
  (query db
         ["select * from users"]
         {:builder-fn rs/as-unqualified-kebab-maps}))

(defn find-by-id [db id]
  (get-by-id db
              :users
              id
              {:builder-fn rs/as-unqualified-kebab-maps}))

(defn add-user! [db data]
  (insert! db
           :users
           (update data :birthday #(java.time.LocalDate/parse %))
           {:column-fn snake-case
            :builder-fn rs/as-unqualified-kebab-maps}))

(defn delete-user! [db id]
  (:next.jdbc/update-count
   (delete! db
            :users
            {:id id})))

(defn update-user! [db data by]
  (:next.jdbc/update-count
   (update! db
            :users
            (update data :birthday #(java.time.LocalDate/parse %))
            by
            {:column-fn snake-case})))
