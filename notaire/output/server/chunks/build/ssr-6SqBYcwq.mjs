import { b as useNuxtApp } from './server.mjs';

function useRequestEvent(nuxtApp = useNuxtApp()) {
  var _a;
  return (_a = nuxtApp.ssrContext) == null ? undefined : _a.event;
}
function useRequestFetch() {
  var _a;
  return ((_a = useRequestEvent()) == null ? undefined : _a.$fetch) || globalThis.$fetch;
}

export { useRequestEvent as a, useRequestFetch as u };
//# sourceMappingURL=ssr-6SqBYcwq.mjs.map
