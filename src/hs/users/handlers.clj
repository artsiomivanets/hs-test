(ns hs.users.handlers
  (:require [hiccup.core :refer [html]]
            [hiccup.page :refer [include-js]]
            [hs.users.views]
            [hs.users.db]
            [ring.util.response :refer [redirect response content-type]]
            [struct.core :as st]))

(def required "Field is required.")
(def user-schema
  {:first-name [[st/required :message required]]
   :last-name [[st/required :message required] st/string]
   :id [st/number-str]
   :address [[st/required :message required] st/string]
   :health-insurance-number [[st/required :message required]
                             [st/max-count 16 :message "Health insurance number has to be 16 characters length"]
                             [st/min-count 16 :message "Health insurance number has to be 16 characters length"]
                             st/string]
   :birthday [[st/required :message required] st/string]})


(defn layout [& body]
  (html
   [:link {:href "https://unpkg.com/tailwindcss/dist/tailwind.min.css" :rel "stylesheet"}]
   [:div {:class "container w-4/5 mx-auto pt-52"}
    body
    (include-js "/cljs-out/main.js")]))

(defn render [& body]
  (-> body layout response (content-type "text/html")))
(defn index [_]
  (-> (hs.users.db/all)
      hs.users.views/show-users
      render))
(defn new-user [_]
  (-> (hs.users.views/new-user)
      render))
(defn show [])
(defn edit [id]
  (-> id
      Integer/parseInt
      hs.users.db/find-by-id
      hs.users.views/edit-user
      render))

(defn upd [{:keys [params]}]
  (let [[errors _] (st/validate user-schema (-> params :user))]
    (println (-> params :user))
    (if (empty? errors)
      (do (-> params
              :user
              (hs.users.db/update-user! {:id (-> params :id Integer/parseInt)}))
          (redirect "/users"))
      (-> (hs.users.views/edit-user (assoc (:user params) :id (:id params)) errors)
          render))))
(defn delete [id]
  (hs.users.db/delete-user! (-> id Integer/parseInt))
  (redirect "/users"))

(defn create [{:keys [params]}]
  (let [[errors validated-data] (st/validate user-schema (-> params :user))]
    (if (empty? errors)
      (do (hs.users.db/add-user! validated-data)
          (redirect "/users"))
      (-> (hs.users.views/new-user validated-data errors)
          render))))
