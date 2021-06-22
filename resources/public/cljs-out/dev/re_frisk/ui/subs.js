// Compiled by ClojureScript 1.10.866 {:optimizations :none}
goog.provide('re_frisk.ui.subs');
goog.require('cljs.core');
goog.require('re_frisk.inlined_deps.reagent.v1v0v0.reagent.core');
goog.require('re_frisk.subs_graph');
re_frisk.ui.subs.global_subs_graph_container = (function re_frisk$ui$subs$global_subs_graph_container(){
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
return re_frisk.subs_graph.create.call(null);
}),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (){
return re_frisk.subs_graph.destroy.call(null);
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"global-subs-graph-container",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#f3f3f3"], null)], null)], null);
})], null));
});
re_frisk.ui.subs.subs_visibility = (function re_frisk$ui$subs$subs_visibility(re_frame_data,tool_state){
if(cljs.core.truth_(new cljs.core.Keyword(null,"graph-opened?","graph-opened?",153449318).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tool_state)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.subs.global_subs_graph_container], null);
} else {
return null;
}
});
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.ui !== 'undefined') && (typeof re_frisk.ui.subs !== 'undefined') && (typeof re_frisk.ui.subs.timeout !== 'undefined')){
} else {
re_frisk.ui.subs.timeout = cljs.core.atom.call(null,null);
}
re_frisk.ui.subs.event_subs_graph_container = (function re_frisk$ui$subs$event_subs_graph_container(item){
return (function (item__$1){
if(cljs.core.truth_(cljs.core.deref.call(null,re_frisk.ui.subs.timeout))){
clearTimeout(cljs.core.deref.call(null,re_frisk.ui.subs.timeout));
} else {
}

cljs.core.reset_BANG_.call(null,re_frisk.ui.subs.timeout,setTimeout((function (){
return re_frisk.subs_graph.create_event_subs.call(null,item__$1);
}),(200)));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"event-subs-graph-container",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#f3f3f3"], null)], null)], null);
});
});

//# sourceMappingURL=subs.js.map
