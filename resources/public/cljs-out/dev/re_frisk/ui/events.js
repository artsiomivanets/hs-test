// Compiled by ClojureScript 1.10.866 {:optimizations :none}
goog.provide('re_frisk.ui.events');
goog.require('cljs.core');
goog.require('re_frisk.inlined_deps.reagent.v1v0v0.reagent.core');
goog.require('re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom');
goog.require('clojure.string');
goog.require('re_com.core');
goog.require('re_frisk.ui.components.frisk');
goog.require('re_frisk.ui.components.components');
goog.require('re_frisk.ui.trace');
goog.require('re_frisk.utils');
goog.require('re_frisk.ui.subs');
goog.require('re_frisk.ui.components.colors');
re_frisk.ui.events.event_item = (function re_frisk$ui$events$event_item(_,tool_state,checkbox_trace_val){
return (function (p__55467,___$1){
var map__55468 = p__55467;
var map__55468__$1 = cljs.core.__destructure_map.call(null,map__55468);
var item = map__55468__$1;
var color = cljs.core.get.call(null,map__55468__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var name = cljs.core.get.call(null,map__55468__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var app_db_diff = cljs.core.get.call(null,map__55468__$1,new cljs.core.Keyword(null,"app-db-diff","app-db-diff",709588713));
var selected_QMARK_ = cljs.core.get.call(null,map__55468__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
var op_type = cljs.core.get.call(null,map__55468__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var indx = cljs.core.get.call(null,map__55468__$1,new cljs.core.Keyword(null,"indx","indx",1571035590));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"id","id",-1388402092),["events-list-item",cljs.core.str.cljs$core$IFn$_invoke$arity$1(indx)].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),["list-group-item",(cljs.core.truth_(selected_QMARK_)?" active":null)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"padding","padding",1660304693),(5),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(13),new cljs.core.Keyword(null,"border-left-width","border-left-width",2037218085),(2),new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),(0),new cljs.core.Keyword(null,"white-space","white-space",-707351930),new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),(((((app_db_diff == null)) && (cljs.core.not.call(null,selected_QMARK_))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),"0.7"], null):null),((clojure.string.blank_QMARK_.call(null,color))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-left-color","border-left-color",-1166146583),["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(color)].join('')], null))),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
cljs.core.swap_BANG_.call(null,tool_state,cljs.core.assoc,new cljs.core.Keyword(null,"selected-event","selected-event",898030638),item);

re_frisk.utils.scroll_timeline_event_item.call(null,new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tool_state)),indx);

return event.preventDefault();
})], null),(cljs.core.truth_((function (){var and__4221__auto__ = op_type;
if(cljs.core.truth_(and__4221__auto__)){
return checkbox_trace_val;
} else {
return and__4221__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.trace.trace_event_item,item], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),name], null))], null);
});
});
re_frisk.ui.events.event_list_item = (function re_frisk$ui$events$event_list_item(_,tool_state,checkbox_trace_val){
return (function (p__55469,___$1){
var map__55470 = p__55469;
var map__55470__$1 = cljs.core.__destructure_map.call(null,map__55470);
var item = map__55470__$1;
var trace_QMARK_ = cljs.core.get.call(null,map__55470__$1,new cljs.core.Keyword(null,"trace?","trace?",1730690679));
var op_type = cljs.core.get.call(null,map__55470__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
if(cljs.core.truth_((function (){var and__4221__auto__ = trace_QMARK_;
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"event","event",301435442),op_type);
} else {
return and__4221__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.trace.trace_item,item,tool_state], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.events.event_item,item,tool_state,checkbox_trace_val], null);
}
});
});
re_frisk.ui.events.events_scroller = (function re_frisk$ui$events$events_scroller(filtered_events,tool_state,_){
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"re_frisk.debugger-messages",new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (this$){
var n = re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.dom_node.call(null,this$);
if(cljs.core.truth_(new cljs.core.Keyword(null,"scroll-bottom?","scroll-bottom?",-1686598134).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tool_state)))){
return (n.scrollTop = n.scrollHeight);
} else {
return null;
}
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (___$1,___$2,checkbox_trace_val){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.components.scroller,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-scroll","on-scroll",1590848677),(function (p1__55471_SHARP_){
var t = p1__55471_SHARP_.target;
return cljs.core.swap_BANG_.call(null,tool_state,cljs.core.assoc,new cljs.core.Keyword(null,"scroll-bottom?","scroll-bottom?",-1686598134),cljs.core._EQ_.call(null,(t.scrollHeight - t.offsetHeight),t.scrollTop));
})], null),(function (){var iter__4622__auto__ = (function re_frisk$ui$events$events_scroller_$_iter__55472(s__55473){
return (new cljs.core.LazySeq(null,(function (){
var s__55473__$1 = s__55473;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__55473__$1);
if(temp__5753__auto__){
var s__55473__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__55473__$2)){
var c__4620__auto__ = cljs.core.chunk_first.call(null,s__55473__$2);
var size__4621__auto__ = cljs.core.count.call(null,c__4620__auto__);
var b__55475 = cljs.core.chunk_buffer.call(null,size__4621__auto__);
if((function (){var i__55474 = (0);
while(true){
if((i__55474 < size__4621__auto__)){
var item = cljs.core._nth.call(null,c__4620__auto__,i__55474);
cljs.core.chunk_append.call(null,b__55475,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.events.event_list_item,item,tool_state,checkbox_trace_val], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["item",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"indx","indx",1571035590).cljs$core$IFn$_invoke$arity$1(item)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(checkbox_trace_val)].join('')], null)));

var G__55476 = (i__55474 + (1));
i__55474 = G__55476;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55475),re_frisk$ui$events$events_scroller_$_iter__55472.call(null,cljs.core.chunk_rest.call(null,s__55473__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55475),null);
}
} else {
var item = cljs.core.first.call(null,s__55473__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.events.event_list_item,item,tool_state,checkbox_trace_val], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["item",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"indx","indx",1571035590).cljs$core$IFn$_invoke$arity$1(item)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(checkbox_trace_val)].join('')], null)),re_frisk$ui$events$events_scroller_$_iter__55472.call(null,cljs.core.rest.call(null,s__55473__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__.call(null,cljs.core.deref.call(null,filtered_events));
})()], null);
})], null));
});
re_frisk.ui.events.events_list_view = (function re_frisk$ui$events$events_list_view(re_frame_data,tool_state){
var truncate_checkbox_val = re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.atom.call(null,true);
var checkbox_trace_val = re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.atom.call(null,false);
var text_val = re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.atom.call(null,"");
var max_text_val = re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.atom.call(null,"");
var re_frame_events = new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(re_frame_data);
var colored_and_selected = re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.make_reaction.call(null,(function (){
var clrs = new cljs.core.Keyword(null,"events-colors","events-colors",-428819032).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tool_state));
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__55477_SHARP_){
return cljs.core.assoc.call(null,p1__55477_SHARP_,new cljs.core.Keyword(null,"selected?","selected?",-742502788),cljs.core._EQ_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,tool_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-event","selected-event",898030638),new cljs.core.Keyword(null,"indx","indx",1571035590)], null)),new cljs.core.Keyword(null,"indx","indx",1571035590).cljs$core$IFn$_invoke$arity$1(p1__55477_SHARP_)),new cljs.core.Keyword(null,"name","name",1843675177),(cljs.core.truth_(cljs.core.deref.call(null,truncate_checkbox_val))?new cljs.core.Keyword(null,"truncated-name","truncated-name",1771353320).cljs$core$IFn$_invoke$arity$1(p1__55477_SHARP_):cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(p1__55477_SHARP_)))),new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.get.call(null,clrs,cljs.core.first.call(null,new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(p1__55477_SHARP_))));
}),cljs.core.deref.call(null,re_frame_events)));
}));
var traces_filtered_events = re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.make_reaction.call(null,(function (){
if(cljs.core.truth_(cljs.core.deref.call(null,checkbox_trace_val))){
return cljs.core.deref.call(null,colored_and_selected);
} else {
return cljs.core.remove.call(null,new cljs.core.Keyword(null,"trace?","trace?",1730690679),cljs.core.deref.call(null,colored_and_selected));
}
}));
var max_traces_filtered_events = re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.make_reaction.call(null,(function (){
if(((cljs.core.deref.call(null,max_text_val) | (0)) > (0))){
return cljs.core.take_last.call(null,(cljs.core.deref.call(null,max_text_val) | (0)),cljs.core.deref.call(null,traces_filtered_events));
} else {
return cljs.core.deref.call(null,traces_filtered_events);
}
}));
var filtered_events = re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.make_reaction.call(null,(function (){
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,text_val),"")){
return cljs.core.deref.call(null,max_traces_filtered_events);
} else {
return cljs.core.filter.call(null,re_frisk.utils.filter_event.call(null,cljs.core.deref.call(null,text_val)),cljs.core.deref.call(null,max_traces_filtered_events));
}
}));
var sorted_events = re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"indx","indx",1571035590),cljs.core.deref.call(null,filtered_events));
}));
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"size","size",1098693007),"1",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"1",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"padding","padding",1660304693),"0",new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,text_val),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Filter events",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__55478_SHARP_){
return cljs.core.reset_BANG_.call(null,text_val,p1__55478_SHARP_.target.value);
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.components.small_button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,text_val,"");
}),new cljs.core.Keyword(null,"active?","active?",459499776),false], null),"X"], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"5px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.checkbox,new cljs.core.Keyword(null,"model","model",331153215),truncate_checkbox_val,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__55479_SHARP_){
return cljs.core.reset_BANG_.call(null,truncate_checkbox_val,p1__55479_SHARP_);
}),new cljs.core.Keyword(null,"label","label",1718410804),"truncate"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.checkbox,new cljs.core.Keyword(null,"model","model",331153215),checkbox_trace_val,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__55480_SHARP_){
return cljs.core.reset_BANG_.call(null,checkbox_trace_val,p1__55480_SHARP_);
}),new cljs.core.Keyword(null,"label","label",1718410804),"traces"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"100%"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),"20px",new cljs.core.Keyword(null,"padding","padding",1660304693),"0",new cljs.core.Keyword(null,"width","width",-384071477),"30px"], null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,max_text_val),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"max",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__55481_SHARP_){
return cljs.core.reset_BANG_.call(null,max_text_val,p1__55481_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.components.small_button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,max_text_val,null);
}),new cljs.core.Keyword(null,"active?","active?",459499776),false], null),"X"], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.events.events_scroller,sorted_events,tool_state,cljs.core.deref.call(null,checkbox_trace_val)], null)], null)], null);
});
});
re_frisk.ui.events.event_bar = (function re_frisk$ui$events$event_bar(tool_state){
var evnt_key = re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.first.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,tool_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-event","selected-event",898030638),new cljs.core.Keyword(null,"event","event",301435442)], null)));
}));
var subs_QMARK_ = re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,tool_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-event","selected-event",898030638),new cljs.core.Keyword(null,"subs?","subs?",-2085240020)], null));
}));
var subs_graph_opened_QMARK_ = re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,tool_state),new cljs.core.Keyword(null,"subs-graph-opened?","subs-graph-opened?",2059765056));
}));
var color = re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.make_reaction.call(null,(function (){
if(cljs.core.truth_(cljs.core.deref.call(null,evnt_key))){
return cljs.core.deref.call(null,evnt_key).call(null,new cljs.core.Keyword(null,"events-colors","events-colors",-428819032).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tool_state)));
} else {
return "";
}
}));
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#4e5d6c"], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"4px"], null),new cljs.core.Keyword(null,"label","label",1718410804),(cljs.core.truth_(cljs.core.deref.call(null,evnt_key))?"Event":(cljs.core.truth_(cljs.core.deref.call(null,subs_QMARK_))?"Subscriptions":"Event / Trace"
))], null),(cljs.core.truth_(cljs.core.deref.call(null,subs_QMARK_))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.components.label_button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,tool_state,cljs.core.update,new cljs.core.Keyword(null,"subs-graph-opened?","subs-graph-opened?",2059765056),cljs.core.not);
}),new cljs.core.Keyword(null,"active?","active?",459499776),cljs.core.deref.call(null,subs_graph_opened_QMARK_)], null),"Graph"], null):null),(cljs.core.truth_(cljs.core.deref.call(null,evnt_key))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.deref.call(null,evnt_key),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"4px"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),"#",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"4px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"60px"], null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"000000",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"max-length","max-length",-254826109),"6",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,color),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__55482_SHARP_){
return cljs.core.swap_BANG_.call(null,tool_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"events-colors","events-colors",-428819032),cljs.core.deref.call(null,evnt_key)], null),p1__55482_SHARP_.target.value);
})], null)], null)], null)], null):null)], null)], null);
});
});
re_frisk.ui.events.event_count = (function re_frisk$ui$events$event_count(label,val,color,duration_ms){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(10),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521)], null)], null),label,":",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),((clojure.string.blank_QMARK_.call(null,val))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(10)], null)], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"margin","margin",-995903681),(5),new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),(4),new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),(4),new cljs.core.Keyword(null,"background-color","background-color",570434026),color,new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(4),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null)], null),val], null)),duration_ms], null)], null);
});
re_frisk.ui.events.event_content = (function re_frisk$ui$events$event_content(_){
var state_atom = re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.atom.call(null,re_frisk.ui.components.frisk.expand_by_default);
return (function (item){
var map__55483 = item;
var map__55483__$1 = cljs.core.__destructure_map.call(null,map__55483);
var event = cljs.core.get.call(null,map__55483__$1,new cljs.core.Keyword(null,"event","event",301435442));
var app_db_diff = cljs.core.get.call(null,map__55483__$1,new cljs.core.Keyword(null,"app-db-diff","app-db-diff",709588713));
var trace_QMARK_ = cljs.core.get.call(null,map__55483__$1,new cljs.core.Keyword(null,"trace?","trace?",1730690679));
var duration_ms = cljs.core.get.call(null,map__55483__$1,new cljs.core.Keyword(null,"duration-ms","duration-ms",1993555055));
var handler_duration_ms = cljs.core.get.call(null,map__55483__$1,new cljs.core.Keyword(null,"handler-duration-ms","handler-duration-ms",-491924416));
var fx_duration_ms = cljs.core.get.call(null,map__55483__$1,new cljs.core.Keyword(null,"fx-duration-ms","fx-duration-ms",-1014211328));
var effects = cljs.core.get.call(null,map__55483__$1,new cljs.core.Keyword(null,"effects","effects",-282369292));
var coeffects = cljs.core.get.call(null,map__55483__$1,new cljs.core.Keyword(null,"coeffects","coeffects",497912985));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"background-color","background-color",570434026),"#f3f3f3",new cljs.core.Keyword(null,"color","color",1011675173),"#444444",new cljs.core.Keyword(null,"padding","padding",1660304693),(8),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"column","column",2078222095)], null)], null),(cljs.core.truth_(duration_ms)?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),(10),new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"solid 1px #CCCCCC"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(10)], null)], null),"Total time: ",duration_ms], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(10)], null)], null)," | "], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.events.event_count,"Handler","",re_frisk.ui.components.colors.render,handler_duration_ms], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(10)], null)], null)," | "], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.events.event_count,"Effects",cljs.core.count.call(null,effects),re_frisk.ui.components.colors.effect,fx_duration_ms], null)], null):null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.frisk.Root,(cljs.core.truth_(trace_QMARK_)?item:cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event], null),(cljs.core.truth_(duration_ms)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"effects","effects",-282369292),(function (){var G__55484 = effects;
if(cljs.core.truth_(app_db_diff)){
return cljs.core.assoc.call(null,G__55484,new cljs.core.Keyword(null,"db","db",993250759),app_db_diff);
} else {
return G__55484;
}
})(),new cljs.core.Keyword(null,"coeffects","coeffects",497912985),coeffects], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"app-db-diff","app-db-diff",709588713),app_db_diff], null)))),(0),state_atom], null)], null);
});
});
re_frisk.ui.events.frisk_view = (function re_frisk$ui$events$frisk_view(tool_state){
return (function (_){
var subs_graph_opened_QMARK_ = new cljs.core.Keyword(null,"subs-graph-opened?","subs-graph-opened?",2059765056).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tool_state));
var map__55485 = new cljs.core.Keyword(null,"selected-event","selected-event",898030638).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tool_state));
var map__55485__$1 = cljs.core.__destructure_map.call(null,map__55485);
var item = map__55485__$1;
var subs_QMARK_ = cljs.core.get.call(null,map__55485__$1,new cljs.core.Keyword(null,"subs?","subs?",-2085240020));
if(cljs.core.truth_(item)){
if(cljs.core.truth_(subs_QMARK_)){
if(cljs.core.truth_(subs_graph_opened_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.subs.event_subs_graph_container,item], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.trace.subs_details,item], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.events.event_content,item], null);
}
} else {
return null;
}
});
});

//# sourceMappingURL=events.js.map
