(ns client.users.core
  (:require [re-frisk.core :as re-frisk]
            [reagent.dom :as rd]
            [re-frame.core :as rf]
            [client.users.views]
            [client.users.events]
            [client.users.subs]))

(defn mount-ui []
  (rd/render [client.users.views/main]
             (-> js/document
                 (.querySelector "#app"))))


(defn run []
  (rf/dispatch [:initialize])
  (mount-ui))
(run)

(comment
  (re-frisk/enable))
