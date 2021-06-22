// Compiled by ClojureScript 1.10.866 {:optimizations :none}
goog.provide('client.users.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"address-widget-state","address-widget-state",-700202449),(function (db,_){
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"address-widget","address-widget",-457576691),new cljs.core.Keyword(null,"state","state",-1988618099)], null),new cljs.core.Keyword(null,"hidden","hidden",-312506092));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"form-data","form-data",1829298254),(function (db,p__56630){
var vec__56631 = p__56630;
var _ = cljs.core.nth.call(null,vec__56631,(0),null);
var name = cljs.core.nth.call(null,vec__56631,(1),null);
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form-data","form-data",1829298254),name], null),"");
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"suggested-addresses","suggested-addresses",-614714495),(function (db,_){
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"suggested-addresses","suggested-addresses",-614714495)], null),cljs.core.PersistentVector.EMPTY);
}));

//# sourceMappingURL=subs.js.map
