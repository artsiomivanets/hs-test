// Compiled by ClojureScript 1.10.866 {:optimizations :none}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__56205 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__56206 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__56206);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.call(null,effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___56239 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___56239)){
var new_db_56240 = temp__5753__auto___56239;
re_frame.registrar.get_handler.call(null,re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false).call(null,new_db_56240);
} else {
}

var seq__56207 = cljs.core.seq.call(null,effects_without_db);
var chunk__56208 = null;
var count__56209 = (0);
var i__56210 = (0);
while(true){
if((i__56210 < count__56209)){
var vec__56217 = cljs.core._nth.call(null,chunk__56208,i__56210);
var effect_key = cljs.core.nth.call(null,vec__56217,(0),null);
var effect_value = cljs.core.nth.call(null,vec__56217,(1),null);
var temp__5751__auto___56241 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___56241)){
var effect_fn_56242 = temp__5751__auto___56241;
effect_fn_56242.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__56243 = seq__56207;
var G__56244 = chunk__56208;
var G__56245 = count__56209;
var G__56246 = (i__56210 + (1));
seq__56207 = G__56243;
chunk__56208 = G__56244;
count__56209 = G__56245;
i__56210 = G__56246;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__56207);
if(temp__5753__auto__){
var seq__56207__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56207__$1)){
var c__4649__auto__ = cljs.core.chunk_first.call(null,seq__56207__$1);
var G__56247 = cljs.core.chunk_rest.call(null,seq__56207__$1);
var G__56248 = c__4649__auto__;
var G__56249 = cljs.core.count.call(null,c__4649__auto__);
var G__56250 = (0);
seq__56207 = G__56247;
chunk__56208 = G__56248;
count__56209 = G__56249;
i__56210 = G__56250;
continue;
} else {
var vec__56220 = cljs.core.first.call(null,seq__56207__$1);
var effect_key = cljs.core.nth.call(null,vec__56220,(0),null);
var effect_value = cljs.core.nth.call(null,vec__56220,(1),null);
var temp__5751__auto___56251 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___56251)){
var effect_fn_56252 = temp__5751__auto___56251;
effect_fn_56252.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__56253 = cljs.core.next.call(null,seq__56207__$1);
var G__56254 = null;
var G__56255 = (0);
var G__56256 = (0);
seq__56207 = G__56253;
chunk__56208 = G__56254;
count__56209 = G__56255;
i__56210 = G__56256;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__18002__auto___56257 = re_frame.interop.now.call(null);
var duration__18003__auto___56258 = (end__18002__auto___56257 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__18003__auto___56258,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__18002__auto___56257);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__56205);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.call(null,effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___56259 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___56259)){
var new_db_56260 = temp__5753__auto___56259;
re_frame.registrar.get_handler.call(null,re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false).call(null,new_db_56260);
} else {
}

var seq__56223 = cljs.core.seq.call(null,effects_without_db);
var chunk__56224 = null;
var count__56225 = (0);
var i__56226 = (0);
while(true){
if((i__56226 < count__56225)){
var vec__56233 = cljs.core._nth.call(null,chunk__56224,i__56226);
var effect_key = cljs.core.nth.call(null,vec__56233,(0),null);
var effect_value = cljs.core.nth.call(null,vec__56233,(1),null);
var temp__5751__auto___56261 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___56261)){
var effect_fn_56262 = temp__5751__auto___56261;
effect_fn_56262.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__56263 = seq__56223;
var G__56264 = chunk__56224;
var G__56265 = count__56225;
var G__56266 = (i__56226 + (1));
seq__56223 = G__56263;
chunk__56224 = G__56264;
count__56225 = G__56265;
i__56226 = G__56266;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__56223);
if(temp__5753__auto__){
var seq__56223__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56223__$1)){
var c__4649__auto__ = cljs.core.chunk_first.call(null,seq__56223__$1);
var G__56267 = cljs.core.chunk_rest.call(null,seq__56223__$1);
var G__56268 = c__4649__auto__;
var G__56269 = cljs.core.count.call(null,c__4649__auto__);
var G__56270 = (0);
seq__56223 = G__56267;
chunk__56224 = G__56268;
count__56225 = G__56269;
i__56226 = G__56270;
continue;
} else {
var vec__56236 = cljs.core.first.call(null,seq__56223__$1);
var effect_key = cljs.core.nth.call(null,vec__56236,(0),null);
var effect_value = cljs.core.nth.call(null,vec__56236,(1),null);
var temp__5751__auto___56271 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___56271)){
var effect_fn_56272 = temp__5751__auto___56271;
effect_fn_56272.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__56273 = cljs.core.next.call(null,seq__56223__$1);
var G__56274 = null;
var G__56275 = (0);
var G__56276 = (0);
seq__56223 = G__56273;
chunk__56224 = G__56274;
count__56225 = G__56275;
i__56226 = G__56276;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__56277){
var map__56278 = p__56277;
var map__56278__$1 = cljs.core.__destructure_map.call(null,map__56278);
var effect = map__56278__$1;
var ms = cljs.core.get.call(null,map__56278__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__56278__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
return re_frame.interop.set_timeout_BANG_.call(null,(function (){
return re_frame.router.dispatch.call(null,dispatch);
}),ms);
}
});
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_.call(null,value)){
return re_frame.fx.dispatch_later.call(null,value);
} else {
var seq__56279 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__56280 = null;
var count__56281 = (0);
var i__56282 = (0);
while(true){
if((i__56282 < count__56281)){
var effect = cljs.core._nth.call(null,chunk__56280,i__56282);
re_frame.fx.dispatch_later.call(null,effect);


var G__56283 = seq__56279;
var G__56284 = chunk__56280;
var G__56285 = count__56281;
var G__56286 = (i__56282 + (1));
seq__56279 = G__56283;
chunk__56280 = G__56284;
count__56281 = G__56285;
i__56282 = G__56286;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__56279);
if(temp__5753__auto__){
var seq__56279__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56279__$1)){
var c__4649__auto__ = cljs.core.chunk_first.call(null,seq__56279__$1);
var G__56287 = cljs.core.chunk_rest.call(null,seq__56279__$1);
var G__56288 = c__4649__auto__;
var G__56289 = cljs.core.count.call(null,c__4649__auto__);
var G__56290 = (0);
seq__56279 = G__56287;
chunk__56280 = G__56288;
count__56281 = G__56289;
i__56282 = G__56290;
continue;
} else {
var effect = cljs.core.first.call(null,seq__56279__$1);
re_frame.fx.dispatch_later.call(null,effect);


var G__56291 = cljs.core.next.call(null,seq__56279__$1);
var G__56292 = null;
var G__56293 = (0);
var G__56294 = (0);
seq__56279 = G__56291;
chunk__56280 = G__56292;
count__56281 = G__56293;
i__56282 = G__56294;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_.call(null,seq_of_effects)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type.call(null,seq_of_effects));
} else {
var seq__56295 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,seq_of_effects));
var chunk__56296 = null;
var count__56297 = (0);
var i__56298 = (0);
while(true){
if((i__56298 < count__56297)){
var vec__56305 = cljs.core._nth.call(null,chunk__56296,i__56298);
var effect_key = cljs.core.nth.call(null,vec__56305,(0),null);
var effect_value = cljs.core.nth.call(null,vec__56305,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: \":fx\" effect should not contain a :db effect");
} else {
}

var temp__5751__auto___56311 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___56311)){
var effect_fn_56312 = temp__5751__auto___56311;
effect_fn_56312.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring.");
}


var G__56313 = seq__56295;
var G__56314 = chunk__56296;
var G__56315 = count__56297;
var G__56316 = (i__56298 + (1));
seq__56295 = G__56313;
chunk__56296 = G__56314;
count__56297 = G__56315;
i__56298 = G__56316;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__56295);
if(temp__5753__auto__){
var seq__56295__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56295__$1)){
var c__4649__auto__ = cljs.core.chunk_first.call(null,seq__56295__$1);
var G__56317 = cljs.core.chunk_rest.call(null,seq__56295__$1);
var G__56318 = c__4649__auto__;
var G__56319 = cljs.core.count.call(null,c__4649__auto__);
var G__56320 = (0);
seq__56295 = G__56317;
chunk__56296 = G__56318;
count__56297 = G__56319;
i__56298 = G__56320;
continue;
} else {
var vec__56308 = cljs.core.first.call(null,seq__56295__$1);
var effect_key = cljs.core.nth.call(null,vec__56308,(0),null);
var effect_value = cljs.core.nth.call(null,vec__56308,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: \":fx\" effect should not contain a :db effect");
} else {
}

var temp__5751__auto___56321 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___56321)){
var effect_fn_56322 = temp__5751__auto___56321;
effect_fn_56322.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring.");
}


var G__56323 = cljs.core.next.call(null,seq__56295__$1);
var G__56324 = null;
var G__56325 = (0);
var G__56326 = (0);
seq__56295 = G__56323;
chunk__56296 = G__56324;
count__56297 = G__56325;
i__56298 = G__56326;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value);
} else {
var seq__56327 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__56328 = null;
var count__56329 = (0);
var i__56330 = (0);
while(true){
if((i__56330 < count__56329)){
var event = cljs.core._nth.call(null,chunk__56328,i__56330);
re_frame.router.dispatch.call(null,event);


var G__56331 = seq__56327;
var G__56332 = chunk__56328;
var G__56333 = count__56329;
var G__56334 = (i__56330 + (1));
seq__56327 = G__56331;
chunk__56328 = G__56332;
count__56329 = G__56333;
i__56330 = G__56334;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__56327);
if(temp__5753__auto__){
var seq__56327__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56327__$1)){
var c__4649__auto__ = cljs.core.chunk_first.call(null,seq__56327__$1);
var G__56335 = cljs.core.chunk_rest.call(null,seq__56327__$1);
var G__56336 = c__4649__auto__;
var G__56337 = cljs.core.count.call(null,c__4649__auto__);
var G__56338 = (0);
seq__56327 = G__56335;
chunk__56328 = G__56336;
count__56329 = G__56337;
i__56330 = G__56338;
continue;
} else {
var event = cljs.core.first.call(null,seq__56327__$1);
re_frame.router.dispatch.call(null,event);


var G__56339 = cljs.core.next.call(null,seq__56327__$1);
var G__56340 = null;
var G__56341 = (0);
var G__56342 = (0);
seq__56327 = G__56339;
chunk__56328 = G__56340;
count__56329 = G__56341;
i__56330 = G__56342;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__56343 = cljs.core.seq.call(null,value);
var chunk__56344 = null;
var count__56345 = (0);
var i__56346 = (0);
while(true){
if((i__56346 < count__56345)){
var event = cljs.core._nth.call(null,chunk__56344,i__56346);
clear_event.call(null,event);


var G__56347 = seq__56343;
var G__56348 = chunk__56344;
var G__56349 = count__56345;
var G__56350 = (i__56346 + (1));
seq__56343 = G__56347;
chunk__56344 = G__56348;
count__56345 = G__56349;
i__56346 = G__56350;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__56343);
if(temp__5753__auto__){
var seq__56343__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56343__$1)){
var c__4649__auto__ = cljs.core.chunk_first.call(null,seq__56343__$1);
var G__56351 = cljs.core.chunk_rest.call(null,seq__56343__$1);
var G__56352 = c__4649__auto__;
var G__56353 = cljs.core.count.call(null,c__4649__auto__);
var G__56354 = (0);
seq__56343 = G__56351;
chunk__56344 = G__56352;
count__56345 = G__56353;
i__56346 = G__56354;
continue;
} else {
var event = cljs.core.first.call(null,seq__56343__$1);
clear_event.call(null,event);


var G__56355 = cljs.core.next.call(null,seq__56343__$1);
var G__56356 = null;
var G__56357 = (0);
var G__56358 = (0);
seq__56343 = G__56355;
chunk__56344 = G__56356;
count__56345 = G__56357;
i__56346 = G__56358;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref.call(null,re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map
