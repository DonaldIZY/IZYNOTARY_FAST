import { _ as _sfc_main$1 } from './backButton-HdIxwv9Z.mjs';
import { ref, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _imports_0 } from './tableIcon_nodata-BFvCTCmh.mjs';
import { _ as _export_sfc, c as useRuntimeConfig } from './server.mjs';
import { V as VDataTable } from './VDataTable-BOKaCzwU.mjs';
import { V as VImg } from './VAvatar-gxg0IsvB.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import 'node:path';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'pinia';
import 'vue-router';
import './filter-BGBihEE2.mjs';
import './ssrBoot-BtvJZs44.mjs';

const _sfc_main = {
  __name: "roles",
  __ssrInlineRender: true,
  setup(__props) {
    const rolesHeaders = ref([
      { align: "start", key: "NUM", title: "N\xB0" },
      { align: "start", key: "NAME", title: "Nom" },
      { align: "start", key: "DESCRIPTION", title: "Description" }
    ]);
    const roles2 = ref([]);
    const rolesSearch = ref(null);
    const config = useRuntimeConfig();
    const loadRoles = async () => {
      try {
        const fetchedRoles = await $fetch(`${config.public.baseUrl}/roles`);
        if (fetchedRoles) {
          roles2.value = fetchedRoles.map((role, index) => ({
            NUM: index + 1,
            NAME: role.name,
            DESCRIPTION: role.description
          }));
        }
      } catch (err) {
        console.error("Erreur lors du chargement des r\xF4les :", err);
      }
    };
    loadRoles();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_back_button = _sfc_main$1;
      _push(`<!--[--><div class="ma-4" data-v-1318759b>`);
      _push(ssrRenderComponent(_component_back_button, {
        title: "Liste des r\xF4les",
        goBackTo: "/home"
      }, null, _parent));
      _push(`</div><div class="ma-4" data-v-1318759b>`);
      _push(ssrRenderComponent(VDataTable, {
        headers: unref(rolesHeaders),
        items: unref(roles2),
        search: unref(rolesSearch),
        "no-data-text": "Aucun r\xF4le trouv\xE9.",
        "items-per-page-text": "R\xF4les par page :",
        class: "customTable1",
        density: "compact",
        "fixed-header": "",
        hover: ""
      }, {
        "no-data": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="no-data-container" data-v-1318759b${_scopeId}>`);
            _push2(ssrRenderComponent(VImg, {
              src: _imports_0,
              height: "80",
              width: "80",
              class: "mb-3",
              alt: "Aucune donn\xE9e"
            }, null, _parent2, _scopeId));
            _push2(`<p data-v-1318759b${_scopeId}>Aucune donn\xE9e</p></div>`);
          } else {
            return [
              createVNode("div", { class: "no-data-container" }, [
                createVNode(VImg, {
                  src: _imports_0,
                  height: "80",
                  width: "80",
                  class: "mb-3",
                  alt: "Aucune donn\xE9e"
                }),
                createVNode("p", null, "Aucune donn\xE9e")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/administration/roles.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const roles = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1318759b"]]);

export { roles as default };
//# sourceMappingURL=roles-Y7NZyMQR.mjs.map
