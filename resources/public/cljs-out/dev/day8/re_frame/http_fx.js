// Compiled by ClojureScript 1.10.866 {:optimizations :none}
goog.provide('day8.re_frame.http_fx');
goog.require('cljs.core');
goog.require('goog.net.ErrorCode');
goog.require('re_frame.core');
goog.require('ajax.simple');
goog.require('ajax.xhrio');
goog.require('goog.net.XhrIo');
/**
 * ajax-request only provides a single handler for success and errors
 */
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__56583){
var vec__56584 = p__56583;
var success_QMARK_ = cljs.core.nth.call(null,vec__56584,(0),null);
var response = cljs.core.nth.call(null,vec__56584,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return on_success.call(null,response);
} else {
var details = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uri","uri",-774711847),xhrio.getLastUri(),new cljs.core.Keyword(null,"last-method","last-method",-563909920),xhrio.lastMethod_,new cljs.core.Keyword(null,"last-error","last-error",1848699973),xhrio.getLastError(),new cljs.core.Keyword(null,"last-error-code","last-error-code",276598110),xhrio.getLastErrorCode(),new cljs.core.Keyword(null,"debug-message","debug-message",-502855302),goog.net.ErrorCode.getDebugMessage(xhrio.getLastErrorCode())], null),response);
return on_failure.call(null,details);
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__56589){
var map__56590 = p__56589;
var map__56590__$1 = cljs.core.__destructure_map.call(null,map__56590);
var request = map__56590__$1;
var on_success = cljs.core.get.call(null,map__56590__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-success","http-no-on-success",-1593227158)], null));
var on_failure = cljs.core.get.call(null,map__56590__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-failure","http-no-on-failure",962976084)], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"api","api",-899839580),api,new cljs.core.Keyword(null,"handler","handler",-195596612),cljs.core.partial.call(null,day8.re_frame.http_fx.ajax_xhrio_handler,(function (p1__56587_SHARP_){
return re_frame.core.dispatch.call(null,cljs.core.conj.call(null,on_success,p1__56587_SHARP_));
}),(function (p1__56588_SHARP_){
return re_frame.core.dispatch.call(null,cljs.core.conj.call(null,on_failure,p1__56588_SHARP_));
}),api)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.Keyword(null,"on-request","on-request",972531605));
});
day8.re_frame.http_fx.dispatch_on_request = (function day8$re_frame$http_fx$dispatch_on_request(request,xhrio){
var temp__5751__auto__ = new cljs.core.Keyword(null,"on-request","on-request",972531605).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5751__auto__)){
var on_request = temp__5751__auto__;
return re_frame.core.dispatch.call(null,cljs.core.conj.call(null,on_request,xhrio));
} else {
return null;
}
});
day8.re_frame.http_fx.http_effect = (function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_.call(null,request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__56591 = cljs.core.seq.call(null,seq_request_maps);
var chunk__56592 = null;
var count__56593 = (0);
var i__56594 = (0);
while(true){
if((i__56594 < count__56593)){
var request__$1 = cljs.core._nth.call(null,chunk__56592,i__56594);
var xhrio_56595 = ajax.simple.ajax_request.call(null,day8.re_frame.http_fx.request__GT_xhrio_options.call(null,request__$1));
day8.re_frame.http_fx.dispatch_on_request.call(null,request__$1,xhrio_56595);


var G__56596 = seq__56591;
var G__56597 = chunk__56592;
var G__56598 = count__56593;
var G__56599 = (i__56594 + (1));
seq__56591 = G__56596;
chunk__56592 = G__56597;
count__56593 = G__56598;
i__56594 = G__56599;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__56591);
if(temp__5753__auto__){
var seq__56591__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56591__$1)){
var c__4649__auto__ = cljs.core.chunk_first.call(null,seq__56591__$1);
var G__56600 = cljs.core.chunk_rest.call(null,seq__56591__$1);
var G__56601 = c__4649__auto__;
var G__56602 = cljs.core.count.call(null,c__4649__auto__);
var G__56603 = (0);
seq__56591 = G__56600;
chunk__56592 = G__56601;
count__56593 = G__56602;
i__56594 = G__56603;
continue;
} else {
var request__$1 = cljs.core.first.call(null,seq__56591__$1);
var xhrio_56604 = ajax.simple.ajax_request.call(null,day8.re_frame.http_fx.request__GT_xhrio_options.call(null,request__$1));
day8.re_frame.http_fx.dispatch_on_request.call(null,request__$1,xhrio_56604);


var G__56605 = cljs.core.next.call(null,seq__56591__$1);
var G__56606 = null;
var G__56607 = (0);
var G__56608 = (0);
seq__56591 = G__56605;
chunk__56592 = G__56606;
count__56593 = G__56607;
i__56594 = G__56608;
continue;
}
} else {
return null;
}
}
break;
}
});
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),day8.re_frame.http_fx.http_effect);

//# sourceMappingURL=http_fx.js.map
