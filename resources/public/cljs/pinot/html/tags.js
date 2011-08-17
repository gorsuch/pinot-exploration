goog.provide('pinot.html.tags');
goog.require('cljs.core');
/**
* Add an optional attribute argument to a function that returns a vector tag.
*/
pinot.html.tags.add_optional_attrs = (function add_optional_attrs(func){
return (function() { 
var G__5371__delegate = function (args){
if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))))
{var vec__5367__5368 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag__5369 = cljs.core.nth.call(null,vec__5367__5368,0,null);
var body__5370 = cljs.core.nthnext.call(null,vec__5367__5368,1);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body__5370))))
{return cljs.core.apply.call(null,cljs.core.vector,tag__5369,cljs.core.merge.call(null,cljs.core.first.call(null,body__5370),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body__5370));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag__5369,cljs.core.first.call(null,args),body__5370);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__5371 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__5371__delegate.call(this, args);
};
G__5371.cljs$lang$maxFixedArity = 0;
G__5371.cljs$lang$applyTo = (function (arglist__5372){
var args = cljs.core.seq( arglist__5372 );;
return G__5371__delegate.call(this, args);
});
return G__5371;
})()
;
});
var func__5228__auto____5378 = (function() { 
var G__5379__delegate = function (p__5373,content){
var vec__5374__5375 = p__5373;
var method__5376 = cljs.core.nth.call(null,vec__5374__5375,0,null);
var action__5377 = cljs.core.nth.call(null,vec__5374__5375,1,null);

return cljs.core.Vector.fromArray(["﷐'form",cljs.core.ObjMap.fromObject(["﷐'method","﷐'action"],{"﷐'method":cljs.core.name.call(null,method__5376),"﷐'action":action__5377}),content]);
};
var G__5379 = function (p__5373,var_args){
var content = null;
if (goog.isDef(var_args)) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__5379__delegate.call(this, p__5373, content);
};
G__5379.cljs$lang$maxFixedArity = 1;
G__5379.cljs$lang$applyTo = (function (arglist__5380){
var p__5373 = cljs.core.first(arglist__5380);
var content = cljs.core.rest(arglist__5380);
return G__5379__delegate.call(this, p__5373, content);
});
return G__5379;
})()
;

pinot.html.tags.form_to = pinot.html.tags.add_optional_attrs.call(null,func__5228__auto____5378);
var func__5228__auto____5384 = (function (tpe,nme,value){
return cljs.core.Vector.fromArray(["﷐'input",cljs.core.ObjMap.fromObject(["﷐'type","﷐'name","﷐'id","﷐'value"],{"﷐'type":tpe,"﷐'name":(function (){var or__3576__auto____5381 = nme;

if(cljs.core.truth_(or__3576__auto____5381))
{return or__3576__auto____5381;
} else
{return null;
}
})(),"﷐'id":(function (){var or__3576__auto____5382 = nme;

if(cljs.core.truth_(or__3576__auto____5382))
{return or__3576__auto____5382;
} else
{return null;
}
})(),"﷐'value":(function (){var or__3576__auto____5383 = value;

if(cljs.core.truth_(or__3576__auto____5383))
{return or__3576__auto____5383;
} else
{return null;
}
})()})]);
});

pinot.html.tags.input_field = pinot.html.tags.add_optional_attrs.call(null,func__5228__auto____5384);
var func__5228__auto____5385 = (function (nme,value){
return pinot.html.tags.input_field.call(null,"text",nme,value);
});

pinot.html.tags.text_field = pinot.html.tags.add_optional_attrs.call(null,func__5228__auto____5385);
var func__5228__auto____5386 = (function (nme,value){
return pinot.html.tags.input_field.call(null,"password",nme,value);
});

pinot.html.tags.password_field = pinot.html.tags.add_optional_attrs.call(null,func__5228__auto____5386);
var func__5228__auto____5387 = (function (for$,text){
return cljs.core.Vector.fromArray(["﷐'label",cljs.core.ObjMap.fromObject(["﷐'for"],{"﷐'for":for$}),text]);
});

pinot.html.tags.label = pinot.html.tags.add_optional_attrs.call(null,func__5228__auto____5387);
var func__5228__auto____5388 = (function (val){
return pinot.html.tags.input_field.call(null,"submit",null,val);
});

pinot.html.tags.submit_button = pinot.html.tags.add_optional_attrs.call(null,func__5228__auto____5388);
var func__5228__auto____5389 = (function() { 
var G__5390__delegate = function (url,content){
return cljs.core.Vector.fromArray(["﷐'a",cljs.core.ObjMap.fromObject(["﷐'href"],{"﷐'href":url}),content]);
};
var G__5390 = function (url,var_args){
var content = null;
if (goog.isDef(var_args)) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__5390__delegate.call(this, url, content);
};
G__5390.cljs$lang$maxFixedArity = 1;
G__5390.cljs$lang$applyTo = (function (arglist__5391){
var url = cljs.core.first(arglist__5391);
var content = cljs.core.rest(arglist__5391);
return G__5390__delegate.call(this, url, content);
});
return G__5390;
})()
;

pinot.html.tags.link_to = pinot.html.tags.add_optional_attrs.call(null,func__5228__auto____5389);
