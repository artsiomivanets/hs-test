(ns hs.system
  (:require [mount.core :as m]
            [hs.web]
            [hs.config]
            [clojure.tools.namespace.repl :refer [refresh]]))

(defn start []
  (m/start #'hs.web/server))

(defn stop []
  (m/stop #'hs.web/server))

(defn -main [& args]
  (start))

(comment
  (refresh)
  (start)
  (stop))
