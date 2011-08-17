goog.provide('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
goog.require('goog.object');
goog.require('goog.array');
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
var or__3576__auto____5187 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3576__auto____5187))
{return or__3576__auto____5187;
} else
{var or__3576__auto____5188 = (p["_"]);

if(cljs.core.truth_(or__3576__auto____5188))
{return or__3576__auto____5188;
} else
{return false;
}
}
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
return goog.global['Error'].call(null,"No protocol method "+proto+" defined for type "+goog.typeOf.call(null,obj)+": "+obj);
});
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return Array.prototype.slice.call(array_like);
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
/**
* Returns the value at the index.
*/
cljs.core.aget = (function aget(array,i){
return array[i];
});
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the Java array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3574__auto____5189 = coll;

if(cljs.core.truth_(and__3574__auto____5189))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3574__auto____5189;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3576__auto____5190 = (_count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____5190))
{return or__3576__auto____5190;
} else
{var or__3576__auto____5191 = (_count["_"]);

if(cljs.core.truth_(or__3576__auto____5191))
{return or__3576__auto____5191;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3574__auto____5192 = coll;

if(cljs.core.truth_(and__3574__auto____5192))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3574__auto____5192;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3576__auto____5193 = (_empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____5193))
{return or__3576__auto____5193;
} else
{var or__3576__auto____5194 = (_empty["_"]);

if(cljs.core.truth_(or__3576__auto____5194))
{return or__3576__auto____5194;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3574__auto____5195 = coll;

if(cljs.core.truth_(and__3574__auto____5195))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3574__auto____5195;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3576__auto____5196 = (_conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____5196))
{return or__3576__auto____5196;
} else
{var or__3576__auto____5197 = (_conj["_"]);

if(cljs.core.truth_(or__3576__auto____5197))
{return or__3576__auto____5197;
} else
{throw cljs.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__5204 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3574__auto____5198 = coll;

if(cljs.core.truth_(and__3574__auto____5198))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3574__auto____5198;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3576__auto____5199 = (_nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____5199))
{return or__3576__auto____5199;
} else
{var or__3576__auto____5200 = (_nth["_"]);

if(cljs.core.truth_(or__3576__auto____5200))
{return or__3576__auto____5200;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__5205 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3574__auto____5201 = coll;

if(cljs.core.truth_(and__3574__auto____5201))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3574__auto____5201;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3576__auto____5202 = (_nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____5202))
{return or__3576__auto____5202;
} else
{var or__3576__auto____5203 = (_nth["_"]);

if(cljs.core.truth_(or__3576__auto____5203))
{return or__3576__auto____5203;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return _nth__5204.call(this,coll,n);
case  3 :
return _nth__5205.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3574__auto____5207 = coll;

if(cljs.core.truth_(and__3574__auto____5207))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3574__auto____5207;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3576__auto____5208 = (_first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____5208))
{return or__3576__auto____5208;
} else
{var or__3576__auto____5209 = (_first["_"]);

if(cljs.core.truth_(or__3576__auto____5209))
{return or__3576__auto____5209;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3574__auto____5210 = coll;

if(cljs.core.truth_(and__3574__auto____5210))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3574__auto____5210;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3576__auto____5211 = (_rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____5211))
{return or__3576__auto____5211;
} else
{var or__3576__auto____5212 = (_rest["_"]);

if(cljs.core.truth_(or__3576__auto____5212))
{return or__3576__auto____5212;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__5219 = (function (o,k){
if(cljs.core.truth_((function (){var and__3574__auto____5213 = o;

if(cljs.core.truth_(and__3574__auto____5213))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3574__auto____5213;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3576__auto____5214 = (_lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____5214))
{return or__3576__auto____5214;
} else
{var or__3576__auto____5215 = (_lookup["_"]);

if(cljs.core.truth_(or__3576__auto____5215))
{return or__3576__auto____5215;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__5220 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3574__auto____5216 = o;

if(cljs.core.truth_(and__3574__auto____5216))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3574__auto____5216;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3576__auto____5217 = (_lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____5217))
{return or__3576__auto____5217;
} else
{var or__3576__auto____5218 = (_lookup["_"]);

if(cljs.core.truth_(or__3576__auto____5218))
{return or__3576__auto____5218;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case  2 :
return _lookup__5219.call(this,o,k);
case  3 :
return _lookup__5220.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3574__auto____5222 = coll;

if(cljs.core.truth_(and__3574__auto____5222))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3574__auto____5222;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3576__auto____5223 = (_contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____5223))
{return or__3576__auto____5223;
} else
{var or__3576__auto____5224 = (_contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3576__auto____5224))
{return or__3576__auto____5224;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3574__auto____5225 = coll;

if(cljs.core.truth_(and__3574__auto____5225))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3574__auto____5225;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3576__auto____5226 = (_assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____5226))
{return or__3576__auto____5226;
} else
{var or__3576__auto____5227 = (_assoc["_"]);

if(cljs.core.truth_(or__3576__auto____5227))
{return or__3576__auto____5227;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3574__auto____5228 = coll;

if(cljs.core.truth_(and__3574__auto____5228))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3574__auto____5228;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3576__auto____5229 = (_dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____5229))
{return or__3576__auto____5229;
} else
{var or__3576__auto____5230 = (_dissoc["_"]);

if(cljs.core.truth_(or__3576__auto____5230))
{return or__3576__auto____5230;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3574__auto____5231 = coll;

if(cljs.core.truth_(and__3574__auto____5231))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3574__auto____5231;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3576__auto____5232 = (_disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____5232))
{return or__3576__auto____5232;
} else
{var or__3576__auto____5233 = (_disjoin["_"]);

if(cljs.core.truth_(or__3576__auto____5233))
{return or__3576__auto____5233;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3574__auto____5234 = coll;

if(cljs.core.truth_(and__3574__auto____5234))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3574__auto____5234;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3576__auto____5235 = (_peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____5235))
{return or__3576__auto____5235;
} else
{var or__3576__auto____5236 = (_peek["_"]);

if(cljs.core.truth_(or__3576__auto____5236))
{return or__3576__auto____5236;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3574__auto____5237 = coll;

if(cljs.core.truth_(and__3574__auto____5237))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3574__auto____5237;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3576__auto____5238 = (_pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____5238))
{return or__3576__auto____5238;
} else
{var or__3576__auto____5239 = (_pop["_"]);

if(cljs.core.truth_(or__3576__auto____5239))
{return or__3576__auto____5239;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3574__auto____5240 = coll;

if(cljs.core.truth_(and__3574__auto____5240))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3574__auto____5240;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3576__auto____5241 = (_assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____5241))
{return or__3576__auto____5241;
} else
{var or__3576__auto____5242 = (_assoc_n["_"]);

if(cljs.core.truth_(or__3576__auto____5242))
{return or__3576__auto____5242;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3574__auto____5243 = o;

if(cljs.core.truth_(and__3574__auto____5243))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3574__auto____5243;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3576__auto____5244 = (_deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____5244))
{return or__3576__auto____5244;
} else
{var or__3576__auto____5245 = (_deref["_"]);

if(cljs.core.truth_(or__3576__auto____5245))
{return or__3576__auto____5245;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3574__auto____5246 = o;

if(cljs.core.truth_(and__3574__auto____5246))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3574__auto____5246;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3576__auto____5247 = (_deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____5247))
{return or__3576__auto____5247;
} else
{var or__3576__auto____5248 = (_deref_with_timeout["_"]);

if(cljs.core.truth_(or__3576__auto____5248))
{return or__3576__auto____5248;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3574__auto____5249 = o;

if(cljs.core.truth_(and__3574__auto____5249))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3574__auto____5249;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3576__auto____5250 = (_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____5250))
{return or__3576__auto____5250;
} else
{var or__3576__auto____5251 = (_meta["_"]);

if(cljs.core.truth_(or__3576__auto____5251))
{return or__3576__auto____5251;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3574__auto____5252 = o;

if(cljs.core.truth_(and__3574__auto____5252))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3574__auto____5252;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3576__auto____5253 = (_with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____5253))
{return or__3576__auto____5253;
} else
{var or__3576__auto____5254 = (_with_meta["_"]);

if(cljs.core.truth_(or__3576__auto____5254))
{return or__3576__auto____5254;
} else
{throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__5261 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3574__auto____5255 = coll;

if(cljs.core.truth_(and__3574__auto____5255))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3574__auto____5255;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3576__auto____5256 = (_reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____5256))
{return or__3576__auto____5256;
} else
{var or__3576__auto____5257 = (_reduce["_"]);

if(cljs.core.truth_(or__3576__auto____5257))
{return or__3576__auto____5257;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__5262 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3574__auto____5258 = coll;

if(cljs.core.truth_(and__3574__auto____5258))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3574__auto____5258;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3576__auto____5259 = (_reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____5259))
{return or__3576__auto____5259;
} else
{var or__3576__auto____5260 = (_reduce["_"]);

if(cljs.core.truth_(or__3576__auto____5260))
{return or__3576__auto____5260;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case  2 :
return _reduce__5261.call(this,coll,f);
case  3 :
return _reduce__5262.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3574__auto____5264 = o;

if(cljs.core.truth_(and__3574__auto____5264))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3574__auto____5264;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3576__auto____5265 = (_equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____5265))
{return or__3576__auto____5265;
} else
{var or__3576__auto____5266 = (_equiv["_"]);

if(cljs.core.truth_(or__3576__auto____5266))
{return or__3576__auto____5266;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3574__auto____5267 = o;

if(cljs.core.truth_(and__3574__auto____5267))
{return o.cljs$core$IHash$_hash;
} else
{return and__3574__auto____5267;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3576__auto____5268 = (_hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____5268))
{return or__3576__auto____5268;
} else
{var or__3576__auto____5269 = (_hash["_"]);

if(cljs.core.truth_(or__3576__auto____5269))
{return or__3576__auto____5269;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3574__auto____5270 = o;

if(cljs.core.truth_(and__3574__auto____5270))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3574__auto____5270;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3576__auto____5271 = (_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____5271))
{return or__3576__auto____5271;
} else
{var or__3576__auto____5272 = (_seq["_"]);

if(cljs.core.truth_(or__3576__auto____5272))
{return or__3576__auto____5272;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISequential = {};
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if(cljs.core.truth_((function (){var and__3574__auto____5273 = o;

if(cljs.core.truth_(and__3574__auto____5273))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3574__auto____5273;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3576__auto____5274 = (_pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____5274))
{return or__3576__auto____5274;
} else
{var or__3576__auto____5275 = (_pr_seq["_"]);

if(cljs.core.truth_(or__3576__auto____5275))
{return or__3576__auto____5275;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3574__auto____5276 = d;

if(cljs.core.truth_(and__3574__auto____5276))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3574__auto____5276;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3576__auto____5277 = (_realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3576__auto____5277))
{return or__3576__auto____5277;
} else
{var or__3576__auto____5278 = (_realized_QMARK_["_"]);

if(cljs.core.truth_(or__3576__auto____5278))
{return or__3576__auto____5278;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
cljs.core._EQ_ = (function _EQ_(x,y){
return cljs.core._equiv.call(null,x,y);
});
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return cljs.core.identical_QMARK_.call(null,x,null);
});
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return cljs.core.nil_QMARK_.call(null,o);
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.call(null);
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__5279 = null;
var G__5279__5280 = (function (_,n){
return null;
});
var G__5279__5281 = (function (_,n,not_found){
return not_found;
});
G__5279 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__5279__5280.call(this,_,n);
case  3 :
return G__5279__5281.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5279;
})()
);
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__5283 = null;
var G__5283__5284 = (function (_,f){
return f.call(null);
});
var G__5283__5285 = (function (_,f,start){
return start;
});
G__5283 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__5283__5284.call(this,_,f);
case  3 :
return G__5283__5285.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5283;
})()
);
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__5287 = null;
var G__5287__5288 = (function (o,k){
return null;
});
var G__5287__5289 = (function (o,k,not_found){
return not_found;
});
G__5287 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__5287__5288.call(this,o,k);
case  3 :
return G__5287__5289.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5287;
})()
);
goog.global['Date'].prototype.cljs$core$IEquiv$ = true;
goog.global['Date'].prototype.cljs$core$IEquiv$_equiv = (function (o,other){
return cljs.core.identical_QMARK_.call(null,o.toString,other.toString);
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return cljs.core.identical_QMARK_.call(null,x,o);
}));
(cljs.core.IHash["function"] = true);
(cljs.core._hash["function"] = (function (o){
return goog.getUid.call(null,o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});
cljs.core.lt_ = (function lt_(x,y){
return (x < y);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__5297 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__5291 = cljs.core._nth.call(null,cicoll,0);
var n__5292 = 1;

while(true){
if(cljs.core.truth_(cljs.core.lt_.call(null,n__5292,cljs.core._count.call(null,cicoll))))
{{
var G__5301 = f.call(null,val__5291,cljs.core._nth.call(null,cicoll,n__5292));
var G__5302 = cljs.core.inc.call(null,n__5292);
val__5291 = G__5301;
n__5292 = G__5302;
continue;
}
} else
{return val__5291;
}
break;
}
}
});
var ci_reduce__5298 = (function (cicoll,f,val){
var val__5293 = val;
var n__5294 = 0;

while(true){
if(cljs.core.truth_(cljs.core.lt_.call(null,n__5294,cljs.core._count.call(null,cicoll))))
{{
var G__5303 = f.call(null,val__5293,cljs.core._nth.call(null,cicoll,n__5294));
var G__5304 = cljs.core.inc.call(null,n__5294);
val__5293 = G__5303;
n__5294 = G__5304;
continue;
}
} else
{return val__5293;
}
break;
}
});
var ci_reduce__5299 = (function (cicoll,f,val,idx){
var val__5295 = val;
var n__5296 = idx;

while(true){
if(cljs.core.truth_(cljs.core.lt_.call(null,n__5296,cljs.core._count.call(null,cicoll))))
{{
var G__5305 = f.call(null,val__5295,cljs.core._nth.call(null,cicoll,n__5296));
var G__5306 = cljs.core.inc.call(null,n__5296);
val__5295 = G__5305;
n__5296 = G__5306;
continue;
}
} else
{return val__5295;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__5297.call(this,cicoll,f);
case  3 :
return ci_reduce__5298.call(this,cicoll,f,val);
case  4 :
return ci_reduce__5299.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
return ci_reduce;
})()
;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
})
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__5313 = null;
var G__5313__5314 = (function (_,f){
var this__5307 = this;
return cljs.core.ci_reduce.call(null,this__5307.a,f,(this__5307.a[this__5307.i]),cljs.core.inc.call(null,this__5307.i));
});
var G__5313__5315 = (function (_,f,start){
var this__5308 = this;
return cljs.core.ci_reduce.call(null,this__5308.a,f,start,this__5308.i);
});
G__5313 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__5313__5314.call(this,_,f);
case  3 :
return G__5313__5315.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5313;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__5309 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__5310 = this;
return (this__5310.a[this__5310.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__5311 = this;
if(cljs.core.truth_(cljs.core.lt_.call(null,cljs.core.inc.call(null,this__5311.i),this__5311.a.length)))
{return (new cljs.core.IndexedSeq(this__5311.a,cljs.core.inc.call(null,this__5311.i)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__5312 = this;
return this$;
});
cljs.core.prim_seq = (function prim_seq(prim,i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,prim.length)))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
cljs.core.array_seq = (function array_seq(array,i){
return cljs.core.prim_seq.call(null,array,i);
});
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__5317 = null;
var G__5317__5318 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__5317__5319 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__5317 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__5317__5318.call(this,array,f);
case  3 :
return G__5317__5319.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5317;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__5321 = null;
var G__5321__5322 = (function (array,k){
return (array[k]);
});
var G__5321__5323 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__5321 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__5321__5322.call(this,array,k);
case  3 :
return G__5321__5323.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5321;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__5325 = null;
var G__5325__5326 = (function (array,n){
if(cljs.core.truth_(cljs.core.lt_.call(null,n,array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__5325__5327 = (function (array,n,not_found){
if(cljs.core.truth_(cljs.core.lt_.call(null,n,array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__5325 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__5325__5326.call(this,array,n);
case  3 :
return G__5325__5327.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5325;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.call(null,array,0);
}));
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if(cljs.core.truth_(coll))
{return cljs.core._seq.call(null,coll);
} else
{return null;
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
var temp__3726__auto____5329 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____5329))
{var s__5330 = temp__3726__auto____5329;

return cljs.core._first.call(null,s__5330);
} else
{return null;
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
return cljs.core._rest.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if(cljs.core.truth_(coll))
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
} else
{return null;
}
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s)))
{{
var G__5331 = cljs.core.next.call(null,s);
s = G__5331;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.ICounted["_"] = true);
(cljs.core._count["_"] = (function (x){
var s__5332 = cljs.core.seq.call(null,x);
var n__5333 = 0;

while(true){
if(cljs.core.truth_(s__5332))
{{
var G__5334 = cljs.core.next.call(null,s__5332);
var G__5335 = cljs.core.inc.call(null,n__5333);
s__5332 = G__5334;
n__5333 = G__5335;
continue;
}
} else
{return n__5333;
}
break;
}
}));
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return cljs.core.identical_QMARK_.call(null,x,o);
}));
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__5336 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__5337 = (function() { 
var G__5339__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__5340 = conj.call(null,coll,x);
var G__5341 = cljs.core.first.call(null,xs);
var G__5342 = cljs.core.next.call(null,xs);
coll = G__5340;
x = G__5341;
xs = G__5342;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__5339 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5339__delegate.call(this, coll, x, xs);
};
G__5339.cljs$lang$maxFixedArity = 2;
G__5339.cljs$lang$applyTo = (function (arglist__5343){
var coll = cljs.core.first(arglist__5343);
var x = cljs.core.first(cljs.core.next(arglist__5343));
var xs = cljs.core.rest(cljs.core.next(arglist__5343));
return G__5339__delegate.call(this, coll, x, xs);
});
return G__5339;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__5336.call(this,coll,x);
default:
return conj__5337.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__5337.cljs$lang$applyTo;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
return cljs.core._count.call(null,coll);
});
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__5344 = (function (coll,n){
return cljs.core._nth.call(null,coll,n);
});
var nth__5345 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,n,not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__5344.call(this,coll,n);
case  3 :
return nth__5345.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__5347 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__5348 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__5347.call(this,o,k);
case  3 :
return get__5348.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__5351 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__5352 = (function() { 
var G__5354__delegate = function (coll,k,v,kvs){
while(true){
var ret__5350 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__5355 = ret__5350;
var G__5356 = cljs.core.first.call(null,kvs);
var G__5357 = cljs.core.second.call(null,kvs);
var G__5358 = cljs.core.nnext.call(null,kvs);
coll = G__5355;
k = G__5356;
v = G__5357;
kvs = G__5358;
continue;
}
} else
{return ret__5350;
}
break;
}
};
var G__5354 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5354__delegate.call(this, coll, k, v, kvs);
};
G__5354.cljs$lang$maxFixedArity = 3;
G__5354.cljs$lang$applyTo = (function (arglist__5359){
var coll = cljs.core.first(arglist__5359);
var k = cljs.core.first(cljs.core.next(arglist__5359));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5359)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5359)));
return G__5354__delegate.call(this, coll, k, v, kvs);
});
return G__5354;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__5351.call(this,coll,k,v);
default:
return assoc__5352.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__5352.cljs$lang$applyTo;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__5361 = (function (coll){
return coll;
});
var dissoc__5362 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__5363 = (function() { 
var G__5365__delegate = function (coll,k,ks){
while(true){
var ret__5360 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__5366 = ret__5360;
var G__5367 = cljs.core.first.call(null,ks);
var G__5368 = cljs.core.next.call(null,ks);
coll = G__5366;
k = G__5367;
ks = G__5368;
continue;
}
} else
{return ret__5360;
}
break;
}
};
var G__5365 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5365__delegate.call(this, coll, k, ks);
};
G__5365.cljs$lang$maxFixedArity = 2;
G__5365.cljs$lang$applyTo = (function (arglist__5369){
var coll = cljs.core.first(arglist__5369);
var k = cljs.core.first(cljs.core.next(arglist__5369));
var ks = cljs.core.rest(cljs.core.next(arglist__5369));
return G__5365__delegate.call(this, coll, k, ks);
});
return G__5365;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__5361.call(this,coll);
case  2 :
return dissoc__5362.call(this,coll,k);
default:
return dissoc__5363.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__5363.cljs$lang$applyTo;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta.call(null,o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if(cljs.core.truth_((function (){var x__3143__auto____5370 = o;

if(cljs.core.truth_((function (){var and__3574__auto____5371 = x__3143__auto____5370;

if(cljs.core.truth_(and__3574__auto____5371))
{return x__3143__auto____5370.cljs$core$IMeta$;
} else
{return and__3574__auto____5371;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__3143__auto____5370);
}
})()))
{return cljs.core._meta.call(null,o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop.call(null,coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__5373 = (function (coll){
return coll;
});
var disj__5374 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__5375 = (function() { 
var G__5377__delegate = function (coll,k,ks){
while(true){
var ret__5372 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__5378 = ret__5372;
var G__5379 = cljs.core.first.call(null,ks);
var G__5380 = cljs.core.next.call(null,ks);
coll = G__5378;
k = G__5379;
ks = G__5380;
continue;
}
} else
{return ret__5372;
}
break;
}
};
var G__5377 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5377__delegate.call(this, coll, k, ks);
};
G__5377.cljs$lang$maxFixedArity = 2;
G__5377.cljs$lang$applyTo = (function (arglist__5381){
var coll = cljs.core.first(arglist__5381);
var k = cljs.core.first(cljs.core.next(arglist__5381));
var ks = cljs.core.rest(cljs.core.next(arglist__5381));
return G__5377__delegate.call(this, coll, k, ks);
});
return G__5377;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__5373.call(this,coll);
case  2 :
return disj__5374.call(this,coll,k);
default:
return disj__5375.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__5375.cljs$lang$applyTo;
return disj;
})()
;
cljs.core.hash = (function hash(o){
return cljs.core._hash.call(null,o);
});
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__3143__auto____5382 = x;

if(cljs.core.truth_((function (){var and__3574__auto____5383 = x__3143__auto____5382;

if(cljs.core.truth_(and__3574__auto____5383))
{return x__3143__auto____5382.cljs$core$ICollection$;
} else
{return and__3574__auto____5383;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__3143__auto____5382);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__3143__auto____5384 = x;

if(cljs.core.truth_((function (){var and__3574__auto____5385 = x__3143__auto____5384;

if(cljs.core.truth_(and__3574__auto____5385))
{return x__3143__auto____5384.cljs$core$ISet$;
} else
{return and__3574__auto____5385;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__3143__auto____5384);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__3143__auto____5386 = x;

if(cljs.core.truth_((function (){var and__3574__auto____5387 = x__3143__auto____5386;

if(cljs.core.truth_(and__3574__auto____5387))
{return x__3143__auto____5386.cljs$core$IAssociative$;
} else
{return and__3574__auto____5387;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__3143__auto____5386);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__3143__auto____5388 = x;

if(cljs.core.truth_((function (){var and__3574__auto____5389 = x__3143__auto____5388;

if(cljs.core.truth_(and__3574__auto____5389))
{return x__3143__auto____5388.cljs$core$ISequential$;
} else
{return and__3574__auto____5389;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__3143__auto____5388);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__3143__auto____5390 = x;

if(cljs.core.truth_((function (){var and__3574__auto____5391 = x__3143__auto____5390;

if(cljs.core.truth_(and__3574__auto____5391))
{return x__3143__auto____5390.cljs$core$ICounted$;
} else
{return and__3574__auto____5391;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__3143__auto____5390);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__3143__auto____5392 = x;

if(cljs.core.truth_((function (){var and__3574__auto____5393 = x__3143__auto____5392;

if(cljs.core.truth_(and__3574__auto____5393))
{return x__3143__auto____5392.cljs$core$IMap$;
} else
{return and__3574__auto____5393;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__3143__auto____5392);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__3143__auto____5394 = x;

if(cljs.core.truth_((function (){var and__3574__auto____5395 = x__3143__auto____5394;

if(cljs.core.truth_(and__3574__auto____5395))
{return x__3143__auto____5394.cljs$core$IVector$;
} else
{return and__3574__auto____5395;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__3143__auto____5394);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__5396 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__5396.push(key);
}));
return keys__5396;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.lookup_sentinel = cljs.core.js_obj.call(null);
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o instanceof t);
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,s)))
{return false;
} else
{var x__3143__auto____5397 = s;

if(cljs.core.truth_((function (){var and__3574__auto____5398 = x__3143__auto____5397;

if(cljs.core.truth_(and__3574__auto____5398))
{return x__3143__auto____5397.cljs$core$ISeq$;
} else
{return and__3574__auto____5398;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__3143__auto____5397);
}
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3574__auto____5399 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3574__auto____5399))
{return cljs.core.not.call(null,(function (){var or__3576__auto____5400 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3576__auto____5400))
{return or__3576__auto____5400;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3574__auto____5399;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3574__auto____5401 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3574__auto____5401))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3574__auto____5401;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3574__auto____5402 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3574__auto____5402))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3574__auto____5402;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber.call(null,n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction.call(null,f);
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3574__auto____5403 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3574__auto____5403))
{return (n == n.toFixed());
} else
{return and__3574__auto____5403;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel),cljs.core.lookup_sentinel)))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3574__auto____5404 = coll;

if(cljs.core.truth_(and__3574__auto____5404))
{var and__3574__auto____5405 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3574__auto____5405))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3574__auto____5405;
}
} else
{return and__3574__auto____5404;
}
})()))
{return cljs.core.Vector.fromArray([k,cljs.core._lookup.call(null,coll,k)]);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___5410 = (function (x){
return true;
});
var distinct_QMARK___5411 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___5412 = (function() { 
var G__5414__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__5406 = cljs.core.set([y,x]);
var xs__5407 = more;

while(true){
var x__5408 = cljs.core.first.call(null,xs__5407);
var etc__5409 = cljs.core.next.call(null,xs__5407);

if(cljs.core.truth_(xs__5407))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__5406,x__5408)))
{return false;
} else
{{
var G__5415 = cljs.core.conj.call(null,s__5406,x__5408);
var G__5416 = etc__5409;
s__5406 = G__5415;
xs__5407 = G__5416;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__5414 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5414__delegate.call(this, x, y, more);
};
G__5414.cljs$lang$maxFixedArity = 2;
G__5414.cljs$lang$applyTo = (function (arglist__5417){
var x = cljs.core.first(arglist__5417);
var y = cljs.core.first(cljs.core.next(arglist__5417));
var more = cljs.core.rest(cljs.core.next(arglist__5417));
return G__5414__delegate.call(this, x, y, more);
});
return G__5414;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___5410.call(this,x);
case  2 :
return distinct_QMARK___5411.call(this,x,y);
default:
return distinct_QMARK___5412.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___5412.cljs$lang$applyTo;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses google.array.defaultCompare.
*/
cljs.core.compare = (function compare(x,y){
return goog.array.defaultCompare.call(null,x,y);
});
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,f,cljs.core.compare)))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__5418 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__5418)))
{return r__5418;
} else
{if(cljs.core.truth_(r__5418))
{return -1;
} else
{if(cljs.core.truth_(f.call(null,y,x)))
{return 1;
} else
{return 0;
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__5420 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__5421 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__5419 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__5419,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__5419);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__5420.call(this,comp);
case  2 :
return sort__5421.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__5423 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__5424 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__5423.call(this,keyfn,comp);
case  3 :
return sort_by__5424.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort_by;
})()
;
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__5426 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__5427 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__5426.call(this,f,val);
case  3 :
return reduce__5427.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__5433 = (function (f,coll){
var temp__3723__auto____5429 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3723__auto____5429))
{var s__5430 = temp__3723__auto____5429;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__5430),cljs.core.next.call(null,s__5430));
} else
{return f.call(null);
}
});
var seq_reduce__5434 = (function (f,val,coll){
var val__5431 = val;
var coll__5432 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__5432))
{{
var G__5436 = f.call(null,val__5431,cljs.core.first.call(null,coll__5432));
var G__5437 = cljs.core.next.call(null,coll__5432);
val__5431 = G__5436;
coll__5432 = G__5437;
continue;
}
} else
{return val__5431;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__5433.call(this,f,val);
case  3 :
return seq_reduce__5434.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__5438 = null;
var G__5438__5439 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__5438__5440 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__5438 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__5438__5439.call(this,coll,f);
case  3 :
return G__5438__5440.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5438;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___5442 = (function (){
return 0;
});
var _PLUS___5443 = (function (x){
return x;
});
var _PLUS___5444 = (function (x,y){
return (x + y);
});
var _PLUS___5445 = (function() { 
var G__5447__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,_PLUS_.call(null,x,y),more);
};
var G__5447 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5447__delegate.call(this, x, y, more);
};
G__5447.cljs$lang$maxFixedArity = 2;
G__5447.cljs$lang$applyTo = (function (arglist__5448){
var x = cljs.core.first(arglist__5448);
var y = cljs.core.first(cljs.core.next(arglist__5448));
var more = cljs.core.rest(cljs.core.next(arglist__5448));
return G__5447__delegate.call(this, x, y, more);
});
return G__5447;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___5442.call(this);
case  1 :
return _PLUS___5443.call(this,x);
case  2 :
return _PLUS___5444.call(this,x,y);
default:
return _PLUS___5445.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___5445.cljs$lang$applyTo;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___5449 = (function (x){
return (- x);
});
var ___5450 = (function (x,y){
return (x - y);
});
var ___5451 = (function() { 
var G__5453__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,_.call(null,x,y),more);
};
var G__5453 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5453__delegate.call(this, x, y, more);
};
G__5453.cljs$lang$maxFixedArity = 2;
G__5453.cljs$lang$applyTo = (function (arglist__5454){
var x = cljs.core.first(arglist__5454);
var y = cljs.core.first(cljs.core.next(arglist__5454));
var more = cljs.core.rest(cljs.core.next(arglist__5454));
return G__5453__delegate.call(this, x, y, more);
});
return G__5453;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___5449.call(this,x);
case  2 :
return ___5450.call(this,x,y);
default:
return ___5451.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___5451.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___5455 = (function (){
return 1;
});
var _STAR___5456 = (function (x){
return x;
});
var _STAR___5457 = (function (x,y){
return (x * y);
});
var _STAR___5458 = (function() { 
var G__5460__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,_STAR_.call(null,x,y),more);
};
var G__5460 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5460__delegate.call(this, x, y, more);
};
G__5460.cljs$lang$maxFixedArity = 2;
G__5460.cljs$lang$applyTo = (function (arglist__5461){
var x = cljs.core.first(arglist__5461);
var y = cljs.core.first(cljs.core.next(arglist__5461));
var more = cljs.core.rest(cljs.core.next(arglist__5461));
return G__5460__delegate.call(this, x, y, more);
});
return G__5460;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___5455.call(this);
case  1 :
return _STAR___5456.call(this,x);
case  2 :
return _STAR___5457.call(this,x,y);
default:
return _STAR___5458.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___5458.cljs$lang$applyTo;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___5462 = (function (x){
return (1 / x);
});
var _SLASH___5463 = (function (x,y){
return (x / y);
});
var _SLASH___5464 = (function() { 
var G__5466__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__5466 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5466__delegate.call(this, x, y, more);
};
G__5466.cljs$lang$maxFixedArity = 2;
G__5466.cljs$lang$applyTo = (function (arglist__5467){
var x = cljs.core.first(arglist__5467);
var y = cljs.core.first(cljs.core.next(arglist__5467));
var more = cljs.core.rest(cljs.core.next(arglist__5467));
return G__5466__delegate.call(this, x, y, more);
});
return G__5466;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___5462.call(this,x);
case  2 :
return _SLASH___5463.call(this,x,y);
default:
return _SLASH___5464.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___5464.cljs$lang$applyTo;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___5468 = (function (x){
return true;
});
var _LT___5469 = (function (x,y){
return (x < y);
});
var _LT___5470 = (function() { 
var G__5472__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_LT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__5473 = y;
var G__5474 = cljs.core.first.call(null,more);
var G__5475 = cljs.core.next.call(null,more);
x = G__5473;
y = G__5474;
more = G__5475;
continue;
}
} else
{return _LT_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__5472 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5472__delegate.call(this, x, y, more);
};
G__5472.cljs$lang$maxFixedArity = 2;
G__5472.cljs$lang$applyTo = (function (arglist__5476){
var x = cljs.core.first(arglist__5476);
var y = cljs.core.first(cljs.core.next(arglist__5476));
var more = cljs.core.rest(cljs.core.next(arglist__5476));
return G__5472__delegate.call(this, x, y, more);
});
return G__5472;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___5468.call(this,x);
case  2 :
return _LT___5469.call(this,x,y);
default:
return _LT___5470.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___5470.cljs$lang$applyTo;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___5477 = (function (x){
return true;
});
var _LT__EQ___5478 = (function (x,y){
return (x <= y);
});
var _LT__EQ___5479 = (function() { 
var G__5481__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_LT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__5482 = y;
var G__5483 = cljs.core.first.call(null,more);
var G__5484 = cljs.core.next.call(null,more);
x = G__5482;
y = G__5483;
more = G__5484;
continue;
}
} else
{return _LT__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__5481 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5481__delegate.call(this, x, y, more);
};
G__5481.cljs$lang$maxFixedArity = 2;
G__5481.cljs$lang$applyTo = (function (arglist__5485){
var x = cljs.core.first(arglist__5485);
var y = cljs.core.first(cljs.core.next(arglist__5485));
var more = cljs.core.rest(cljs.core.next(arglist__5485));
return G__5481__delegate.call(this, x, y, more);
});
return G__5481;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___5477.call(this,x);
case  2 :
return _LT__EQ___5478.call(this,x,y);
default:
return _LT__EQ___5479.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___5479.cljs$lang$applyTo;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___5486 = (function (x){
return true;
});
var _GT___5487 = (function (x,y){
return (x > y);
});
var _GT___5488 = (function() { 
var G__5490__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_GT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__5491 = y;
var G__5492 = cljs.core.first.call(null,more);
var G__5493 = cljs.core.next.call(null,more);
x = G__5491;
y = G__5492;
more = G__5493;
continue;
}
} else
{return _GT_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__5490 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5490__delegate.call(this, x, y, more);
};
G__5490.cljs$lang$maxFixedArity = 2;
G__5490.cljs$lang$applyTo = (function (arglist__5494){
var x = cljs.core.first(arglist__5494);
var y = cljs.core.first(cljs.core.next(arglist__5494));
var more = cljs.core.rest(cljs.core.next(arglist__5494));
return G__5490__delegate.call(this, x, y, more);
});
return G__5490;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___5486.call(this,x);
case  2 :
return _GT___5487.call(this,x,y);
default:
return _GT___5488.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___5488.cljs$lang$applyTo;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___5495 = (function (x){
return true;
});
var _GT__EQ___5496 = (function (x,y){
return (x >= y);
});
var _GT__EQ___5497 = (function() { 
var G__5499__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_GT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__5500 = y;
var G__5501 = cljs.core.first.call(null,more);
var G__5502 = cljs.core.next.call(null,more);
x = G__5500;
y = G__5501;
more = G__5502;
continue;
}
} else
{return _GT__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__5499 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5499__delegate.call(this, x, y, more);
};
G__5499.cljs$lang$maxFixedArity = 2;
G__5499.cljs$lang$applyTo = (function (arglist__5503){
var x = cljs.core.first(arglist__5503);
var y = cljs.core.first(cljs.core.next(arglist__5503));
var more = cljs.core.rest(cljs.core.next(arglist__5503));
return G__5499__delegate.call(this, x, y, more);
});
return G__5499;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___5495.call(this,x);
case  2 :
return _GT__EQ___5496.call(this,x,y);
default:
return _GT__EQ___5497.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___5497.cljs$lang$applyTo;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return cljs.core._.call(null,x,1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__5504 = (function (x){
return x;
});
var max__5505 = (function (x,y){
return ((x > y) ? x : y);
});
var max__5506 = (function() { 
var G__5508__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,max.call(null,x,y),more);
};
var G__5508 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5508__delegate.call(this, x, y, more);
};
G__5508.cljs$lang$maxFixedArity = 2;
G__5508.cljs$lang$applyTo = (function (arglist__5509){
var x = cljs.core.first(arglist__5509);
var y = cljs.core.first(cljs.core.next(arglist__5509));
var more = cljs.core.rest(cljs.core.next(arglist__5509));
return G__5508__delegate.call(this, x, y, more);
});
return G__5508;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__5504.call(this,x);
case  2 :
return max__5505.call(this,x,y);
default:
return max__5506.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__5506.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__5510 = (function (x){
return x;
});
var min__5511 = (function (x,y){
return ((x < y) ? x : y);
});
var min__5512 = (function() { 
var G__5514__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,min.call(null,x,y),more);
};
var G__5514 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5514__delegate.call(this, x, y, more);
};
G__5514.cljs$lang$maxFixedArity = 2;
G__5514.cljs$lang$applyTo = (function (arglist__5515){
var x = cljs.core.first(arglist__5515);
var y = cljs.core.first(cljs.core.next(arglist__5515));
var more = cljs.core.rest(cljs.core.next(arglist__5515));
return G__5514__delegate.call(this, x, y, more);
});
return G__5514;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__5510.call(this,x);
case  2 :
return min__5511.call(this,x,y);
default:
return min__5512.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__5512.cljs$lang$applyTo;
return min;
})()
;
cljs.core.fix = (function fix(q){
if(cljs.core.truth_(cljs.core._GT__EQ_.call(null,q,0)))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem__5516 = cljs.core.mod.call(null,n,d);

return cljs.core.fix.call(null,((n - rem__5516) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__5517 = cljs.core.quot.call(null,n,d);

return (n - (d * q__5517));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__5518 = (function (){
return Math.random.call(null);
});
var rand__5519 = (function (n){
return cljs.core._STAR_.call(null,n,rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__5518.call(this);
case  1 :
return rand__5519.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Returns non-nil if nums all have the equivalent
* value (type-independent), otherwise false
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___5521 = (function (x){
return true;
});
var _EQ__EQ___5522 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___5523 = (function() { 
var G__5525__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__5526 = y;
var G__5527 = cljs.core.first.call(null,more);
var G__5528 = cljs.core.next.call(null,more);
x = G__5526;
y = G__5527;
more = G__5528;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__5525 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5525__delegate.call(this, x, y, more);
};
G__5525.cljs$lang$maxFixedArity = 2;
G__5525.cljs$lang$applyTo = (function (arglist__5529){
var x = cljs.core.first(arglist__5529);
var y = cljs.core.first(cljs.core.next(arglist__5529));
var more = cljs.core.rest(cljs.core.next(arglist__5529));
return G__5525__delegate.call(this, x, y, more);
});
return G__5525;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___5521.call(this,x);
case  2 :
return _EQ__EQ___5522.call(this,x,y);
default:
return _EQ__EQ___5523.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___5523.cljs$lang$applyTo;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return cljs.core._LT_.call(null,0,n);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return cljs.core._EQ__EQ_.call(null,0,n);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__5530 = n;
var xs__5531 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3574__auto____5532 = xs__5531;

if(cljs.core.truth_(and__3574__auto____5532))
{return cljs.core.pos_QMARK_.call(null,n__5530);
} else
{return and__3574__auto____5532;
}
})()))
{{
var G__5533 = cljs.core.dec.call(null,n__5530);
var G__5534 = cljs.core.next.call(null,xs__5531);
n__5530 = G__5533;
xs__5531 = G__5534;
continue;
}
} else
{return xs__5531;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__5539 = null;
var G__5539__5540 = (function (coll,n){
var temp__3723__auto____5535 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3723__auto____5535))
{var xs__5536 = temp__3723__auto____5535;

return cljs.core.first.call(null,xs__5536);
} else
{throw "Index out of bounds";
}
});
var G__5539__5541 = (function (coll,n,not_found){
var temp__3723__auto____5537 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3723__auto____5537))
{var xs__5538 = temp__3723__auto____5537;

return cljs.core.first.call(null,xs__5538);
} else
{return not_found;
}
});
G__5539 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__5539__5540.call(this,coll,n);
case  3 :
return G__5539__5541.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5539;
})()
);
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__5543 = (function (){
return "";
});
var str__5544 = (function (x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return "";
} else
{return x.toString();
}
});
var str__5545 = (function() { 
var G__5547__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__5548 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__5549 = cljs.core.next.call(null,more);
sb = G__5548;
more = G__5549;
continue;
}
} else
{return str.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__5547 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__5547__delegate.call(this, x, ys);
};
G__5547.cljs$lang$maxFixedArity = 1;
G__5547.cljs$lang$applyTo = (function (arglist__5550){
var x = cljs.core.first(arglist__5550);
var ys = cljs.core.rest(arglist__5550);
return G__5547__delegate.call(this, x, ys);
});
return G__5547;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__5543.call(this);
case  1 :
return str__5544.call(this,x);
default:
return str__5545.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__5545.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__5551 = (function (s,start){
return s.substring(start);
});
var subs__5552 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__5551.call(this,s,start);
case  3 :
return subs__5552.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subs;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__5554 = (function (name){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{return name;
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{return cljs.core.str.call(null,"﷑","'",cljs.core.subs.call(null,name,2));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.str.call(null,"﷑","'",name);
} else
{return null;
}
}
}
});
var symbol__5555 = (function (ns,name){
return symbol.call(null,cljs.core.str.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__5554.call(this,ns);
case  2 :
return symbol__5555.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__5557 = (function (name){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{return name;
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{return cljs.core.str.call(null,"﷐","'",cljs.core.subs.call(null,name,2));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.str.call(null,"﷐","'",name);
} else
{return null;
}
}
}
});
var keyword__5558 = (function (ns,name){
return keyword.call(null,cljs.core.str.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__5557.call(this,ns);
case  2 :
return keyword__5558.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__5560 = cljs.core.seq.call(null,x);
var ys__5561 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__5560)))
{return cljs.core.nil_QMARK_.call(null,ys__5561);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__5561)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__5560),cljs.core.first.call(null,ys__5561))))
{{
var G__5562 = cljs.core.next.call(null,xs__5560);
var G__5563 = cljs.core.next.call(null,ys__5561);
xs__5560 = G__5562;
ys__5561 = G__5563;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return cljs.core.bit_xor.call(null,seed,cljs.core._PLUS_.call(null,hash,2654435769,cljs.core.bit_shift_left.call(null,seed,6),cljs.core.bit_shift_right.call(null,seed,2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.call(null,(function (p1__5564_SHARP_,p2__5565_SHARP_){
return cljs.core.hash_combine.call(null,p1__5564_SHARP_,cljs.core.hash.call(null,p2__5565_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
})
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__5566 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__5567 = this;
return (new cljs.core.List(this__5567.meta,o,coll,cljs.core.inc.call(null,this__5567.count)));
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__5568 = this;
return this__5568.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__5569 = this;
return this__5569.rest;
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__5570 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__5571 = this;
return this__5571.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__5572 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__5573 = this;
return (new cljs.core.List(meta,this__5573.first,this__5573.rest,this__5573.count));
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__5574 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__5575 = this;
return this__5575.meta;
});
cljs.core.List.prototype.cljs$core$IHash$ = true;
cljs.core.List.prototype.cljs$core$IHash$_hash = (function (coll){
var this__5576 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__5577 = this;
return this__5577.count;
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
})
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__5578 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__5579 = this;
return (new cljs.core.List(this__5579.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__5580 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__5581 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__5582 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__5583 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__5584 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__5585 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__5586 = this;
return coll;
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__5587 = this;
return this__5587.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash = (function (coll){
var this__5588 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__5589 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() { 
var list__delegate = function (items){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items));
};
var list = function (var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return list__delegate.call(this, items);
};
list.cljs$lang$maxFixedArity = 0;
list.cljs$lang$applyTo = (function (arglist__5590){
var items = cljs.core.seq( arglist__5590 );;
return list__delegate.call(this, items);
});
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest){
this.meta = meta;
this.first = first;
this.rest = rest;
})
cljs.core.Cons.prototype.cljs$core$ISeqable$ = true;
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__5591 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__5592 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__5593 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__5594 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__5594.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__5595 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__5596 = this;
return this__5596.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__5597 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__5597.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__5597.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__5598 = this;
return this__5598.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__5599 = this;
return (new cljs.core.Cons(meta,this__5599.first,this__5599.rest));
});
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,seq){
return (new cljs.core.Cons(null,x,seq));
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__5600 = null;
var G__5600__5601 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__5600__5602 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__5600 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__5600__5601.call(this,string,f);
case  3 :
return G__5600__5602.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5600;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__5604 = null;
var G__5604__5605 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__5604__5606 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__5604 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__5604__5605.call(this,string,k);
case  3 :
return G__5604__5606.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5604;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__5608 = null;
var G__5608__5609 = (function (string,n){
if(cljs.core.truth_(cljs.core._LT_.call(null,n,cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__5608__5610 = (function (string,n,not_found){
if(cljs.core.truth_(cljs.core._LT_.call(null,n,cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__5608 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__5608__5609.call(this,string,n);
case  3 :
return G__5608__5610.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5608;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.call(null,string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode.call(null,o);
}));
goog.global['String']['prototype']['call'] = (function() {
var G__5612 = null;
var G__5612__5613 = (function (_,coll){
return cljs.core.get.call(null,coll,this.toString());
});
var G__5612__5614 = (function (_,coll,not_found){
return cljs.core.get.call(null,coll,this.toString(),not_found);
});
G__5612 = function(_,coll,not_found){
switch(arguments.length){
case  2 :
return G__5612__5613.call(this,_,coll);
case  3 :
return G__5612__5614.call(this,_,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5612;
})()
;
goog.global['String']['prototype']['apply'] = (function (s,args){
if(cljs.core.truth_(cljs.core._LT_.call(null,cljs.core.count.call(null,args),2)))
{return cljs.core.get.call(null,(args[0]),s);
} else
{return cljs.core.get.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__5616 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__5616;
} else
{lazy_seq.x = x__5616.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x){
this.meta = meta;
this.realized = realized;
this.x = x;
})
cljs.core.LazySeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__5617 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__5618 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__5619 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__5620 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__5620.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__5621 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__5622 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__5623 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__5624 = this;
return this__5624.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__5625 = this;
return (new cljs.core.LazySeq(meta,this__5625.realized,this__5625.x));
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__5626 = cljs.core.array.call(null);

var s__5627 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__5627)))
{ary__5626.push(cljs.core.first.call(null,s__5627));
{
var G__5628 = cljs.core.next.call(null,s__5627);
s__5627 = G__5628;
continue;
}
} else
{return ary__5626;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__5629 = s;
var i__5630 = n;
var sum__5631 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3574__auto____5632 = cljs.core.pos_QMARK_.call(null,i__5630);

if(cljs.core.truth_(and__3574__auto____5632))
{return cljs.core.seq.call(null,s__5629);
} else
{return and__3574__auto____5632;
}
})()))
{{
var G__5633 = cljs.core.next.call(null,s__5629);
var G__5634 = cljs.core.dec.call(null,i__5630);
var G__5635 = cljs.core.inc.call(null,sum__5631);
s__5629 = G__5633;
i__5630 = G__5634;
sum__5631 = G__5635;
continue;
}
} else
{return sum__5631;
}
break;
}
});
cljs.core.spread = (function spread(arglist){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,arglist)))
{return null;
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.next.call(null,arglist))))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__5639 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__5640 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__5641 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__5636 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__5636))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__5636),concat.call(null,cljs.core.rest.call(null,s__5636),y));
} else
{return y;
}
})));
});
var concat__5642 = (function() { 
var G__5644__delegate = function (x,y,zs){
var cat__5638 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__5637 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__5637))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__5637),cat.call(null,cljs.core.rest.call(null,xys__5637),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__5638.call(null,concat.call(null,x,y),zs);
};
var G__5644 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5644__delegate.call(this, x, y, zs);
};
G__5644.cljs$lang$maxFixedArity = 2;
G__5644.cljs$lang$applyTo = (function (arglist__5645){
var x = cljs.core.first(arglist__5645);
var y = cljs.core.first(cljs.core.next(arglist__5645));
var zs = cljs.core.rest(cljs.core.next(arglist__5645));
return G__5644__delegate.call(this, x, y, zs);
});
return G__5644;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__5639.call(this);
case  1 :
return concat__5640.call(this,x);
case  2 :
return concat__5641.call(this,x,y);
default:
return concat__5642.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__5642.cljs$lang$applyTo;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___5646 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___5647 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___5648 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___5649 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___5650 = (function() { 
var G__5652__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__5652 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__5652__delegate.call(this, a, b, c, d, more);
};
G__5652.cljs$lang$maxFixedArity = 4;
G__5652.cljs$lang$applyTo = (function (arglist__5653){
var a = cljs.core.first(arglist__5653);
var b = cljs.core.first(cljs.core.next(arglist__5653));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5653)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__5653))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__5653))));
return G__5652__delegate.call(this, a, b, c, d, more);
});
return G__5652;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___5646.call(this,a);
case  2 :
return list_STAR___5647.call(this,a,b);
case  3 :
return list_STAR___5648.call(this,a,b,c);
case  4 :
return list_STAR___5649.call(this,a,b,c,d);
default:
return list_STAR___5650.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___5650.cljs$lang$applyTo;
return list_STAR_;
})()
;
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__5663 = (function (f,args){
var fixed_arity__5654 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,args,cljs.core.inc.call(null,fixed_arity__5654)),fixed_arity__5654)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__5664 = (function (f,x,args){
var arglist__5655 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__5656 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,arglist__5655,fixed_arity__5656),fixed_arity__5656)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__5655));
} else
{return f.cljs$lang$applyTo(arglist__5655);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__5655));
}
});
var apply__5665 = (function (f,x,y,args){
var arglist__5657 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__5658 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,arglist__5657,fixed_arity__5658),fixed_arity__5658)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__5657));
} else
{return f.cljs$lang$applyTo(arglist__5657);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__5657));
}
});
var apply__5666 = (function (f,x,y,z,args){
var arglist__5659 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__5660 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,arglist__5659,fixed_arity__5660),fixed_arity__5660)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__5659));
} else
{return f.cljs$lang$applyTo(arglist__5659);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__5659));
}
});
var apply__5667 = (function() { 
var G__5669__delegate = function (f,a,b,c,d,args){
var arglist__5661 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__5662 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,arglist__5661,fixed_arity__5662),fixed_arity__5662)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__5661));
} else
{return f.cljs$lang$applyTo(arglist__5661);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__5661));
}
};
var G__5669 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__5669__delegate.call(this, f, a, b, c, d, args);
};
G__5669.cljs$lang$maxFixedArity = 5;
G__5669.cljs$lang$applyTo = (function (arglist__5670){
var f = cljs.core.first(arglist__5670);
var a = cljs.core.first(cljs.core.next(arglist__5670));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5670)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__5670))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__5670)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__5670)))));
return G__5669__delegate.call(this, f, a, b, c, d, args);
});
return G__5669;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__5663.call(this,f,a);
case  3 :
return apply__5664.call(this,f,a,b);
case  4 :
return apply__5665.call(this,f,a,b,c);
case  5 :
return apply__5666.call(this,f,a,b,c,d);
default:
return apply__5667.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__5667.cljs$lang$applyTo;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){
return cljs.core.with_meta.call(null,obj,cljs.core.apply.call(null,f,cljs.core.meta.call(null,obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__5671){
var obj = cljs.core.first(arglist__5671);
var f = cljs.core.first(cljs.core.next(arglist__5671));
var args = cljs.core.rest(cljs.core.next(arglist__5671));
return vary_meta__delegate.call(this, obj, f, args);
});
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___5672 = (function (x){
return false;
});
var not_EQ___5673 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___5674 = (function() { 
var G__5676__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__5676 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5676__delegate.call(this, x, y, more);
};
G__5676.cljs$lang$maxFixedArity = 2;
G__5676.cljs$lang$applyTo = (function (arglist__5677){
var x = cljs.core.first(arglist__5677);
var y = cljs.core.first(cljs.core.next(arglist__5677));
var more = cljs.core.rest(cljs.core.next(arglist__5677));
return G__5676__delegate.call(this, x, y, more);
});
return G__5676;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___5672.call(this,x);
case  2 :
return not_EQ___5673.call(this,x,y);
default:
return not_EQ___5674.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___5674.cljs$lang$applyTo;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.seq.call(null,coll))))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__5678 = pred;
var G__5679 = cljs.core.next.call(null,coll);
pred = G__5678;
coll = G__5679;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var or__3576__auto____5680 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3576__auto____5680))
{return or__3576__auto____5680;
} else
{{
var G__5681 = pred;
var G__5682 = cljs.core.next.call(null,coll);
pred = G__5681;
coll = G__5682;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.truth_(cljs.core.integer_QMARK_.call(null,n)))
{return cljs.core.zero_QMARK_.call(null,cljs.core.bit_and.call(null,n,1));
} else
{throw cljs.core.str.call(null,"Argument must be an integer: ",n);
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return cljs.core.not.call(null,cljs.core.even_QMARK_.call(null,n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__5683 = null;
var G__5683__5684 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__5683__5685 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__5683__5686 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__5683__5687 = (function() { 
var G__5689__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__5689 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5689__delegate.call(this, x, y, zs);
};
G__5689.cljs$lang$maxFixedArity = 2;
G__5689.cljs$lang$applyTo = (function (arglist__5690){
var x = cljs.core.first(arglist__5690);
var y = cljs.core.first(cljs.core.next(arglist__5690));
var zs = cljs.core.rest(cljs.core.next(arglist__5690));
return G__5689__delegate.call(this, x, y, zs);
});
return G__5689;
})()
;
G__5683 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__5683__5684.call(this);
case  1 :
return G__5683__5685.call(this,x);
case  2 :
return G__5683__5686.call(this,x,y);
default:
return G__5683__5687.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__5683.cljs$lang$maxFixedArity = 2;
G__5683.cljs$lang$applyTo = G__5683__5687.cljs$lang$applyTo;
return G__5683;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__5691__delegate = function (args){
return x;
};
var G__5691 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__5691__delegate.call(this, args);
};
G__5691.cljs$lang$maxFixedArity = 0;
G__5691.cljs$lang$applyTo = (function (arglist__5692){
var args = cljs.core.seq( arglist__5692 );;
return G__5691__delegate.call(this, args);
});
return G__5691;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__5696 = (function (){
return cljs.core.identity;
});
var comp__5697 = (function (f){
return f;
});
var comp__5698 = (function (f,g){
return (function() {
var G__5702 = null;
var G__5702__5703 = (function (){
return f.call(null,g.call(null));
});
var G__5702__5704 = (function (x){
return f.call(null,g.call(null,x));
});
var G__5702__5705 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__5702__5706 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__5702__5707 = (function() { 
var G__5709__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__5709 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5709__delegate.call(this, x, y, z, args);
};
G__5709.cljs$lang$maxFixedArity = 3;
G__5709.cljs$lang$applyTo = (function (arglist__5710){
var x = cljs.core.first(arglist__5710);
var y = cljs.core.first(cljs.core.next(arglist__5710));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5710)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5710)));
return G__5709__delegate.call(this, x, y, z, args);
});
return G__5709;
})()
;
G__5702 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__5702__5703.call(this);
case  1 :
return G__5702__5704.call(this,x);
case  2 :
return G__5702__5705.call(this,x,y);
case  3 :
return G__5702__5706.call(this,x,y,z);
default:
return G__5702__5707.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__5702.cljs$lang$maxFixedArity = 3;
G__5702.cljs$lang$applyTo = G__5702__5707.cljs$lang$applyTo;
return G__5702;
})()
});
var comp__5699 = (function (f,g,h){
return (function() {
var G__5711 = null;
var G__5711__5712 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__5711__5713 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__5711__5714 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__5711__5715 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__5711__5716 = (function() { 
var G__5718__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__5718 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5718__delegate.call(this, x, y, z, args);
};
G__5718.cljs$lang$maxFixedArity = 3;
G__5718.cljs$lang$applyTo = (function (arglist__5719){
var x = cljs.core.first(arglist__5719);
var y = cljs.core.first(cljs.core.next(arglist__5719));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5719)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5719)));
return G__5718__delegate.call(this, x, y, z, args);
});
return G__5718;
})()
;
G__5711 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__5711__5712.call(this);
case  1 :
return G__5711__5713.call(this,x);
case  2 :
return G__5711__5714.call(this,x,y);
case  3 :
return G__5711__5715.call(this,x,y,z);
default:
return G__5711__5716.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__5711.cljs$lang$maxFixedArity = 3;
G__5711.cljs$lang$applyTo = G__5711__5716.cljs$lang$applyTo;
return G__5711;
})()
});
var comp__5700 = (function() { 
var G__5720__delegate = function (f1,f2,f3,fs){
var fs__5693 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__5721__delegate = function (args){
var ret__5694 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__5693),args);
var fs__5695 = cljs.core.next.call(null,fs__5693);

while(true){
if(cljs.core.truth_(fs__5695))
{{
var G__5722 = cljs.core.first.call(null,fs__5695).call(null,ret__5694);
var G__5723 = cljs.core.next.call(null,fs__5695);
ret__5694 = G__5722;
fs__5695 = G__5723;
continue;
}
} else
{return ret__5694;
}
break;
}
};
var G__5721 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__5721__delegate.call(this, args);
};
G__5721.cljs$lang$maxFixedArity = 0;
G__5721.cljs$lang$applyTo = (function (arglist__5724){
var args = cljs.core.seq( arglist__5724 );;
return G__5721__delegate.call(this, args);
});
return G__5721;
})()
;
};
var G__5720 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5720__delegate.call(this, f1, f2, f3, fs);
};
G__5720.cljs$lang$maxFixedArity = 3;
G__5720.cljs$lang$applyTo = (function (arglist__5725){
var f1 = cljs.core.first(arglist__5725);
var f2 = cljs.core.first(cljs.core.next(arglist__5725));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5725)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5725)));
return G__5720__delegate.call(this, f1, f2, f3, fs);
});
return G__5720;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__5696.call(this);
case  1 :
return comp__5697.call(this,f1);
case  2 :
return comp__5698.call(this,f1,f2);
case  3 :
return comp__5699.call(this,f1,f2,f3);
default:
return comp__5700.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__5700.cljs$lang$applyTo;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__5726 = (function (f,arg1){
return (function() { 
var G__5731__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__5731 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__5731__delegate.call(this, args);
};
G__5731.cljs$lang$maxFixedArity = 0;
G__5731.cljs$lang$applyTo = (function (arglist__5732){
var args = cljs.core.seq( arglist__5732 );;
return G__5731__delegate.call(this, args);
});
return G__5731;
})()
;
});
var partial__5727 = (function (f,arg1,arg2){
return (function() { 
var G__5733__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__5733 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__5733__delegate.call(this, args);
};
G__5733.cljs$lang$maxFixedArity = 0;
G__5733.cljs$lang$applyTo = (function (arglist__5734){
var args = cljs.core.seq( arglist__5734 );;
return G__5733__delegate.call(this, args);
});
return G__5733;
})()
;
});
var partial__5728 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__5735__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__5735 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__5735__delegate.call(this, args);
};
G__5735.cljs$lang$maxFixedArity = 0;
G__5735.cljs$lang$applyTo = (function (arglist__5736){
var args = cljs.core.seq( arglist__5736 );;
return G__5735__delegate.call(this, args);
});
return G__5735;
})()
;
});
var partial__5729 = (function() { 
var G__5737__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__5738__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__5738 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__5738__delegate.call(this, args);
};
G__5738.cljs$lang$maxFixedArity = 0;
G__5738.cljs$lang$applyTo = (function (arglist__5739){
var args = cljs.core.seq( arglist__5739 );;
return G__5738__delegate.call(this, args);
});
return G__5738;
})()
;
};
var G__5737 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__5737__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__5737.cljs$lang$maxFixedArity = 4;
G__5737.cljs$lang$applyTo = (function (arglist__5740){
var f = cljs.core.first(arglist__5740);
var arg1 = cljs.core.first(cljs.core.next(arglist__5740));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5740)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__5740))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__5740))));
return G__5737__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__5737;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__5726.call(this,f,arg1);
case  3 :
return partial__5727.call(this,f,arg1,arg2);
case  4 :
return partial__5728.call(this,f,arg1,arg2,arg3);
default:
return partial__5729.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__5729.cljs$lang$applyTo;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__5741 = (function (f,x){
return (function() {
var G__5745 = null;
var G__5745__5746 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__5745__5747 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__5745__5748 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__5745__5749 = (function() { 
var G__5751__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__5751 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5751__delegate.call(this, a, b, c, ds);
};
G__5751.cljs$lang$maxFixedArity = 3;
G__5751.cljs$lang$applyTo = (function (arglist__5752){
var a = cljs.core.first(arglist__5752);
var b = cljs.core.first(cljs.core.next(arglist__5752));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5752)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5752)));
return G__5751__delegate.call(this, a, b, c, ds);
});
return G__5751;
})()
;
G__5745 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__5745__5746.call(this,a);
case  2 :
return G__5745__5747.call(this,a,b);
case  3 :
return G__5745__5748.call(this,a,b,c);
default:
return G__5745__5749.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__5745.cljs$lang$maxFixedArity = 3;
G__5745.cljs$lang$applyTo = G__5745__5749.cljs$lang$applyTo;
return G__5745;
})()
});
var fnil__5742 = (function (f,x,y){
return (function() {
var G__5753 = null;
var G__5753__5754 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__5753__5755 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__5753__5756 = (function() { 
var G__5758__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__5758 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5758__delegate.call(this, a, b, c, ds);
};
G__5758.cljs$lang$maxFixedArity = 3;
G__5758.cljs$lang$applyTo = (function (arglist__5759){
var a = cljs.core.first(arglist__5759);
var b = cljs.core.first(cljs.core.next(arglist__5759));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5759)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5759)));
return G__5758__delegate.call(this, a, b, c, ds);
});
return G__5758;
})()
;
G__5753 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__5753__5754.call(this,a,b);
case  3 :
return G__5753__5755.call(this,a,b,c);
default:
return G__5753__5756.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__5753.cljs$lang$maxFixedArity = 3;
G__5753.cljs$lang$applyTo = G__5753__5756.cljs$lang$applyTo;
return G__5753;
})()
});
var fnil__5743 = (function (f,x,y,z){
return (function() {
var G__5760 = null;
var G__5760__5761 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__5760__5762 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__5760__5763 = (function() { 
var G__5765__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__5765 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5765__delegate.call(this, a, b, c, ds);
};
G__5765.cljs$lang$maxFixedArity = 3;
G__5765.cljs$lang$applyTo = (function (arglist__5766){
var a = cljs.core.first(arglist__5766);
var b = cljs.core.first(cljs.core.next(arglist__5766));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5766)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5766)));
return G__5765__delegate.call(this, a, b, c, ds);
});
return G__5765;
})()
;
G__5760 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__5760__5761.call(this,a,b);
case  3 :
return G__5760__5762.call(this,a,b,c);
default:
return G__5760__5763.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__5760.cljs$lang$maxFixedArity = 3;
G__5760.cljs$lang$applyTo = G__5760__5763.cljs$lang$applyTo;
return G__5760;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__5741.call(this,f,x);
case  3 :
return fnil__5742.call(this,f,x,y);
case  4 :
return fnil__5743.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi__5769 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____5767 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____5767))
{var s__5768 = temp__3726__auto____5767;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__5768)),mpi.call(null,cljs.core.inc.call(null,idx),cljs.core.rest.call(null,s__5768)));
} else
{return null;
}
})));
});

return mapi__5769.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____5770 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____5770))
{var s__5771 = temp__3726__auto____5770;

var x__5772 = f.call(null,cljs.core.first.call(null,s__5771));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__5772)))
{return keep.call(null,f,cljs.core.rest.call(null,s__5771));
} else
{return cljs.core.cons.call(null,x__5772,keep.call(null,f,cljs.core.rest.call(null,s__5771)));
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi__5782 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____5779 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____5779))
{var s__5780 = temp__3726__auto____5779;

var x__5781 = f.call(null,idx,cljs.core.first.call(null,s__5780));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__5781)))
{return kpi.call(null,cljs.core.inc.call(null,idx),cljs.core.rest.call(null,s__5780));
} else
{return cljs.core.cons.call(null,x__5781,kpi.call(null,cljs.core.inc.call(null,idx),cljs.core.rest.call(null,s__5780)));
}
} else
{return null;
}
})));
});

return keepi__5782.call(null,0,coll);
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__5827 = (function (p){
return (function() {
var ep1 = null;
var ep1__5832 = (function (){
return true;
});
var ep1__5833 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__5834 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____5789 = p.call(null,x);

if(cljs.core.truth_(and__3574__auto____5789))
{return p.call(null,y);
} else
{return and__3574__auto____5789;
}
})());
});
var ep1__5835 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____5790 = p.call(null,x);

if(cljs.core.truth_(and__3574__auto____5790))
{var and__3574__auto____5791 = p.call(null,y);

if(cljs.core.truth_(and__3574__auto____5791))
{return p.call(null,z);
} else
{return and__3574__auto____5791;
}
} else
{return and__3574__auto____5790;
}
})());
});
var ep1__5836 = (function() { 
var G__5838__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____5792 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3574__auto____5792))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3574__auto____5792;
}
})());
};
var G__5838 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5838__delegate.call(this, x, y, z, args);
};
G__5838.cljs$lang$maxFixedArity = 3;
G__5838.cljs$lang$applyTo = (function (arglist__5839){
var x = cljs.core.first(arglist__5839);
var y = cljs.core.first(cljs.core.next(arglist__5839));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5839)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5839)));
return G__5838__delegate.call(this, x, y, z, args);
});
return G__5838;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__5832.call(this);
case  1 :
return ep1__5833.call(this,x);
case  2 :
return ep1__5834.call(this,x,y);
case  3 :
return ep1__5835.call(this,x,y,z);
default:
return ep1__5836.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__5836.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__5828 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__5840 = (function (){
return true;
});
var ep2__5841 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____5793 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____5793))
{return p2.call(null,x);
} else
{return and__3574__auto____5793;
}
})());
});
var ep2__5842 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____5794 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____5794))
{var and__3574__auto____5795 = p1.call(null,y);

if(cljs.core.truth_(and__3574__auto____5795))
{var and__3574__auto____5796 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____5796))
{return p2.call(null,y);
} else
{return and__3574__auto____5796;
}
} else
{return and__3574__auto____5795;
}
} else
{return and__3574__auto____5794;
}
})());
});
var ep2__5843 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____5797 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____5797))
{var and__3574__auto____5798 = p1.call(null,y);

if(cljs.core.truth_(and__3574__auto____5798))
{var and__3574__auto____5799 = p1.call(null,z);

if(cljs.core.truth_(and__3574__auto____5799))
{var and__3574__auto____5800 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____5800))
{var and__3574__auto____5801 = p2.call(null,y);

if(cljs.core.truth_(and__3574__auto____5801))
{return p2.call(null,z);
} else
{return and__3574__auto____5801;
}
} else
{return and__3574__auto____5800;
}
} else
{return and__3574__auto____5799;
}
} else
{return and__3574__auto____5798;
}
} else
{return and__3574__auto____5797;
}
})());
});
var ep2__5844 = (function() { 
var G__5846__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____5802 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3574__auto____5802))
{return cljs.core.every_QMARK_.call(null,(function (p1__5773_SHARP_){
var and__3574__auto____5803 = p1.call(null,p1__5773_SHARP_);

if(cljs.core.truth_(and__3574__auto____5803))
{return p2.call(null,p1__5773_SHARP_);
} else
{return and__3574__auto____5803;
}
}),args);
} else
{return and__3574__auto____5802;
}
})());
};
var G__5846 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5846__delegate.call(this, x, y, z, args);
};
G__5846.cljs$lang$maxFixedArity = 3;
G__5846.cljs$lang$applyTo = (function (arglist__5847){
var x = cljs.core.first(arglist__5847);
var y = cljs.core.first(cljs.core.next(arglist__5847));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5847)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5847)));
return G__5846__delegate.call(this, x, y, z, args);
});
return G__5846;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__5840.call(this);
case  1 :
return ep2__5841.call(this,x);
case  2 :
return ep2__5842.call(this,x,y);
case  3 :
return ep2__5843.call(this,x,y,z);
default:
return ep2__5844.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__5844.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__5829 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__5848 = (function (){
return true;
});
var ep3__5849 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____5804 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____5804))
{var and__3574__auto____5805 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____5805))
{return p3.call(null,x);
} else
{return and__3574__auto____5805;
}
} else
{return and__3574__auto____5804;
}
})());
});
var ep3__5850 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____5806 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____5806))
{var and__3574__auto____5807 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____5807))
{var and__3574__auto____5808 = p3.call(null,x);

if(cljs.core.truth_(and__3574__auto____5808))
{var and__3574__auto____5809 = p1.call(null,y);

if(cljs.core.truth_(and__3574__auto____5809))
{var and__3574__auto____5810 = p2.call(null,y);

if(cljs.core.truth_(and__3574__auto____5810))
{return p3.call(null,y);
} else
{return and__3574__auto____5810;
}
} else
{return and__3574__auto____5809;
}
} else
{return and__3574__auto____5808;
}
} else
{return and__3574__auto____5807;
}
} else
{return and__3574__auto____5806;
}
})());
});
var ep3__5851 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____5811 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____5811))
{var and__3574__auto____5812 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____5812))
{var and__3574__auto____5813 = p3.call(null,x);

if(cljs.core.truth_(and__3574__auto____5813))
{var and__3574__auto____5814 = p1.call(null,y);

if(cljs.core.truth_(and__3574__auto____5814))
{var and__3574__auto____5815 = p2.call(null,y);

if(cljs.core.truth_(and__3574__auto____5815))
{var and__3574__auto____5816 = p3.call(null,y);

if(cljs.core.truth_(and__3574__auto____5816))
{var and__3574__auto____5817 = p1.call(null,z);

if(cljs.core.truth_(and__3574__auto____5817))
{var and__3574__auto____5818 = p2.call(null,z);

if(cljs.core.truth_(and__3574__auto____5818))
{return p3.call(null,z);
} else
{return and__3574__auto____5818;
}
} else
{return and__3574__auto____5817;
}
} else
{return and__3574__auto____5816;
}
} else
{return and__3574__auto____5815;
}
} else
{return and__3574__auto____5814;
}
} else
{return and__3574__auto____5813;
}
} else
{return and__3574__auto____5812;
}
} else
{return and__3574__auto____5811;
}
})());
});
var ep3__5852 = (function() { 
var G__5854__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____5819 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3574__auto____5819))
{return cljs.core.every_QMARK_.call(null,(function (p1__5774_SHARP_){
var and__3574__auto____5820 = p1.call(null,p1__5774_SHARP_);

if(cljs.core.truth_(and__3574__auto____5820))
{var and__3574__auto____5821 = p2.call(null,p1__5774_SHARP_);

if(cljs.core.truth_(and__3574__auto____5821))
{return p3.call(null,p1__5774_SHARP_);
} else
{return and__3574__auto____5821;
}
} else
{return and__3574__auto____5820;
}
}),args);
} else
{return and__3574__auto____5819;
}
})());
};
var G__5854 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5854__delegate.call(this, x, y, z, args);
};
G__5854.cljs$lang$maxFixedArity = 3;
G__5854.cljs$lang$applyTo = (function (arglist__5855){
var x = cljs.core.first(arglist__5855);
var y = cljs.core.first(cljs.core.next(arglist__5855));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5855)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5855)));
return G__5854__delegate.call(this, x, y, z, args);
});
return G__5854;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__5848.call(this);
case  1 :
return ep3__5849.call(this,x);
case  2 :
return ep3__5850.call(this,x,y);
case  3 :
return ep3__5851.call(this,x,y,z);
default:
return ep3__5852.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__5852.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__5830 = (function() { 
var G__5856__delegate = function (p1,p2,p3,ps){
var ps__5822 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__5857 = (function (){
return true;
});
var epn__5858 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__5775_SHARP_){
return p1__5775_SHARP_.call(null,x);
}),ps__5822);
});
var epn__5859 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__5776_SHARP_){
var and__3574__auto____5823 = p1__5776_SHARP_.call(null,x);

if(cljs.core.truth_(and__3574__auto____5823))
{return p1__5776_SHARP_.call(null,y);
} else
{return and__3574__auto____5823;
}
}),ps__5822);
});
var epn__5860 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__5777_SHARP_){
var and__3574__auto____5824 = p1__5777_SHARP_.call(null,x);

if(cljs.core.truth_(and__3574__auto____5824))
{var and__3574__auto____5825 = p1__5777_SHARP_.call(null,y);

if(cljs.core.truth_(and__3574__auto____5825))
{return p1__5777_SHARP_.call(null,z);
} else
{return and__3574__auto____5825;
}
} else
{return and__3574__auto____5824;
}
}),ps__5822);
});
var epn__5861 = (function() { 
var G__5863__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____5826 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3574__auto____5826))
{return cljs.core.every_QMARK_.call(null,(function (p1__5778_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__5778_SHARP_,args);
}),ps__5822);
} else
{return and__3574__auto____5826;
}
})());
};
var G__5863 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5863__delegate.call(this, x, y, z, args);
};
G__5863.cljs$lang$maxFixedArity = 3;
G__5863.cljs$lang$applyTo = (function (arglist__5864){
var x = cljs.core.first(arglist__5864);
var y = cljs.core.first(cljs.core.next(arglist__5864));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5864)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5864)));
return G__5863__delegate.call(this, x, y, z, args);
});
return G__5863;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__5857.call(this);
case  1 :
return epn__5858.call(this,x);
case  2 :
return epn__5859.call(this,x,y);
case  3 :
return epn__5860.call(this,x,y,z);
default:
return epn__5861.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__5861.cljs$lang$applyTo;
return epn;
})()
};
var G__5856 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5856__delegate.call(this, p1, p2, p3, ps);
};
G__5856.cljs$lang$maxFixedArity = 3;
G__5856.cljs$lang$applyTo = (function (arglist__5865){
var p1 = cljs.core.first(arglist__5865);
var p2 = cljs.core.first(cljs.core.next(arglist__5865));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5865)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5865)));
return G__5856__delegate.call(this, p1, p2, p3, ps);
});
return G__5856;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__5827.call(this,p1);
case  2 :
return every_pred__5828.call(this,p1,p2);
case  3 :
return every_pred__5829.call(this,p1,p2,p3);
default:
return every_pred__5830.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__5830.cljs$lang$applyTo;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__5905 = (function (p){
return (function() {
var sp1 = null;
var sp1__5910 = (function (){
return null;
});
var sp1__5911 = (function (x){
return p.call(null,x);
});
var sp1__5912 = (function (x,y){
var or__3576__auto____5867 = p.call(null,x);

if(cljs.core.truth_(or__3576__auto____5867))
{return or__3576__auto____5867;
} else
{return p.call(null,y);
}
});
var sp1__5913 = (function (x,y,z){
var or__3576__auto____5868 = p.call(null,x);

if(cljs.core.truth_(or__3576__auto____5868))
{return or__3576__auto____5868;
} else
{var or__3576__auto____5869 = p.call(null,y);

if(cljs.core.truth_(or__3576__auto____5869))
{return or__3576__auto____5869;
} else
{return p.call(null,z);
}
}
});
var sp1__5914 = (function() { 
var G__5916__delegate = function (x,y,z,args){
var or__3576__auto____5870 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3576__auto____5870))
{return or__3576__auto____5870;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__5916 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5916__delegate.call(this, x, y, z, args);
};
G__5916.cljs$lang$maxFixedArity = 3;
G__5916.cljs$lang$applyTo = (function (arglist__5917){
var x = cljs.core.first(arglist__5917);
var y = cljs.core.first(cljs.core.next(arglist__5917));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5917)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5917)));
return G__5916__delegate.call(this, x, y, z, args);
});
return G__5916;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__5910.call(this);
case  1 :
return sp1__5911.call(this,x);
case  2 :
return sp1__5912.call(this,x,y);
case  3 :
return sp1__5913.call(this,x,y,z);
default:
return sp1__5914.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__5914.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__5906 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__5918 = (function (){
return null;
});
var sp2__5919 = (function (x){
var or__3576__auto____5871 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____5871))
{return or__3576__auto____5871;
} else
{return p2.call(null,x);
}
});
var sp2__5920 = (function (x,y){
var or__3576__auto____5872 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____5872))
{return or__3576__auto____5872;
} else
{var or__3576__auto____5873 = p1.call(null,y);

if(cljs.core.truth_(or__3576__auto____5873))
{return or__3576__auto____5873;
} else
{var or__3576__auto____5874 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____5874))
{return or__3576__auto____5874;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__5921 = (function (x,y,z){
var or__3576__auto____5875 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____5875))
{return or__3576__auto____5875;
} else
{var or__3576__auto____5876 = p1.call(null,y);

if(cljs.core.truth_(or__3576__auto____5876))
{return or__3576__auto____5876;
} else
{var or__3576__auto____5877 = p1.call(null,z);

if(cljs.core.truth_(or__3576__auto____5877))
{return or__3576__auto____5877;
} else
{var or__3576__auto____5878 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____5878))
{return or__3576__auto____5878;
} else
{var or__3576__auto____5879 = p2.call(null,y);

if(cljs.core.truth_(or__3576__auto____5879))
{return or__3576__auto____5879;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__5922 = (function() { 
var G__5924__delegate = function (x,y,z,args){
var or__3576__auto____5880 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3576__auto____5880))
{return or__3576__auto____5880;
} else
{return cljs.core.some.call(null,(function (p1__5783_SHARP_){
var or__3576__auto____5881 = p1.call(null,p1__5783_SHARP_);

if(cljs.core.truth_(or__3576__auto____5881))
{return or__3576__auto____5881;
} else
{return p2.call(null,p1__5783_SHARP_);
}
}),args);
}
};
var G__5924 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5924__delegate.call(this, x, y, z, args);
};
G__5924.cljs$lang$maxFixedArity = 3;
G__5924.cljs$lang$applyTo = (function (arglist__5925){
var x = cljs.core.first(arglist__5925);
var y = cljs.core.first(cljs.core.next(arglist__5925));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5925)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5925)));
return G__5924__delegate.call(this, x, y, z, args);
});
return G__5924;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__5918.call(this);
case  1 :
return sp2__5919.call(this,x);
case  2 :
return sp2__5920.call(this,x,y);
case  3 :
return sp2__5921.call(this,x,y,z);
default:
return sp2__5922.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__5922.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__5907 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__5926 = (function (){
return null;
});
var sp3__5927 = (function (x){
var or__3576__auto____5882 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____5882))
{return or__3576__auto____5882;
} else
{var or__3576__auto____5883 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____5883))
{return or__3576__auto____5883;
} else
{return p3.call(null,x);
}
}
});
var sp3__5928 = (function (x,y){
var or__3576__auto____5884 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____5884))
{return or__3576__auto____5884;
} else
{var or__3576__auto____5885 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____5885))
{return or__3576__auto____5885;
} else
{var or__3576__auto____5886 = p3.call(null,x);

if(cljs.core.truth_(or__3576__auto____5886))
{return or__3576__auto____5886;
} else
{var or__3576__auto____5887 = p1.call(null,y);

if(cljs.core.truth_(or__3576__auto____5887))
{return or__3576__auto____5887;
} else
{var or__3576__auto____5888 = p2.call(null,y);

if(cljs.core.truth_(or__3576__auto____5888))
{return or__3576__auto____5888;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__5929 = (function (x,y,z){
var or__3576__auto____5889 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____5889))
{return or__3576__auto____5889;
} else
{var or__3576__auto____5890 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____5890))
{return or__3576__auto____5890;
} else
{var or__3576__auto____5891 = p3.call(null,x);

if(cljs.core.truth_(or__3576__auto____5891))
{return or__3576__auto____5891;
} else
{var or__3576__auto____5892 = p1.call(null,y);

if(cljs.core.truth_(or__3576__auto____5892))
{return or__3576__auto____5892;
} else
{var or__3576__auto____5893 = p2.call(null,y);

if(cljs.core.truth_(or__3576__auto____5893))
{return or__3576__auto____5893;
} else
{var or__3576__auto____5894 = p3.call(null,y);

if(cljs.core.truth_(or__3576__auto____5894))
{return or__3576__auto____5894;
} else
{var or__3576__auto____5895 = p1.call(null,z);

if(cljs.core.truth_(or__3576__auto____5895))
{return or__3576__auto____5895;
} else
{var or__3576__auto____5896 = p2.call(null,z);

if(cljs.core.truth_(or__3576__auto____5896))
{return or__3576__auto____5896;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__5930 = (function() { 
var G__5932__delegate = function (x,y,z,args){
var or__3576__auto____5897 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3576__auto____5897))
{return or__3576__auto____5897;
} else
{return cljs.core.some.call(null,(function (p1__5784_SHARP_){
var or__3576__auto____5898 = p1.call(null,p1__5784_SHARP_);

if(cljs.core.truth_(or__3576__auto____5898))
{return or__3576__auto____5898;
} else
{var or__3576__auto____5899 = p2.call(null,p1__5784_SHARP_);

if(cljs.core.truth_(or__3576__auto____5899))
{return or__3576__auto____5899;
} else
{return p3.call(null,p1__5784_SHARP_);
}
}
}),args);
}
};
var G__5932 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5932__delegate.call(this, x, y, z, args);
};
G__5932.cljs$lang$maxFixedArity = 3;
G__5932.cljs$lang$applyTo = (function (arglist__5933){
var x = cljs.core.first(arglist__5933);
var y = cljs.core.first(cljs.core.next(arglist__5933));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5933)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5933)));
return G__5932__delegate.call(this, x, y, z, args);
});
return G__5932;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__5926.call(this);
case  1 :
return sp3__5927.call(this,x);
case  2 :
return sp3__5928.call(this,x,y);
case  3 :
return sp3__5929.call(this,x,y,z);
default:
return sp3__5930.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__5930.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__5908 = (function() { 
var G__5934__delegate = function (p1,p2,p3,ps){
var ps__5900 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__5935 = (function (){
return null;
});
var spn__5936 = (function (x){
return cljs.core.some.call(null,(function (p1__5785_SHARP_){
return p1__5785_SHARP_.call(null,x);
}),ps__5900);
});
var spn__5937 = (function (x,y){
return cljs.core.some.call(null,(function (p1__5786_SHARP_){
var or__3576__auto____5901 = p1__5786_SHARP_.call(null,x);

if(cljs.core.truth_(or__3576__auto____5901))
{return or__3576__auto____5901;
} else
{return p1__5786_SHARP_.call(null,y);
}
}),ps__5900);
});
var spn__5938 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__5787_SHARP_){
var or__3576__auto____5902 = p1__5787_SHARP_.call(null,x);

if(cljs.core.truth_(or__3576__auto____5902))
{return or__3576__auto____5902;
} else
{var or__3576__auto____5903 = p1__5787_SHARP_.call(null,y);

if(cljs.core.truth_(or__3576__auto____5903))
{return or__3576__auto____5903;
} else
{return p1__5787_SHARP_.call(null,z);
}
}
}),ps__5900);
});
var spn__5939 = (function() { 
var G__5941__delegate = function (x,y,z,args){
var or__3576__auto____5904 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3576__auto____5904))
{return or__3576__auto____5904;
} else
{return cljs.core.some.call(null,(function (p1__5788_SHARP_){
return cljs.core.some.call(null,p1__5788_SHARP_,args);
}),ps__5900);
}
};
var G__5941 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5941__delegate.call(this, x, y, z, args);
};
G__5941.cljs$lang$maxFixedArity = 3;
G__5941.cljs$lang$applyTo = (function (arglist__5942){
var x = cljs.core.first(arglist__5942);
var y = cljs.core.first(cljs.core.next(arglist__5942));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5942)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5942)));
return G__5941__delegate.call(this, x, y, z, args);
});
return G__5941;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__5935.call(this);
case  1 :
return spn__5936.call(this,x);
case  2 :
return spn__5937.call(this,x,y);
case  3 :
return spn__5938.call(this,x,y,z);
default:
return spn__5939.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__5939.cljs$lang$applyTo;
return spn;
})()
};
var G__5934 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5934__delegate.call(this, p1, p2, p3, ps);
};
G__5934.cljs$lang$maxFixedArity = 3;
G__5934.cljs$lang$applyTo = (function (arglist__5943){
var p1 = cljs.core.first(arglist__5943);
var p2 = cljs.core.first(cljs.core.next(arglist__5943));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5943)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5943)));
return G__5934__delegate.call(this, p1, p2, p3, ps);
});
return G__5934;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__5905.call(this,p1);
case  2 :
return some_fn__5906.call(this,p1,p2);
case  3 :
return some_fn__5907.call(this,p1,p2,p3);
default:
return some_fn__5908.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__5908.cljs$lang$applyTo;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__5956 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____5944 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____5944))
{var s__5945 = temp__3726__auto____5944;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__5945)),map.call(null,f,cljs.core.rest.call(null,s__5945)));
} else
{return null;
}
})));
});
var map__5957 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__5946 = cljs.core.seq.call(null,c1);
var s2__5947 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3574__auto____5948 = s1__5946;

if(cljs.core.truth_(and__3574__auto____5948))
{return s2__5947;
} else
{return and__3574__auto____5948;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__5946),cljs.core.first.call(null,s2__5947)),map.call(null,f,cljs.core.rest.call(null,s1__5946),cljs.core.rest.call(null,s2__5947)));
} else
{return null;
}
})));
});
var map__5958 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__5949 = cljs.core.seq.call(null,c1);
var s2__5950 = cljs.core.seq.call(null,c2);
var s3__5951 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3574__auto____5952 = s1__5949;

if(cljs.core.truth_(and__3574__auto____5952))
{var and__3574__auto____5953 = s2__5950;

if(cljs.core.truth_(and__3574__auto____5953))
{return s3__5951;
} else
{return and__3574__auto____5953;
}
} else
{return and__3574__auto____5952;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__5949),cljs.core.first.call(null,s2__5950),cljs.core.first.call(null,s3__5951)),map.call(null,f,cljs.core.rest.call(null,s1__5949),cljs.core.rest.call(null,s2__5950),cljs.core.rest.call(null,s3__5951)));
} else
{return null;
}
})));
});
var map__5959 = (function() { 
var G__5961__delegate = function (f,c1,c2,c3,colls){
var step__5955 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__5954 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__5954)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__5954),step.call(null,map.call(null,cljs.core.rest,ss__5954)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__5866_SHARP_){
return cljs.core.apply.call(null,f,p1__5866_SHARP_);
}),step__5955.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__5961 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__5961__delegate.call(this, f, c1, c2, c3, colls);
};
G__5961.cljs$lang$maxFixedArity = 4;
G__5961.cljs$lang$applyTo = (function (arglist__5962){
var f = cljs.core.first(arglist__5962);
var c1 = cljs.core.first(cljs.core.next(arglist__5962));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5962)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__5962))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__5962))));
return G__5961__delegate.call(this, f, c1, c2, c3, colls);
});
return G__5961;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__5956.call(this,f,c1);
case  3 :
return map__5957.call(this,f,c1,c2);
case  4 :
return map__5958.call(this,f,c1,c2,c3);
default:
return map__5959.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__5959.cljs$lang$applyTo;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,n)))
{var temp__3726__auto____5963 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____5963))
{var s__5964 = temp__3726__auto____5963;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__5964),take.call(null,cljs.core.dec.call(null,n),cljs.core.rest.call(null,s__5964)));
} else
{return null;
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__5967 = (function (n,coll){
while(true){
var s__5965 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3574__auto____5966 = cljs.core.pos_QMARK_.call(null,n);

if(cljs.core.truth_(and__3574__auto____5966))
{return s__5965;
} else
{return and__3574__auto____5966;
}
})()))
{{
var G__5968 = cljs.core.dec.call(null,n);
var G__5969 = cljs.core.rest.call(null,s__5965);
n = G__5968;
coll = G__5969;
continue;
}
} else
{return s__5965;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__5967.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__5970 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__5971 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__5970.call(this,n);
case  2 :
return drop_last__5971.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__5973 = cljs.core.seq.call(null,coll);
var lead__5974 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__5974))
{{
var G__5975 = cljs.core.next.call(null,s__5973);
var G__5976 = cljs.core.next.call(null,lead__5974);
s__5973 = G__5975;
lead__5974 = G__5976;
continue;
}
} else
{return s__5973;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__5979 = (function (pred,coll){
while(true){
var s__5977 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3574__auto____5978 = s__5977;

if(cljs.core.truth_(and__3574__auto____5978))
{return pred.call(null,cljs.core.first.call(null,s__5977));
} else
{return and__3574__auto____5978;
}
})()))
{{
var G__5980 = pred;
var G__5981 = cljs.core.rest.call(null,s__5977);
pred = G__5980;
coll = G__5981;
continue;
}
} else
{return s__5977;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__5979.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____5982 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____5982))
{var s__5983 = temp__3726__auto____5982;

return cljs.core.concat.call(null,s__5983,cycle.call(null,s__5983));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.Vector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)]);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__5984 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__5985 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__5984.call(this,n);
case  2 :
return repeat__5985.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__5987 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__5988 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__5987.call(this,n);
case  2 :
return repeatedly__5988.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}))));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__5994 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__5990 = cljs.core.seq.call(null,c1);
var s2__5991 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3574__auto____5992 = s1__5990;

if(cljs.core.truth_(and__3574__auto____5992))
{return s2__5991;
} else
{return and__3574__auto____5992;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__5990),cljs.core.cons.call(null,cljs.core.first.call(null,s2__5991),interleave.call(null,cljs.core.rest.call(null,s1__5990),cljs.core.rest.call(null,s2__5991))));
} else
{return null;
}
})));
});
var interleave__5995 = (function() { 
var G__5997__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__5993 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__5993)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__5993),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__5993)));
} else
{return null;
}
})));
};
var G__5997 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5997__delegate.call(this, c1, c2, colls);
};
G__5997.cljs$lang$maxFixedArity = 2;
G__5997.cljs$lang$applyTo = (function (arglist__5998){
var c1 = cljs.core.first(arglist__5998);
var c2 = cljs.core.first(cljs.core.next(arglist__5998));
var colls = cljs.core.rest(cljs.core.next(arglist__5998));
return G__5997__delegate.call(this, c1, c2, colls);
});
return G__5997;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__5994.call(this,c1,c2);
default:
return interleave__5995.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__5995.cljs$lang$applyTo;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__6001 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3723__auto____5999 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3723__auto____5999))
{var coll__6000 = temp__3723__auto____5999;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__6000),cat.call(null,cljs.core.rest.call(null,coll__6000),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__6001.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__6002 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__6003 = (function() { 
var G__6005__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__6005 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6005__delegate.call(this, f, coll, colls);
};
G__6005.cljs$lang$maxFixedArity = 2;
G__6005.cljs$lang$applyTo = (function (arglist__6006){
var f = cljs.core.first(arglist__6006);
var coll = cljs.core.first(cljs.core.next(arglist__6006));
var colls = cljs.core.rest(cljs.core.next(arglist__6006));
return G__6005__delegate.call(this, f, coll, colls);
});
return G__6005;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__6002.call(this,f,coll);
default:
return mapcat__6003.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__6003.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____6007 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____6007))
{var s__6008 = temp__3726__auto____6007;

var f__6009 = cljs.core.first.call(null,s__6008);
var r__6010 = cljs.core.rest.call(null,s__6008);

if(cljs.core.truth_(pred.call(null,f__6009)))
{return cljs.core.cons.call(null,f__6009,filter.call(null,pred,r__6010));
} else
{return filter.call(null,pred,r__6010);
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk__6012 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__6012.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__6011_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__6011_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
return cljs.core.reduce.call(null,cljs.core._conj,to,from);
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__6019 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__6020 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____6013 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____6013))
{var s__6014 = temp__3726__auto____6013;

var p__6015 = cljs.core.take.call(null,n,s__6014);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__6015))))
{return cljs.core.cons.call(null,p__6015,partition.call(null,n,step,cljs.core.drop.call(null,step,s__6014)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__6021 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____6016 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____6016))
{var s__6017 = temp__3726__auto____6016;

var p__6018 = cljs.core.take.call(null,n,s__6017);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__6018))))
{return cljs.core.cons.call(null,p__6018,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__6017)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__6018,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__6019.call(this,n,step);
case  3 :
return partition__6020.call(this,n,step,pad);
case  4 :
return partition__6021.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of ke(ys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__6027 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__6028 = (function (m,ks,not_found){
var sentinel__6023 = cljs.core.lookup_sentinel;
var m__6024 = m;
var ks__6025 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__6025))
{var m__6026 = cljs.core.get.call(null,m__6024,cljs.core.first.call(null,ks__6025),sentinel__6023);

if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,sentinel__6023,m__6026)))
{return not_found;
} else
{{
var G__6030 = sentinel__6023;
var G__6031 = m__6026;
var G__6032 = cljs.core.next.call(null,ks__6025);
sentinel__6023 = G__6030;
m__6024 = G__6031;
ks__6025 = G__6032;
continue;
}
}
} else
{return m__6024;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__6027.call(this,m,ks);
case  3 :
return get_in__6028.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__6033,v){
var vec__6034__6035 = p__6033;
var k__6036 = cljs.core.nth.call(null,vec__6034__6035,0,null);
var ks__6037 = cljs.core.nthnext.call(null,vec__6034__6035,1);

if(cljs.core.truth_(ks__6037))
{return cljs.core.assoc.call(null,m,k__6036,assoc_in.call(null,cljs.core.get.call(null,m,k__6036),ks__6037,v));
} else
{return cljs.core.assoc.call(null,m,k__6036,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() { 
var update_in__delegate = function (m,p__6038,f,args){
var vec__6039__6040 = p__6038;
var k__6041 = cljs.core.nth.call(null,vec__6039__6040,0,null);
var ks__6042 = cljs.core.nthnext.call(null,vec__6039__6040,1);

if(cljs.core.truth_(ks__6042))
{return cljs.core.assoc.call(null,m,k__6041,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__6041),ks__6042,f,args));
} else
{return cljs.core.assoc.call(null,m,k__6041,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__6041),args));
}
};
var update_in = function (m,p__6038,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__6038, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__6043){
var m = cljs.core.first(arglist__6043);
var p__6038 = cljs.core.first(cljs.core.next(arglist__6043));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6043)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6043)));
return update_in__delegate.call(this, m, p__6038, f, args);
});
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array){
this.meta = meta;
this.array = array;
})
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__6044 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__6045 = this;
var new_array__6046 = cljs.core.aclone.call(null,this__6045.array);

new_array__6046.push(o);
return (new cljs.core.Vector(this__6045.meta,new_array__6046));
});
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__6047 = this;
if(cljs.core.truth_(cljs.core._GT_.call(null,this__6047.array.length,0)))
{var vector_seq__6048 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_(cljs.core._LT_.call(null,i,this__6047.array.length)))
{return cljs.core.cons.call(null,(this__6047.array[i]),vector_seq.call(null,cljs.core.inc.call(null,i)));
} else
{return null;
}
})));
});

return vector_seq__6048.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__6049 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__6050 = this;
var count__6051 = this__6050.array.length;

if(cljs.core.truth_(cljs.core._GT_.call(null,count__6051,0)))
{return (this__6050.array[cljs.core.dec.call(null,count__6051)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__6052 = this;
if(cljs.core.truth_(cljs.core._GT_.call(null,this__6052.array.length,0)))
{var new_array__6053 = cljs.core.aclone.call(null,this__6052.array);

new_array__6053.pop();
return (new cljs.core.Vector(this__6052.meta,new_array__6053));
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__6054 = this;
return (new cljs.core.Vector(meta,this__6054.array));
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__6055 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__6055.meta);
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__6069 = null;
var G__6069__6070 = (function (coll,n){
var this__6056 = this;
if(cljs.core.truth_((function (){var and__3574__auto____6057 = cljs.core._LT__EQ_.call(null,0,n);

if(cljs.core.truth_(and__3574__auto____6057))
{return cljs.core._LT_.call(null,n,this__6056.array.length);
} else
{return and__3574__auto____6057;
}
})()))
{return (this__6056.array[n]);
} else
{return null;
}
});
var G__6069__6071 = (function (coll,n,not_found){
var this__6058 = this;
if(cljs.core.truth_((function (){var and__3574__auto____6059 = cljs.core._LT__EQ_.call(null,0,n);

if(cljs.core.truth_(and__3574__auto____6059))
{return cljs.core._LT_.call(null,n,this__6058.array.length);
} else
{return and__3574__auto____6059;
}
})()))
{return (this__6058.array[n]);
} else
{return not_found;
}
});
G__6069 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__6069__6070.call(this,coll,n);
case  3 :
return G__6069__6071.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6069;
})()
;
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__6060 = this;
return this__6060.meta;
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__6073 = null;
var G__6073__6074 = (function (v,f){
var this__6061 = this;
return cljs.core.ci_reduce.call(null,this__6061.array,f);
});
var G__6073__6075 = (function (v,f,start){
var this__6062 = this;
return cljs.core.ci_reduce.call(null,this__6062.array,f,start);
});
G__6073 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__6073__6074.call(this,v,f);
case  3 :
return G__6073__6075.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6073;
})()
;
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash = (function (coll){
var this__6063 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__6064 = this;
return this__6064.array.length;
});
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__6065 = this;
var new_array__6066 = cljs.core.aclone.call(null,this__6065.array);

(new_array__6066[k] = v);
return (new cljs.core.Vector(this__6065.meta,new_array__6066));
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__6077 = null;
var G__6077__6078 = (function (coll,k){
var this__6067 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__6077__6079 = (function (coll,k,not_found){
var this__6068 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__6077 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__6077__6078.call(this,coll,k);
case  3 :
return G__6077__6079.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6077;
})()
;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,cljs.core.array.call(null)));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.Vector.prototype.call = (function() {
var G__6081 = null;
var G__6081__6082 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__6081__6083 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__6081 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__6081__6082.call(this,_,k);
case  3 :
return G__6081__6083.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6081;
})()
;
cljs.core.vec = (function vec(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.Vector.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec.call(null,args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__6085){
var args = cljs.core.seq( arglist__6085 );;
return vector__delegate.call(this, args);
});
return vector;
})()
;

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
})
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = true;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__6086 = this;
return false;
});
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.map_QMARK_.call(null,y))?(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__6087 = array.length;

var i__6088 = 0;

while(true){
if(cljs.core.truth_(cljs.core._LT_.call(null,i__6088,len__6087)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__6088]))))
{return i__6088;
} else
{{
var G__6089 = cljs.core._PLUS_.call(null,i__6088,incr);
i__6088 = G__6089;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_contains_key_QMARK_ = (function() {
var obj_map_contains_key_QMARK_ = null;
var obj_map_contains_key_QMARK___6091 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___6092 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3574__auto____6090 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3574__auto____6090))
{return strobj.hasOwnProperty(k);
} else
{return and__3574__auto____6090;
}
})()))
{return true_val;
} else
{return false_val;
}
});
obj_map_contains_key_QMARK_ = function(k,strobj,true_val,false_val){
switch(arguments.length){
case  2 :
return obj_map_contains_key_QMARK___6091.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___6092.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
})
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__6095 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__6096 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__6097 = this;
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,this__6097.keys.length)))
{return cljs.core.map.call(null,(function (p1__6094_SHARP_){
return cljs.core.vector.call(null,p1__6094_SHARP_,(this__6097.strobj[p1__6094_SHARP_]));
}),this__6097.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__6098 = this;
return (new cljs.core.ObjMap(meta,this__6098.keys,this__6098.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__6099 = this;
if(cljs.core.truth_((function (){var and__3574__auto____6100 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3574__auto____6100))
{return this__6099.strobj.hasOwnProperty(k);
} else
{return and__3574__auto____6100;
}
})()))
{var new_keys__6101 = cljs.core.aclone.call(null,this__6099.keys);
var new_strobj__6102 = goog.object.clone.call(null,this__6099.strobj);

new_keys__6101.splice(cljs.core.scan_array.call(null,1,k,new_keys__6101),1);
cljs.core.js_delete.call(null,new_strobj__6102,k);
return (new cljs.core.ObjMap(this__6099.meta,new_keys__6101,new_strobj__6102));
} else
{return coll;
}
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__6103 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__6103.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__6104 = this;
return this__6104.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__6105 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__6106 = this;
return this__6106.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__6107 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__6108 = goog.object.clone.call(null,this__6107.strobj);
var overwrite_QMARK___6109 = new_strobj__6108.hasOwnProperty(k);

(new_strobj__6108[k] = v);
if(cljs.core.truth_(overwrite_QMARK___6109))
{return (new cljs.core.ObjMap(this__6107.meta,this__6107.keys,new_strobj__6108));
} else
{var new_keys__6110 = cljs.core.aclone.call(null,this__6107.keys);

new_keys__6110.push(k);
return (new cljs.core.ObjMap(this__6107.meta,new_keys__6110,new_strobj__6108));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__6107.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__6111 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__6111.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__6114 = null;
var G__6114__6115 = (function (coll,k){
var this__6112 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__6114__6116 = (function (coll,k,not_found){
var this__6113 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__6113.strobj,(this__6113.strobj[k]),not_found);
});
G__6114 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__6114__6115.call(this,coll,k);
case  3 :
return G__6114__6116.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6114;
})()
;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,cljs.core.array.call(null),cljs.core.js_obj.call(null)));
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj));
});
cljs.core.ObjMap.prototype.call = (function() {
var G__6119 = null;
var G__6119__6120 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__6119__6121 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__6119 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__6119__6120.call(this,_,k);
case  3 :
return G__6119__6121.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6119;
})()
;

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
})
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__6123 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__6124 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__6125 = this;
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,this__6125.count)))
{var hashes__6126 = cljs.core.js_keys.call(null,this__6125.hashobj);

return cljs.core.mapcat.call(null,(function (p1__6118_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__6125.hashobj[p1__6118_SHARP_])));
}),hashes__6126);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__6127 = this;
return (new cljs.core.HashMap(meta,this__6127.count,this__6127.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__6128 = this;
var h__6129 = cljs.core.hash.call(null,k);
var bucket__6130 = (this__6128.hashobj[h__6129]);
var i__6131 = (cljs.core.truth_(bucket__6130)?cljs.core.scan_array.call(null,2,k,bucket__6130):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__6131)))
{return coll;
} else
{var new_hashobj__6132 = goog.object.clone.call(null,this__6128.hashobj);

if(cljs.core.truth_(cljs.core._GT_.call(null,3,bucket__6130.length)))
{cljs.core.js_delete.call(null,new_hashobj__6132,h__6129);
} else
{var new_bucket__6133 = cljs.core.aclone.call(null,bucket__6130);

new_bucket__6133.splice(i__6131,2);
(new_hashobj__6132[h__6129] = new_bucket__6133);
}
return (new cljs.core.HashMap(this__6128.meta,cljs.core.dec.call(null,this__6128.count),new_hashobj__6132));
}
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__6134 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__6134.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__6135 = this;
return this__6135.meta;
});
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__6136 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__6137 = this;
return this__6137.count;
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__6138 = this;
var h__6139 = cljs.core.hash.call(null,k);
var bucket__6140 = (this__6138.hashobj[h__6139]);

if(cljs.core.truth_(bucket__6140))
{var new_bucket__6141 = cljs.core.aclone.call(null,bucket__6140);
var new_hashobj__6142 = goog.object.clone.call(null,this__6138.hashobj);

(new_hashobj__6142[h__6139] = new_bucket__6141);
var temp__3723__auto____6143 = cljs.core.scan_array.call(null,2,k,new_bucket__6141);

if(cljs.core.truth_(temp__3723__auto____6143))
{var i__6144 = temp__3723__auto____6143;

(new_bucket__6141[cljs.core.inc.call(null,i__6144)] = v);
return (new cljs.core.HashMap(this__6138.meta,this__6138.count,new_hashobj__6142));
} else
{new_bucket__6141.push(k,v);
return (new cljs.core.HashMap(this__6138.meta,cljs.core.inc.call(null,this__6138.count),new_hashobj__6142));
}
} else
{var new_hashobj__6145 = goog.object.clone.call(null,this__6138.hashobj);

(new_hashobj__6145[h__6139] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__6138.meta,cljs.core.inc.call(null,this__6138.count),new_hashobj__6145));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__6146 = this;
var bucket__6147 = (this__6146.hashobj[cljs.core.hash.call(null,k)]);
var i__6148 = (cljs.core.truth_(bucket__6147)?cljs.core.scan_array.call(null,2,k,bucket__6147):null);

if(cljs.core.truth_(i__6148))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__6153 = null;
var G__6153__6154 = (function (coll,k){
var this__6149 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__6153__6155 = (function (coll,k,not_found){
var this__6150 = this;
var bucket__6151 = (this__6150.hashobj[cljs.core.hash.call(null,k)]);
var i__6152 = (cljs.core.truth_(bucket__6151)?cljs.core.scan_array.call(null,2,k,bucket__6151):null);

if(cljs.core.truth_(i__6152))
{return (bucket__6151[cljs.core.inc.call(null,i__6152)]);
} else
{return not_found;
}
});
G__6153 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__6153__6154.call(this,coll,k);
case  3 :
return G__6153__6155.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6153;
})()
;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__6157 = ks.length;

var i__6158 = 0;
var out__6159 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core._LT_.call(null,i__6158,len__6157)))
{{
var G__6160 = cljs.core.inc.call(null,i__6158);
var G__6161 = cljs.core.assoc.call(null,out__6159,(ks[i__6158]),(vs[i__6158]));
i__6158 = G__6160;
out__6159 = G__6161;
continue;
}
} else
{return out__6159;
}
break;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__6162 = null;
var G__6162__6163 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__6162__6164 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__6162 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__6162__6163.call(this,_,k);
case  3 :
return G__6162__6164.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6162;
})()
;
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in$__6166 = cljs.core.seq.call(null,keyvals);
var out__6167 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__6166))
{{
var G__6168 = cljs.core.nnext.call(null,in$__6166);
var G__6169 = cljs.core.assoc.call(null,out__6167,cljs.core.first.call(null,in$__6166),cljs.core.second.call(null,in$__6166));
in$__6166 = G__6168;
out__6167 = G__6169;
continue;
}
} else
{return out__6167;
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__6170){
var keyvals = cljs.core.seq( arglist__6170 );;
return hash_map__delegate.call(this, keyvals);
});
return hash_map;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__6171_SHARP_,p2__6172_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3576__auto____6173 = p1__6171_SHARP_;

if(cljs.core.truth_(or__3576__auto____6173))
{return or__3576__auto____6173;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__6172_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__6174){
var maps = cljs.core.seq( arglist__6174 );;
return merge__delegate.call(this, maps);
});
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{var merge_entry__6177 = (function (m,e){
var k__6175 = cljs.core.first.call(null,e);
var v__6176 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__6175)))
{return cljs.core.assoc.call(null,m,k__6175,f.call(null,cljs.core.get.call(null,m,k__6175),v__6176));
} else
{return cljs.core.assoc.call(null,m,k__6175,v__6176);
}
});
var merge2__6179 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__6177,(function (){var or__3576__auto____6178 = m1;

if(cljs.core.truth_(or__3576__auto____6178))
{return or__3576__auto____6178;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__6179,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__6180){
var f = cljs.core.first(arglist__6180);
var maps = cljs.core.rest(arglist__6180);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__6182 = cljs.core.ObjMap.fromObject([],{});
var keys__6183 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__6183))
{var key__6184 = cljs.core.first.call(null,keys__6183);
var entry__6185 = cljs.core.get.call(null,map,key__6184);

{
var G__6186 = (cljs.core.truth_(entry__6185)?cljs.core.assoc.call(null,ret__6182,key__6184,entry__6185):ret__6182);
var G__6187 = cljs.core.next.call(null,keys__6183);
ret__6182 = G__6186;
keys__6183 = G__6187;
continue;
}
} else
{return ret__6182;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Set = (function (meta,hash_map){
this.meta = meta;
this.hash_map = hash_map;
})
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__6188 = this;
return (new cljs.core.Set(this__6188.meta,cljs.core.dissoc.call(null,this__6188.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__6189 = this;
var and__3574__auto____6190 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3574__auto____6190))
{var and__3574__auto____6191 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3574__auto____6191))
{return cljs.core.every_QMARK_.call(null,(function (p1__6181_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__6181_SHARP_);
}),other);
} else
{return and__3574__auto____6191;
}
} else
{return and__3574__auto____6190;
}
});
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__6192 = this;
return (new cljs.core.Set(this__6192.meta,cljs.core.assoc.call(null,this__6192.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__6193 = this;
return cljs.core.keys.call(null,this__6193.hash_map);
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__6194 = this;
return (new cljs.core.Set(meta,this__6194.hash_map));
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__6195 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__6195.meta);
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__6196 = this;
return this__6196.meta;
});
cljs.core.Set.prototype.cljs$core$IHash$ = true;
cljs.core.Set.prototype.cljs$core$IHash$_hash = (function (coll){
var this__6197 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__6198 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__6201 = null;
var G__6201__6202 = (function (coll,v){
var this__6199 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__6201__6203 = (function (coll,v,not_found){
var this__6200 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__6200.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__6201 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__6201__6202.call(this,coll,v);
case  3 :
return G__6201__6203.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6201;
})()
;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
cljs.core.Set.prototype.call = (function() {
var G__6205 = null;
var G__6205__6206 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__6205__6207 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__6205 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__6205__6206.call(this,_,k);
case  3 :
return G__6205__6207.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6205;
})()
;
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__6210 = cljs.core.seq.call(null,coll);
var out__6211 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__6210))))
{{
var G__6212 = cljs.core.rest.call(null,in$__6210);
var G__6213 = cljs.core.conj.call(null,out__6211,cljs.core.first.call(null,in$__6210));
in$__6210 = G__6212;
out__6211 = G__6213;
continue;
}
} else
{return out__6211;
}
break;
}
});
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,coll)))
{var n__6214 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3723__auto____6215 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3723__auto____6215))
{var e__6216 = temp__3723__auto____6215;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__6216));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__6214,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__6209_SHARP_){
var temp__3723__auto____6217 = cljs.core.find.call(null,smap,p1__6209_SHARP_);

if(cljs.core.truth_(temp__3723__auto____6217))
{var e__6218 = temp__3723__auto____6217;

return cljs.core.second.call(null,e__6218);
} else
{return p1__6209_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__6226 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__6219,seen){
while(true){
var vec__6220__6221 = p__6219;
var f__6222 = cljs.core.nth.call(null,vec__6220__6221,0,null);
var xs__6223 = vec__6220__6221;

var temp__3726__auto____6224 = cljs.core.seq.call(null,xs__6223);

if(cljs.core.truth_(temp__3726__auto____6224))
{var s__6225 = temp__3726__auto____6224;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__6222)))
{{
var G__6227 = cljs.core.rest.call(null,s__6225);
var G__6228 = seen;
p__6219 = G__6227;
seen = G__6228;
continue;
}
} else
{return cljs.core.cons.call(null,f__6222,step.call(null,cljs.core.rest.call(null,s__6225),cljs.core.conj.call(null,seen,f__6222)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__6226.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__6229 = cljs.core.Vector.fromArray([]);
var s__6230 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__6230)))
{{
var G__6231 = cljs.core.conj.call(null,ret__6229,cljs.core.first.call(null,s__6230));
var G__6232 = cljs.core.next.call(null,s__6230);
ret__6229 = G__6231;
s__6230 = G__6232;
continue;
}
} else
{return cljs.core.seq.call(null,ret__6229);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,x)))
{return x;
} else
{if(cljs.core.truth_((function (){var or__3576__auto____6233 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3576__auto____6233))
{return or__3576__auto____6233;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__6234 = x.lastIndexOf("/");

if(cljs.core.truth_(cljs.core._LT_.call(null,i__6234,0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,cljs.core.inc.call(null,i__6234));
}
} else
{if(cljs.core.truth_("﷐'else"))
{return null;
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if(cljs.core.truth_((function (){var or__3576__auto____6235 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3576__auto____6235))
{return or__3576__auto____6235;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__6236 = x.lastIndexOf("/");

if(cljs.core.truth_(cljs.core._GT_.call(null,i__6236,-1)))
{return cljs.core.subs.call(null,x,2,i__6236);
} else
{return null;
}
} else
{return "﷐'else";
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__6239 = cljs.core.ObjMap.fromObject([],{});
var ks__6240 = cljs.core.seq.call(null,keys);
var vs__6241 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3574__auto____6242 = ks__6240;

if(cljs.core.truth_(and__3574__auto____6242))
{return vs__6241;
} else
{return and__3574__auto____6242;
}
})()))
{{
var G__6243 = cljs.core.assoc.call(null,map__6239,cljs.core.first.call(null,ks__6240),cljs.core.first.call(null,vs__6241));
var G__6244 = cljs.core.next.call(null,ks__6240);
var G__6245 = cljs.core.next.call(null,vs__6241);
map__6239 = G__6243;
ks__6240 = G__6244;
vs__6241 = G__6245;
continue;
}
} else
{return map__6239;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__6248 = (function (k,x){
return x;
});
var max_key__6249 = (function (k,x,y){
if(cljs.core.truth_(cljs.core._GT_.call(null,k.call(null,x),k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__6250 = (function() { 
var G__6252__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__6237_SHARP_,p2__6238_SHARP_){
return max_key.call(null,k,p1__6237_SHARP_,p2__6238_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__6252 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6252__delegate.call(this, k, x, y, more);
};
G__6252.cljs$lang$maxFixedArity = 3;
G__6252.cljs$lang$applyTo = (function (arglist__6253){
var k = cljs.core.first(arglist__6253);
var x = cljs.core.first(cljs.core.next(arglist__6253));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6253)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6253)));
return G__6252__delegate.call(this, k, x, y, more);
});
return G__6252;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__6248.call(this,k,x);
case  3 :
return max_key__6249.call(this,k,x,y);
default:
return max_key__6250.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__6250.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__6254 = (function (k,x){
return x;
});
var min_key__6255 = (function (k,x,y){
if(cljs.core.truth_(cljs.core._LT_.call(null,k.call(null,x),k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__6256 = (function() { 
var G__6258__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__6246_SHARP_,p2__6247_SHARP_){
return min_key.call(null,k,p1__6246_SHARP_,p2__6247_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__6258 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6258__delegate.call(this, k, x, y, more);
};
G__6258.cljs$lang$maxFixedArity = 3;
G__6258.cljs$lang$applyTo = (function (arglist__6259){
var k = cljs.core.first(arglist__6259);
var x = cljs.core.first(cljs.core.next(arglist__6259));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6259)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6259)));
return G__6258__delegate.call(this, k, x, y, more);
});
return G__6258;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__6254.call(this,k,x);
case  3 :
return min_key__6255.call(this,k,x,y);
default:
return min_key__6256.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__6256.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__6262 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__6263 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____6260 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____6260))
{var s__6261 = temp__3726__auto____6260;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__6261),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__6261)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__6262.call(this,n,step);
case  3 :
return partition_all__6263.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____6265 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____6265))
{var s__6266 = temp__3726__auto____6265;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__6266))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__6266),take_while.call(null,pred,cljs.core.rest.call(null,s__6266)));
} else
{return null;
}
} else
{return null;
}
})));
});
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1, and end
* to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__6267 = (function (){
return cljs.core.iterate.call(null,cljs.core.inc,0);
});
var range__6268 = (function (end){
return range.call(null,0,end,1);
});
var range__6269 = (function (start,end){
return range.call(null,start,end,1);
});
var range__6270 = (function (start,end,step){
return cljs.core.take_while.call(null,(function (n){
return cljs.core._LT_.call(null,n,end);
}),cljs.core.iterate.call(null,(function (x){
return cljs.core._PLUS_.call(null,x,step);
}),start));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__6267.call(this);
case  1 :
return range__6268.call(this,start);
case  2 :
return range__6269.call(this,start,end);
case  3 :
return range__6270.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____6272 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____6272))
{var s__6273 = temp__3726__auto____6272;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__6273),take_nth.call(null,n,cljs.core.drop.call(null,n,s__6273)));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.Vector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)]);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____6275 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____6275))
{var s__6276 = temp__3726__auto____6275;

var fst__6277 = cljs.core.first.call(null,s__6276);
var fv__6278 = f.call(null,fst__6277);
var run__6279 = cljs.core.cons.call(null,fst__6277,cljs.core.take_while.call(null,(function (p1__6274_SHARP_){
return cljs.core._EQ_.call(null,fv__6278,f.call(null,p1__6274_SHARP_));
}),cljs.core.next.call(null,s__6276)));

return cljs.core.cons.call(null,run__6279,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__6279),s__6276))));
} else
{return null;
}
})));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc.call(null,counts,x,cljs.core.inc.call(null,cljs.core.get.call(null,counts,x,0)));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__6294 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3723__auto____6290 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3723__auto____6290))
{var s__6291 = temp__3723__auto____6290;

return reductions.call(null,f,cljs.core.first.call(null,s__6291),cljs.core.rest.call(null,s__6291));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__6295 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____6292 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____6292))
{var s__6293 = temp__3726__auto____6292;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__6293)),cljs.core.rest.call(null,s__6293));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__6294.call(this,f,init);
case  3 :
return reductions__6295.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__6298 = (function (f){
return (function() {
var G__6303 = null;
var G__6303__6304 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__6303__6305 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__6303__6306 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__6303__6307 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__6303__6308 = (function() { 
var G__6310__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__6310 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6310__delegate.call(this, x, y, z, args);
};
G__6310.cljs$lang$maxFixedArity = 3;
G__6310.cljs$lang$applyTo = (function (arglist__6311){
var x = cljs.core.first(arglist__6311);
var y = cljs.core.first(cljs.core.next(arglist__6311));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6311)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6311)));
return G__6310__delegate.call(this, x, y, z, args);
});
return G__6310;
})()
;
G__6303 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__6303__6304.call(this);
case  1 :
return G__6303__6305.call(this,x);
case  2 :
return G__6303__6306.call(this,x,y);
case  3 :
return G__6303__6307.call(this,x,y,z);
default:
return G__6303__6308.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__6303.cljs$lang$maxFixedArity = 3;
G__6303.cljs$lang$applyTo = G__6303__6308.cljs$lang$applyTo;
return G__6303;
})()
});
var juxt__6299 = (function (f,g){
return (function() {
var G__6312 = null;
var G__6312__6313 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__6312__6314 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__6312__6315 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__6312__6316 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__6312__6317 = (function() { 
var G__6319__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__6319 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6319__delegate.call(this, x, y, z, args);
};
G__6319.cljs$lang$maxFixedArity = 3;
G__6319.cljs$lang$applyTo = (function (arglist__6320){
var x = cljs.core.first(arglist__6320);
var y = cljs.core.first(cljs.core.next(arglist__6320));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6320)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6320)));
return G__6319__delegate.call(this, x, y, z, args);
});
return G__6319;
})()
;
G__6312 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__6312__6313.call(this);
case  1 :
return G__6312__6314.call(this,x);
case  2 :
return G__6312__6315.call(this,x,y);
case  3 :
return G__6312__6316.call(this,x,y,z);
default:
return G__6312__6317.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__6312.cljs$lang$maxFixedArity = 3;
G__6312.cljs$lang$applyTo = G__6312__6317.cljs$lang$applyTo;
return G__6312;
})()
});
var juxt__6300 = (function (f,g,h){
return (function() {
var G__6321 = null;
var G__6321__6322 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__6321__6323 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__6321__6324 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__6321__6325 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__6321__6326 = (function() { 
var G__6328__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__6328 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6328__delegate.call(this, x, y, z, args);
};
G__6328.cljs$lang$maxFixedArity = 3;
G__6328.cljs$lang$applyTo = (function (arglist__6329){
var x = cljs.core.first(arglist__6329);
var y = cljs.core.first(cljs.core.next(arglist__6329));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6329)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6329)));
return G__6328__delegate.call(this, x, y, z, args);
});
return G__6328;
})()
;
G__6321 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__6321__6322.call(this);
case  1 :
return G__6321__6323.call(this,x);
case  2 :
return G__6321__6324.call(this,x,y);
case  3 :
return G__6321__6325.call(this,x,y,z);
default:
return G__6321__6326.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__6321.cljs$lang$maxFixedArity = 3;
G__6321.cljs$lang$applyTo = G__6321__6326.cljs$lang$applyTo;
return G__6321;
})()
});
var juxt__6301 = (function() { 
var G__6330__delegate = function (f,g,h,fs){
var fs__6297 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__6331 = null;
var G__6331__6332 = (function (){
return cljs.core.reduce.call(null,(function (p1__6280_SHARP_,p2__6281_SHARP_){
return cljs.core.conj.call(null,p1__6280_SHARP_,p2__6281_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__6297);
});
var G__6331__6333 = (function (x){
return cljs.core.reduce.call(null,(function (p1__6282_SHARP_,p2__6283_SHARP_){
return cljs.core.conj.call(null,p1__6282_SHARP_,p2__6283_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__6297);
});
var G__6331__6334 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__6284_SHARP_,p2__6285_SHARP_){
return cljs.core.conj.call(null,p1__6284_SHARP_,p2__6285_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__6297);
});
var G__6331__6335 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__6286_SHARP_,p2__6287_SHARP_){
return cljs.core.conj.call(null,p1__6286_SHARP_,p2__6287_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__6297);
});
var G__6331__6336 = (function() { 
var G__6338__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__6288_SHARP_,p2__6289_SHARP_){
return cljs.core.conj.call(null,p1__6288_SHARP_,cljs.core.apply.call(null,p2__6289_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__6297);
};
var G__6338 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6338__delegate.call(this, x, y, z, args);
};
G__6338.cljs$lang$maxFixedArity = 3;
G__6338.cljs$lang$applyTo = (function (arglist__6339){
var x = cljs.core.first(arglist__6339);
var y = cljs.core.first(cljs.core.next(arglist__6339));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6339)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6339)));
return G__6338__delegate.call(this, x, y, z, args);
});
return G__6338;
})()
;
G__6331 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__6331__6332.call(this);
case  1 :
return G__6331__6333.call(this,x);
case  2 :
return G__6331__6334.call(this,x,y);
case  3 :
return G__6331__6335.call(this,x,y,z);
default:
return G__6331__6336.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__6331.cljs$lang$maxFixedArity = 3;
G__6331.cljs$lang$applyTo = G__6331__6336.cljs$lang$applyTo;
return G__6331;
})()
};
var G__6330 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6330__delegate.call(this, f, g, h, fs);
};
G__6330.cljs$lang$maxFixedArity = 3;
G__6330.cljs$lang$applyTo = (function (arglist__6340){
var f = cljs.core.first(arglist__6340);
var g = cljs.core.first(cljs.core.next(arglist__6340));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6340)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6340)));
return G__6330__delegate.call(this, f, g, h, fs);
});
return G__6330;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__6298.call(this,f);
case  2 :
return juxt__6299.call(this,f,g);
case  3 :
return juxt__6300.call(this,f,g,h);
default:
return juxt__6301.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__6301.cljs$lang$applyTo;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__6342 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__6345 = cljs.core.next.call(null,coll);
coll = G__6345;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__6343 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3574__auto____6341 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3574__auto____6341))
{return cljs.core.pos_QMARK_.call(null,n);
} else
{return and__3574__auto____6341;
}
})()))
{{
var G__6346 = cljs.core.dec.call(null,n);
var G__6347 = cljs.core.next.call(null,coll);
n = G__6346;
coll = G__6347;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case  1 :
return dorun__6342.call(this,n);
case  2 :
return dorun__6343.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__6348 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__6349 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__6348.call(this,n);
case  2 :
return doall__6349.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return doall;
})()
;
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__6351 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__6351),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__6351),1)))
{return cljs.core.first.call(null,matches__6351);
} else
{return cljs.core.vec.call(null,matches__6351);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches__6352 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__6352)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__6352),1)))
{return cljs.core.first.call(null,matches__6352);
} else
{return cljs.core.vec.call(null,matches__6352);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__6353 = cljs.core.re_find.call(null,re,s);
var match_idx__6354 = s.search(re);
var match_str__6355 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__6353))?cljs.core.first.call(null,match_data__6353):match_data__6353);
var post_match__6356 = cljs.core.subs.call(null,s,cljs.core._PLUS_.call(null,match_idx__6354,cljs.core.count.call(null,match_str__6355)));

if(cljs.core.truth_(match_data__6353))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__6353,re_seq.call(null,re,post_match__6356));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
return (new goog.global['RegExp'](s));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__6357_SHARP_){
return print_one.call(null,p1__6357_SHARP_,opts);
}),coll))),cljs.core.Vector.fromArray([end]));
});
cljs.core.string_print = (function string_print(x){
goog.global['print'].call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,"nil");
} else
{if(cljs.core.truth_(cljs.core.undefined_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3574__auto____6358 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3574__auto____6358))
{var and__3574__auto____6361 = (function (){var x__3143__auto____6359 = obj;

if(cljs.core.truth_((function (){var and__3574__auto____6360 = x__3143__auto____6359;

if(cljs.core.truth_(and__3574__auto____6360))
{return x__3143__auto____6359.cljs$core$IMeta$;
} else
{return and__3574__auto____6360;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__3143__auto____6359);
}
})();

if(cljs.core.truth_(and__3574__auto____6361))
{return cljs.core.meta.call(null,obj);
} else
{return and__3574__auto____6361;
}
} else
{return and__3574__auto____6358;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__3143__auto____6362 = obj;

if(cljs.core.truth_((function (){var and__3574__auto____6363 = x__3143__auto____6362;

if(cljs.core.truth_(and__3574__auto____6363))
{return x__3143__auto____6362.cljs$core$IPrintable$;
} else
{return and__3574__auto____6363;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__3143__auto____6362);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
var first_obj__6364 = cljs.core.first.call(null,objs);
var sb__6365 = (new goog.string.StringBuffer());

var G__6366__6367 = cljs.core.seq.call(null,objs);

while(true){
if(cljs.core.truth_(G__6366__6367))
{var obj__6368 = cljs.core.first.call(null,G__6366__6367);

if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,obj__6368,first_obj__6364)))
{} else
{sb__6365.append(" ");
}
var G__6369__6370 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__6368,opts));

while(true){
if(cljs.core.truth_(G__6369__6370))
{var string__6371 = cljs.core.first.call(null,G__6369__6370);

sb__6365.append(string__6371);
{
var G__6372 = cljs.core.next.call(null,G__6369__6370);
G__6369__6370 = G__6372;
continue;
}
} else
{}
break;
}
{
var G__6373 = cljs.core.next.call(null,G__6366__6367);
G__6366__6367 = G__6373;
continue;
}
} else
{}
break;
}
return cljs.core.str.call(null,sb__6365);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__6374 = cljs.core.first.call(null,objs);

var G__6375__6376 = cljs.core.seq.call(null,objs);

while(true){
if(cljs.core.truth_(G__6375__6376))
{var obj__6377 = cljs.core.first.call(null,G__6375__6376);

if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,obj__6377,first_obj__6374)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__6378__6379 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__6377,opts));

while(true){
if(cljs.core.truth_(G__6378__6379))
{var string__6380 = cljs.core.first.call(null,G__6378__6379);

cljs.core.string_print.call(null,string__6380);
{
var G__6381 = cljs.core.next.call(null,G__6378__6379);
G__6378__6379 = G__6381;
continue;
}
} else
{}
break;
}
{
var G__6382 = cljs.core.next.call(null,G__6375__6376);
G__6375__6376 = G__6382;
continue;
}
} else
{return null;
}
break;
}
});
cljs.core.newline = (function newline(opts){
cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core.get.call(null,opts,"﷐'flush-on-newline")))
{return cljs.core.flush.call(null);
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["﷐'flush-on-newline","﷐'readably","﷐'meta","﷐'dup"],{"﷐'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"﷐'readably":cljs.core._STAR_print_readably_STAR_,"﷐'meta":cljs.core._STAR_print_meta_STAR_,"﷐'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__6383){
var objs = cljs.core.seq( arglist__6383 );;
return pr_str__delegate.call(this, objs);
});
return pr_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__6384){
var objs = cljs.core.seq( arglist__6384 );;
return pr__delegate.call(this, objs);
});
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__6385){
var objs = cljs.core.seq( arglist__6385 );;
return cljs_core_print__delegate.call(this, objs);
});
return cljs_core_print;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__6386){
var objs = cljs.core.seq( arglist__6386 );;
return println__delegate.call(this, objs);
});
return println;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__6387){
var objs = cljs.core.seq( arglist__6387 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__6388 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__6388,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,n));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,bool));
}));
cljs.core.Set.prototype.cljs$core$IPrintable$ = true;
cljs.core.Set.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3726__auto____6389 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3726__auto____6389))
{var nspc__6390 = temp__3726__auto____6389;

return cljs.core.str.call(null,nspc__6390,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3726__auto____6391 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3726__auto____6391))
{var nspc__6392 = temp__3726__auto____6391;

return cljs.core.str.call(null,nspc__6392,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.list.call(null,(cljs.core.truth_("﷐'readably".call(null,opts))?goog.string.quote.call(null,obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__6393 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__6393,"{",", ","}",opts,coll);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator){
this.state = state;
this.meta = meta;
this.validator = validator;
})
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__6394 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__6394.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__6395 = this;
return this__6395.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__6396 = this;
return this__6396.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__6397 = this;
return cljs.core.identical_QMARK_.call(null,o,other);
});
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an exception.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__6404 = (function (x){
return (new cljs.core.Atom(x,null,null));
});
var atom__6405 = (function() { 
var G__6407__delegate = function (x,p__6398){
var map__6399__6400 = p__6398;
var map__6399__6401 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__6399__6400))?cljs.core.apply.call(null,cljs.core.hash_map,map__6399__6400):map__6399__6400);
var validator__6402 = cljs.core.get.call(null,map__6399__6401,"﷐'validator");
var meta__6403 = cljs.core.get.call(null,map__6399__6401,"﷐'meta");

return (new cljs.core.Atom(x,meta__6403,validator__6402));
};
var G__6407 = function (x,var_args){
var p__6398 = null;
if (goog.isDef(var_args)) {
  p__6398 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__6407__delegate.call(this, x, p__6398);
};
G__6407.cljs$lang$maxFixedArity = 1;
G__6407.cljs$lang$applyTo = (function (arglist__6408){
var x = cljs.core.first(arglist__6408);
var p__6398 = cljs.core.rest(arglist__6408);
return G__6407__delegate.call(this, x, p__6398);
});
return G__6407;
})()
;
atom = function(x,var_args){
var p__6398 = var_args;
switch(arguments.length){
case  1 :
return atom__6404.call(this,x);
default:
return atom__6405.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__6405.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,newval){
var temp__3726__auto____6409 = a.validator;

if(cljs.core.truth_(temp__3726__auto____6409))
{var v__6410 = temp__3726__auto____6409;

if(cljs.core.truth_(v__6410.call(null,newval)))
{} else
{throw "Validator rejected reference state";
}
} else
{}
return a.state = newval;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___6411 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___6412 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___6413 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___6414 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___6415 = (function() { 
var G__6417__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__6417 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__6417__delegate.call(this, a, f, x, y, z, more);
};
G__6417.cljs$lang$maxFixedArity = 5;
G__6417.cljs$lang$applyTo = (function (arglist__6418){
var a = cljs.core.first(arglist__6418);
var f = cljs.core.first(cljs.core.next(arglist__6418));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6418)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__6418))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__6418)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__6418)))));
return G__6417__delegate.call(this, a, f, x, y, z, more);
});
return G__6417;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___6411.call(this,a,f);
case  3 :
return swap_BANG___6412.call(this,a,f,x);
case  4 :
return swap_BANG___6413.call(this,a,f,x,y);
case  5 :
return swap_BANG___6414.call(this,a,f,x,y,z);
default:
return swap_BANG___6415.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___6415.cljs$lang$applyTo;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core.truth_(cljs.core._EQ_.call(null,a.state,oldval)))
{cljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref.call(null,o);
});
/**
* Sets the validator-fn for a var/ref/agent/atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an exception. If the current state (root
* value if var) is not acceptable to the new validator, an exception
* will be thrown and the validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__6419){
var iref = cljs.core.first(arglist__6419);
var f = cljs.core.first(cljs.core.next(arglist__6419));
var args = cljs.core.rest(cljs.core.next(arglist__6419));
return alter_meta_BANG___delegate.call(this, iref, f, args);
});
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for a namespace/var/ref/agent/atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__6420 = (function (){
return gensym.call(null,"G__");
});
var gensym__6421 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__6420.call(this);
case  1 :
return gensym__6421.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

/**
* @constructor
*/
cljs.core.Delay = (function (f,state){
this.f = f;
this.state = state;
})
cljs.core.Delay.prototype.cljs$core$IPending$ = true;
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_ = (function (d){
var this__6423 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__6423.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__6424 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__6424.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__6424.state,this__6424.f);
}
return cljs.core.deref.call(null,this__6424.state);
});
/**
* Takes a body of expressions and yields a Delay object that will
* invoke the body only the first time it is forced (with force or deref/@), and
* will cache the result and return it on all subsequent force
* calls.
* @param {...*} var_args
*/
cljs.core.delay = (function() { 
var delay__delegate = function (body){
return (new cljs.core.Delay((function (){
return cljs.core.apply.call(null,cljs.core.identity,body);
}),cljs.core.atom.call(null,null)));
};
var delay = function (var_args){
var body = null;
if (goog.isDef(var_args)) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return delay__delegate.call(this, body);
};
delay.cljs$lang$maxFixedArity = 0;
delay.cljs$lang$applyTo = (function (arglist__6425){
var body = cljs.core.seq( arglist__6425 );;
return delay__delegate.call(this, body);
});
return delay;
})()
;
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_.call(null,cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.truth_(cljs.core.delay_QMARK_.call(null,x)))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_.call(null,d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() { 
var js__GT_clj__delegate = function (x,options){
var map__6426__6427 = options;
var map__6426__6428 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__6426__6427))?cljs.core.apply.call(null,cljs.core.hash_map,map__6426__6427):map__6426__6427);
var keywordize_keys__6429 = cljs.core.get.call(null,map__6426__6428,"﷐'keywordize-keys");
var keyfn__6430 = (cljs.core.truth_(keywordize_keys__6429)?cljs.core.keyword:cljs.core.str);
var f__6436 = (function thisfn(x){
if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,x)))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(cljs.core.coll_QMARK_.call(null,x)))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray.call(null,x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isObject.call(null,x)))
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__3197__auto____6435 = (function iter__6431(s__6432){
return (new cljs.core.LazySeq(null,false,(function (){
var s__6432__6433 = s__6432;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__6432__6433)))
{var k__6434 = cljs.core.first.call(null,s__6432__6433);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__6430.call(null,k__6434),thisfn.call(null,(x[k__6434]))]),iter__6431.call(null,cljs.core.rest.call(null,s__6432__6433)));
} else
{return null;
}
break;
}
})));
});

return iter__3197__auto____6435.call(null,cljs.core.js_keys.call(null,x));
})());
} else
{if(cljs.core.truth_("﷐'else"))
{return x;
} else
{return null;
}
}
}
}
}
});

return f__6436.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__6437){
var x = cljs.core.first(arglist__6437);
var options = cljs.core.rest(arglist__6437);
return js__GT_clj__delegate.call(this, x, options);
});
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem__6438 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__6442__delegate = function (args){
var temp__3723__auto____6439 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__6438),args);

if(cljs.core.truth_(temp__3723__auto____6439))
{var v__6440 = temp__3723__auto____6439;

return v__6440;
} else
{var ret__6441 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__6438,cljs.core.assoc,args,ret__6441);
return ret__6441;
}
};
var G__6442 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__6442__delegate.call(this, args);
};
G__6442.cljs$lang$maxFixedArity = 0;
G__6442.cljs$lang$applyTo = (function (arglist__6443){
var args = cljs.core.seq( arglist__6443 );;
return G__6442__delegate.call(this, args);
});
return G__6442;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__6445 = (function (f){
while(true){
var ret__6444 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__6444)))
{{
var G__6448 = ret__6444;
f = G__6448;
continue;
}
} else
{return ret__6444;
}
break;
}
});
var trampoline__6446 = (function() { 
var G__6449__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__6449 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__6449__delegate.call(this, f, args);
};
G__6449.cljs$lang$maxFixedArity = 1;
G__6449.cljs$lang$applyTo = (function (arglist__6450){
var f = cljs.core.first(arglist__6450);
var args = cljs.core.rest(arglist__6450);
return G__6449__delegate.call(this, f, args);
});
return G__6449;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__6445.call(this,f);
default:
return trampoline__6446.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__6446.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__6451 = (function (){
return rand.call(null,1);
});
var rand__6452 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__6451.call(this);
case  1 :
return rand__6452.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return Math.floor(Math.random() * n);
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.call(null,(function (ret,x){
var k__6454 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__6454,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__6454,cljs.core.Vector.fromArray([])),x));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'descendants","﷐'ancestors"],{"﷐'parents":cljs.core.ObjMap.fromObject([],{}),"﷐'descendants":cljs.core.ObjMap.fromObject([],{}),"﷐'ancestors":cljs.core.ObjMap.fromObject([],{})});
});
cljs.core.global_hierarchy = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a Java type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___6463 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___6464 = (function (h,child,parent){
var or__3576__auto____6455 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3576__auto____6455))
{return or__3576__auto____6455;
} else
{var or__3576__auto____6456 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3576__auto____6456))
{return or__3576__auto____6456;
} else
{var and__3574__auto____6457 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3574__auto____6457))
{var and__3574__auto____6458 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3574__auto____6458))
{var and__3574__auto____6459 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3574__auto____6459))
{var ret__6460 = true;
var i__6461 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3576__auto____6462 = cljs.core.not.call(null,ret__6460);

if(cljs.core.truth_(or__3576__auto____6462))
{return or__3576__auto____6462;
} else
{return cljs.core._EQ_.call(null,i__6461,cljs.core.count.call(null,parent));
}
})()))
{return ret__6460;
} else
{{
var G__6466 = isa_QMARK_.call(null,h,child.call(null,i__6461),parent.call(null,i__6461));
var G__6467 = cljs.core.inc.call(null,i__6461);
ret__6460 = G__6466;
i__6461 = G__6467;
continue;
}
}
break;
}
} else
{return and__3574__auto____6459;
}
} else
{return and__3574__auto____6458;
}
} else
{return and__3574__auto____6457;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___6463.call(this,h,child);
case  3 :
return isa_QMARK___6464.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__6468 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__6469 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__6468.call(this,h);
case  2 :
return parents__6469.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__6471 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__6472 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__6471.call(this,h);
case  2 :
return ancestors__6472.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on Java type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__6474 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__6475 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__6474.call(this,h);
case  2 :
return descendants__6475.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__6485 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'namespace","﷑'parent")));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__6486 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not=","﷑'tag","﷑'parent")));
}
var tp__6480 = "﷐'parents".call(null,h);
var td__6481 = "﷐'descendants".call(null,h);
var ta__6482 = "﷐'ancestors".call(null,h);
var tf__6483 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3576__auto____6484 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__6480.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__6482.call(null,tag),parent)))
{throw cljs.core.str.call(null,tag,"already has",parent,"as ancestor");
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__6482.call(null,parent),tag)))
{throw cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor");
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__6480,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__6483.call(null,"﷐'ancestors".call(null,h),tag,td__6481,parent,ta__6482),"﷐'descendants":tf__6483.call(null,"﷐'descendants".call(null,h),parent,ta__6482,tag,td__6481)});
})());

if(cljs.core.truth_(or__3576__auto____6484))
{return or__3576__auto____6484;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__6485.call(this,h,tag);
case  3 :
return derive__6486.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__6492 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__6493 = (function (h,tag,parent){
var parentMap__6488 = "﷐'parents".call(null,h);
var childsParents__6489 = (cljs.core.truth_(parentMap__6488.call(null,tag))?cljs.core.disj.call(null,parentMap__6488.call(null,tag),parent):cljs.core.set([]));
var newParents__6490 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__6489))?cljs.core.assoc.call(null,parentMap__6488,tag,childsParents__6489):cljs.core.dissoc.call(null,parentMap__6488,tag));
var deriv_seq__6491 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__6477_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__6477_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__6477_SHARP_),cljs.core.second.call(null,p1__6477_SHARP_)));
}),cljs.core.seq.call(null,newParents__6490)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__6488.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__6478_SHARP_,p2__6479_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__6478_SHARP_,p2__6479_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__6491));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__6492.call(this,h,tag);
case  3 :
return underive__6493.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.call(null,method_cache,(function (_){
return cljs.core.deref.call(null,method_table);
}));
return cljs.core.swap_BANG_.call(null,cached_hierarchy,(function (_){
return cljs.core.deref.call(null,hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs__6495 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3576__auto____6497 = (cljs.core.truth_((function (){var and__3574__auto____6496 = xprefs__6495;

if(cljs.core.truth_(and__3574__auto____6496))
{return xprefs__6495.call(null,y);
} else
{return and__3574__auto____6496;
}
})())?true:null);

if(cljs.core.truth_(or__3576__auto____6497))
{return or__3576__auto____6497;
} else
{var or__3576__auto____6499 = (function (){var ps__6498 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,cljs.core.count.call(null,ps__6498))))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__6498),prefer_table)))
{} else
{}
{
var G__6502 = cljs.core.rest.call(null,ps__6498);
ps__6498 = G__6502;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3576__auto____6499))
{return or__3576__auto____6499;
} else
{var or__3576__auto____6501 = (function (){var ps__6500 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,cljs.core.count.call(null,ps__6500))))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__6500),y,prefer_table)))
{} else
{}
{
var G__6503 = cljs.core.rest.call(null,ps__6500);
ps__6500 = G__6503;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3576__auto____6501))
{return or__3576__auto____6501;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3576__auto____6504 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3576__auto____6504))
{return or__3576__auto____6504;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__6513 = cljs.core.reduce.call(null,(function (be,p__6505){
var vec__6506__6507 = p__6505;
var k__6508 = cljs.core.nth.call(null,vec__6506__6507,0,null);
var ___6509 = cljs.core.nth.call(null,vec__6506__6507,1,null);
var e__6510 = vec__6506__6507;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__6508)))
{var be2__6512 = (cljs.core.truth_((function (){var or__3576__auto____6511 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3576__auto____6511))
{return or__3576__auto____6511;
} else
{return cljs.core.dominates.call(null,k__6508,cljs.core.first.call(null,be),prefer_table);
}
})())?e__6510:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__6512),k__6508,prefer_table)))
{} else
{throw cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__6508," and ",cljs.core.first.call(null,be2__6512),", and neither is preferred");
}
return be2__6512;
} else
{return null;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__6513))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__6513));
return cljs.core.second.call(null,best_entry__6513);
} else
{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if(cljs.core.truth_((function (){var and__3574__auto____6514 = mf;

if(cljs.core.truth_(and__3574__auto____6514))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3574__auto____6514;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3576__auto____6515 = (_reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____6515))
{return or__3576__auto____6515;
} else
{var or__3576__auto____6516 = (_reset["_"]);

if(cljs.core.truth_(or__3576__auto____6516))
{return or__3576__auto____6516;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3574__auto____6517 = mf;

if(cljs.core.truth_(and__3574__auto____6517))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3574__auto____6517;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3576__auto____6518 = (_add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____6518))
{return or__3576__auto____6518;
} else
{var or__3576__auto____6519 = (_add_method["_"]);

if(cljs.core.truth_(or__3576__auto____6519))
{return or__3576__auto____6519;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3574__auto____6520 = mf;

if(cljs.core.truth_(and__3574__auto____6520))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3574__auto____6520;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3576__auto____6521 = (_remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____6521))
{return or__3576__auto____6521;
} else
{var or__3576__auto____6522 = (_remove_method["_"]);

if(cljs.core.truth_(or__3576__auto____6522))
{return or__3576__auto____6522;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3574__auto____6523 = mf;

if(cljs.core.truth_(and__3574__auto____6523))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3574__auto____6523;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3576__auto____6524 = (_prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____6524))
{return or__3576__auto____6524;
} else
{var or__3576__auto____6525 = (_prefer_method["_"]);

if(cljs.core.truth_(or__3576__auto____6525))
{return or__3576__auto____6525;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3574__auto____6526 = mf;

if(cljs.core.truth_(and__3574__auto____6526))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3574__auto____6526;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3576__auto____6527 = (_get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____6527))
{return or__3576__auto____6527;
} else
{var or__3576__auto____6528 = (_get_method["_"]);

if(cljs.core.truth_(or__3576__auto____6528))
{return or__3576__auto____6528;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3574__auto____6529 = mf;

if(cljs.core.truth_(and__3574__auto____6529))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3574__auto____6529;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3576__auto____6530 = (_methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____6530))
{return or__3576__auto____6530;
} else
{var or__3576__auto____6531 = (_methods["_"]);

if(cljs.core.truth_(or__3576__auto____6531))
{return or__3576__auto____6531;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3574__auto____6532 = mf;

if(cljs.core.truth_(and__3574__auto____6532))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3574__auto____6532;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3576__auto____6533 = (_prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____6533))
{return or__3576__auto____6533;
} else
{var or__3576__auto____6534 = (_prefers["_"]);

if(cljs.core.truth_(or__3576__auto____6534))
{return or__3576__auto____6534;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._invoke = (function _invoke(mf,args){
if(cljs.core.truth_((function (){var and__3574__auto____6535 = mf;

if(cljs.core.truth_(and__3574__auto____6535))
{return mf.cljs$core$IMultiFn$_invoke;
} else
{return and__3574__auto____6535;
}
})()))
{return mf.cljs$core$IMultiFn$_invoke(mf,args);
} else
{return (function (){var or__3576__auto____6536 = (_invoke[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____6536))
{return or__3576__auto____6536;
} else
{var or__3576__auto____6537 = (_invoke["_"]);

if(cljs.core.truth_(or__3576__auto____6537))
{return or__3576__auto____6537;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-invoke",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_invoke = (function do_invoke(mf,dispatch_fn,args){
var dispatch_val__6538 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__6539 = cljs.core._get_method.call(null,mf,dispatch_val__6538);

if(cljs.core.truth_(target_fn__6539))
{} else
{throw cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__6538);
}
return cljs.core.apply.call(null,target_fn__6539,args);
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
})
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__6540 = this;
cljs.core.swap_BANG_.call(null,this__6540.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__6540.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__6540.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__6540.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__6541 = this;
cljs.core.swap_BANG_.call(null,this__6541.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__6541.method_cache,this__6541.method_table,this__6541.cached_hierarchy,this__6541.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__6542 = this;
cljs.core.swap_BANG_.call(null,this__6542.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__6542.method_cache,this__6542.method_table,this__6542.cached_hierarchy,this__6542.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__6543 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__6543.cached_hierarchy),cljs.core.deref.call(null,this__6543.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__6543.method_cache,this__6543.method_table,this__6543.cached_hierarchy,this__6543.hierarchy);
}
var temp__3723__auto____6544 = cljs.core.deref.call(null,this__6543.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3723__auto____6544))
{var target_fn__6545 = temp__3723__auto____6544;

return target_fn__6545;
} else
{var temp__3723__auto____6546 = cljs.core.find_and_cache_best_method.call(null,this__6543.name,dispatch_val,this__6543.hierarchy,this__6543.method_table,this__6543.prefer_table,this__6543.method_cache,this__6543.cached_hierarchy);

if(cljs.core.truth_(temp__3723__auto____6546))
{var target_fn__6547 = temp__3723__auto____6546;

return target_fn__6547;
} else
{return cljs.core.deref.call(null,this__6543.method_table).call(null,this__6543.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__6548 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__6548.prefer_table)))
{throw cljs.core.str.call(null,"Preference conflict in multimethod '",this__6548.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x);
} else
{}
cljs.core.swap_BANG_.call(null,this__6548.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__6548.method_cache,this__6548.method_table,this__6548.cached_hierarchy,this__6548.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__6549 = this;
return cljs.core.deref.call(null,this__6549.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__6550 = this;
return cljs.core.deref.call(null,this__6550.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_invoke = (function (mf,args){
var this__6551 = this;
return cljs.core.do_invoke.call(null,mf,this__6551.dispatch_fn,args);
});
cljs.core.MultiFn.prototype.call = (function() { 
var G__6552__delegate = function (_,args){
return cljs.core._invoke.call(null,this,args);
};
var G__6552 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__6552__delegate.call(this, _, args);
};
G__6552.cljs$lang$maxFixedArity = 1;
G__6552.cljs$lang$applyTo = (function (arglist__6553){
var _ = cljs.core.first(arglist__6553);
var args = cljs.core.rest(arglist__6553);
return G__6552__delegate.call(this, _, args);
});
return G__6552;
})()
;
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset.call(null,multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method.call(null,multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods.call(null,multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method.call(null,multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers.call(null,multifn);
});
