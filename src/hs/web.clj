(ns hs.web
  (:require [compojure.core :refer [defroutes GET DELETE POST PATCH]]
            [compojure.route :refer [resources]]
            [hs.db :refer [dev-db]]
            hs.users.handlers
            [mount.core :refer [defstate]]
            [org.httpkit.server :refer [run-server]]
            [ring.middleware.json :refer [wrap-json-response wrap-json-params]]
            [ring.middleware.keyword-params :refer [wrap-keyword-params]]))
(defn wrap-cors [handler]
  (fn [request]
    (-> (handler request)
        (assoc-in [:headers "Access-Control-Allow-Origin"] "*")
        (assoc-in [:headers "Access-Control-Allow-Headers"] "Origin, X-Requested-With, Content-Type, Accept, Authorization")
        (assoc-in [:headers "Access-Control-Allow-Methods"] "GET, PATCH, PUT, POST, DELETE"))))

(defroutes app-routes
  (GET "/users" req (hs.users.handlers/users req))
  (POST "/users" req (hs.users.handlers/create req))
  (PATCH "/users/:id" req (hs.users.handlers/upd req))
  (DELETE "/users/:id" req (hs.users.handlers/delete req))
  (resources "/"))


(defn apply-by-env [handler conditional-handler]
  (let [wrapped (conditional-handler handler)]
    (fn [req]
      (if (= (:env req) "test")
        (handler req)
        (wrapped req)))))
(def app
  (-> app-routes
      wrap-keyword-params
      wrap-json-params
      (apply-by-env wrap-json-response)
      wrap-cors))
(defn make-app [db env]
  (fn [req]
    (app (merge req {:db db :env env}))))

(def dev-app (make-app dev-db (System/getenv "CLJ_ENV")))
(defn start-server [] (run-server #'dev-app {:port 3001}))

(defstate server
  :start (start-server)
  :stop (server))
