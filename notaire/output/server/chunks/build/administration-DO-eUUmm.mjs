import { u as useRouter$1, $ as useRoute$1, a0 as VBtnToggle, a1 as VBtn, a2 as __nuxt_component_0 } from './server.mjs';
import { ref, watch, unref, isRef, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import 'node:path';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'pinia';
import 'vue-router';

const _sfc_main = {
  __name: "administration",
  __ssrInlineRender: true,
  setup(__props) {
    const text = ref("users");
    const router = useRouter$1();
    const route = useRoute$1();
    watch(
      () => route.path,
      // on surveille la route actuelle
      (newPath) => {
        if (newPath === "/administration") {
          router.push("/administration/users");
        }
      },
      { immediate: true }
      // déclencher immédiatement lors du montage
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtPage = __nuxt_component_0;
      _push(`<!--[--><div class="d-flex justify-center my-4">`);
      _push(ssrRenderComponent(VBtnToggle, {
        modelValue: unref(text),
        "onUpdate:modelValue": ($event) => isRef(text) ? text.value = $event : null,
        color: "primary",
        divided: "",
        mandatory: "",
        variant: "outlined"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VBtn, {
              value: "users",
              to: "/administration/users",
              class: "text-none"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Utilisateurs `);
                } else {
                  return [
                    createTextVNode(" Utilisateurs ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VBtn, {
              value: "roles",
              to: "/administration/roles",
              class: "text-none"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` R\xF4les `);
                } else {
                  return [
                    createTextVNode(" R\xF4les ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VBtn, {
              value: "permissions",
              to: "/administration/permissions",
              class: "text-none"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Permissions `);
                } else {
                  return [
                    createTextVNode(" Permissions ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VBtn, {
                value: "users",
                to: "/administration/users",
                class: "text-none"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Utilisateurs ")
                ]),
                _: 1
              }),
              createVNode(VBtn, {
                value: "roles",
                to: "/administration/roles",
                class: "text-none"
              }, {
                default: withCtx(() => [
                  createTextVNode(" R\xF4les ")
                ]),
                _: 1
              }),
              createVNode(VBtn, {
                value: "permissions",
                to: "/administration/permissions",
                class: "text-none"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Permissions ")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_NuxtPage, {
        "page-key": (route2) => route2.fullPath
      }, null, _parent));
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/administration.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=administration-DO-eUUmm.mjs.map
