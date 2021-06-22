// Compiled by ClojureScript 1.10.866 {:optimizations :none}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__50671 = arguments.length;
switch (G__50671) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50672 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50672 = (function (f,blockable,meta50673){
this.f = f;
this.blockable = blockable;
this.meta50673 = meta50673;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50672.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50674,meta50673__$1){
var self__ = this;
var _50674__$1 = this;
return (new cljs.core.async.t_cljs$core$async50672(self__.f,self__.blockable,meta50673__$1));
}));

(cljs.core.async.t_cljs$core$async50672.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50674){
var self__ = this;
var _50674__$1 = this;
return self__.meta50673;
}));

(cljs.core.async.t_cljs$core$async50672.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50672.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async50672.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async50672.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async50672.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta50673","meta50673",-2090283877,null)], null);
}));

(cljs.core.async.t_cljs$core$async50672.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50672.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50672");

(cljs.core.async.t_cljs$core$async50672.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"cljs.core.async/t_cljs$core$async50672");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50672.
 */
cljs.core.async.__GT_t_cljs$core$async50672 = (function cljs$core$async$__GT_t_cljs$core$async50672(f__$1,blockable__$1,meta50673){
return (new cljs.core.async.t_cljs$core$async50672(f__$1,blockable__$1,meta50673));
});

}

return (new cljs.core.async.t_cljs$core$async50672(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__50678 = arguments.length;
switch (G__50678) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__50681 = arguments.length;
switch (G__50681) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__50684 = arguments.length;
switch (G__50684) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_50686 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_50686);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_50686);
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__50688 = arguments.length;
switch (G__50688) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4706__auto___50690 = n;
var x_50691 = (0);
while(true){
if((x_50691 < n__4706__auto___50690)){
(a[x_50691] = x_50691);

var G__50692 = (x_50691 + (1));
x_50691 = G__50692;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50693 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50693 = (function (flag,meta50694){
this.flag = flag;
this.meta50694 = meta50694;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50693.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50695,meta50694__$1){
var self__ = this;
var _50695__$1 = this;
return (new cljs.core.async.t_cljs$core$async50693(self__.flag,meta50694__$1));
}));

(cljs.core.async.t_cljs$core$async50693.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50695){
var self__ = this;
var _50695__$1 = this;
return self__.meta50694;
}));

(cljs.core.async.t_cljs$core$async50693.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50693.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async50693.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async50693.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async50693.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta50694","meta50694",-807570353,null)], null);
}));

(cljs.core.async.t_cljs$core$async50693.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50693.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50693");

(cljs.core.async.t_cljs$core$async50693.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"cljs.core.async/t_cljs$core$async50693");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50693.
 */
cljs.core.async.__GT_t_cljs$core$async50693 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async50693(flag__$1,meta50694){
return (new cljs.core.async.t_cljs$core$async50693(flag__$1,meta50694));
});

}

return (new cljs.core.async.t_cljs$core$async50693(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50696 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50696 = (function (flag,cb,meta50697){
this.flag = flag;
this.cb = cb;
this.meta50697 = meta50697;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50696.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50698,meta50697__$1){
var self__ = this;
var _50698__$1 = this;
return (new cljs.core.async.t_cljs$core$async50696(self__.flag,self__.cb,meta50697__$1));
}));

(cljs.core.async.t_cljs$core$async50696.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50698){
var self__ = this;
var _50698__$1 = this;
return self__.meta50697;
}));

(cljs.core.async.t_cljs$core$async50696.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50696.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async50696.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async50696.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async50696.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta50697","meta50697",-1272771902,null)], null);
}));

(cljs.core.async.t_cljs$core$async50696.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50696.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50696");

(cljs.core.async.t_cljs$core$async50696.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"cljs.core.async/t_cljs$core$async50696");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50696.
 */
cljs.core.async.__GT_t_cljs$core$async50696 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async50696(flag__$1,cb__$1,meta50697){
return (new cljs.core.async.t_cljs$core$async50696(flag__$1,cb__$1,meta50697));
});

}

return (new cljs.core.async.t_cljs$core$async50696(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count.call(null,ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__50699_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__50699_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__50700_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__50700_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4223__auto__ = wport;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return port;
}
})()], null));
} else {
var G__50701 = (i + (1));
i = G__50701;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4223__auto__ = ret;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4221__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4221__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___50706 = arguments.length;
var i__4830__auto___50707 = (0);
while(true){
if((i__4830__auto___50707 < len__4829__auto___50706)){
args__4835__auto__.push((arguments[i__4830__auto___50707]));

var G__50708 = (i__4830__auto___50707 + (1));
i__4830__auto___50707 = G__50708;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__50704){
var map__50705 = p__50704;
var map__50705__$1 = cljs.core.__destructure_map.call(null,map__50705);
var opts = map__50705__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq50702){
var G__50703 = cljs.core.first.call(null,seq50702);
var seq50702__$1 = cljs.core.next.call(null,seq50702);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50703,seq50702__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__50710 = arguments.length;
switch (G__50710) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__33463__auto___50756 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33464__auto__ = (function (){var switch__33440__auto__ = (function (state_50734){
var state_val_50735 = (state_50734[(1)]);
if((state_val_50735 === (7))){
var inst_50730 = (state_50734[(2)]);
var state_50734__$1 = state_50734;
var statearr_50736_50757 = state_50734__$1;
(statearr_50736_50757[(2)] = inst_50730);

(statearr_50736_50757[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50735 === (1))){
var state_50734__$1 = state_50734;
var statearr_50737_50758 = state_50734__$1;
(statearr_50737_50758[(2)] = null);

(statearr_50737_50758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50735 === (4))){
var inst_50713 = (state_50734[(7)]);
var inst_50713__$1 = (state_50734[(2)]);
var inst_50714 = (inst_50713__$1 == null);
var state_50734__$1 = (function (){var statearr_50738 = state_50734;
(statearr_50738[(7)] = inst_50713__$1);

return statearr_50738;
})();
if(cljs.core.truth_(inst_50714)){
var statearr_50739_50759 = state_50734__$1;
(statearr_50739_50759[(1)] = (5));

} else {
var statearr_50740_50760 = state_50734__$1;
(statearr_50740_50760[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50735 === (13))){
var state_50734__$1 = state_50734;
var statearr_50741_50761 = state_50734__$1;
(statearr_50741_50761[(2)] = null);

(statearr_50741_50761[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50735 === (6))){
var inst_50713 = (state_50734[(7)]);
var state_50734__$1 = state_50734;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50734__$1,(11),to,inst_50713);
} else {
if((state_val_50735 === (3))){
var inst_50732 = (state_50734[(2)]);
var state_50734__$1 = state_50734;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50734__$1,inst_50732);
} else {
if((state_val_50735 === (12))){
var state_50734__$1 = state_50734;
var statearr_50742_50762 = state_50734__$1;
(statearr_50742_50762[(2)] = null);

(statearr_50742_50762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50735 === (2))){
var state_50734__$1 = state_50734;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50734__$1,(4),from);
} else {
if((state_val_50735 === (11))){
var inst_50723 = (state_50734[(2)]);
var state_50734__$1 = state_50734;
if(cljs.core.truth_(inst_50723)){
var statearr_50743_50763 = state_50734__$1;
(statearr_50743_50763[(1)] = (12));

} else {
var statearr_50744_50764 = state_50734__$1;
(statearr_50744_50764[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50735 === (9))){
var state_50734__$1 = state_50734;
var statearr_50745_50765 = state_50734__$1;
(statearr_50745_50765[(2)] = null);

(statearr_50745_50765[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50735 === (5))){
var state_50734__$1 = state_50734;
if(cljs.core.truth_(close_QMARK_)){
var statearr_50746_50766 = state_50734__$1;
(statearr_50746_50766[(1)] = (8));

} else {
var statearr_50747_50767 = state_50734__$1;
(statearr_50747_50767[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50735 === (14))){
var inst_50728 = (state_50734[(2)]);
var state_50734__$1 = state_50734;
var statearr_50748_50768 = state_50734__$1;
(statearr_50748_50768[(2)] = inst_50728);

(statearr_50748_50768[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50735 === (10))){
var inst_50720 = (state_50734[(2)]);
var state_50734__$1 = state_50734;
var statearr_50749_50769 = state_50734__$1;
(statearr_50749_50769[(2)] = inst_50720);

(statearr_50749_50769[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50735 === (8))){
var inst_50717 = cljs.core.async.close_BANG_.call(null,to);
var state_50734__$1 = state_50734;
var statearr_50750_50770 = state_50734__$1;
(statearr_50750_50770[(2)] = inst_50717);

(statearr_50750_50770[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33441__auto__ = null;
var cljs$core$async$state_machine__33441__auto____0 = (function (){
var statearr_50751 = [null,null,null,null,null,null,null,null];
(statearr_50751[(0)] = cljs$core$async$state_machine__33441__auto__);

(statearr_50751[(1)] = (1));

return statearr_50751;
});
var cljs$core$async$state_machine__33441__auto____1 = (function (state_50734){
while(true){
var ret_value__33442__auto__ = (function (){try{while(true){
var result__33443__auto__ = switch__33440__auto__.call(null,state_50734);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33443__auto__;
}
break;
}
}catch (e50752){if((e50752 instanceof Object)){
var ex__33444__auto__ = e50752;
var statearr_50753_50771 = state_50734;
(statearr_50753_50771[(5)] = ex__33444__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50734);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50752;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50772 = state_50734;
state_50734 = G__50772;
continue;
} else {
return ret_value__33442__auto__;
}
break;
}
});
cljs$core$async$state_machine__33441__auto__ = function(state_50734){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33441__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33441__auto____1.call(this,state_50734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33441__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33441__auto____0;
cljs$core$async$state_machine__33441__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33441__auto____1;
return cljs$core$async$state_machine__33441__auto__;
})()
})();
var state__33465__auto__ = (function (){var statearr_50754 = f__33464__auto__.call(null);
(statearr_50754[(6)] = c__33463__auto___50756);

return statearr_50754;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33465__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = (function (p__50773){
var vec__50774 = p__50773;
var v = cljs.core.nth.call(null,vec__50774,(0),null);
var p = cljs.core.nth.call(null,vec__50774,(1),null);
var job = vec__50774;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__33463__auto___50945 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33464__auto__ = (function (){var switch__33440__auto__ = (function (state_50781){
var state_val_50782 = (state_50781[(1)]);
if((state_val_50782 === (1))){
var state_50781__$1 = state_50781;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50781__$1,(2),res,v);
} else {
if((state_val_50782 === (2))){
var inst_50778 = (state_50781[(2)]);
var inst_50779 = cljs.core.async.close_BANG_.call(null,res);
var state_50781__$1 = (function (){var statearr_50783 = state_50781;
(statearr_50783[(7)] = inst_50778);

return statearr_50783;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50781__$1,inst_50779);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33441__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33441__auto____0 = (function (){
var statearr_50784 = [null,null,null,null,null,null,null,null];
(statearr_50784[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33441__auto__);

(statearr_50784[(1)] = (1));

return statearr_50784;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33441__auto____1 = (function (state_50781){
while(true){
var ret_value__33442__auto__ = (function (){try{while(true){
var result__33443__auto__ = switch__33440__auto__.call(null,state_50781);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33443__auto__;
}
break;
}
}catch (e50785){if((e50785 instanceof Object)){
var ex__33444__auto__ = e50785;
var statearr_50786_50946 = state_50781;
(statearr_50786_50946[(5)] = ex__33444__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50781);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50785;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50947 = state_50781;
state_50781 = G__50947;
continue;
} else {
return ret_value__33442__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33441__auto__ = function(state_50781){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33441__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33441__auto____1.call(this,state_50781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33441__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33441__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33441__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33441__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33441__auto__;
})()
})();
var state__33465__auto__ = (function (){var statearr_50787 = f__33464__auto__.call(null);
(statearr_50787[(6)] = c__33463__auto___50945);

return statearr_50787;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33465__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__50788){
var vec__50789 = p__50788;
var v = cljs.core.nth.call(null,vec__50789,(0),null);
var p = cljs.core.nth.call(null,vec__50789,(1),null);
var job = vec__50789;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__4706__auto___50948 = n;
var __50949 = (0);
while(true){
if((__50949 < n__4706__auto___50948)){
var G__50792_50950 = type;
var G__50792_50951__$1 = (((G__50792_50950 instanceof cljs.core.Keyword))?G__50792_50950.fqn:null);
switch (G__50792_50951__$1) {
case "compute":
var c__33463__auto___50953 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__50949,c__33463__auto___50953,G__50792_50950,G__50792_50951__$1,n__4706__auto___50948,jobs,results,process,async){
return (function (){
var f__33464__auto__ = (function (){var switch__33440__auto__ = ((function (__50949,c__33463__auto___50953,G__50792_50950,G__50792_50951__$1,n__4706__auto___50948,jobs,results,process,async){
return (function (state_50805){
var state_val_50806 = (state_50805[(1)]);
if((state_val_50806 === (1))){
var state_50805__$1 = state_50805;
var statearr_50807_50954 = state_50805__$1;
(statearr_50807_50954[(2)] = null);

(statearr_50807_50954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50806 === (2))){
var state_50805__$1 = state_50805;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50805__$1,(4),jobs);
} else {
if((state_val_50806 === (3))){
var inst_50803 = (state_50805[(2)]);
var state_50805__$1 = state_50805;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50805__$1,inst_50803);
} else {
if((state_val_50806 === (4))){
var inst_50795 = (state_50805[(2)]);
var inst_50796 = process.call(null,inst_50795);
var state_50805__$1 = state_50805;
if(cljs.core.truth_(inst_50796)){
var statearr_50808_50955 = state_50805__$1;
(statearr_50808_50955[(1)] = (5));

} else {
var statearr_50809_50956 = state_50805__$1;
(statearr_50809_50956[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50806 === (5))){
var state_50805__$1 = state_50805;
var statearr_50810_50957 = state_50805__$1;
(statearr_50810_50957[(2)] = null);

(statearr_50810_50957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50806 === (6))){
var state_50805__$1 = state_50805;
var statearr_50811_50958 = state_50805__$1;
(statearr_50811_50958[(2)] = null);

(statearr_50811_50958[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50806 === (7))){
var inst_50801 = (state_50805[(2)]);
var state_50805__$1 = state_50805;
var statearr_50812_50959 = state_50805__$1;
(statearr_50812_50959[(2)] = inst_50801);

(statearr_50812_50959[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__50949,c__33463__auto___50953,G__50792_50950,G__50792_50951__$1,n__4706__auto___50948,jobs,results,process,async))
;
return ((function (__50949,switch__33440__auto__,c__33463__auto___50953,G__50792_50950,G__50792_50951__$1,n__4706__auto___50948,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33441__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33441__auto____0 = (function (){
var statearr_50813 = [null,null,null,null,null,null,null];
(statearr_50813[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33441__auto__);

(statearr_50813[(1)] = (1));

return statearr_50813;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33441__auto____1 = (function (state_50805){
while(true){
var ret_value__33442__auto__ = (function (){try{while(true){
var result__33443__auto__ = switch__33440__auto__.call(null,state_50805);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33443__auto__;
}
break;
}
}catch (e50814){if((e50814 instanceof Object)){
var ex__33444__auto__ = e50814;
var statearr_50815_50960 = state_50805;
(statearr_50815_50960[(5)] = ex__33444__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50805);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50814;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50961 = state_50805;
state_50805 = G__50961;
continue;
} else {
return ret_value__33442__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33441__auto__ = function(state_50805){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33441__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33441__auto____1.call(this,state_50805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33441__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33441__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33441__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33441__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33441__auto__;
})()
;})(__50949,switch__33440__auto__,c__33463__auto___50953,G__50792_50950,G__50792_50951__$1,n__4706__auto___50948,jobs,results,process,async))
})();
var state__33465__auto__ = (function (){var statearr_50816 = f__33464__auto__.call(null);
(statearr_50816[(6)] = c__33463__auto___50953);

return statearr_50816;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33465__auto__);
});})(__50949,c__33463__auto___50953,G__50792_50950,G__50792_50951__$1,n__4706__auto___50948,jobs,results,process,async))
);


break;
case "async":
var c__33463__auto___50962 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__50949,c__33463__auto___50962,G__50792_50950,G__50792_50951__$1,n__4706__auto___50948,jobs,results,process,async){
return (function (){
var f__33464__auto__ = (function (){var switch__33440__auto__ = ((function (__50949,c__33463__auto___50962,G__50792_50950,G__50792_50951__$1,n__4706__auto___50948,jobs,results,process,async){
return (function (state_50829){
var state_val_50830 = (state_50829[(1)]);
if((state_val_50830 === (1))){
var state_50829__$1 = state_50829;
var statearr_50831_50963 = state_50829__$1;
(statearr_50831_50963[(2)] = null);

(statearr_50831_50963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50830 === (2))){
var state_50829__$1 = state_50829;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50829__$1,(4),jobs);
} else {
if((state_val_50830 === (3))){
var inst_50827 = (state_50829[(2)]);
var state_50829__$1 = state_50829;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50829__$1,inst_50827);
} else {
if((state_val_50830 === (4))){
var inst_50819 = (state_50829[(2)]);
var inst_50820 = async.call(null,inst_50819);
var state_50829__$1 = state_50829;
if(cljs.core.truth_(inst_50820)){
var statearr_50832_50964 = state_50829__$1;
(statearr_50832_50964[(1)] = (5));

} else {
var statearr_50833_50965 = state_50829__$1;
(statearr_50833_50965[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50830 === (5))){
var state_50829__$1 = state_50829;
var statearr_50834_50966 = state_50829__$1;
(statearr_50834_50966[(2)] = null);

(statearr_50834_50966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50830 === (6))){
var state_50829__$1 = state_50829;
var statearr_50835_50967 = state_50829__$1;
(statearr_50835_50967[(2)] = null);

(statearr_50835_50967[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50830 === (7))){
var inst_50825 = (state_50829[(2)]);
var state_50829__$1 = state_50829;
var statearr_50836_50968 = state_50829__$1;
(statearr_50836_50968[(2)] = inst_50825);

(statearr_50836_50968[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__50949,c__33463__auto___50962,G__50792_50950,G__50792_50951__$1,n__4706__auto___50948,jobs,results,process,async))
;
return ((function (__50949,switch__33440__auto__,c__33463__auto___50962,G__50792_50950,G__50792_50951__$1,n__4706__auto___50948,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33441__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33441__auto____0 = (function (){
var statearr_50837 = [null,null,null,null,null,null,null];
(statearr_50837[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33441__auto__);

(statearr_50837[(1)] = (1));

return statearr_50837;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33441__auto____1 = (function (state_50829){
while(true){
var ret_value__33442__auto__ = (function (){try{while(true){
var result__33443__auto__ = switch__33440__auto__.call(null,state_50829);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33443__auto__;
}
break;
}
}catch (e50838){if((e50838 instanceof Object)){
var ex__33444__auto__ = e50838;
var statearr_50839_50969 = state_50829;
(statearr_50839_50969[(5)] = ex__33444__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50829);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50838;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50970 = state_50829;
state_50829 = G__50970;
continue;
} else {
return ret_value__33442__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33441__auto__ = function(state_50829){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33441__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33441__auto____1.call(this,state_50829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33441__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33441__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33441__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33441__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33441__auto__;
})()
;})(__50949,switch__33440__auto__,c__33463__auto___50962,G__50792_50950,G__50792_50951__$1,n__4706__auto___50948,jobs,results,process,async))
})();
var state__33465__auto__ = (function (){var statearr_50840 = f__33464__auto__.call(null);
(statearr_50840[(6)] = c__33463__auto___50962);

return statearr_50840;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33465__auto__);
});})(__50949,c__33463__auto___50962,G__50792_50950,G__50792_50951__$1,n__4706__auto___50948,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50792_50951__$1)].join('')));

}

var G__50971 = (__50949 + (1));
__50949 = G__50971;
continue;
} else {
}
break;
}

var c__33463__auto___50972 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33464__auto__ = (function (){var switch__33440__auto__ = (function (state_50862){
var state_val_50863 = (state_50862[(1)]);
if((state_val_50863 === (7))){
var inst_50858 = (state_50862[(2)]);
var state_50862__$1 = state_50862;
var statearr_50864_50973 = state_50862__$1;
(statearr_50864_50973[(2)] = inst_50858);

(statearr_50864_50973[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50863 === (1))){
var state_50862__$1 = state_50862;
var statearr_50865_50974 = state_50862__$1;
(statearr_50865_50974[(2)] = null);

(statearr_50865_50974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50863 === (4))){
var inst_50843 = (state_50862[(7)]);
var inst_50843__$1 = (state_50862[(2)]);
var inst_50844 = (inst_50843__$1 == null);
var state_50862__$1 = (function (){var statearr_50866 = state_50862;
(statearr_50866[(7)] = inst_50843__$1);

return statearr_50866;
})();
if(cljs.core.truth_(inst_50844)){
var statearr_50867_50975 = state_50862__$1;
(statearr_50867_50975[(1)] = (5));

} else {
var statearr_50868_50976 = state_50862__$1;
(statearr_50868_50976[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50863 === (6))){
var inst_50843 = (state_50862[(7)]);
var inst_50848 = (state_50862[(8)]);
var inst_50848__$1 = cljs.core.async.chan.call(null,(1));
var inst_50849 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50850 = [inst_50843,inst_50848__$1];
var inst_50851 = (new cljs.core.PersistentVector(null,2,(5),inst_50849,inst_50850,null));
var state_50862__$1 = (function (){var statearr_50869 = state_50862;
(statearr_50869[(8)] = inst_50848__$1);

return statearr_50869;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50862__$1,(8),jobs,inst_50851);
} else {
if((state_val_50863 === (3))){
var inst_50860 = (state_50862[(2)]);
var state_50862__$1 = state_50862;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50862__$1,inst_50860);
} else {
if((state_val_50863 === (2))){
var state_50862__$1 = state_50862;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50862__$1,(4),from);
} else {
if((state_val_50863 === (9))){
var inst_50855 = (state_50862[(2)]);
var state_50862__$1 = (function (){var statearr_50870 = state_50862;
(statearr_50870[(9)] = inst_50855);

return statearr_50870;
})();
var statearr_50871_50977 = state_50862__$1;
(statearr_50871_50977[(2)] = null);

(statearr_50871_50977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50863 === (5))){
var inst_50846 = cljs.core.async.close_BANG_.call(null,jobs);
var state_50862__$1 = state_50862;
var statearr_50872_50978 = state_50862__$1;
(statearr_50872_50978[(2)] = inst_50846);

(statearr_50872_50978[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50863 === (8))){
var inst_50848 = (state_50862[(8)]);
var inst_50853 = (state_50862[(2)]);
var state_50862__$1 = (function (){var statearr_50873 = state_50862;
(statearr_50873[(10)] = inst_50853);

return statearr_50873;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50862__$1,(9),results,inst_50848);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33441__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33441__auto____0 = (function (){
var statearr_50874 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50874[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33441__auto__);

(statearr_50874[(1)] = (1));

return statearr_50874;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33441__auto____1 = (function (state_50862){
while(true){
var ret_value__33442__auto__ = (function (){try{while(true){
var result__33443__auto__ = switch__33440__auto__.call(null,state_50862);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33443__auto__;
}
break;
}
}catch (e50875){if((e50875 instanceof Object)){
var ex__33444__auto__ = e50875;
var statearr_50876_50979 = state_50862;
(statearr_50876_50979[(5)] = ex__33444__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50862);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50875;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50980 = state_50862;
state_50862 = G__50980;
continue;
} else {
return ret_value__33442__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33441__auto__ = function(state_50862){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33441__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33441__auto____1.call(this,state_50862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33441__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33441__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33441__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33441__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33441__auto__;
})()
})();
var state__33465__auto__ = (function (){var statearr_50877 = f__33464__auto__.call(null);
(statearr_50877[(6)] = c__33463__auto___50972);

return statearr_50877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33465__auto__);
}));


var c__33463__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33464__auto__ = (function (){var switch__33440__auto__ = (function (state_50915){
var state_val_50916 = (state_50915[(1)]);
if((state_val_50916 === (7))){
var inst_50911 = (state_50915[(2)]);
var state_50915__$1 = state_50915;
var statearr_50917_50981 = state_50915__$1;
(statearr_50917_50981[(2)] = inst_50911);

(statearr_50917_50981[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50916 === (20))){
var state_50915__$1 = state_50915;
var statearr_50918_50982 = state_50915__$1;
(statearr_50918_50982[(2)] = null);

(statearr_50918_50982[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50916 === (1))){
var state_50915__$1 = state_50915;
var statearr_50919_50983 = state_50915__$1;
(statearr_50919_50983[(2)] = null);

(statearr_50919_50983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50916 === (4))){
var inst_50880 = (state_50915[(7)]);
var inst_50880__$1 = (state_50915[(2)]);
var inst_50881 = (inst_50880__$1 == null);
var state_50915__$1 = (function (){var statearr_50920 = state_50915;
(statearr_50920[(7)] = inst_50880__$1);

return statearr_50920;
})();
if(cljs.core.truth_(inst_50881)){
var statearr_50921_50984 = state_50915__$1;
(statearr_50921_50984[(1)] = (5));

} else {
var statearr_50922_50985 = state_50915__$1;
(statearr_50922_50985[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50916 === (15))){
var inst_50893 = (state_50915[(8)]);
var state_50915__$1 = state_50915;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50915__$1,(18),to,inst_50893);
} else {
if((state_val_50916 === (21))){
var inst_50906 = (state_50915[(2)]);
var state_50915__$1 = state_50915;
var statearr_50923_50986 = state_50915__$1;
(statearr_50923_50986[(2)] = inst_50906);

(statearr_50923_50986[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50916 === (13))){
var inst_50908 = (state_50915[(2)]);
var state_50915__$1 = (function (){var statearr_50924 = state_50915;
(statearr_50924[(9)] = inst_50908);

return statearr_50924;
})();
var statearr_50925_50987 = state_50915__$1;
(statearr_50925_50987[(2)] = null);

(statearr_50925_50987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50916 === (6))){
var inst_50880 = (state_50915[(7)]);
var state_50915__$1 = state_50915;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50915__$1,(11),inst_50880);
} else {
if((state_val_50916 === (17))){
var inst_50901 = (state_50915[(2)]);
var state_50915__$1 = state_50915;
if(cljs.core.truth_(inst_50901)){
var statearr_50926_50988 = state_50915__$1;
(statearr_50926_50988[(1)] = (19));

} else {
var statearr_50927_50989 = state_50915__$1;
(statearr_50927_50989[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50916 === (3))){
var inst_50913 = (state_50915[(2)]);
var state_50915__$1 = state_50915;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50915__$1,inst_50913);
} else {
if((state_val_50916 === (12))){
var inst_50890 = (state_50915[(10)]);
var state_50915__$1 = state_50915;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50915__$1,(14),inst_50890);
} else {
if((state_val_50916 === (2))){
var state_50915__$1 = state_50915;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50915__$1,(4),results);
} else {
if((state_val_50916 === (19))){
var state_50915__$1 = state_50915;
var statearr_50928_50990 = state_50915__$1;
(statearr_50928_50990[(2)] = null);

(statearr_50928_50990[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50916 === (11))){
var inst_50890 = (state_50915[(2)]);
var state_50915__$1 = (function (){var statearr_50929 = state_50915;
(statearr_50929[(10)] = inst_50890);

return statearr_50929;
})();
var statearr_50930_50991 = state_50915__$1;
(statearr_50930_50991[(2)] = null);

(statearr_50930_50991[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50916 === (9))){
var state_50915__$1 = state_50915;
var statearr_50931_50992 = state_50915__$1;
(statearr_50931_50992[(2)] = null);

(statearr_50931_50992[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50916 === (5))){
var state_50915__$1 = state_50915;
if(cljs.core.truth_(close_QMARK_)){
var statearr_50932_50993 = state_50915__$1;
(statearr_50932_50993[(1)] = (8));

} else {
var statearr_50933_50994 = state_50915__$1;
(statearr_50933_50994[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50916 === (14))){
var inst_50893 = (state_50915[(8)]);
var inst_50895 = (state_50915[(11)]);
var inst_50893__$1 = (state_50915[(2)]);
var inst_50894 = (inst_50893__$1 == null);
var inst_50895__$1 = cljs.core.not.call(null,inst_50894);
var state_50915__$1 = (function (){var statearr_50934 = state_50915;
(statearr_50934[(8)] = inst_50893__$1);

(statearr_50934[(11)] = inst_50895__$1);

return statearr_50934;
})();
if(inst_50895__$1){
var statearr_50935_50995 = state_50915__$1;
(statearr_50935_50995[(1)] = (15));

} else {
var statearr_50936_50996 = state_50915__$1;
(statearr_50936_50996[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50916 === (16))){
var inst_50895 = (state_50915[(11)]);
var state_50915__$1 = state_50915;
var statearr_50937_50997 = state_50915__$1;
(statearr_50937_50997[(2)] = inst_50895);

(statearr_50937_50997[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50916 === (10))){
var inst_50887 = (state_50915[(2)]);
var state_50915__$1 = state_50915;
var statearr_50938_50998 = state_50915__$1;
(statearr_50938_50998[(2)] = inst_50887);

(statearr_50938_50998[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50916 === (18))){
var inst_50898 = (state_50915[(2)]);
var state_50915__$1 = state_50915;
var statearr_50939_50999 = state_50915__$1;
(statearr_50939_50999[(2)] = inst_50898);

(statearr_50939_50999[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50916 === (8))){
var inst_50884 = cljs.core.async.close_BANG_.call(null,to);
var state_50915__$1 = state_50915;
var statearr_50940_51000 = state_50915__$1;
(statearr_50940_51000[(2)] = inst_50884);

(statearr_50940_51000[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33441__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33441__auto____0 = (function (){
var statearr_50941 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50941[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33441__auto__);

(statearr_50941[(1)] = (1));

return statearr_50941;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33441__auto____1 = (function (state_50915){
while(true){
var ret_value__33442__auto__ = (function (){try{while(true){
var result__33443__auto__ = switch__33440__auto__.call(null,state_50915);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33443__auto__;
}
break;
}
}catch (e50942){if((e50942 instanceof Object)){
var ex__33444__auto__ = e50942;
var statearr_50943_51001 = state_50915;
(statearr_50943_51001[(5)] = ex__33444__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50915);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50942;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51002 = state_50915;
state_50915 = G__51002;
continue;
} else {
return ret_value__33442__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33441__auto__ = function(state_50915){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33441__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33441__auto____1.call(this,state_50915);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33441__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33441__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33441__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33441__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33441__auto__;
})()
})();
var state__33465__auto__ = (function (){var statearr_50944 = f__33464__auto__.call(null);
(statearr_50944[(6)] = c__33463__auto__);

return statearr_50944;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33465__auto__);
}));

return c__33463__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__51004 = arguments.length;
switch (G__51004) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__51007 = arguments.length;
switch (G__51007) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__51010 = arguments.length;
switch (G__51010) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__33463__auto___51059 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33464__auto__ = (function (){var switch__33440__auto__ = (function (state_51036){
var state_val_51037 = (state_51036[(1)]);
if((state_val_51037 === (7))){
var inst_51032 = (state_51036[(2)]);
var state_51036__$1 = state_51036;
var statearr_51038_51060 = state_51036__$1;
(statearr_51038_51060[(2)] = inst_51032);

(statearr_51038_51060[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51037 === (1))){
var state_51036__$1 = state_51036;
var statearr_51039_51061 = state_51036__$1;
(statearr_51039_51061[(2)] = null);

(statearr_51039_51061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51037 === (4))){
var inst_51013 = (state_51036[(7)]);
var inst_51013__$1 = (state_51036[(2)]);
var inst_51014 = (inst_51013__$1 == null);
var state_51036__$1 = (function (){var statearr_51040 = state_51036;
(statearr_51040[(7)] = inst_51013__$1);

return statearr_51040;
})();
if(cljs.core.truth_(inst_51014)){
var statearr_51041_51062 = state_51036__$1;
(statearr_51041_51062[(1)] = (5));

} else {
var statearr_51042_51063 = state_51036__$1;
(statearr_51042_51063[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51037 === (13))){
var state_51036__$1 = state_51036;
var statearr_51043_51064 = state_51036__$1;
(statearr_51043_51064[(2)] = null);

(statearr_51043_51064[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51037 === (6))){
var inst_51013 = (state_51036[(7)]);
var inst_51019 = p.call(null,inst_51013);
var state_51036__$1 = state_51036;
if(cljs.core.truth_(inst_51019)){
var statearr_51044_51065 = state_51036__$1;
(statearr_51044_51065[(1)] = (9));

} else {
var statearr_51045_51066 = state_51036__$1;
(statearr_51045_51066[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51037 === (3))){
var inst_51034 = (state_51036[(2)]);
var state_51036__$1 = state_51036;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51036__$1,inst_51034);
} else {
if((state_val_51037 === (12))){
var state_51036__$1 = state_51036;
var statearr_51046_51067 = state_51036__$1;
(statearr_51046_51067[(2)] = null);

(statearr_51046_51067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51037 === (2))){
var state_51036__$1 = state_51036;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51036__$1,(4),ch);
} else {
if((state_val_51037 === (11))){
var inst_51013 = (state_51036[(7)]);
var inst_51023 = (state_51036[(2)]);
var state_51036__$1 = state_51036;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51036__$1,(8),inst_51023,inst_51013);
} else {
if((state_val_51037 === (9))){
var state_51036__$1 = state_51036;
var statearr_51047_51068 = state_51036__$1;
(statearr_51047_51068[(2)] = tc);

(statearr_51047_51068[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51037 === (5))){
var inst_51016 = cljs.core.async.close_BANG_.call(null,tc);
var inst_51017 = cljs.core.async.close_BANG_.call(null,fc);
var state_51036__$1 = (function (){var statearr_51048 = state_51036;
(statearr_51048[(8)] = inst_51016);

return statearr_51048;
})();
var statearr_51049_51069 = state_51036__$1;
(statearr_51049_51069[(2)] = inst_51017);

(statearr_51049_51069[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51037 === (14))){
var inst_51030 = (state_51036[(2)]);
var state_51036__$1 = state_51036;
var statearr_51050_51070 = state_51036__$1;
(statearr_51050_51070[(2)] = inst_51030);

(statearr_51050_51070[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51037 === (10))){
var state_51036__$1 = state_51036;
var statearr_51051_51071 = state_51036__$1;
(statearr_51051_51071[(2)] = fc);

(statearr_51051_51071[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51037 === (8))){
var inst_51025 = (state_51036[(2)]);
var state_51036__$1 = state_51036;
if(cljs.core.truth_(inst_51025)){
var statearr_51052_51072 = state_51036__$1;
(statearr_51052_51072[(1)] = (12));

} else {
var statearr_51053_51073 = state_51036__$1;
(statearr_51053_51073[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33441__auto__ = null;
var cljs$core$async$state_machine__33441__auto____0 = (function (){
var statearr_51054 = [null,null,null,null,null,null,null,null,null];
(statearr_51054[(0)] = cljs$core$async$state_machine__33441__auto__);

(statearr_51054[(1)] = (1));

return statearr_51054;
});
var cljs$core$async$state_machine__33441__auto____1 = (function (state_51036){
while(true){
var ret_value__33442__auto__ = (function (){try{while(true){
var result__33443__auto__ = switch__33440__auto__.call(null,state_51036);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33443__auto__;
}
break;
}
}catch (e51055){if((e51055 instanceof Object)){
var ex__33444__auto__ = e51055;
var statearr_51056_51074 = state_51036;
(statearr_51056_51074[(5)] = ex__33444__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51036);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51055;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51075 = state_51036;
state_51036 = G__51075;
continue;
} else {
return ret_value__33442__auto__;
}
break;
}
});
cljs$core$async$state_machine__33441__auto__ = function(state_51036){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33441__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33441__auto____1.call(this,state_51036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33441__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33441__auto____0;
cljs$core$async$state_machine__33441__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33441__auto____1;
return cljs$core$async$state_machine__33441__auto__;
})()
})();
var state__33465__auto__ = (function (){var statearr_51057 = f__33464__auto__.call(null);
(statearr_51057[(6)] = c__33463__auto___51059);

return statearr_51057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33465__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__33463__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33464__auto__ = (function (){var switch__33440__auto__ = (function (state_51096){
var state_val_51097 = (state_51096[(1)]);
if((state_val_51097 === (7))){
var inst_51092 = (state_51096[(2)]);
var state_51096__$1 = state_51096;
var statearr_51098_51116 = state_51096__$1;
(statearr_51098_51116[(2)] = inst_51092);

(statearr_51098_51116[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51097 === (1))){
var inst_51076 = init;
var state_51096__$1 = (function (){var statearr_51099 = state_51096;
(statearr_51099[(7)] = inst_51076);

return statearr_51099;
})();
var statearr_51100_51117 = state_51096__$1;
(statearr_51100_51117[(2)] = null);

(statearr_51100_51117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51097 === (4))){
var inst_51079 = (state_51096[(8)]);
var inst_51079__$1 = (state_51096[(2)]);
var inst_51080 = (inst_51079__$1 == null);
var state_51096__$1 = (function (){var statearr_51101 = state_51096;
(statearr_51101[(8)] = inst_51079__$1);

return statearr_51101;
})();
if(cljs.core.truth_(inst_51080)){
var statearr_51102_51118 = state_51096__$1;
(statearr_51102_51118[(1)] = (5));

} else {
var statearr_51103_51119 = state_51096__$1;
(statearr_51103_51119[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51097 === (6))){
var inst_51079 = (state_51096[(8)]);
var inst_51076 = (state_51096[(7)]);
var inst_51083 = (state_51096[(9)]);
var inst_51083__$1 = f.call(null,inst_51076,inst_51079);
var inst_51084 = cljs.core.reduced_QMARK_.call(null,inst_51083__$1);
var state_51096__$1 = (function (){var statearr_51104 = state_51096;
(statearr_51104[(9)] = inst_51083__$1);

return statearr_51104;
})();
if(inst_51084){
var statearr_51105_51120 = state_51096__$1;
(statearr_51105_51120[(1)] = (8));

} else {
var statearr_51106_51121 = state_51096__$1;
(statearr_51106_51121[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51097 === (3))){
var inst_51094 = (state_51096[(2)]);
var state_51096__$1 = state_51096;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51096__$1,inst_51094);
} else {
if((state_val_51097 === (2))){
var state_51096__$1 = state_51096;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51096__$1,(4),ch);
} else {
if((state_val_51097 === (9))){
var inst_51083 = (state_51096[(9)]);
var inst_51076 = inst_51083;
var state_51096__$1 = (function (){var statearr_51107 = state_51096;
(statearr_51107[(7)] = inst_51076);

return statearr_51107;
})();
var statearr_51108_51122 = state_51096__$1;
(statearr_51108_51122[(2)] = null);

(statearr_51108_51122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51097 === (5))){
var inst_51076 = (state_51096[(7)]);
var state_51096__$1 = state_51096;
var statearr_51109_51123 = state_51096__$1;
(statearr_51109_51123[(2)] = inst_51076);

(statearr_51109_51123[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51097 === (10))){
var inst_51090 = (state_51096[(2)]);
var state_51096__$1 = state_51096;
var statearr_51110_51124 = state_51096__$1;
(statearr_51110_51124[(2)] = inst_51090);

(statearr_51110_51124[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51097 === (8))){
var inst_51083 = (state_51096[(9)]);
var inst_51086 = cljs.core.deref.call(null,inst_51083);
var state_51096__$1 = state_51096;
var statearr_51111_51125 = state_51096__$1;
(statearr_51111_51125[(2)] = inst_51086);

(statearr_51111_51125[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__33441__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33441__auto____0 = (function (){
var statearr_51112 = [null,null,null,null,null,null,null,null,null,null];
(statearr_51112[(0)] = cljs$core$async$reduce_$_state_machine__33441__auto__);

(statearr_51112[(1)] = (1));

return statearr_51112;
});
var cljs$core$async$reduce_$_state_machine__33441__auto____1 = (function (state_51096){
while(true){
var ret_value__33442__auto__ = (function (){try{while(true){
var result__33443__auto__ = switch__33440__auto__.call(null,state_51096);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33443__auto__;
}
break;
}
}catch (e51113){if((e51113 instanceof Object)){
var ex__33444__auto__ = e51113;
var statearr_51114_51126 = state_51096;
(statearr_51114_51126[(5)] = ex__33444__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51096);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51113;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51127 = state_51096;
state_51096 = G__51127;
continue;
} else {
return ret_value__33442__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33441__auto__ = function(state_51096){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33441__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33441__auto____1.call(this,state_51096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__33441__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33441__auto____0;
cljs$core$async$reduce_$_state_machine__33441__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33441__auto____1;
return cljs$core$async$reduce_$_state_machine__33441__auto__;
})()
})();
var state__33465__auto__ = (function (){var statearr_51115 = f__33464__auto__.call(null);
(statearr_51115[(6)] = c__33463__auto__);

return statearr_51115;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33465__auto__);
}));

return c__33463__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__33463__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33464__auto__ = (function (){var switch__33440__auto__ = (function (state_51133){
var state_val_51134 = (state_51133[(1)]);
if((state_val_51134 === (1))){
var inst_51128 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_51133__$1 = state_51133;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51133__$1,(2),inst_51128);
} else {
if((state_val_51134 === (2))){
var inst_51130 = (state_51133[(2)]);
var inst_51131 = f__$1.call(null,inst_51130);
var state_51133__$1 = state_51133;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51133__$1,inst_51131);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__33441__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33441__auto____0 = (function (){
var statearr_51135 = [null,null,null,null,null,null,null];
(statearr_51135[(0)] = cljs$core$async$transduce_$_state_machine__33441__auto__);

(statearr_51135[(1)] = (1));

return statearr_51135;
});
var cljs$core$async$transduce_$_state_machine__33441__auto____1 = (function (state_51133){
while(true){
var ret_value__33442__auto__ = (function (){try{while(true){
var result__33443__auto__ = switch__33440__auto__.call(null,state_51133);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33443__auto__;
}
break;
}
}catch (e51136){if((e51136 instanceof Object)){
var ex__33444__auto__ = e51136;
var statearr_51137_51139 = state_51133;
(statearr_51137_51139[(5)] = ex__33444__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51133);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51136;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51140 = state_51133;
state_51133 = G__51140;
continue;
} else {
return ret_value__33442__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33441__auto__ = function(state_51133){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33441__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33441__auto____1.call(this,state_51133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__33441__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33441__auto____0;
cljs$core$async$transduce_$_state_machine__33441__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33441__auto____1;
return cljs$core$async$transduce_$_state_machine__33441__auto__;
})()
})();
var state__33465__auto__ = (function (){var statearr_51138 = f__33464__auto__.call(null);
(statearr_51138[(6)] = c__33463__auto__);

return statearr_51138;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33465__auto__);
}));

return c__33463__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__51142 = arguments.length;
switch (G__51142) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__33463__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33464__auto__ = (function (){var switch__33440__auto__ = (function (state_51167){
var state_val_51168 = (state_51167[(1)]);
if((state_val_51168 === (7))){
var inst_51149 = (state_51167[(2)]);
var state_51167__$1 = state_51167;
var statearr_51169_51190 = state_51167__$1;
(statearr_51169_51190[(2)] = inst_51149);

(statearr_51169_51190[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51168 === (1))){
var inst_51143 = cljs.core.seq.call(null,coll);
var inst_51144 = inst_51143;
var state_51167__$1 = (function (){var statearr_51170 = state_51167;
(statearr_51170[(7)] = inst_51144);

return statearr_51170;
})();
var statearr_51171_51191 = state_51167__$1;
(statearr_51171_51191[(2)] = null);

(statearr_51171_51191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51168 === (4))){
var inst_51144 = (state_51167[(7)]);
var inst_51147 = cljs.core.first.call(null,inst_51144);
var state_51167__$1 = state_51167;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51167__$1,(7),ch,inst_51147);
} else {
if((state_val_51168 === (13))){
var inst_51161 = (state_51167[(2)]);
var state_51167__$1 = state_51167;
var statearr_51172_51192 = state_51167__$1;
(statearr_51172_51192[(2)] = inst_51161);

(statearr_51172_51192[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51168 === (6))){
var inst_51152 = (state_51167[(2)]);
var state_51167__$1 = state_51167;
if(cljs.core.truth_(inst_51152)){
var statearr_51173_51193 = state_51167__$1;
(statearr_51173_51193[(1)] = (8));

} else {
var statearr_51174_51194 = state_51167__$1;
(statearr_51174_51194[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51168 === (3))){
var inst_51165 = (state_51167[(2)]);
var state_51167__$1 = state_51167;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51167__$1,inst_51165);
} else {
if((state_val_51168 === (12))){
var state_51167__$1 = state_51167;
var statearr_51175_51195 = state_51167__$1;
(statearr_51175_51195[(2)] = null);

(statearr_51175_51195[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51168 === (2))){
var inst_51144 = (state_51167[(7)]);
var state_51167__$1 = state_51167;
if(cljs.core.truth_(inst_51144)){
var statearr_51176_51196 = state_51167__$1;
(statearr_51176_51196[(1)] = (4));

} else {
var statearr_51177_51197 = state_51167__$1;
(statearr_51177_51197[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51168 === (11))){
var inst_51158 = cljs.core.async.close_BANG_.call(null,ch);
var state_51167__$1 = state_51167;
var statearr_51178_51198 = state_51167__$1;
(statearr_51178_51198[(2)] = inst_51158);

(statearr_51178_51198[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51168 === (9))){
var state_51167__$1 = state_51167;
if(cljs.core.truth_(close_QMARK_)){
var statearr_51179_51199 = state_51167__$1;
(statearr_51179_51199[(1)] = (11));

} else {
var statearr_51180_51200 = state_51167__$1;
(statearr_51180_51200[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51168 === (5))){
var inst_51144 = (state_51167[(7)]);
var state_51167__$1 = state_51167;
var statearr_51181_51201 = state_51167__$1;
(statearr_51181_51201[(2)] = inst_51144);

(statearr_51181_51201[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51168 === (10))){
var inst_51163 = (state_51167[(2)]);
var state_51167__$1 = state_51167;
var statearr_51182_51202 = state_51167__$1;
(statearr_51182_51202[(2)] = inst_51163);

(statearr_51182_51202[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51168 === (8))){
var inst_51144 = (state_51167[(7)]);
var inst_51154 = cljs.core.next.call(null,inst_51144);
var inst_51144__$1 = inst_51154;
var state_51167__$1 = (function (){var statearr_51183 = state_51167;
(statearr_51183[(7)] = inst_51144__$1);

return statearr_51183;
})();
var statearr_51184_51203 = state_51167__$1;
(statearr_51184_51203[(2)] = null);

(statearr_51184_51203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33441__auto__ = null;
var cljs$core$async$state_machine__33441__auto____0 = (function (){
var statearr_51185 = [null,null,null,null,null,null,null,null];
(statearr_51185[(0)] = cljs$core$async$state_machine__33441__auto__);

(statearr_51185[(1)] = (1));

return statearr_51185;
});
var cljs$core$async$state_machine__33441__auto____1 = (function (state_51167){
while(true){
var ret_value__33442__auto__ = (function (){try{while(true){
var result__33443__auto__ = switch__33440__auto__.call(null,state_51167);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33443__auto__;
}
break;
}
}catch (e51186){if((e51186 instanceof Object)){
var ex__33444__auto__ = e51186;
var statearr_51187_51204 = state_51167;
(statearr_51187_51204[(5)] = ex__33444__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51167);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51186;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51205 = state_51167;
state_51167 = G__51205;
continue;
} else {
return ret_value__33442__auto__;
}
break;
}
});
cljs$core$async$state_machine__33441__auto__ = function(state_51167){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33441__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33441__auto____1.call(this,state_51167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33441__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33441__auto____0;
cljs$core$async$state_machine__33441__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33441__auto____1;
return cljs$core$async$state_machine__33441__auto__;
})()
})();
var state__33465__auto__ = (function (){var statearr_51188 = f__33464__auto__.call(null);
(statearr_51188[(6)] = c__33463__auto__);

return statearr_51188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33465__auto__);
}));

return c__33463__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_51206 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,_);
} else {
var m__4519__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_51206.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_51207 = (function (m,ch,close_QMARK_){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4519__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_51207.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_51208 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,m,ch);
} else {
var m__4519__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_51208.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_51209 = (function (m){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,m);
} else {
var m__4519__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_51209.call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51210 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51210 = (function (ch,cs,meta51211){
this.ch = ch;
this.cs = cs;
this.meta51211 = meta51211;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51210.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51212,meta51211__$1){
var self__ = this;
var _51212__$1 = this;
return (new cljs.core.async.t_cljs$core$async51210(self__.ch,self__.cs,meta51211__$1));
}));

(cljs.core.async.t_cljs$core$async51210.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51212){
var self__ = this;
var _51212__$1 = this;
return self__.meta51211;
}));

(cljs.core.async.t_cljs$core$async51210.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51210.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async51210.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51210.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async51210.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async51210.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async51210.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta51211","meta51211",-1685927650,null)], null);
}));

(cljs.core.async.t_cljs$core$async51210.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51210.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51210");

(cljs.core.async.t_cljs$core$async51210.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"cljs.core.async/t_cljs$core$async51210");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51210.
 */
cljs.core.async.__GT_t_cljs$core$async51210 = (function cljs$core$async$mult_$___GT_t_cljs$core$async51210(ch__$1,cs__$1,meta51211){
return (new cljs.core.async.t_cljs$core$async51210(ch__$1,cs__$1,meta51211));
});

}

return (new cljs.core.async.t_cljs$core$async51210(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__33463__auto___51428 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33464__auto__ = (function (){var switch__33440__auto__ = (function (state_51345){
var state_val_51346 = (state_51345[(1)]);
if((state_val_51346 === (7))){
var inst_51341 = (state_51345[(2)]);
var state_51345__$1 = state_51345;
var statearr_51347_51429 = state_51345__$1;
(statearr_51347_51429[(2)] = inst_51341);

(statearr_51347_51429[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51346 === (20))){
var inst_51246 = (state_51345[(7)]);
var inst_51258 = cljs.core.first.call(null,inst_51246);
var inst_51259 = cljs.core.nth.call(null,inst_51258,(0),null);
var inst_51260 = cljs.core.nth.call(null,inst_51258,(1),null);
var state_51345__$1 = (function (){var statearr_51348 = state_51345;
(statearr_51348[(8)] = inst_51259);

return statearr_51348;
})();
if(cljs.core.truth_(inst_51260)){
var statearr_51349_51430 = state_51345__$1;
(statearr_51349_51430[(1)] = (22));

} else {
var statearr_51350_51431 = state_51345__$1;
(statearr_51350_51431[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51346 === (27))){
var inst_51295 = (state_51345[(9)]);
var inst_51288 = (state_51345[(10)]);
var inst_51290 = (state_51345[(11)]);
var inst_51215 = (state_51345[(12)]);
var inst_51295__$1 = cljs.core._nth.call(null,inst_51288,inst_51290);
var inst_51296 = cljs.core.async.put_BANG_.call(null,inst_51295__$1,inst_51215,done);
var state_51345__$1 = (function (){var statearr_51351 = state_51345;
(statearr_51351[(9)] = inst_51295__$1);

return statearr_51351;
})();
if(cljs.core.truth_(inst_51296)){
var statearr_51352_51432 = state_51345__$1;
(statearr_51352_51432[(1)] = (30));

} else {
var statearr_51353_51433 = state_51345__$1;
(statearr_51353_51433[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51346 === (1))){
var state_51345__$1 = state_51345;
var statearr_51354_51434 = state_51345__$1;
(statearr_51354_51434[(2)] = null);

(statearr_51354_51434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51346 === (24))){
var inst_51246 = (state_51345[(7)]);
var inst_51265 = (state_51345[(2)]);
var inst_51266 = cljs.core.next.call(null,inst_51246);
var inst_51224 = inst_51266;
var inst_51225 = null;
var inst_51226 = (0);
var inst_51227 = (0);
var state_51345__$1 = (function (){var statearr_51355 = state_51345;
(statearr_51355[(13)] = inst_51225);

(statearr_51355[(14)] = inst_51265);

(statearr_51355[(15)] = inst_51224);

(statearr_51355[(16)] = inst_51226);

(statearr_51355[(17)] = inst_51227);

return statearr_51355;
})();
var statearr_51356_51435 = state_51345__$1;
(statearr_51356_51435[(2)] = null);

(statearr_51356_51435[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51346 === (39))){
var state_51345__$1 = state_51345;
var statearr_51360_51436 = state_51345__$1;
(statearr_51360_51436[(2)] = null);

(statearr_51360_51436[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51346 === (4))){
var inst_51215 = (state_51345[(12)]);
var inst_51215__$1 = (state_51345[(2)]);
var inst_51216 = (inst_51215__$1 == null);
var state_51345__$1 = (function (){var statearr_51361 = state_51345;
(statearr_51361[(12)] = inst_51215__$1);

return statearr_51361;
})();
if(cljs.core.truth_(inst_51216)){
var statearr_51362_51437 = state_51345__$1;
(statearr_51362_51437[(1)] = (5));

} else {
var statearr_51363_51438 = state_51345__$1;
(statearr_51363_51438[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51346 === (15))){
var inst_51225 = (state_51345[(13)]);
var inst_51224 = (state_51345[(15)]);
var inst_51226 = (state_51345[(16)]);
var inst_51227 = (state_51345[(17)]);
var inst_51242 = (state_51345[(2)]);
var inst_51243 = (inst_51227 + (1));
var tmp51357 = inst_51225;
var tmp51358 = inst_51224;
var tmp51359 = inst_51226;
var inst_51224__$1 = tmp51358;
var inst_51225__$1 = tmp51357;
var inst_51226__$1 = tmp51359;
var inst_51227__$1 = inst_51243;
var state_51345__$1 = (function (){var statearr_51364 = state_51345;
(statearr_51364[(13)] = inst_51225__$1);

(statearr_51364[(18)] = inst_51242);

(statearr_51364[(15)] = inst_51224__$1);

(statearr_51364[(16)] = inst_51226__$1);

(statearr_51364[(17)] = inst_51227__$1);

return statearr_51364;
})();
var statearr_51365_51439 = state_51345__$1;
(statearr_51365_51439[(2)] = null);

(statearr_51365_51439[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51346 === (21))){
var inst_51269 = (state_51345[(2)]);
var state_51345__$1 = state_51345;
var statearr_51369_51440 = state_51345__$1;
(statearr_51369_51440[(2)] = inst_51269);

(statearr_51369_51440[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51346 === (31))){
var inst_51295 = (state_51345[(9)]);
var inst_51299 = cljs.core.async.untap_STAR_.call(null,m,inst_51295);
var state_51345__$1 = state_51345;
var statearr_51370_51441 = state_51345__$1;
(statearr_51370_51441[(2)] = inst_51299);

(statearr_51370_51441[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51346 === (32))){
var inst_51287 = (state_51345[(19)]);
var inst_51288 = (state_51345[(10)]);
var inst_51290 = (state_51345[(11)]);
var inst_51289 = (state_51345[(20)]);
var inst_51301 = (state_51345[(2)]);
var inst_51302 = (inst_51290 + (1));
var tmp51366 = inst_51287;
var tmp51367 = inst_51288;
var tmp51368 = inst_51289;
var inst_51287__$1 = tmp51366;
var inst_51288__$1 = tmp51367;
var inst_51289__$1 = tmp51368;
var inst_51290__$1 = inst_51302;
var state_51345__$1 = (function (){var statearr_51371 = state_51345;
(statearr_51371[(21)] = inst_51301);

(statearr_51371[(19)] = inst_51287__$1);

(statearr_51371[(10)] = inst_51288__$1);

(statearr_51371[(11)] = inst_51290__$1);

(statearr_51371[(20)] = inst_51289__$1);

return statearr_51371;
})();
var statearr_51372_51442 = state_51345__$1;
(statearr_51372_51442[(2)] = null);

(statearr_51372_51442[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51346 === (40))){
var inst_51314 = (state_51345[(22)]);
var inst_51318 = cljs.core.async.untap_STAR_.call(null,m,inst_51314);
var state_51345__$1 = state_51345;
var statearr_51373_51443 = state_51345__$1;
(statearr_51373_51443[(2)] = inst_51318);

(statearr_51373_51443[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51346 === (33))){
var inst_51305 = (state_51345[(23)]);
var inst_51307 = cljs.core.chunked_seq_QMARK_.call(null,inst_51305);
var state_51345__$1 = state_51345;
if(inst_51307){
var statearr_51374_51444 = state_51345__$1;
(statearr_51374_51444[(1)] = (36));

} else {
var statearr_51375_51445 = state_51345__$1;
(statearr_51375_51445[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51346 === (13))){
var inst_51236 = (state_51345[(24)]);
var inst_51239 = cljs.core.async.close_BANG_.call(null,inst_51236);
var state_51345__$1 = state_51345;
var statearr_51376_51446 = state_51345__$1;
(statearr_51376_51446[(2)] = inst_51239);

(statearr_51376_51446[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51346 === (22))){
var inst_51259 = (state_51345[(8)]);
var inst_51262 = cljs.core.async.close_BANG_.call(null,inst_51259);
var state_51345__$1 = state_51345;
var statearr_51377_51447 = state_51345__$1;
(statearr_51377_51447[(2)] = inst_51262);

(statearr_51377_51447[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51346 === (36))){
var inst_51305 = (state_51345[(23)]);
var inst_51309 = cljs.core.chunk_first.call(null,inst_51305);
var inst_51310 = cljs.core.chunk_rest.call(null,inst_51305);
var inst_51311 = cljs.core.count.call(null,inst_51309);
var inst_51287 = inst_51310;
var inst_51288 = inst_51309;
var inst_51289 = inst_51311;
var inst_51290 = (0);
var state_51345__$1 = (function (){var statearr_51378 = state_51345;
(statearr_51378[(19)] = inst_51287);

(statearr_51378[(10)] = inst_51288);

(statearr_51378[(11)] = inst_51290);

(statearr_51378[(20)] = inst_51289);

return statearr_51378;
})();
var statearr_51379_51448 = state_51345__$1;
(statearr_51379_51448[(2)] = null);

(statearr_51379_51448[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51346 === (41))){
var inst_51305 = (state_51345[(23)]);
var inst_51320 = (state_51345[(2)]);
var inst_51321 = cljs.core.next.call(null,inst_51305);
var inst_51287 = inst_51321;
var inst_51288 = null;
var inst_51289 = (0);
var inst_51290 = (0);
var state_51345__$1 = (function (){var statearr_51380 = state_51345;
(statearr_51380[(19)] = inst_51287);

(statearr_51380[(10)] = inst_51288);

(statearr_51380[(25)] = inst_51320);

(statearr_51380[(11)] = inst_51290);

(statearr_51380[(20)] = inst_51289);

return statearr_51380;
})();
var statearr_51381_51449 = state_51345__$1;
(statearr_51381_51449[(2)] = null);

(statearr_51381_51449[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51346 === (43))){
var state_51345__$1 = state_51345;
var statearr_51382_51450 = state_51345__$1;
(statearr_51382_51450[(2)] = null);

(statearr_51382_51450[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51346 === (29))){
var inst_51329 = (state_51345[(2)]);
var state_51345__$1 = state_51345;
var statearr_51383_51451 = state_51345__$1;
(statearr_51383_51451[(2)] = inst_51329);

(statearr_51383_51451[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51346 === (44))){
var inst_51338 = (state_51345[(2)]);
var state_51345__$1 = (function (){var statearr_51384 = state_51345;
(statearr_51384[(26)] = inst_51338);

return statearr_51384;
})();
var statearr_51385_51452 = state_51345__$1;
(statearr_51385_51452[(2)] = null);

(statearr_51385_51452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51346 === (6))){
var inst_51279 = (state_51345[(27)]);
var inst_51278 = cljs.core.deref.call(null,cs);
var inst_51279__$1 = cljs.core.keys.call(null,inst_51278);
var inst_51280 = cljs.core.count.call(null,inst_51279__$1);
var inst_51281 = cljs.core.reset_BANG_.call(null,dctr,inst_51280);
var inst_51286 = cljs.core.seq.call(null,inst_51279__$1);
var inst_51287 = inst_51286;
var inst_51288 = null;
var inst_51289 = (0);
var inst_51290 = (0);
var state_51345__$1 = (function (){var statearr_51386 = state_51345;
(statearr_51386[(19)] = inst_51287);

(statearr_51386[(28)] = inst_51281);

(statearr_51386[(10)] = inst_51288);

(statearr_51386[(27)] = inst_51279__$1);

(statearr_51386[(11)] = inst_51290);

(statearr_51386[(20)] = inst_51289);

return statearr_51386;
})();
var statearr_51387_51453 = state_51345__$1;
(statearr_51387_51453[(2)] = null);

(statearr_51387_51453[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51346 === (28))){
var inst_51287 = (state_51345[(19)]);
var inst_51305 = (state_51345[(23)]);
var inst_51305__$1 = cljs.core.seq.call(null,inst_51287);
var state_51345__$1 = (function (){var statearr_51388 = state_51345;
(statearr_51388[(23)] = inst_51305__$1);

return statearr_51388;
})();
if(inst_51305__$1){
var statearr_51389_51454 = state_51345__$1;
(statearr_51389_51454[(1)] = (33));

} else {
var statearr_51390_51455 = state_51345__$1;
(statearr_51390_51455[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51346 === (25))){
var inst_51290 = (state_51345[(11)]);
var inst_51289 = (state_51345[(20)]);
var inst_51292 = (inst_51290 < inst_51289);
var inst_51293 = inst_51292;
var state_51345__$1 = state_51345;
if(cljs.core.truth_(inst_51293)){
var statearr_51391_51456 = state_51345__$1;
(statearr_51391_51456[(1)] = (27));

} else {
var statearr_51392_51457 = state_51345__$1;
(statearr_51392_51457[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51346 === (34))){
var state_51345__$1 = state_51345;
var statearr_51393_51458 = state_51345__$1;
(statearr_51393_51458[(2)] = null);

(statearr_51393_51458[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51346 === (17))){
var state_51345__$1 = state_51345;
var statearr_51394_51459 = state_51345__$1;
(statearr_51394_51459[(2)] = null);

(statearr_51394_51459[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51346 === (3))){
var inst_51343 = (state_51345[(2)]);
var state_51345__$1 = state_51345;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51345__$1,inst_51343);
} else {
if((state_val_51346 === (12))){
var inst_51274 = (state_51345[(2)]);
var state_51345__$1 = state_51345;
var statearr_51395_51460 = state_51345__$1;
(statearr_51395_51460[(2)] = inst_51274);

(statearr_51395_51460[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51346 === (2))){
var state_51345__$1 = state_51345;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51345__$1,(4),ch);
} else {
if((state_val_51346 === (23))){
var state_51345__$1 = state_51345;
var statearr_51396_51461 = state_51345__$1;
(statearr_51396_51461[(2)] = null);

(statearr_51396_51461[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51346 === (35))){
var inst_51327 = (state_51345[(2)]);
var state_51345__$1 = state_51345;
var statearr_51397_51462 = state_51345__$1;
(statearr_51397_51462[(2)] = inst_51327);

(statearr_51397_51462[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51346 === (19))){
var inst_51246 = (state_51345[(7)]);
var inst_51250 = cljs.core.chunk_first.call(null,inst_51246);
var inst_51251 = cljs.core.chunk_rest.call(null,inst_51246);
var inst_51252 = cljs.core.count.call(null,inst_51250);
var inst_51224 = inst_51251;
var inst_51225 = inst_51250;
var inst_51226 = inst_51252;
var inst_51227 = (0);
var state_51345__$1 = (function (){var statearr_51398 = state_51345;
(statearr_51398[(13)] = inst_51225);

(statearr_51398[(15)] = inst_51224);

(statearr_51398[(16)] = inst_51226);

(statearr_51398[(17)] = inst_51227);

return statearr_51398;
})();
var statearr_51399_51463 = state_51345__$1;
(statearr_51399_51463[(2)] = null);

(statearr_51399_51463[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51346 === (11))){
var inst_51224 = (state_51345[(15)]);
var inst_51246 = (state_51345[(7)]);
var inst_51246__$1 = cljs.core.seq.call(null,inst_51224);
var state_51345__$1 = (function (){var statearr_51400 = state_51345;
(statearr_51400[(7)] = inst_51246__$1);

return statearr_51400;
})();
if(inst_51246__$1){
var statearr_51401_51464 = state_51345__$1;
(statearr_51401_51464[(1)] = (16));

} else {
var statearr_51402_51465 = state_51345__$1;
(statearr_51402_51465[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51346 === (9))){
var inst_51276 = (state_51345[(2)]);
var state_51345__$1 = state_51345;
var statearr_51403_51466 = state_51345__$1;
(statearr_51403_51466[(2)] = inst_51276);

(statearr_51403_51466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51346 === (5))){
var inst_51222 = cljs.core.deref.call(null,cs);
var inst_51223 = cljs.core.seq.call(null,inst_51222);
var inst_51224 = inst_51223;
var inst_51225 = null;
var inst_51226 = (0);
var inst_51227 = (0);
var state_51345__$1 = (function (){var statearr_51404 = state_51345;
(statearr_51404[(13)] = inst_51225);

(statearr_51404[(15)] = inst_51224);

(statearr_51404[(16)] = inst_51226);

(statearr_51404[(17)] = inst_51227);

return statearr_51404;
})();
var statearr_51405_51467 = state_51345__$1;
(statearr_51405_51467[(2)] = null);

(statearr_51405_51467[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51346 === (14))){
var state_51345__$1 = state_51345;
var statearr_51406_51468 = state_51345__$1;
(statearr_51406_51468[(2)] = null);

(statearr_51406_51468[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51346 === (45))){
var inst_51335 = (state_51345[(2)]);
var state_51345__$1 = state_51345;
var statearr_51407_51469 = state_51345__$1;
(statearr_51407_51469[(2)] = inst_51335);

(statearr_51407_51469[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51346 === (26))){
var inst_51279 = (state_51345[(27)]);
var inst_51331 = (state_51345[(2)]);
var inst_51332 = cljs.core.seq.call(null,inst_51279);
var state_51345__$1 = (function (){var statearr_51408 = state_51345;
(statearr_51408[(29)] = inst_51331);

return statearr_51408;
})();
if(inst_51332){
var statearr_51409_51470 = state_51345__$1;
(statearr_51409_51470[(1)] = (42));

} else {
var statearr_51410_51471 = state_51345__$1;
(statearr_51410_51471[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51346 === (16))){
var inst_51246 = (state_51345[(7)]);
var inst_51248 = cljs.core.chunked_seq_QMARK_.call(null,inst_51246);
var state_51345__$1 = state_51345;
if(inst_51248){
var statearr_51411_51472 = state_51345__$1;
(statearr_51411_51472[(1)] = (19));

} else {
var statearr_51412_51473 = state_51345__$1;
(statearr_51412_51473[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51346 === (38))){
var inst_51324 = (state_51345[(2)]);
var state_51345__$1 = state_51345;
var statearr_51413_51474 = state_51345__$1;
(statearr_51413_51474[(2)] = inst_51324);

(statearr_51413_51474[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51346 === (30))){
var state_51345__$1 = state_51345;
var statearr_51414_51475 = state_51345__$1;
(statearr_51414_51475[(2)] = null);

(statearr_51414_51475[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51346 === (10))){
var inst_51225 = (state_51345[(13)]);
var inst_51227 = (state_51345[(17)]);
var inst_51235 = cljs.core._nth.call(null,inst_51225,inst_51227);
var inst_51236 = cljs.core.nth.call(null,inst_51235,(0),null);
var inst_51237 = cljs.core.nth.call(null,inst_51235,(1),null);
var state_51345__$1 = (function (){var statearr_51415 = state_51345;
(statearr_51415[(24)] = inst_51236);

return statearr_51415;
})();
if(cljs.core.truth_(inst_51237)){
var statearr_51416_51476 = state_51345__$1;
(statearr_51416_51476[(1)] = (13));

} else {
var statearr_51417_51477 = state_51345__$1;
(statearr_51417_51477[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51346 === (18))){
var inst_51272 = (state_51345[(2)]);
var state_51345__$1 = state_51345;
var statearr_51418_51478 = state_51345__$1;
(statearr_51418_51478[(2)] = inst_51272);

(statearr_51418_51478[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51346 === (42))){
var state_51345__$1 = state_51345;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51345__$1,(45),dchan);
} else {
if((state_val_51346 === (37))){
var inst_51314 = (state_51345[(22)]);
var inst_51305 = (state_51345[(23)]);
var inst_51215 = (state_51345[(12)]);
var inst_51314__$1 = cljs.core.first.call(null,inst_51305);
var inst_51315 = cljs.core.async.put_BANG_.call(null,inst_51314__$1,inst_51215,done);
var state_51345__$1 = (function (){var statearr_51419 = state_51345;
(statearr_51419[(22)] = inst_51314__$1);

return statearr_51419;
})();
if(cljs.core.truth_(inst_51315)){
var statearr_51420_51479 = state_51345__$1;
(statearr_51420_51479[(1)] = (39));

} else {
var statearr_51421_51480 = state_51345__$1;
(statearr_51421_51480[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51346 === (8))){
var inst_51226 = (state_51345[(16)]);
var inst_51227 = (state_51345[(17)]);
var inst_51229 = (inst_51227 < inst_51226);
var inst_51230 = inst_51229;
var state_51345__$1 = state_51345;
if(cljs.core.truth_(inst_51230)){
var statearr_51422_51481 = state_51345__$1;
(statearr_51422_51481[(1)] = (10));

} else {
var statearr_51423_51482 = state_51345__$1;
(statearr_51423_51482[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__33441__auto__ = null;
var cljs$core$async$mult_$_state_machine__33441__auto____0 = (function (){
var statearr_51424 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51424[(0)] = cljs$core$async$mult_$_state_machine__33441__auto__);

(statearr_51424[(1)] = (1));

return statearr_51424;
});
var cljs$core$async$mult_$_state_machine__33441__auto____1 = (function (state_51345){
while(true){
var ret_value__33442__auto__ = (function (){try{while(true){
var result__33443__auto__ = switch__33440__auto__.call(null,state_51345);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33443__auto__;
}
break;
}
}catch (e51425){if((e51425 instanceof Object)){
var ex__33444__auto__ = e51425;
var statearr_51426_51483 = state_51345;
(statearr_51426_51483[(5)] = ex__33444__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51345);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51425;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51484 = state_51345;
state_51345 = G__51484;
continue;
} else {
return ret_value__33442__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33441__auto__ = function(state_51345){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33441__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33441__auto____1.call(this,state_51345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__33441__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33441__auto____0;
cljs$core$async$mult_$_state_machine__33441__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33441__auto____1;
return cljs$core$async$mult_$_state_machine__33441__auto__;
})()
})();
var state__33465__auto__ = (function (){var statearr_51427 = f__33464__auto__.call(null);
(statearr_51427[(6)] = c__33463__auto___51428);

return statearr_51427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33465__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__51486 = arguments.length;
switch (G__51486) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_51488 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,m,ch);
} else {
var m__4519__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_51488.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_51489 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,m,ch);
} else {
var m__4519__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_51489.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_51490 = (function (m){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,m);
} else {
var m__4519__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_51490.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_51491 = (function (m,state_map){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,m,state_map);
} else {
var m__4519__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_51491.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_51492 = (function (m,mode){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,m,mode);
} else {
var m__4519__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_51492.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___51502 = arguments.length;
var i__4830__auto___51503 = (0);
while(true){
if((i__4830__auto___51503 < len__4829__auto___51502)){
args__4835__auto__.push((arguments[i__4830__auto___51503]));

var G__51504 = (i__4830__auto___51503 + (1));
i__4830__auto___51503 = G__51504;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((3) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4836__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__51497){
var map__51498 = p__51497;
var map__51498__$1 = cljs.core.__destructure_map.call(null,map__51498);
var opts = map__51498__$1;
var statearr_51499_51505 = state;
(statearr_51499_51505[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_51500_51506 = state;
(statearr_51500_51506[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_51501_51507 = state;
(statearr_51501_51507[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq51493){
var G__51494 = cljs.core.first.call(null,seq51493);
var seq51493__$1 = cljs.core.next.call(null,seq51493);
var G__51495 = cljs.core.first.call(null,seq51493__$1);
var seq51493__$2 = cljs.core.next.call(null,seq51493__$1);
var G__51496 = cljs.core.first.call(null,seq51493__$2);
var seq51493__$3 = cljs.core.next.call(null,seq51493__$2);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51494,G__51495,G__51496,seq51493__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(1)));
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51508 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51508 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta51509){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta51509 = meta51509;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51508.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51510,meta51509__$1){
var self__ = this;
var _51510__$1 = this;
return (new cljs.core.async.t_cljs$core$async51508(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta51509__$1));
}));

(cljs.core.async.t_cljs$core$async51508.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51510){
var self__ = this;
var _51510__$1 = this;
return self__.meta51509;
}));

(cljs.core.async.t_cljs$core$async51508.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51508.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async51508.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51508.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async51508.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async51508.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async51508.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async51508.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async51508.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta51509","meta51509",-645212164,null)], null);
}));

(cljs.core.async.t_cljs$core$async51508.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51508.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51508");

(cljs.core.async.t_cljs$core$async51508.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"cljs.core.async/t_cljs$core$async51508");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51508.
 */
cljs.core.async.__GT_t_cljs$core$async51508 = (function cljs$core$async$mix_$___GT_t_cljs$core$async51508(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta51509){
return (new cljs.core.async.t_cljs$core$async51508(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta51509));
});

}

return (new cljs.core.async.t_cljs$core$async51508(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33463__auto___51622 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33464__auto__ = (function (){var switch__33440__auto__ = (function (state_51578){
var state_val_51579 = (state_51578[(1)]);
if((state_val_51579 === (7))){
var inst_51538 = (state_51578[(2)]);
var state_51578__$1 = state_51578;
if(cljs.core.truth_(inst_51538)){
var statearr_51580_51623 = state_51578__$1;
(statearr_51580_51623[(1)] = (8));

} else {
var statearr_51581_51624 = state_51578__$1;
(statearr_51581_51624[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51579 === (20))){
var inst_51531 = (state_51578[(7)]);
var state_51578__$1 = state_51578;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51578__$1,(23),out,inst_51531);
} else {
if((state_val_51579 === (1))){
var inst_51514 = calc_state.call(null);
var inst_51515 = cljs.core.__destructure_map.call(null,inst_51514);
var inst_51516 = cljs.core.get.call(null,inst_51515,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_51517 = cljs.core.get.call(null,inst_51515,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_51518 = cljs.core.get.call(null,inst_51515,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_51519 = inst_51514;
var state_51578__$1 = (function (){var statearr_51582 = state_51578;
(statearr_51582[(8)] = inst_51516);

(statearr_51582[(9)] = inst_51518);

(statearr_51582[(10)] = inst_51519);

(statearr_51582[(11)] = inst_51517);

return statearr_51582;
})();
var statearr_51583_51625 = state_51578__$1;
(statearr_51583_51625[(2)] = null);

(statearr_51583_51625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51579 === (24))){
var inst_51522 = (state_51578[(12)]);
var inst_51519 = inst_51522;
var state_51578__$1 = (function (){var statearr_51584 = state_51578;
(statearr_51584[(10)] = inst_51519);

return statearr_51584;
})();
var statearr_51585_51626 = state_51578__$1;
(statearr_51585_51626[(2)] = null);

(statearr_51585_51626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51579 === (4))){
var inst_51531 = (state_51578[(7)]);
var inst_51533 = (state_51578[(13)]);
var inst_51530 = (state_51578[(2)]);
var inst_51531__$1 = cljs.core.nth.call(null,inst_51530,(0),null);
var inst_51532 = cljs.core.nth.call(null,inst_51530,(1),null);
var inst_51533__$1 = (inst_51531__$1 == null);
var state_51578__$1 = (function (){var statearr_51586 = state_51578;
(statearr_51586[(14)] = inst_51532);

(statearr_51586[(7)] = inst_51531__$1);

(statearr_51586[(13)] = inst_51533__$1);

return statearr_51586;
})();
if(cljs.core.truth_(inst_51533__$1)){
var statearr_51587_51627 = state_51578__$1;
(statearr_51587_51627[(1)] = (5));

} else {
var statearr_51588_51628 = state_51578__$1;
(statearr_51588_51628[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51579 === (15))){
var inst_51523 = (state_51578[(15)]);
var inst_51552 = (state_51578[(16)]);
var inst_51552__$1 = cljs.core.empty_QMARK_.call(null,inst_51523);
var state_51578__$1 = (function (){var statearr_51589 = state_51578;
(statearr_51589[(16)] = inst_51552__$1);

return statearr_51589;
})();
if(inst_51552__$1){
var statearr_51590_51629 = state_51578__$1;
(statearr_51590_51629[(1)] = (17));

} else {
var statearr_51591_51630 = state_51578__$1;
(statearr_51591_51630[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51579 === (21))){
var inst_51522 = (state_51578[(12)]);
var inst_51519 = inst_51522;
var state_51578__$1 = (function (){var statearr_51592 = state_51578;
(statearr_51592[(10)] = inst_51519);

return statearr_51592;
})();
var statearr_51593_51631 = state_51578__$1;
(statearr_51593_51631[(2)] = null);

(statearr_51593_51631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51579 === (13))){
var inst_51545 = (state_51578[(2)]);
var inst_51546 = calc_state.call(null);
var inst_51519 = inst_51546;
var state_51578__$1 = (function (){var statearr_51594 = state_51578;
(statearr_51594[(10)] = inst_51519);

(statearr_51594[(17)] = inst_51545);

return statearr_51594;
})();
var statearr_51595_51632 = state_51578__$1;
(statearr_51595_51632[(2)] = null);

(statearr_51595_51632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51579 === (22))){
var inst_51572 = (state_51578[(2)]);
var state_51578__$1 = state_51578;
var statearr_51596_51633 = state_51578__$1;
(statearr_51596_51633[(2)] = inst_51572);

(statearr_51596_51633[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51579 === (6))){
var inst_51532 = (state_51578[(14)]);
var inst_51536 = cljs.core._EQ_.call(null,inst_51532,change);
var state_51578__$1 = state_51578;
var statearr_51597_51634 = state_51578__$1;
(statearr_51597_51634[(2)] = inst_51536);

(statearr_51597_51634[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51579 === (25))){
var state_51578__$1 = state_51578;
var statearr_51598_51635 = state_51578__$1;
(statearr_51598_51635[(2)] = null);

(statearr_51598_51635[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51579 === (17))){
var inst_51532 = (state_51578[(14)]);
var inst_51524 = (state_51578[(18)]);
var inst_51554 = inst_51524.call(null,inst_51532);
var inst_51555 = cljs.core.not.call(null,inst_51554);
var state_51578__$1 = state_51578;
var statearr_51599_51636 = state_51578__$1;
(statearr_51599_51636[(2)] = inst_51555);

(statearr_51599_51636[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51579 === (3))){
var inst_51576 = (state_51578[(2)]);
var state_51578__$1 = state_51578;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51578__$1,inst_51576);
} else {
if((state_val_51579 === (12))){
var state_51578__$1 = state_51578;
var statearr_51600_51637 = state_51578__$1;
(statearr_51600_51637[(2)] = null);

(statearr_51600_51637[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51579 === (2))){
var inst_51522 = (state_51578[(12)]);
var inst_51519 = (state_51578[(10)]);
var inst_51522__$1 = cljs.core.__destructure_map.call(null,inst_51519);
var inst_51523 = cljs.core.get.call(null,inst_51522__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_51524 = cljs.core.get.call(null,inst_51522__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_51525 = cljs.core.get.call(null,inst_51522__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_51578__$1 = (function (){var statearr_51601 = state_51578;
(statearr_51601[(12)] = inst_51522__$1);

(statearr_51601[(18)] = inst_51524);

(statearr_51601[(15)] = inst_51523);

return statearr_51601;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_51578__$1,(4),inst_51525);
} else {
if((state_val_51579 === (23))){
var inst_51563 = (state_51578[(2)]);
var state_51578__$1 = state_51578;
if(cljs.core.truth_(inst_51563)){
var statearr_51602_51638 = state_51578__$1;
(statearr_51602_51638[(1)] = (24));

} else {
var statearr_51603_51639 = state_51578__$1;
(statearr_51603_51639[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51579 === (19))){
var inst_51558 = (state_51578[(2)]);
var state_51578__$1 = state_51578;
var statearr_51604_51640 = state_51578__$1;
(statearr_51604_51640[(2)] = inst_51558);

(statearr_51604_51640[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51579 === (11))){
var inst_51532 = (state_51578[(14)]);
var inst_51542 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_51532);
var state_51578__$1 = state_51578;
var statearr_51605_51641 = state_51578__$1;
(statearr_51605_51641[(2)] = inst_51542);

(statearr_51605_51641[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51579 === (9))){
var inst_51532 = (state_51578[(14)]);
var inst_51523 = (state_51578[(15)]);
var inst_51549 = (state_51578[(19)]);
var inst_51549__$1 = inst_51523.call(null,inst_51532);
var state_51578__$1 = (function (){var statearr_51606 = state_51578;
(statearr_51606[(19)] = inst_51549__$1);

return statearr_51606;
})();
if(cljs.core.truth_(inst_51549__$1)){
var statearr_51607_51642 = state_51578__$1;
(statearr_51607_51642[(1)] = (14));

} else {
var statearr_51608_51643 = state_51578__$1;
(statearr_51608_51643[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51579 === (5))){
var inst_51533 = (state_51578[(13)]);
var state_51578__$1 = state_51578;
var statearr_51609_51644 = state_51578__$1;
(statearr_51609_51644[(2)] = inst_51533);

(statearr_51609_51644[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51579 === (14))){
var inst_51549 = (state_51578[(19)]);
var state_51578__$1 = state_51578;
var statearr_51610_51645 = state_51578__$1;
(statearr_51610_51645[(2)] = inst_51549);

(statearr_51610_51645[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51579 === (26))){
var inst_51568 = (state_51578[(2)]);
var state_51578__$1 = state_51578;
var statearr_51611_51646 = state_51578__$1;
(statearr_51611_51646[(2)] = inst_51568);

(statearr_51611_51646[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51579 === (16))){
var inst_51560 = (state_51578[(2)]);
var state_51578__$1 = state_51578;
if(cljs.core.truth_(inst_51560)){
var statearr_51612_51647 = state_51578__$1;
(statearr_51612_51647[(1)] = (20));

} else {
var statearr_51613_51648 = state_51578__$1;
(statearr_51613_51648[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51579 === (10))){
var inst_51574 = (state_51578[(2)]);
var state_51578__$1 = state_51578;
var statearr_51614_51649 = state_51578__$1;
(statearr_51614_51649[(2)] = inst_51574);

(statearr_51614_51649[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51579 === (18))){
var inst_51552 = (state_51578[(16)]);
var state_51578__$1 = state_51578;
var statearr_51615_51650 = state_51578__$1;
(statearr_51615_51650[(2)] = inst_51552);

(statearr_51615_51650[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51579 === (8))){
var inst_51531 = (state_51578[(7)]);
var inst_51540 = (inst_51531 == null);
var state_51578__$1 = state_51578;
if(cljs.core.truth_(inst_51540)){
var statearr_51616_51651 = state_51578__$1;
(statearr_51616_51651[(1)] = (11));

} else {
var statearr_51617_51652 = state_51578__$1;
(statearr_51617_51652[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__33441__auto__ = null;
var cljs$core$async$mix_$_state_machine__33441__auto____0 = (function (){
var statearr_51618 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51618[(0)] = cljs$core$async$mix_$_state_machine__33441__auto__);

(statearr_51618[(1)] = (1));

return statearr_51618;
});
var cljs$core$async$mix_$_state_machine__33441__auto____1 = (function (state_51578){
while(true){
var ret_value__33442__auto__ = (function (){try{while(true){
var result__33443__auto__ = switch__33440__auto__.call(null,state_51578);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33443__auto__;
}
break;
}
}catch (e51619){if((e51619 instanceof Object)){
var ex__33444__auto__ = e51619;
var statearr_51620_51653 = state_51578;
(statearr_51620_51653[(5)] = ex__33444__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51578);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51619;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51654 = state_51578;
state_51578 = G__51654;
continue;
} else {
return ret_value__33442__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33441__auto__ = function(state_51578){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33441__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33441__auto____1.call(this,state_51578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__33441__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33441__auto____0;
cljs$core$async$mix_$_state_machine__33441__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33441__auto____1;
return cljs$core$async$mix_$_state_machine__33441__auto__;
})()
})();
var state__33465__auto__ = (function (){var statearr_51621 = f__33464__auto__.call(null);
(statearr_51621[(6)] = c__33463__auto___51622);

return statearr_51621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33465__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_51657 = (function (p,v,ch,close_QMARK_){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4519__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_51657.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_51658 = (function (p,v,ch){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,p,v,ch);
} else {
var m__4519__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_51658.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_51659 = (function() {
var G__51660 = null;
var G__51660__1 = (function (p){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,p);
} else {
var m__4519__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
var G__51660__2 = (function (p,v){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return m__4522__auto__.call(null,p,v);
} else {
var m__4519__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return m__4519__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
G__51660 = function(p,v){
switch(arguments.length){
case 1:
return G__51660__1.call(this,p);
case 2:
return G__51660__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__51660.cljs$core$IFn$_invoke$arity$1 = G__51660__1;
G__51660.cljs$core$IFn$_invoke$arity$2 = G__51660__2;
return G__51660;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__51656 = arguments.length;
switch (G__51656) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_51659.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_51659.call(null,p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__51664 = arguments.length;
switch (G__51664) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4223__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__51662_SHARP_){
if(cljs.core.truth_(p1__51662_SHARP_.call(null,topic))){
return p1__51662_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__51662_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51665 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51665 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta51666){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta51666 = meta51666;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51665.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51667,meta51666__$1){
var self__ = this;
var _51667__$1 = this;
return (new cljs.core.async.t_cljs$core$async51665(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta51666__$1));
}));

(cljs.core.async.t_cljs$core$async51665.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51667){
var self__ = this;
var _51667__$1 = this;
return self__.meta51666;
}));

(cljs.core.async.t_cljs$core$async51665.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51665.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async51665.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51665.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async51665.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async51665.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async51665.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async51665.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta51666","meta51666",31211995,null)], null);
}));

(cljs.core.async.t_cljs$core$async51665.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51665.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51665");

(cljs.core.async.t_cljs$core$async51665.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"cljs.core.async/t_cljs$core$async51665");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51665.
 */
cljs.core.async.__GT_t_cljs$core$async51665 = (function cljs$core$async$__GT_t_cljs$core$async51665(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta51666){
return (new cljs.core.async.t_cljs$core$async51665(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta51666));
});

}

return (new cljs.core.async.t_cljs$core$async51665(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33463__auto___51785 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33464__auto__ = (function (){var switch__33440__auto__ = (function (state_51739){
var state_val_51740 = (state_51739[(1)]);
if((state_val_51740 === (7))){
var inst_51735 = (state_51739[(2)]);
var state_51739__$1 = state_51739;
var statearr_51741_51786 = state_51739__$1;
(statearr_51741_51786[(2)] = inst_51735);

(statearr_51741_51786[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51740 === (20))){
var state_51739__$1 = state_51739;
var statearr_51742_51787 = state_51739__$1;
(statearr_51742_51787[(2)] = null);

(statearr_51742_51787[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51740 === (1))){
var state_51739__$1 = state_51739;
var statearr_51743_51788 = state_51739__$1;
(statearr_51743_51788[(2)] = null);

(statearr_51743_51788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51740 === (24))){
var inst_51718 = (state_51739[(7)]);
var inst_51727 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_51718);
var state_51739__$1 = state_51739;
var statearr_51744_51789 = state_51739__$1;
(statearr_51744_51789[(2)] = inst_51727);

(statearr_51744_51789[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51740 === (4))){
var inst_51670 = (state_51739[(8)]);
var inst_51670__$1 = (state_51739[(2)]);
var inst_51671 = (inst_51670__$1 == null);
var state_51739__$1 = (function (){var statearr_51745 = state_51739;
(statearr_51745[(8)] = inst_51670__$1);

return statearr_51745;
})();
if(cljs.core.truth_(inst_51671)){
var statearr_51746_51790 = state_51739__$1;
(statearr_51746_51790[(1)] = (5));

} else {
var statearr_51747_51791 = state_51739__$1;
(statearr_51747_51791[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51740 === (15))){
var inst_51712 = (state_51739[(2)]);
var state_51739__$1 = state_51739;
var statearr_51748_51792 = state_51739__$1;
(statearr_51748_51792[(2)] = inst_51712);

(statearr_51748_51792[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51740 === (21))){
var inst_51732 = (state_51739[(2)]);
var state_51739__$1 = (function (){var statearr_51749 = state_51739;
(statearr_51749[(9)] = inst_51732);

return statearr_51749;
})();
var statearr_51750_51793 = state_51739__$1;
(statearr_51750_51793[(2)] = null);

(statearr_51750_51793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51740 === (13))){
var inst_51694 = (state_51739[(10)]);
var inst_51696 = cljs.core.chunked_seq_QMARK_.call(null,inst_51694);
var state_51739__$1 = state_51739;
if(inst_51696){
var statearr_51751_51794 = state_51739__$1;
(statearr_51751_51794[(1)] = (16));

} else {
var statearr_51752_51795 = state_51739__$1;
(statearr_51752_51795[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51740 === (22))){
var inst_51724 = (state_51739[(2)]);
var state_51739__$1 = state_51739;
if(cljs.core.truth_(inst_51724)){
var statearr_51753_51796 = state_51739__$1;
(statearr_51753_51796[(1)] = (23));

} else {
var statearr_51754_51797 = state_51739__$1;
(statearr_51754_51797[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51740 === (6))){
var inst_51670 = (state_51739[(8)]);
var inst_51718 = (state_51739[(7)]);
var inst_51720 = (state_51739[(11)]);
var inst_51718__$1 = topic_fn.call(null,inst_51670);
var inst_51719 = cljs.core.deref.call(null,mults);
var inst_51720__$1 = cljs.core.get.call(null,inst_51719,inst_51718__$1);
var state_51739__$1 = (function (){var statearr_51755 = state_51739;
(statearr_51755[(7)] = inst_51718__$1);

(statearr_51755[(11)] = inst_51720__$1);

return statearr_51755;
})();
if(cljs.core.truth_(inst_51720__$1)){
var statearr_51756_51798 = state_51739__$1;
(statearr_51756_51798[(1)] = (19));

} else {
var statearr_51757_51799 = state_51739__$1;
(statearr_51757_51799[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51740 === (25))){
var inst_51729 = (state_51739[(2)]);
var state_51739__$1 = state_51739;
var statearr_51758_51800 = state_51739__$1;
(statearr_51758_51800[(2)] = inst_51729);

(statearr_51758_51800[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51740 === (17))){
var inst_51694 = (state_51739[(10)]);
var inst_51703 = cljs.core.first.call(null,inst_51694);
var inst_51704 = cljs.core.async.muxch_STAR_.call(null,inst_51703);
var inst_51705 = cljs.core.async.close_BANG_.call(null,inst_51704);
var inst_51706 = cljs.core.next.call(null,inst_51694);
var inst_51680 = inst_51706;
var inst_51681 = null;
var inst_51682 = (0);
var inst_51683 = (0);
var state_51739__$1 = (function (){var statearr_51759 = state_51739;
(statearr_51759[(12)] = inst_51681);

(statearr_51759[(13)] = inst_51683);

(statearr_51759[(14)] = inst_51705);

(statearr_51759[(15)] = inst_51682);

(statearr_51759[(16)] = inst_51680);

return statearr_51759;
})();
var statearr_51760_51801 = state_51739__$1;
(statearr_51760_51801[(2)] = null);

(statearr_51760_51801[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51740 === (3))){
var inst_51737 = (state_51739[(2)]);
var state_51739__$1 = state_51739;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51739__$1,inst_51737);
} else {
if((state_val_51740 === (12))){
var inst_51714 = (state_51739[(2)]);
var state_51739__$1 = state_51739;
var statearr_51761_51802 = state_51739__$1;
(statearr_51761_51802[(2)] = inst_51714);

(statearr_51761_51802[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51740 === (2))){
var state_51739__$1 = state_51739;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51739__$1,(4),ch);
} else {
if((state_val_51740 === (23))){
var state_51739__$1 = state_51739;
var statearr_51762_51803 = state_51739__$1;
(statearr_51762_51803[(2)] = null);

(statearr_51762_51803[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51740 === (19))){
var inst_51670 = (state_51739[(8)]);
var inst_51720 = (state_51739[(11)]);
var inst_51722 = cljs.core.async.muxch_STAR_.call(null,inst_51720);
var state_51739__$1 = state_51739;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51739__$1,(22),inst_51722,inst_51670);
} else {
if((state_val_51740 === (11))){
var inst_51694 = (state_51739[(10)]);
var inst_51680 = (state_51739[(16)]);
var inst_51694__$1 = cljs.core.seq.call(null,inst_51680);
var state_51739__$1 = (function (){var statearr_51763 = state_51739;
(statearr_51763[(10)] = inst_51694__$1);

return statearr_51763;
})();
if(inst_51694__$1){
var statearr_51764_51804 = state_51739__$1;
(statearr_51764_51804[(1)] = (13));

} else {
var statearr_51765_51805 = state_51739__$1;
(statearr_51765_51805[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51740 === (9))){
var inst_51716 = (state_51739[(2)]);
var state_51739__$1 = state_51739;
var statearr_51766_51806 = state_51739__$1;
(statearr_51766_51806[(2)] = inst_51716);

(statearr_51766_51806[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51740 === (5))){
var inst_51677 = cljs.core.deref.call(null,mults);
var inst_51678 = cljs.core.vals.call(null,inst_51677);
var inst_51679 = cljs.core.seq.call(null,inst_51678);
var inst_51680 = inst_51679;
var inst_51681 = null;
var inst_51682 = (0);
var inst_51683 = (0);
var state_51739__$1 = (function (){var statearr_51767 = state_51739;
(statearr_51767[(12)] = inst_51681);

(statearr_51767[(13)] = inst_51683);

(statearr_51767[(15)] = inst_51682);

(statearr_51767[(16)] = inst_51680);

return statearr_51767;
})();
var statearr_51768_51807 = state_51739__$1;
(statearr_51768_51807[(2)] = null);

(statearr_51768_51807[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51740 === (14))){
var state_51739__$1 = state_51739;
var statearr_51772_51808 = state_51739__$1;
(statearr_51772_51808[(2)] = null);

(statearr_51772_51808[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51740 === (16))){
var inst_51694 = (state_51739[(10)]);
var inst_51698 = cljs.core.chunk_first.call(null,inst_51694);
var inst_51699 = cljs.core.chunk_rest.call(null,inst_51694);
var inst_51700 = cljs.core.count.call(null,inst_51698);
var inst_51680 = inst_51699;
var inst_51681 = inst_51698;
var inst_51682 = inst_51700;
var inst_51683 = (0);
var state_51739__$1 = (function (){var statearr_51773 = state_51739;
(statearr_51773[(12)] = inst_51681);

(statearr_51773[(13)] = inst_51683);

(statearr_51773[(15)] = inst_51682);

(statearr_51773[(16)] = inst_51680);

return statearr_51773;
})();
var statearr_51774_51809 = state_51739__$1;
(statearr_51774_51809[(2)] = null);

(statearr_51774_51809[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51740 === (10))){
var inst_51681 = (state_51739[(12)]);
var inst_51683 = (state_51739[(13)]);
var inst_51682 = (state_51739[(15)]);
var inst_51680 = (state_51739[(16)]);
var inst_51688 = cljs.core._nth.call(null,inst_51681,inst_51683);
var inst_51689 = cljs.core.async.muxch_STAR_.call(null,inst_51688);
var inst_51690 = cljs.core.async.close_BANG_.call(null,inst_51689);
var inst_51691 = (inst_51683 + (1));
var tmp51769 = inst_51681;
var tmp51770 = inst_51682;
var tmp51771 = inst_51680;
var inst_51680__$1 = tmp51771;
var inst_51681__$1 = tmp51769;
var inst_51682__$1 = tmp51770;
var inst_51683__$1 = inst_51691;
var state_51739__$1 = (function (){var statearr_51775 = state_51739;
(statearr_51775[(12)] = inst_51681__$1);

(statearr_51775[(13)] = inst_51683__$1);

(statearr_51775[(15)] = inst_51682__$1);

(statearr_51775[(17)] = inst_51690);

(statearr_51775[(16)] = inst_51680__$1);

return statearr_51775;
})();
var statearr_51776_51810 = state_51739__$1;
(statearr_51776_51810[(2)] = null);

(statearr_51776_51810[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51740 === (18))){
var inst_51709 = (state_51739[(2)]);
var state_51739__$1 = state_51739;
var statearr_51777_51811 = state_51739__$1;
(statearr_51777_51811[(2)] = inst_51709);

(statearr_51777_51811[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51740 === (8))){
var inst_51683 = (state_51739[(13)]);
var inst_51682 = (state_51739[(15)]);
var inst_51685 = (inst_51683 < inst_51682);
var inst_51686 = inst_51685;
var state_51739__$1 = state_51739;
if(cljs.core.truth_(inst_51686)){
var statearr_51778_51812 = state_51739__$1;
(statearr_51778_51812[(1)] = (10));

} else {
var statearr_51779_51813 = state_51739__$1;
(statearr_51779_51813[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33441__auto__ = null;
var cljs$core$async$state_machine__33441__auto____0 = (function (){
var statearr_51780 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51780[(0)] = cljs$core$async$state_machine__33441__auto__);

(statearr_51780[(1)] = (1));

return statearr_51780;
});
var cljs$core$async$state_machine__33441__auto____1 = (function (state_51739){
while(true){
var ret_value__33442__auto__ = (function (){try{while(true){
var result__33443__auto__ = switch__33440__auto__.call(null,state_51739);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33443__auto__;
}
break;
}
}catch (e51781){if((e51781 instanceof Object)){
var ex__33444__auto__ = e51781;
var statearr_51782_51814 = state_51739;
(statearr_51782_51814[(5)] = ex__33444__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51739);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51781;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51815 = state_51739;
state_51739 = G__51815;
continue;
} else {
return ret_value__33442__auto__;
}
break;
}
});
cljs$core$async$state_machine__33441__auto__ = function(state_51739){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33441__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33441__auto____1.call(this,state_51739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33441__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33441__auto____0;
cljs$core$async$state_machine__33441__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33441__auto____1;
return cljs$core$async$state_machine__33441__auto__;
})()
})();
var state__33465__auto__ = (function (){var statearr_51783 = f__33464__auto__.call(null);
(statearr_51783[(6)] = c__33463__auto___51785);

return statearr_51783;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33465__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__51817 = arguments.length;
switch (G__51817) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__51820 = arguments.length;
switch (G__51820) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__51823 = arguments.length;
switch (G__51823) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
var c__33463__auto___51890 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33464__auto__ = (function (){var switch__33440__auto__ = (function (state_51862){
var state_val_51863 = (state_51862[(1)]);
if((state_val_51863 === (7))){
var state_51862__$1 = state_51862;
var statearr_51864_51891 = state_51862__$1;
(statearr_51864_51891[(2)] = null);

(statearr_51864_51891[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51863 === (1))){
var state_51862__$1 = state_51862;
var statearr_51865_51892 = state_51862__$1;
(statearr_51865_51892[(2)] = null);

(statearr_51865_51892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51863 === (4))){
var inst_51826 = (state_51862[(7)]);
var inst_51828 = (inst_51826 < cnt);
var state_51862__$1 = state_51862;
if(cljs.core.truth_(inst_51828)){
var statearr_51866_51893 = state_51862__$1;
(statearr_51866_51893[(1)] = (6));

} else {
var statearr_51867_51894 = state_51862__$1;
(statearr_51867_51894[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51863 === (15))){
var inst_51858 = (state_51862[(2)]);
var state_51862__$1 = state_51862;
var statearr_51868_51895 = state_51862__$1;
(statearr_51868_51895[(2)] = inst_51858);

(statearr_51868_51895[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51863 === (13))){
var inst_51851 = cljs.core.async.close_BANG_.call(null,out);
var state_51862__$1 = state_51862;
var statearr_51869_51896 = state_51862__$1;
(statearr_51869_51896[(2)] = inst_51851);

(statearr_51869_51896[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51863 === (6))){
var state_51862__$1 = state_51862;
var statearr_51870_51897 = state_51862__$1;
(statearr_51870_51897[(2)] = null);

(statearr_51870_51897[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51863 === (3))){
var inst_51860 = (state_51862[(2)]);
var state_51862__$1 = state_51862;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51862__$1,inst_51860);
} else {
if((state_val_51863 === (12))){
var inst_51848 = (state_51862[(8)]);
var inst_51848__$1 = (state_51862[(2)]);
var inst_51849 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_51848__$1);
var state_51862__$1 = (function (){var statearr_51871 = state_51862;
(statearr_51871[(8)] = inst_51848__$1);

return statearr_51871;
})();
if(cljs.core.truth_(inst_51849)){
var statearr_51872_51898 = state_51862__$1;
(statearr_51872_51898[(1)] = (13));

} else {
var statearr_51873_51899 = state_51862__$1;
(statearr_51873_51899[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51863 === (2))){
var inst_51825 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_51826 = (0);
var state_51862__$1 = (function (){var statearr_51874 = state_51862;
(statearr_51874[(9)] = inst_51825);

(statearr_51874[(7)] = inst_51826);

return statearr_51874;
})();
var statearr_51875_51900 = state_51862__$1;
(statearr_51875_51900[(2)] = null);

(statearr_51875_51900[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51863 === (11))){
var inst_51826 = (state_51862[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_51862,(10),Object,null,(9));
var inst_51835 = chs__$1.call(null,inst_51826);
var inst_51836 = done.call(null,inst_51826);
var inst_51837 = cljs.core.async.take_BANG_.call(null,inst_51835,inst_51836);
var state_51862__$1 = state_51862;
var statearr_51876_51901 = state_51862__$1;
(statearr_51876_51901[(2)] = inst_51837);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51862__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51863 === (9))){
var inst_51826 = (state_51862[(7)]);
var inst_51839 = (state_51862[(2)]);
var inst_51840 = (inst_51826 + (1));
var inst_51826__$1 = inst_51840;
var state_51862__$1 = (function (){var statearr_51877 = state_51862;
(statearr_51877[(7)] = inst_51826__$1);

(statearr_51877[(10)] = inst_51839);

return statearr_51877;
})();
var statearr_51878_51902 = state_51862__$1;
(statearr_51878_51902[(2)] = null);

(statearr_51878_51902[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51863 === (5))){
var inst_51846 = (state_51862[(2)]);
var state_51862__$1 = (function (){var statearr_51879 = state_51862;
(statearr_51879[(11)] = inst_51846);

return statearr_51879;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51862__$1,(12),dchan);
} else {
if((state_val_51863 === (14))){
var inst_51848 = (state_51862[(8)]);
var inst_51853 = cljs.core.apply.call(null,f,inst_51848);
var state_51862__$1 = state_51862;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51862__$1,(16),out,inst_51853);
} else {
if((state_val_51863 === (16))){
var inst_51855 = (state_51862[(2)]);
var state_51862__$1 = (function (){var statearr_51880 = state_51862;
(statearr_51880[(12)] = inst_51855);

return statearr_51880;
})();
var statearr_51881_51903 = state_51862__$1;
(statearr_51881_51903[(2)] = null);

(statearr_51881_51903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51863 === (10))){
var inst_51830 = (state_51862[(2)]);
var inst_51831 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_51862__$1 = (function (){var statearr_51882 = state_51862;
(statearr_51882[(13)] = inst_51830);

return statearr_51882;
})();
var statearr_51883_51904 = state_51862__$1;
(statearr_51883_51904[(2)] = inst_51831);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51862__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51863 === (8))){
var inst_51844 = (state_51862[(2)]);
var state_51862__$1 = state_51862;
var statearr_51884_51905 = state_51862__$1;
(statearr_51884_51905[(2)] = inst_51844);

(statearr_51884_51905[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33441__auto__ = null;
var cljs$core$async$state_machine__33441__auto____0 = (function (){
var statearr_51885 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51885[(0)] = cljs$core$async$state_machine__33441__auto__);

(statearr_51885[(1)] = (1));

return statearr_51885;
});
var cljs$core$async$state_machine__33441__auto____1 = (function (state_51862){
while(true){
var ret_value__33442__auto__ = (function (){try{while(true){
var result__33443__auto__ = switch__33440__auto__.call(null,state_51862);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33443__auto__;
}
break;
}
}catch (e51886){if((e51886 instanceof Object)){
var ex__33444__auto__ = e51886;
var statearr_51887_51906 = state_51862;
(statearr_51887_51906[(5)] = ex__33444__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51862);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51886;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51907 = state_51862;
state_51862 = G__51907;
continue;
} else {
return ret_value__33442__auto__;
}
break;
}
});
cljs$core$async$state_machine__33441__auto__ = function(state_51862){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33441__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33441__auto____1.call(this,state_51862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33441__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33441__auto____0;
cljs$core$async$state_machine__33441__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33441__auto____1;
return cljs$core$async$state_machine__33441__auto__;
})()
})();
var state__33465__auto__ = (function (){var statearr_51888 = f__33464__auto__.call(null);
(statearr_51888[(6)] = c__33463__auto___51890);

return statearr_51888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33465__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__51910 = arguments.length;
switch (G__51910) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33463__auto___51964 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33464__auto__ = (function (){var switch__33440__auto__ = (function (state_51942){
var state_val_51943 = (state_51942[(1)]);
if((state_val_51943 === (7))){
var inst_51922 = (state_51942[(7)]);
var inst_51921 = (state_51942[(8)]);
var inst_51921__$1 = (state_51942[(2)]);
var inst_51922__$1 = cljs.core.nth.call(null,inst_51921__$1,(0),null);
var inst_51923 = cljs.core.nth.call(null,inst_51921__$1,(1),null);
var inst_51924 = (inst_51922__$1 == null);
var state_51942__$1 = (function (){var statearr_51944 = state_51942;
(statearr_51944[(7)] = inst_51922__$1);

(statearr_51944[(8)] = inst_51921__$1);

(statearr_51944[(9)] = inst_51923);

return statearr_51944;
})();
if(cljs.core.truth_(inst_51924)){
var statearr_51945_51965 = state_51942__$1;
(statearr_51945_51965[(1)] = (8));

} else {
var statearr_51946_51966 = state_51942__$1;
(statearr_51946_51966[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51943 === (1))){
var inst_51911 = cljs.core.vec.call(null,chs);
var inst_51912 = inst_51911;
var state_51942__$1 = (function (){var statearr_51947 = state_51942;
(statearr_51947[(10)] = inst_51912);

return statearr_51947;
})();
var statearr_51948_51967 = state_51942__$1;
(statearr_51948_51967[(2)] = null);

(statearr_51948_51967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51943 === (4))){
var inst_51912 = (state_51942[(10)]);
var state_51942__$1 = state_51942;
return cljs.core.async.ioc_alts_BANG_.call(null,state_51942__$1,(7),inst_51912);
} else {
if((state_val_51943 === (6))){
var inst_51938 = (state_51942[(2)]);
var state_51942__$1 = state_51942;
var statearr_51949_51968 = state_51942__$1;
(statearr_51949_51968[(2)] = inst_51938);

(statearr_51949_51968[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51943 === (3))){
var inst_51940 = (state_51942[(2)]);
var state_51942__$1 = state_51942;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51942__$1,inst_51940);
} else {
if((state_val_51943 === (2))){
var inst_51912 = (state_51942[(10)]);
var inst_51914 = cljs.core.count.call(null,inst_51912);
var inst_51915 = (inst_51914 > (0));
var state_51942__$1 = state_51942;
if(cljs.core.truth_(inst_51915)){
var statearr_51951_51969 = state_51942__$1;
(statearr_51951_51969[(1)] = (4));

} else {
var statearr_51952_51970 = state_51942__$1;
(statearr_51952_51970[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51943 === (11))){
var inst_51912 = (state_51942[(10)]);
var inst_51931 = (state_51942[(2)]);
var tmp51950 = inst_51912;
var inst_51912__$1 = tmp51950;
var state_51942__$1 = (function (){var statearr_51953 = state_51942;
(statearr_51953[(11)] = inst_51931);

(statearr_51953[(10)] = inst_51912__$1);

return statearr_51953;
})();
var statearr_51954_51971 = state_51942__$1;
(statearr_51954_51971[(2)] = null);

(statearr_51954_51971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51943 === (9))){
var inst_51922 = (state_51942[(7)]);
var state_51942__$1 = state_51942;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51942__$1,(11),out,inst_51922);
} else {
if((state_val_51943 === (5))){
var inst_51936 = cljs.core.async.close_BANG_.call(null,out);
var state_51942__$1 = state_51942;
var statearr_51955_51972 = state_51942__$1;
(statearr_51955_51972[(2)] = inst_51936);

(statearr_51955_51972[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51943 === (10))){
var inst_51934 = (state_51942[(2)]);
var state_51942__$1 = state_51942;
var statearr_51956_51973 = state_51942__$1;
(statearr_51956_51973[(2)] = inst_51934);

(statearr_51956_51973[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51943 === (8))){
var inst_51922 = (state_51942[(7)]);
var inst_51912 = (state_51942[(10)]);
var inst_51921 = (state_51942[(8)]);
var inst_51923 = (state_51942[(9)]);
var inst_51926 = (function (){var cs = inst_51912;
var vec__51917 = inst_51921;
var v = inst_51922;
var c = inst_51923;
return (function (p1__51908_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__51908_SHARP_);
});
})();
var inst_51927 = cljs.core.filterv.call(null,inst_51926,inst_51912);
var inst_51912__$1 = inst_51927;
var state_51942__$1 = (function (){var statearr_51957 = state_51942;
(statearr_51957[(10)] = inst_51912__$1);

return statearr_51957;
})();
var statearr_51958_51974 = state_51942__$1;
(statearr_51958_51974[(2)] = null);

(statearr_51958_51974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33441__auto__ = null;
var cljs$core$async$state_machine__33441__auto____0 = (function (){
var statearr_51959 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51959[(0)] = cljs$core$async$state_machine__33441__auto__);

(statearr_51959[(1)] = (1));

return statearr_51959;
});
var cljs$core$async$state_machine__33441__auto____1 = (function (state_51942){
while(true){
var ret_value__33442__auto__ = (function (){try{while(true){
var result__33443__auto__ = switch__33440__auto__.call(null,state_51942);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33443__auto__;
}
break;
}
}catch (e51960){if((e51960 instanceof Object)){
var ex__33444__auto__ = e51960;
var statearr_51961_51975 = state_51942;
(statearr_51961_51975[(5)] = ex__33444__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51942);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51960;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51976 = state_51942;
state_51942 = G__51976;
continue;
} else {
return ret_value__33442__auto__;
}
break;
}
});
cljs$core$async$state_machine__33441__auto__ = function(state_51942){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33441__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33441__auto____1.call(this,state_51942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33441__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33441__auto____0;
cljs$core$async$state_machine__33441__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33441__auto____1;
return cljs$core$async$state_machine__33441__auto__;
})()
})();
var state__33465__auto__ = (function (){var statearr_51962 = f__33464__auto__.call(null);
(statearr_51962[(6)] = c__33463__auto___51964);

return statearr_51962;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33465__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__51978 = arguments.length;
switch (G__51978) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33463__auto___52023 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33464__auto__ = (function (){var switch__33440__auto__ = (function (state_52002){
var state_val_52003 = (state_52002[(1)]);
if((state_val_52003 === (7))){
var inst_51984 = (state_52002[(7)]);
var inst_51984__$1 = (state_52002[(2)]);
var inst_51985 = (inst_51984__$1 == null);
var inst_51986 = cljs.core.not.call(null,inst_51985);
var state_52002__$1 = (function (){var statearr_52004 = state_52002;
(statearr_52004[(7)] = inst_51984__$1);

return statearr_52004;
})();
if(inst_51986){
var statearr_52005_52024 = state_52002__$1;
(statearr_52005_52024[(1)] = (8));

} else {
var statearr_52006_52025 = state_52002__$1;
(statearr_52006_52025[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52003 === (1))){
var inst_51979 = (0);
var state_52002__$1 = (function (){var statearr_52007 = state_52002;
(statearr_52007[(8)] = inst_51979);

return statearr_52007;
})();
var statearr_52008_52026 = state_52002__$1;
(statearr_52008_52026[(2)] = null);

(statearr_52008_52026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52003 === (4))){
var state_52002__$1 = state_52002;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52002__$1,(7),ch);
} else {
if((state_val_52003 === (6))){
var inst_51997 = (state_52002[(2)]);
var state_52002__$1 = state_52002;
var statearr_52009_52027 = state_52002__$1;
(statearr_52009_52027[(2)] = inst_51997);

(statearr_52009_52027[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52003 === (3))){
var inst_51999 = (state_52002[(2)]);
var inst_52000 = cljs.core.async.close_BANG_.call(null,out);
var state_52002__$1 = (function (){var statearr_52010 = state_52002;
(statearr_52010[(9)] = inst_51999);

return statearr_52010;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52002__$1,inst_52000);
} else {
if((state_val_52003 === (2))){
var inst_51979 = (state_52002[(8)]);
var inst_51981 = (inst_51979 < n);
var state_52002__$1 = state_52002;
if(cljs.core.truth_(inst_51981)){
var statearr_52011_52028 = state_52002__$1;
(statearr_52011_52028[(1)] = (4));

} else {
var statearr_52012_52029 = state_52002__$1;
(statearr_52012_52029[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52003 === (11))){
var inst_51979 = (state_52002[(8)]);
var inst_51989 = (state_52002[(2)]);
var inst_51990 = (inst_51979 + (1));
var inst_51979__$1 = inst_51990;
var state_52002__$1 = (function (){var statearr_52013 = state_52002;
(statearr_52013[(8)] = inst_51979__$1);

(statearr_52013[(10)] = inst_51989);

return statearr_52013;
})();
var statearr_52014_52030 = state_52002__$1;
(statearr_52014_52030[(2)] = null);

(statearr_52014_52030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52003 === (9))){
var state_52002__$1 = state_52002;
var statearr_52015_52031 = state_52002__$1;
(statearr_52015_52031[(2)] = null);

(statearr_52015_52031[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52003 === (5))){
var state_52002__$1 = state_52002;
var statearr_52016_52032 = state_52002__$1;
(statearr_52016_52032[(2)] = null);

(statearr_52016_52032[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52003 === (10))){
var inst_51994 = (state_52002[(2)]);
var state_52002__$1 = state_52002;
var statearr_52017_52033 = state_52002__$1;
(statearr_52017_52033[(2)] = inst_51994);

(statearr_52017_52033[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52003 === (8))){
var inst_51984 = (state_52002[(7)]);
var state_52002__$1 = state_52002;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52002__$1,(11),out,inst_51984);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33441__auto__ = null;
var cljs$core$async$state_machine__33441__auto____0 = (function (){
var statearr_52018 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_52018[(0)] = cljs$core$async$state_machine__33441__auto__);

(statearr_52018[(1)] = (1));

return statearr_52018;
});
var cljs$core$async$state_machine__33441__auto____1 = (function (state_52002){
while(true){
var ret_value__33442__auto__ = (function (){try{while(true){
var result__33443__auto__ = switch__33440__auto__.call(null,state_52002);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33443__auto__;
}
break;
}
}catch (e52019){if((e52019 instanceof Object)){
var ex__33444__auto__ = e52019;
var statearr_52020_52034 = state_52002;
(statearr_52020_52034[(5)] = ex__33444__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52002);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52019;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52035 = state_52002;
state_52002 = G__52035;
continue;
} else {
return ret_value__33442__auto__;
}
break;
}
});
cljs$core$async$state_machine__33441__auto__ = function(state_52002){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33441__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33441__auto____1.call(this,state_52002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33441__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33441__auto____0;
cljs$core$async$state_machine__33441__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33441__auto____1;
return cljs$core$async$state_machine__33441__auto__;
})()
})();
var state__33465__auto__ = (function (){var statearr_52021 = f__33464__auto__.call(null);
(statearr_52021[(6)] = c__33463__auto___52023);

return statearr_52021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33465__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52037 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52037 = (function (f,ch,meta52038){
this.f = f;
this.ch = ch;
this.meta52038 = meta52038;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async52037.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52039,meta52038__$1){
var self__ = this;
var _52039__$1 = this;
return (new cljs.core.async.t_cljs$core$async52037(self__.f,self__.ch,meta52038__$1));
}));

(cljs.core.async.t_cljs$core$async52037.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52039){
var self__ = this;
var _52039__$1 = this;
return self__.meta52038;
}));

(cljs.core.async.t_cljs$core$async52037.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52037.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async52037.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async52037.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52037.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52040 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52040 = (function (f,ch,meta52038,_,fn1,meta52041){
this.f = f;
this.ch = ch;
this.meta52038 = meta52038;
this._ = _;
this.fn1 = fn1;
this.meta52041 = meta52041;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async52040.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52042,meta52041__$1){
var self__ = this;
var _52042__$1 = this;
return (new cljs.core.async.t_cljs$core$async52040(self__.f,self__.ch,self__.meta52038,self__._,self__.fn1,meta52041__$1));
}));

(cljs.core.async.t_cljs$core$async52040.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52042){
var self__ = this;
var _52042__$1 = this;
return self__.meta52041;
}));

(cljs.core.async.t_cljs$core$async52040.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52040.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async52040.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async52040.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__52036_SHARP_){
return f1.call(null,(((p1__52036_SHARP_ == null))?null:self__.f.call(null,p1__52036_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async52040.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta52038","meta52038",1726846100,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async52037","cljs.core.async/t_cljs$core$async52037",1332629173,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta52041","meta52041",584516699,null)], null);
}));

(cljs.core.async.t_cljs$core$async52040.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async52040.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52040");

(cljs.core.async.t_cljs$core$async52040.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"cljs.core.async/t_cljs$core$async52040");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52040.
 */
cljs.core.async.__GT_t_cljs$core$async52040 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async52040(f__$1,ch__$1,meta52038__$1,___$2,fn1__$1,meta52041){
return (new cljs.core.async.t_cljs$core$async52040(f__$1,ch__$1,meta52038__$1,___$2,fn1__$1,meta52041));
});

}

return (new cljs.core.async.t_cljs$core$async52040(self__.f,self__.ch,self__.meta52038,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4221__auto__ = ret;
if(cljs.core.truth_(and__4221__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4221__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async52037.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52037.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async52037.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta52038","meta52038",1726846100,null)], null);
}));

(cljs.core.async.t_cljs$core$async52037.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async52037.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52037");

(cljs.core.async.t_cljs$core$async52037.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"cljs.core.async/t_cljs$core$async52037");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52037.
 */
cljs.core.async.__GT_t_cljs$core$async52037 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async52037(f__$1,ch__$1,meta52038){
return (new cljs.core.async.t_cljs$core$async52037(f__$1,ch__$1,meta52038));
});

}

return (new cljs.core.async.t_cljs$core$async52037(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52043 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52043 = (function (f,ch,meta52044){
this.f = f;
this.ch = ch;
this.meta52044 = meta52044;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async52043.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52045,meta52044__$1){
var self__ = this;
var _52045__$1 = this;
return (new cljs.core.async.t_cljs$core$async52043(self__.f,self__.ch,meta52044__$1));
}));

(cljs.core.async.t_cljs$core$async52043.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52045){
var self__ = this;
var _52045__$1 = this;
return self__.meta52044;
}));

(cljs.core.async.t_cljs$core$async52043.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52043.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async52043.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52043.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async52043.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52043.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async52043.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta52044","meta52044",-673918660,null)], null);
}));

(cljs.core.async.t_cljs$core$async52043.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async52043.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52043");

(cljs.core.async.t_cljs$core$async52043.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"cljs.core.async/t_cljs$core$async52043");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52043.
 */
cljs.core.async.__GT_t_cljs$core$async52043 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async52043(f__$1,ch__$1,meta52044){
return (new cljs.core.async.t_cljs$core$async52043(f__$1,ch__$1,meta52044));
});

}

return (new cljs.core.async.t_cljs$core$async52043(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52046 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52046 = (function (p,ch,meta52047){
this.p = p;
this.ch = ch;
this.meta52047 = meta52047;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async52046.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52048,meta52047__$1){
var self__ = this;
var _52048__$1 = this;
return (new cljs.core.async.t_cljs$core$async52046(self__.p,self__.ch,meta52047__$1));
}));

(cljs.core.async.t_cljs$core$async52046.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52048){
var self__ = this;
var _52048__$1 = this;
return self__.meta52047;
}));

(cljs.core.async.t_cljs$core$async52046.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52046.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async52046.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async52046.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52046.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async52046.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52046.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async52046.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta52047","meta52047",1190232452,null)], null);
}));

(cljs.core.async.t_cljs$core$async52046.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async52046.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52046");

(cljs.core.async.t_cljs$core$async52046.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"cljs.core.async/t_cljs$core$async52046");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52046.
 */
cljs.core.async.__GT_t_cljs$core$async52046 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async52046(p__$1,ch__$1,meta52047){
return (new cljs.core.async.t_cljs$core$async52046(p__$1,ch__$1,meta52047));
});

}

return (new cljs.core.async.t_cljs$core$async52046(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__52050 = arguments.length;
switch (G__52050) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33463__auto___52090 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33464__auto__ = (function (){var switch__33440__auto__ = (function (state_52071){
var state_val_52072 = (state_52071[(1)]);
if((state_val_52072 === (7))){
var inst_52067 = (state_52071[(2)]);
var state_52071__$1 = state_52071;
var statearr_52073_52091 = state_52071__$1;
(statearr_52073_52091[(2)] = inst_52067);

(statearr_52073_52091[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52072 === (1))){
var state_52071__$1 = state_52071;
var statearr_52074_52092 = state_52071__$1;
(statearr_52074_52092[(2)] = null);

(statearr_52074_52092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52072 === (4))){
var inst_52053 = (state_52071[(7)]);
var inst_52053__$1 = (state_52071[(2)]);
var inst_52054 = (inst_52053__$1 == null);
var state_52071__$1 = (function (){var statearr_52075 = state_52071;
(statearr_52075[(7)] = inst_52053__$1);

return statearr_52075;
})();
if(cljs.core.truth_(inst_52054)){
var statearr_52076_52093 = state_52071__$1;
(statearr_52076_52093[(1)] = (5));

} else {
var statearr_52077_52094 = state_52071__$1;
(statearr_52077_52094[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52072 === (6))){
var inst_52053 = (state_52071[(7)]);
var inst_52058 = p.call(null,inst_52053);
var state_52071__$1 = state_52071;
if(cljs.core.truth_(inst_52058)){
var statearr_52078_52095 = state_52071__$1;
(statearr_52078_52095[(1)] = (8));

} else {
var statearr_52079_52096 = state_52071__$1;
(statearr_52079_52096[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52072 === (3))){
var inst_52069 = (state_52071[(2)]);
var state_52071__$1 = state_52071;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52071__$1,inst_52069);
} else {
if((state_val_52072 === (2))){
var state_52071__$1 = state_52071;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52071__$1,(4),ch);
} else {
if((state_val_52072 === (11))){
var inst_52061 = (state_52071[(2)]);
var state_52071__$1 = state_52071;
var statearr_52080_52097 = state_52071__$1;
(statearr_52080_52097[(2)] = inst_52061);

(statearr_52080_52097[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52072 === (9))){
var state_52071__$1 = state_52071;
var statearr_52081_52098 = state_52071__$1;
(statearr_52081_52098[(2)] = null);

(statearr_52081_52098[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52072 === (5))){
var inst_52056 = cljs.core.async.close_BANG_.call(null,out);
var state_52071__$1 = state_52071;
var statearr_52082_52099 = state_52071__$1;
(statearr_52082_52099[(2)] = inst_52056);

(statearr_52082_52099[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52072 === (10))){
var inst_52064 = (state_52071[(2)]);
var state_52071__$1 = (function (){var statearr_52083 = state_52071;
(statearr_52083[(8)] = inst_52064);

return statearr_52083;
})();
var statearr_52084_52100 = state_52071__$1;
(statearr_52084_52100[(2)] = null);

(statearr_52084_52100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52072 === (8))){
var inst_52053 = (state_52071[(7)]);
var state_52071__$1 = state_52071;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52071__$1,(11),out,inst_52053);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33441__auto__ = null;
var cljs$core$async$state_machine__33441__auto____0 = (function (){
var statearr_52085 = [null,null,null,null,null,null,null,null,null];
(statearr_52085[(0)] = cljs$core$async$state_machine__33441__auto__);

(statearr_52085[(1)] = (1));

return statearr_52085;
});
var cljs$core$async$state_machine__33441__auto____1 = (function (state_52071){
while(true){
var ret_value__33442__auto__ = (function (){try{while(true){
var result__33443__auto__ = switch__33440__auto__.call(null,state_52071);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33443__auto__;
}
break;
}
}catch (e52086){if((e52086 instanceof Object)){
var ex__33444__auto__ = e52086;
var statearr_52087_52101 = state_52071;
(statearr_52087_52101[(5)] = ex__33444__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52071);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52086;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52102 = state_52071;
state_52071 = G__52102;
continue;
} else {
return ret_value__33442__auto__;
}
break;
}
});
cljs$core$async$state_machine__33441__auto__ = function(state_52071){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33441__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33441__auto____1.call(this,state_52071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33441__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33441__auto____0;
cljs$core$async$state_machine__33441__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33441__auto____1;
return cljs$core$async$state_machine__33441__auto__;
})()
})();
var state__33465__auto__ = (function (){var statearr_52088 = f__33464__auto__.call(null);
(statearr_52088[(6)] = c__33463__auto___52090);

return statearr_52088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33465__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__52104 = arguments.length;
switch (G__52104) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__33463__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33464__auto__ = (function (){var switch__33440__auto__ = (function (state_52167){
var state_val_52168 = (state_52167[(1)]);
if((state_val_52168 === (7))){
var inst_52163 = (state_52167[(2)]);
var state_52167__$1 = state_52167;
var statearr_52169_52207 = state_52167__$1;
(statearr_52169_52207[(2)] = inst_52163);

(statearr_52169_52207[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52168 === (20))){
var inst_52133 = (state_52167[(7)]);
var inst_52144 = (state_52167[(2)]);
var inst_52145 = cljs.core.next.call(null,inst_52133);
var inst_52119 = inst_52145;
var inst_52120 = null;
var inst_52121 = (0);
var inst_52122 = (0);
var state_52167__$1 = (function (){var statearr_52170 = state_52167;
(statearr_52170[(8)] = inst_52144);

(statearr_52170[(9)] = inst_52120);

(statearr_52170[(10)] = inst_52119);

(statearr_52170[(11)] = inst_52121);

(statearr_52170[(12)] = inst_52122);

return statearr_52170;
})();
var statearr_52171_52208 = state_52167__$1;
(statearr_52171_52208[(2)] = null);

(statearr_52171_52208[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52168 === (1))){
var state_52167__$1 = state_52167;
var statearr_52172_52209 = state_52167__$1;
(statearr_52172_52209[(2)] = null);

(statearr_52172_52209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52168 === (4))){
var inst_52108 = (state_52167[(13)]);
var inst_52108__$1 = (state_52167[(2)]);
var inst_52109 = (inst_52108__$1 == null);
var state_52167__$1 = (function (){var statearr_52173 = state_52167;
(statearr_52173[(13)] = inst_52108__$1);

return statearr_52173;
})();
if(cljs.core.truth_(inst_52109)){
var statearr_52174_52210 = state_52167__$1;
(statearr_52174_52210[(1)] = (5));

} else {
var statearr_52175_52211 = state_52167__$1;
(statearr_52175_52211[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52168 === (15))){
var state_52167__$1 = state_52167;
var statearr_52179_52212 = state_52167__$1;
(statearr_52179_52212[(2)] = null);

(statearr_52179_52212[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52168 === (21))){
var state_52167__$1 = state_52167;
var statearr_52180_52213 = state_52167__$1;
(statearr_52180_52213[(2)] = null);

(statearr_52180_52213[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52168 === (13))){
var inst_52120 = (state_52167[(9)]);
var inst_52119 = (state_52167[(10)]);
var inst_52121 = (state_52167[(11)]);
var inst_52122 = (state_52167[(12)]);
var inst_52129 = (state_52167[(2)]);
var inst_52130 = (inst_52122 + (1));
var tmp52176 = inst_52120;
var tmp52177 = inst_52119;
var tmp52178 = inst_52121;
var inst_52119__$1 = tmp52177;
var inst_52120__$1 = tmp52176;
var inst_52121__$1 = tmp52178;
var inst_52122__$1 = inst_52130;
var state_52167__$1 = (function (){var statearr_52181 = state_52167;
(statearr_52181[(9)] = inst_52120__$1);

(statearr_52181[(14)] = inst_52129);

(statearr_52181[(10)] = inst_52119__$1);

(statearr_52181[(11)] = inst_52121__$1);

(statearr_52181[(12)] = inst_52122__$1);

return statearr_52181;
})();
var statearr_52182_52214 = state_52167__$1;
(statearr_52182_52214[(2)] = null);

(statearr_52182_52214[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52168 === (22))){
var state_52167__$1 = state_52167;
var statearr_52183_52215 = state_52167__$1;
(statearr_52183_52215[(2)] = null);

(statearr_52183_52215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52168 === (6))){
var inst_52108 = (state_52167[(13)]);
var inst_52117 = f.call(null,inst_52108);
var inst_52118 = cljs.core.seq.call(null,inst_52117);
var inst_52119 = inst_52118;
var inst_52120 = null;
var inst_52121 = (0);
var inst_52122 = (0);
var state_52167__$1 = (function (){var statearr_52184 = state_52167;
(statearr_52184[(9)] = inst_52120);

(statearr_52184[(10)] = inst_52119);

(statearr_52184[(11)] = inst_52121);

(statearr_52184[(12)] = inst_52122);

return statearr_52184;
})();
var statearr_52185_52216 = state_52167__$1;
(statearr_52185_52216[(2)] = null);

(statearr_52185_52216[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52168 === (17))){
var inst_52133 = (state_52167[(7)]);
var inst_52137 = cljs.core.chunk_first.call(null,inst_52133);
var inst_52138 = cljs.core.chunk_rest.call(null,inst_52133);
var inst_52139 = cljs.core.count.call(null,inst_52137);
var inst_52119 = inst_52138;
var inst_52120 = inst_52137;
var inst_52121 = inst_52139;
var inst_52122 = (0);
var state_52167__$1 = (function (){var statearr_52186 = state_52167;
(statearr_52186[(9)] = inst_52120);

(statearr_52186[(10)] = inst_52119);

(statearr_52186[(11)] = inst_52121);

(statearr_52186[(12)] = inst_52122);

return statearr_52186;
})();
var statearr_52187_52217 = state_52167__$1;
(statearr_52187_52217[(2)] = null);

(statearr_52187_52217[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52168 === (3))){
var inst_52165 = (state_52167[(2)]);
var state_52167__$1 = state_52167;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52167__$1,inst_52165);
} else {
if((state_val_52168 === (12))){
var inst_52153 = (state_52167[(2)]);
var state_52167__$1 = state_52167;
var statearr_52188_52218 = state_52167__$1;
(statearr_52188_52218[(2)] = inst_52153);

(statearr_52188_52218[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52168 === (2))){
var state_52167__$1 = state_52167;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52167__$1,(4),in$);
} else {
if((state_val_52168 === (23))){
var inst_52161 = (state_52167[(2)]);
var state_52167__$1 = state_52167;
var statearr_52189_52219 = state_52167__$1;
(statearr_52189_52219[(2)] = inst_52161);

(statearr_52189_52219[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52168 === (19))){
var inst_52148 = (state_52167[(2)]);
var state_52167__$1 = state_52167;
var statearr_52190_52220 = state_52167__$1;
(statearr_52190_52220[(2)] = inst_52148);

(statearr_52190_52220[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52168 === (11))){
var inst_52133 = (state_52167[(7)]);
var inst_52119 = (state_52167[(10)]);
var inst_52133__$1 = cljs.core.seq.call(null,inst_52119);
var state_52167__$1 = (function (){var statearr_52191 = state_52167;
(statearr_52191[(7)] = inst_52133__$1);

return statearr_52191;
})();
if(inst_52133__$1){
var statearr_52192_52221 = state_52167__$1;
(statearr_52192_52221[(1)] = (14));

} else {
var statearr_52193_52222 = state_52167__$1;
(statearr_52193_52222[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52168 === (9))){
var inst_52155 = (state_52167[(2)]);
var inst_52156 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_52167__$1 = (function (){var statearr_52194 = state_52167;
(statearr_52194[(15)] = inst_52155);

return statearr_52194;
})();
if(cljs.core.truth_(inst_52156)){
var statearr_52195_52223 = state_52167__$1;
(statearr_52195_52223[(1)] = (21));

} else {
var statearr_52196_52224 = state_52167__$1;
(statearr_52196_52224[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52168 === (5))){
var inst_52111 = cljs.core.async.close_BANG_.call(null,out);
var state_52167__$1 = state_52167;
var statearr_52197_52225 = state_52167__$1;
(statearr_52197_52225[(2)] = inst_52111);

(statearr_52197_52225[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52168 === (14))){
var inst_52133 = (state_52167[(7)]);
var inst_52135 = cljs.core.chunked_seq_QMARK_.call(null,inst_52133);
var state_52167__$1 = state_52167;
if(inst_52135){
var statearr_52198_52226 = state_52167__$1;
(statearr_52198_52226[(1)] = (17));

} else {
var statearr_52199_52227 = state_52167__$1;
(statearr_52199_52227[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52168 === (16))){
var inst_52151 = (state_52167[(2)]);
var state_52167__$1 = state_52167;
var statearr_52200_52228 = state_52167__$1;
(statearr_52200_52228[(2)] = inst_52151);

(statearr_52200_52228[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52168 === (10))){
var inst_52120 = (state_52167[(9)]);
var inst_52122 = (state_52167[(12)]);
var inst_52127 = cljs.core._nth.call(null,inst_52120,inst_52122);
var state_52167__$1 = state_52167;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52167__$1,(13),out,inst_52127);
} else {
if((state_val_52168 === (18))){
var inst_52133 = (state_52167[(7)]);
var inst_52142 = cljs.core.first.call(null,inst_52133);
var state_52167__$1 = state_52167;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52167__$1,(20),out,inst_52142);
} else {
if((state_val_52168 === (8))){
var inst_52121 = (state_52167[(11)]);
var inst_52122 = (state_52167[(12)]);
var inst_52124 = (inst_52122 < inst_52121);
var inst_52125 = inst_52124;
var state_52167__$1 = state_52167;
if(cljs.core.truth_(inst_52125)){
var statearr_52201_52229 = state_52167__$1;
(statearr_52201_52229[(1)] = (10));

} else {
var statearr_52202_52230 = state_52167__$1;
(statearr_52202_52230[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__33441__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33441__auto____0 = (function (){
var statearr_52203 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52203[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33441__auto__);

(statearr_52203[(1)] = (1));

return statearr_52203;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33441__auto____1 = (function (state_52167){
while(true){
var ret_value__33442__auto__ = (function (){try{while(true){
var result__33443__auto__ = switch__33440__auto__.call(null,state_52167);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33443__auto__;
}
break;
}
}catch (e52204){if((e52204 instanceof Object)){
var ex__33444__auto__ = e52204;
var statearr_52205_52231 = state_52167;
(statearr_52205_52231[(5)] = ex__33444__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52167);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52204;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52232 = state_52167;
state_52167 = G__52232;
continue;
} else {
return ret_value__33442__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33441__auto__ = function(state_52167){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33441__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33441__auto____1.call(this,state_52167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__33441__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33441__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33441__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33441__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33441__auto__;
})()
})();
var state__33465__auto__ = (function (){var statearr_52206 = f__33464__auto__.call(null);
(statearr_52206[(6)] = c__33463__auto__);

return statearr_52206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33465__auto__);
}));

return c__33463__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__52234 = arguments.length;
switch (G__52234) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__52237 = arguments.length;
switch (G__52237) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__52240 = arguments.length;
switch (G__52240) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33463__auto___52287 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33464__auto__ = (function (){var switch__33440__auto__ = (function (state_52264){
var state_val_52265 = (state_52264[(1)]);
if((state_val_52265 === (7))){
var inst_52259 = (state_52264[(2)]);
var state_52264__$1 = state_52264;
var statearr_52266_52288 = state_52264__$1;
(statearr_52266_52288[(2)] = inst_52259);

(statearr_52266_52288[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52265 === (1))){
var inst_52241 = null;
var state_52264__$1 = (function (){var statearr_52267 = state_52264;
(statearr_52267[(7)] = inst_52241);

return statearr_52267;
})();
var statearr_52268_52289 = state_52264__$1;
(statearr_52268_52289[(2)] = null);

(statearr_52268_52289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52265 === (4))){
var inst_52244 = (state_52264[(8)]);
var inst_52244__$1 = (state_52264[(2)]);
var inst_52245 = (inst_52244__$1 == null);
var inst_52246 = cljs.core.not.call(null,inst_52245);
var state_52264__$1 = (function (){var statearr_52269 = state_52264;
(statearr_52269[(8)] = inst_52244__$1);

return statearr_52269;
})();
if(inst_52246){
var statearr_52270_52290 = state_52264__$1;
(statearr_52270_52290[(1)] = (5));

} else {
var statearr_52271_52291 = state_52264__$1;
(statearr_52271_52291[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52265 === (6))){
var state_52264__$1 = state_52264;
var statearr_52272_52292 = state_52264__$1;
(statearr_52272_52292[(2)] = null);

(statearr_52272_52292[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52265 === (3))){
var inst_52261 = (state_52264[(2)]);
var inst_52262 = cljs.core.async.close_BANG_.call(null,out);
var state_52264__$1 = (function (){var statearr_52273 = state_52264;
(statearr_52273[(9)] = inst_52261);

return statearr_52273;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52264__$1,inst_52262);
} else {
if((state_val_52265 === (2))){
var state_52264__$1 = state_52264;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52264__$1,(4),ch);
} else {
if((state_val_52265 === (11))){
var inst_52244 = (state_52264[(8)]);
var inst_52253 = (state_52264[(2)]);
var inst_52241 = inst_52244;
var state_52264__$1 = (function (){var statearr_52274 = state_52264;
(statearr_52274[(10)] = inst_52253);

(statearr_52274[(7)] = inst_52241);

return statearr_52274;
})();
var statearr_52275_52293 = state_52264__$1;
(statearr_52275_52293[(2)] = null);

(statearr_52275_52293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52265 === (9))){
var inst_52244 = (state_52264[(8)]);
var state_52264__$1 = state_52264;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52264__$1,(11),out,inst_52244);
} else {
if((state_val_52265 === (5))){
var inst_52244 = (state_52264[(8)]);
var inst_52241 = (state_52264[(7)]);
var inst_52248 = cljs.core._EQ_.call(null,inst_52244,inst_52241);
var state_52264__$1 = state_52264;
if(inst_52248){
var statearr_52277_52294 = state_52264__$1;
(statearr_52277_52294[(1)] = (8));

} else {
var statearr_52278_52295 = state_52264__$1;
(statearr_52278_52295[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52265 === (10))){
var inst_52256 = (state_52264[(2)]);
var state_52264__$1 = state_52264;
var statearr_52279_52296 = state_52264__$1;
(statearr_52279_52296[(2)] = inst_52256);

(statearr_52279_52296[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52265 === (8))){
var inst_52241 = (state_52264[(7)]);
var tmp52276 = inst_52241;
var inst_52241__$1 = tmp52276;
var state_52264__$1 = (function (){var statearr_52280 = state_52264;
(statearr_52280[(7)] = inst_52241__$1);

return statearr_52280;
})();
var statearr_52281_52297 = state_52264__$1;
(statearr_52281_52297[(2)] = null);

(statearr_52281_52297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33441__auto__ = null;
var cljs$core$async$state_machine__33441__auto____0 = (function (){
var statearr_52282 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_52282[(0)] = cljs$core$async$state_machine__33441__auto__);

(statearr_52282[(1)] = (1));

return statearr_52282;
});
var cljs$core$async$state_machine__33441__auto____1 = (function (state_52264){
while(true){
var ret_value__33442__auto__ = (function (){try{while(true){
var result__33443__auto__ = switch__33440__auto__.call(null,state_52264);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33443__auto__;
}
break;
}
}catch (e52283){if((e52283 instanceof Object)){
var ex__33444__auto__ = e52283;
var statearr_52284_52298 = state_52264;
(statearr_52284_52298[(5)] = ex__33444__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52264);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52283;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52299 = state_52264;
state_52264 = G__52299;
continue;
} else {
return ret_value__33442__auto__;
}
break;
}
});
cljs$core$async$state_machine__33441__auto__ = function(state_52264){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33441__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33441__auto____1.call(this,state_52264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33441__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33441__auto____0;
cljs$core$async$state_machine__33441__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33441__auto____1;
return cljs$core$async$state_machine__33441__auto__;
})()
})();
var state__33465__auto__ = (function (){var statearr_52285 = f__33464__auto__.call(null);
(statearr_52285[(6)] = c__33463__auto___52287);

return statearr_52285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33465__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__52301 = arguments.length;
switch (G__52301) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33463__auto___52367 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33464__auto__ = (function (){var switch__33440__auto__ = (function (state_52339){
var state_val_52340 = (state_52339[(1)]);
if((state_val_52340 === (7))){
var inst_52335 = (state_52339[(2)]);
var state_52339__$1 = state_52339;
var statearr_52341_52368 = state_52339__$1;
(statearr_52341_52368[(2)] = inst_52335);

(statearr_52341_52368[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52340 === (1))){
var inst_52302 = (new Array(n));
var inst_52303 = inst_52302;
var inst_52304 = (0);
var state_52339__$1 = (function (){var statearr_52342 = state_52339;
(statearr_52342[(7)] = inst_52304);

(statearr_52342[(8)] = inst_52303);

return statearr_52342;
})();
var statearr_52343_52369 = state_52339__$1;
(statearr_52343_52369[(2)] = null);

(statearr_52343_52369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52340 === (4))){
var inst_52307 = (state_52339[(9)]);
var inst_52307__$1 = (state_52339[(2)]);
var inst_52308 = (inst_52307__$1 == null);
var inst_52309 = cljs.core.not.call(null,inst_52308);
var state_52339__$1 = (function (){var statearr_52344 = state_52339;
(statearr_52344[(9)] = inst_52307__$1);

return statearr_52344;
})();
if(inst_52309){
var statearr_52345_52370 = state_52339__$1;
(statearr_52345_52370[(1)] = (5));

} else {
var statearr_52346_52371 = state_52339__$1;
(statearr_52346_52371[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52340 === (15))){
var inst_52329 = (state_52339[(2)]);
var state_52339__$1 = state_52339;
var statearr_52347_52372 = state_52339__$1;
(statearr_52347_52372[(2)] = inst_52329);

(statearr_52347_52372[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52340 === (13))){
var state_52339__$1 = state_52339;
var statearr_52348_52373 = state_52339__$1;
(statearr_52348_52373[(2)] = null);

(statearr_52348_52373[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52340 === (6))){
var inst_52304 = (state_52339[(7)]);
var inst_52325 = (inst_52304 > (0));
var state_52339__$1 = state_52339;
if(cljs.core.truth_(inst_52325)){
var statearr_52349_52374 = state_52339__$1;
(statearr_52349_52374[(1)] = (12));

} else {
var statearr_52350_52375 = state_52339__$1;
(statearr_52350_52375[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52340 === (3))){
var inst_52337 = (state_52339[(2)]);
var state_52339__$1 = state_52339;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52339__$1,inst_52337);
} else {
if((state_val_52340 === (12))){
var inst_52303 = (state_52339[(8)]);
var inst_52327 = cljs.core.vec.call(null,inst_52303);
var state_52339__$1 = state_52339;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52339__$1,(15),out,inst_52327);
} else {
if((state_val_52340 === (2))){
var state_52339__$1 = state_52339;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52339__$1,(4),ch);
} else {
if((state_val_52340 === (11))){
var inst_52319 = (state_52339[(2)]);
var inst_52320 = (new Array(n));
var inst_52303 = inst_52320;
var inst_52304 = (0);
var state_52339__$1 = (function (){var statearr_52351 = state_52339;
(statearr_52351[(7)] = inst_52304);

(statearr_52351[(10)] = inst_52319);

(statearr_52351[(8)] = inst_52303);

return statearr_52351;
})();
var statearr_52352_52376 = state_52339__$1;
(statearr_52352_52376[(2)] = null);

(statearr_52352_52376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52340 === (9))){
var inst_52303 = (state_52339[(8)]);
var inst_52317 = cljs.core.vec.call(null,inst_52303);
var state_52339__$1 = state_52339;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52339__$1,(11),out,inst_52317);
} else {
if((state_val_52340 === (5))){
var inst_52304 = (state_52339[(7)]);
var inst_52312 = (state_52339[(11)]);
var inst_52303 = (state_52339[(8)]);
var inst_52307 = (state_52339[(9)]);
var inst_52311 = (inst_52303[inst_52304] = inst_52307);
var inst_52312__$1 = (inst_52304 + (1));
var inst_52313 = (inst_52312__$1 < n);
var state_52339__$1 = (function (){var statearr_52353 = state_52339;
(statearr_52353[(11)] = inst_52312__$1);

(statearr_52353[(12)] = inst_52311);

return statearr_52353;
})();
if(cljs.core.truth_(inst_52313)){
var statearr_52354_52377 = state_52339__$1;
(statearr_52354_52377[(1)] = (8));

} else {
var statearr_52355_52378 = state_52339__$1;
(statearr_52355_52378[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52340 === (14))){
var inst_52332 = (state_52339[(2)]);
var inst_52333 = cljs.core.async.close_BANG_.call(null,out);
var state_52339__$1 = (function (){var statearr_52357 = state_52339;
(statearr_52357[(13)] = inst_52332);

return statearr_52357;
})();
var statearr_52358_52379 = state_52339__$1;
(statearr_52358_52379[(2)] = inst_52333);

(statearr_52358_52379[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52340 === (10))){
var inst_52323 = (state_52339[(2)]);
var state_52339__$1 = state_52339;
var statearr_52359_52380 = state_52339__$1;
(statearr_52359_52380[(2)] = inst_52323);

(statearr_52359_52380[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52340 === (8))){
var inst_52312 = (state_52339[(11)]);
var inst_52303 = (state_52339[(8)]);
var tmp52356 = inst_52303;
var inst_52303__$1 = tmp52356;
var inst_52304 = inst_52312;
var state_52339__$1 = (function (){var statearr_52360 = state_52339;
(statearr_52360[(7)] = inst_52304);

(statearr_52360[(8)] = inst_52303__$1);

return statearr_52360;
})();
var statearr_52361_52381 = state_52339__$1;
(statearr_52361_52381[(2)] = null);

(statearr_52361_52381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33441__auto__ = null;
var cljs$core$async$state_machine__33441__auto____0 = (function (){
var statearr_52362 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52362[(0)] = cljs$core$async$state_machine__33441__auto__);

(statearr_52362[(1)] = (1));

return statearr_52362;
});
var cljs$core$async$state_machine__33441__auto____1 = (function (state_52339){
while(true){
var ret_value__33442__auto__ = (function (){try{while(true){
var result__33443__auto__ = switch__33440__auto__.call(null,state_52339);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33443__auto__;
}
break;
}
}catch (e52363){if((e52363 instanceof Object)){
var ex__33444__auto__ = e52363;
var statearr_52364_52382 = state_52339;
(statearr_52364_52382[(5)] = ex__33444__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52339);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52363;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52383 = state_52339;
state_52339 = G__52383;
continue;
} else {
return ret_value__33442__auto__;
}
break;
}
});
cljs$core$async$state_machine__33441__auto__ = function(state_52339){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33441__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33441__auto____1.call(this,state_52339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33441__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33441__auto____0;
cljs$core$async$state_machine__33441__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33441__auto____1;
return cljs$core$async$state_machine__33441__auto__;
})()
})();
var state__33465__auto__ = (function (){var statearr_52365 = f__33464__auto__.call(null);
(statearr_52365[(6)] = c__33463__auto___52367);

return statearr_52365;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33465__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__52385 = arguments.length;
switch (G__52385) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33463__auto___52462 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33464__auto__ = (function (){var switch__33440__auto__ = (function (state_52430){
var state_val_52431 = (state_52430[(1)]);
if((state_val_52431 === (7))){
var inst_52426 = (state_52430[(2)]);
var state_52430__$1 = state_52430;
var statearr_52432_52463 = state_52430__$1;
(statearr_52432_52463[(2)] = inst_52426);

(statearr_52432_52463[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52431 === (1))){
var inst_52386 = [];
var inst_52387 = inst_52386;
var inst_52388 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_52430__$1 = (function (){var statearr_52433 = state_52430;
(statearr_52433[(7)] = inst_52387);

(statearr_52433[(8)] = inst_52388);

return statearr_52433;
})();
var statearr_52434_52464 = state_52430__$1;
(statearr_52434_52464[(2)] = null);

(statearr_52434_52464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52431 === (4))){
var inst_52391 = (state_52430[(9)]);
var inst_52391__$1 = (state_52430[(2)]);
var inst_52392 = (inst_52391__$1 == null);
var inst_52393 = cljs.core.not.call(null,inst_52392);
var state_52430__$1 = (function (){var statearr_52435 = state_52430;
(statearr_52435[(9)] = inst_52391__$1);

return statearr_52435;
})();
if(inst_52393){
var statearr_52436_52465 = state_52430__$1;
(statearr_52436_52465[(1)] = (5));

} else {
var statearr_52437_52466 = state_52430__$1;
(statearr_52437_52466[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52431 === (15))){
var inst_52387 = (state_52430[(7)]);
var inst_52418 = cljs.core.vec.call(null,inst_52387);
var state_52430__$1 = state_52430;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52430__$1,(18),out,inst_52418);
} else {
if((state_val_52431 === (13))){
var inst_52413 = (state_52430[(2)]);
var state_52430__$1 = state_52430;
var statearr_52438_52467 = state_52430__$1;
(statearr_52438_52467[(2)] = inst_52413);

(statearr_52438_52467[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52431 === (6))){
var inst_52387 = (state_52430[(7)]);
var inst_52415 = inst_52387.length;
var inst_52416 = (inst_52415 > (0));
var state_52430__$1 = state_52430;
if(cljs.core.truth_(inst_52416)){
var statearr_52439_52468 = state_52430__$1;
(statearr_52439_52468[(1)] = (15));

} else {
var statearr_52440_52469 = state_52430__$1;
(statearr_52440_52469[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52431 === (17))){
var inst_52423 = (state_52430[(2)]);
var inst_52424 = cljs.core.async.close_BANG_.call(null,out);
var state_52430__$1 = (function (){var statearr_52441 = state_52430;
(statearr_52441[(10)] = inst_52423);

return statearr_52441;
})();
var statearr_52442_52470 = state_52430__$1;
(statearr_52442_52470[(2)] = inst_52424);

(statearr_52442_52470[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52431 === (3))){
var inst_52428 = (state_52430[(2)]);
var state_52430__$1 = state_52430;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52430__$1,inst_52428);
} else {
if((state_val_52431 === (12))){
var inst_52387 = (state_52430[(7)]);
var inst_52406 = cljs.core.vec.call(null,inst_52387);
var state_52430__$1 = state_52430;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52430__$1,(14),out,inst_52406);
} else {
if((state_val_52431 === (2))){
var state_52430__$1 = state_52430;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52430__$1,(4),ch);
} else {
if((state_val_52431 === (11))){
var inst_52391 = (state_52430[(9)]);
var inst_52387 = (state_52430[(7)]);
var inst_52395 = (state_52430[(11)]);
var inst_52403 = inst_52387.push(inst_52391);
var tmp52443 = inst_52387;
var inst_52387__$1 = tmp52443;
var inst_52388 = inst_52395;
var state_52430__$1 = (function (){var statearr_52444 = state_52430;
(statearr_52444[(7)] = inst_52387__$1);

(statearr_52444[(8)] = inst_52388);

(statearr_52444[(12)] = inst_52403);

return statearr_52444;
})();
var statearr_52445_52471 = state_52430__$1;
(statearr_52445_52471[(2)] = null);

(statearr_52445_52471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52431 === (9))){
var inst_52388 = (state_52430[(8)]);
var inst_52399 = cljs.core.keyword_identical_QMARK_.call(null,inst_52388,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_52430__$1 = state_52430;
var statearr_52446_52472 = state_52430__$1;
(statearr_52446_52472[(2)] = inst_52399);

(statearr_52446_52472[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52431 === (5))){
var inst_52391 = (state_52430[(9)]);
var inst_52396 = (state_52430[(13)]);
var inst_52388 = (state_52430[(8)]);
var inst_52395 = (state_52430[(11)]);
var inst_52395__$1 = f.call(null,inst_52391);
var inst_52396__$1 = cljs.core._EQ_.call(null,inst_52395__$1,inst_52388);
var state_52430__$1 = (function (){var statearr_52447 = state_52430;
(statearr_52447[(13)] = inst_52396__$1);

(statearr_52447[(11)] = inst_52395__$1);

return statearr_52447;
})();
if(inst_52396__$1){
var statearr_52448_52473 = state_52430__$1;
(statearr_52448_52473[(1)] = (8));

} else {
var statearr_52449_52474 = state_52430__$1;
(statearr_52449_52474[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52431 === (14))){
var inst_52391 = (state_52430[(9)]);
var inst_52395 = (state_52430[(11)]);
var inst_52408 = (state_52430[(2)]);
var inst_52409 = [];
var inst_52410 = inst_52409.push(inst_52391);
var inst_52387 = inst_52409;
var inst_52388 = inst_52395;
var state_52430__$1 = (function (){var statearr_52450 = state_52430;
(statearr_52450[(14)] = inst_52408);

(statearr_52450[(7)] = inst_52387);

(statearr_52450[(8)] = inst_52388);

(statearr_52450[(15)] = inst_52410);

return statearr_52450;
})();
var statearr_52451_52475 = state_52430__$1;
(statearr_52451_52475[(2)] = null);

(statearr_52451_52475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52431 === (16))){
var state_52430__$1 = state_52430;
var statearr_52452_52476 = state_52430__$1;
(statearr_52452_52476[(2)] = null);

(statearr_52452_52476[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52431 === (10))){
var inst_52401 = (state_52430[(2)]);
var state_52430__$1 = state_52430;
if(cljs.core.truth_(inst_52401)){
var statearr_52453_52477 = state_52430__$1;
(statearr_52453_52477[(1)] = (11));

} else {
var statearr_52454_52478 = state_52430__$1;
(statearr_52454_52478[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52431 === (18))){
var inst_52420 = (state_52430[(2)]);
var state_52430__$1 = state_52430;
var statearr_52455_52479 = state_52430__$1;
(statearr_52455_52479[(2)] = inst_52420);

(statearr_52455_52479[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52431 === (8))){
var inst_52396 = (state_52430[(13)]);
var state_52430__$1 = state_52430;
var statearr_52456_52480 = state_52430__$1;
(statearr_52456_52480[(2)] = inst_52396);

(statearr_52456_52480[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33441__auto__ = null;
var cljs$core$async$state_machine__33441__auto____0 = (function (){
var statearr_52457 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52457[(0)] = cljs$core$async$state_machine__33441__auto__);

(statearr_52457[(1)] = (1));

return statearr_52457;
});
var cljs$core$async$state_machine__33441__auto____1 = (function (state_52430){
while(true){
var ret_value__33442__auto__ = (function (){try{while(true){
var result__33443__auto__ = switch__33440__auto__.call(null,state_52430);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33443__auto__;
}
break;
}
}catch (e52458){if((e52458 instanceof Object)){
var ex__33444__auto__ = e52458;
var statearr_52459_52481 = state_52430;
(statearr_52459_52481[(5)] = ex__33444__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52430);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52458;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52482 = state_52430;
state_52430 = G__52482;
continue;
} else {
return ret_value__33442__auto__;
}
break;
}
});
cljs$core$async$state_machine__33441__auto__ = function(state_52430){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33441__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33441__auto____1.call(this,state_52430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33441__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33441__auto____0;
cljs$core$async$state_machine__33441__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33441__auto____1;
return cljs$core$async$state_machine__33441__auto__;
})()
})();
var state__33465__auto__ = (function (){var statearr_52460 = f__33464__auto__.call(null);
(statearr_52460[(6)] = c__33463__auto___52462);

return statearr_52460;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33465__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map
