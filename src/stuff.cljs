(ns pinot-exploration.stuff
  (:require [pinot.html :as ph]
            [pinot.html.tags :as tags]
            [pinot.events :as pe])
  (:require-macros [pinot.macros :as pm]))

(pe/on (ph/dom-find "div#wrapper") :click
  (fn [me e]
    (js/alert "click!")))
