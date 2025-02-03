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
  __name: "sales",
  __ssrInlineRender: true,
  setup(__props) {
    const documentToSupply = [
      { text: "CNI du vendeur", status: "", inputName: "" },
      { text: "Extrait d\u2019acte de naissance ou extrait d\u2019acte de mariage si le vendeur est mari\xE9", status: "", inputName: "" },
      { text: "CNI du conjoint", status: "", inputName: "" },
      { text: "Titre de Propri\xE9t\xE9 ", status: "", inputName: "" },
      { text: "\xC9tat Foncier", status: "", inputName: "" },
      { text: "Certificat de Localisation", status: "", inputName: "" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_step_box = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "perso" }, _attrs))} data-v-2840b9c4>`);
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
        title: "R\xE9daction de l'acte de vente",
        status: "not started",
        icon: "signature1.png",
        date: "17/01/2025",
        listOfSubStep: [{ text: "R\xE9daction de l'acte de vente", status: "", inputName: "redaction" }]
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
        title: "Signature de l'acte de vente (par l'acqu\xE9reur et le vendeur)",
        status: "not started",
        icon: "autograph.png",
        date: "17/01/2025",
        listOfSubStep: [{ text: "Signature de l'acte de vente", status: "", inputName: "redaction" }]
      }, null, _parent));
      _push(ssrRenderComponent(_component_step_box, {
        number: 5,
        title: "D\xE9p\xF4t de l'acte sign\xE9",
        status: "not started",
        icon: "document.png",
        date: "17/01/2025",
        listOfSubStep: [{ text: "D\xE9p\xF4t de l'acte sign\xE9", status: "", inputName: "depot" }]
      }, null, _parent));
      _push(ssrRenderComponent(_component_step_box, {
        number: 6,
        title: "Livrables",
        status: "not started",
        icon: "letter.png",
        date: "17/01/2025",
        listOfSubStep: [{ text: "acte", status: "", inputName: "acte" }]
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sales.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-2840b9c4"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_back_button = _sfc_main$2;
  const _component_sales = __nuxt_component_1;
  _push(`<!--[--><div class="ma-4">`);
  _push(ssrRenderComponent(_component_back_button, {
    title: "Proc\xE9dure de vente",
    goBackTo: "/proceduresManagement"
  }, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_sales, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/salesDetails.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const salesDetails = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { salesDetails as default };
//# sourceMappingURL=salesDetails-T5uM5nxB.mjs.map
