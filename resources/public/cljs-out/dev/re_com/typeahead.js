// Compiled by ClojureScript 1.10.866 {:optimizations :none}
goog.provide('re_com.typeahead');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('re_com.misc');
goog.require('re_com.util');
goog.require('re_com.popover');
goog.require('re_com.box');
goog.require('re_com.validate');
goog.require('reagent.core');
goog.require('goog.events.KeyCodes');

/**
 * Return an initial value for the typeahead state, given `args`.
 */
re_com.typeahead.make_typeahead_state = (function re_com$typeahead$make_typeahead_state(p__52554){
var map__52555 = p__52554;
var map__52555__$1 = cljs.core.__destructure_map.call(null,map__52555);
var args = map__52555__$1;
var on_change = cljs.core.get.call(null,map__52555__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var rigid_QMARK_ = cljs.core.get.call(null,map__52555__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__52555__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var immediate_model_update_QMARK_ = cljs.core.get.call(null,map__52555__$1,new cljs.core.Keyword(null,"immediate-model-update?","immediate-model-update?",-2000005618));
var data_source = cljs.core.get.call(null,map__52555__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var suggestion_to_string = cljs.core.get.call(null,map__52555__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var debounce_delay = cljs.core.get.call(null,map__52555__$1,new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982));
var model = cljs.core.get.call(null,map__52555__$1,new cljs.core.Keyword(null,"model","model",331153215));
var external_model_value = re_com.util.deref_or_value.call(null,model);
var G__52556 = (function (){var c_input = cljs.core.async.chan.call(null);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"immediate-model-update?","immediate-model-update?",-2000005618),new cljs.core.Keyword(null,"c-search","c-search",1832536180),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"c-input","c-input",-1821004232),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"external-model","external-model",506095421),new cljs.core.Keyword(null,"model","model",331153215)],[false,(function (){var or__4223__auto__ = suggestion_to_string;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.str;
}
})(),false,"",rigid_QMARK_,data_source,immediate_model_update_QMARK_,re_com.typeahead.debounce.call(null,c_input,debounce_delay),change_on_blur_QMARK_,cljs.core.PersistentVector.EMPTY,c_input,on_change,re_com.util.deref_or_value.call(null,model),re_com.util.deref_or_value.call(null,model)]);
})();
if(cljs.core.truth_(external_model_value)){
return re_com.typeahead.display_suggestion.call(null,G__52556,external_model_value);
} else {
return G__52556;
}
});
/**
 * Should `event` update the `typeahead` `model`?
 */
re_com.typeahead.event_updates_model_QMARK_ = (function re_com$typeahead$event_updates_model_QMARK_(p__52557,event){
var map__52558 = p__52557;
var map__52558__$1 = cljs.core.__destructure_map.call(null,map__52558);
var state = map__52558__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__52558__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var rigid_QMARK_ = cljs.core.get.call(null,map__52558__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var immediate_model_update_QMARK_ = cljs.core.get.call(null,map__52558__$1,new cljs.core.Keyword(null,"immediate-model-update?","immediate-model-update?",-2000005618));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var immediate_model_update_QMARK___$1 = re_com.util.deref_or_value.call(null,immediate_model_update_QMARK_);
var rigid_QMARK___$1 = re_com.util.deref_or_value.call(null,rigid_QMARK_);
var G__52559 = event;
var G__52559__$1 = (((G__52559 instanceof cljs.core.Keyword))?G__52559.fqn:null);
switch (G__52559__$1) {
case "input-text-blurred":
var and__4221__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.not.call(null,rigid_QMARK___$1);
} else {
return and__4221__auto__;
}

break;
case "suggestion-activated":
return cljs.core.not.call(null,change_on_blur_QMARK___$1);

break;
case "input-text-changed":
var and__4221__auto__ = cljs.core.not.call(null,rigid_QMARK___$1);
if(and__4221__auto__){
var or__4223__auto__ = cljs.core.not.call(null,change_on_blur_QMARK___$1);
if(or__4223__auto__){
return or__4223__auto__;
} else {
return immediate_model_update_QMARK___$1;
}
} else {
return and__4221__auto__;
}

break;
default:
return false;

}
});
/**
 * Should `event` cause the `input-text` value to be used to show the active suggestion?
 */
re_com.typeahead.event_displays_suggestion_QMARK_ = (function re_com$typeahead$event_displays_suggestion_QMARK_(p__52561,event){
var map__52562 = p__52561;
var map__52562__$1 = cljs.core.__destructure_map.call(null,map__52562);
var state = map__52562__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__52562__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var G__52563 = event;
var G__52563__$1 = (((G__52563 instanceof cljs.core.Keyword))?G__52563.fqn:null);
switch (G__52563__$1) {
case "suggestion-activated":
return cljs.core.not.call(null,change_on_blur_QMARK___$1);

break;
default:
return false;

}
});
/**
 * Change the `typeahead` `model` value to `new-value`
 */
re_com.typeahead.update_model = (function re_com$typeahead$update_model(p__52565,new_value){
var map__52566 = p__52565;
var map__52566__$1 = cljs.core.__destructure_map.call(null,map__52566);
var state = map__52566__$1;
var on_change = cljs.core.get.call(null,map__52566__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
if(cljs.core.truth_(on_change)){
on_change.call(null,new_value);
} else {
}

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"model","model",331153215),new_value);
});
/**
 * Change the `input-text` `model` to the string representation of `suggestion`
 */
re_com.typeahead.display_suggestion = (function re_com$typeahead$display_suggestion(p__52567,suggestion){
var map__52568 = p__52567;
var map__52568__$1 = cljs.core.__destructure_map.call(null,map__52568);
var state = map__52568__$1;
var suggestion_to_string = cljs.core.get.call(null,map__52568__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var suggestion_string = suggestion_to_string.call(null,suggestion);
var G__52569 = state;
if(cljs.core.truth_(suggestion_string)){
return cljs.core.assoc.call(null,G__52569,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),suggestion_string,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),true);
} else {
return G__52569;
}
});
re_com.typeahead.clear_suggestions = (function re_com$typeahead$clear_suggestions(state){
return cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
});
/**
 * Make the suggestion at `index` the active suggestion
 */
re_com.typeahead.activate_suggestion_by_index = (function re_com$typeahead$activate_suggestion_by_index(p__52570,index){
var map__52571 = p__52570;
var map__52571__$1 = cljs.core.__destructure_map.call(null,map__52571);
var state = map__52571__$1;
var suggestions = cljs.core.get.call(null,map__52571__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
var G__52572 = state;
var G__52572__$1 = cljs.core.assoc.call(null,G__52572,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),index)
;
var G__52572__$2 = (cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))?re_com.typeahead.update_model.call(null,G__52572__$1,suggestion):G__52572__$1);
if(cljs.core.truth_(re_com.typeahead.event_displays_suggestion_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))){
return re_com.typeahead.display_suggestion.call(null,G__52572__$2,suggestion);
} else {
return G__52572__$2;
}
});
/**
 * Choose the suggestion at `index`
 */
re_com.typeahead.choose_suggestion_by_index = (function re_com$typeahead$choose_suggestion_by_index(p__52573,index){
var map__52574 = p__52573;
var map__52574__$1 = cljs.core.__destructure_map.call(null,map__52574);
var state = map__52574__$1;
var suggestions = cljs.core.get.call(null,map__52574__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
return re_com.typeahead.clear_suggestions.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,re_com.typeahead.activate_suggestion_by_index.call(null,state,index),suggestion),suggestion));
});
re_com.typeahead.choose_suggestion_active = (function re_com$typeahead$choose_suggestion_active(p__52575){
var map__52576 = p__52575;
var map__52576__$1 = cljs.core.__destructure_map.call(null,map__52576);
var state = map__52576__$1;
var suggestion_active_index = cljs.core.get.call(null,map__52576__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__52577 = state;
if(cljs.core.truth_(suggestion_active_index)){
return re_com.typeahead.choose_suggestion_by_index.call(null,G__52577,suggestion_active_index);
} else {
return G__52577;
}
});
re_com.typeahead.wrap = (function re_com$typeahead$wrap(index,count){
return cljs.core.mod.call(null,(count + index),count);
});
re_com.typeahead.activate_suggestion_next = (function re_com$typeahead$activate_suggestion_next(p__52578){
var map__52579 = p__52578;
var map__52579__$1 = cljs.core.__destructure_map.call(null,map__52579);
var state = map__52579__$1;
var suggestions = cljs.core.get.call(null,map__52579__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__52579__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__52580 = state;
if(cljs.core.seq.call(null,suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__52580,re_com.typeahead.wrap.call(null,((function (){var or__4223__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (-1);
}
})() + (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__52580;
}
});
re_com.typeahead.activate_suggestion_prev = (function re_com$typeahead$activate_suggestion_prev(p__52581){
var map__52582 = p__52581;
var map__52582__$1 = cljs.core.__destructure_map.call(null,map__52582);
var state = map__52582__$1;
var suggestions = cljs.core.get.call(null,map__52582__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__52582__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__52583 = state;
if(cljs.core.seq.call(null,suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__52583,re_com.typeahead.wrap.call(null,((function (){var or__4223__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (0);
}
})() - (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__52583;
}
});
re_com.typeahead.reset_typeahead = (function re_com$typeahead$reset_typeahead(state){
var G__52584 = state;
var G__52584__$1 = re_com.typeahead.clear_suggestions.call(null,G__52584)
;
var G__52584__$2 = cljs.core.assoc.call(null,G__52584__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),"",new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__52584__$2,null);
} else {
return G__52584__$2;
}
});
/**
 * Update state when new suggestions are available
 */
re_com.typeahead.got_suggestions = (function re_com$typeahead$got_suggestions(state,suggestions){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),suggestions,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),null);
});
/**
 * Update state when the `input-text` is about to lose focus.
 */
re_com.typeahead.input_text_will_blur = (function re_com$typeahead$input_text_will_blur(p__52585){
var map__52586 = p__52585;
var map__52586__$1 = cljs.core.__destructure_map.call(null,map__52586);
var state = map__52586__$1;
var input_text = cljs.core.get.call(null,map__52586__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var displaying_suggestion_QMARK_ = cljs.core.get.call(null,map__52586__$1,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862));
var model = cljs.core.get.call(null,map__52586__$1,new cljs.core.Keyword(null,"model","model",331153215));
if(cljs.core.truth_((function (){var and__4221__auto__ = cljs.core.not.call(null,displaying_suggestion_QMARK_);
if(and__4221__auto__){
return re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-blurred","input-text-blurred",-501892307));
} else {
return and__4221__auto__;
}
})())){
return re_com.typeahead.update_model.call(null,state,input_text);
} else {
return re_com.typeahead.clear_suggestions.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),input_text));

}
});
/**
 * Update `state` given a new `data-source`. Resets the typeahead since any existing suggestions
 *   came from the old `data-source`.
 */
re_com.typeahead.change_data_source = (function re_com$typeahead$change_data_source(state,data_source){
return cljs.core.assoc.call(null,re_com.typeahead.reset_typeahead.call(null,state),new cljs.core.Keyword(null,"data-source","data-source",-658934676),data_source);
});
/**
 * Update state when the external model value has changed.
 */
re_com.typeahead.external_model_changed = (function re_com$typeahead$external_model_changed(state,new_value){
return re_com.typeahead.clear_suggestions.call(null,cljs.core.assoc.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,state,new_value),new_value),new cljs.core.Keyword(null,"external-model","external-model",506095421),new_value));
});
/**
 * Call the `data-source` fn with `text`, and then call `got-suggestions` with the result
 *   (asynchronously, if `data-source` does not return a truthy value).
 */
re_com.typeahead.search_data_source_BANG_ = (function re_com$typeahead$search_data_source_BANG_(data_source,state_atom,text){
var temp__5751__auto__ = data_source.call(null,text,(function (p1__52587_SHARP_){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,p1__52587_SHARP_);
}));
if(cljs.core.truth_(temp__5751__auto__)){
var return_value = temp__5751__auto__;
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,return_value);
} else {
return cljs.core.swap_BANG_.call(null,state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),true);
}
});
/**
 * For every value arriving on the `c-search` channel, call `search-data-source!`.
 */
re_com.typeahead.search_data_source_loop_BANG_ = (function re_com$typeahead$search_data_source_loop_BANG_(state_atom,c_search){
var c__33463__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33464__auto__ = (function (){var switch__33440__auto__ = (function (state_52605){
var state_val_52606 = (state_52605[(1)]);
if((state_val_52606 === (1))){
var state_52605__$1 = state_52605;
var statearr_52607_52620 = state_52605__$1;
(statearr_52607_52620[(2)] = null);

(statearr_52607_52620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52606 === (2))){
var state_52605__$1 = state_52605;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52605__$1,(4),c_search);
} else {
if((state_val_52606 === (3))){
var inst_52603 = (state_52605[(2)]);
var state_52605__$1 = state_52605;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52605__$1,inst_52603);
} else {
if((state_val_52606 === (4))){
var inst_52590 = (state_52605[(7)]);
var inst_52590__$1 = (state_52605[(2)]);
var inst_52591 = cljs.core.deref.call(null,state_atom);
var inst_52592 = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(inst_52591);
var inst_52593 = cljs.core._EQ_.call(null,"",inst_52590__$1);
var state_52605__$1 = (function (){var statearr_52608 = state_52605;
(statearr_52608[(8)] = inst_52592);

(statearr_52608[(7)] = inst_52590__$1);

return statearr_52608;
})();
if(inst_52593){
var statearr_52609_52621 = state_52605__$1;
(statearr_52609_52621[(1)] = (5));

} else {
var statearr_52610_52622 = state_52605__$1;
(statearr_52610_52622[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52606 === (5))){
var inst_52592 = (state_52605[(8)]);
var inst_52595 = cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
var inst_52596 = re_com.typeahead.search_data_source_BANG_.call(null,inst_52592,state_atom,"");
var state_52605__$1 = (function (){var statearr_52611 = state_52605;
(statearr_52611[(9)] = inst_52595);

return statearr_52611;
})();
var statearr_52612_52623 = state_52605__$1;
(statearr_52612_52623[(2)] = inst_52596);

(statearr_52612_52623[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52606 === (6))){
var inst_52592 = (state_52605[(8)]);
var inst_52590 = (state_52605[(7)]);
var inst_52598 = re_com.typeahead.search_data_source_BANG_.call(null,inst_52592,state_atom,inst_52590);
var state_52605__$1 = state_52605;
var statearr_52613_52624 = state_52605__$1;
(statearr_52613_52624[(2)] = inst_52598);

(statearr_52613_52624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52606 === (7))){
var inst_52600 = (state_52605[(2)]);
var state_52605__$1 = (function (){var statearr_52614 = state_52605;
(statearr_52614[(10)] = inst_52600);

return statearr_52614;
})();
var statearr_52615_52625 = state_52605__$1;
(statearr_52615_52625[(2)] = null);

(statearr_52615_52625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});
return (function() {
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__33441__auto__ = null;
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__33441__auto____0 = (function (){
var statearr_52616 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_52616[(0)] = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__33441__auto__);

(statearr_52616[(1)] = (1));

return statearr_52616;
});
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__33441__auto____1 = (function (state_52605){
while(true){
var ret_value__33442__auto__ = (function (){try{while(true){
var result__33443__auto__ = switch__33440__auto__.call(null,state_52605);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33443__auto__;
}
break;
}
}catch (e52617){if((e52617 instanceof Object)){
var ex__33444__auto__ = e52617;
var statearr_52618_52626 = state_52605;
(statearr_52618_52626[(5)] = ex__33444__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52605);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52617;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52627 = state_52605;
state_52605 = G__52627;
continue;
} else {
return ret_value__33442__auto__;
}
break;
}
});
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__33441__auto__ = function(state_52605){
switch(arguments.length){
case 0:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__33441__auto____0.call(this);
case 1:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__33441__auto____1.call(this,state_52605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__33441__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__33441__auto____0;
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__33441__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__33441__auto____1;
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__33441__auto__;
})()
})();
var state__33465__auto__ = (function (){var statearr_52619 = f__33464__auto__.call(null);
(statearr_52619[(6)] = c__33463__auto__);

return statearr_52619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33465__auto__);
}));

return c__33463__auto__;
});
/**
 * Update state in response to `input-text` `on-change`, and put text on the `c-input` channel
 */
re_com.typeahead.input_text_on_change_BANG_ = (function re_com$typeahead$input_text_on_change_BANG_(state_atom,new_text){
var map__52629 = cljs.core.deref.call(null,state_atom);
var map__52629__$1 = cljs.core.__destructure_map.call(null,map__52629);
var state = map__52629__$1;
var input_text = cljs.core.get.call(null,map__52629__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var c_input = cljs.core.get.call(null,map__52629__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
if(cljs.core._EQ_.call(null,new_text,input_text)){
return state;
} else {
cljs.core.async.put_BANG_.call(null,c_input,new_text);

return cljs.core.swap_BANG_.call(null,state_atom,(function (p1__52628_SHARP_){
var G__52630 = p1__52628_SHARP_;
var G__52630__$1 = cljs.core.assoc.call(null,G__52630,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new_text,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__52630__$1,new_text);
} else {
return G__52630__$1;
}
}));
}
});
re_com.typeahead.input_text_on_key_down_BANG_ = (function re_com$typeahead$input_text_on_key_down_BANG_(state_atom,event){
var pred__52631 = cljs.core._EQ_;
var expr__52632 = event.which;
if(cljs.core.truth_(pred__52631.call(null,goog.events.KeyCodes.UP,expr__52632))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_prev);
} else {
if(cljs.core.truth_(pred__52631.call(null,goog.events.KeyCodes.DOWN,expr__52632))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);
} else {
if(cljs.core.truth_(pred__52631.call(null,goog.events.KeyCodes.ENTER,expr__52632))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_active);
} else {
if(cljs.core.truth_(pred__52631.call(null,goog.events.KeyCodes.ESC,expr__52632))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,cljs.core.PersistentVector.EMPTY);
} else {
if(cljs.core.truth_(pred__52631.call(null,goog.events.KeyCodes.TAB,expr__52632))){
if(cljs.core.truth_(cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state_atom))))){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);

return event.preventDefault();
} else {
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.input_text_will_blur);
}
} else {
return true;
}
}
}
}
}
});
re_com.typeahead.typeahead_args_desc = new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null)," supplies suggestion objects. This can either accept a single string argument (the search term), or a string and a callback. For the first case, the fn should return a collection of suggestion objects (which can be anything). For the second case, the fn should return ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil"], null),", and eventually result in a call to the callback with a collection of suggestion objects."], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"string -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":change-on-blur?"], null)," controls when it is called. It is passed a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, invoke ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-change"], null)," when the user chooses a suggestion, otherwise invoke it on every change (navigating through suggestions with the mouse or keyboard, or if ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"rigid?"], null)," is also ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null),", invoke it on every character typed.)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"immediate-model-update?","immediate-model-update?",-2000005618),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"update model with currently entered text on every keystroke (similar to ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":change-on-blur?"], null)," but no changes to model if mouse is over suggestions)"], null)], null),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"object | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"the initial value of the typeahead (should match the suggestion objects returned by ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),")."]),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(250),new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.integer_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"after receiving input, the typeahead will wait this many milliseconds without receiving new input before calling ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),"."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"render fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"override the rendering of the suggestion items by passing a fn that returns hiccup forms. The fn will receive two arguments: the search term, and the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"suggestion -> string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"when a suggestion is chosen, the input-text value will be set to the result of calling this fn with the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"If ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null)," the user will be allowed to choose arbitrary text input rather than a suggestion from ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),". In this case, a string will be supplied in lieu of a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.input_status_type_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"validation status. ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil/omitted"], null)," for normal status or one of: ",re_com.validate.input_status_types_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, display an icon to match ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":status"], null)," (no icon for nil)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"displayed in status icon's tooltip"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"background text shown when empty"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"250px",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS width setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS height setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"if true, the user can't interact (input anything)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated (applies to the textbox)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override (applies to the textbox)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed (applies to ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.bold","span.bold",636457745),"the outer container"], null),", rather than the textbox)"], null)], null)], null);
/**
 * typeahead reagent component
 */
re_com.typeahead.typeahead = (function re_com$typeahead$typeahead(var_args){
var args__4835__auto__ = [];
var len__4829__auto___52652 = arguments.length;
var i__4830__auto___52653 = (0);
while(true){
if((i__4830__auto___52653 < len__4829__auto___52652)){
args__4835__auto__.push((arguments[i__4830__auto___52653]));

var G__52654 = (i__4830__auto___52653 + (1));
i__4830__auto___52653 = G__52654;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic = (function (p__52636){
var map__52637 = p__52636;
var map__52637__$1 = cljs.core.__destructure_map.call(null,map__52637);
var args = map__52637__$1;
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args,"typeahead"))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__52638 = re_com.typeahead.make_typeahead_state.call(null,args);
var map__52638__$1 = cljs.core.__destructure_map.call(null,map__52638);
var state = map__52638__$1;
var c_search = cljs.core.get.call(null,map__52638__$1,new cljs.core.Keyword(null,"c-search","c-search",1832536180));
var c_input = cljs.core.get.call(null,map__52638__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
var state_atom = reagent.core.atom.call(null,state);
var input_text_model = reagent.core.cursor.call(null,state_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-text","input-text",-1336297114)], null));
re_com.typeahead.search_data_source_loop_BANG_.call(null,state_atom,c_search);

return (function() { 
var G__52655__delegate = function (p__52639){
var map__52640 = p__52639;
var map__52640__$1 = cljs.core.__destructure_map.call(null,map__52640);
var args__$1 = map__52640__$1;
var disabled_QMARK_ = cljs.core.get.call(null,map__52640__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var status_icon_QMARK_ = cljs.core.get.call(null,map__52640__$1,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612));
var height = cljs.core.get.call(null,map__52640__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var status_tooltip = cljs.core.get.call(null,map__52640__$1,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007));
var model = cljs.core.get.call(null,map__52640__$1,new cljs.core.Keyword(null,"model","model",331153215));
var _debounce_delay = cljs.core.get.call(null,map__52640__$1,new cljs.core.Keyword(null,"_debounce-delay","_debounce-delay",-1476744225));
var attr = cljs.core.get.call(null,map__52640__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var _on_change = cljs.core.get.call(null,map__52640__$1,new cljs.core.Keyword(null,"_on-change","_on-change",156649312));
var placeholder = cljs.core.get.call(null,map__52640__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var render_suggestion = cljs.core.get.call(null,map__52640__$1,new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503));
var _suggestion_to_string = cljs.core.get.call(null,map__52640__$1,new cljs.core.Keyword(null,"_suggestion-to-string","_suggestion-to-string",795407399));
var width = cljs.core.get.call(null,map__52640__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var data_source = cljs.core.get.call(null,map__52640__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var _rigid_QMARK_ = cljs.core.get.call(null,map__52640__$1,new cljs.core.Keyword(null,"_rigid?","_rigid?",1424449294));
var style = cljs.core.get.call(null,map__52640__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var _change_on_blur_QMARK_ = cljs.core.get.call(null,map__52640__$1,new cljs.core.Keyword(null,"_change-on-blur?","_change-on-blur?",1219941073));
var _immediate_model_update_QMARK_ = cljs.core.get.call(null,map__52640__$1,new cljs.core.Keyword(null,"_immediate-model-update?","_immediate-model-update?",1035374450));
var status = cljs.core.get.call(null,map__52640__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var class$ = cljs.core.get.call(null,map__52640__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args__$1,"typeahead"))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__52641 = cljs.core.deref.call(null,state_atom);
var map__52641__$1 = cljs.core.__destructure_map.call(null,map__52641);
var state__$1 = map__52641__$1;
var suggestions = cljs.core.get.call(null,map__52641__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var waiting_QMARK_ = cljs.core.get.call(null,map__52641__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215));
var suggestion_active_index = cljs.core.get.call(null,map__52641__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var external_model = cljs.core.get.call(null,map__52641__$1,new cljs.core.Keyword(null,"external-model","external-model",506095421));
var last_data_source = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(state__$1);
var latest_external_model = re_com.util.deref_or_value.call(null,model);
var width__$1 = (function (){var or__4223__auto__ = width;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return "250px";
}
})();
if(cljs.core.not_EQ_.call(null,last_data_source,data_source)){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.change_data_source,data_source);
} else {
}

if(cljs.core.not_EQ_.call(null,latest_external_model,external_model)){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.external_model_changed,latest_external_model);
} else {
}

return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead",new cljs.core.Keyword(null,"attr","attr",-604132353),attr,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.input_text,new cljs.core.Keyword(null,"model","model",331153215),input_text_model,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),status_icon_QMARK_,new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),status_tooltip,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.partial.call(null,re_com.typeahead.input_text_on_change_BANG_,state_atom),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),false,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),cljs.core.partial.call(null,re_com.typeahead.input_text_on_key_down_BANG_,state_atom),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),(function (){
return cljs.core.List.EMPTY;
}),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.input_text_will_blur);
})], null)], null),(cljs.core.truth_((function (){var or__4223__auto__ = cljs.core.not_empty.call(null,suggestions);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return waiting_QMARK_;
}
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-suggestions-container",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(waiting_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.throbber,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-throbber"], null)], null):null),(function (){var iter__4622__auto__ = (function re_com$typeahead$iter__52642(s__52643){
return (new cljs.core.LazySeq(null,(function (){
var s__52643__$1 = s__52643;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__52643__$1);
if(temp__5753__auto__){
var s__52643__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__52643__$2)){
var c__4620__auto__ = cljs.core.chunk_first.call(null,s__52643__$2);
var size__4621__auto__ = cljs.core.count.call(null,c__4620__auto__);
var b__52645 = cljs.core.chunk_buffer.call(null,size__4621__auto__);
if((function (){var i__52644 = (0);
while(true){
if((i__52644 < size__4621__auto__)){
var vec__52646 = cljs.core._nth.call(null,c__4620__auto__,i__52644);
var i = cljs.core.nth.call(null,vec__52646,(0),null);
var s = cljs.core.nth.call(null,vec__52646,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
cljs.core.chunk_append.call(null,b__52645,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",((selected_QMARK_)?" active":null)].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (i__52644,selected_QMARK_,vec__52646,i,s,c__4620__auto__,size__4621__auto__,b__52645,s__52643__$2,temp__5753__auto__,map__52641,map__52641__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__52640,map__52640__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__52638,map__52638__$1,state,c_search,c_input,state_atom,input_text_model,map__52637,map__52637__$1,args){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(i__52644,selected_QMARK_,vec__52646,i,s,c__4620__auto__,size__4621__auto__,b__52645,s__52643__$2,temp__5753__auto__,map__52641,map__52641__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__52640,map__52640__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__52638,map__52638__$1,state,c_search,c_input,state_atom,input_text_model,map__52637,map__52637__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (i__52644,selected_QMARK_,vec__52646,i,s,c__4620__auto__,size__4621__auto__,b__52645,s__52643__$2,temp__5753__auto__,map__52641,map__52641__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__52640,map__52640__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__52638,map__52638__$1,state,c_search,c_input,state_atom,input_text_model,map__52637,map__52637__$1,args){
return (function (p1__52634_SHARP_){
p1__52634_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(i__52644,selected_QMARK_,vec__52646,i,s,c__4620__auto__,size__4621__auto__,b__52645,s__52643__$2,temp__5753__auto__,map__52641,map__52641__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__52640,map__52640__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__52638,map__52638__$1,state,c_search,c_input,state_atom,input_text_model,map__52637,map__52637__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__52656 = (i__52644 + (1));
i__52644 = G__52656;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52645),re_com$typeahead$iter__52642.call(null,cljs.core.chunk_rest.call(null,s__52643__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52645),null);
}
} else {
var vec__52649 = cljs.core.first.call(null,s__52643__$2);
var i = cljs.core.nth.call(null,vec__52649,(0),null);
var s = cljs.core.nth.call(null,vec__52649,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",((selected_QMARK_)?" active":null)].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (selected_QMARK_,vec__52649,i,s,s__52643__$2,temp__5753__auto__,map__52641,map__52641__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__52640,map__52640__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__52638,map__52638__$1,state,c_search,c_input,state_atom,input_text_model,map__52637,map__52637__$1,args){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(selected_QMARK_,vec__52649,i,s,s__52643__$2,temp__5753__auto__,map__52641,map__52641__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__52640,map__52640__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__52638,map__52638__$1,state,c_search,c_input,state_atom,input_text_model,map__52637,map__52637__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (selected_QMARK_,vec__52649,i,s,s__52643__$2,temp__5753__auto__,map__52641,map__52641__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__52640,map__52640__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__52638,map__52638__$1,state,c_search,c_input,state_atom,input_text_model,map__52637,map__52637__$1,args){
return (function (p1__52634_SHARP_){
p1__52634_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(selected_QMARK_,vec__52649,i,s,s__52643__$2,temp__5753__auto__,map__52641,map__52641__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__52640,map__52640__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__52638,map__52638__$1,state,c_search,c_input,state_atom,input_text_model,map__52637,map__52637__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),re_com$typeahead$iter__52642.call(null,cljs.core.rest.call(null,s__52643__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),suggestions));
})()], null)], null)], null):null)], null)], null);
};
var G__52655 = function (var_args){
var p__52639 = null;
if (arguments.length > 0) {
var G__52657__i = 0, G__52657__a = new Array(arguments.length -  0);
while (G__52657__i < G__52657__a.length) {G__52657__a[G__52657__i] = arguments[G__52657__i + 0]; ++G__52657__i;}
  p__52639 = new cljs.core.IndexedSeq(G__52657__a,0,null);
} 
return G__52655__delegate.call(this,p__52639);};
G__52655.cljs$lang$maxFixedArity = 0;
G__52655.cljs$lang$applyTo = (function (arglist__52658){
var p__52639 = cljs.core.seq(arglist__52658);
return G__52655__delegate(p__52639);
});
G__52655.cljs$core$IFn$_invoke$arity$variadic = G__52655__delegate;
return G__52655;
})()
;
}));

(re_com.typeahead.typeahead.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.typeahead.typeahead.cljs$lang$applyTo = (function (seq52635){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52635));
}));

/**
 * Return a channel which will receive a value from the `in` channel only
 *   if no further value is received on the `in` channel in the next `ms` milliseconds.
 */
re_com.typeahead.debounce = (function re_com$typeahead$debounce(in$,ms){
var out = cljs.core.async.chan.call(null);
var c__33463__auto___52739 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33464__auto__ = (function (){var switch__33440__auto__ = (function (state_52709){
var state_val_52710 = (state_52709[(1)]);
if((state_val_52710 === (7))){
var inst_52664 = (state_52709[(2)]);
var state_52709__$1 = state_52709;
var statearr_52711_52740 = state_52709__$1;
(statearr_52711_52740[(2)] = inst_52664);

(statearr_52711_52740[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52710 === (1))){
var inst_52659 = null;
var state_52709__$1 = (function (){var statearr_52712 = state_52709;
(statearr_52712[(7)] = inst_52659);

return statearr_52712;
})();
var statearr_52713_52741 = state_52709__$1;
(statearr_52713_52741[(2)] = null);

(statearr_52713_52741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52710 === (4))){
var state_52709__$1 = state_52709;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52709__$1,(7),in$);
} else {
if((state_val_52710 === (15))){
var inst_52694 = (state_52709[(2)]);
var state_52709__$1 = (function (){var statearr_52714 = state_52709;
(statearr_52714[(8)] = inst_52694);

return statearr_52714;
})();
var statearr_52715_52742 = state_52709__$1;
(statearr_52715_52742[(2)] = null);

(statearr_52715_52742[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52710 === (13))){
var inst_52682 = (state_52709[(9)]);
var inst_52696 = cljs.core._EQ_.call(null,inst_52682,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_52709__$1 = state_52709;
if(inst_52696){
var statearr_52716_52743 = state_52709__$1;
(statearr_52716_52743[(1)] = (16));

} else {
var statearr_52717_52744 = state_52709__$1;
(statearr_52717_52744[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52710 === (6))){
var inst_52668 = (state_52709[(10)]);
var inst_52667 = (state_52709[(2)]);
var inst_52668__$1 = cljs.core.async.timeout.call(null,ms);
var inst_52676 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_52677 = [in$,inst_52668__$1];
var inst_52678 = (new cljs.core.PersistentVector(null,2,(5),inst_52676,inst_52677,null));
var state_52709__$1 = (function (){var statearr_52718 = state_52709;
(statearr_52718[(10)] = inst_52668__$1);

(statearr_52718[(11)] = inst_52667);

return statearr_52718;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_52709__$1,(8),inst_52678);
} else {
if((state_val_52710 === (17))){
var state_52709__$1 = state_52709;
var statearr_52719_52745 = state_52709__$1;
(statearr_52719_52745[(2)] = null);

(statearr_52719_52745[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52710 === (3))){
var inst_52707 = (state_52709[(2)]);
var state_52709__$1 = state_52709;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52709__$1,inst_52707);
} else {
if((state_val_52710 === (12))){
var inst_52667 = (state_52709[(11)]);
var state_52709__$1 = state_52709;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52709__$1,(15),out,inst_52667);
} else {
if((state_val_52710 === (2))){
var inst_52659 = (state_52709[(7)]);
var inst_52661 = (inst_52659 == null);
var state_52709__$1 = state_52709;
if(cljs.core.truth_(inst_52661)){
var statearr_52720_52746 = state_52709__$1;
(statearr_52720_52746[(1)] = (4));

} else {
var statearr_52721_52747 = state_52709__$1;
(statearr_52721_52747[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52710 === (11))){
var inst_52704 = (state_52709[(2)]);
var inst_52659 = inst_52704;
var state_52709__$1 = (function (){var statearr_52722 = state_52709;
(statearr_52722[(7)] = inst_52659);

return statearr_52722;
})();
var statearr_52723_52748 = state_52709__$1;
(statearr_52723_52748[(2)] = null);

(statearr_52723_52748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52710 === (9))){
var inst_52680 = (state_52709[(12)]);
var inst_52688 = cljs.core.nth.call(null,inst_52680,(0),null);
var inst_52689 = cljs.core.nth.call(null,inst_52680,(1),null);
var state_52709__$1 = (function (){var statearr_52724 = state_52709;
(statearr_52724[(13)] = inst_52689);

return statearr_52724;
})();
var statearr_52725_52749 = state_52709__$1;
(statearr_52725_52749[(2)] = inst_52688);

(statearr_52725_52749[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52710 === (5))){
var inst_52659 = (state_52709[(7)]);
var state_52709__$1 = state_52709;
var statearr_52726_52750 = state_52709__$1;
(statearr_52726_52750[(2)] = inst_52659);

(statearr_52726_52750[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52710 === (14))){
var inst_52702 = (state_52709[(2)]);
var state_52709__$1 = state_52709;
var statearr_52727_52751 = state_52709__$1;
(statearr_52727_52751[(2)] = inst_52702);

(statearr_52727_52751[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52710 === (16))){
var inst_52681 = (state_52709[(14)]);
var state_52709__$1 = state_52709;
var statearr_52728_52752 = state_52709__$1;
(statearr_52728_52752[(2)] = inst_52681);

(statearr_52728_52752[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52710 === (10))){
var inst_52668 = (state_52709[(10)]);
var inst_52682 = (state_52709[(9)]);
var inst_52691 = cljs.core._EQ_.call(null,inst_52682,inst_52668);
var state_52709__$1 = state_52709;
if(inst_52691){
var statearr_52729_52753 = state_52709__$1;
(statearr_52729_52753[(1)] = (12));

} else {
var statearr_52730_52754 = state_52709__$1;
(statearr_52730_52754[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52710 === (18))){
var inst_52700 = (state_52709[(2)]);
var state_52709__$1 = state_52709;
var statearr_52731_52755 = state_52709__$1;
(statearr_52731_52755[(2)] = inst_52700);

(statearr_52731_52755[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52710 === (8))){
var inst_52682 = (state_52709[(9)]);
var inst_52680 = (state_52709[(12)]);
var inst_52680__$1 = (state_52709[(2)]);
var inst_52681 = cljs.core.nth.call(null,inst_52680__$1,(0),null);
var inst_52682__$1 = cljs.core.nth.call(null,inst_52680__$1,(1),null);
var inst_52683 = cljs.core._EQ_.call(null,inst_52682__$1,in$);
var state_52709__$1 = (function (){var statearr_52732 = state_52709;
(statearr_52732[(9)] = inst_52682__$1);

(statearr_52732[(12)] = inst_52680__$1);

(statearr_52732[(14)] = inst_52681);

return statearr_52732;
})();
if(inst_52683){
var statearr_52733_52756 = state_52709__$1;
(statearr_52733_52756[(1)] = (9));

} else {
var statearr_52734_52757 = state_52709__$1;
(statearr_52734_52757[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var re_com$typeahead$debounce_$_state_machine__33441__auto__ = null;
var re_com$typeahead$debounce_$_state_machine__33441__auto____0 = (function (){
var statearr_52735 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52735[(0)] = re_com$typeahead$debounce_$_state_machine__33441__auto__);

(statearr_52735[(1)] = (1));

return statearr_52735;
});
var re_com$typeahead$debounce_$_state_machine__33441__auto____1 = (function (state_52709){
while(true){
var ret_value__33442__auto__ = (function (){try{while(true){
var result__33443__auto__ = switch__33440__auto__.call(null,state_52709);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33443__auto__;
}
break;
}
}catch (e52736){if((e52736 instanceof Object)){
var ex__33444__auto__ = e52736;
var statearr_52737_52758 = state_52709;
(statearr_52737_52758[(5)] = ex__33444__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52709);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52736;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52759 = state_52709;
state_52709 = G__52759;
continue;
} else {
return ret_value__33442__auto__;
}
break;
}
});
re_com$typeahead$debounce_$_state_machine__33441__auto__ = function(state_52709){
switch(arguments.length){
case 0:
return re_com$typeahead$debounce_$_state_machine__33441__auto____0.call(this);
case 1:
return re_com$typeahead$debounce_$_state_machine__33441__auto____1.call(this,state_52709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_com$typeahead$debounce_$_state_machine__33441__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$debounce_$_state_machine__33441__auto____0;
re_com$typeahead$debounce_$_state_machine__33441__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$debounce_$_state_machine__33441__auto____1;
return re_com$typeahead$debounce_$_state_machine__33441__auto__;
})()
})();
var state__33465__auto__ = (function (){var statearr_52738 = f__33464__auto__.call(null);
(statearr_52738[(6)] = c__33463__auto___52739);

return statearr_52738;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33465__auto__);
}));


return out;
});

//# sourceMappingURL=typeahead.js.map
