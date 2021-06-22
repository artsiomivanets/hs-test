(ns client.users.core
  (:require [re-frisk.core :as re-frisk]
            [re-frame.core :as rf]
            [reagent.dom :as rd]
            [client.users.views]
            [client.users.events]
            [client.users.subs]))

(defn mount-ui []
  (rd/render [client.users.views/address-widget]
             (-> js/document
                 (.querySelector "#address-widget"))))

(defn run []
  (try
    (let [default-value (-> js/document
                            (.querySelector "#address-widget textarea")
                            (.-value))]
      (rf/dispatch [:change-value :address default-value])
      (mount-ui))))
(run)

(comment
  (re-frisk/enable))
