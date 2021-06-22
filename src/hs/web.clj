(ns hs.web
  (:require [compojure.core :refer [defroutes DELETE GET PATCH POST]]
            [compojure.route :refer [resources]]
            hs.users.handlers
            [mount.core :refer [defstate]]
            [org.httpkit.server :refer [run-server]]
            [ring.middleware.keyword-params :refer [wrap-keyword-params]]
            [ring.middleware.nested-params :refer [wrap-nested-params]]
            [ring.middleware.params :refer [wrap-params]]))

(defroutes app-routes
  (POST "/users" req (hs.users.handlers/create req))
  (GET "/users" req hs.users.handlers/index)
  (GET "/users/new" req hs.users.handlers/new-user)
  (GET "/users/:id" [id] (hs.users.handlers/show id))
  (GET "/users/:id/edit" [id] (hs.users.handlers/edit id))
  (PATCH "/users/:id" req (hs.users.handlers/upd req))
  (DELETE "/users/:id" [id] (hs.users.handlers/delete id))
  (resources "/"))

(defn app [req]
  ((-> app-routes
       wrap-keyword-params
       wrap-nested-params
       wrap-params) req))

(defn start-server [] (run-server #'app {:port 3001}))

(defstate server
  :start (start-server)
  :stop (server))
