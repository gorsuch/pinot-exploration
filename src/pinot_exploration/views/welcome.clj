(ns pinot-exploration.views.welcome
  (:require [pinot-exploration.views.common :as common]
            [noir.content.pages :as pages])
  (:use noir.core
        hiccup.core
        hiccup.page-helpers))

(defpage "/" []
         (common/layout
           [:p "Welcome to pinot-exploration"]))
