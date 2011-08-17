(ns pinot-exploration.server
  (:require [noir.server :as server]
            [noir.util.cljs]))

(server/add-middleware noir.util.cljs/wrap-cljs)

(server/load-views "src/pinot_exploration/views/")

(defn -main [& m]
  (let [mode (keyword (or (first m) :dev))
        port (Integer. (get (System/getenv) "PORT" "8080"))]
    (server/start port {:mode mode
                        :ns 'pinot-exploration})))

