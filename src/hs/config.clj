(ns hs.config
  (:require [cprop.core :refer [load-config]]
            [cprop.source :refer [from-env]]))


(def paths {"test" "src/test/config.edn"
            "development" "src/dev/config.edn"})
(def env (get (System/getenv) "CLJ_ENV" "development"))
(def cfg (load-config :file (get paths env)
                      :merge [(from-env)]))
