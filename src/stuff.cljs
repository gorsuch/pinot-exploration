(ns pinot-exploration.stuff
  (:require [pinot.html :as ph]
            [pinot.html.tags :as tags])
  (:require-macros [pinot.macros :as pm]))

(defn test []
  (js/alert "this is a test"))

(test)

(pm/defpartial todo-form []
            (tags/form-to {:id "todoForm"} [:post "/todos"]
                     (tags/label "todoText" "Todo: ")
                     (tags/text-field "todoText")
                     (tags/submit-button {:class "submit"} "add todo")))

(ph/append-to (ph/dom-find "body")
              (ph/html
                [:div
                  (todo-form)]))
                    



