(ns pinot-exploration.views.common
  (:use noir.core
        hiccup.core
        hiccup.page-helpers))

(defpartial layout [& content]
            (html5
              [:head
               [:title "pinot-exploration"]
               (include-css "/css/reset.css")]
              [:body
               [:div#wrapper
                content] 
               (include-js "/cljs/bootstrap.js")]))
