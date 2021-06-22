// Compiled by ClojureScript 1.10.866 {:optimizations :none}
goog.provide('re_frisk.inlined_deps.reagent.v1v0v0.reagent.core');
goog.require('cljs.core');
goog.require('react');
goog.require('re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template');
goog.require('re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component');
goog.require('re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util');
goog.require('re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.batching');
goog.require('re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.protocols');
goog.require('re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom');
goog.require('re_frisk.inlined_deps.reagent.v1v0v0.reagent.debug');
re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.global$module$react = goog.global["React"];
re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.is_client = re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.is_client;
/**
 * Create a native React element, by calling React.createElement directly.
 * 
 *   That means the second argument must be a javascript object (or nil), and
 *   that any Reagent hiccup forms must be processed with as-element. For example
 *   like this:
 * 
 *   ```cljs
 *   (r/create-element "div" #js{:className "foo"}
 *  "Hi " (r/as-element [:strong "world!"])
 *   ```
 * 
 *   which is equivalent to
 * 
 *   ```cljs
 *   [:div.foo "Hi" [:strong "world!"]]
 *   ```
 */
re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.create_element = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$core$create_element(var_args){
var G__49732 = arguments.length;
switch (G__49732) {
case 1:
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.create_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4850__auto__ = [];
var len__4829__auto___49734 = arguments.length;
var i__4830__auto___49735 = (0);
while(true){
if((i__4830__auto___49735 < len__4829__auto___49734)){
args_arr__4850__auto__.push((arguments[i__4830__auto___49735]));

var G__49736 = (i__4830__auto___49735 + (1));
i__4830__auto___49735 = G__49736;
continue;
} else {
}
break;
}

var argseq__4851__auto__ = (new cljs.core.IndexedSeq(args_arr__4850__auto__.slice((3)),(0),null));
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4851__auto__);

}
});

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (type){
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.create_element.call(null,type,null);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (type,props){
if((!(cljs.core.map_QMARK_.call(null,props)))){
} else {
throw (new Error(["Assert failed: ",["Expected a JS object, not ",cljs.core.pr_str.call(null,props)].join(''),"\n","(clojure.core/not (clojure.core/map? props))"].join('')));
}

return re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.global$module$react.createElement(type,props);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.create_element.cljs$core$IFn$_invoke$arity$3 = (function (type,props,child){
if((!(cljs.core.map_QMARK_.call(null,props)))){
} else {
throw (new Error(["Assert failed: ",["Expected a JS object, not ",cljs.core.pr_str.call(null,props)].join(''),"\n","(clojure.core/not (clojure.core/map? props))"].join('')));
}

return re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.global$module$react.createElement(type,props,child);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (type,props,child,children){
if((!(cljs.core.map_QMARK_.call(null,props)))){
} else {
throw (new Error(["Assert failed: ",["Expected a JS object, not ",cljs.core.pr_str.call(null,props)].join(''),"\n","(clojure.core/not (clojure.core/map? props))"].join('')));
}

return cljs.core.apply.call(null,re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.global$module$react.createElement,type,props,child,children);
}));

/** @this {Function} */
(re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.create_element.cljs$lang$applyTo = (function (seq49728){
var G__49729 = cljs.core.first.call(null,seq49728);
var seq49728__$1 = cljs.core.next.call(null,seq49728);
var G__49730 = cljs.core.first.call(null,seq49728__$1);
var seq49728__$2 = cljs.core.next.call(null,seq49728__$1);
var G__49731 = cljs.core.first.call(null,seq49728__$2);
var seq49728__$3 = cljs.core.next.call(null,seq49728__$2);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49729,G__49730,G__49731,seq49728__$3);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.create_element.cljs$lang$maxFixedArity = (3));

/**
 * Turns a vector of Hiccup syntax into a React element. Returns form
 *   unchanged if it is not a vector.
 */
re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.as_element = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$core$as_element(var_args){
var G__49738 = arguments.length;
switch (G__49738) {
case 1:
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.as_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.as_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.as_element.cljs$core$IFn$_invoke$arity$1 = (function (form){
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.protocols.as_element.call(null,re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.default_compiler,form);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.as_element.cljs$core$IFn$_invoke$arity$2 = (function (form,compiler){
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.protocols.as_element.call(null,compiler,form);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.as_element.cljs$lang$maxFixedArity = 2);

/**
 * Returns an adapter for a native React class, that may be used
 *   just like a Reagent component function or class in Hiccup forms.
 */
re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.adapt_react_class = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$core$adapt_react_class(c){
if(cljs.core.truth_(c)){
} else {
throw (new Error(["Assert failed: ",["Component"," must not be nil"].join(''),"\n","c"].join('')));
}

return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.adapt_react_class.call(null,c);
});
/**
 * Returns an adapter for a Reagent component, that may be used from
 *   React, for example in JSX. A single argument, props, is passed to
 *   the component, converted to a map.
 */
re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.reactify_component = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$core$reactify_component(var_args){
var G__49741 = arguments.length;
switch (G__49741) {
case 1:
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.reactify_component.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.reactify_component.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.reactify_component.cljs$core$IFn$_invoke$arity$1 = (function (c){
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.reactify_component.call(null,c,re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.default_compiler);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.reactify_component.cljs$core$IFn$_invoke$arity$2 = (function (c,compiler){
if(cljs.core.truth_(c)){
} else {
throw (new Error(["Assert failed: ",["Component"," must not be nil"].join(''),"\n","c"].join('')));
}

return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.reactify_component.call(null,c,compiler);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.reactify_component.cljs$lang$maxFixedArity = 2);

/**
 * Creates JS class based on provided Clojure map, for example:
 * 
 *   ```cljs
 *   {;; Constructor
 * :constructor (fn [this props])
 * :get-initial-state (fn [this])
 * ;; Static methods
 * :get-derived-state-from-props (fn [props state] partial-state)
 * :get-derived-state-from-error (fn [error] partial-state)
 * ;; Methods
 * :get-snapshot-before-update (fn [this old-argv new-argv] snapshot)
 * :should-component-update (fn [this old-argv new-argv])
 * :component-did-mount (fn [this])
 * :component-did-update (fn [this old-argv old-state snapshot])
 * :component-will-unmount (fn [this])
 * :component-did-catch (fn [this error info])
 * :reagent-render (fn [args....])
 * ;; Or alternatively:
 * :render (fn [this])
 * ;; Deprecated methods:
 * :UNSAFE_component-will-receive-props (fn [this new-argv])
 * :UNSAFE_component-will-update (fn [this new-argv new-state])
 * :UNSAFE_component-will-mount (fn [this])}
 *   ```
 * 
 *   Everything is optional, except either :reagent-render or :render.
 * 
 *   Map keys should use `React.Component` method names (https://reactjs.org/docs/react-component.html),
 *   and can be provided in snake-case or camelCase.
 * 
 *   State can be initialized using constructor, which matches React.Component class,
 *   or using getInitialState which matches old React createClass function and is
 *   now implemented by Reagent for compatibility.
 * 
 *   State can usually be anything, e.g. Cljs object. But if using getDerivedState
 *   methods, the state has to be plain JS object as React implementation uses
 *   Object.assign to merge partial state into the current state.
 * 
 *   React built-in static methods or properties are automatically defined as statics.
 */
re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.create_class = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$core$create_class(var_args){
var G__49744 = arguments.length;
switch (G__49744) {
case 1:
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.create_class.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.create_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.create_class.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.create_class.call(null,spec,re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.default_compiler);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.create_class.cljs$core$IFn$_invoke$arity$2 = (function (spec,compiler){
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.create_class.call(null,spec,compiler);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.create_class.cljs$lang$maxFixedArity = 2);

/**
 * Returns the current React component (a.k.a `this`) in a component
 *   function.
 */
re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.current_component = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$core$current_component(){
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component._STAR_current_component_STAR_;
});
/**
 * Returns an atom containing a components state.
 */
re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.state_atom = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$core$state_atom(this$){
if(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a reagent component, not ",cljs.core.pr_str.call(null,this$)].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.state_atom.call(null,this$);
});
/**
 * Returns the state of a component, as set with replace-state or set-state.
 *   Equivalent to `(deref (r/state-atom this))`
 */
re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.state = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$core$state(this$){
if(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a reagent component, not ",cljs.core.pr_str.call(null,this$)].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

return cljs.core.deref.call(null,re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.state_atom.call(null,this$));
});
/**
 * Set state of a component.
 *   Equivalent to `(reset! (state-atom this) new-state)`
 */
re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.replace_state = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$core$replace_state(this$,new_state){
if(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a reagent component, not ",cljs.core.pr_str.call(null,this$)].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

if((((new_state == null)) || (cljs.core.map_QMARK_.call(null,new_state)))){
} else {
throw (new Error(["Assert failed: ",["Expected a valid new state, not ",cljs.core.pr_str.call(null,new_state)].join(''),"\n","(clojure.core/or (clojure.core/nil? new-state) (clojure.core/map? new-state))"].join('')));
}

return cljs.core.reset_BANG_.call(null,re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.state_atom.call(null,this$),new_state);
});
/**
 * Merge component state with new-state.
 *   Equivalent to `(swap! (state-atom this) merge new-state)`
 */
re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.set_state = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$core$set_state(this$,new_state){
if(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a reagent component, not ",cljs.core.pr_str.call(null,this$)].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

if((((new_state == null)) || (cljs.core.map_QMARK_.call(null,new_state)))){
} else {
throw (new Error(["Assert failed: ",["Expected a valid new state, not ",cljs.core.pr_str.call(null,new_state)].join(''),"\n","(clojure.core/or (clojure.core/nil? new-state) (clojure.core/map? new-state))"].join('')));
}

return cljs.core.swap_BANG_.call(null,re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.state_atom.call(null,this$),cljs.core.merge,new_state);
});
/**
 * Force a component to re-render immediately.
 * 
 *   If the second argument is true, child components will also be
 *   re-rendered, even is their arguments have not changed.
 */
re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.force_update = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$core$force_update(var_args){
var G__49747 = arguments.length;
switch (G__49747) {
case 1:
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.force_update.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.force_update.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.force_update.cljs$core$IFn$_invoke$arity$1 = (function (this$){
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.force_update.call(null,this$,false);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.force_update.cljs$core$IFn$_invoke$arity$2 = (function (this$,deep){
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.flush_BANG_.call(null);

re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.force_update.call(null,this$,deep);

return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.batching.flush_after_render.call(null);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.force_update.cljs$lang$maxFixedArity = 2);

/**
 * Returns the props passed to a component.
 */
re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.props = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$core$props(this$){
if(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a reagent component, not ",cljs.core.pr_str.call(null,this$)].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.get_props.call(null,this$);
});
/**
 * Returns the children passed to a component.
 */
re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.children = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$core$children(this$){
if(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a reagent component, not ",cljs.core.pr_str.call(null,this$)].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.get_children.call(null,this$);
});
/**
 * Returns the entire Hiccup form passed to the component.
 */
re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.argv = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$core$argv(this$){
if(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a reagent component, not ",cljs.core.pr_str.call(null,this$)].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.get_argv.call(null,this$);
});
/**
 * Function which normalizes and combines class values to a string
 * 
 *   Reagent allows classes to be defined as:
 *   - Strings
 *   - Named objects (Symbols or Keywords)
 *   - Collections of previous types
 */
re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.class_names = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$core$class_names(var_args){
var G__49753 = arguments.length;
switch (G__49753) {
case 0:
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.class_names.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.class_names.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.class_names.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4850__auto__ = [];
var len__4829__auto___49755 = arguments.length;
var i__4830__auto___49756 = (0);
while(true){
if((i__4830__auto___49756 < len__4829__auto___49755)){
args_arr__4850__auto__.push((arguments[i__4830__auto___49756]));

var G__49757 = (i__4830__auto___49756 + (1));
i__4830__auto___49756 = G__49757;
continue;
} else {
}
break;
}

var argseq__4851__auto__ = (new cljs.core.IndexedSeq(args_arr__4850__auto__.slice((2)),(0),null));
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.class_names.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4851__auto__);

}
});

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.class_names.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.class_names.cljs$core$IFn$_invoke$arity$1 = (function (class$){
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.class_names.call(null,class$);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.class_names.cljs$core$IFn$_invoke$arity$2 = (function (class1,class2){
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.class_names.call(null,class1,class2);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.class_names.cljs$core$IFn$_invoke$arity$variadic = (function (class1,class2,others){
return cljs.core.apply.call(null,re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.class_names,class1,class2,others);
}));

/** @this {Function} */
(re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.class_names.cljs$lang$applyTo = (function (seq49750){
var G__49751 = cljs.core.first.call(null,seq49750);
var seq49750__$1 = cljs.core.next.call(null,seq49750);
var G__49752 = cljs.core.first.call(null,seq49750__$1);
var seq49750__$2 = cljs.core.next.call(null,seq49750__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49751,G__49752,seq49750__$2);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.class_names.cljs$lang$maxFixedArity = (2));

/**
 * Utility function that merges some maps, handling `:class` and `:style`.
 * 
 *   The :class value is always normalized (using `class-names`) even if no
 *   merging is done.
 */
re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.merge_props = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$core$merge_props(var_args){
var G__49762 = arguments.length;
switch (G__49762) {
case 0:
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.merge_props.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.merge_props.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.merge_props.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4850__auto__ = [];
var len__4829__auto___49764 = arguments.length;
var i__4830__auto___49765 = (0);
while(true){
if((i__4830__auto___49765 < len__4829__auto___49764)){
args_arr__4850__auto__.push((arguments[i__4830__auto___49765]));

var G__49766 = (i__4830__auto___49765 + (1));
i__4830__auto___49765 = G__49766;
continue;
} else {
}
break;
}

var argseq__4851__auto__ = (new cljs.core.IndexedSeq(args_arr__4850__auto__.slice((2)),(0),null));
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.merge_props.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4851__auto__);

}
});

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.merge_props.cljs$core$IFn$_invoke$arity$0 = (function (){
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.merge_props.call(null);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.merge_props.cljs$core$IFn$_invoke$arity$1 = (function (defaults){
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.merge_props.call(null,defaults);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.merge_props.cljs$core$IFn$_invoke$arity$2 = (function (defaults,props){
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.merge_props.call(null,defaults,props);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.merge_props.cljs$core$IFn$_invoke$arity$variadic = (function (defaults,props,others){
return cljs.core.apply.call(null,re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.merge_props,defaults,props,others);
}));

/** @this {Function} */
(re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.merge_props.cljs$lang$applyTo = (function (seq49759){
var G__49760 = cljs.core.first.call(null,seq49759);
var seq49759__$1 = cljs.core.next.call(null,seq49759);
var G__49761 = cljs.core.first.call(null,seq49759__$1);
var seq49759__$2 = cljs.core.next.call(null,seq49759__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49760,G__49761,seq49759__$2);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.merge_props.cljs$lang$maxFixedArity = (2));

/**
 * Render dirty components immediately.
 * 
 *   Note that this may not work in event handlers, since React.js does
 *   batching of updates there.
 */
re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.flush = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$core$flush(){
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.batching.flush.call(null);
});
/**
 * Like clojure.core/atom, except that it keeps track of derefs.
 *   Reagent components that derefs one of these are automatically
 *   re-rendered.
 */
re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.atom = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$core$atom(var_args){
var G__49770 = arguments.length;
switch (G__49770) {
case 1:
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.atom.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4850__auto__ = [];
var len__4829__auto___49772 = arguments.length;
var i__4830__auto___49773 = (0);
while(true){
if((i__4830__auto___49773 < len__4829__auto___49772)){
args_arr__4850__auto__.push((arguments[i__4830__auto___49773]));

var G__49774 = (i__4830__auto___49773 + (1));
i__4830__auto___49773 = G__49774;
continue;
} else {
}
break;
}

var argseq__4851__auto__ = (new cljs.core.IndexedSeq(args_arr__4850__auto__.slice((1)),(0),null));
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.atom.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4851__auto__);

}
});

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.atom.cljs$core$IFn$_invoke$arity$1 = (function (x){
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.atom.call(null,x);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.atom.cljs$core$IFn$_invoke$arity$variadic = (function (x,rest){
return cljs.core.apply.call(null,re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.atom,x,rest);
}));

/** @this {Function} */
(re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.atom.cljs$lang$applyTo = (function (seq49768){
var G__49769 = cljs.core.first.call(null,seq49768);
var seq49768__$1 = cljs.core.next.call(null,seq49768);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49769,seq49768__$1);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.atom.cljs$lang$maxFixedArity = (1));

/**
 * Takes a function and optional arguments, and returns a derefable
 *   containing the output of that function. If the function derefs
 *   Reagent atoms (or track, etc), the value will be updated whenever
 *   the atom changes.
 * 
 *   In other words, `@(track foo bar)` will produce the same result
 *   as `(foo bar)`, but foo will only be called again when the atoms it
 *   depends on changes, and will only trigger updates of components when
 *   its result changes.
 * 
 *   track is lazy, i.e the function is only evaluated on deref.
 */
re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.track = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$core$track(var_args){
var args__4835__auto__ = [];
var len__4829__auto___49777 = arguments.length;
var i__4830__auto___49778 = (0);
while(true){
if((i__4830__auto___49778 < len__4829__auto___49777)){
args__4835__auto__.push((arguments[i__4830__auto___49778]));

var G__49779 = (i__4830__auto___49778 + (1));
i__4830__auto___49778 = G__49779;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.track.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.track.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.make_track.call(null,f,args);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.track.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.track.cljs$lang$applyTo = (function (seq49775){
var G__49776 = cljs.core.first.call(null,seq49775);
var seq49775__$1 = cljs.core.next.call(null,seq49775);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49776,seq49775__$1);
}));

/**
 * An eager version of track. The function passed is called
 *   immediately, and continues to be called when needed, until stopped
 *   with dispose!.
 */
re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.track_BANG_ = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$core$track_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___49782 = arguments.length;
var i__4830__auto___49783 = (0);
while(true){
if((i__4830__auto___49783 < len__4829__auto___49782)){
args__4835__auto__.push((arguments[i__4830__auto___49783]));

var G__49784 = (i__4830__auto___49783 + (1));
i__4830__auto___49783 = G__49784;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.track_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.track_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.make_track_BANG_.call(null,f,args);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.track_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.track_BANG_.cljs$lang$applyTo = (function (seq49780){
var G__49781 = cljs.core.first.call(null,seq49780);
var seq49780__$1 = cljs.core.next.call(null,seq49780);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49781,seq49780__$1);
}));

/**
 * Stop the result of track! from updating.
 */
re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.dispose_BANG_ = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$core$dispose_BANG_(x){
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.dispose_BANG_.call(null,x);
});
/**
 * Provide a combination of value and callback, that looks like an atom.
 * 
 *   The first argument can be any value, that will be returned when the
 *   result is deref'ed.
 * 
 *   The second argument should be a function, that is called with the
 *   optional extra arguments provided to wrap, and the new value of the
 *   resulting 'atom'.
 * 
 *   Use for example like this:
 * 
 *   ```cljs
 *   (wrap (:foo @state)
 *      swap! state assoc :foo)
 *   ```
 * 
 *   Probably useful only for passing to child components.
 */
re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.wrap = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$core$wrap(var_args){
var args__4835__auto__ = [];
var len__4829__auto___49788 = arguments.length;
var i__4830__auto___49789 = (0);
while(true){
if((i__4830__auto___49789 < len__4829__auto___49788)){
args__4835__auto__.push((arguments[i__4830__auto___49789]));

var G__49790 = (i__4830__auto___49789 + (1));
i__4830__auto___49789 = G__49790;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.wrap.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.wrap.cljs$core$IFn$_invoke$arity$variadic = (function (value,reset_fn,args){
if(cljs.core.ifn_QMARK_.call(null,reset_fn)){
} else {
throw (new Error(["Assert failed: ",["Expected something callable, not ",cljs.core.pr_str.call(null,reset_fn)].join(''),"\n","(clojure.core/ifn? reset-fn)"].join('')));
}

return re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.make_wrapper.call(null,value,reset_fn,args);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.wrap.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.wrap.cljs$lang$applyTo = (function (seq49785){
var G__49786 = cljs.core.first.call(null,seq49785);
var seq49785__$1 = cljs.core.next.call(null,seq49785);
var G__49787 = cljs.core.first.call(null,seq49785__$1);
var seq49785__$2 = cljs.core.next.call(null,seq49785__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49786,G__49787,seq49785__$2);
}));

/**
 * Provide a cursor into a Reagent atom.
 * 
 *   Behaves like a Reagent atom but focuses updates and derefs to
 *   the specified path within the wrapped Reagent atom. e.g.,
 * 
 *   ```cljs
 *   (let [c (cursor ra [:nested :content])]
 *  ... @c ;; equivalent to (get-in @ra [:nested :content])
 *  ... (reset! c 42) ;; equivalent to (swap! ra assoc-in [:nested :content] 42)
 *  ... (swap! c inc) ;; equivalence to (swap! ra update-in [:nested :content] inc)
 *  )
 *   ```
 * 
 *   The first parameter can also be a function, that should look
 *   something like this:
 * 
 *   ```cljs
 *   (defn set-get
 *  ([k] (get-in @state k))
 *  ([k v] (swap! state assoc-in k v)))
 *   ```
 * 
 *   The function will be called with one argument – the path passed to
 *   cursor – when the cursor is deref'ed, and two arguments (path and
 *   new value) when the cursor is modified.
 * 
 *   Given that set-get function, (and that state is a Reagent atom, or
 *   another cursor) these cursors are equivalent:
 *   `(cursor state [:foo])` and `(cursor set-get [:foo])`.
 * 
 *   Note that a cursor is lazy: its value will not change until it is
 *   used. This may be noticed with add-watch.
 */
re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.cursor = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$core$cursor(src,path){
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.cursor.call(null,src,path);
});
/**
 * Swaps the value of a to be `(apply f current-value-of-atom args)`.
 * 
 *   rswap! works like swap!, except that recursive calls to rswap! on
 *   the same atom are allowed – and it always returns nil.
 */
re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.rswap_BANG_ = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$core$rswap_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___49797 = arguments.length;
var i__4830__auto___49798 = (0);
while(true){
if((i__4830__auto___49798 < len__4829__auto___49797)){
args__4835__auto__.push((arguments[i__4830__auto___49798]));

var G__49799 = (i__4830__auto___49798 + (1));
i__4830__auto___49798 = G__49799;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (a,f,args){
if((((!((a == null))))?(((((a.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === a.cljs$core$IAtom$))))?true:(((!a.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,a):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,a))){
} else {
throw (new Error("Assert failed: (satisfies? IAtom a)"));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

if(cljs.core.truth_(a.rswapping)){
(function (){var or__4223__auto__ = a.rswapfs;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (a.rswapfs = []);
}
})().push((function (p1__49791_SHARP_){
return cljs.core.apply.call(null,f,p1__49791_SHARP_,args);
}));
} else {
(a.rswapping = true);

try{cljs.core.swap_BANG_.call(null,a,(function (state){
var s = cljs.core.apply.call(null,f,state,args);
while(true){
var temp__5755__auto__ = (function (){var G__49796 = a;
var G__49796__$1 = (((G__49796 == null))?null:G__49796.rswapfs);
if((G__49796__$1 == null)){
return null;
} else {
return G__49796__$1.shift();
}
})();
if((temp__5755__auto__ == null)){
return s;
} else {
var sf = temp__5755__auto__;
var G__49800 = sf.call(null,s);
s = G__49800;
continue;
}
break;
}
}));
}finally {(a.rswapping = false);
}}

return null;
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.rswap_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.rswap_BANG_.cljs$lang$applyTo = (function (seq49792){
var G__49793 = cljs.core.first.call(null,seq49792);
var seq49792__$1 = cljs.core.next.call(null,seq49792);
var G__49794 = cljs.core.first.call(null,seq49792__$1);
var seq49792__$2 = cljs.core.next.call(null,seq49792__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49793,G__49794,seq49792__$2);
}));

/**
 * Run f using requestAnimationFrame or equivalent.
 * 
 *   f will be called just before components are rendered.
 */
re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.next_tick = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$core$next_tick(f){
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.batching.do_before_flush.call(null,f);
});
/**
 * Run f using requestAnimationFrame or equivalent.
 * 
 *   f will be called just after any queued renders in the next animation
 *   frame (and even if no renders actually occur).
 */
re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.after_render = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$core$after_render(f){
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.batching.do_after_render.call(null,f);
});
/**
 * Works just like clojure.core/partial, but the result can be compared with =
 */
re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.partial = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$core$partial(var_args){
var args__4835__auto__ = [];
var len__4829__auto___49803 = arguments.length;
var i__4830__auto___49804 = (0);
while(true){
if((i__4830__auto___49804 < len__4829__auto___49803)){
args__4835__auto__.push((arguments[i__4830__auto___49804]));

var G__49805 = (i__4830__auto___49804 + (1));
i__4830__auto___49804 = G__49805;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.partial.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.partial.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.make_partial_fn.call(null,f,args);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.partial.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.partial.cljs$lang$applyTo = (function (seq49801){
var G__49802 = cljs.core.first.call(null,seq49801);
var seq49801__$1 = cljs.core.next.call(null,seq49801);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49802,seq49801__$1);
}));

/**
 * Creates Compiler object with given `opts`,
 *   this can be passed to `render`, `as-element` and other functions to control
 *   how they turn the Reagent-style Hiccup into React components and elements.
 */
re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.create_compiler = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$core$create_compiler(opts){
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.create_compiler.call(null,opts);
});
/**
 * Globally sets the Compiler object used by `render`, `as-element` and other
 *   calls by default, when no `compiler` parameter is provided.
 * 
 *   Use `nil` value to restore the original default compiler.
 */
re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.set_default_compiler_BANG_ = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$core$set_default_compiler_BANG_(compiler){
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.set_default_compiler_BANG_.call(null,(((compiler == null))?re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.default_compiler_STAR_:compiler));
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.render = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$core$render(var_args){
var args__4835__auto__ = [];
var len__4829__auto___49807 = arguments.length;
var i__4830__auto___49808 = (0);
while(true){
if((i__4830__auto___49808 < len__4829__auto___49807)){
args__4835__auto__.push((arguments[i__4830__auto___49808]));

var G__49809 = (i__4830__auto___49808 + (1));
i__4830__auto___49808 = G__49809;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.render.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.render.cljs$core$IFn$_invoke$arity$variadic = (function (_){
throw (new Error("Reagent.core/render function was moved to re-frisk.inlined-deps.reagent.v1v0v0.reagent.dom namespace in Reagent v1.0."));

return null;
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.render.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.render.cljs$lang$applyTo = (function (seq49806){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49806));
}));


//# sourceMappingURL=core.js.map
