import { _ as _sfc_main$1 } from './backButton-HdIxwv9Z.mjs';
import { _ as _sfc_main$2 } from './createCustomerModal-D9-RmGJX.mjs';
import { ref, watchEffect, unref, isRef, withCtx, createTextVNode, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_0 } from './tableIcon_nodata-BFvCTCmh.mjs';
import { _ as _export_sfc, u as useRouter$1, aK as VTextField, a1 as VBtn, c as useRuntimeConfig } from './server.mjs';
import { V as VDataTable } from './VDataTable-BOKaCzwU.mjs';
import { V as VImg } from './VAvatar-gxg0IsvB.mjs';
import './VDialog-BU74V2eV.mjs';
import './VCard-Busk3Fj7.mjs';
import './VRow-xSUG3UwT.mjs';
import './filter-BGBihEE2.mjs';
import './ssrBoot-BtvJZs44.mjs';
import './VFileInput-ChcsM8I7.mjs';
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

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const customersHeaders = ref([
      { align: "start", key: "LAST_NAME", title: "Nom" },
      { align: "start", key: "FIRST_NAME", title: "Pr\xE9noms" },
      { align: "start", key: "EMAIL", title: "Email" },
      { align: "start", key: "PHONE", title: "T\xE9l\xE9phone" },
      { align: "start", key: "CURRENT_FILES", title: "Dossiers en cours" },
      { align: "start", key: "COMPLETED_FILES", title: "Dossiers termin\xE9s" },
      { align: "start", key: "HANGING_FILES", title: "Dossiers suspendus" },
      { align: "start", key: "CLOSED_FILES", title: "Dossiers arr\xEAt\xE9s" },
      { align: "start", key: "FILES", title: "Dossiers" }
    ]);
    const customers = ref([]);
    const customersSearch = ref(null);
    const open = ref(false);
    const toggleModal = () => {
      open.value = !open.value;
    };
    const router = useRouter$1();
    const goToCustomerDetails = (customer) => {
      router.push(`/customersManagement/${customer.ID}`);
    };
    const config = useRuntimeConfig();
    const loadCustomer = async () => {
      try {
        const fetchedCustomers = await $fetch(`${config.public.baseUrl}/customers`);
        if (fetchedCustomers) {
          customers.value = fetchedCustomers.map((customer) => ({
            ID: customer.id,
            LAST_NAME: customer.lastName,
            FIRST_NAME: customer.firstName,
            EMAIL: customer.email,
            PHONE: customer.phone,
            CURRENT_FILES: 0,
            COMPLETED_FILES: 0,
            HANGING_FILES: 0,
            CLOSED_FILES: 0,
            FILES: customer.folders.length
          }));
        }
      } catch (err) {
        console.error("Erreur lors du chargement des clients :", err);
      }
    };
    loadCustomer();
    watchEffect(() => {
      if (!open.value) {
        loadCustomer();
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_back_button = _sfc_main$1;
      const _component_create_customer_modal = _sfc_main$2;
      _push(`<!--[--><div class="ma-4" data-v-50b2f7a4>`);
      _push(ssrRenderComponent(_component_back_button, {
        title: "Gestion des clients",
        goBackTo: "/home"
      }, null, _parent));
      _push(`</div><div class="ma-4" data-v-50b2f7a4><div class="d-flex justify-end align-center ga-5" data-v-50b2f7a4><div class="searchField" data-v-50b2f7a4>`);
      _push(ssrRenderComponent(VTextField, {
        color: "primary",
        modelValue: unref(customersSearch),
        "onUpdate:modelValue": ($event) => isRef(customersSearch) ? customersSearch.value = $event : null,
        label: "Rechercher",
        "prepend-inner-icon": "mdi-magnify",
        variant: "outlined",
        density: "compact",
        "hide-details": "",
        clearable: ""
      }, null, _parent));
      _push(`</div><div data-v-50b2f7a4>`);
      _push(ssrRenderComponent(VBtn, {
        color: "primary",
        prependIcon: "mdi-account-tie",
        class: "text-none",
        onClick: toggleModal
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Ajouter un client`);
          } else {
            return [
              createTextVNode(" Ajouter un client")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_create_customer_modal, {
        open: unref(open),
        "onUpdate:open": ($event) => open.value = $event
      }, null, _parent));
      _push(`</div><div class="mt-4" data-v-50b2f7a4>`);
      _push(ssrRenderComponent(VDataTable, {
        headers: unref(customersHeaders),
        items: unref(customers),
        search: unref(customersSearch),
        "items-per-page-text": "Clients par page :",
        "item-value": "ID",
        class: "customTable1",
        density: "compact",
        "fixed-header": "",
        hover: ""
      }, {
        item: withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<tr data-v-50b2f7a4${_scopeId}><td data-v-50b2f7a4${_scopeId}>${ssrInterpolate(item.LAST_NAME)}</td><td data-v-50b2f7a4${_scopeId}>${ssrInterpolate(item.FIRST_NAME)}</td><td data-v-50b2f7a4${_scopeId}>${ssrInterpolate(item.EMAIL)}</td><td data-v-50b2f7a4${_scopeId}>${ssrInterpolate(item.PHONE)}</td><td data-v-50b2f7a4${_scopeId}>${ssrInterpolate(item.CURRENT_FILES)}</td><td data-v-50b2f7a4${_scopeId}>${ssrInterpolate(item.COMPLETED_FILES)}</td><td data-v-50b2f7a4${_scopeId}>${ssrInterpolate(item.HANGING_FILES)}</td><td data-v-50b2f7a4${_scopeId}>${ssrInterpolate(item.CLOSED_FILES)}</td><td data-v-50b2f7a4${_scopeId}>${ssrInterpolate(item.FILES)}</td></tr>`);
          } else {
            return [
              createVNode("tr", {
                onClick: ($event) => goToCustomerDetails(item)
              }, [
                createVNode("td", null, toDisplayString(item.LAST_NAME), 1),
                createVNode("td", null, toDisplayString(item.FIRST_NAME), 1),
                createVNode("td", null, toDisplayString(item.EMAIL), 1),
                createVNode("td", null, toDisplayString(item.PHONE), 1),
                createVNode("td", null, toDisplayString(item.CURRENT_FILES), 1),
                createVNode("td", null, toDisplayString(item.COMPLETED_FILES), 1),
                createVNode("td", null, toDisplayString(item.HANGING_FILES), 1),
                createVNode("td", null, toDisplayString(item.CLOSED_FILES), 1),
                createVNode("td", null, toDisplayString(item.FILES), 1)
              ], 8, ["onClick"])
            ];
          }
        }),
        "no-data": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="no-data-container" data-v-50b2f7a4${_scopeId}>`);
            _push2(ssrRenderComponent(VImg, {
              src: _imports_0,
              height: "80",
              width: "80",
              class: "mb-3",
              alt: "Aucune donn\xE9e"
            }, null, _parent2, _scopeId));
            _push2(`<p data-v-50b2f7a4${_scopeId}>Aucun client trouv\xE9.</p></div>`);
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
                createVNode("p", null, "Aucun client trouv\xE9.")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/customersManagement/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-50b2f7a4"]]);

export { index as default };
//# sourceMappingURL=index-BQ0gWtUJ.mjs.map
