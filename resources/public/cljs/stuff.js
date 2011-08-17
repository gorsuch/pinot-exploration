goog.provide('pinot_exploration.stuff');
goog.require('cljs.core');
pinot_exploration.stuff.test = (function test(){
return goog.global['alert'].call(null,"this is a test");
});
goog.global['alert'].call(null,"hi!");
pinot_exploration.stuff.test.call(null);
