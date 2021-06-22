// Compiled by ClojureScript 1.10.866 {:optimizations :none}
goog.provide('re_frisk.ui.reagent_views');
goog.require('cljs.core');
goog.require('re_frisk.ui.components.components');
goog.require('re_frisk.subs_graph');
goog.require('re_frisk.ui.components.frisk');
goog.require('re_frisk.ui.components.colors');
goog.require('re_com.core');
goog.require('re_frisk.inlined_deps.reagent.v1v0v0.reagent.core');
re_frisk.ui.reagent_views.input_signals = (function re_frisk$ui$reagent_views$input_signals(name,subs){
var temp__5753__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,re_frisk.subs_graph.view__GT_reactions),name);
if(cljs.core.truth_(temp__5753__auto__)){
var signals = temp__5753__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.frisk.Root_Simple,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (item){
var op = cljs.core.get.call(null,cljs.core.deref.call(null,re_frisk.subs_graph.reaction__GT_operation),item);
if(cljs.core.truth_(op)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([op,cljs.core.get.call(null,subs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [op], null),cljs.core.PersistentVector.EMPTY], null))]);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reagent","reagent",2131627322),new cljs.core.Keyword(null,"atom","atom",-397043653)], null);
}
}),signals))], null);
} else {
return null;
}
});
re_frisk.ui.reagent_views.views = (function re_frisk$ui$reagent_views$views(_){
var checkbox_sorted_val = re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.atom.call(null,false);
return (function (re_frame_data){
var data = cljs.core.deref.call(null,new cljs.core.Keyword(null,"views","views",1450155487).cljs$core$IFn$_invoke$arity$1(re_frame_data));
var subs = cljs.core.deref.call(null,new cljs.core.Keyword(null,"subs","subs",-186681991).cljs$core$IFn$_invoke$arity$1(re_frame_data));
var chb_val = cljs.core.deref.call(null,checkbox_sorted_val);
var view__GT_reactions = cljs.core.deref.call(null,re_frisk.subs_graph.view__GT_reactions);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"background-color","background-color",570434026),"#f3f3f3",new cljs.core.Keyword(null,"color","color",1011675173),"#444444",new cljs.core.Keyword(null,"padding","padding",1660304693),(8),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"column","column",2078222095)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),(10),new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"solid 1px #000000",new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521)], null)], null),"Mounted views (",cljs.core.count.call(null,data),") in mount order",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(10),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(10)], null)], null)," | "], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.checkbox,new cljs.core.Keyword(null,"model","model",331153215),checkbox_sorted_val,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
cljs.core.swap_BANG_.call(null,checkbox_sorted_val,cljs.core.not);

return null;
}),new cljs.core.Keyword(null,"label","label",1718410804),"subs"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.components.scroller,(function (){var iter__4622__auto__ = (function re_frisk$ui$reagent_views$views_$_iter__55536(s__55537){
return (new cljs.core.LazySeq(null,(function (){
var s__55537__$1 = s__55537;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__55537__$1);
if(temp__5753__auto__){
var s__55537__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__55537__$2)){
var c__4620__auto__ = cljs.core.chunk_first.call(null,s__55537__$2);
var size__4621__auto__ = cljs.core.count.call(null,c__4620__auto__);
var b__55539 = cljs.core.chunk_buffer.call(null,size__4621__auto__);
if((function (){var i__55538 = (0);
while(true){
if((i__55538 < size__4621__auto__)){
var map__55540 = cljs.core._nth.call(null,c__4620__auto__,i__55538);
var map__55540__$1 = cljs.core.__destructure_map.call(null,map__55540);
var name = cljs.core.get.call(null,map__55540__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.chunk_append.call(null,b__55539,(cljs.core.truth_((function (){var or__4223__auto__ = cljs.core.not.call(null,chb_val);
if(or__4223__auto__){
return or__4223__auto__;
} else {
return cljs.core.get.call(null,view__GT_reactions,name);
}
})())?cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"solid 1px #CCCCCC"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min-width","min-width",1926193728),"200",new cljs.core.Keyword(null,"color","color",1011675173),re_frisk.ui.components.colors.render], null)], null),name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.reagent_views.input_signals,name,subs], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["item",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')], null)):null));

var G__55542 = (i__55538 + (1));
i__55538 = G__55542;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55539),re_frisk$ui$reagent_views$views_$_iter__55536.call(null,cljs.core.chunk_rest.call(null,s__55537__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55539),null);
}
} else {
var map__55541 = cljs.core.first.call(null,s__55537__$2);
var map__55541__$1 = cljs.core.__destructure_map.call(null,map__55541);
var name = cljs.core.get.call(null,map__55541__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return cljs.core.cons.call(null,(cljs.core.truth_((function (){var or__4223__auto__ = cljs.core.not.call(null,chb_val);
if(or__4223__auto__){
return or__4223__auto__;
} else {
return cljs.core.get.call(null,view__GT_reactions,name);
}
})())?cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"solid 1px #CCCCCC"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min-width","min-width",1926193728),"200",new cljs.core.Keyword(null,"color","color",1011675173),re_frisk.ui.components.colors.render], null)], null),name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.reagent_views.input_signals,name,subs], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["item",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')], null)):null),re_frisk$ui$reagent_views$views_$_iter__55536.call(null,cljs.core.rest.call(null,s__55537__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.vals.call(null,data)));
})()], null)], null);
});
});

//# sourceMappingURL=reagent_views.js.map
