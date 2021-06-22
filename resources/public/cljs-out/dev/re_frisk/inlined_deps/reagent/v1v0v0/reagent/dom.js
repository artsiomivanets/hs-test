// Compiled by ClojureScript 1.10.866 {:optimizations :none}
goog.provide('re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom');
goog.require('cljs.core');
goog.require('react_dom');
goog.require('re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util');
goog.require('re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template');
goog.require('re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.input');
goog.require('re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.batching');
goog.require('re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.protocols');
goog.require('re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom');
re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.global$module$react_dom = goog.global["ReactDOM"];
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.inlined_deps !== 'undefined') && (typeof re_frisk.inlined_deps.reagent !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0 !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0.reagent !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.roots !== 'undefined')){
} else {
re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.unmount_comp = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.roots,cljs.core.dissoc,container);

return re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.global$module$react_dom.unmountComponentAtNode(container);
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.render_comp = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__55395 = re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__55396 = true;
(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__55396);

try{return re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.global$module$react_dom.render(comp.call(null),container,(function (){
var _STAR_always_update_STAR__orig_val__55397 = re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__55398 = false;
(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__55398);

try{cljs.core.swap_BANG_.call(null,re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.roots,cljs.core.assoc,container,comp);

re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.batching.flush_after_render.call(null);

if((!((callback == null)))){
return callback.call(null);
} else {
return null;
}
}finally {(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__55397);
}}));
}finally {(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__55395);
}});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.re_render_component = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$dom$re_render_component(comp,container){
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.render = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$dom$render(var_args){
var G__55400 = arguments.length;
switch (G__55400) {
case 2:
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.render.call(null,comp,container,re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.default_compiler);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.flush_BANG_.call(null);

var vec__55401 = ((cljs.core.fn_QMARK_.call(null,callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.call(null,vec__55401,(0),null);
var callback = cljs.core.nth.call(null,vec__55401,(1),null);
var f = (function (){
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.protocols.as_element.call(null,compiler,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.render_comp.call(null,f,container,callback);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.unmount_component_at_node = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$dom$unmount_component_at_node(container){
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.dom_node = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$dom$dom_node(this$){
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.global$module$react_dom.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.force_update_all = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$dom$force_update_all(){
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.flush_BANG_.call(null);

var seq__55405_55421 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.roots));
var chunk__55406_55422 = null;
var count__55407_55423 = (0);
var i__55408_55424 = (0);
while(true){
if((i__55408_55424 < count__55407_55423)){
var vec__55415_55425 = cljs.core._nth.call(null,chunk__55406_55422,i__55408_55424);
var container_55426 = cljs.core.nth.call(null,vec__55415_55425,(0),null);
var comp_55427 = cljs.core.nth.call(null,vec__55415_55425,(1),null);
re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.re_render_component.call(null,comp_55427,container_55426);


var G__55428 = seq__55405_55421;
var G__55429 = chunk__55406_55422;
var G__55430 = count__55407_55423;
var G__55431 = (i__55408_55424 + (1));
seq__55405_55421 = G__55428;
chunk__55406_55422 = G__55429;
count__55407_55423 = G__55430;
i__55408_55424 = G__55431;
continue;
} else {
var temp__5753__auto___55432 = cljs.core.seq.call(null,seq__55405_55421);
if(temp__5753__auto___55432){
var seq__55405_55433__$1 = temp__5753__auto___55432;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55405_55433__$1)){
var c__4649__auto___55434 = cljs.core.chunk_first.call(null,seq__55405_55433__$1);
var G__55435 = cljs.core.chunk_rest.call(null,seq__55405_55433__$1);
var G__55436 = c__4649__auto___55434;
var G__55437 = cljs.core.count.call(null,c__4649__auto___55434);
var G__55438 = (0);
seq__55405_55421 = G__55435;
chunk__55406_55422 = G__55436;
count__55407_55423 = G__55437;
i__55408_55424 = G__55438;
continue;
} else {
var vec__55418_55439 = cljs.core.first.call(null,seq__55405_55433__$1);
var container_55440 = cljs.core.nth.call(null,vec__55418_55439,(0),null);
var comp_55441 = cljs.core.nth.call(null,vec__55418_55439,(1),null);
re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.re_render_component.call(null,comp_55441,container_55440);


var G__55442 = cljs.core.next.call(null,seq__55405_55433__$1);
var G__55443 = null;
var G__55444 = (0);
var G__55445 = (0);
seq__55405_55421 = G__55442;
chunk__55406_55422 = G__55443;
count__55407_55423 = G__55444;
i__55408_55424 = G__55445;
continue;
}
} else {
}
}
break;
}

return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.batching.flush_after_render.call(null);
});

//# sourceMappingURL=dom.js.map
