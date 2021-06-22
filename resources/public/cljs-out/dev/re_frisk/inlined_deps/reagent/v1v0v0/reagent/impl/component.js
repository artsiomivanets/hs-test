// Compiled by ClojureScript 1.10.866 {:optimizations :none}
goog.provide('re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('react');
goog.require('re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util');
goog.require('re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.batching');
goog.require('re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.protocols');
goog.require('re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom');
goog.require('re_frisk.inlined_deps.reagent.v1v0v0.reagent.debug');
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.global$module$react = goog.global["React"];
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.extract_props = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$component$extract_props(v){
var p = cljs.core.nth.call(null,v,(1),null);
if(cljs.core.map_QMARK_.call(null,p)){
return p;
} else {
return null;
}
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.extract_children = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$component$extract_children(v){
var p = cljs.core.nth.call(null,v,(1),null);
var first_child = (((((p == null)) || (cljs.core.map_QMARK_.call(null,p))))?(2):(1));
if((cljs.core.count.call(null,v) > first_child)){
return cljs.core.subvec.call(null,v,first_child);
} else {
return null;
}
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.props_argv = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$component$props_argv(c,p){
var temp__5755__auto__ = p.argv;
if((temp__5755__auto__ == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c.constructor,re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.shallow_obj_to_map.call(null,p)], null);
} else {
var a = temp__5755__auto__;
return a;
}
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.get_argv = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$component$get_argv(c){
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.props_argv.call(null,c,c.props);
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.get_props = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$component$get_props(c){
var p = c.props;
var temp__5755__auto__ = p.argv;
if((temp__5755__auto__ == null)){
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.shallow_obj_to_map.call(null,p);
} else {
var v = temp__5755__auto__;
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.extract_props.call(null,v);
}
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.get_children = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$component$get_children(c){
var p = c.props;
var temp__5755__auto__ = p.argv;
if((temp__5755__auto__ == null)){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.global$module$react.Children.toArray(p.children));
} else {
var v = temp__5755__auto__;
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.extract_children.call(null,v);
}
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.reagent_class_QMARK_ = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$component$reagent_class_QMARK_(c){
return ((cljs.core.fn_QMARK_.call(null,c)) && ((!(((function (){var G__49644 = c;
var G__49644__$1 = (((G__49644 == null))?null:G__49644.prototype);
if((G__49644__$1 == null)){
return null;
} else {
return G__49644__$1.reagentRender;
}
})() == null)))));
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.react_class_QMARK_ = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$component$react_class_QMARK_(c){
return ((cljs.core.fn_QMARK_.call(null,c)) && ((!(((function (){var G__49645 = c;
var G__49645__$1 = (((G__49645 == null))?null:G__49645.prototype);
if((G__49645__$1 == null)){
return null;
} else {
return G__49645__$1.render;
}
})() == null)))));
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.reagent_component_QMARK_ = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$component$reagent_component_QMARK_(c){
return (!((c.reagentRender == null)));
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.state_atom = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$component$state_atom(this$){
var sa = this$.cljsState;
if((!((sa == null)))){
return sa;
} else {
return (this$.cljsState = re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.atom.call(null,null));
}
});
/**
 * Calls the render function of the component `c`.  If result `res` evaluates to a:
 *   1) Vector (form-1 component) - Treats the vector as hiccup and returns
 *      a react element with a render function based on that hiccup
 *   2) Function (form-2 component) - updates the render function to `res` i.e. the internal function
 *      and calls wrap-render again (`recur`), until the render result doesn't evaluate to a function.
 *   3) Anything else - Returns the result of evaluating `c`
 */
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.wrap_render = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$component$wrap_render(c,compiler){
while(true){
var f = c.reagentRender;
var _ = ((cljs.core.ifn_QMARK_.call(null,f))?null:(function(){throw (new Error(["Assert failed: ",["Expected something callable, not ",cljs.core.pr_str.call(null,f)].join(''),"\n","(clojure.core/ifn? f)"].join('')))})());
var res = ((c.cljsLegacyRender === true)?f.call(c,c):(function (){var v = re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.get_argv.call(null,c);
var n = cljs.core.count.call(null,v);
var G__49646 = n;
switch (G__49646) {
case (1):
return f.call(c);

break;
case (2):
return f.call(c,cljs.core.nth.call(null,v,(1)));

break;
case (3):
return f.call(c,cljs.core.nth.call(null,v,(1)),cljs.core.nth.call(null,v,(2)));

break;
case (4):
return f.call(c,cljs.core.nth.call(null,v,(1)),cljs.core.nth.call(null,v,(2)),cljs.core.nth.call(null,v,(3)));

break;
case (5):
return f.call(c,cljs.core.nth.call(null,v,(1)),cljs.core.nth.call(null,v,(2)),cljs.core.nth.call(null,v,(3)),cljs.core.nth.call(null,v,(4)));

break;
default:
return f.apply(c,cljs.core.into_array.call(null,v).slice((1)));

}
})());
if(cljs.core.vector_QMARK_.call(null,res)){
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.protocols.as_element.call(null,compiler,res);
} else {
if(cljs.core.ifn_QMARK_.call(null,res)){
var f__$1 = ((re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.reagent_class_QMARK_.call(null,res))?((function (c,compiler,f,_,res){
return (function() { 
var G__49648__delegate = function (args){
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.protocols.as_element.call(null,compiler,cljs.core.apply.call(null,cljs.core.vector,res,args));
};
var G__49648 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49649__i = 0, G__49649__a = new Array(arguments.length -  0);
while (G__49649__i < G__49649__a.length) {G__49649__a[G__49649__i] = arguments[G__49649__i + 0]; ++G__49649__i;}
  args = new cljs.core.IndexedSeq(G__49649__a,0,null);
} 
return G__49648__delegate.call(this,args);};
G__49648.cljs$lang$maxFixedArity = 0;
G__49648.cljs$lang$applyTo = (function (arglist__49650){
var args = cljs.core.seq(arglist__49650);
return G__49648__delegate(args);
});
G__49648.cljs$core$IFn$_invoke$arity$variadic = G__49648__delegate;
return G__49648;
})()
;})(c,compiler,f,_,res))
:res);
(c.reagentRender = f__$1);

var G__49651 = c;
var G__49652 = compiler;
c = G__49651;
compiler = G__49652;
continue;
} else {
return res;

}
}
break;
}
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.component_name = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$component$component_name(c){
var or__4223__auto__ = (function (){var G__49653 = c;
var G__49653__$1 = (((G__49653 == null))?null:G__49653.constructor);
if((G__49653__$1 == null)){
return null;
} else {
return G__49653__$1.displayName;
}
})();
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var G__49654 = c;
var G__49654__$1 = (((G__49654 == null))?null:G__49654.constructor);
if((G__49654__$1 == null)){
return null;
} else {
return G__49654__$1.name;
}
}
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.comp_name = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$component$comp_name(){
var c = re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component._STAR_current_component_STAR_;
var n = re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.component_name.call(null,c);
if((!(cljs.core.empty_QMARK_.call(null,n)))){
return [" (in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),")"].join('');
} else {
return "";
}

});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.do_render = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$component$do_render(c,compiler){
var _STAR_current_component_STAR__orig_val__49655 = re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__49656 = c;
(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__49656);

try{var ok = [false];
try{var res = re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.wrap_render.call(null,c,compiler);
(ok[(0)] = true);

return res;
}finally {if(cljs.core.truth_((ok[(0)]))){
} else {
if(cljs.core.truth_(re_frisk.inlined_deps.reagent.v1v0v0.reagent.debug.has_console)){
(cljs.core.truth_(re_frisk.inlined_deps.reagent.v1v0v0.reagent.debug.tracking)?re_frisk.inlined_deps.reagent.v1v0v0.reagent.debug.track_console:console).error(["Error rendering component",re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.comp_name.call(null)].join(''));
} else {
}
}
}
}finally {(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__49655);
}});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.rat_opts = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-cache","no-cache",1588056370),true], null);
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.custom_wrapper = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$component$custom_wrapper(key,f){
var G__49657 = key;
var G__49657__$1 = (((G__49657 instanceof cljs.core.Keyword))?G__49657.fqn:null);
switch (G__49657__$1) {
case "getDefaultProps":
throw (new Error("getDefaultProps not supported"));

break;
case "getDerivedStateFromProps":
return (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$component$custom_wrapper_$_getDerivedStateFromProps(props,state){
return f.call(null,(function (){var temp__5755__auto__ = props.argv;
if((temp__5755__auto__ == null)){
return props;
} else {
var a = temp__5755__auto__;
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.extract_props.call(null,a);
}
})(),state);
});

break;
case "getInitialState":
return (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$component$custom_wrapper_$_getInitialState(c){
return cljs.core.reset_BANG_.call(null,re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.state_atom.call(null,c),f.call(c,c));
});

break;
case "getSnapshotBeforeUpdate":
return (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$component$custom_wrapper_$_getSnapshotBeforeUpdate(oldprops,oldstate){
var c = this;
return f.call(c,c,re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.props_argv.call(null,c,oldprops),oldstate);
});

break;
case "componentWillReceiveProps":
return (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$component$custom_wrapper_$_componentWillReceiveProps(nextprops){
var c = this;
return f.call(c,c,re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.props_argv.call(null,c,nextprops));
});

break;
case "UNSAFE_componentWillReceiveProps":
return (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$component$custom_wrapper_$_componentWillReceiveProps(nextprops){
var c = this;
return f.call(c,c,re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.props_argv.call(null,c,nextprops));
});

break;
case "shouldComponentUpdate":
return (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$component$custom_wrapper_$_shouldComponentUpdate(nextprops,nextstate){
var or__4223__auto__ = re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util._STAR_always_update_STAR_;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var c = this;
var old_argv = c.props.argv;
var new_argv = nextprops.argv;
var noargv = (((old_argv == null)) || ((new_argv == null)));
if((f == null)){
var or__4223__auto____$1 = noargv;
if(or__4223__auto____$1){
return or__4223__auto____$1;
} else {
try{return cljs.core.not_EQ_.call(null,old_argv,new_argv);
}catch (e49658){var e = e49658;
if(cljs.core.truth_(re_frisk.inlined_deps.reagent.v1v0v0.reagent.debug.has_console)){
(cljs.core.truth_(re_frisk.inlined_deps.reagent.v1v0v0.reagent.debug.tracking)?re_frisk.inlined_deps.reagent.v1v0v0.reagent.debug.track_console:console).warn(["Warning: ","Exception thrown while comparing argv's in shouldComponentUpdate: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(old_argv)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_argv)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join(''));
} else {
}

return false;
}}
} else {
if(noargv){
return f.call(c,c,re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.get_argv.call(null,c),re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.props_argv.call(null,c,nextprops));
} else {
return f.call(c,c,old_argv,new_argv);

}
}
}
});

break;
case "componentWillUpdate":
return (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$component$custom_wrapper_$_componentWillUpdate(nextprops,nextstate){
var c = this;
return f.call(c,c,re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.props_argv.call(null,c,nextprops),nextstate);
});

break;
case "UNSAFE_componentWillUpdate":
return (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$component$custom_wrapper_$_componentWillUpdate(nextprops,nextstate){
var c = this;
return f.call(c,c,re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.props_argv.call(null,c,nextprops),nextstate);
});

break;
case "componentDidUpdate":
return (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$component$custom_wrapper_$_componentDidUpdate(oldprops,oldstate,snapshot){
var c = this;
return f.call(c,c,re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.props_argv.call(null,c,oldprops),oldstate,snapshot);
});

break;
case "componentWillMount":
return (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$component$custom_wrapper_$_componentWillMount(){
var c = this;
return f.call(c,c);
});

break;
case "UNSAFE_componentWillMount":
return (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$component$custom_wrapper_$_componentWillMount(){
var c = this;
return f.call(c,c);
});

break;
case "componentDidMount":
return (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$component$custom_wrapper_$_componentDidMount(){
var c = this;
return f.call(c,c);
});

break;
case "componentWillUnmount":
return (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$component$custom_wrapper_$_componentWillUnmount(){
var c = this;
var G__49659_49661 = goog.object.get(c,"cljsRatom");
if((G__49659_49661 == null)){
} else {
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.dispose_BANG_.call(null,G__49659_49661);
}

re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.batching.mark_rendered.call(null,c);

if((f == null)){
return null;
} else {
return f.call(c,c);
}
});

break;
case "componentDidCatch":
return (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$component$custom_wrapper_$_componentDidCatch(error,info){
var c = this;
return f.call(c,c,error,info);
});

break;
default:
return null;

}
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.get_wrapper = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$component$get_wrapper(key,f){
var wrap = re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.custom_wrapper.call(null,key,f);
if(cljs.core.truth_((function (){var and__4221__auto__ = wrap;
if(cljs.core.truth_(and__4221__auto__)){
return f;
} else {
return and__4221__auto__;
}
})())){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error(["Assert failed: ",["Expected something callable, not ",cljs.core.pr_str.call(null,f)].join(''),"\n","(clojure.core/ifn? f)"].join('')));
}
} else {
}

var or__4223__auto__ = wrap;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return f;
}
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.obligatory = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),null,new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),null], null);
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.dash_to_method_name = re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.memoize_1.call(null,re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.dash_to_method_name);
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.camelify_map_keys = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$component$camelify_map_keys(fun_map){
return cljs.core.reduce_kv.call(null,(function (m,k,v){
return cljs.core.assoc.call(null,m,cljs.core.keyword.call(null,re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.dash_to_method_name.call(null,k)),v);
}),cljs.core.PersistentArrayMap.EMPTY,fun_map);
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.add_obligatory = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$component$add_obligatory(fun_map){
return cljs.core.merge.call(null,re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.obligatory,fun_map);
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.wrap_funs = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$component$wrap_funs(fmap,compiler){
var renders_49662 = cljs.core.select_keys.call(null,fmap,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"reagentRender","reagentRender",-358306383)], null));
var render_fun_49663 = cljs.core.first.call(null,cljs.core.vals.call(null,renders_49662));
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"componentFunction","componentFunction",825866104).cljs$core$IFn$_invoke$arity$1(fmap))){
} else {
throw (new Error(["Assert failed: ",":component-function is no longer supported, use :reagent-render instead.","\n","(not (:componentFunction fmap))"].join('')));
}

if((cljs.core.count.call(null,renders_49662) > (0))){
} else {
throw (new Error(["Assert failed: ","Missing reagent-render","\n","(pos? (count renders))"].join('')));
}

if(((1) === cljs.core.count.call(null,renders_49662))){
} else {
throw (new Error(["Assert failed: ","Too many render functions supplied","\n","(== 1 (count renders))"].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,render_fun_49663)){
} else {
throw (new Error(["Assert failed: ",["Expected something callable, not ",cljs.core.pr_str.call(null,render_fun_49663)].join(''),"\n","(clojure.core/ifn? render-fun)"].join('')));
}


var render_fun = (function (){var or__4223__auto__ = new cljs.core.Keyword(null,"reagentRender","reagentRender",-358306383).cljs$core$IFn$_invoke$arity$1(fmap);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(fmap);
}
})();
var legacy_render = (new cljs.core.Keyword(null,"reagentRender","reagentRender",-358306383).cljs$core$IFn$_invoke$arity$1(fmap) == null);
var name = (function (){var or__4223__auto__ = new cljs.core.Keyword(null,"displayName","displayName",-809144601).cljs$core$IFn$_invoke$arity$1(fmap);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var or__4223__auto____$1 = re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.fun_name.call(null,render_fun);
if(cljs.core.truth_(or__4223__auto____$1)){
return or__4223__auto____$1;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.call(null,"reagent"));
}
}
})();
var fmap__$1 = cljs.core.reduce_kv.call(null,(function (m,k,v){
return cljs.core.assoc.call(null,m,k,re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.get_wrapper.call(null,k,v));
}),cljs.core.PersistentArrayMap.EMPTY,fmap);
return cljs.core.assoc.call(null,fmap__$1,new cljs.core.Keyword(null,"displayName","displayName",-809144601),name,new cljs.core.Keyword(null,"cljsLegacyRender","cljsLegacyRender",-1527295613),legacy_render,new cljs.core.Keyword(null,"reagentRender","reagentRender",-358306383),render_fun,new cljs.core.Keyword(null,"render","render",-1408033454),(function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$component$wrap_funs_$_render(){
var c = this;
if(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util._STAR_non_reactive_STAR_){
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.do_render.call(null,c,compiler);
} else {
var rat = goog.object.get(c,"cljsRatom");
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.batching.mark_rendered.call(null,c);

if((rat == null)){
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.run_in_reaction.call(null,(function (){
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.do_render.call(null,c,compiler);
}),c,"cljsRatom",re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.batching.queue_render,re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.rat_opts);
} else {
return rat._run(false);
}
}
}));
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.map_to_js = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$component$map_to_js(m){
return cljs.core.reduce_kv.call(null,(function (o,k,v){
var G__49664 = o;
goog.object.set(G__49664,cljs.core.name.call(null,k),v);

return G__49664;
}),({}),m);
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.cljsify = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$component$cljsify(body,compiler){
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.wrap_funs.call(null,re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.add_obligatory.call(null,re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.camelify_map_keys.call(null,body)),compiler);
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.built_in_static_method_names = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"childContextTypes","childContextTypes",578717991),new cljs.core.Keyword(null,"contextTypes","contextTypes",-2023853910),new cljs.core.Keyword(null,"contextType","contextType",1033066077),new cljs.core.Keyword(null,"getDerivedStateFromProps","getDerivedStateFromProps",-991834739),new cljs.core.Keyword(null,"getDerivedStateFromError","getDerivedStateFromError",166658477)], null);
/**
 * Creates JS class based on provided Clojure map.
 * 
 *   Map keys should use `React.Component` method names (https://reactjs.org/docs/react-component.html),
 *   and can be provided in snake-case or camelCase.
 *   Constructor function is defined using key `:getInitialState`.
 * 
 *   React built-in static methods or properties are automatically defined as statics.
 */
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.create_class = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$component$create_class(body,compiler){
if(cljs.core.map_QMARK_.call(null,body)){
} else {
throw (new Error("Assert failed: (map? body)"));
}

var body__$1 = re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.cljsify.call(null,body,compiler);
var methods$ = re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.map_to_js.call(null,cljs.core.apply.call(null,cljs.core.dissoc,body__$1,new cljs.core.Keyword(null,"displayName","displayName",-809144601),new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),new cljs.core.Keyword(null,"constructor","constructor",-1953928811),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"reagentRender","reagentRender",-358306383),re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.built_in_static_method_names));
var static_methods = re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.map_to_js.call(null,cljs.core.select_keys.call(null,body__$1,re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.built_in_static_method_names));
var display_name = new cljs.core.Keyword(null,"displayName","displayName",-809144601).cljs$core$IFn$_invoke$arity$1(body__$1);
var get_initial_state = new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916).cljs$core$IFn$_invoke$arity$1(body__$1);
var construct = new cljs.core.Keyword(null,"constructor","constructor",-1953928811).cljs$core$IFn$_invoke$arity$1(body__$1);
var cmp = (function (props,context,updater){
var this$ = this;
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.global$module$react.Component.call(this$,props,context,updater);

if(cljs.core.truth_(construct)){
construct.call(null,this$,props);
} else {
}

if(cljs.core.truth_(get_initial_state)){
(this$.state = get_initial_state.call(null,this$));
} else {
}

(this$.cljsMountOrder = re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.batching.next_mount_count.call(null));

return this$;
});
goog.object.extend(cmp.prototype,re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.global$module$react.Component.prototype,methods$);

if(cljs.core.truth_(new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(body__$1))){
(cmp.prototype.render = new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(body__$1));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"reagentRender","reagentRender",-358306383).cljs$core$IFn$_invoke$arity$1(body__$1))){
(cmp.prototype.reagentRender = new cljs.core.Keyword(null,"reagentRender","reagentRender",-358306383).cljs$core$IFn$_invoke$arity$1(body__$1));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"cljsLegacyRender","cljsLegacyRender",-1527295613).cljs$core$IFn$_invoke$arity$1(body__$1))){
(cmp.prototype.cljsLegacyRender = new cljs.core.Keyword(null,"cljsLegacyRender","cljsLegacyRender",-1527295613).cljs$core$IFn$_invoke$arity$1(body__$1));
} else {
}

goog.object.extend(cmp,re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.global$module$react.Component,static_methods);

if(cljs.core.truth_(display_name)){
(cmp.displayName = display_name);

(cmp.cljs$lang$ctorStr = display_name);

(cmp.cljs$lang$ctorPrWriter = (function (this$,writer,opt){
return cljs.core._write.call(null,writer,display_name);
}));
} else {
}

(cmp.cljs$lang$type = true);

(cmp.prototype.constructor = cmp);

return cmp;
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.cached_react_class = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$component$cached_react_class(compiler,c){
return goog.object.get(c,re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.protocols.get_id.call(null,compiler));
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.cache_react_class = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$component$cache_react_class(compiler,c,constructor$){
goog.object.set(c,re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.protocols.get_id.call(null,compiler),constructor$);

return constructor$;
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.fn_to_class = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$component$fn_to_class(compiler,f){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error(["Assert failed: ",["Expected something callable, not ",cljs.core.pr_str.call(null,f)].join(''),"\n","(clojure.core/ifn? f)"].join('')));
}

if((!((!(((re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.react_class_QMARK_.call(null,f)) && ((!(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.reagent_class_QMARK_.call(null,f)))))))))){
if(cljs.core.truth_(re_frisk.inlined_deps.reagent.v1v0v0.reagent.debug.has_console)){
(cljs.core.truth_(re_frisk.inlined_deps.reagent.v1v0v0.reagent.debug.tracking)?re_frisk.inlined_deps.reagent.v1v0v0.reagent.debug.track_console:console).warn(["Warning: ","Using native React classes directly in Hiccup forms ","is not supported. Use create-element or ","adapt-react-class instead: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4223__auto__ = re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.fun_name.call(null,f);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return f;
}
})()),re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.comp_name.call(null)].join(''));
} else {
}
} else {
}

if(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.reagent_class_QMARK_.call(null,f)){
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.cache_react_class.call(null,compiler,f,f);
} else {
var spec = cljs.core.meta.call(null,f);
var withrender = cljs.core.assoc.call(null,spec,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),f);
var res = re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.create_class.call(null,withrender,compiler);
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.cache_react_class.call(null,compiler,f,res);
}
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.as_class = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$component$as_class(tag,compiler){
var temp__5755__auto__ = re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.cached_react_class.call(null,compiler,tag);
if((temp__5755__auto__ == null)){
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.fn_to_class.call(null,compiler,tag);
} else {
var cached_class = temp__5755__auto__;
return cached_class;
}
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.reactify_component = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$component$reactify_component(comp,compiler){
if(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.react_class_QMARK_.call(null,comp)){
return comp;
} else {
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.as_class.call(null,comp,compiler);
}
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.functional_wrap_render = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$component$functional_wrap_render(compiler,c){
while(true){
var f = c.reagentRender;
var _ = ((cljs.core.ifn_QMARK_.call(null,f))?null:(function(){throw (new Error(["Assert failed: ",["Expected something callable, not ",cljs.core.pr_str.call(null,f)].join(''),"\n","(clojure.core/ifn? f)"].join('')))})());
var argv = c.argv;
var res = cljs.core.apply.call(null,f,argv);
if(cljs.core.vector_QMARK_.call(null,res)){
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.protocols.as_element.call(null,compiler,res);
} else {
if(cljs.core.ifn_QMARK_.call(null,res)){
var f__$1 = ((re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.reagent_class_QMARK_.call(null,res))?((function (compiler,c,f,_,argv,res){
return (function() { 
var G__49665__delegate = function (args){
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.protocols.as_element.call(null,compiler,cljs.core.apply.call(null,cljs.core.vector,res,args));
};
var G__49665 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49666__i = 0, G__49666__a = new Array(arguments.length -  0);
while (G__49666__i < G__49666__a.length) {G__49666__a[G__49666__i] = arguments[G__49666__i + 0]; ++G__49666__i;}
  args = new cljs.core.IndexedSeq(G__49666__a,0,null);
} 
return G__49665__delegate.call(this,args);};
G__49665.cljs$lang$maxFixedArity = 0;
G__49665.cljs$lang$applyTo = (function (arglist__49667){
var args = cljs.core.seq(arglist__49667);
return G__49665__delegate(args);
});
G__49665.cljs$core$IFn$_invoke$arity$variadic = G__49665__delegate;
return G__49665;
})()
;})(compiler,c,f,_,argv,res))
:res);
(c.reagentRender = f__$1);

var G__49668 = compiler;
var G__49669 = c;
compiler = G__49668;
c = G__49669;
continue;
} else {
return res;

}
}
break;
}
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.functional_do_render = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$component$functional_do_render(compiler,c){
var _STAR_current_component_STAR__orig_val__49670 = re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__49671 = c;
(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__49671);

try{var ok = [false];
try{var res = re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.functional_wrap_render.call(null,compiler,c);
(ok[(0)] = true);

return res;
}finally {if(cljs.core.truth_((ok[(0)]))){
} else {
if(cljs.core.truth_(re_frisk.inlined_deps.reagent.v1v0v0.reagent.debug.has_console)){
(cljs.core.truth_(re_frisk.inlined_deps.reagent.v1v0v0.reagent.debug.tracking)?re_frisk.inlined_deps.reagent.v1v0v0.reagent.debug.track_console:console).error(["Error rendering component",re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.comp_name.call(null)].join(''));
} else {
}
}
}
}finally {(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__49670);
}});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.functional_render = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$component$functional_render(compiler,jsprops){
if(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util._STAR_non_reactive_STAR_){
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.functional_do_render.call(null,compiler,jsprops);
} else {
var argv = jsprops.argv;
var tag = jsprops.reagentRender;
var vec__49672 = re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.global$module$react.useState((0));
var _ = cljs.core.nth.call(null,vec__49672,(0),null);
var update_count = cljs.core.nth.call(null,vec__49672,(1),null);
var state_ref = re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.global$module$react.useRef();
var ___$1 = (cljs.core.truth_(state_ref.current)?null:(function (){var obj = ({});
(obj.forceUpdate = (function (){
return update_count.call(null,cljs.core.inc);
}));

(obj.cljsMountOrder = re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.batching.next_mount_count.call(null));

(obj.constructor = tag);

(obj.reagentRender = tag);

return (state_ref.current = obj);
})());
var reagent_state = state_ref.current;
var rat = goog.object.get(reagent_state,"cljsRatom");
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.global$module$react.useEffect((function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$component$functional_render_$_mount(){
return (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$component$functional_render_$_mount_$_unmount(){
var G__49675 = goog.object.get(reagent_state,"cljsRatom");
if((G__49675 == null)){
return null;
} else {
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.dispose_BANG_.call(null,G__49675);
}
});
}),[]);

(reagent_state.argv = argv);

re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.batching.mark_rendered.call(null,reagent_state);

if((rat == null)){
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.run_in_reaction.call(null,(function (){
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.functional_do_render.call(null,compiler,reagent_state);
}),reagent_state,"cljsRatom",re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.batching.queue_render,re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.rat_opts);
} else {
return rat._run(false);
}
}
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.functional_render_memo_fn = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$component$functional_render_memo_fn(prev_props,next_props){
var old_argv = prev_props.argv;
var new_argv = next_props.argv;
var and__4221__auto__ = re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util._STAR_always_update_STAR_ === false;
if(and__4221__auto__){
try{return cljs.core._EQ_.call(null,old_argv,new_argv);
}catch (e49676){var e = e49676;
if(cljs.core.truth_(re_frisk.inlined_deps.reagent.v1v0v0.reagent.debug.has_console)){
(cljs.core.truth_(re_frisk.inlined_deps.reagent.v1v0v0.reagent.debug.tracking)?re_frisk.inlined_deps.reagent.v1v0v0.reagent.debug.track_console:console).warn(["Warning: ","Exception thrown while comparing argv's in shouldComponentUpdate: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(old_argv)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_argv)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join(''));
} else {
}

return false;
}} else {
return and__4221__auto__;
}
});
/**
 * Create copy of functional-render with displayName set to name of the
 *   original Reagent component.
 */
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.functional_render_fn = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$component$functional_render_fn(compiler,tag){
var or__4223__auto__ = re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.cached_react_class.call(null,compiler,tag);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var f = (function (jsprops){
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.functional_render.call(null,compiler,jsprops);
});
var _ = (f.displayName = re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.fun_name.call(null,tag));
var f__$1 = re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.global$module$react.memo(f,re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.functional_render_memo_fn);
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.cache_react_class.call(null,compiler,tag,f__$1);

return f__$1;
}
});

//# sourceMappingURL=component.js.map
