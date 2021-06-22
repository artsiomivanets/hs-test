// Compiled by ClojureScript 1.10.866 {:optimizations :none}
goog.provide('re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.batching');
goog.require('cljs.core');
goog.require('re_frisk.inlined_deps.reagent.v1v0v0.reagent.debug');
goog.require('re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util');
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.inlined_deps !== 'undefined') && (typeof re_frisk.inlined_deps.reagent !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0 !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0.reagent !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.batching !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.batching.mount_count !== 'undefined')){
} else {
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.batching.mount_count = (0);
}
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.batching.next_mount_count = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$batching$next_mount_count(){
return (re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.batching.mount_count = (re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.batching.mount_count + (1)));
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.batching.fake_raf = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$batching$fake_raf(f){
return setTimeout(f,(16));
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.batching.next_tick = (((!(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.is_client)))?re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.batching.fake_raf:(function (){var w = window;
return (function (){var or__4223__auto__ = w.requestAnimationFrame;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var or__4223__auto____$1 = w.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__4223__auto____$1)){
return or__4223__auto____$1;
} else {
var or__4223__auto____$2 = w.mozRequestAnimationFrame;
if(cljs.core.truth_(or__4223__auto____$2)){
return or__4223__auto____$2;
} else {
var or__4223__auto____$3 = w.msRequestAnimationFrame;
if(cljs.core.truth_(or__4223__auto____$3)){
return or__4223__auto____$3;
} else {
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.batching.fake_raf;
}
}
}
}
})().bind(w);
})());
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.batching.compare_mount_order = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$batching$compare_mount_order(c1,c2){
return (c1.cljsMountOrder - c2.cljsMountOrder);
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.batching.run_queue = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$batching$run_queue(a){
a.sort(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.batching.compare_mount_order);

var n__4706__auto__ = a.length;
var i = (0);
while(true){
if((i < n__4706__auto__)){
var c_49501 = (a[i]);
if(c_49501.cljsIsDirty === true){
c_49501.forceUpdate();
} else {
}

var G__49502 = (i + (1));
i = G__49502;
continue;
} else {
return null;
}
break;
}
});
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.inlined_deps !== 'undefined') && (typeof re_frisk.inlined_deps.reagent !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0 !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0.reagent !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.batching !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.batching.ratom_flush !== 'undefined')){
} else {
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.batching.ratom_flush = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$batching$ratom_flush(){
return null;
});
}
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.batching.run_funs = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$batching$run_funs(fs){
var n__4706__auto__ = fs.length;
var i = (0);
while(true){
if((i < n__4706__auto__)){
(fs[i]).call(null);

var G__49503 = (i + (1));
i = G__49503;
continue;
} else {
return null;
}
break;
}
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.batching.enqueue = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$batching$enqueue(queue,fs,f){
if(cljs.core.truth_(f)){
} else {
throw (new Error(["Assert failed: ",["Enqueued function"," must not be nil"].join(''),"\n","f"].join('')));
}

fs.push(f);

return queue.schedule();
});

/**
* @constructor
 * @implements {re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.batching.Object}
*/
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.batching.RenderQueue = (function (scheduled_QMARK_){
this.scheduled_QMARK_ = scheduled_QMARK_;
});
(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.batching.RenderQueue.prototype.flush_after_render = (function (){
var self__ = this;
var this$ = this;
var temp__5757__auto__ = this$.afterRender;
if((temp__5757__auto__ == null)){
return null;
} else {
var fs = temp__5757__auto__;
(this$.afterRender = null);

return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.batching.run_funs.call(null,fs);
}
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.batching.RenderQueue.prototype.queue_render = (function (c){
var self__ = this;
var this$ = this;
if((this$.componentQueue == null)){
(this$.componentQueue = []);
} else {
}

return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.batching.enqueue.call(null,this$,this$.componentQueue,c);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.batching.RenderQueue.prototype.schedule = (function (){
var self__ = this;
var this$ = this;
if(self__.scheduled_QMARK_){
return null;
} else {
(self__.scheduled_QMARK_ = true);

return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.batching.next_tick.call(null,(function (){
return this$.run_queues();
}));
}
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.batching.RenderQueue.prototype.flush_before_flush = (function (){
var self__ = this;
var this$ = this;
var temp__5757__auto__ = this$.beforeFlush;
if((temp__5757__auto__ == null)){
return null;
} else {
var fs = temp__5757__auto__;
(this$.beforeFlush = null);

return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.batching.run_funs.call(null,fs);
}
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.batching.RenderQueue.prototype.flush_queues = (function (){
var self__ = this;
var this$ = this;
this$.flush_before_flush();

re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.batching.ratom_flush.call(null);

this$.flush_render();

return this$.flush_after_render();
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.batching.RenderQueue.prototype.run_queues = (function (){
var self__ = this;
var this$ = this;
(self__.scheduled_QMARK_ = false);

return this$.flush_queues();
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.batching.RenderQueue.prototype.add_before_flush = (function (f){
var self__ = this;
var this$ = this;
if((this$.beforeFlush == null)){
(this$.beforeFlush = []);
} else {
}

return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.batching.enqueue.call(null,this$,this$.beforeFlush,f);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.batching.RenderQueue.prototype.add_after_render = (function (f){
var self__ = this;
var this$ = this;
if((this$.afterRender == null)){
(this$.afterRender = []);
} else {
}

return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.batching.enqueue.call(null,this$,this$.afterRender,f);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.batching.RenderQueue.prototype.flush_render = (function (){
var self__ = this;
var this$ = this;
var temp__5757__auto__ = this$.componentQueue;
if((temp__5757__auto__ == null)){
return null;
} else {
var fs = temp__5757__auto__;
(this$.componentQueue = null);

return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.batching.run_queue.call(null,fs);
}
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.batching.RenderQueue.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"scheduled?","scheduled?",579986609,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.batching.RenderQueue.cljs$lang$type = true);

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.batching.RenderQueue.cljs$lang$ctorStr = "re-frisk.inlined-deps.reagent.v1v0v0.reagent.impl.batching/RenderQueue");

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.batching.RenderQueue.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"re-frisk.inlined-deps.reagent.v1v0v0.reagent.impl.batching/RenderQueue");
}));

/**
 * Positional factory function for re-frisk.inlined-deps.reagent.v1v0v0.reagent.impl.batching/RenderQueue.
 */
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.batching.__GT_RenderQueue = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$batching$__GT_RenderQueue(scheduled_QMARK_){
return (new re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.batching.RenderQueue(scheduled_QMARK_));
});

if((typeof re_frisk !== 'undefined') && (typeof re_frisk.inlined_deps !== 'undefined') && (typeof re_frisk.inlined_deps.reagent !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0 !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0.reagent !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.batching !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.batching.render_queue !== 'undefined')){
} else {
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.batching.render_queue = re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.batching.__GT_RenderQueue.call(null,false);
}
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.batching.flush = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$batching$flush(){
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.batching.render_queue.flush_queues();
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.batching.flush_after_render = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$batching$flush_after_render(){
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.batching.render_queue.flush_after_render();
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.batching.queue_render = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$batching$queue_render(c){
if(cljs.core.truth_(c.cljsIsDirty)){
return null;
} else {
(c.cljsIsDirty = true);

return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.batching.render_queue.queue_render(c);
}
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.batching.mark_rendered = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$batching$mark_rendered(c){
return (c.cljsIsDirty = false);
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.batching.do_before_flush = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$batching$do_before_flush(f){
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.batching.render_queue.add_before_flush(f);
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.batching.do_after_render = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$batching$do_after_render(f){
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.batching.render_queue.add_after_render(f);
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.batching.schedule = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$batching$schedule(){
if(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.batching.render_queue.scheduled_QMARK_ === false){
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.batching.render_queue.schedule();
} else {
return null;
}
});

//# sourceMappingURL=batching.js.map
