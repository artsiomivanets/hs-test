// Compiled by ClojureScript 1.10.866 {:optimizations :none}
goog.provide('re_frisk.diff.diff');
goog.require('cljs.core');
goog.require('clojure.set');
re_frisk.diff.diff.mv_keys = (function re_frisk$diff$diff$mv_keys(coll){
if(cljs.core.map_QMARK_.call(null,coll)){
return cljs.core.keys.call(null,coll);
} else {
return cljs.core.keep_indexed.call(null,(function (p1__49424_SHARP_,p2__49423_SHARP_){
if((p2__49423_SHARP_ == null)){
return null;
} else {
return p1__49424_SHARP_;
}
}),coll);
}
});
re_frisk.diff.diff.diff_coll = (function re_frisk$diff$diff$diff_coll(a,b){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4622__auto__ = (function re_frisk$diff$diff$diff_coll_$_iter__49425(s__49426){
return (new cljs.core.LazySeq(null,(function (){
var s__49426__$1 = s__49426;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__49426__$1);
if(temp__5753__auto__){
var s__49426__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__49426__$2)){
var c__4620__auto__ = cljs.core.chunk_first.call(null,s__49426__$2);
var size__4621__auto__ = cljs.core.count.call(null,c__4620__auto__);
var b__49428 = cljs.core.chunk_buffer.call(null,size__4621__auto__);
if((function (){var i__49427 = (0);
while(true){
if((i__49427 < size__4621__auto__)){
var key = cljs.core._nth.call(null,c__4620__auto__,i__49427);
cljs.core.chunk_append.call(null,b__49428,(function (){var val_a = cljs.core.get.call(null,a,key);
var val_b = cljs.core.get.call(null,b,key);
if(cljs.core._EQ_.call(null,val_a,val_b)){
return null;
} else {
if(cljs.core.truth_((function (){var and__4221__auto__ = val_a;
if(cljs.core.truth_(and__4221__auto__)){
return val_b;
} else {
return and__4221__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,re_frisk.diff.diff.diff.call(null,val_a,val_b)], null);
} else {
if(cljs.core.truth_(val_a)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"deleted","deleted",-510100639),val_a], null)], null);
} else {
if(cljs.core.truth_(val_b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,val_b], null);
} else {
return null;
}
}
}
}
})());

var G__49429 = (i__49427 + (1));
i__49427 = G__49429;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49428),re_frisk$diff$diff$diff_coll_$_iter__49425.call(null,cljs.core.chunk_rest.call(null,s__49426__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49428),null);
}
} else {
var key = cljs.core.first.call(null,s__49426__$2);
return cljs.core.cons.call(null,(function (){var val_a = cljs.core.get.call(null,a,key);
var val_b = cljs.core.get.call(null,b,key);
if(cljs.core._EQ_.call(null,val_a,val_b)){
return null;
} else {
if(cljs.core.truth_((function (){var and__4221__auto__ = val_a;
if(cljs.core.truth_(and__4221__auto__)){
return val_b;
} else {
return and__4221__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,re_frisk.diff.diff.diff.call(null,val_a,val_b)], null);
} else {
if(cljs.core.truth_(val_a)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"deleted","deleted",-510100639),val_a], null)], null);
} else {
if(cljs.core.truth_(val_b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,val_b], null);
} else {
return null;
}
}
}
}
})(),re_frisk$diff$diff$diff_coll_$_iter__49425.call(null,cljs.core.rest.call(null,s__49426__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__.call(null,clojure.set.union.call(null,cljs.core.set.call(null,re_frisk.diff.diff.mv_keys.call(null,a)),cljs.core.set.call(null,re_frisk.diff.diff.mv_keys.call(null,b))));
})());
});
re_frisk.diff.diff.diff_set = (function re_frisk$diff$diff$diff_set(a,b){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"deleted","deleted",-510100639),clojure.set.difference.call(null,a,b),new cljs.core.Keyword(null,"added","added",2057651688),clojure.set.difference.call(null,b,a)], null);
});
re_frisk.diff.diff.diff_rest = (function re_frisk$diff$diff$diff_rest(a,b){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"before","before",-1633692388),a,new cljs.core.Keyword(null,"after","after",594996914),b], null);
});
re_frisk.diff.diff.diff = (function re_frisk$diff$diff$diff(a,b){
if(cljs.core._EQ_.call(null,a,b)){
return null;
} else {
if(((cljs.core.map_QMARK_.call(null,a)) && (cljs.core.map_QMARK_.call(null,b)))){
return re_frisk.diff.diff.diff_coll.call(null,a,b);
} else {
if(((cljs.core.vector_QMARK_.call(null,a)) && (cljs.core.vector_QMARK_.call(null,b)))){
return re_frisk.diff.diff.diff_coll.call(null,a,b);
} else {
if(((cljs.core.set_QMARK_.call(null,a)) && (cljs.core.set_QMARK_.call(null,b)))){
return re_frisk.diff.diff.diff_set.call(null,a,b);
} else {
return re_frisk.diff.diff.diff_rest.call(null,a,b);

}
}
}
}
});

//# sourceMappingURL=diff.js.map
