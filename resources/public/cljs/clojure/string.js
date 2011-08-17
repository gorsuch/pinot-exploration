goog.provide('clojure.string');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
clojure.string.seq_reverse = (function seq_reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
});
/**
* Returns s with its characters reversed.
*/
clojure.string.reverse = (function reverse(s){
if(cljs.core.truth_(cljs.core._EQ_.call(null,s.length,0)))
{return "";
} else
{var sb__5335 = (new goog.string.StringBuffer());

var coll__5336 = clojure.string.seq_reverse.call(null,cljs.core.seq.call(null,s.split("")));

while(true){
if(cljs.core.truth_(coll__5336))
{sb__5335.append(cljs.core.first.call(null,coll__5336));
{
var G__5337 = cljs.core.next.call(null,coll__5336);
coll__5336 = G__5337;
continue;
}
} else
{}
break;
}
return sb__5335.toString();
}
});
/**
* Replaces all instance of match with replacement in s.
* match/replacement can be:
* 
* string / string
* pattern / (string or function of match).
*/
clojure.string.replace = (function replace(s,match,replacement){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,match)))
{return s.replace((new goog.global['RegExp'](goog.string.regExpEscape.call(null,match),"g")),replacement);
} else
{if(cljs.core.truth_(match.hasOwnProperty("source")))
{return s.replace((new goog.global['RegExp'](match.source,"g")),replacement);
} else
{if(cljs.core.truth_("﷐'else"))
{throw cljs.core.str.call(null,"Invalid match arg: ",match);
} else
{return null;
}
}
}
});
/**
* Replaces the first instance of match with replacement in s.
* match/replacement can be:
* 
* string / string
* pattern / (string or function of match).
*/
clojure.string.replace_first = (function replace_first(s,match,replacement){
return s.replace(match,replacement);
});
/**
* Returns a string of all elements in coll, as returned by (seq coll),
* separated by an optional separator.
*/
clojure.string.join = (function() {
var join = null;
var join__5338 = (function (coll){
return cljs.core.apply.call(null,cljs.core.str,coll);
});
var join__5339 = (function (separator,coll){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,separator,coll));
});
join = function(separator,coll){
switch(arguments.length){
case  1 :
return join__5338.call(this,separator);
case  2 :
return join__5339.call(this,separator,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return join;
})()
;
/**
* Converts string to all upper-case.
*/
clojure.string.upper_case = (function upper_case(s){
return s.toUpperCase();
});
/**
* Converts string to all lower-case.
*/
clojure.string.lower_case = (function lower_case(s){
return s.toLowerCase();
});
/**
* Converts first character of the string to upper-case, all other
* characters to lower-case.
*/
clojure.string.capitalize = (function capitalize(s){
if(cljs.core.truth_(cljs.core._LT_.call(null,cljs.core.count.call(null,s),2)))
{return clojure.string.upper_case.call(null,s);
} else
{return cljs.core.str.call(null,clojure.string.upper_case.call(null,cljs.core.subs.call(null,s,0,1)),clojure.string.lower_case.call(null,cljs.core.subs.call(null,s,1)));
}
});
/**
* Splits string on a regular expression. Optional argument limit is
* the maximum number of splits. Not lazy. Returns vector of the splits.
*/
clojure.string.split = (function() {
var split = null;
var split__5347 = (function (s,re){
return cljs.core.vec.call(null,cljs.core.str.call(null,s).split(re));
});
var split__5348 = (function (s,re,limit){
if(cljs.core.truth_(cljs.core._LT_.call(null,limit,1)))
{return cljs.core.vec.call(null,cljs.core.str.call(null,s).split(re));
} else
{var s__5341 = s;
var limit__5342 = limit;
var parts__5343 = cljs.core.Vector.fromArray([]);

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,limit__5342,1)))
{return cljs.core.conj.call(null,parts__5343,s__5341);
} else
{var temp__3723__auto____5344 = cljs.core.re_find.call(null,re,s__5341);

if(cljs.core.truth_(temp__3723__auto____5344))
{var m__5345 = temp__3723__auto____5344;

var index__5346 = s__5341.indexOf(m__5345);

{
var G__5350 = s__5341.substring(cljs.core._PLUS_.call(null,index__5346,cljs.core.count.call(null,m__5345)));
var G__5351 = cljs.core.dec.call(null,limit__5342);
var G__5352 = cljs.core.conj.call(null,parts__5343,s__5341.substring(0,index__5346));
s__5341 = G__5350;
limit__5342 = G__5351;
parts__5343 = G__5352;
continue;
}
} else
{return cljs.core.conj.call(null,parts__5343,s__5341);
}
}
break;
}
}
});
split = function(s,re,limit){
switch(arguments.length){
case  2 :
return split__5347.call(this,s,re);
case  3 :
return split__5348.call(this,s,re,limit);
}
throw('Invalid arity: ' + arguments.length);
};
return split;
})()
;
/**
* Splits s on
* or
* .
*/
clojure.string.split_lines = (function split_lines(s){
return clojure.string.split.call(null,s,/\n|\r\n/);
});
/**
* Removes whitespace from both ends of string.
*/
clojure.string.trim = (function trim(s){
return goog.string.trim.call(null,s);
});
/**
* Removes whitespace from the left side of string.
*/
clojure.string.triml = (function triml(s){
return goog.string.trimLeft.call(null,s);
});
/**
* Removes whitespace from the right side of string.
*/
clojure.string.trimr = (function trimr(s){
return goog.string.trimRight.call(null,s);
});
/**
* Removes all trailing newline \n or return \r characters from
* string.  Similar to Perl's chomp.
*/
clojure.string.trim_newline = (function trim_newline(s){
var index__5353 = s.length;

while(true){
if(cljs.core.truth_(cljs.core.zero_QMARK_.call(null,index__5353)))
{return "";
} else
{var ch__5354 = cljs.core.get.call(null,s,cljs.core.dec.call(null,index__5353));

if(cljs.core.truth_((function (){var or__3576__auto____5355 = cljs.core._EQ_.call(null,ch__5354,"\n");

if(cljs.core.truth_(or__3576__auto____5355))
{return or__3576__auto____5355;
} else
{return cljs.core._EQ_.call(null,ch__5354,"\r");
}
})()))
{{
var G__5356 = cljs.core.dec.call(null,index__5353);
index__5353 = G__5356;
continue;
}
} else
{return s.substring(0,index__5353);
}
}
break;
}
});
/**
* True is s is nil, empty, or contains only whitespace.
*/
clojure.string.blank_QMARK_ = (function blank_QMARK_(s){
var s__5357 = cljs.core.str.call(null,s);

if(cljs.core.truth_((function (){var or__3576__auto____5358 = cljs.core.not.call(null,s__5357);

if(cljs.core.truth_(or__3576__auto____5358))
{return or__3576__auto____5358;
} else
{var or__3576__auto____5359 = cljs.core._EQ_.call(null,"",s__5357);

if(cljs.core.truth_(or__3576__auto____5359))
{return or__3576__auto____5359;
} else
{return cljs.core.re_matches.call(null,/\s+/,s__5357);
}
}
})()))
{return true;
} else
{return false;
}
});
/**
* Return a new string, using cmap to escape each character ch
* from s as follows:
* 
* If (cmap ch) is nil, append ch to the new string.
* If (cmap ch) is non-nil, append (str (cmap ch)) instead.
*/
clojure.string.escape = (function escape(s,cmap){
var buffer__5360 = (new goog.string.StringBuffer());
var length__5361 = s.length;

var index__5362 = 0;

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,length__5361,index__5362)))
{return buffer__5360.toString();
} else
{var ch__5363 = s.charAt(index__5362);

var temp__3723__auto____5364 = cljs.core.get.call(null,cmap,ch__5363);

if(cljs.core.truth_(temp__3723__auto____5364))
{var replacement__5365 = temp__3723__auto____5364;

buffer__5360.append(cljs.core.str.call(null,replacement__5365));
} else
{buffer__5360.append(ch__5363);
}
{
var G__5366 = cljs.core.inc.call(null,index__5362);
index__5362 = G__5366;
continue;
}
}
break;
}
});
