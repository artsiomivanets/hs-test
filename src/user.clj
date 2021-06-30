(ns user
  (:require [hs.db :refer [dev-db test-db]]
            [hs.web :refer [make-app]]
            [next.jdbc :as jdbc]))

(hs.users.db/all dev-db)
(hs.users.db/add-user! dev-db {:first-name "hetadsf"
                               :birthday "1996-10-10"})

(jdbc/execute! test-db ["select * from users;"])
