// Compiled by ClojureScript 1.10.866 {:optimizations :none}
goog.provide('re_frisk.subs_graph');
goog.require('cljs.core');
goog.require('re_frisk.ui.components.colors');
goog.require('re_frisk.inlined_deps.reagent.v1v0v0.reagent.core');
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.network !== 'undefined')){
} else {
re_frisk.subs_graph.network = cljs.core.atom.call(null,null);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.reaction__GT_operation !== 'undefined')){
} else {
re_frisk.subs_graph.reaction__GT_operation = re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.view__GT_reactions !== 'undefined')){
} else {
re_frisk.subs_graph.view__GT_reactions = re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.vis !== 'undefined')){
} else {
re_frisk.subs_graph.vis = cljs.core.atom.call(null,null);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.doc !== 'undefined')){
} else {
re_frisk.subs_graph.doc = cljs.core.atom.call(null,null);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.nodes !== 'undefined')){
} else {
re_frisk.subs_graph.nodes = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.edges !== 'undefined')){
} else {
re_frisk.subs_graph.edges = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.options !== 'undefined')){
} else {
re_frisk.subs_graph.options = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"physics","physics",-1254209137),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"solver","solver",-744421825),"forceAtlas2Based",new cljs.core.Keyword(null,"maxVelocity","maxVelocity",1721643083),(30),new cljs.core.Keyword(null,"minVelocity","minVelocity",-32716928),(10),new cljs.core.Keyword(null,"stabilization","stabilization",-1209068026),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"iterations","iterations",-1402710890),(30)], null)], null)], null));
}
re_frisk.subs_graph.init = (function re_frisk$subs_graph$init(win,document){
cljs.core.reset_BANG_.call(null,re_frisk.subs_graph.vis,win.vis);

return cljs.core.reset_BANG_.call(null,re_frisk.subs_graph.doc,document);
});
re_frisk.subs_graph.set_root_node = (function re_frisk$subs_graph$set_root_node(reaction){
if(cljs.core.truth_(cljs.core.get.call(null,cljs.core.deref.call(null,re_frisk.subs_graph.nodes),reaction))){
return null;
} else {
var data = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"app-db",new cljs.core.Keyword(null,"label","label",1718410804),"app-db",new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"yellow","yellow",-881035449)], null)], null);
cljs.core.swap_BANG_.call(null,re_frisk.subs_graph.nodes,cljs.core.assoc,reaction,data);

cljs.core.swap_BANG_.call(null,re_frisk.subs_graph.reaction__GT_operation,cljs.core.assoc,reaction,"app-db");

if(cljs.core.truth_(cljs.core.deref.call(null,re_frisk.subs_graph.network))){
return new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.subs_graph.network)).nodes.add(cljs.core.clj__GT_js.call(null,data));
} else {
return null;
}
}
});
re_frisk.subs_graph.destroy = (function re_frisk$subs_graph$destroy(){
var temp__5753__auto__ = new cljs.core.Keyword(null,"network","network",2050004697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.subs_graph.network));
if(cljs.core.truth_(temp__5753__auto__)){
var network_js = temp__5753__auto__;
network_js.destroy();

return cljs.core.reset_BANG_.call(null,re_frisk.subs_graph.network,null);
} else {
return null;
}
});
re_frisk.subs_graph.create = (function re_frisk$subs_graph$create(){
re_frisk.subs_graph.destroy.call(null);

if(cljs.core.truth_((function (){var and__4221__auto__ = cljs.core.deref.call(null,re_frisk.subs_graph.vis);
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.deref.call(null,re_frisk.subs_graph.doc);
} else {
return and__4221__auto__;
}
})())){
var Network = cljs.core.deref.call(null,re_frisk.subs_graph.vis).Network;
var DataSet = cljs.core.deref.call(null,re_frisk.subs_graph.vis).DataSet;
var nodes_ds = (new DataSet(cljs.core.clj__GT_js.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,re_frisk.subs_graph.nodes)))));
var edges_ds = (new DataSet(cljs.core.clj__GT_js.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,re_frisk.subs_graph.edges)))));
var data = ({"nodes": nodes_ds, "edges": edges_ds});
var temp__5753__auto__ = cljs.core.deref.call(null,re_frisk.subs_graph.doc).getElementById("global-subs-graph-container");
if(cljs.core.truth_(temp__5753__auto__)){
var container = temp__5753__auto__;
return cljs.core.reset_BANG_.call(null,re_frisk.subs_graph.network,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"network","network",2050004697),(new Network(container,data,re_frisk.subs_graph.options))], null));
} else {
return null;
}
} else {
return null;
}
});
re_frisk.subs_graph.update_subs = (function re_frisk$subs_graph$update_subs(traces){
var temp__5753__auto___53401 = new cljs.core.Keyword(null,"app-db-reaction","app-db-reaction",-269835135).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,traces));
if(cljs.core.truth_(temp__5753__auto___53401)){
var app_db_reaction_53402 = temp__5753__auto___53401;
re_frisk.subs_graph.set_root_node.call(null,app_db_reaction_53402);
} else {
}

var seq__53253_53403 = cljs.core.seq.call(null,traces);
var chunk__53254_53404 = null;
var count__53255_53405 = (0);
var i__53256_53406 = (0);
while(true){
if((i__53256_53406 < count__53255_53405)){
var map__53275_53407 = cljs.core._nth.call(null,chunk__53254_53404,i__53256_53406);
var map__53275_53408__$1 = cljs.core.__destructure_map.call(null,map__53275_53407);
var subs_53409 = cljs.core.get.call(null,map__53275_53408__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
var seq__53276_53410 = cljs.core.seq.call(null,subs_53409);
var chunk__53277_53411 = null;
var count__53278_53412 = (0);
var i__53279_53413 = (0);
while(true){
if((i__53279_53413 < count__53278_53412)){
var map__53282_53414 = cljs.core._nth.call(null,chunk__53277_53411,i__53279_53413);
var map__53282_53415__$1 = cljs.core.__destructure_map.call(null,map__53282_53414);
var operation_53416 = cljs.core.get.call(null,map__53282_53415__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var reaction_53417 = cljs.core.get.call(null,map__53282_53415__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
if(cljs.core.truth_(reaction_53417)){
cljs.core.swap_BANG_.call(null,re_frisk.subs_graph.reaction__GT_operation,cljs.core.assoc,reaction_53417,operation_53416);
} else {
}


var G__53418 = seq__53276_53410;
var G__53419 = chunk__53277_53411;
var G__53420 = count__53278_53412;
var G__53421 = (i__53279_53413 + (1));
seq__53276_53410 = G__53418;
chunk__53277_53411 = G__53419;
count__53278_53412 = G__53420;
i__53279_53413 = G__53421;
continue;
} else {
var temp__5753__auto___53422 = cljs.core.seq.call(null,seq__53276_53410);
if(temp__5753__auto___53422){
var seq__53276_53423__$1 = temp__5753__auto___53422;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53276_53423__$1)){
var c__4649__auto___53424 = cljs.core.chunk_first.call(null,seq__53276_53423__$1);
var G__53425 = cljs.core.chunk_rest.call(null,seq__53276_53423__$1);
var G__53426 = c__4649__auto___53424;
var G__53427 = cljs.core.count.call(null,c__4649__auto___53424);
var G__53428 = (0);
seq__53276_53410 = G__53425;
chunk__53277_53411 = G__53426;
count__53278_53412 = G__53427;
i__53279_53413 = G__53428;
continue;
} else {
var map__53283_53429 = cljs.core.first.call(null,seq__53276_53423__$1);
var map__53283_53430__$1 = cljs.core.__destructure_map.call(null,map__53283_53429);
var operation_53431 = cljs.core.get.call(null,map__53283_53430__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var reaction_53432 = cljs.core.get.call(null,map__53283_53430__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
if(cljs.core.truth_(reaction_53432)){
cljs.core.swap_BANG_.call(null,re_frisk.subs_graph.reaction__GT_operation,cljs.core.assoc,reaction_53432,operation_53431);
} else {
}


var G__53433 = cljs.core.next.call(null,seq__53276_53423__$1);
var G__53434 = null;
var G__53435 = (0);
var G__53436 = (0);
seq__53276_53410 = G__53433;
chunk__53277_53411 = G__53434;
count__53278_53412 = G__53435;
i__53279_53413 = G__53436;
continue;
}
} else {
}
}
break;
}


var G__53437 = seq__53253_53403;
var G__53438 = chunk__53254_53404;
var G__53439 = count__53255_53405;
var G__53440 = (i__53256_53406 + (1));
seq__53253_53403 = G__53437;
chunk__53254_53404 = G__53438;
count__53255_53405 = G__53439;
i__53256_53406 = G__53440;
continue;
} else {
var temp__5753__auto___53441 = cljs.core.seq.call(null,seq__53253_53403);
if(temp__5753__auto___53441){
var seq__53253_53442__$1 = temp__5753__auto___53441;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53253_53442__$1)){
var c__4649__auto___53443 = cljs.core.chunk_first.call(null,seq__53253_53442__$1);
var G__53444 = cljs.core.chunk_rest.call(null,seq__53253_53442__$1);
var G__53445 = c__4649__auto___53443;
var G__53446 = cljs.core.count.call(null,c__4649__auto___53443);
var G__53447 = (0);
seq__53253_53403 = G__53444;
chunk__53254_53404 = G__53445;
count__53255_53405 = G__53446;
i__53256_53406 = G__53447;
continue;
} else {
var map__53284_53448 = cljs.core.first.call(null,seq__53253_53442__$1);
var map__53284_53449__$1 = cljs.core.__destructure_map.call(null,map__53284_53448);
var subs_53450 = cljs.core.get.call(null,map__53284_53449__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
var seq__53285_53451 = cljs.core.seq.call(null,subs_53450);
var chunk__53286_53452 = null;
var count__53287_53453 = (0);
var i__53288_53454 = (0);
while(true){
if((i__53288_53454 < count__53287_53453)){
var map__53291_53455 = cljs.core._nth.call(null,chunk__53286_53452,i__53288_53454);
var map__53291_53456__$1 = cljs.core.__destructure_map.call(null,map__53291_53455);
var operation_53457 = cljs.core.get.call(null,map__53291_53456__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var reaction_53458 = cljs.core.get.call(null,map__53291_53456__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
if(cljs.core.truth_(reaction_53458)){
cljs.core.swap_BANG_.call(null,re_frisk.subs_graph.reaction__GT_operation,cljs.core.assoc,reaction_53458,operation_53457);
} else {
}


var G__53459 = seq__53285_53451;
var G__53460 = chunk__53286_53452;
var G__53461 = count__53287_53453;
var G__53462 = (i__53288_53454 + (1));
seq__53285_53451 = G__53459;
chunk__53286_53452 = G__53460;
count__53287_53453 = G__53461;
i__53288_53454 = G__53462;
continue;
} else {
var temp__5753__auto___53463__$1 = cljs.core.seq.call(null,seq__53285_53451);
if(temp__5753__auto___53463__$1){
var seq__53285_53464__$1 = temp__5753__auto___53463__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53285_53464__$1)){
var c__4649__auto___53465 = cljs.core.chunk_first.call(null,seq__53285_53464__$1);
var G__53466 = cljs.core.chunk_rest.call(null,seq__53285_53464__$1);
var G__53467 = c__4649__auto___53465;
var G__53468 = cljs.core.count.call(null,c__4649__auto___53465);
var G__53469 = (0);
seq__53285_53451 = G__53466;
chunk__53286_53452 = G__53467;
count__53287_53453 = G__53468;
i__53288_53454 = G__53469;
continue;
} else {
var map__53292_53470 = cljs.core.first.call(null,seq__53285_53464__$1);
var map__53292_53471__$1 = cljs.core.__destructure_map.call(null,map__53292_53470);
var operation_53472 = cljs.core.get.call(null,map__53292_53471__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var reaction_53473 = cljs.core.get.call(null,map__53292_53471__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
if(cljs.core.truth_(reaction_53473)){
cljs.core.swap_BANG_.call(null,re_frisk.subs_graph.reaction__GT_operation,cljs.core.assoc,reaction_53473,operation_53472);
} else {
}


var G__53474 = cljs.core.next.call(null,seq__53285_53464__$1);
var G__53475 = null;
var G__53476 = (0);
var G__53477 = (0);
seq__53285_53451 = G__53474;
chunk__53286_53452 = G__53475;
count__53287_53453 = G__53476;
i__53288_53454 = G__53477;
continue;
}
} else {
}
}
break;
}


var G__53478 = cljs.core.next.call(null,seq__53253_53442__$1);
var G__53479 = null;
var G__53480 = (0);
var G__53481 = (0);
seq__53253_53403 = G__53478;
chunk__53254_53404 = G__53479;
count__53255_53405 = G__53480;
i__53256_53406 = G__53481;
continue;
}
} else {
}
}
break;
}

var new_nodes = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var seq__53293_53482 = cljs.core.seq.call(null,traces);
var chunk__53294_53483 = null;
var count__53295_53484 = (0);
var i__53296_53485 = (0);
while(true){
if((i__53296_53485 < count__53295_53484)){
var map__53347_53486 = cljs.core._nth.call(null,chunk__53294_53483,i__53296_53485);
var map__53347_53487__$1 = cljs.core.__destructure_map.call(null,map__53347_53486);
var subs_53488 = cljs.core.get.call(null,map__53347_53487__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
var seq__53348_53489 = cljs.core.seq.call(null,subs_53488);
var chunk__53349_53490 = null;
var count__53350_53491 = (0);
var i__53351_53492 = (0);
while(true){
if((i__53351_53492 < count__53350_53491)){
var map__53362_53493 = cljs.core._nth.call(null,chunk__53349_53490,i__53351_53492);
var map__53362_53494__$1 = cljs.core.__destructure_map.call(null,map__53362_53493);
var op_type_53495 = cljs.core.get.call(null,map__53362_53494__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var input_signals_53496 = cljs.core.get.call(null,map__53362_53494__$1,new cljs.core.Keyword(null,"input-signals","input-signals",563633497));
var operation_53497 = cljs.core.get.call(null,map__53362_53494__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var reaction_53498 = cljs.core.get.call(null,map__53362_53494__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
if(cljs.core.not_EQ_.call(null,op_type_53495,new cljs.core.Keyword(null,"create-class","create-class",1988524183))){
if(cljs.core.truth_((function (){var and__4221__auto__ = cljs.core._EQ_.call(null,op_type_53495,new cljs.core.Keyword(null,"render","render",-1408033454));
if(and__4221__auto__){
return input_signals_53496;
} else {
return and__4221__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,re_frisk.subs_graph.view__GT_reactions,cljs.core.assoc,operation_53497,input_signals_53496);
} else {
}

var operation_53499__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(operation_53497);
if(cljs.core.truth_(reaction_53498)){
var temp__5751__auto___53500 = cljs.core.get.call(null,cljs.core.deref.call(null,re_frisk.subs_graph.nodes),operation_53499__$1);
if(cljs.core.truth_(temp__5751__auto___53500)){
var old_reaction_53501 = temp__5751__auto___53500;
if(cljs.core.not_EQ_.call(null,op_type_53495,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(old_reaction_53501))){
var updated_node_53502 = cljs.core.assoc.call(null,old_reaction_53501,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_53495,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.call(null,re_frisk.ui.components.colors.sub_colors,op_type_53495)], null));
cljs.core.swap_BANG_.call(null,re_frisk.subs_graph.nodes,cljs.core.assoc,operation_53499__$1,updated_node_53502);

if(cljs.core.truth_(cljs.core.deref.call(null,re_frisk.subs_graph.network))){
if(cljs.core.truth_(cljs.core.get.call(null,cljs.core.deref.call(null,new_nodes),operation_53499__$1))){
cljs.core.swap_BANG_.call(null,new_nodes,cljs.core.assoc,operation_53499__$1,updated_node_53502);
} else {
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.subs_graph.network)).nodes.update(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_node_53502], null)));
}
} else {
}
} else {
}
} else {
var data_53503 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),operation_53499__$1,new cljs.core.Keyword(null,"label","label",1718410804),operation_53499__$1,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.call(null,re_frisk.ui.components.colors.sub_colors,op_type_53495)], null),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_53495], null);
cljs.core.swap_BANG_.call(null,re_frisk.subs_graph.nodes,cljs.core.assoc,operation_53499__$1,data_53503);

cljs.core.swap_BANG_.call(null,new_nodes,cljs.core.assoc,operation_53499__$1,data_53503);
}
} else {
}

if(cljs.core.truth_(input_signals_53496)){
var seq__53363_53504 = cljs.core.seq.call(null,input_signals_53496);
var chunk__53364_53505 = null;
var count__53365_53506 = (0);
var i__53366_53507 = (0);
while(true){
if((i__53366_53507 < count__53365_53506)){
var input_reaction_53508 = cljs.core._nth.call(null,chunk__53364_53505,i__53366_53507);
var input_operation_53509 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,cljs.core.deref.call(null,re_frisk.subs_graph.reaction__GT_operation),input_reaction_53508));
var reaction_path_53510 = [input_operation_53509,"-",operation_53499__$1].join('');
var temp__5751__auto___53511 = cljs.core.get.call(null,cljs.core.deref.call(null,re_frisk.subs_graph.edges),reaction_path_53510);
if(cljs.core.truth_(temp__5751__auto___53511)){
var old_edge_53512 = temp__5751__auto___53511;
var updated_edge_53513 = cljs.core.update.call(null,old_edge_53512,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.call(null,re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_53510,updated_edge_53513);

if(cljs.core.truth_(cljs.core.deref.call(null,re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_53513], null)));
} else {
}
} else {
var data_53514 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_53510,new cljs.core.Keyword(null,"from","from",1815293044),input_operation_53509,new cljs.core.Keyword(null,"to","to",192099007),operation_53499__$1,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.call(null,re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_53510,data_53514);

if(cljs.core.truth_(cljs.core.deref.call(null,re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js.call(null,data_53514));
} else {
}
}


var G__53515 = seq__53363_53504;
var G__53516 = chunk__53364_53505;
var G__53517 = count__53365_53506;
var G__53518 = (i__53366_53507 + (1));
seq__53363_53504 = G__53515;
chunk__53364_53505 = G__53516;
count__53365_53506 = G__53517;
i__53366_53507 = G__53518;
continue;
} else {
var temp__5753__auto___53519 = cljs.core.seq.call(null,seq__53363_53504);
if(temp__5753__auto___53519){
var seq__53363_53520__$1 = temp__5753__auto___53519;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53363_53520__$1)){
var c__4649__auto___53521 = cljs.core.chunk_first.call(null,seq__53363_53520__$1);
var G__53522 = cljs.core.chunk_rest.call(null,seq__53363_53520__$1);
var G__53523 = c__4649__auto___53521;
var G__53524 = cljs.core.count.call(null,c__4649__auto___53521);
var G__53525 = (0);
seq__53363_53504 = G__53522;
chunk__53364_53505 = G__53523;
count__53365_53506 = G__53524;
i__53366_53507 = G__53525;
continue;
} else {
var input_reaction_53526 = cljs.core.first.call(null,seq__53363_53520__$1);
var input_operation_53527 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,cljs.core.deref.call(null,re_frisk.subs_graph.reaction__GT_operation),input_reaction_53526));
var reaction_path_53528 = [input_operation_53527,"-",operation_53499__$1].join('');
var temp__5751__auto___53529 = cljs.core.get.call(null,cljs.core.deref.call(null,re_frisk.subs_graph.edges),reaction_path_53528);
if(cljs.core.truth_(temp__5751__auto___53529)){
var old_edge_53530 = temp__5751__auto___53529;
var updated_edge_53531 = cljs.core.update.call(null,old_edge_53530,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.call(null,re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_53528,updated_edge_53531);

if(cljs.core.truth_(cljs.core.deref.call(null,re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_53531], null)));
} else {
}
} else {
var data_53532 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_53528,new cljs.core.Keyword(null,"from","from",1815293044),input_operation_53527,new cljs.core.Keyword(null,"to","to",192099007),operation_53499__$1,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.call(null,re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_53528,data_53532);

if(cljs.core.truth_(cljs.core.deref.call(null,re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js.call(null,data_53532));
} else {
}
}


var G__53533 = cljs.core.next.call(null,seq__53363_53520__$1);
var G__53534 = null;
var G__53535 = (0);
var G__53536 = (0);
seq__53363_53504 = G__53533;
chunk__53364_53505 = G__53534;
count__53365_53506 = G__53535;
i__53366_53507 = G__53536;
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


var G__53537 = seq__53348_53489;
var G__53538 = chunk__53349_53490;
var G__53539 = count__53350_53491;
var G__53540 = (i__53351_53492 + (1));
seq__53348_53489 = G__53537;
chunk__53349_53490 = G__53538;
count__53350_53491 = G__53539;
i__53351_53492 = G__53540;
continue;
} else {
var temp__5753__auto___53541 = cljs.core.seq.call(null,seq__53348_53489);
if(temp__5753__auto___53541){
var seq__53348_53542__$1 = temp__5753__auto___53541;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53348_53542__$1)){
var c__4649__auto___53543 = cljs.core.chunk_first.call(null,seq__53348_53542__$1);
var G__53544 = cljs.core.chunk_rest.call(null,seq__53348_53542__$1);
var G__53545 = c__4649__auto___53543;
var G__53546 = cljs.core.count.call(null,c__4649__auto___53543);
var G__53547 = (0);
seq__53348_53489 = G__53544;
chunk__53349_53490 = G__53545;
count__53350_53491 = G__53546;
i__53351_53492 = G__53547;
continue;
} else {
var map__53367_53548 = cljs.core.first.call(null,seq__53348_53542__$1);
var map__53367_53549__$1 = cljs.core.__destructure_map.call(null,map__53367_53548);
var op_type_53550 = cljs.core.get.call(null,map__53367_53549__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var input_signals_53551 = cljs.core.get.call(null,map__53367_53549__$1,new cljs.core.Keyword(null,"input-signals","input-signals",563633497));
var operation_53552 = cljs.core.get.call(null,map__53367_53549__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var reaction_53553 = cljs.core.get.call(null,map__53367_53549__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
if(cljs.core.not_EQ_.call(null,op_type_53550,new cljs.core.Keyword(null,"create-class","create-class",1988524183))){
if(cljs.core.truth_((function (){var and__4221__auto__ = cljs.core._EQ_.call(null,op_type_53550,new cljs.core.Keyword(null,"render","render",-1408033454));
if(and__4221__auto__){
return input_signals_53551;
} else {
return and__4221__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,re_frisk.subs_graph.view__GT_reactions,cljs.core.assoc,operation_53552,input_signals_53551);
} else {
}

var operation_53554__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(operation_53552);
if(cljs.core.truth_(reaction_53553)){
var temp__5751__auto___53555 = cljs.core.get.call(null,cljs.core.deref.call(null,re_frisk.subs_graph.nodes),operation_53554__$1);
if(cljs.core.truth_(temp__5751__auto___53555)){
var old_reaction_53556 = temp__5751__auto___53555;
if(cljs.core.not_EQ_.call(null,op_type_53550,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(old_reaction_53556))){
var updated_node_53557 = cljs.core.assoc.call(null,old_reaction_53556,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_53550,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.call(null,re_frisk.ui.components.colors.sub_colors,op_type_53550)], null));
cljs.core.swap_BANG_.call(null,re_frisk.subs_graph.nodes,cljs.core.assoc,operation_53554__$1,updated_node_53557);

if(cljs.core.truth_(cljs.core.deref.call(null,re_frisk.subs_graph.network))){
if(cljs.core.truth_(cljs.core.get.call(null,cljs.core.deref.call(null,new_nodes),operation_53554__$1))){
cljs.core.swap_BANG_.call(null,new_nodes,cljs.core.assoc,operation_53554__$1,updated_node_53557);
} else {
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.subs_graph.network)).nodes.update(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_node_53557], null)));
}
} else {
}
} else {
}
} else {
var data_53558 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),operation_53554__$1,new cljs.core.Keyword(null,"label","label",1718410804),operation_53554__$1,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.call(null,re_frisk.ui.components.colors.sub_colors,op_type_53550)], null),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_53550], null);
cljs.core.swap_BANG_.call(null,re_frisk.subs_graph.nodes,cljs.core.assoc,operation_53554__$1,data_53558);

cljs.core.swap_BANG_.call(null,new_nodes,cljs.core.assoc,operation_53554__$1,data_53558);
}
} else {
}

if(cljs.core.truth_(input_signals_53551)){
var seq__53368_53559 = cljs.core.seq.call(null,input_signals_53551);
var chunk__53369_53560 = null;
var count__53370_53561 = (0);
var i__53371_53562 = (0);
while(true){
if((i__53371_53562 < count__53370_53561)){
var input_reaction_53563 = cljs.core._nth.call(null,chunk__53369_53560,i__53371_53562);
var input_operation_53564 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,cljs.core.deref.call(null,re_frisk.subs_graph.reaction__GT_operation),input_reaction_53563));
var reaction_path_53565 = [input_operation_53564,"-",operation_53554__$1].join('');
var temp__5751__auto___53566 = cljs.core.get.call(null,cljs.core.deref.call(null,re_frisk.subs_graph.edges),reaction_path_53565);
if(cljs.core.truth_(temp__5751__auto___53566)){
var old_edge_53567 = temp__5751__auto___53566;
var updated_edge_53568 = cljs.core.update.call(null,old_edge_53567,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.call(null,re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_53565,updated_edge_53568);

if(cljs.core.truth_(cljs.core.deref.call(null,re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_53568], null)));
} else {
}
} else {
var data_53569 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_53565,new cljs.core.Keyword(null,"from","from",1815293044),input_operation_53564,new cljs.core.Keyword(null,"to","to",192099007),operation_53554__$1,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.call(null,re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_53565,data_53569);

if(cljs.core.truth_(cljs.core.deref.call(null,re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js.call(null,data_53569));
} else {
}
}


var G__53570 = seq__53368_53559;
var G__53571 = chunk__53369_53560;
var G__53572 = count__53370_53561;
var G__53573 = (i__53371_53562 + (1));
seq__53368_53559 = G__53570;
chunk__53369_53560 = G__53571;
count__53370_53561 = G__53572;
i__53371_53562 = G__53573;
continue;
} else {
var temp__5753__auto___53574__$1 = cljs.core.seq.call(null,seq__53368_53559);
if(temp__5753__auto___53574__$1){
var seq__53368_53575__$1 = temp__5753__auto___53574__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53368_53575__$1)){
var c__4649__auto___53576 = cljs.core.chunk_first.call(null,seq__53368_53575__$1);
var G__53577 = cljs.core.chunk_rest.call(null,seq__53368_53575__$1);
var G__53578 = c__4649__auto___53576;
var G__53579 = cljs.core.count.call(null,c__4649__auto___53576);
var G__53580 = (0);
seq__53368_53559 = G__53577;
chunk__53369_53560 = G__53578;
count__53370_53561 = G__53579;
i__53371_53562 = G__53580;
continue;
} else {
var input_reaction_53581 = cljs.core.first.call(null,seq__53368_53575__$1);
var input_operation_53582 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,cljs.core.deref.call(null,re_frisk.subs_graph.reaction__GT_operation),input_reaction_53581));
var reaction_path_53583 = [input_operation_53582,"-",operation_53554__$1].join('');
var temp__5751__auto___53584 = cljs.core.get.call(null,cljs.core.deref.call(null,re_frisk.subs_graph.edges),reaction_path_53583);
if(cljs.core.truth_(temp__5751__auto___53584)){
var old_edge_53585 = temp__5751__auto___53584;
var updated_edge_53586 = cljs.core.update.call(null,old_edge_53585,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.call(null,re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_53583,updated_edge_53586);

if(cljs.core.truth_(cljs.core.deref.call(null,re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_53586], null)));
} else {
}
} else {
var data_53587 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_53583,new cljs.core.Keyword(null,"from","from",1815293044),input_operation_53582,new cljs.core.Keyword(null,"to","to",192099007),operation_53554__$1,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.call(null,re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_53583,data_53587);

if(cljs.core.truth_(cljs.core.deref.call(null,re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js.call(null,data_53587));
} else {
}
}


var G__53588 = cljs.core.next.call(null,seq__53368_53575__$1);
var G__53589 = null;
var G__53590 = (0);
var G__53591 = (0);
seq__53368_53559 = G__53588;
chunk__53369_53560 = G__53589;
count__53370_53561 = G__53590;
i__53371_53562 = G__53591;
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


var G__53592 = cljs.core.next.call(null,seq__53348_53542__$1);
var G__53593 = null;
var G__53594 = (0);
var G__53595 = (0);
seq__53348_53489 = G__53592;
chunk__53349_53490 = G__53593;
count__53350_53491 = G__53594;
i__53351_53492 = G__53595;
continue;
}
} else {
}
}
break;
}


var G__53596 = seq__53293_53482;
var G__53597 = chunk__53294_53483;
var G__53598 = count__53295_53484;
var G__53599 = (i__53296_53485 + (1));
seq__53293_53482 = G__53596;
chunk__53294_53483 = G__53597;
count__53295_53484 = G__53598;
i__53296_53485 = G__53599;
continue;
} else {
var temp__5753__auto___53600 = cljs.core.seq.call(null,seq__53293_53482);
if(temp__5753__auto___53600){
var seq__53293_53601__$1 = temp__5753__auto___53600;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53293_53601__$1)){
var c__4649__auto___53602 = cljs.core.chunk_first.call(null,seq__53293_53601__$1);
var G__53603 = cljs.core.chunk_rest.call(null,seq__53293_53601__$1);
var G__53604 = c__4649__auto___53602;
var G__53605 = cljs.core.count.call(null,c__4649__auto___53602);
var G__53606 = (0);
seq__53293_53482 = G__53603;
chunk__53294_53483 = G__53604;
count__53295_53484 = G__53605;
i__53296_53485 = G__53606;
continue;
} else {
var map__53372_53607 = cljs.core.first.call(null,seq__53293_53601__$1);
var map__53372_53608__$1 = cljs.core.__destructure_map.call(null,map__53372_53607);
var subs_53609 = cljs.core.get.call(null,map__53372_53608__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
var seq__53373_53610 = cljs.core.seq.call(null,subs_53609);
var chunk__53374_53611 = null;
var count__53375_53612 = (0);
var i__53376_53613 = (0);
while(true){
if((i__53376_53613 < count__53375_53612)){
var map__53387_53614 = cljs.core._nth.call(null,chunk__53374_53611,i__53376_53613);
var map__53387_53615__$1 = cljs.core.__destructure_map.call(null,map__53387_53614);
var op_type_53616 = cljs.core.get.call(null,map__53387_53615__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var input_signals_53617 = cljs.core.get.call(null,map__53387_53615__$1,new cljs.core.Keyword(null,"input-signals","input-signals",563633497));
var operation_53618 = cljs.core.get.call(null,map__53387_53615__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var reaction_53619 = cljs.core.get.call(null,map__53387_53615__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
if(cljs.core.not_EQ_.call(null,op_type_53616,new cljs.core.Keyword(null,"create-class","create-class",1988524183))){
if(cljs.core.truth_((function (){var and__4221__auto__ = cljs.core._EQ_.call(null,op_type_53616,new cljs.core.Keyword(null,"render","render",-1408033454));
if(and__4221__auto__){
return input_signals_53617;
} else {
return and__4221__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,re_frisk.subs_graph.view__GT_reactions,cljs.core.assoc,operation_53618,input_signals_53617);
} else {
}

var operation_53620__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(operation_53618);
if(cljs.core.truth_(reaction_53619)){
var temp__5751__auto___53621 = cljs.core.get.call(null,cljs.core.deref.call(null,re_frisk.subs_graph.nodes),operation_53620__$1);
if(cljs.core.truth_(temp__5751__auto___53621)){
var old_reaction_53622 = temp__5751__auto___53621;
if(cljs.core.not_EQ_.call(null,op_type_53616,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(old_reaction_53622))){
var updated_node_53623 = cljs.core.assoc.call(null,old_reaction_53622,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_53616,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.call(null,re_frisk.ui.components.colors.sub_colors,op_type_53616)], null));
cljs.core.swap_BANG_.call(null,re_frisk.subs_graph.nodes,cljs.core.assoc,operation_53620__$1,updated_node_53623);

if(cljs.core.truth_(cljs.core.deref.call(null,re_frisk.subs_graph.network))){
if(cljs.core.truth_(cljs.core.get.call(null,cljs.core.deref.call(null,new_nodes),operation_53620__$1))){
cljs.core.swap_BANG_.call(null,new_nodes,cljs.core.assoc,operation_53620__$1,updated_node_53623);
} else {
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.subs_graph.network)).nodes.update(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_node_53623], null)));
}
} else {
}
} else {
}
} else {
var data_53624 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),operation_53620__$1,new cljs.core.Keyword(null,"label","label",1718410804),operation_53620__$1,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.call(null,re_frisk.ui.components.colors.sub_colors,op_type_53616)], null),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_53616], null);
cljs.core.swap_BANG_.call(null,re_frisk.subs_graph.nodes,cljs.core.assoc,operation_53620__$1,data_53624);

cljs.core.swap_BANG_.call(null,new_nodes,cljs.core.assoc,operation_53620__$1,data_53624);
}
} else {
}

if(cljs.core.truth_(input_signals_53617)){
var seq__53388_53625 = cljs.core.seq.call(null,input_signals_53617);
var chunk__53389_53626 = null;
var count__53390_53627 = (0);
var i__53391_53628 = (0);
while(true){
if((i__53391_53628 < count__53390_53627)){
var input_reaction_53629 = cljs.core._nth.call(null,chunk__53389_53626,i__53391_53628);
var input_operation_53630 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,cljs.core.deref.call(null,re_frisk.subs_graph.reaction__GT_operation),input_reaction_53629));
var reaction_path_53631 = [input_operation_53630,"-",operation_53620__$1].join('');
var temp__5751__auto___53632 = cljs.core.get.call(null,cljs.core.deref.call(null,re_frisk.subs_graph.edges),reaction_path_53631);
if(cljs.core.truth_(temp__5751__auto___53632)){
var old_edge_53633 = temp__5751__auto___53632;
var updated_edge_53634 = cljs.core.update.call(null,old_edge_53633,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.call(null,re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_53631,updated_edge_53634);

if(cljs.core.truth_(cljs.core.deref.call(null,re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_53634], null)));
} else {
}
} else {
var data_53635 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_53631,new cljs.core.Keyword(null,"from","from",1815293044),input_operation_53630,new cljs.core.Keyword(null,"to","to",192099007),operation_53620__$1,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.call(null,re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_53631,data_53635);

if(cljs.core.truth_(cljs.core.deref.call(null,re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js.call(null,data_53635));
} else {
}
}


var G__53636 = seq__53388_53625;
var G__53637 = chunk__53389_53626;
var G__53638 = count__53390_53627;
var G__53639 = (i__53391_53628 + (1));
seq__53388_53625 = G__53636;
chunk__53389_53626 = G__53637;
count__53390_53627 = G__53638;
i__53391_53628 = G__53639;
continue;
} else {
var temp__5753__auto___53640__$1 = cljs.core.seq.call(null,seq__53388_53625);
if(temp__5753__auto___53640__$1){
var seq__53388_53641__$1 = temp__5753__auto___53640__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53388_53641__$1)){
var c__4649__auto___53642 = cljs.core.chunk_first.call(null,seq__53388_53641__$1);
var G__53643 = cljs.core.chunk_rest.call(null,seq__53388_53641__$1);
var G__53644 = c__4649__auto___53642;
var G__53645 = cljs.core.count.call(null,c__4649__auto___53642);
var G__53646 = (0);
seq__53388_53625 = G__53643;
chunk__53389_53626 = G__53644;
count__53390_53627 = G__53645;
i__53391_53628 = G__53646;
continue;
} else {
var input_reaction_53647 = cljs.core.first.call(null,seq__53388_53641__$1);
var input_operation_53648 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,cljs.core.deref.call(null,re_frisk.subs_graph.reaction__GT_operation),input_reaction_53647));
var reaction_path_53649 = [input_operation_53648,"-",operation_53620__$1].join('');
var temp__5751__auto___53650 = cljs.core.get.call(null,cljs.core.deref.call(null,re_frisk.subs_graph.edges),reaction_path_53649);
if(cljs.core.truth_(temp__5751__auto___53650)){
var old_edge_53651 = temp__5751__auto___53650;
var updated_edge_53652 = cljs.core.update.call(null,old_edge_53651,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.call(null,re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_53649,updated_edge_53652);

if(cljs.core.truth_(cljs.core.deref.call(null,re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_53652], null)));
} else {
}
} else {
var data_53653 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_53649,new cljs.core.Keyword(null,"from","from",1815293044),input_operation_53648,new cljs.core.Keyword(null,"to","to",192099007),operation_53620__$1,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.call(null,re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_53649,data_53653);

if(cljs.core.truth_(cljs.core.deref.call(null,re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js.call(null,data_53653));
} else {
}
}


var G__53654 = cljs.core.next.call(null,seq__53388_53641__$1);
var G__53655 = null;
var G__53656 = (0);
var G__53657 = (0);
seq__53388_53625 = G__53654;
chunk__53389_53626 = G__53655;
count__53390_53627 = G__53656;
i__53391_53628 = G__53657;
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


var G__53658 = seq__53373_53610;
var G__53659 = chunk__53374_53611;
var G__53660 = count__53375_53612;
var G__53661 = (i__53376_53613 + (1));
seq__53373_53610 = G__53658;
chunk__53374_53611 = G__53659;
count__53375_53612 = G__53660;
i__53376_53613 = G__53661;
continue;
} else {
var temp__5753__auto___53662__$1 = cljs.core.seq.call(null,seq__53373_53610);
if(temp__5753__auto___53662__$1){
var seq__53373_53663__$1 = temp__5753__auto___53662__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53373_53663__$1)){
var c__4649__auto___53664 = cljs.core.chunk_first.call(null,seq__53373_53663__$1);
var G__53665 = cljs.core.chunk_rest.call(null,seq__53373_53663__$1);
var G__53666 = c__4649__auto___53664;
var G__53667 = cljs.core.count.call(null,c__4649__auto___53664);
var G__53668 = (0);
seq__53373_53610 = G__53665;
chunk__53374_53611 = G__53666;
count__53375_53612 = G__53667;
i__53376_53613 = G__53668;
continue;
} else {
var map__53392_53669 = cljs.core.first.call(null,seq__53373_53663__$1);
var map__53392_53670__$1 = cljs.core.__destructure_map.call(null,map__53392_53669);
var op_type_53671 = cljs.core.get.call(null,map__53392_53670__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var input_signals_53672 = cljs.core.get.call(null,map__53392_53670__$1,new cljs.core.Keyword(null,"input-signals","input-signals",563633497));
var operation_53673 = cljs.core.get.call(null,map__53392_53670__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var reaction_53674 = cljs.core.get.call(null,map__53392_53670__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
if(cljs.core.not_EQ_.call(null,op_type_53671,new cljs.core.Keyword(null,"create-class","create-class",1988524183))){
if(cljs.core.truth_((function (){var and__4221__auto__ = cljs.core._EQ_.call(null,op_type_53671,new cljs.core.Keyword(null,"render","render",-1408033454));
if(and__4221__auto__){
return input_signals_53672;
} else {
return and__4221__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,re_frisk.subs_graph.view__GT_reactions,cljs.core.assoc,operation_53673,input_signals_53672);
} else {
}

var operation_53675__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(operation_53673);
if(cljs.core.truth_(reaction_53674)){
var temp__5751__auto___53676 = cljs.core.get.call(null,cljs.core.deref.call(null,re_frisk.subs_graph.nodes),operation_53675__$1);
if(cljs.core.truth_(temp__5751__auto___53676)){
var old_reaction_53677 = temp__5751__auto___53676;
if(cljs.core.not_EQ_.call(null,op_type_53671,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(old_reaction_53677))){
var updated_node_53678 = cljs.core.assoc.call(null,old_reaction_53677,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_53671,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.call(null,re_frisk.ui.components.colors.sub_colors,op_type_53671)], null));
cljs.core.swap_BANG_.call(null,re_frisk.subs_graph.nodes,cljs.core.assoc,operation_53675__$1,updated_node_53678);

if(cljs.core.truth_(cljs.core.deref.call(null,re_frisk.subs_graph.network))){
if(cljs.core.truth_(cljs.core.get.call(null,cljs.core.deref.call(null,new_nodes),operation_53675__$1))){
cljs.core.swap_BANG_.call(null,new_nodes,cljs.core.assoc,operation_53675__$1,updated_node_53678);
} else {
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.subs_graph.network)).nodes.update(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_node_53678], null)));
}
} else {
}
} else {
}
} else {
var data_53679 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),operation_53675__$1,new cljs.core.Keyword(null,"label","label",1718410804),operation_53675__$1,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.call(null,re_frisk.ui.components.colors.sub_colors,op_type_53671)], null),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_53671], null);
cljs.core.swap_BANG_.call(null,re_frisk.subs_graph.nodes,cljs.core.assoc,operation_53675__$1,data_53679);

cljs.core.swap_BANG_.call(null,new_nodes,cljs.core.assoc,operation_53675__$1,data_53679);
}
} else {
}

if(cljs.core.truth_(input_signals_53672)){
var seq__53393_53680 = cljs.core.seq.call(null,input_signals_53672);
var chunk__53394_53681 = null;
var count__53395_53682 = (0);
var i__53396_53683 = (0);
while(true){
if((i__53396_53683 < count__53395_53682)){
var input_reaction_53684 = cljs.core._nth.call(null,chunk__53394_53681,i__53396_53683);
var input_operation_53685 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,cljs.core.deref.call(null,re_frisk.subs_graph.reaction__GT_operation),input_reaction_53684));
var reaction_path_53686 = [input_operation_53685,"-",operation_53675__$1].join('');
var temp__5751__auto___53687 = cljs.core.get.call(null,cljs.core.deref.call(null,re_frisk.subs_graph.edges),reaction_path_53686);
if(cljs.core.truth_(temp__5751__auto___53687)){
var old_edge_53688 = temp__5751__auto___53687;
var updated_edge_53689 = cljs.core.update.call(null,old_edge_53688,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.call(null,re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_53686,updated_edge_53689);

if(cljs.core.truth_(cljs.core.deref.call(null,re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_53689], null)));
} else {
}
} else {
var data_53690 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_53686,new cljs.core.Keyword(null,"from","from",1815293044),input_operation_53685,new cljs.core.Keyword(null,"to","to",192099007),operation_53675__$1,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.call(null,re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_53686,data_53690);

if(cljs.core.truth_(cljs.core.deref.call(null,re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js.call(null,data_53690));
} else {
}
}


var G__53691 = seq__53393_53680;
var G__53692 = chunk__53394_53681;
var G__53693 = count__53395_53682;
var G__53694 = (i__53396_53683 + (1));
seq__53393_53680 = G__53691;
chunk__53394_53681 = G__53692;
count__53395_53682 = G__53693;
i__53396_53683 = G__53694;
continue;
} else {
var temp__5753__auto___53695__$2 = cljs.core.seq.call(null,seq__53393_53680);
if(temp__5753__auto___53695__$2){
var seq__53393_53696__$1 = temp__5753__auto___53695__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53393_53696__$1)){
var c__4649__auto___53697 = cljs.core.chunk_first.call(null,seq__53393_53696__$1);
var G__53698 = cljs.core.chunk_rest.call(null,seq__53393_53696__$1);
var G__53699 = c__4649__auto___53697;
var G__53700 = cljs.core.count.call(null,c__4649__auto___53697);
var G__53701 = (0);
seq__53393_53680 = G__53698;
chunk__53394_53681 = G__53699;
count__53395_53682 = G__53700;
i__53396_53683 = G__53701;
continue;
} else {
var input_reaction_53702 = cljs.core.first.call(null,seq__53393_53696__$1);
var input_operation_53703 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,cljs.core.deref.call(null,re_frisk.subs_graph.reaction__GT_operation),input_reaction_53702));
var reaction_path_53704 = [input_operation_53703,"-",operation_53675__$1].join('');
var temp__5751__auto___53705 = cljs.core.get.call(null,cljs.core.deref.call(null,re_frisk.subs_graph.edges),reaction_path_53704);
if(cljs.core.truth_(temp__5751__auto___53705)){
var old_edge_53706 = temp__5751__auto___53705;
var updated_edge_53707 = cljs.core.update.call(null,old_edge_53706,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.call(null,re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_53704,updated_edge_53707);

if(cljs.core.truth_(cljs.core.deref.call(null,re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_53707], null)));
} else {
}
} else {
var data_53708 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_53704,new cljs.core.Keyword(null,"from","from",1815293044),input_operation_53703,new cljs.core.Keyword(null,"to","to",192099007),operation_53675__$1,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.call(null,re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_53704,data_53708);

if(cljs.core.truth_(cljs.core.deref.call(null,re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js.call(null,data_53708));
} else {
}
}


var G__53709 = cljs.core.next.call(null,seq__53393_53696__$1);
var G__53710 = null;
var G__53711 = (0);
var G__53712 = (0);
seq__53393_53680 = G__53709;
chunk__53394_53681 = G__53710;
count__53395_53682 = G__53711;
i__53396_53683 = G__53712;
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


var G__53713 = cljs.core.next.call(null,seq__53373_53663__$1);
var G__53714 = null;
var G__53715 = (0);
var G__53716 = (0);
seq__53373_53610 = G__53713;
chunk__53374_53611 = G__53714;
count__53375_53612 = G__53715;
i__53376_53613 = G__53716;
continue;
}
} else {
}
}
break;
}


var G__53717 = cljs.core.next.call(null,seq__53293_53601__$1);
var G__53718 = null;
var G__53719 = (0);
var G__53720 = (0);
seq__53293_53482 = G__53717;
chunk__53294_53483 = G__53718;
count__53295_53484 = G__53719;
i__53296_53485 = G__53720;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cljs.core.deref.call(null,re_frisk.subs_graph.network))){
if((cljs.core.count.call(null,cljs.core.deref.call(null,new_nodes)) > (20))){
return re_frisk.subs_graph.create.call(null);
} else {
var seq__53397 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,new_nodes)));
var chunk__53398 = null;
var count__53399 = (0);
var i__53400 = (0);
while(true){
if((i__53400 < count__53399)){
var data = cljs.core._nth.call(null,chunk__53398,i__53400);
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.subs_graph.network)).nodes.add(cljs.core.clj__GT_js.call(null,data));


var G__53721 = seq__53397;
var G__53722 = chunk__53398;
var G__53723 = count__53399;
var G__53724 = (i__53400 + (1));
seq__53397 = G__53721;
chunk__53398 = G__53722;
count__53399 = G__53723;
i__53400 = G__53724;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__53397);
if(temp__5753__auto__){
var seq__53397__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53397__$1)){
var c__4649__auto__ = cljs.core.chunk_first.call(null,seq__53397__$1);
var G__53725 = cljs.core.chunk_rest.call(null,seq__53397__$1);
var G__53726 = c__4649__auto__;
var G__53727 = cljs.core.count.call(null,c__4649__auto__);
var G__53728 = (0);
seq__53397 = G__53725;
chunk__53398 = G__53726;
count__53399 = G__53727;
i__53400 = G__53728;
continue;
} else {
var data = cljs.core.first.call(null,seq__53397__$1);
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.subs_graph.network)).nodes.add(cljs.core.clj__GT_js.call(null,data));


var G__53729 = cljs.core.next.call(null,seq__53397__$1);
var G__53730 = null;
var G__53731 = (0);
var G__53732 = (0);
seq__53397 = G__53729;
chunk__53398 = G__53730;
count__53399 = G__53731;
i__53400 = G__53732;
continue;
}
} else {
return null;
}
}
break;
}
}
} else {
return null;
}
});
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.event_network !== 'undefined')){
} else {
re_frisk.subs_graph.event_network = cljs.core.atom.call(null,null);
}
re_frisk.subs_graph.create_event_subs = (function re_frisk$subs_graph$create_event_subs(p__53733){
var map__53734 = p__53733;
var map__53734__$1 = cljs.core.__destructure_map.call(null,map__53734);
var app_db_reaction = cljs.core.get.call(null,map__53734__$1,new cljs.core.Keyword(null,"app-db-reaction","app-db-reaction",-269835135));
var subs = cljs.core.get.call(null,map__53734__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
if(cljs.core.truth_(cljs.core.deref.call(null,re_frisk.subs_graph.event_network))){
cljs.core.deref.call(null,re_frisk.subs_graph.event_network).destroy();

cljs.core.reset_BANG_.call(null,re_frisk.subs_graph.event_network,null);
} else {
}

if(cljs.core.truth_((function (){var and__4221__auto__ = cljs.core.deref.call(null,re_frisk.subs_graph.vis);
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.deref.call(null,re_frisk.subs_graph.doc);
} else {
return and__4221__auto__;
}
})())){
var temp__5753__auto__ = cljs.core.deref.call(null,re_frisk.subs_graph.doc).getElementById("event-subs-graph-container");
if(cljs.core.truth_(temp__5753__auto__)){
var container = temp__5753__auto__;
var Network = cljs.core.deref.call(null,re_frisk.subs_graph.vis).Network;
var DataSet = cljs.core.deref.call(null,re_frisk.subs_graph.vis).DataSet;
var nodes = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([app_db_reaction,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),app_db_reaction,new cljs.core.Keyword(null,"label","label",1718410804),"app-db",new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"yellow","yellow",-881035449)], null)], null)]));
var edges = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var seq__53735_53759 = cljs.core.seq.call(null,subs);
var chunk__53736_53760 = null;
var count__53737_53761 = (0);
var i__53738_53762 = (0);
while(true){
if((i__53738_53762 < count__53737_53761)){
var map__53749_53763 = cljs.core._nth.call(null,chunk__53736_53760,i__53738_53762);
var map__53749_53764__$1 = cljs.core.__destructure_map.call(null,map__53749_53763);
var op_type_53765 = cljs.core.get.call(null,map__53749_53764__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var reaction_53766 = cljs.core.get.call(null,map__53749_53764__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
var input_signals_53767 = cljs.core.get.call(null,map__53749_53764__$1,new cljs.core.Keyword(null,"input-signals","input-signals",563633497));
var operation_53768 = cljs.core.get.call(null,map__53749_53764__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var temp__5751__auto___53769 = cljs.core.get.call(null,cljs.core.deref.call(null,nodes),reaction_53766);
if(cljs.core.truth_(temp__5751__auto___53769)){
var old_reaction_53770 = temp__5751__auto___53769;
if(cljs.core.not_EQ_.call(null,op_type_53765,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(old_reaction_53770))){
var updated_node_53771 = cljs.core.assoc.call(null,old_reaction_53770,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_53765,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.call(null,re_frisk.ui.components.colors.sub_colors,op_type_53765)], null));
cljs.core.swap_BANG_.call(null,nodes,cljs.core.assoc,reaction_53766,updated_node_53771);
} else {
}
} else {
var data_53772 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_53766,new cljs.core.Keyword(null,"label","label",1718410804),operation_53768,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.call(null,re_frisk.ui.components.colors.sub_colors,op_type_53765)], null),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_53765], null);
cljs.core.swap_BANG_.call(null,nodes,cljs.core.assoc,reaction_53766,data_53772);
}

if(cljs.core.truth_(input_signals_53767)){
var seq__53750_53773 = cljs.core.seq.call(null,input_signals_53767);
var chunk__53751_53774 = null;
var count__53752_53775 = (0);
var i__53753_53776 = (0);
while(true){
if((i__53753_53776 < count__53752_53775)){
var input_reaction_53777 = cljs.core._nth.call(null,chunk__53751_53774,i__53753_53776);
if(cljs.core.truth_(cljs.core.get.call(null,cljs.core.deref.call(null,edges),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_53777),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_53766)].join('')))){
} else {
cljs.core.swap_BANG_.call(null,edges,cljs.core.assoc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_53777),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_53766)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_53777,new cljs.core.Keyword(null,"to","to",192099007),reaction_53766], null));
}


var G__53778 = seq__53750_53773;
var G__53779 = chunk__53751_53774;
var G__53780 = count__53752_53775;
var G__53781 = (i__53753_53776 + (1));
seq__53750_53773 = G__53778;
chunk__53751_53774 = G__53779;
count__53752_53775 = G__53780;
i__53753_53776 = G__53781;
continue;
} else {
var temp__5753__auto___53782__$1 = cljs.core.seq.call(null,seq__53750_53773);
if(temp__5753__auto___53782__$1){
var seq__53750_53783__$1 = temp__5753__auto___53782__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53750_53783__$1)){
var c__4649__auto___53784 = cljs.core.chunk_first.call(null,seq__53750_53783__$1);
var G__53785 = cljs.core.chunk_rest.call(null,seq__53750_53783__$1);
var G__53786 = c__4649__auto___53784;
var G__53787 = cljs.core.count.call(null,c__4649__auto___53784);
var G__53788 = (0);
seq__53750_53773 = G__53785;
chunk__53751_53774 = G__53786;
count__53752_53775 = G__53787;
i__53753_53776 = G__53788;
continue;
} else {
var input_reaction_53789 = cljs.core.first.call(null,seq__53750_53783__$1);
if(cljs.core.truth_(cljs.core.get.call(null,cljs.core.deref.call(null,edges),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_53789),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_53766)].join('')))){
} else {
cljs.core.swap_BANG_.call(null,edges,cljs.core.assoc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_53789),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_53766)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_53789,new cljs.core.Keyword(null,"to","to",192099007),reaction_53766], null));
}


var G__53790 = cljs.core.next.call(null,seq__53750_53783__$1);
var G__53791 = null;
var G__53792 = (0);
var G__53793 = (0);
seq__53750_53773 = G__53790;
chunk__53751_53774 = G__53791;
count__53752_53775 = G__53792;
i__53753_53776 = G__53793;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__53794 = seq__53735_53759;
var G__53795 = chunk__53736_53760;
var G__53796 = count__53737_53761;
var G__53797 = (i__53738_53762 + (1));
seq__53735_53759 = G__53794;
chunk__53736_53760 = G__53795;
count__53737_53761 = G__53796;
i__53738_53762 = G__53797;
continue;
} else {
var temp__5753__auto___53798__$1 = cljs.core.seq.call(null,seq__53735_53759);
if(temp__5753__auto___53798__$1){
var seq__53735_53799__$1 = temp__5753__auto___53798__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53735_53799__$1)){
var c__4649__auto___53800 = cljs.core.chunk_first.call(null,seq__53735_53799__$1);
var G__53801 = cljs.core.chunk_rest.call(null,seq__53735_53799__$1);
var G__53802 = c__4649__auto___53800;
var G__53803 = cljs.core.count.call(null,c__4649__auto___53800);
var G__53804 = (0);
seq__53735_53759 = G__53801;
chunk__53736_53760 = G__53802;
count__53737_53761 = G__53803;
i__53738_53762 = G__53804;
continue;
} else {
var map__53754_53805 = cljs.core.first.call(null,seq__53735_53799__$1);
var map__53754_53806__$1 = cljs.core.__destructure_map.call(null,map__53754_53805);
var op_type_53807 = cljs.core.get.call(null,map__53754_53806__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var reaction_53808 = cljs.core.get.call(null,map__53754_53806__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
var input_signals_53809 = cljs.core.get.call(null,map__53754_53806__$1,new cljs.core.Keyword(null,"input-signals","input-signals",563633497));
var operation_53810 = cljs.core.get.call(null,map__53754_53806__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var temp__5751__auto___53811 = cljs.core.get.call(null,cljs.core.deref.call(null,nodes),reaction_53808);
if(cljs.core.truth_(temp__5751__auto___53811)){
var old_reaction_53812 = temp__5751__auto___53811;
if(cljs.core.not_EQ_.call(null,op_type_53807,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(old_reaction_53812))){
var updated_node_53813 = cljs.core.assoc.call(null,old_reaction_53812,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_53807,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.call(null,re_frisk.ui.components.colors.sub_colors,op_type_53807)], null));
cljs.core.swap_BANG_.call(null,nodes,cljs.core.assoc,reaction_53808,updated_node_53813);
} else {
}
} else {
var data_53814 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_53808,new cljs.core.Keyword(null,"label","label",1718410804),operation_53810,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.call(null,re_frisk.ui.components.colors.sub_colors,op_type_53807)], null),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_53807], null);
cljs.core.swap_BANG_.call(null,nodes,cljs.core.assoc,reaction_53808,data_53814);
}

if(cljs.core.truth_(input_signals_53809)){
var seq__53755_53815 = cljs.core.seq.call(null,input_signals_53809);
var chunk__53756_53816 = null;
var count__53757_53817 = (0);
var i__53758_53818 = (0);
while(true){
if((i__53758_53818 < count__53757_53817)){
var input_reaction_53819 = cljs.core._nth.call(null,chunk__53756_53816,i__53758_53818);
if(cljs.core.truth_(cljs.core.get.call(null,cljs.core.deref.call(null,edges),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_53819),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_53808)].join('')))){
} else {
cljs.core.swap_BANG_.call(null,edges,cljs.core.assoc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_53819),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_53808)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_53819,new cljs.core.Keyword(null,"to","to",192099007),reaction_53808], null));
}


var G__53820 = seq__53755_53815;
var G__53821 = chunk__53756_53816;
var G__53822 = count__53757_53817;
var G__53823 = (i__53758_53818 + (1));
seq__53755_53815 = G__53820;
chunk__53756_53816 = G__53821;
count__53757_53817 = G__53822;
i__53758_53818 = G__53823;
continue;
} else {
var temp__5753__auto___53824__$2 = cljs.core.seq.call(null,seq__53755_53815);
if(temp__5753__auto___53824__$2){
var seq__53755_53825__$1 = temp__5753__auto___53824__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53755_53825__$1)){
var c__4649__auto___53826 = cljs.core.chunk_first.call(null,seq__53755_53825__$1);
var G__53827 = cljs.core.chunk_rest.call(null,seq__53755_53825__$1);
var G__53828 = c__4649__auto___53826;
var G__53829 = cljs.core.count.call(null,c__4649__auto___53826);
var G__53830 = (0);
seq__53755_53815 = G__53827;
chunk__53756_53816 = G__53828;
count__53757_53817 = G__53829;
i__53758_53818 = G__53830;
continue;
} else {
var input_reaction_53831 = cljs.core.first.call(null,seq__53755_53825__$1);
if(cljs.core.truth_(cljs.core.get.call(null,cljs.core.deref.call(null,edges),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_53831),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_53808)].join('')))){
} else {
cljs.core.swap_BANG_.call(null,edges,cljs.core.assoc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_53831),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_53808)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_53831,new cljs.core.Keyword(null,"to","to",192099007),reaction_53808], null));
}


var G__53832 = cljs.core.next.call(null,seq__53755_53825__$1);
var G__53833 = null;
var G__53834 = (0);
var G__53835 = (0);
seq__53755_53815 = G__53832;
chunk__53756_53816 = G__53833;
count__53757_53817 = G__53834;
i__53758_53818 = G__53835;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__53836 = cljs.core.next.call(null,seq__53735_53799__$1);
var G__53837 = null;
var G__53838 = (0);
var G__53839 = (0);
seq__53735_53759 = G__53836;
chunk__53736_53760 = G__53837;
count__53737_53761 = G__53838;
i__53738_53762 = G__53839;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,re_frisk.subs_graph.event_network,(new Network(container,({"nodes": (new DataSet(cljs.core.clj__GT_js.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,nodes))))), "edges": (new DataSet(cljs.core.clj__GT_js.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,edges)))))}),re_frisk.subs_graph.options)));
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=subs_graph.js.map
