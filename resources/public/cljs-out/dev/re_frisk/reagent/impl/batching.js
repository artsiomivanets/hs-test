// Compiled by ClojureScript 1.10.866 {:optimizations :none}
goog.provide('re_frisk.reagent.impl.batching');
goog.require('cljs.core');
goog.require('reagent.impl.batching');
goog.require('re_frame.trace');
goog.require('clojure.string');
goog.require('reagent.impl.component');
re_frisk.reagent.impl.batching.operation_name = cljs.core.memoize.call(null,(function (c){
return cljs.core.last.call(null,clojure.string.split.call(null,reagent.impl.component.component_name.call(null,c),/ > /));
}));
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.reagent !== 'undefined') && (typeof re_frisk.reagent.impl !== 'undefined') && (typeof re_frisk.reagent.impl.batching !== 'undefined') && (typeof re_frisk.reagent.impl.batching.original_next_tick !== 'undefined')){
} else {
re_frisk.reagent.impl.batching.original_next_tick = reagent.impl.batching.next_tick;
}
re_frisk.reagent.impl.batching.next_tick = (function re_frisk$reagent$impl$batching$next_tick(f){
return re_frisk.reagent.impl.batching.original_next_tick.call(null,(function (){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__56361 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__56362 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword(null,"raf","raf",-1295410152)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__56362);

try{try{f.call(null);

if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__56363_56371 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__56364_56372 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword(null,"raf-end","raf-end",-220596864)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__56364_56372);

try{try{}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__18002__auto___56373 = re_frame.interop.now.call(null);
var duration__18003__auto___56374 = (end__18002__auto___56373 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__18003__auto___56374,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__18002__auto___56373);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__56363_56371);
}} else {
}

if(reagent.impl.batching.render_queue.scheduled_QMARK_ === false){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__56365 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__56366 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__56366);

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__18002__auto___56375 = re_frame.interop.now.call(null);
var duration__18003__auto___56376 = (end__18002__auto___56375 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__18003__auto___56376,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__18002__auto___56375);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__56365);
}} else {
return null;
}
} else {
return null;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__18002__auto___56377 = re_frame.interop.now.call(null);
var duration__18003__auto___56378 = (end__18002__auto___56377 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__18003__auto___56378,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__18002__auto___56377);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__56361);
}} else {
f.call(null);

if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__56367_56379 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__56368_56380 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword(null,"raf-end","raf-end",-220596864)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__56368_56380);

try{try{}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__18002__auto___56381 = re_frame.interop.now.call(null);
var duration__18003__auto___56382 = (end__18002__auto___56381 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__18003__auto___56382,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__18002__auto___56381);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__56367_56379);
}} else {
}

if(reagent.impl.batching.render_queue.scheduled_QMARK_ === false){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__56369 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__56370 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__56370);

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__18002__auto___56383 = re_frame.interop.now.call(null);
var duration__18003__auto___56384 = (end__18002__auto___56383 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__18003__auto___56384,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__18002__auto___56383);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__56369);
}} else {
return null;
}
} else {
return null;
}
}
}));
});
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.reagent !== 'undefined') && (typeof re_frisk.reagent.impl !== 'undefined') && (typeof re_frisk.reagent.impl.batching !== 'undefined') && (typeof re_frisk.reagent.impl.batching.original_run_queue !== 'undefined')){
} else {
re_frisk.reagent.impl.batching.original_run_queue = reagent.impl.batching.run_queue;
}
re_frisk.reagent.impl.batching.run_queue = (function re_frisk$reagent$impl$batching$run_queue(a){
a.sort(reagent.impl.batching.compare_mount_order);

var n__4706__auto__ = a.length;
var i = (0);
while(true){
if((i < n__4706__auto__)){
var c_56387 = (a[i]);
if(c_56387.cljsIsDirty === true){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__56385_56388 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__56386_56389 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword(null,"force-update","force-update",725693267),new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frisk.reagent.impl.batching.operation_name.call(null,c_56387)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__56386_56389);

try{try{c_56387.forceUpdate();
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__18002__auto___56390 = re_frame.interop.now.call(null);
var duration__18003__auto___56391 = (end__18002__auto___56390 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__18003__auto___56391,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__18002__auto___56390);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__56385_56388);
}} else {
c_56387.forceUpdate();
}
} else {
}

var G__56392 = (i + (1));
i = G__56392;
continue;
} else {
return null;
}
break;
}
});
re_frisk.reagent.impl.batching.patch_next_tick = (function re_frisk$reagent$impl$batching$patch_next_tick(){
(reagent.impl.batching.next_tick = re_frisk.reagent.impl.batching.next_tick);

return (reagent.impl.batching.run_queue = re_frisk.reagent.impl.batching.run_queue);
});

//# sourceMappingURL=batching.js.map
