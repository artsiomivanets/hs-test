// Compiled by ClojureScript 1.10.866 {:optimizations :none}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.call(null,(0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_.call(null,re_frame.trace.id,(0));
});

/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.call(null,(0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(cljs.core.truth_(re_frame.trace.trace_enabled_QMARK_)){
return cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation.");
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.call(null,re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__48892){
var map__48893 = p__48892;
var map__48893__$1 = cljs.core.__destructure_map.call(null,map__48893);
var operation = cljs.core.get.call(null,map__48893__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__48893__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__48893__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__48893__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id.call(null),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4223__auto__ = child_of;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now.call(null)], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce.call(null,(function re_frame$trace$tracing_cb_debounced(){
var seq__48894_48914 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__48895_48915 = null;
var count__48896_48916 = (0);
var i__48897_48917 = (0);
while(true){
if((i__48897_48917 < count__48896_48916)){
var vec__48906_48918 = cljs.core._nth.call(null,chunk__48895_48915,i__48897_48917);
var k_48919 = cljs.core.nth.call(null,vec__48906_48918,(0),null);
var cb_48920 = cljs.core.nth.call(null,vec__48906_48918,(1),null);
try{cb_48920.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e48909){var e_48921 = e48909;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_48919,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_48921);
}

var G__48922 = seq__48894_48914;
var G__48923 = chunk__48895_48915;
var G__48924 = count__48896_48916;
var G__48925 = (i__48897_48917 + (1));
seq__48894_48914 = G__48922;
chunk__48895_48915 = G__48923;
count__48896_48916 = G__48924;
i__48897_48917 = G__48925;
continue;
} else {
var temp__5753__auto___48926 = cljs.core.seq.call(null,seq__48894_48914);
if(temp__5753__auto___48926){
var seq__48894_48927__$1 = temp__5753__auto___48926;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48894_48927__$1)){
var c__4649__auto___48928 = cljs.core.chunk_first.call(null,seq__48894_48927__$1);
var G__48929 = cljs.core.chunk_rest.call(null,seq__48894_48927__$1);
var G__48930 = c__4649__auto___48928;
var G__48931 = cljs.core.count.call(null,c__4649__auto___48928);
var G__48932 = (0);
seq__48894_48914 = G__48929;
chunk__48895_48915 = G__48930;
count__48896_48916 = G__48931;
i__48897_48917 = G__48932;
continue;
} else {
var vec__48910_48933 = cljs.core.first.call(null,seq__48894_48927__$1);
var k_48934 = cljs.core.nth.call(null,vec__48910_48933,(0),null);
var cb_48935 = cljs.core.nth.call(null,vec__48910_48933,(1),null);
try{cb_48935.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e48913){var e_48936 = e48913;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_48934,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_48936);
}

var G__48937 = cljs.core.next.call(null,seq__48894_48927__$1);
var G__48938 = null;
var G__48939 = (0);
var G__48940 = (0);
seq__48894_48914 = G__48937;
chunk__48895_48915 = G__48938;
count__48896_48916 = G__48939;
i__48897_48917 = G__48940;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref.call(null,re_frame.trace.next_delivery) - (25)) < now)){
re_frame.trace.schedule_debounce.call(null);

return cljs.core.reset_BANG_.call(null,re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=trace.js.map
