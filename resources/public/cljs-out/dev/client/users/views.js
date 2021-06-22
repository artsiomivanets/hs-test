// Compiled by ClojureScript 1.10.866 {:optimizations :none}
goog.provide('client.users.views');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('goog.functions');
client.users.views.debounced_get_suggested_addresses = goog.functions.debounce((function (p1__60209_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-suggested-addresses","get-suggested-addresses",1480028636),p1__60209_SHARP_], null));
}),(300));
client.users.views.on_address_widget_change = (function client$users$views$on_address_widget_change(e){
var val = e.target.value;
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-value","change-value",316989153),new cljs.core.Keyword(null,"address","address",559499426),val], null));

return client.users.views.debounced_get_suggested_addresses.call(null,val);
});
client.users.views.on_address_item_click = (function client$users$views$on_address_item_click(address){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-value","change-value",316989153),new cljs.core.Keyword(null,"address","address",559499426),address], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clear-suggested-addresses","clear-suggested-addresses",-746220477)], null));
});
client.users.views.address_widget_dropdown_item = (function client$users$views$address_widget_dropdown_item(address){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a#menu-item-2.text-gray-700.block.px-4.py-2.text-sm.hover:bg-gray-200","a#menu-item-2.text-gray-700.block.px-4.py-2.text-sm.hover:bg-gray-200",1139688658),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),"-1",new cljs.core.Keyword(null,"role","role",-736691072),"menuitem",new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"key","key",-1516042587),address,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return client.users.views.on_address_item_click.call(null,address);
})], null),address], null);
});
client.users.views.address_widget = (function client$users$views$address_widget(){
var suggested_addresses = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"suggested-addresses","suggested-addresses",-614714495)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.relative","div.relative",430334058),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.w-full.rounded-md.border-2.border-gray-400.py-2.px-4","textarea.w-full.rounded-md.border-2.border-gray-400.py-2.px-4",2130061709),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),client.users.views.on_address_widget_change,new cljs.core.Keyword(null,"name","name",1843675177),"user[address]",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form-data","form-data",1829298254),new cljs.core.Keyword(null,"address","address",559499426)], null)))], null)], null),(((!(cljs.core.empty_QMARK_.call(null,suggested_addresses))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w-full.origin-top-right.absolute.right-0.mt-2.w-56.rounded-md.shadow-lg.bg-white.ring-1.ring-black.ring-opacity-5.divide-y.divide-gray-100.focus:outline-none","div.w-full.origin-top-right.absolute.right-0.mt-2.w-56.rounded-md.shadow-lg.bg-white.ring-1.ring-black.ring-opacity-5.divide-y.divide-gray-100.focus:outline-none",-435064514),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),"-1",new cljs.core.Keyword(null,"aria-labelledby","aria-labelledby",1817118667),"menu-button",new cljs.core.Keyword(null,"aria-orientation","aria-orientation",-218196331),"vertical",new cljs.core.Keyword(null,"role","role",-736691072),"menu"], null),cljs.core.map.call(null,client.users.views.address_widget_dropdown_item,suggested_addresses)], null):null)], null);
});

//# sourceMappingURL=views.js.map
