// Compiled by ClojureScript 1.10.866 {:optimizations :none}
goog.provide('client.users.events');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('day8.re_frame.http_fx');
goog.require('re_frame.core');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"change-value","change-value",316989153),(function (db,p__56611){
var vec__56612 = p__56611;
var _ = cljs.core.nth.call(null,vec__56612,(0),null);
var name = cljs.core.nth.call(null,vec__56612,(1),null);
var value = cljs.core.nth.call(null,vec__56612,(2),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form-data","form-data",1829298254),name], null),value);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"get-suggested-addresses","get-suggested-addresses",1480028636),(function (_db,p__56615){
var vec__56616 = p__56615;
var _ = cljs.core.nth.call(null,vec__56616,(0),null);
var value = cljs.core.nth.call(null,vec__56616,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),"https://app.geocodeapi.io/api/v1/autocomplete",new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"apikey","apikey",774584569),"6d06f520-d110-11eb-aecc-39dfc19dc391",new cljs.core.Keyword(null,"text","text",-1790561697),value], null),new cljs.core.Keyword(null,"timeout","timeout",-318625318),(5000),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"success-suggested-addresses","success-suggested-addresses",-297094519)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"failure-suggested-addresses","failure-suggested-addresses",-819416417)], null)], null)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"success-suggested-addresses","success-suggested-addresses",-297094519),(function (db,p__56620){
var vec__56621 = p__56620;
var _ = cljs.core.nth.call(null,vec__56621,(0),null);
var result = cljs.core.nth.call(null,vec__56621,(1),null);
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"suggested-addresses","suggested-addresses",-614714495)], null),cljs.core.distinct.call(null,cljs.core.map.call(null,(function (p1__56619_SHARP_){
return new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(p1__56619_SHARP_));
}),new cljs.core.Keyword(null,"features","features",-1146962336).cljs$core$IFn$_invoke$arity$1(result)))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"address-widget","address-widget",-457576691),new cljs.core.Keyword(null,"state","state",-1988618099)], null),"shown");
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"clear-suggested-addresses","clear-suggested-addresses",-746220477),(function (db,_){
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"suggested-addresses","suggested-addresses",-614714495)], null),cljs.core.PersistentVector.EMPTY);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"failure-suggested-addresses","failure-suggested-addresses",-819416417),(function (db,_){
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"suggested-addresses","suggested-addresses",-614714495)], null),cljs.core.PersistentVector.EMPTY);
}));

//# sourceMappingURL=events.js.map
