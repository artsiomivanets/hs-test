// Compiled by ClojureScript 1.10.866 {:optimizations :none}
goog.provide('re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom');
goog.require('cljs.core');
goog.require('re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util');
goog.require('re_frisk.inlined_deps.reagent.v1v0v0.reagent.debug');
goog.require('re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.batching');
goog.require('clojure.set');
goog.require('goog.object');
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.inlined_deps !== 'undefined') && (typeof re_frisk.inlined_deps.reagent !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0 !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0.reagent !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.debug !== 'undefined')){
} else {
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.debug = false;
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.inlined_deps !== 'undefined') && (typeof re_frisk.inlined_deps.reagent !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0 !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0.reagent !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.generation !== 'undefined')){
} else {
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.generation = (0);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.inlined_deps !== 'undefined') && (typeof re_frisk.inlined_deps.reagent !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0 !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0.reagent !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom._running !== 'undefined')){
} else {
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom._running = cljs.core.atom.call(null,(0));
}
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.reactive_QMARK_ = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$reactive_QMARK_(){
return (!((re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom._STAR_ratom_context_STAR_ == null)));
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.running = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$running(){
return (cljs.core.deref.call(null,re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom._running));
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.arr_len = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$arr_len(x){
if((x == null)){
return (0);
} else {
return x.length;
}
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.arr_eq = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$arr_eq(x,y){
var len = re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.arr_len.call(null,x);
var and__4221__auto__ = (len === re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.arr_len.call(null,y));
if(and__4221__auto__){
var i = (0);
while(true){
var or__4223__auto__ = (i === len);
if(or__4223__auto__){
return or__4223__auto__;
} else {
if(((x[i]) === (y[i]))){
var G__49506 = (i + (1));
i = G__49506;
continue;
} else {
return false;
}
}
break;
}
} else {
return and__4221__auto__;
}
});
/**
 * When f is executed, if (f) derefs any ratoms, they are then added to 'obj.captured'(*ratom-context*).
 * 
 *   See function notify-deref-watcher! to know how *ratom-context* is updated
 */
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.in_context = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$in_context(obj,f){
var _STAR_ratom_context_STAR__orig_val__49507 = re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom._STAR_ratom_context_STAR_;
var _STAR_ratom_context_STAR__temp_val__49508 = obj;
(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__temp_val__49508);

try{return f.call(null);
}finally {(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__orig_val__49507);
}});
/**
 * Returns `(in-context f r)`.  Calls `_update-watching` on r with any
 *   `deref`ed atoms captured during `in-context`, if any differ from the
 *   `watching` field of r.  Clears the `dirty?` flag on r.
 * 
 *   Inside '_update-watching' along with adding the ratoms in 'r.watching' of reaction,
 *   the reaction is also added to the list of watches on each ratoms f derefs.
 */
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.deref_capture = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$deref_capture(f,r){
(r.captured = null);

(r.ratomGeneration = (re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.generation = (re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.generation + (1))));


var res = re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.in_context.call(null,r,f);
var c = r.captured;
(r.dirty_QMARK_ = false);

if(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.arr_eq.call(null,c,r.watching)){
} else {
r._update_watching(c);
}

return res;
});
/**
 * Add `derefed` to the `captured` field of `*ratom-context*`.
 * 
 *   See also `in-context`
 */
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.notify_deref_watcher_BANG_ = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$notify_deref_watcher_BANG_(derefed){
var temp__5757__auto__ = re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto__ == null)){
return null;
} else {
var r = temp__5757__auto__;
var c = r.captured;
if((c == null)){
return (r.captured = [derefed]);
} else {
return c.push(derefed);
}
}
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.check_watches = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$check_watches(old,new$){
if(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.debug){
cljs.core.swap_BANG_.call(null,re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom._running,cljs.core._PLUS_,(cljs.core.count.call(null,new$) - cljs.core.count.call(null,old)));
} else {
}

return new$;
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.add_w = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$add_w(this$,key,f){
var w = this$.watches;
(this$.watches = re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.check_watches.call(null,w,cljs.core.assoc.call(null,w,key,f)));

return (this$.watchesArr = null);
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.remove_w = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$remove_w(this$,key){
var w = this$.watches;
(this$.watches = re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.check_watches.call(null,w,cljs.core.dissoc.call(null,w,key)));

return (this$.watchesArr = null);
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.notify_w = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$notify_w(this$,old,new$){
var w = this$.watchesArr;
var a = (((w == null))?(this$.watchesArr = cljs.core.reduce_kv.call(null,(function (p1__49509_SHARP_,p2__49510_SHARP_,p3__49511_SHARP_){
var G__49512 = p1__49509_SHARP_;
G__49512.push(p2__49510_SHARP_);

G__49512.push(p3__49511_SHARP_);

return G__49512;
}),[],this$.watches)):w);
var len = a.length;
var i = (0);
while(true){
if((i < len)){
var k_49513 = (a[i]);
var f_49514 = (a[(i + (1))]);
f_49514.call(null,k_49513,this$,old,new$);

var G__49515 = ((2) + i);
i = G__49515;
continue;
} else {
return null;
}
break;
}
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.pr_atom = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$pr_atom(a,writer,opts,s,v){
cljs.core._write.call(null,writer,["#object[re-frisk.inlined-deps.reagent.v1v0v0.reagent.ratom.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," "].join(''));

cljs.core.pr_writer.call(null,(function (){var _STAR_ratom_context_STAR__orig_val__49516 = re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom._STAR_ratom_context_STAR_;
var _STAR_ratom_context_STAR__temp_val__49517 = null;
(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__temp_val__49517);

try{return v;
}finally {(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__orig_val__49516);
}})(),writer,opts);

return cljs.core._write.call(null,writer,"]");
});
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.inlined_deps !== 'undefined') && (typeof re_frisk.inlined_deps.reagent !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0 !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0.reagent !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.rea_queue !== 'undefined')){
} else {
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.rea_queue = null;
}
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.rea_enqueue = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$rea_enqueue(r){
if((re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.rea_queue == null)){
(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.rea_queue = []);

re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.batching.schedule.call(null);
} else {
}

return re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.rea_queue.push(r);
});

/**
 * @interface
 */
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.IReactiveAtom = function(){};


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
 * @implements {re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.IReactiveAtom}
*/
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.RAtom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2154201088;
this.cljs$lang$protocol_mask$partition1$ = 114690;
});
(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.RAtom.prototype.re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$IReactiveAtom$ = cljs.core.PROTOCOL_SENTINEL);

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.RAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.pr_atom.call(null,a__$1,w,opts,"RAtom",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"val","val",128701612),cljs.core._deref.call(null,a__$1)], null));
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.RAtom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.RAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.RAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.RAtom.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){
var self__ = this;
var a__$1 = this;
if((self__.validator == null)){
} else {
if(cljs.core.truth_(self__.validator.call(null,new_value))){
} else {
throw (new Error(["Assert failed: ","Validator rejected reference state","\n","(validator new-value)"].join('')));
}
}

var old_value = self__.state;
(self__.state = new_value);

if((self__.watches == null)){
} else {
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.notify_w.call(null,a__$1,old_value,new_value);
}

return new_value;
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state));
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x));
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x,y));
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f,self__.state,x,y,more));
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.notify_w.call(null,this$__$1,old,new$);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.add_w.call(null,this$__$1,key,f);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.remove_w.call(null,this$__$1,key);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.RAtom.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.RAtom(self__.state,new_meta,self__.validator,self__.watches));
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.RAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);

return self__.state;
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.RAtom.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Symbol(null,"validator","validator",-325659154,null),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.RAtom.cljs$lang$type = true);

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.RAtom.cljs$lang$ctorStr = "re-frisk.inlined-deps.reagent.v1v0v0.reagent.ratom/RAtom");

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.RAtom.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"re-frisk.inlined-deps.reagent.v1v0v0.reagent.ratom/RAtom");
}));

/**
 * Positional factory function for re-frisk.inlined-deps.reagent.v1v0v0.reagent.ratom/RAtom.
 */
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.__GT_RAtom = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$__GT_RAtom(state,meta,validator,watches){
return (new re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.RAtom(state,meta,validator,watches));
});

/**
 * Like clojure.core/atom, except that it keeps track of derefs.
 */
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.atom = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$atom(var_args){
var G__49521 = arguments.length;
switch (G__49521) {
case 1:
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4850__auto__ = [];
var len__4829__auto___49525 = arguments.length;
var i__4830__auto___49526 = (0);
while(true){
if((i__4830__auto___49526 < len__4829__auto___49525)){
args_arr__4850__auto__.push((arguments[i__4830__auto___49526]));

var G__49527 = (i__4830__auto___49526 + (1));
i__4830__auto___49526 = G__49527;
continue;
} else {
}
break;
}

var argseq__4851__auto__ = (new cljs.core.IndexedSeq(args_arr__4850__auto__.slice((1)),(0),null));
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.atom.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4851__auto__);

}
});

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1 = (function (x){
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.__GT_RAtom.call(null,x,null,null,null);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.atom.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__49522){
var map__49523 = p__49522;
var map__49523__$1 = cljs.core.__destructure_map.call(null,map__49523);
var meta = cljs.core.get.call(null,map__49523__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var validator = cljs.core.get.call(null,map__49523__$1,new cljs.core.Keyword(null,"validator","validator",-1966190681));
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.__GT_RAtom.call(null,x,meta,validator,null);
}));

/** @this {Function} */
(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.atom.cljs$lang$applyTo = (function (seq49519){
var G__49520 = cljs.core.first.call(null,seq49519);
var seq49519__$1 = cljs.core.next.call(null,seq49519);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49520,seq49519__$1);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.atom.cljs$lang$maxFixedArity = (1));

re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.cached_reaction = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$cached_reaction(f,o,k,obj,destroy){
var m = o.reagReactionCache;
var m__$1 = (((m == null))?cljs.core.PersistentArrayMap.EMPTY:m);
var r = m__$1.call(null,k,null);
if((!((r == null)))){
return cljs.core._deref.call(null,r);
} else {
if((re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom._STAR_ratom_context_STAR_ == null)){
return f.call(null);
} else {
var r__$1 = re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.make_reaction.call(null,f,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360),(function (x){
if(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.debug){
cljs.core.swap_BANG_.call(null,re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom._running,cljs.core.dec);
} else {
}

var __49528 = o.reagReactionCache;
var __49529__$1 = cljs.core.dissoc.call(null,__49528,k);
(o.reagReactionCache = __49529__$1);

if((!((obj == null)))){
(obj.reaction = null);
} else {
}

if((!((destroy == null)))){
return destroy.call(null,x);
} else {
return null;
}
}));
var v = cljs.core._deref.call(null,r__$1);
(o.reagReactionCache = cljs.core.assoc.call(null,m__$1,k,r__$1));

if(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.debug){
cljs.core.swap_BANG_.call(null,re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom._running,cljs.core.inc);
} else {
}

if((!((obj == null)))){
(obj.reaction = r__$1);
} else {
}

return v;

}
}
});

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.IReactiveAtom}
*/
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Track = (function (f,args,reaction){
this.f = f;
this.args = args;
this.reaction = reaction;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Track.prototype.re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$IReactiveAtom$ = cljs.core.PROTOCOL_SENTINEL);

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Track.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var temp__5755__auto__ = self__.reaction;
if((temp__5755__auto__ == null)){
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.cached_reaction.call(null,(function (){
return cljs.core.apply.call(null,self__.f,self__.args);
}),self__.f,self__.args,this$__$1,null);
} else {
var r = temp__5755__auto__;
return cljs.core._deref.call(null,r);
}
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Track.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return (((other instanceof re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Track)) && (((cljs.core._EQ_.call(null,self__.f,other.f)) && (cljs.core._EQ_.call(null,self__.args,other.args)))));
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Track.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.f,self__.args], null));
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Track.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.pr_atom.call(null,a__$1,w,opts,"Track",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),cljs.core._deref.call(null,a__$1),new cljs.core.Keyword(null,"f","f",-1597136552),self__.f], null));
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Track.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),cljs.core.with_meta(new cljs.core.Symbol(null,"reaction","reaction",2131401315,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Track.cljs$lang$type = true);

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Track.cljs$lang$ctorStr = "re-frisk.inlined-deps.reagent.v1v0v0.reagent.ratom/Track");

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Track.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"re-frisk.inlined-deps.reagent.v1v0v0.reagent.ratom/Track");
}));

/**
 * Positional factory function for re-frisk.inlined-deps.reagent.v1v0v0.reagent.ratom/Track.
 */
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.__GT_Track = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$__GT_Track(f,args,reaction){
return (new re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Track(f,args,reaction));
});

re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.make_track = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$make_track(f,args){
return (new re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Track(f,args,null));
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.make_track_BANG_ = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$make_track_BANG_(f,args){
var t = re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.make_track.call(null,f,args);
var r = re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.make_reaction.call(null,(function (){
return cljs.core._deref.call(null,t);
}),new cljs.core.Keyword(null,"auto-run","auto-run",1958400437),true);
cljs.core.deref.call(null,r);

return r;
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.track = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$track(var_args){
var args__4835__auto__ = [];
var len__4829__auto___49532 = arguments.length;
var i__4830__auto___49533 = (0);
while(true){
if((i__4830__auto___49533 < len__4829__auto___49532)){
args__4835__auto__.push((arguments[i__4830__auto___49533]));

var G__49534 = (i__4830__auto___49533 + (1));
i__4830__auto___49533 = G__49534;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.track.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.track.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.make_track.call(null,f,args);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.track.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.track.cljs$lang$applyTo = (function (seq49530){
var G__49531 = cljs.core.first.call(null,seq49530);
var seq49530__$1 = cljs.core.next.call(null,seq49530);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49531,seq49530__$1);
}));

re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.track_BANG_ = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$track_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___49537 = arguments.length;
var i__4830__auto___49538 = (0);
while(true){
if((i__4830__auto___49538 < len__4829__auto___49537)){
args__4835__auto__.push((arguments[i__4830__auto___49538]));

var G__49539 = (i__4830__auto___49538 + (1));
i__4830__auto___49538 = G__49539;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.track_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.track_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.make_track_BANG_.call(null,f,args);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.track_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.track_BANG_.cljs$lang$applyTo = (function (seq49535){
var G__49536 = cljs.core.first.call(null,seq49535);
var seq49535__$1 = cljs.core.next.call(null,seq49535);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49536,seq49535__$1);
}));


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IReset}
 * @implements {re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Object}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.IReactiveAtom}
*/
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.RCursor = (function (ratom,path,reaction,state,watches){
this.ratom = ratom;
this.path = path;
this.reaction = reaction;
this.state = state;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
});
(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.RCursor.prototype._peek = (function (){
var self__ = this;
var this$ = this;
var _STAR_ratom_context_STAR__orig_val__49540 = re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom._STAR_ratom_context_STAR_;
var _STAR_ratom_context_STAR__temp_val__49541 = null;
(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__temp_val__49541);

try{return cljs.core._deref.call(null,this$);
}finally {(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__orig_val__49540);
}}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.RCursor.prototype._set_state = (function (oldstate,newstate){
var self__ = this;
var this$ = this;
if((oldstate === newstate)){
return null;
} else {
(self__.state = newstate);

if((!((self__.watches == null)))){
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.notify_w.call(null,this$,oldstate,newstate);
} else {
return null;
}
}
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.RCursor.prototype.re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$IReactiveAtom$ = cljs.core.PROTOCOL_SENTINEL);

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.RCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.pr_atom.call(null,a__$1,w,opts,"RCursor",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),cljs.core._deref.call(null,a__$1),new cljs.core.Keyword(null,"path","path",-188191168),self__.path], null));
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.RCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.ratom,self__.path], null));
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.RCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return (((other instanceof re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.RCursor)) && (((cljs.core._EQ_.call(null,self__.path,other.path)) && (cljs.core._EQ_.call(null,self__.ratom,other.ratom)))));
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.RCursor.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,new_value){
var self__ = this;
var this$__$1 = this;
var oldstate = self__.state;
this$__$1._set_state(oldstate,new_value);

if((((!((self__.ratom == null))))?(((((self__.ratom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === self__.ratom.cljs$core$IDeref$))))?true:(((!self__.ratom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,self__.ratom):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,self__.ratom))){
if(cljs.core._EQ_.call(null,self__.path,cljs.core.PersistentVector.EMPTY)){
cljs.core.reset_BANG_.call(null,self__.ratom,new_value);
} else {
cljs.core.swap_BANG_.call(null,self__.ratom,cljs.core.assoc_in,self__.path,new_value);
}
} else {
self__.ratom.call(null,self__.path,new_value);
}

return new_value;
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,a__$1._peek()));
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,a__$1._peek(),x));
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,a__$1._peek(),x,y));
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f,a__$1._peek(),x,y,more));
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.notify_w.call(null,this$__$1,old,new$);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.add_w.call(null,this$__$1,key,f);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.remove_w.call(null,this$__$1,key);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.RCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var oldstate = self__.state;
var newstate = (function (){var temp__5755__auto__ = self__.reaction;
if((temp__5755__auto__ == null)){
var f = (((((!((self__.ratom == null))))?(((((self__.ratom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === self__.ratom.cljs$core$IDeref$))))?true:(((!self__.ratom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,self__.ratom):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,self__.ratom)))?(function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.ratom),self__.path);
}):(function (){
return self__.ratom.call(null,self__.path);
}));
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.cached_reaction.call(null,f,self__.ratom,self__.path,this$__$1,null);
} else {
var r = temp__5755__auto__;
return cljs.core._deref.call(null,r);
}
})();
this$__$1._set_state(oldstate,newstate);

return newstate;
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.RCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ratom","ratom",1514010260,null),new cljs.core.Symbol(null,"path","path",1452340359,null),cljs.core.with_meta(new cljs.core.Symbol(null,"reaction","reaction",2131401315,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.RCursor.cljs$lang$type = true);

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.RCursor.cljs$lang$ctorStr = "re-frisk.inlined-deps.reagent.v1v0v0.reagent.ratom/RCursor");

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.RCursor.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"re-frisk.inlined-deps.reagent.v1v0v0.reagent.ratom/RCursor");
}));

/**
 * Positional factory function for re-frisk.inlined-deps.reagent.v1v0v0.reagent.ratom/RCursor.
 */
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.__GT_RCursor = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$__GT_RCursor(ratom,path,reaction,state,watches){
return (new re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.RCursor(ratom,path,reaction,state,watches));
});

re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.cursor = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$cursor(src,path){
if((function (){var or__4223__auto__ = (((!((src == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === src.re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$IReactiveAtom$))))?true:(((!src.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.IReactiveAtom,src):false)):cljs.core.native_satisfies_QMARK_.call(null,re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.IReactiveAtom,src));
if(or__4223__auto__){
return or__4223__auto__;
} else {
return ((cljs.core.ifn_QMARK_.call(null,src)) && ((!(cljs.core.vector_QMARK_.call(null,src)))));
}
})()){
} else {
throw (new Error(["Assert failed: ",["src must be a reactive atom or a function, not ",cljs.core.pr_str.call(null,src)," while attempting to get path: ",cljs.core.pr_str.call(null,path)].join(''),"\n","(or (satisfies? IReactiveAtom src) (and (ifn? src) (not (vector? src))))"].join('')));
}

return re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.__GT_RCursor.call(null,src,path,null,null,null);
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.with_let_destroy = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$with_let_destroy(v){
var temp__5757__auto__ = v.destroy;
if((temp__5757__auto__ == null)){
return null;
} else {
var f = temp__5757__auto__;
return f.call(null);
}
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.with_let_values = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$with_let_values(key){
var temp__5755__auto__ = re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5755__auto__ == null)){
return [];
} else {
var c = temp__5755__auto__;
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.cached_reaction.call(null,cljs.core.array,c,key,null,re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.with_let_destroy);
}
});

/**
 * @interface
 */
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.IDisposable = function(){};

var re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$IDisposable$dispose_BANG_$dyn_49545 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.dispose_BANG_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,this$);
} else {
var m__4519__auto__ = (re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.dispose_BANG_["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IDisposable.dispose!",this$);
}
}
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.dispose_BANG_ = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$dispose_BANG_(this$){
if((((!((this$ == null)))) && ((!((this$.re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$IDisposable$dispose_BANG_$arity$1 == null)))))){
return this$.re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$IDisposable$dispose_BANG_$arity$1(this$);
} else {
return re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$IDisposable$dispose_BANG_$dyn_49545.call(null,this$);
}
});

var re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$IDisposable$add_on_dispose_BANG_$dyn_49546 = (function (this$,f){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.add_on_dispose_BANG_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,this$,f);
} else {
var m__4519__auto__ = (re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.add_on_dispose_BANG_["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,this$,f);
} else {
throw cljs.core.missing_protocol.call(null,"IDisposable.add-on-dispose!",this$);
}
}
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.add_on_dispose_BANG_ = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$add_on_dispose_BANG_(this$,f){
if((((!((this$ == null)))) && ((!((this$.re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$IDisposable$add_on_dispose_BANG_$arity$2 == null)))))){
return this$.re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$IDisposable$add_on_dispose_BANG_$arity$2(this$,f);
} else {
return re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$IDisposable$add_on_dispose_BANG_$dyn_49546.call(null,this$,f);
}
});


/**
 * @interface
 */
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.IRunnable = function(){};

var re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$IRunnable$run$dyn_49547 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.run[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,this$);
} else {
var m__4519__auto__ = (re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.run["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRunnable.run",this$);
}
}
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.run = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$run(this$){
if((((!((this$ == null)))) && ((!((this$.re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$IRunnable$run$arity$1 == null)))))){
return this$.re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$IRunnable$run$arity$1(this$);
} else {
return re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$IRunnable$run$dyn_49547.call(null,this$);
}
});

re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.handle_reaction_change = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$handle_reaction_change(this$,sender,old,new$){
return this$._handle_change(sender,old,new$);
});

/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.IDisposable}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IReset}
 * @implements {re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Object}
 * @implements {cljs.core.ISwap}
 * @implements {re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.IRunnable}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.IReactiveAtom}
*/
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction = (function (f,state,dirty_QMARK_,nocache_QMARK_,watching,watches,auto_run,caught){
this.f = f;
this.state = state;
this.dirty_QMARK_ = dirty_QMARK_;
this.nocache_QMARK_ = nocache_QMARK_;
this.watching = watching;
this.watches = watches;
this.auto_run = auto_run;
this.caught = caught;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
});
(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype._peek_at = (function (){
var self__ = this;
var this$ = this;
var _STAR_ratom_context_STAR__orig_val__49548 = re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom._STAR_ratom_context_STAR_;
var _STAR_ratom_context_STAR__temp_val__49549 = null;
(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__temp_val__49549);

try{return cljs.core._deref.call(null,this$);
}finally {(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__orig_val__49548);
}}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype._handle_change = (function (sender,oldval,newval){
var self__ = this;
var this$ = this;
if((((oldval === newval)) || (self__.dirty_QMARK_))){
return null;
} else {
if((self__.auto_run == null)){
(self__.dirty_QMARK_ = true);

return re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.rea_enqueue.call(null,this$);
} else {
if(self__.auto_run === true){
return this$._run(false);
} else {
return self__.auto_run.call(null,this$);
}
}
}
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype._update_watching = (function (derefed){
var self__ = this;
var this$ = this;
var new$ = cljs.core.set.call(null,derefed);
var old = cljs.core.set.call(null,self__.watching);
(self__.watching = derefed);

var seq__49550_49565 = cljs.core.seq.call(null,clojure.set.difference.call(null,new$,old));
var chunk__49551_49566 = null;
var count__49552_49567 = (0);
var i__49553_49568 = (0);
while(true){
if((i__49553_49568 < count__49552_49567)){
var w_49569 = cljs.core._nth.call(null,chunk__49551_49566,i__49553_49568);
cljs.core._add_watch.call(null,w_49569,this$,re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.handle_reaction_change);


var G__49570 = seq__49550_49565;
var G__49571 = chunk__49551_49566;
var G__49572 = count__49552_49567;
var G__49573 = (i__49553_49568 + (1));
seq__49550_49565 = G__49570;
chunk__49551_49566 = G__49571;
count__49552_49567 = G__49572;
i__49553_49568 = G__49573;
continue;
} else {
var temp__5753__auto___49574 = cljs.core.seq.call(null,seq__49550_49565);
if(temp__5753__auto___49574){
var seq__49550_49575__$1 = temp__5753__auto___49574;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49550_49575__$1)){
var c__4649__auto___49576 = cljs.core.chunk_first.call(null,seq__49550_49575__$1);
var G__49577 = cljs.core.chunk_rest.call(null,seq__49550_49575__$1);
var G__49578 = c__4649__auto___49576;
var G__49579 = cljs.core.count.call(null,c__4649__auto___49576);
var G__49580 = (0);
seq__49550_49565 = G__49577;
chunk__49551_49566 = G__49578;
count__49552_49567 = G__49579;
i__49553_49568 = G__49580;
continue;
} else {
var w_49581 = cljs.core.first.call(null,seq__49550_49575__$1);
cljs.core._add_watch.call(null,w_49581,this$,re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.handle_reaction_change);


var G__49582 = cljs.core.next.call(null,seq__49550_49575__$1);
var G__49583 = null;
var G__49584 = (0);
var G__49585 = (0);
seq__49550_49565 = G__49582;
chunk__49551_49566 = G__49583;
count__49552_49567 = G__49584;
i__49553_49568 = G__49585;
continue;
}
} else {
}
}
break;
}

var seq__49554 = cljs.core.seq.call(null,clojure.set.difference.call(null,old,new$));
var chunk__49555 = null;
var count__49556 = (0);
var i__49557 = (0);
while(true){
if((i__49557 < count__49556)){
var w = cljs.core._nth.call(null,chunk__49555,i__49557);
cljs.core._remove_watch.call(null,w,this$);


var G__49586 = seq__49554;
var G__49587 = chunk__49555;
var G__49588 = count__49556;
var G__49589 = (i__49557 + (1));
seq__49554 = G__49586;
chunk__49555 = G__49587;
count__49556 = G__49588;
i__49557 = G__49589;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__49554);
if(temp__5753__auto__){
var seq__49554__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49554__$1)){
var c__4649__auto__ = cljs.core.chunk_first.call(null,seq__49554__$1);
var G__49590 = cljs.core.chunk_rest.call(null,seq__49554__$1);
var G__49591 = c__4649__auto__;
var G__49592 = cljs.core.count.call(null,c__4649__auto__);
var G__49593 = (0);
seq__49554 = G__49590;
chunk__49555 = G__49591;
count__49556 = G__49592;
i__49557 = G__49593;
continue;
} else {
var w = cljs.core.first.call(null,seq__49554__$1);
cljs.core._remove_watch.call(null,w,this$);


var G__49594 = cljs.core.next.call(null,seq__49554__$1);
var G__49595 = null;
var G__49596 = (0);
var G__49597 = (0);
seq__49554 = G__49594;
chunk__49555 = G__49595;
count__49556 = G__49596;
i__49557 = G__49597;
continue;
}
} else {
return null;
}
}
break;
}
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype._queued_run = (function (){
var self__ = this;
var this$ = this;
if(((self__.dirty_QMARK_) && ((!((self__.watching == null)))))){
return this$._run(true);
} else {
return null;
}
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype._try_capture = (function (f__$1){
var self__ = this;
var this$ = this;
try{(self__.caught = null);

return re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.deref_capture.call(null,f__$1,this$);
}catch (e49558){var e = e49558;
(self__.state = e);

(self__.caught = e);

return (self__.dirty_QMARK_ = false);
}}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype._run = (function (check){
var self__ = this;
var this$ = this;
var oldstate = self__.state;
var res = (cljs.core.truth_(check)?this$._try_capture(self__.f):re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.deref_capture.call(null,self__.f,this$));
if(self__.nocache_QMARK_){
} else {
(self__.state = res);

if((((self__.watches == null)) || (cljs.core._EQ_.call(null,oldstate,res)))){
} else {
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.notify_w.call(null,this$,oldstate,res);
}
}

return res;
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype._set_opts = (function (p__49559){
var self__ = this;
var map__49560 = p__49559;
var map__49560__$1 = cljs.core.__destructure_map.call(null,map__49560);
var auto_run__$1 = cljs.core.get.call(null,map__49560__$1,new cljs.core.Keyword(null,"auto-run","auto-run",1958400437));
var on_set = cljs.core.get.call(null,map__49560__$1,new cljs.core.Keyword(null,"on-set","on-set",-140953470));
var on_dispose = cljs.core.get.call(null,map__49560__$1,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360));
var no_cache = cljs.core.get.call(null,map__49560__$1,new cljs.core.Keyword(null,"no-cache","no-cache",1588056370));
var this$ = this;
if((!((auto_run__$1 == null)))){
(this$.auto_run = auto_run__$1);
} else {
}

if((!((on_set == null)))){
(this$.on_set = on_set);
} else {
}

if((!((on_dispose == null)))){
(this$.on_dispose = on_dispose);
} else {
}

if((!((no_cache == null)))){
return (this$.nocache_QMARK_ = no_cache);
} else {
return null;
}
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype.re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$IReactiveAtom$ = cljs.core.PROTOCOL_SENTINEL);

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.pr_atom.call(null,a__$1,w,opts,"Reaction",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"val","val",128701612),cljs.core._deref.call(null,a__$1)], null));
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype.re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$IDisposable$ = cljs.core.PROTOCOL_SENTINEL);

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype.re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$IDisposable$dispose_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var s = self__.state;
var wg = self__.watching;
(self__.watching = null);

(self__.state = null);

(self__.auto_run = null);

(self__.dirty_QMARK_ = true);

var seq__49561_49598 = cljs.core.seq.call(null,cljs.core.set.call(null,wg));
var chunk__49562_49599 = null;
var count__49563_49600 = (0);
var i__49564_49601 = (0);
while(true){
if((i__49564_49601 < count__49563_49600)){
var w_49602 = cljs.core._nth.call(null,chunk__49562_49599,i__49564_49601);
cljs.core._remove_watch.call(null,w_49602,this$__$1);


var G__49603 = seq__49561_49598;
var G__49604 = chunk__49562_49599;
var G__49605 = count__49563_49600;
var G__49606 = (i__49564_49601 + (1));
seq__49561_49598 = G__49603;
chunk__49562_49599 = G__49604;
count__49563_49600 = G__49605;
i__49564_49601 = G__49606;
continue;
} else {
var temp__5753__auto___49607 = cljs.core.seq.call(null,seq__49561_49598);
if(temp__5753__auto___49607){
var seq__49561_49608__$1 = temp__5753__auto___49607;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49561_49608__$1)){
var c__4649__auto___49609 = cljs.core.chunk_first.call(null,seq__49561_49608__$1);
var G__49610 = cljs.core.chunk_rest.call(null,seq__49561_49608__$1);
var G__49611 = c__4649__auto___49609;
var G__49612 = cljs.core.count.call(null,c__4649__auto___49609);
var G__49613 = (0);
seq__49561_49598 = G__49610;
chunk__49562_49599 = G__49611;
count__49563_49600 = G__49612;
i__49564_49601 = G__49613;
continue;
} else {
var w_49614 = cljs.core.first.call(null,seq__49561_49608__$1);
cljs.core._remove_watch.call(null,w_49614,this$__$1);


var G__49615 = cljs.core.next.call(null,seq__49561_49608__$1);
var G__49616 = null;
var G__49617 = (0);
var G__49618 = (0);
seq__49561_49598 = G__49615;
chunk__49562_49599 = G__49616;
count__49563_49600 = G__49617;
i__49564_49601 = G__49618;
continue;
}
} else {
}
}
break;
}

if((!((this$__$1.on_dispose == null)))){
this$__$1.on_dispose(s);
} else {
}

var temp__5757__auto__ = this$__$1.on_dispose_arr;
if((temp__5757__auto__ == null)){
return null;
} else {
var a = temp__5757__auto__;
var n__4706__auto__ = a.length;
var i = (0);
while(true){
if((i < n__4706__auto__)){
(a[i]).call(null,this$__$1);

var G__49619 = (i + (1));
i = G__49619;
continue;
} else {
return null;
}
break;
}
}
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype.re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$IDisposable$add_on_dispose_BANG_$arity$2 = (function (this$,f__$1){
var self__ = this;
var this$__$1 = this;
var temp__5755__auto__ = this$__$1.on_dispose_arr;
if((temp__5755__auto__ == null)){
return (this$__$1.on_dispose_arr = [f__$1]);
} else {
var a = temp__5755__auto__;
return a.push(f__$1);
}
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,newval){
var self__ = this;
var a__$1 = this;
if(cljs.core.fn_QMARK_.call(null,a__$1.on_set)){
} else {
throw (new Error(["Assert failed: ","Reaction is read only; on-set is not allowed","\n","(fn? (.-on-set a))"].join('')));
}

var oldval = self__.state;
(self__.state = newval);

a__$1.on_set(oldval,newval);

re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.notify_w.call(null,a__$1,oldval,newval);

return newval;
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f__$1){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,a__$1._peek_at()));
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f__$1,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,a__$1._peek_at(),x));
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f__$1,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,a__$1._peek_at(),x,y));
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f__$1,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f__$1,a__$1._peek_at(),x,y,more));
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype.re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$IRunnable$ = cljs.core.PROTOCOL_SENTINEL);

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype.re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$IRunnable$run$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.flush_BANG_.call(null);

return this$__$1._run(false);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.notify_w.call(null,this$__$1,old,new$);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f__$1){
var self__ = this;
var this$__$1 = this;
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.add_w.call(null,this$__$1,key,f__$1);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
var was_empty = cljs.core.empty_QMARK_.call(null,self__.watches);
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.remove_w.call(null,this$__$1,key);

if((((!(was_empty))) && (((cljs.core.empty_QMARK_.call(null,self__.watches)) && ((self__.auto_run == null)))))){
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.dispose_BANG_.call(null,this$__$1);
} else {
return null;
}
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var temp__5757__auto___49620 = self__.caught;
if((temp__5757__auto___49620 == null)){
} else {
var e_49621 = temp__5757__auto___49620;
throw e_49621;
}

var non_reactive_49622 = (re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom._STAR_ratom_context_STAR_ == null);
if(non_reactive_49622){
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.flush_BANG_.call(null);
} else {
}

if(((non_reactive_49622) && ((self__.auto_run == null)))){
if(self__.dirty_QMARK_){
var oldstate_49623 = self__.state;
(self__.state = self__.f.call(null));

if((((self__.watches == null)) || (cljs.core._EQ_.call(null,oldstate_49623,self__.state)))){
} else {
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.notify_w.call(null,this$__$1,oldstate_49623,self__.state);
}
} else {
}
} else {
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);

if(self__.dirty_QMARK_){
this$__$1._run(false);
} else {
}
}

return self__.state;
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty?","dirty?",-419314319,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"nocache?","nocache?",-1065670978,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watching","watching",1947648227,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"auto-run","auto-run",-696035332,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"caught","caught",2084008322,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.cljs$lang$type = true);

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.cljs$lang$ctorStr = "re-frisk.inlined-deps.reagent.v1v0v0.reagent.ratom/Reaction");

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"re-frisk.inlined-deps.reagent.v1v0v0.reagent.ratom/Reaction");
}));

/**
 * Positional factory function for re-frisk.inlined-deps.reagent.v1v0v0.reagent.ratom/Reaction.
 */
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.__GT_Reaction = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$__GT_Reaction(f,state,dirty_QMARK_,nocache_QMARK_,watching,watches,auto_run,caught){
return (new re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction(f,state,dirty_QMARK_,nocache_QMARK_,watching,watches,auto_run,caught));
});

re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.flush_BANG_ = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$flush_BANG_(){
while(true){
var q = re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.rea_queue;
if((q == null)){
return null;
} else {
(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.rea_queue = null);

var n__4706__auto___49624 = q.length;
var i_49625 = (0);
while(true){
if((i_49625 < n__4706__auto___49624)){
var r_49626 = (q[i_49625]);
r_49626._queued_run();

var G__49627 = (i_49625 + (1));
i_49625 = G__49627;
continue;
} else {
}
break;
}

continue;
}
break;
}
});
(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.batching.ratom_flush = re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.flush_BANG_);
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.make_reaction = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$make_reaction(var_args){
var args__4835__auto__ = [];
var len__4829__auto___49632 = arguments.length;
var i__4830__auto___49633 = (0);
while(true){
if((i__4830__auto___49633 < len__4829__auto___49632)){
args__4835__auto__.push((arguments[i__4830__auto___49633]));

var G__49634 = (i__4830__auto___49633 + (1));
i__4830__auto___49633 = G__49634;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic = (function (f,p__49630){
var map__49631 = p__49630;
var map__49631__$1 = cljs.core.__destructure_map.call(null,map__49631);
var auto_run = cljs.core.get.call(null,map__49631__$1,new cljs.core.Keyword(null,"auto-run","auto-run",1958400437));
var on_set = cljs.core.get.call(null,map__49631__$1,new cljs.core.Keyword(null,"on-set","on-set",-140953470));
var on_dispose = cljs.core.get.call(null,map__49631__$1,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360));
var reaction = re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.__GT_Reaction.call(null,f,null,true,false,null,null,null,null);
reaction._set_opts(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"auto-run","auto-run",1958400437),auto_run,new cljs.core.Keyword(null,"on-set","on-set",-140953470),on_set,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360),on_dispose], null));

return reaction;
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.make_reaction.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.make_reaction.cljs$lang$applyTo = (function (seq49628){
var G__49629 = cljs.core.first.call(null,seq49628);
var seq49628__$1 = cljs.core.next.call(null,seq49628);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49629,seq49628__$1);
}));

re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.temp_reaction = re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.make_reaction.call(null,null);
/**
 * Evaluates `f` and returns the result.  If `f` calls `deref` on any ratoms,
 * creates a new Reaction that watches those atoms and calls `run` whenever
 * any of those watched ratoms change.  Also, the new reaction is added to
 * list of 'watches' of each of the ratoms. The `run` parameter is a function
 * that should expect one argument.  It is passed `obj` when run.  The `opts`
 * are any options accepted by a Reaction and will be set on the newly created
 * Reaction. Sets the newly created Reaction to the `key` on `obj`.
 */
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.run_in_reaction = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$run_in_reaction(f,obj,key,run,opts){
var r = re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.temp_reaction;
var res = re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.deref_capture.call(null,f,r);
if((r.watching == null)){
} else {
(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.temp_reaction = re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.make_reaction.call(null,null));

r._set_opts(opts);

(r.f = f);

(r.auto_run = (function (){
return run.call(null,obj);
}));

goog.object.set(obj,key,r);
}

return res;
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.check_derefs = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$check_derefs(f){
var ctx = ({});
var res = re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.in_context.call(null,ctx,f);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [res,(!((ctx.captured == null)))], null);
});

/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
*/
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Wrapper = (function (state,callback,changed,watches){
this.state = state;
this.callback = callback;
this.changed = changed;
this.watches = watches;
this.cljs$lang$protocol_mask$partition1$ = 114690;
this.cljs$lang$protocol_mask$partition0$ = 2149613568;
});
(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Wrapper.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(((self__.changed) && ((!((re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom._STAR_ratom_context_STAR_ == null)))))){
if(cljs.core.truth_(re_frisk.inlined_deps.reagent.v1v0v0.reagent.debug.has_console)){
(cljs.core.truth_(re_frisk.inlined_deps.reagent.v1v0v0.reagent.debug.tracking)?re_frisk.inlined_deps.reagent.v1v0v0.reagent.debug.track_console:console).warn(["Warning: ","derefing stale wrap: ",cljs.core.pr_str.call(null,this$__$1)].join(''));
} else {
}
} else {
}


return self__.state;
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Wrapper.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,newval){
var self__ = this;
var this$__$1 = this;
var oldval = self__.state;
(self__.changed = true);

(self__.state = newval);

if((!((self__.watches == null)))){
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.notify_w.call(null,this$__$1,oldval,newval);
} else {
}

self__.callback.call(null,newval);

return newval;
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state));
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x));
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x,y));
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f,self__.state,x,y,more));
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Wrapper.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return (((other instanceof re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Wrapper)) && ((((!(self__.changed))) && (((cljs.core.not.call(null,other.changed)) && (((cljs.core._EQ_.call(null,self__.state,other.state)) && (cljs.core._EQ_.call(null,self__.callback,other.callback)))))))));
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.notify_w.call(null,this$__$1,old,new$);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.add_w.call(null,this$__$1,key,f);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.remove_w.call(null,this$__$1,key);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Wrapper.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.pr_atom.call(null,a__$1,w,opts,"Wrapper",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"val","val",128701612),cljs.core._deref.call(null,a__$1)], null));
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Wrapper.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"callback","callback",935395299,null),cljs.core.with_meta(new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Wrapper.cljs$lang$type = true);

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Wrapper.cljs$lang$ctorStr = "re-frisk.inlined-deps.reagent.v1v0v0.reagent.ratom/Wrapper");

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Wrapper.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"re-frisk.inlined-deps.reagent.v1v0v0.reagent.ratom/Wrapper");
}));

/**
 * Positional factory function for re-frisk.inlined-deps.reagent.v1v0v0.reagent.ratom/Wrapper.
 */
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.__GT_Wrapper = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$__GT_Wrapper(state,callback,changed,watches){
return (new re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.Wrapper(state,callback,changed,watches));
});

re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.make_wrapper = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$ratom$make_wrapper(value,callback_fn,args){
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.__GT_Wrapper.call(null,value,re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.make_partial_fn.call(null,callback_fn,args),false,null);
});

//# sourceMappingURL=ratom.js.map
