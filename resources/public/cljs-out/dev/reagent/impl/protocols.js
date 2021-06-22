// Compiled by ClojureScript 1.10.866 {:optimizations :none}
goog.provide('reagent.impl.protocols');
goog.require('cljs.core');

/**
 * @interface
 */
reagent.impl.protocols.Compiler = function(){};

var reagent$impl$protocols$Compiler$get_id$dyn_48700 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (reagent.impl.protocols.get_id[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,this$);
} else {
var m__4519__auto__ = (reagent.impl.protocols.get_id["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Compiler.get-id",this$);
}
}
});
reagent.impl.protocols.get_id = (function reagent$impl$protocols$get_id(this$){
if((((!((this$ == null)))) && ((!((this$.reagent$impl$protocols$Compiler$get_id$arity$1 == null)))))){
return this$.reagent$impl$protocols$Compiler$get_id$arity$1(this$);
} else {
return reagent$impl$protocols$Compiler$get_id$dyn_48700.call(null,this$);
}
});

var reagent$impl$protocols$Compiler$as_element$dyn_48701 = (function (this$,x){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (reagent.impl.protocols.as_element[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,this$,x);
} else {
var m__4519__auto__ = (reagent.impl.protocols.as_element["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,this$,x);
} else {
throw cljs.core.missing_protocol.call(null,"Compiler.as-element",this$);
}
}
});
reagent.impl.protocols.as_element = (function reagent$impl$protocols$as_element(this$,x){
if((((!((this$ == null)))) && ((!((this$.reagent$impl$protocols$Compiler$as_element$arity$2 == null)))))){
return this$.reagent$impl$protocols$Compiler$as_element$arity$2(this$,x);
} else {
return reagent$impl$protocols$Compiler$as_element$dyn_48701.call(null,this$,x);
}
});

var reagent$impl$protocols$Compiler$make_element$dyn_48702 = (function (this$,argv,component,jsprops,first_child){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (reagent.impl.protocols.make_element[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,this$,argv,component,jsprops,first_child);
} else {
var m__4519__auto__ = (reagent.impl.protocols.make_element["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,this$,argv,component,jsprops,first_child);
} else {
throw cljs.core.missing_protocol.call(null,"Compiler.make-element",this$);
}
}
});
reagent.impl.protocols.make_element = (function reagent$impl$protocols$make_element(this$,argv,component,jsprops,first_child){
if((((!((this$ == null)))) && ((!((this$.reagent$impl$protocols$Compiler$make_element$arity$5 == null)))))){
return this$.reagent$impl$protocols$Compiler$make_element$arity$5(this$,argv,component,jsprops,first_child);
} else {
return reagent$impl$protocols$Compiler$make_element$dyn_48702.call(null,this$,argv,component,jsprops,first_child);
}
});


//# sourceMappingURL=protocols.js.map