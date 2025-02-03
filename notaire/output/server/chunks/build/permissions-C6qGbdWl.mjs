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
  __name: "permissions",
  __ssrInlineRender: true,
  setup(__props) {
    const permissionsHeaders = ref([
      { align: "start", key: "NUM", title: "N\xB0" },
      { align: "start", key: "NAME", title: "Nom" },
      { align: "start", key: "DESCRIPTION", title: "Description" }
    ]);
    const permissions2 = ref([]);
    const permissionsSearch = ref(null);
    const config = useRuntimeConfig();
    const loadPermissions = async () => {
      try {
        const fetchedPermissions = await $fetch(
          `${config.public.baseUrl}/permissions`
        );
        if (fetchedPermissions) {
          permissions2.value = fetchedPermissions.map((permission, index) => ({
            NUM: index + 1,
            NAME: permission.name,
            DESCRIPTION: permission.description
          }));
        }
      } catch (err) {
        console.error("Erreur lors du chargement des permissions :", err);
      }
    };
    loadPermissions();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_back_button = _sfc_main$1;
      _push(`<!--[--><div class="ma-4" data-v-f983fbdd>`);
      _push(ssrRenderComponent(_component_back_button, {
        title: "Liste des permissions",
        goBackTo: "/home"
      }, null, _parent));
      _push(`</div><div class="ma-4" data-v-f983fbdd>`);
      _push(ssrRenderComponent(VDataTable, {
        headers: unref(permissionsHeaders),
        items: unref(permissions2),
        search: unref(permissionsSearch),
        "no-data-text": "Aucune permission trouv\xE9e.",
        "items-per-page-text": "Permissions par page :",
        class: "customTable1",
        density: "compact",
        "fixed-header": "",
        hover: ""
      }, {
        "no-data": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="no-data-container" data-v-f983fbdd${_scopeId}>`);
            _push2(ssrRenderComponent(VImg, {
              src: _imports_0,
              height: "80",
              width: "80",
              class: "mb-3",
              alt: "Aucune donn\xE9e"
            }, null, _parent2, _scopeId));
            _push2(`<p data-v-f983fbdd${_scopeId}>Aucune donn\xE9e</p></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/administration/permissions.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const permissions = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f983fbdd"]]);

export { permissions as default };
//# sourceMappingURL=permissions-C6qGbdWl.mjs.map
