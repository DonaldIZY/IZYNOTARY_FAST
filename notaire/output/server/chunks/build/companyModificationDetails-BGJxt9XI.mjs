import { _ as _sfc_main$2 } from './backButton-HdIxwv9Z.mjs';
import { _ as __nuxt_component_0 } from './stepBox-BbU1v1-p.mjs';
import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
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

const _sfc_main$1 = {
  __name: "companyModification",
  __ssrInlineRender: true,
  setup(__props) {
    const documentToSupply = [
      { text: "CNI du dirigeant", status: "", inputName: "cni" },
      { text: "RCCM de la soci\xE9t\xE9", status: "", inputName: "rccm" },
      { text: "Statut", status: "", inputName: "status" },
      { text: "DNSV", status: "", inputName: "dnsv" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_step_box = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "perso" }, _attrs))} data-v-85406813>`);
      _push(ssrRenderComponent(_component_step_box, {
        number: 1,
        title: "Fourniture de pi\xE8ces",
        status: "current",
        icon: "document-file.png",
        date: "17/01/2025",
        listOfSubStep: documentToSupply,
        first: true
      }, null, _parent));
      _push(ssrRenderComponent(_component_step_box, {
        number: 2,
        title: "Redaction des status",
        status: "not started",
        icon: "policy.png",
        date: "17/01/2025",
        listOfSubStep: [{ text: "R\xE9daction des actes modificatifs", status: "", inputName: "redaction" }]
      }, null, _parent));
      _push(ssrRenderComponent(_component_step_box, {
        number: 3,
        title: "R\xE8glement des frais",
        status: "not started",
        icon: "debit-card2.png",
        date: "17/01/2025",
        listOfSubStep: [{ text: "R\xE8glement des frais", status: "", inputName: "reglement" }]
      }, null, _parent));
      _push(ssrRenderComponent(_component_step_box, {
        number: 4,
        title: "Signature des actes",
        status: "not started",
        icon: "autograph.png",
        date: "17/01/2025",
        listOfSubStep: [{ text: "actes modificatifs sign\xE9s \xE0 la DGI", status: "", inputName: "signature" }]
      }, null, _parent));
      _push(ssrRenderComponent(_component_step_box, {
        number: 5,
        title: "D\xE9p\xF4t de l'acte sign\xE9",
        status: "not started",
        icon: "document.png",
        date: "17/01/2025",
        listOfSubStep: [{ text: "D\xE9p\xF4t au des actes modificatifs sign\xE9s \xE0 la DGI", status: "", inputName: "depot" }]
      }, null, _parent));
      _push(ssrRenderComponent(_component_step_box, {
        number: 6,
        title: "Livrables",
        status: "not started",
        icon: "letter.png",
        date: "17/01/2025",
        listOfSubStep: [{ text: "actes", status: "", inputName: "acte" }]
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/companyModification.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-85406813"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_back_button = _sfc_main$2;
  const _component_company_modification = __nuxt_component_1;
  _push(`<!--[--><div class="ma-4">`);
  _push(ssrRenderComponent(_component_back_button, {
    title: "Proc\xE9dure de modification de soci\xE9t\xE9",
    goBackTo: "/proceduresManagement"
  }, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_company_modification, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/companyModificationDetails.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const companyModificationDetails = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { companyModificationDetails as default };
//# sourceMappingURL=companyModificationDetails-BGJxt9XI.mjs.map
