!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n():"function"==typeof define&&define.amd?define(n):n()}(0,function(){"use strict";function t(t,n){return"string"==typeof t?{namespace:t,mappings:n}:{namespace:null,mappings:t}}function n(t){var n={};return Object.keys(t).forEach(function(e){var o=t[e];n[e]="string"==typeof o?{key:e,mutation:o}:{key:o.key,mutation:o.mutation}}),n}function e(t,n){return"string"==typeof t?function(){return this.$store.state[t][n.key]}:function(){return this.$store.state[n.key]}}function o(t,n){var e=n.mutation;return"string"==typeof t&&(e=t+"/"+e),function(t){this.$store.commit(e,t)}}module.exports={mapTwoWayState:function(i,r){var u=t(i,r),f=u.namespace,a=n(u.mappings),s={};return Object.keys(a).forEach(function(t){s[t]={get:e(f,a[t]),set:o(f,a[t])}}),s}}});
//# sourceMappingURL=vuex-helpers.js.map
