// Compiled by ClojureScript 1.10.866 {:optimizations :none}
goog.provide('re_frisk.ui.components.drag');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('re_frisk.inlined_deps.reagent.v1v0v0.reagent.core');
goog.require('goog.events.EventType');
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.ui !== 'undefined') && (typeof re_frisk.ui.components !== 'undefined') && (typeof re_frisk.ui.components.drag !== 'undefined') && (typeof re_frisk.ui.components.drag.draggable !== 'undefined')){
} else {
re_frisk.ui.components.drag.draggable = re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
re_frisk.ui.components.drag.mouse_move_handler = (function re_frisk$ui$components$drag$mouse_move_handler(evt){
return cljs.core.swap_BANG_.call(null,re_frisk.ui.components.drag.draggable,cljs.core.assoc,new cljs.core.Keyword(null,"x","x",2099068185),(evt.clientX - new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.ui.components.drag.draggable))));
});
re_frisk.ui.components.drag.mouse_up_handler = (function re_frisk$ui$components$drag$mouse_up_handler(evt){
goog.events.unlisten(window,goog.events.EventType.MOUSEMOVE,re_frisk.ui.components.drag.mouse_move_handler);

return cljs.core.swap_BANG_.call(null,re_frisk.ui.components.drag.draggable,cljs.core.dissoc,new cljs.core.Keyword(null,"offset","offset",296498311));
});
re_frisk.ui.components.drag.mouse_down_handler = (function re_frisk$ui$components$drag$mouse_down_handler(evt){
cljs.core.swap_BANG_.call(null,re_frisk.ui.components.drag.draggable,cljs.core.assoc,new cljs.core.Keyword(null,"offset","offset",296498311),(evt.clientX - evt.target.getBoundingClientRect().left));

return goog.events.listen(window,goog.events.EventType.MOUSEMOVE,re_frisk.ui.components.drag.mouse_move_handler);
});
goog.events.listen(window,goog.events.EventType.MOUSEUP,re_frisk.ui.components.drag.mouse_up_handler);

//# sourceMappingURL=drag.js.map