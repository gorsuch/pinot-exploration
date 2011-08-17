goog.provide('pinot.util.clj');
goog.require('cljs.core');
pinot.util.clj.__GT_coll = (function __GT_coll(c){
if(cljs.core.truth_(cljs.core.coll_QMARK_.call(null,c)))
{return c;
} else
{return cljs.core.Vector.fromArray([c]);
}
});
