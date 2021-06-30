(ns hs.db
  (:require [migratus.core :as migratus]))

(defn make-config [db]
  {:store :database
   :migration-dir "migrations"
   :init-script "init.sql"
   :init-in-transaction? false
   :db {:connection-uri db}})

(def test-db "jdbc:postgresql://localhost/test?user=clojure&password=clojure")
(def dev-db "jdbc:postgresql://localhost/dev?user=clojure&password=clojure")
(def config (make-config dev-db))
(def test-config (make-config test-db))
(comment
  (migratus/init config)

  (migratus/migrate config)
  (migratus/migrate test-config)

  (migratus/rollback config)

  (migratus/up config)

  (migratus/create config "delete-name")

  (migratus/down config))
