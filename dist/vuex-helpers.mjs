function getArgs(t,e){return"string"==typeof t?{namespace:t,mappings:e}:{namespace:null,mappings:t}}function normalizeMappings(t){var e={};return Object.keys(t).forEach(function(n){var r=t[n];e[n]="string"==typeof r?{key:n,mutation:r}:{key:r.key,mutation:r.mutation}}),e}function getComputedGetter(t,e){return"string"==typeof t?function(){return this.$store.state[t][e.key]}:function(){return this.$store.state[e.key]}}function getComputedSetter(t,e){var n=e.mutation;return"string"==typeof t&&(n=t+"/"+n),function(t){this.$store.commit(n,t)}}var mapTwoWayState=function(t,e){var n=getArgs(t,e),r=n.namespace,a=normalizeMappings(n.mappings),o={};return Object.keys(a).forEach(function(t){o[t]={get:getComputedGetter(r,a[t]),set:getComputedSetter(r,a[t])}}),o};module.exports={mapTwoWayState:mapTwoWayState};
//# sourceMappingURL=vuex-helpers.mjs.map
