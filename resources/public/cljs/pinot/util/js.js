goog.provide('pinot.util.js');
goog.require('cljs.core');
pinot.util.js.map__GT_js = (function map__GT_js(m){
var out__5327 = cljs.core.js_obj.call(null);

var G__5328__5329 = cljs.core.seq.call(null,m);

while(true){
if(cljs.core.truth_(G__5328__5329))
{var vec__5330__5331 = cljs.core.first.call(null,G__5328__5329);
var k__5332 = cljs.core.nth.call(null,vec__5330__5331,0,null);
var v__5333 = cljs.core.nth.call(null,vec__5330__5331,1,null);

(out__5327[cljs.core.name.call(null,k__5332)] = v__5333);
{
var G__5334 = cljs.core.next.call(null,G__5328__5329);
G__5328__5329 = G__5334;
continue;
}
} else
{}
break;
}
return out__5327;
});
pinot.util.js.log = (function log(text){
return console.log(text);
});
