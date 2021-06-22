// Compiled by ClojureScript 1.10.866 {:optimizations :none}
goog.provide('cider.nrepl.inlined_deps.suitable.v0v4v0.suitable.js_introspection');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.object');
cider.nrepl.inlined_deps.suitable.v0v4v0.suitable.js_introspection.own_property_descriptors = (cljs.core.truth_("getOwnPropertyDescriptors" in Object)?(function (obj){
return Object.getOwnPropertyDescriptors(obj);
}):(function (obj){
return cljs.core.clj__GT_js.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (key){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,Object.getOwnPropertyDescriptor(obj,key)], null);
}),Object.getOwnPropertyNames(obj))));
}));
/**
 * 
 */
cider.nrepl.inlined_deps.suitable.v0v4v0.suitable.js_introspection.properties_by_prototype = (function cider$nrepl$inlined_deps$suitable$v0v4v0$suitable$js_introspection$properties_by_prototype(obj){
var obj__$1 = obj;
var protos = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(obj__$1)){
var G__59757 = Object.getPrototypeOf(obj__$1);
var G__59758 = cljs.core.conj.call(null,protos,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"obj","obj",981763962),obj__$1,new cljs.core.Keyword(null,"props","props",453281727),cider.nrepl.inlined_deps.suitable.v0v4v0.suitable.js_introspection.own_property_descriptors.call(null,obj__$1)], null));
obj__$1 = G__59757;
protos = G__59758;
continue;
} else {
return protos;
}
break;
}
});
cider.nrepl.inlined_deps.suitable.v0v4v0.suitable.js_introspection.property_names_and_types = (function cider$nrepl$inlined_deps$suitable$v0v4v0$suitable$js_introspection$property_names_and_types(var_args){
var G__59760 = arguments.length;
switch (G__59760) {
case 1:
return cider.nrepl.inlined_deps.suitable.v0v4v0.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cider.nrepl.inlined_deps.suitable.v0v4v0.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cider.nrepl.inlined_deps.suitable.v0v4v0.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$1 = (function (js_obj){
return cider.nrepl.inlined_deps.suitable.v0v4v0.suitable.js_introspection.property_names_and_types.call(null,js_obj,null);
}));

(cider.nrepl.inlined_deps.suitable.v0v4v0.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$2 = (function (js_obj,prefix){
var seen = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
var iter__4622__auto__ = (function cider$nrepl$inlined_deps$suitable$v0v4v0$suitable$js_introspection$iter__59761(s__59762){
return (new cljs.core.LazySeq(null,(function (){
var s__59762__$1 = s__59762;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__59762__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var vec__59767 = cljs.core.first.call(null,xs__6308__auto__);
var i = cljs.core.nth.call(null,vec__59767,(0),null);
var map__59770 = cljs.core.nth.call(null,vec__59767,(1),null);
var map__59770__$1 = cljs.core.__destructure_map.call(null,map__59770);
var obj = cljs.core.get.call(null,map__59770__$1,new cljs.core.Keyword(null,"obj","obj",981763962));
var props = cljs.core.get.call(null,map__59770__$1,new cljs.core.Keyword(null,"props","props",453281727));
var iterys__4618__auto__ = ((function (s__59762__$1,vec__59767,i,map__59770,map__59770__$1,obj,props,xs__6308__auto__,temp__5753__auto__,seen){
return (function cider$nrepl$inlined_deps$suitable$v0v4v0$suitable$js_introspection$iter__59761_$_iter__59763(s__59764){
return (new cljs.core.LazySeq(null,((function (s__59762__$1,vec__59767,i,map__59770,map__59770__$1,obj,props,xs__6308__auto__,temp__5753__auto__,seen){
return (function (){
var s__59764__$1 = s__59764;
while(true){
var temp__5753__auto____$1 = cljs.core.seq.call(null,s__59764__$1);
if(temp__5753__auto____$1){
var s__59764__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__59764__$2)){
var c__4620__auto__ = cljs.core.chunk_first.call(null,s__59764__$2);
var size__4621__auto__ = cljs.core.count.call(null,c__4620__auto__);
var b__59766 = cljs.core.chunk_buffer.call(null,size__4621__auto__);
if((function (){var i__59765 = (0);
while(true){
if((i__59765 < size__4621__auto__)){
var key = cljs.core._nth.call(null,c__4620__auto__,i__59765);
if(((cljs.core.not.call(null,cljs.core.get.call(null,seen,key))) && (((cljs.core.empty_QMARK_.call(null,prefix)) || (clojure.string.starts_with_QMARK_.call(null,key,prefix)))))){
cljs.core.chunk_append.call(null,b__59766,(function (){var prop = goog.object.get(props,key);
cljs.core.conj_BANG_.call(null,seen,key);

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),key,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),i,new cljs.core.Keyword(null,"type","type",1174270348),(function (){try{var temp__5751__auto__ = (function (){var or__4223__auto__ = goog.object.get(prop,"value");
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.apply.call(null,goog.object.get(prop,"get"),cljs.core.PersistentVector.EMPTY);
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var value = temp__5751__auto__;
if(cljs.core.fn_QMARK_.call(null,value)){
return "function";
} else {
return "var";
}
} else {
return "var";
}
}catch (e59771){if((e59771 instanceof Error)){
var e = e59771;
return "var";
} else {
throw e59771;

}
}})()], null);
})());

var G__59774 = (i__59765 + (1));
i__59765 = G__59774;
continue;
} else {
var G__59775 = (i__59765 + (1));
i__59765 = G__59775;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__59766),cider$nrepl$inlined_deps$suitable$v0v4v0$suitable$js_introspection$iter__59761_$_iter__59763.call(null,cljs.core.chunk_rest.call(null,s__59764__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__59766),null);
}
} else {
var key = cljs.core.first.call(null,s__59764__$2);
if(((cljs.core.not.call(null,cljs.core.get.call(null,seen,key))) && (((cljs.core.empty_QMARK_.call(null,prefix)) || (clojure.string.starts_with_QMARK_.call(null,key,prefix)))))){
return cljs.core.cons.call(null,(function (){var prop = goog.object.get(props,key);
cljs.core.conj_BANG_.call(null,seen,key);

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),key,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),i,new cljs.core.Keyword(null,"type","type",1174270348),(function (){try{var temp__5751__auto__ = (function (){var or__4223__auto__ = goog.object.get(prop,"value");
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.apply.call(null,goog.object.get(prop,"get"),cljs.core.PersistentVector.EMPTY);
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var value = temp__5751__auto__;
if(cljs.core.fn_QMARK_.call(null,value)){
return "function";
} else {
return "var";
}
} else {
return "var";
}
}catch (e59772){if((e59772 instanceof Error)){
var e = e59772;
return "var";
} else {
throw e59772;

}
}})()], null);
})(),cider$nrepl$inlined_deps$suitable$v0v4v0$suitable$js_introspection$iter__59761_$_iter__59763.call(null,cljs.core.rest.call(null,s__59764__$2)));
} else {
var G__59776 = cljs.core.rest.call(null,s__59764__$2);
s__59764__$1 = G__59776;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__59762__$1,vec__59767,i,map__59770,map__59770__$1,obj,props,xs__6308__auto__,temp__5753__auto__,seen))
,null,null));
});})(s__59762__$1,vec__59767,i,map__59770,map__59770__$1,obj,props,xs__6308__auto__,temp__5753__auto__,seen))
;
var fs__4619__auto__ = cljs.core.seq.call(null,iterys__4618__auto__.call(null,cljs.core.js_keys.call(null,props)));
if(fs__4619__auto__){
return cljs.core.concat.call(null,fs__4619__auto__,cider$nrepl$inlined_deps$suitable$v0v4v0$suitable$js_introspection$iter__59761.call(null,cljs.core.rest.call(null,s__59762__$1)));
} else {
var G__59777 = cljs.core.rest.call(null,s__59762__$1);
s__59762__$1 = G__59777;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cider.nrepl.inlined_deps.suitable.v0v4v0.suitable.js_introspection.properties_by_prototype.call(null,js_obj)));
}));

(cider.nrepl.inlined_deps.suitable.v0v4v0.suitable.js_introspection.property_names_and_types.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=js_introspection.js.map
