// Compiled by ClojureScript 1.10.866 {:optimizations :none}
goog.provide('re_frisk.inlined_deps.reagent.v1v0v0.reagent.debug');
goog.require('cljs.core');
re_frisk.inlined_deps.reagent.v1v0v0.reagent.debug.has_console = (typeof console !== 'undefined');
re_frisk.inlined_deps.reagent.v1v0v0.reagent.debug.tracking = false;
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.inlined_deps !== 'undefined') && (typeof re_frisk.inlined_deps.reagent !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0 !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0.reagent !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0.reagent.debug !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0.reagent.debug.warnings !== 'undefined')){
} else {
re_frisk.inlined_deps.reagent.v1v0v0.reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.inlined_deps !== 'undefined') && (typeof re_frisk.inlined_deps.reagent !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0 !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0.reagent !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0.reagent.debug !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0.reagent.debug.track_console !== 'undefined')){
} else {
re_frisk.inlined_deps.reagent.v1v0v0.reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__49448__delegate = function (args){
return cljs.core.swap_BANG_.call(null,re_frisk.inlined_deps.reagent.v1v0v0.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__49448 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49449__i = 0, G__49449__a = new Array(arguments.length -  0);
while (G__49449__i < G__49449__a.length) {G__49449__a[G__49449__i] = arguments[G__49449__i + 0]; ++G__49449__i;}
  args = new cljs.core.IndexedSeq(G__49449__a,0,null);
} 
return G__49448__delegate.call(this,args);};
G__49448.cljs$lang$maxFixedArity = 0;
G__49448.cljs$lang$applyTo = (function (arglist__49450){
var args = cljs.core.seq(arglist__49450);
return G__49448__delegate(args);
});
G__49448.cljs$core$IFn$_invoke$arity$variadic = G__49448__delegate;
return G__49448;
})()
);

(o.error = (function() { 
var G__49451__delegate = function (args){
return cljs.core.swap_BANG_.call(null,re_frisk.inlined_deps.reagent.v1v0v0.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__49451 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49452__i = 0, G__49452__a = new Array(arguments.length -  0);
while (G__49452__i < G__49452__a.length) {G__49452__a[G__49452__i] = arguments[G__49452__i + 0]; ++G__49452__i;}
  args = new cljs.core.IndexedSeq(G__49452__a,0,null);
} 
return G__49451__delegate.call(this,args);};
G__49451.cljs$lang$maxFixedArity = 0;
G__49451.cljs$lang$applyTo = (function (arglist__49453){
var args = cljs.core.seq(arglist__49453);
return G__49451__delegate(args);
});
G__49451.cljs$core$IFn$_invoke$arity$variadic = G__49451__delegate;
return G__49451;
})()
);

return o;
})();
}
re_frisk.inlined_deps.reagent.v1v0v0.reagent.debug.track_warnings = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$debug$track_warnings(f){
(re_frisk.inlined_deps.reagent.v1v0v0.reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,re_frisk.inlined_deps.reagent.v1v0v0.reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,re_frisk.inlined_deps.reagent.v1v0v0.reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,re_frisk.inlined_deps.reagent.v1v0v0.reagent.debug.warnings,null);

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=debug.js.map
