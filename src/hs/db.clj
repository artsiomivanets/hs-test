(ns hs.db
  (:require [hs.config :refer [cfg]]
            [migratus.core :as migratus]))

(def ^:dynamic db-url (:db-url cfg))
(def config {:store :database
             :migration-dir "migrations"
             :init-script "init.sql"
             :init-in-transaction? false
             :db {:connection-uri db-url}})

(comment
  (migratus/init config)

  (migratus/migrate config)

  (migratus/rollback config)

  (migratus/up config)

  (migratus/create config "test")

  (migratus/down config))
