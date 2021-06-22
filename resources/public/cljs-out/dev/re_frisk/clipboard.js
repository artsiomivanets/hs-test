// Compiled by ClojureScript 1.10.866 {:optimizations :none}
goog.provide('re_frisk.clipboard');
goog.require('cljs.core');
re_frisk.clipboard.copy_to_clip = (function re_frisk$clipboard$copy_to_clip(text){
var el = document.createElement("textarea");
(el.value = text);

document.body.appendChild(el);

el.select();

document.execCommand("copy");

return document.body.removeChild(el);
});

//# sourceMappingURL=clipboard.js.map
