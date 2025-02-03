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
  __name: "realEstate",
  __ssrInlineRender: true,
  setup(__props) {
    const documentToSupply = [
      { text: "CNI du dirigeant", status: "", inputName: "cni" },
      { text: "Extrait d'acte de naissance", status: "", inputName: "rccm" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_step_box = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "perso" }, _attrs))} data-v-84fb77d8>`);
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
        title: "R\xE8glement des frais",
        status: "not started",
        icon: "debit-card2.png",
        date: "17/01/2025",
        listOfSubStep: [{ text: "R\xE8glement des frais", status: "", inputName: "reglement" }]
      }, null, _parent));
      _push(ssrRenderComponent(_component_step_box, {
        number: 3,
        title: "Evaluation des diff\xE9rents biens immobiliers",
        status: "not started",
        icon: "estimation.png",
        date: "17/01/2025",
        listOfSubStep: [{ text: "Evaluation des diff\xE9rents biens immobiliers", status: "", inputName: "evaluation" }]
      }, null, _parent));
      _push(ssrRenderComponent(_component_step_box, {
        number: 4,
        title: "D\xE9claration de la succession aupr\xE8s de la DGI",
        status: "not started",
        icon: "declaration.png",
        date: "17/01/2025",
        listOfSubStep: [{ text: "D\xE9claration de la succession aupr\xE8s de la DGI", status: "", inputName: "declaration" }]
      }, null, _parent));
      _push(ssrRenderComponent(_component_step_box, {
        number: 5,
        title: "Etablissement de l'attestation immobili\xE8re",
        status: "not started",
        icon: "certification.png",
        date: "17/01/2025",
        listOfSubStep: [{ text: "\xC9tablissement de l'attestation immobili\xE8re", status: "", inputName: "etablissement" }]
      }, null, _parent));
      _push(ssrRenderComponent(_component_step_box, {
        number: 6,
        title: "D\xE9p\xF4t de l'attestation immobili\xE8re",
        status: "not started",
        icon: "document.png",
        date: "17/01/2025",
        listOfSubStep: [{ text: "D\xE9p\xF4t de l'attestation immobili\xE8re aupr\xE8s de la DGI", status: "", inputName: "depot" }]
      }, null, _parent));
      _push(ssrRenderComponent(_component_step_box, {
        number: 7,
        title: "Livrables",
        status: "not started",
        icon: "letter.png",
        date: "17/01/2025",
        listOfSubStep: [{ text: "\xC9tat des reversements", status: "", inputName: "livrables" }]
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/realEstate.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-84fb77d8"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_back_button = _sfc_main$2;
  const _component_real_estate = __nuxt_component_1;
  _push(`<!--[--><div class="ma-4">`);
  _push(ssrRenderComponent(_component_back_button, {
    title: "Proc\xE9dure de succession de biens immobiliers",
    goBackTo: "/proceduresManagement"
  }, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_real_estate, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/realEstateDetails.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const realEstateDetails = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { realEstateDetails as default };
//# sourceMappingURL=realEstateDetails-CN3gqi5K.mjs.map
