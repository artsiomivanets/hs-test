// Compiled by ClojureScript 1.10.866 {:optimizations :none}
goog.provide('client.users.core');
goog.require('cljs.core');
goog.require('re_frisk.core');
goog.require('re_frame.core');
goog.require('reagent.dom');
goog.require('client.users.views');
goog.require('client.users.events');
goog.require('client.users.subs');
client.users.core.mount_ui = (function client$users$core$mount_ui(){
return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.users.views.address_widget], null),document.querySelector("#address-widget"));
});
client.users.core.run = (function client$users$core$run(){
var default_value = document.querySelector("#address-widget textarea").value;
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-value","change-value",316989153),new cljs.core.Keyword(null,"address","address",559499426),default_value], null));

return client.users.core.mount_ui.call(null);
});
client.users.core.run.call(null);

//# sourceMappingURL=core.js.map
