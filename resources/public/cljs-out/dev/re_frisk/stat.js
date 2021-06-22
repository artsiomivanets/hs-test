// Compiled by ClojureScript 1.10.866 {:optimizations :none}
goog.provide('re_frisk.stat');
goog.require('cljs.core');
goog.require('re_frame.registrar');
re_frisk.stat.assoc_map = (function re_frisk$stat$assoc_map(acc,key){
return cljs.core.assoc.call(null,acc,key,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cnt","cnt",283978798),(0),new cljs.core.Keyword(null,"ms","ms",-1152709733),(0)], null));
});
re_frisk.stat.get_re_frame_handlers = (function re_frisk$stat$get_re_frame_handlers(){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fx","fx",-1237829572),cljs.core.reduce.call(null,re_frisk.stat.assoc_map,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keys.call(null,cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"fx","fx",-1237829572).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.registrar.kind__GT_id__GT_handler)),new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),new cljs.core.Keyword(null,"db","db",993250759)))),new cljs.core.Keyword(null,"cofx","cofx",2013202907),cljs.core.reduce.call(null,re_frisk.stat.assoc_map,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keys.call(null,cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"cofx","cofx",2013202907).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.registrar.kind__GT_id__GT_handler)),new cljs.core.Keyword(null,"db","db",993250759)))),new cljs.core.Keyword(null,"event","event",301435442),cljs.core.reduce.call(null,re_frisk.stat.assoc_map,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keys.call(null,new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.registrar.kind__GT_id__GT_handler)))),new cljs.core.Keyword(null,"sub","sub",-2093760025),cljs.core.reduce.call(null,re_frisk.stat.assoc_map,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keys.call(null,new cljs.core.Keyword(null,"sub","sub",-2093760025).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.registrar.kind__GT_id__GT_handler))))], null);
});
re_frisk.stat.init_stat = (function re_frisk$stat$init_stat(re_frame_data){
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data)))){
return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),re_frisk.stat.get_re_frame_handlers.call(null));
} else {
return null;
}
});
re_frisk.stat.update_trace_stat = (function re_frisk$stat$update_trace_stat(re_frame_data,traces){
var seq__55930 = cljs.core.seq.call(null,traces);
var chunk__55931 = null;
var count__55932 = (0);
var i__55933 = (0);
while(true){
if((i__55933 < count__55932)){
var map__55968 = cljs.core._nth.call(null,chunk__55931,i__55933);
var map__55968__$1 = cljs.core.__destructure_map.call(null,map__55968);
var event = cljs.core.get.call(null,map__55968__$1,new cljs.core.Keyword(null,"event","event",301435442));
var subs = cljs.core.get.call(null,map__55968__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
var duration = cljs.core.get.call(null,map__55968__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var effects = cljs.core.get.call(null,map__55968__$1,new cljs.core.Keyword(null,"effects","effects",-282369292));
var coeffects = cljs.core.get.call(null,map__55968__$1,new cljs.core.Keyword(null,"coeffects","coeffects",497912985));
if(cljs.core.truth_(event)){
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442),cljs.core.first.call(null,event),new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);

cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442),cljs.core.first.call(null,event),new cljs.core.Keyword(null,"ms","ms",-1152709733)], null),cljs.core._PLUS_,duration);

if((cljs.core.count.call(null,effects) > (0))){
var seq__55969_56002 = cljs.core.seq.call(null,cljs.core.keys.call(null,effects));
var chunk__55970_56003 = null;
var count__55971_56004 = (0);
var i__55972_56005 = (0);
while(true){
if((i__55972_56005 < count__55971_56004)){
var key_56006 = cljs.core._nth.call(null,chunk__55970_56003,i__55972_56005);
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fx","fx",-1237829572),key_56006,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);


var G__56007 = seq__55969_56002;
var G__56008 = chunk__55970_56003;
var G__56009 = count__55971_56004;
var G__56010 = (i__55972_56005 + (1));
seq__55969_56002 = G__56007;
chunk__55970_56003 = G__56008;
count__55971_56004 = G__56009;
i__55972_56005 = G__56010;
continue;
} else {
var temp__5753__auto___56011 = cljs.core.seq.call(null,seq__55969_56002);
if(temp__5753__auto___56011){
var seq__55969_56012__$1 = temp__5753__auto___56011;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55969_56012__$1)){
var c__4649__auto___56013 = cljs.core.chunk_first.call(null,seq__55969_56012__$1);
var G__56014 = cljs.core.chunk_rest.call(null,seq__55969_56012__$1);
var G__56015 = c__4649__auto___56013;
var G__56016 = cljs.core.count.call(null,c__4649__auto___56013);
var G__56017 = (0);
seq__55969_56002 = G__56014;
chunk__55970_56003 = G__56015;
count__55971_56004 = G__56016;
i__55972_56005 = G__56017;
continue;
} else {
var key_56018 = cljs.core.first.call(null,seq__55969_56012__$1);
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fx","fx",-1237829572),key_56018,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);


var G__56019 = cljs.core.next.call(null,seq__55969_56012__$1);
var G__56020 = null;
var G__56021 = (0);
var G__56022 = (0);
seq__55969_56002 = G__56019;
chunk__55970_56003 = G__56020;
count__55971_56004 = G__56021;
i__55972_56005 = G__56022;
continue;
}
} else {
}
}
break;
}
} else {
}

if((cljs.core.count.call(null,coeffects) > (0))){
var seq__55973_56023 = cljs.core.seq.call(null,cljs.core.keys.call(null,coeffects));
var chunk__55974_56024 = null;
var count__55975_56025 = (0);
var i__55976_56026 = (0);
while(true){
if((i__55976_56026 < count__55975_56025)){
var key_56027 = cljs.core._nth.call(null,chunk__55974_56024,i__55976_56026);
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cofx","cofx",2013202907),key_56027,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);


var G__56028 = seq__55973_56023;
var G__56029 = chunk__55974_56024;
var G__56030 = count__55975_56025;
var G__56031 = (i__55976_56026 + (1));
seq__55973_56023 = G__56028;
chunk__55974_56024 = G__56029;
count__55975_56025 = G__56030;
i__55976_56026 = G__56031;
continue;
} else {
var temp__5753__auto___56032 = cljs.core.seq.call(null,seq__55973_56023);
if(temp__5753__auto___56032){
var seq__55973_56033__$1 = temp__5753__auto___56032;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55973_56033__$1)){
var c__4649__auto___56034 = cljs.core.chunk_first.call(null,seq__55973_56033__$1);
var G__56035 = cljs.core.chunk_rest.call(null,seq__55973_56033__$1);
var G__56036 = c__4649__auto___56034;
var G__56037 = cljs.core.count.call(null,c__4649__auto___56034);
var G__56038 = (0);
seq__55973_56023 = G__56035;
chunk__55974_56024 = G__56036;
count__55975_56025 = G__56037;
i__55976_56026 = G__56038;
continue;
} else {
var key_56039 = cljs.core.first.call(null,seq__55973_56033__$1);
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cofx","cofx",2013202907),key_56039,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);


var G__56040 = cljs.core.next.call(null,seq__55973_56033__$1);
var G__56041 = null;
var G__56042 = (0);
var G__56043 = (0);
seq__55973_56023 = G__56040;
chunk__55974_56024 = G__56041;
count__55975_56025 = G__56042;
i__55976_56026 = G__56043;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}

if(cljs.core.seq.call(null,subs)){
var seq__55977_56044 = cljs.core.seq.call(null,subs);
var chunk__55978_56045 = null;
var count__55979_56046 = (0);
var i__55980_56047 = (0);
while(true){
if((i__55980_56047 < count__55979_56046)){
var map__55983_56048 = cljs.core._nth.call(null,chunk__55978_56045,i__55980_56047);
var map__55983_56049__$1 = cljs.core.__destructure_map.call(null,map__55983_56048);
var op_type_56050 = cljs.core.get.call(null,map__55983_56049__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var operation_56051 = cljs.core.get.call(null,map__55983_56049__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var duration_56052__$1 = cljs.core.get.call(null,map__55983_56049__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
if(cljs.core._EQ_.call(null,op_type_56050,new cljs.core.Keyword("sub","run","sub/run",-1821315581))){
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),operation_56051,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);

cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),operation_56051,new cljs.core.Keyword(null,"ms","ms",-1152709733)], null),cljs.core._PLUS_,duration_56052__$1);
} else {
}


var G__56053 = seq__55977_56044;
var G__56054 = chunk__55978_56045;
var G__56055 = count__55979_56046;
var G__56056 = (i__55980_56047 + (1));
seq__55977_56044 = G__56053;
chunk__55978_56045 = G__56054;
count__55979_56046 = G__56055;
i__55980_56047 = G__56056;
continue;
} else {
var temp__5753__auto___56057 = cljs.core.seq.call(null,seq__55977_56044);
if(temp__5753__auto___56057){
var seq__55977_56058__$1 = temp__5753__auto___56057;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55977_56058__$1)){
var c__4649__auto___56059 = cljs.core.chunk_first.call(null,seq__55977_56058__$1);
var G__56060 = cljs.core.chunk_rest.call(null,seq__55977_56058__$1);
var G__56061 = c__4649__auto___56059;
var G__56062 = cljs.core.count.call(null,c__4649__auto___56059);
var G__56063 = (0);
seq__55977_56044 = G__56060;
chunk__55978_56045 = G__56061;
count__55979_56046 = G__56062;
i__55980_56047 = G__56063;
continue;
} else {
var map__55984_56064 = cljs.core.first.call(null,seq__55977_56058__$1);
var map__55984_56065__$1 = cljs.core.__destructure_map.call(null,map__55984_56064);
var op_type_56066 = cljs.core.get.call(null,map__55984_56065__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var operation_56067 = cljs.core.get.call(null,map__55984_56065__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var duration_56068__$1 = cljs.core.get.call(null,map__55984_56065__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
if(cljs.core._EQ_.call(null,op_type_56066,new cljs.core.Keyword("sub","run","sub/run",-1821315581))){
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),operation_56067,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);

cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),operation_56067,new cljs.core.Keyword(null,"ms","ms",-1152709733)], null),cljs.core._PLUS_,duration_56068__$1);
} else {
}


var G__56069 = cljs.core.next.call(null,seq__55977_56058__$1);
var G__56070 = null;
var G__56071 = (0);
var G__56072 = (0);
seq__55977_56044 = G__56069;
chunk__55978_56045 = G__56070;
count__55979_56046 = G__56071;
i__55980_56047 = G__56072;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__56073 = seq__55930;
var G__56074 = chunk__55931;
var G__56075 = count__55932;
var G__56076 = (i__55933 + (1));
seq__55930 = G__56073;
chunk__55931 = G__56074;
count__55932 = G__56075;
i__55933 = G__56076;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__55930);
if(temp__5753__auto__){
var seq__55930__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55930__$1)){
var c__4649__auto__ = cljs.core.chunk_first.call(null,seq__55930__$1);
var G__56077 = cljs.core.chunk_rest.call(null,seq__55930__$1);
var G__56078 = c__4649__auto__;
var G__56079 = cljs.core.count.call(null,c__4649__auto__);
var G__56080 = (0);
seq__55930 = G__56077;
chunk__55931 = G__56078;
count__55932 = G__56079;
i__55933 = G__56080;
continue;
} else {
var map__55985 = cljs.core.first.call(null,seq__55930__$1);
var map__55985__$1 = cljs.core.__destructure_map.call(null,map__55985);
var event = cljs.core.get.call(null,map__55985__$1,new cljs.core.Keyword(null,"event","event",301435442));
var subs = cljs.core.get.call(null,map__55985__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
var duration = cljs.core.get.call(null,map__55985__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var effects = cljs.core.get.call(null,map__55985__$1,new cljs.core.Keyword(null,"effects","effects",-282369292));
var coeffects = cljs.core.get.call(null,map__55985__$1,new cljs.core.Keyword(null,"coeffects","coeffects",497912985));
if(cljs.core.truth_(event)){
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442),cljs.core.first.call(null,event),new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);

cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442),cljs.core.first.call(null,event),new cljs.core.Keyword(null,"ms","ms",-1152709733)], null),cljs.core._PLUS_,duration);

if((cljs.core.count.call(null,effects) > (0))){
var seq__55986_56081 = cljs.core.seq.call(null,cljs.core.keys.call(null,effects));
var chunk__55987_56082 = null;
var count__55988_56083 = (0);
var i__55989_56084 = (0);
while(true){
if((i__55989_56084 < count__55988_56083)){
var key_56085 = cljs.core._nth.call(null,chunk__55987_56082,i__55989_56084);
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fx","fx",-1237829572),key_56085,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);


var G__56086 = seq__55986_56081;
var G__56087 = chunk__55987_56082;
var G__56088 = count__55988_56083;
var G__56089 = (i__55989_56084 + (1));
seq__55986_56081 = G__56086;
chunk__55987_56082 = G__56087;
count__55988_56083 = G__56088;
i__55989_56084 = G__56089;
continue;
} else {
var temp__5753__auto___56090__$1 = cljs.core.seq.call(null,seq__55986_56081);
if(temp__5753__auto___56090__$1){
var seq__55986_56091__$1 = temp__5753__auto___56090__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55986_56091__$1)){
var c__4649__auto___56092 = cljs.core.chunk_first.call(null,seq__55986_56091__$1);
var G__56093 = cljs.core.chunk_rest.call(null,seq__55986_56091__$1);
var G__56094 = c__4649__auto___56092;
var G__56095 = cljs.core.count.call(null,c__4649__auto___56092);
var G__56096 = (0);
seq__55986_56081 = G__56093;
chunk__55987_56082 = G__56094;
count__55988_56083 = G__56095;
i__55989_56084 = G__56096;
continue;
} else {
var key_56097 = cljs.core.first.call(null,seq__55986_56091__$1);
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fx","fx",-1237829572),key_56097,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);


var G__56098 = cljs.core.next.call(null,seq__55986_56091__$1);
var G__56099 = null;
var G__56100 = (0);
var G__56101 = (0);
seq__55986_56081 = G__56098;
chunk__55987_56082 = G__56099;
count__55988_56083 = G__56100;
i__55989_56084 = G__56101;
continue;
}
} else {
}
}
break;
}
} else {
}

if((cljs.core.count.call(null,coeffects) > (0))){
var seq__55990_56102 = cljs.core.seq.call(null,cljs.core.keys.call(null,coeffects));
var chunk__55991_56103 = null;
var count__55992_56104 = (0);
var i__55993_56105 = (0);
while(true){
if((i__55993_56105 < count__55992_56104)){
var key_56106 = cljs.core._nth.call(null,chunk__55991_56103,i__55993_56105);
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cofx","cofx",2013202907),key_56106,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);


var G__56107 = seq__55990_56102;
var G__56108 = chunk__55991_56103;
var G__56109 = count__55992_56104;
var G__56110 = (i__55993_56105 + (1));
seq__55990_56102 = G__56107;
chunk__55991_56103 = G__56108;
count__55992_56104 = G__56109;
i__55993_56105 = G__56110;
continue;
} else {
var temp__5753__auto___56111__$1 = cljs.core.seq.call(null,seq__55990_56102);
if(temp__5753__auto___56111__$1){
var seq__55990_56112__$1 = temp__5753__auto___56111__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55990_56112__$1)){
var c__4649__auto___56113 = cljs.core.chunk_first.call(null,seq__55990_56112__$1);
var G__56114 = cljs.core.chunk_rest.call(null,seq__55990_56112__$1);
var G__56115 = c__4649__auto___56113;
var G__56116 = cljs.core.count.call(null,c__4649__auto___56113);
var G__56117 = (0);
seq__55990_56102 = G__56114;
chunk__55991_56103 = G__56115;
count__55992_56104 = G__56116;
i__55993_56105 = G__56117;
continue;
} else {
var key_56118 = cljs.core.first.call(null,seq__55990_56112__$1);
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cofx","cofx",2013202907),key_56118,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);


var G__56119 = cljs.core.next.call(null,seq__55990_56112__$1);
var G__56120 = null;
var G__56121 = (0);
var G__56122 = (0);
seq__55990_56102 = G__56119;
chunk__55991_56103 = G__56120;
count__55992_56104 = G__56121;
i__55993_56105 = G__56122;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}

if(cljs.core.seq.call(null,subs)){
var seq__55994_56123 = cljs.core.seq.call(null,subs);
var chunk__55995_56124 = null;
var count__55996_56125 = (0);
var i__55997_56126 = (0);
while(true){
if((i__55997_56126 < count__55996_56125)){
var map__56000_56127 = cljs.core._nth.call(null,chunk__55995_56124,i__55997_56126);
var map__56000_56128__$1 = cljs.core.__destructure_map.call(null,map__56000_56127);
var op_type_56129 = cljs.core.get.call(null,map__56000_56128__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var operation_56130 = cljs.core.get.call(null,map__56000_56128__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var duration_56131__$1 = cljs.core.get.call(null,map__56000_56128__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
if(cljs.core._EQ_.call(null,op_type_56129,new cljs.core.Keyword("sub","run","sub/run",-1821315581))){
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),operation_56130,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);

cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),operation_56130,new cljs.core.Keyword(null,"ms","ms",-1152709733)], null),cljs.core._PLUS_,duration_56131__$1);
} else {
}


var G__56132 = seq__55994_56123;
var G__56133 = chunk__55995_56124;
var G__56134 = count__55996_56125;
var G__56135 = (i__55997_56126 + (1));
seq__55994_56123 = G__56132;
chunk__55995_56124 = G__56133;
count__55996_56125 = G__56134;
i__55997_56126 = G__56135;
continue;
} else {
var temp__5753__auto___56136__$1 = cljs.core.seq.call(null,seq__55994_56123);
if(temp__5753__auto___56136__$1){
var seq__55994_56137__$1 = temp__5753__auto___56136__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55994_56137__$1)){
var c__4649__auto___56138 = cljs.core.chunk_first.call(null,seq__55994_56137__$1);
var G__56139 = cljs.core.chunk_rest.call(null,seq__55994_56137__$1);
var G__56140 = c__4649__auto___56138;
var G__56141 = cljs.core.count.call(null,c__4649__auto___56138);
var G__56142 = (0);
seq__55994_56123 = G__56139;
chunk__55995_56124 = G__56140;
count__55996_56125 = G__56141;
i__55997_56126 = G__56142;
continue;
} else {
var map__56001_56143 = cljs.core.first.call(null,seq__55994_56137__$1);
var map__56001_56144__$1 = cljs.core.__destructure_map.call(null,map__56001_56143);
var op_type_56145 = cljs.core.get.call(null,map__56001_56144__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var operation_56146 = cljs.core.get.call(null,map__56001_56144__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var duration_56147__$1 = cljs.core.get.call(null,map__56001_56144__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
if(cljs.core._EQ_.call(null,op_type_56145,new cljs.core.Keyword("sub","run","sub/run",-1821315581))){
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),operation_56146,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);

cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),operation_56146,new cljs.core.Keyword(null,"ms","ms",-1152709733)], null),cljs.core._PLUS_,duration_56147__$1);
} else {
}


var G__56148 = cljs.core.next.call(null,seq__55994_56137__$1);
var G__56149 = null;
var G__56150 = (0);
var G__56151 = (0);
seq__55994_56123 = G__56148;
chunk__55995_56124 = G__56149;
count__55996_56125 = G__56150;
i__55997_56126 = G__56151;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__56152 = cljs.core.next.call(null,seq__55930__$1);
var G__56153 = null;
var G__56154 = (0);
var G__56155 = (0);
seq__55930 = G__56152;
chunk__55931 = G__56153;
count__55932 = G__56154;
i__55933 = G__56155;
continue;
}
} else {
return null;
}
}
break;
}
});
re_frisk.stat.update_event_stat = (function re_frisk$stat$update_event_stat(re_frame_data,event){
return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);
});

//# sourceMappingURL=stat.js.map
