goog.provide('pinot.html');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.style');
goog.require('goog.dom.query');
goog.require('goog.dom.forms');
goog.require('clojure.string');
goog.require('pinot.util.clj');
goog.require('pinot.util.js');
/**
* @param {...*} var_args
*/
pinot.html.css = (function() { 
var css__delegate = function (elem,k,p__5252){
var vec__5253__5254 = p__5252;
var v__5255 = cljs.core.nth.call(null,vec__5253__5254,0,null);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,k)))
{var G__5256__5257 = cljs.core.seq.call(null,k);

while(true){
if(cljs.core.truth_(G__5256__5257))
{var vec__5258__5259 = cljs.core.first.call(null,G__5256__5257);
var prop__5260 = cljs.core.nth.call(null,vec__5258__5259,0,null);
var value__5261 = cljs.core.nth.call(null,vec__5258__5259,1,null);

css.call(null,elem,prop__5260,value__5261);
{
var G__5265 = cljs.core.next.call(null,G__5256__5257);
G__5256__5257 = G__5265;
continue;
}
} else
{return null;
}
break;
}
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,v__5255)))
{return goog.style.getStyle.call(null,elem,cljs.core.name.call(null,k));
} else
{if(cljs.core.truth_("﷐'else"))
{var G__5262__5263 = cljs.core.seq.call(null,pinot.util.clj.__GT_coll.call(null,elem));

while(true){
if(cljs.core.truth_(G__5262__5263))
{var el__5264 = cljs.core.first.call(null,G__5262__5263);

goog.style.setStyle.call(null,el__5264,cljs.core.name.call(null,k),cljs.core.name.call(null,v__5255));
{
var G__5266 = cljs.core.next.call(null,G__5262__5263);
G__5262__5263 = G__5266;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
}
}
};
var css = function (elem,k,var_args){
var p__5252 = null;
if (goog.isDef(var_args)) {
  p__5252 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return css__delegate.call(this, elem, k, p__5252);
};
css.cljs$lang$maxFixedArity = 2;
css.cljs$lang$applyTo = (function (arglist__5267){
var elem = cljs.core.first(arglist__5267);
var k = cljs.core.first(cljs.core.next(arglist__5267));
var p__5252 = cljs.core.rest(cljs.core.next(arglist__5267));
return css__delegate.call(this, elem, k, p__5252);
});
return css;
})()
;
pinot.html.attr = (function attr(elem,attrs){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.map_QMARK_.call(null,attrs))))
{return (elem[cljs.core.name.call(null,attrs)]);
} else
{var G__5268__5269 = cljs.core.seq.call(null,pinot.util.clj.__GT_coll.call(null,elem));

while(true){
if(cljs.core.truth_(G__5268__5269))
{var el__5270 = cljs.core.first.call(null,G__5268__5269);

goog.dom.setProperties.call(null,el__5270,pinot.util.js.map__GT_js.call(null,attrs));
{
var G__5271 = cljs.core.next.call(null,G__5268__5269);
G__5268__5269 = G__5271;
continue;
}
} else
{return null;
}
break;
}
}
});
/**
* @param {...*} var_args
*/
pinot.html.val = (function() { 
var val__delegate = function (elem,p__5272){
var vec__5273__5274 = p__5272;
var v__5275 = cljs.core.nth.call(null,vec__5273__5274,0,null);

var elem__5276 = (cljs.core.truth_(cljs.core.seq.call(null,elem))?cljs.core.first.call(null,elem):elem);

if(cljs.core.truth_(v__5275))
{return goog.dom.forms.setValue.call(null,elem__5276,v__5275);
} else
{return goog.dom.forms.getValue.call(null,elem__5276);
}
};
var val = function (elem,var_args){
var p__5272 = null;
if (goog.isDef(var_args)) {
  p__5272 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return val__delegate.call(this, elem, p__5272);
};
val.cljs$lang$maxFixedArity = 1;
val.cljs$lang$applyTo = (function (arglist__5277){
var elem = cljs.core.first(arglist__5277);
var p__5272 = cljs.core.rest(arglist__5277);
return val__delegate.call(this, elem, p__5272);
});
return val;
})()
;
pinot.html.elem_id = cljs.core.atom.call(null,0);
pinot.html.as_content = (function as_content(parent,content){
var G__5278__5279 = cljs.core.seq.call(null,content);

while(true){
if(cljs.core.truth_(G__5278__5279))
{var c__5280 = cljs.core.first.call(null,G__5278__5279);

var child__5281 = (cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c__5280))?null:(cljs.core.truth_(cljs.core.map_QMARK_.call(null,c__5280))?(function(){throw "Maps cannot be used as content"})():(cljs.core.truth_(cljs.core.string_QMARK_.call(null,c__5280))?goog.dom.createTextNode.call(null,c__5280):(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,c__5280))?pinot.html.elem_factory.call(null,c__5280):(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,c__5280))?as_content.call(null,parent,c__5280):(cljs.core.truth_(c__5280.nodeName)?c__5280:null))))));

if(cljs.core.truth_(child__5281))
{goog.dom.appendChild.call(null,parent,child__5281);
} else
{}
{
var G__5282 = cljs.core.next.call(null,G__5278__5279);
G__5278__5279 = G__5282;
continue;
}
} else
{return null;
}
break;
}
});
/**
* Regular expression that parses a CSS-style id and class from a tag name.
*/
pinot.html.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
/**
* Ensure a tag vector is of the form [tag-name attrs content].
*/
pinot.html.normalize_element = (function normalize_element(p__5283){
var vec__5284__5285 = p__5283;
var tag__5286 = cljs.core.nth.call(null,vec__5284__5285,0,null);
var content__5287 = cljs.core.nthnext.call(null,vec__5284__5285,1);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3576__auto____5288 = cljs.core.keyword_QMARK_.call(null,tag__5286);

if(cljs.core.truth_(or__3576__auto____5288))
{return or__3576__auto____5288;
} else
{var or__3576__auto____5289 = cljs.core.symbol_QMARK_.call(null,tag__5286);

if(cljs.core.truth_(or__3576__auto____5289))
{return or__3576__auto____5289;
} else
{return cljs.core.string_QMARK_.call(null,tag__5286);
}
}
})())))
{throw cljs.core.str.call(null,tag__5286," is not a valid tag name.");
} else
{}
var vec__5290__5291 = cljs.core.re_matches.call(null,pinot.html.re_tag,cljs.core.name.call(null,tag__5286));
var ___5292 = cljs.core.nth.call(null,vec__5290__5291,0,null);
var tag__5293 = cljs.core.nth.call(null,vec__5290__5291,1,null);
var id__5294 = cljs.core.nth.call(null,vec__5290__5291,2,null);
var class$__5295 = cljs.core.nth.call(null,vec__5290__5291,3,null);
var tag_attrs__5297 = cljs.core.ObjMap.fromObject(["﷐'id","﷐'class"],{"﷐'id":(function (){var or__3576__auto____5296 = id__5294;

if(cljs.core.truth_(or__3576__auto____5296))
{return or__3576__auto____5296;
} else
{return null;
}
})(),"﷐'class":(cljs.core.truth_(class$__5295)?clojure.string.replace.call(null,class$__5295,/\./," "):null)});
var map_attrs__5298 = cljs.core.first.call(null,content__5287);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,map_attrs__5298)))
{return cljs.core.Vector.fromArray([tag__5293,cljs.core.merge.call(null,tag_attrs__5297,map_attrs__5298),cljs.core.next.call(null,content__5287)]);
} else
{return cljs.core.Vector.fromArray([tag__5293,tag_attrs__5297,content__5287]);
}
});
pinot.html.parse_content = (function parse_content(elem,content){
var attrs__5299 = cljs.core.first.call(null,content);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,attrs__5299)))
{pinot.html.attr.call(null,elem,attrs__5299);
return cljs.core.rest.call(null,content);
} else
{return content;
}
});
pinot.html.elem_factory = (function elem_factory(tag_def){
var vec__5300__5301 = pinot.html.normalize_element.call(null,tag_def);
var tag__5302 = cljs.core.nth.call(null,vec__5300__5301,0,null);
var attrs__5303 = cljs.core.nth.call(null,vec__5300__5301,1,null);
var content__5304 = cljs.core.nth.call(null,vec__5300__5301,2,null);
var elem__5305 = goog.dom.createElement.call(null,tag__5302,pinot.util.js.map__GT_js.call(null,attrs__5303));

pinot.html.attr.call(null,elem__5305,cljs.core.ObjMap.fromObject(["﷐'pinotId"],{"﷐'pinotId":cljs.core.swap_BANG_.call(null,pinot.html.elem_id,cljs.core.inc)}));
pinot.html.as_content.call(null,elem__5305,content__5304);
return elem__5305;
});
/**
* @param {...*} var_args
*/
pinot.html.html = (function() { 
var html__delegate = function (tags){
return cljs.core.map.call(null,pinot.html.elem_factory,tags);
};
var html = function (var_args){
var tags = null;
if (goog.isDef(var_args)) {
  tags = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return html__delegate.call(this, tags);
};
html.cljs$lang$maxFixedArity = 0;
html.cljs$lang$applyTo = (function (arglist__5306){
var tags = cljs.core.seq( arglist__5306 );;
return html__delegate.call(this, tags);
});
return html;
})()
;
pinot.html.dom_clone = (function dom_clone(elem){
var neue__5307 = elem.cloneNode(true);

pinot.html.attr.call(null,neue__5307,cljs.core.ObjMap.fromObject(["﷐'pinotId"],{"﷐'pinotId":elem.pinotId}));
return neue__5307;
});
pinot.html.append_to = (function append_to(elem,html){
var G__5308__5310 = cljs.core.seq.call(null,pinot.util.clj.__GT_coll.call(null,elem));

while(true){
if(cljs.core.truth_(G__5308__5310))
{var el__5311 = cljs.core.first.call(null,G__5308__5310);

var G__5309__5312 = cljs.core.seq.call(null,pinot.util.clj.__GT_coll.call(null,html));

while(true){
if(cljs.core.truth_(G__5309__5312))
{var tag__5313 = cljs.core.first.call(null,G__5309__5312);

goog.dom.appendChild.call(null,el__5311,pinot.html.dom_clone.call(null,tag__5313));
{
var G__5314 = cljs.core.next.call(null,G__5309__5312);
G__5309__5312 = G__5314;
continue;
}
} else
{}
break;
}
{
var G__5315 = cljs.core.next.call(null,G__5308__5310);
G__5308__5310 = G__5315;
continue;
}
} else
{return null;
}
break;
}
});
pinot.html.unappend = (function unappend(elem){
var G__5316__5317 = cljs.core.seq.call(null,pinot.util.clj.__GT_coll.call(null,elem));

while(true){
if(cljs.core.truth_(G__5316__5317))
{var elem__5318 = cljs.core.first.call(null,G__5316__5317);

goog.dom.removeNode.call(null,elem__5318);
{
var G__5319 = cljs.core.next.call(null,G__5316__5317);
G__5316__5317 = G__5319;
continue;
}
} else
{return null;
}
break;
}
});
pinot.html.dom_find = (function dom_find(q){
var results__5320 = goog.dom.query.call(null,q);
var len__5321 = results__5320.length;

var iter__3197__auto____5326 = (function iter__5322(s__5323){
return (new cljs.core.LazySeq(null,false,(function (){
var s__5323__5324 = s__5323;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__5323__5324)))
{var x__5325 = cljs.core.first.call(null,s__5323__5324);

return cljs.core.cons.call(null,(results__5320[x__5325]),iter__5322.call(null,cljs.core.rest.call(null,s__5323__5324)));
} else
{return null;
}
break;
}
})));
});

return iter__3197__auto____5326.call(null,cljs.core.range.call(null,0,len__5321));
});
