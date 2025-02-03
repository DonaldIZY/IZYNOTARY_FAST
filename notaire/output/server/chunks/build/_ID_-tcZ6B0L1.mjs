import { _ as _sfc_main$6 } from './backButton-HdIxwv9Z.mjs';
import { computed, toRef, createVNode, mergeProps, ref, unref, withCtx, createTextVNode, toDisplayString, isRef, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { V as VDataTable } from './VDataTable-BOKaCzwU.mjs';
import { k as createSimpleFunctional, p as propsFactory, I as IconValue, m as makeComponentProps, l as makeDensityProps, s as makeDimensionProps, t as makeElevationProps, w as makeLocationProps, x as makePositionProps, y as makeRoundedProps, f as makeTagProps, A as makeThemeProps, B as makeVariantProps, g as genericComponent, a4 as useProxiedModel, C as provideTheme, E as useVariant, F as useDensity, G as useDimension, H as useElevation, K as useLocation, L as usePosition, M as useRounded, ao as useTextColor, a5 as useLocale, P as genOverlays, V as VIcon, o as VDefaultsProvider, a1 as VBtn, $ as useRoute$1, a0 as VBtnToggle } from './server.mjs';
import { V as VCard, b as VCardText } from './VCard-Busk3Fj7.mjs';
import { V as VRow, a as VCol } from './VRow-xSUG3UwT.mjs';
import './filter-BGBihEE2.mjs';
import './ssrBoot-BtvJZs44.mjs';
import './VAvatar-gxg0IsvB.mjs';
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

const _sfc_main$5 = {
  __name: "sellingBoard",
  __ssrInlineRender: true,
  setup(__props) {
    const headers = ref([
      { align: "start", key: "NUM", title: "N\xB0 du dossier" },
      { align: "start", key: "CREATE_AT", title: "Date de cr\xE9ation" },
      {
        align: "center",
        title: "Niveau d'avancement",
        children: [
          { align: "start", key: "SUPPLY_OF_PARTS", title: "Fourniture des pi\xE8ces" },
          { align: "start", key: "WRITING_DEED_OF_SALE", title: "R\xE9daction de l'acte de vente" },
          { align: "start", key: "SETTLEMENT_OF_FEES", title: "R\xE8glement des frais" },
          { align: "start", key: "SIGNATURE_DEED_OF_SALE", title: "Signature de l'acte de vente" },
          { align: "start", key: "SIGNED_DOCUMENT_DEPOSITED", title: "D\xE9p\xF4t de l'acte sign\xE9" },
          { align: "start", key: "DELIVERABLES", title: "Livrables" }
        ]
      },
      { align: "start", key: "PERCENTAGE", title: "Pourcentage" },
      { align: "start", key: "STATUS", title: "Statut" }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VDataTable, mergeProps({
        headers: unref(headers),
        items: _ctx.sellings,
        search: _ctx.sellingsSearch,
        "no-data-text": "Aucune proc\xE9dure de vente.",
        hover: "",
        class: "customTable2"
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sellingBoard.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : undefined;
};
const _sfc_main$4 = {
  __name: "companyFormationBoard",
  __ssrInlineRender: true,
  setup(__props) {
    const headers = ref([
      { align: "start", key: "NUM", title: "N\xB0 du dossier" },
      { align: "start", key: "CREATE_AT", title: "Date de cr\xE9ation" },
      {
        align: "center",
        title: "Niveau d'avancement",
        children: [
          { align: "start", key: "SUPPLY_OF_PARTS", title: "Fourniture des pi\xE8ces" },
          { align: "start", key: "WRITING_DEED_OF_SALE", title: "R\xE9daction des statuts" },
          { align: "start", key: "SETTLEMENT_OF_FEES", title: "R\xE8glement des frais" },
          { align: "start", key: "SIGNATURE_OF_ACTS", title: "Signature des actes" },
          { align: "start", key: "SIGNED_DOCUMENT_DEPOSITED", title: "D\xE9p\xF4t des actes sign\xE9s" },
          { align: "start", key: "DELIVERABLES", title: "Livrables" }
        ]
      },
      { align: "start", key: "PERCENTAGE", title: "Pourcentage" },
      { align: "start", key: "STATUS", title: "Statut" }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VDataTable, mergeProps({
        headers: unref(headers),
        items: _ctx.companyFormations,
        search: _ctx.companyFormationsSearch,
        "no-data-text": "Aucune proc\xE9dure de constitution de soci\xE9t\xE9.",
        hover: "",
        class: "customTable2"
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/companyFormationBoard.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : undefined;
};
const _sfc_main$3 = {
  __name: "modificationCompanyBoard",
  __ssrInlineRender: true,
  setup(__props) {
    const headers = ref([
      { align: "start", key: "NUM", title: "N\xB0 du dossier" },
      { align: "start", key: "CREATE_AT", title: "Date de cr\xE9ation" },
      {
        align: "center",
        title: "Niveau d'avancement",
        children: [
          { align: "start", key: "SUPPLY_OF_PARTS", title: "Fourniture des pi\xE8ces" },
          { align: "start", key: "DRAFTING_OF_STATUTES", title: "R\xE9daction des statuts" },
          { align: "start", key: "SETTLEMENT_OF_FEES", title: "R\xE8glement des frais" },
          { align: "start", key: "SIGNATURE_OF_ACTS", title: "Signature des actes" },
          { align: "start", key: "SIGNED_DOCUMENT_DEPOSITED", title: "D\xE9p\xF4t des actes sign\xE9s" },
          { align: "start", key: "DELIVERABLES", title: "Livrables" }
        ]
      },
      { align: "start", key: "PERCENTAGE", title: "Pourcentage" },
      { align: "start", key: "STATUS", title: "Statut" }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VDataTable, mergeProps({
        headers: unref(headers),
        items: _ctx.modificationCompanys,
        search: _ctx.modificationCompanysSearch,
        "no-data-text": "Aucune proc\xE9dure de modification de soci\xE9t\xE9.",
        hover: "",
        class: "customTable2"
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/modificationCompanyBoard.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : undefined;
};
const _sfc_main$2 = {
  __name: "transferOfMovablePropertyBoard",
  __ssrInlineRender: true,
  setup(__props) {
    const headers = ref([
      { align: "start", key: "NUM", title: "N\xB0 du dossier" },
      { align: "start", key: "CREATE_AT", title: "Date de cr\xE9ation" },
      {
        align: "center",
        title: "Niveau d'avancement",
        children: [
          { align: "start", key: "SUPPLY_OF_PARTS", title: "Fourniture des pi\xE8ces" },
          { align: "start", key: "REQUEST_TO_BANK", title: "Demande aupr\xE8s de la banque" },
          { align: "start", key: "PREPARATION_OF_INCORPORATION_LETTER", title: "\xC9laboration de la lettre de constitution" },
          { align: "start", key: "DECLARATION_OF_ESTATE", title: "D\xE9claration de la succession" },
          { align: "start", key: "BANK_DEPOSIT", title: "D\xE9p\xF4t au pr\xE8s de la banque" },
          { align: "start", key: "DELIVERABLES", title: "Livrables" }
        ]
      },
      { align: "start", key: "PERCENTAGE", title: "Pourcentage" },
      { align: "start", key: "STATUS", title: "Statut" }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VDataTable, mergeProps({
        headers: unref(headers),
        items: _ctx.transferOfMovableProperties,
        search: _ctx.transferOfMovablePropertiesSearch,
        "no-data-text": "Aucune proc\xE9dure de succession de biens mobiliers.",
        hover: "",
        class: "customTable2"
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/transferOfMovablePropertyBoard.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : undefined;
};
const _sfc_main$1 = {
  __name: "transferOfRealEstateBoard",
  __ssrInlineRender: true,
  setup(__props) {
    const headers = ref([
      { align: "start", key: "NUM", title: "N\xB0 du dossier" },
      { align: "start", key: "CREATE_AT", title: "Date de cr\xE9ation" },
      {
        align: "center",
        title: "Niveau d'avancement",
        children: [
          { align: "start", key: "SUPPLY_OF_PARTS", title: "Fourniture des pi\xE8ces" },
          { align: "start", key: "SETTLEMENT_OF_FEES", title: "R\xE8glement des frais" },
          { align: "start", key: "VALUATION_OF_INDIVIDUAL_PROPERTIES", title: "\xC9valuation des diff\xE9rents biens immobiliers" },
          { align: "start", key: "DECLARATION_OF_ESTATE", title: "D\xE9claration de la succession" },
          { align: "start", key: "PREPARATION_OF_REAL_ESTATE_CERTIFICATE", title: "\xC9tablissement de l'attestation immobili\xE8re" },
          { align: "start", key: "DEPOSIT_OF_REAL_ESTATE_CERTIFICATE", title: "D\xE9p\xF4t de l'attestation immobili\xE8re" },
          { align: "start", key: "DELIVERABLES", title: "Livrables" }
        ]
      },
      { align: "start", key: "PERCENTAGE", title: "Pourcentage" },
      { align: "start", key: "STATUS", title: "Statut" }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VDataTable, mergeProps({
        headers: unref(headers),
        items: _ctx.transferOfRealEstates,
        search: _ctx.transferOfRealEstatesSearch,
        "no-data-text": "Aucune proc\xE9dure de succession de biens immobiliers.",
        hover: "",
        class: "customTable2"
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/transferOfRealEstateBoard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
const VAlertTitle = createSimpleFunctional("v-alert-title");
const allowedTypes = ["success", "info", "warning", "error"];
const makeVAlertProps = propsFactory({
  border: {
    type: [Boolean, String],
    validator: (val) => {
      return typeof val === "boolean" || ["top", "end", "bottom", "start"].includes(val);
    }
  },
  borderColor: String,
  closable: Boolean,
  closeIcon: {
    type: IconValue,
    default: "$close"
  },
  closeLabel: {
    type: String,
    default: "$vuetify.close"
  },
  icon: {
    type: [Boolean, String, Function, Object],
    default: null
  },
  modelValue: {
    type: Boolean,
    default: true
  },
  prominent: Boolean,
  title: String,
  text: String,
  type: {
    type: String,
    validator: (val) => allowedTypes.includes(val)
  },
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeDimensionProps(),
  ...makeElevationProps(),
  ...makeLocationProps(),
  ...makePositionProps(),
  ...makeRoundedProps(),
  ...makeTagProps(),
  ...makeThemeProps(),
  ...makeVariantProps({
    variant: "flat"
  })
}, "VAlert");
const VAlert = genericComponent()({
  name: "VAlert",
  props: makeVAlertProps(),
  emits: {
    "click:close": (e) => true,
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      emit,
      slots
    } = _ref;
    const isActive = useProxiedModel(props, "modelValue");
    const icon = computed(() => {
      var _a;
      if (props.icon === false) return undefined;
      if (!props.type) return props.icon;
      return (_a = props.icon) != null ? _a : `$${props.type}`;
    });
    const variantProps = computed(() => {
      var _a;
      return {
        color: (_a = props.color) != null ? _a : props.type,
        variant: props.variant
      };
    });
    const {
      themeClasses
    } = provideTheme(props);
    const {
      colorClasses,
      colorStyles,
      variantClasses
    } = useVariant(variantProps);
    const {
      densityClasses
    } = useDensity(props);
    const {
      dimensionStyles
    } = useDimension(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      locationStyles
    } = useLocation(props);
    const {
      positionClasses
    } = usePosition(props);
    const {
      roundedClasses
    } = useRounded(props);
    const {
      textColorClasses,
      textColorStyles
    } = useTextColor(toRef(props, "borderColor"));
    const {
      t
    } = useLocale();
    const closeProps = computed(() => ({
      "aria-label": t(props.closeLabel),
      onClick(e) {
        isActive.value = false;
        emit("click:close", e);
      }
    }));
    return () => {
      const hasPrepend = !!(slots.prepend || icon.value);
      const hasTitle = !!(slots.title || props.title);
      const hasClose = !!(slots.close || props.closable);
      return isActive.value && createVNode(props.tag, {
        "class": ["v-alert", props.border && {
          "v-alert--border": !!props.border,
          [`v-alert--border-${props.border === true ? "start" : props.border}`]: true
        }, {
          "v-alert--prominent": props.prominent
        }, themeClasses.value, colorClasses.value, densityClasses.value, elevationClasses.value, positionClasses.value, roundedClasses.value, variantClasses.value, props.class],
        "style": [colorStyles.value, dimensionStyles.value, locationStyles.value, props.style],
        "role": "alert"
      }, {
        default: () => {
          var _a2;
          var _a, _b;
          return [genOverlays(false, "v-alert"), props.border && createVNode("div", {
            "key": "border",
            "class": ["v-alert__border", textColorClasses.value],
            "style": textColorStyles.value
          }, null), hasPrepend && createVNode("div", {
            "key": "prepend",
            "class": "v-alert__prepend"
          }, [!slots.prepend ? createVNode(VIcon, {
            "key": "prepend-icon",
            "density": props.density,
            "icon": icon.value,
            "size": props.prominent ? 44 : 28
          }, null) : createVNode(VDefaultsProvider, {
            "key": "prepend-defaults",
            "disabled": !icon.value,
            "defaults": {
              VIcon: {
                density: props.density,
                icon: icon.value,
                size: props.prominent ? 44 : 28
              }
            }
          }, slots.prepend)]), createVNode("div", {
            "class": "v-alert__content"
          }, [hasTitle && createVNode(VAlertTitle, {
            "key": "title"
          }, {
            default: () => {
              var _a3;
              var _a22;
              return [(_a3 = (_a22 = slots.title) == null ? undefined : _a22.call(slots)) != null ? _a3 : props.title];
            }
          }), (_a2 = (_a = slots.text) == null ? undefined : _a.call(slots)) != null ? _a2 : props.text, (_b = slots.default) == null ? undefined : _b.call(slots)]), slots.append && createVNode("div", {
            "key": "append",
            "class": "v-alert__append"
          }, [slots.append()]), hasClose && createVNode("div", {
            "key": "close",
            "class": "v-alert__close"
          }, [!slots.close ? createVNode(VBtn, mergeProps({
            "key": "close-btn",
            "icon": props.closeIcon,
            "size": "x-small",
            "variant": "text"
          }, closeProps.value), null) : createVNode(VDefaultsProvider, {
            "key": "close-defaults",
            "defaults": {
              VBtn: {
                icon: props.closeIcon,
                size: "x-small",
                variant: "text"
              }
            }
          }, {
            default: () => {
              var _a22;
              return [(_a22 = slots.close) == null ? undefined : _a22.call(slots, {
                props: closeProps.value
              })];
            }
          })])];
        }
      });
    };
  }
});
const _sfc_main = {
  __name: "[ID]",
  __ssrInlineRender: true,
  setup(__props) {
    const text = ref("selling");
    const route = useRoute$1();
    const customerId = parseInt(route.params.ID);
    const customers = [
      {
        ID: 1,
        LAST_NAME: "Smith",
        FIRST_NAME: "John",
        EMAIL: "john.smith@example.com",
        CONTACT: "0123456789",
        CURRENT_FILES: 6,
        COMPLETED_FILES: 3,
        HANGING_FILES: 2,
        CLOSED_FILES: 1,
        FILES: 12
      },
      {
        ID: 2,
        LAST_NAME: "Johnson",
        FIRST_NAME: "Jane",
        EMAIL: "jane.johnson@example.com",
        CONTACT: "9876543210",
        CURRENT_FILES: 7,
        COMPLETED_FILES: 5,
        HANGING_FILES: 3,
        CLOSED_FILES: 0,
        FILES: 15
      },
      {
        ID: 3,
        LAST_NAME: "Doe",
        FIRST_NAME: "Michael",
        EMAIL: "michael.doe@example.com",
        CONTACT: "1234567890",
        CURRENT_FILES: 1,
        COMPLETED_FILES: 0,
        HANGING_FILES: 0,
        CLOSED_FILES: 1,
        FILES: 2
      }
    ];
    const customer = computed(() => customers.find((c) => c.ID === customerId));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_back_button = _sfc_main$6;
      const _component_selling_board = _sfc_main$5;
      const _component_company_formation_board = _sfc_main$4;
      const _component_modification_company_board = _sfc_main$3;
      const _component_transfer_of_movable_property_board = _sfc_main$2;
      const _component_transfer_of_real_estate_board = _sfc_main$1;
      _push(`<!--[--><div class="ma-4">`);
      _push(ssrRenderComponent(_component_back_button, {
        title: "D\xE9tails du client",
        goBackTo: "/customersManagement"
      }, null, _parent));
      _push(`</div>`);
      if (unref(customer)) {
        _push(`<div class="ma-4 d-flex flex-column align-center ga-10">`);
        _push(ssrRenderComponent(VCard, { class: "w-100 w-lg-75 w-xl-50" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VCardText, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VRow, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VCol, { cols: "4" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div${_scopeId4}><strong${_scopeId4}>Nom :</strong> ${ssrInterpolate(unref(customer).LAST_NAME)}</div>`);
                              } else {
                                return [
                                  createVNode("div", null, [
                                    createVNode("strong", null, "Nom :"),
                                    createTextVNode(" " + toDisplayString(unref(customer).LAST_NAME), 1)
                                  ])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VCol, { cols: "4" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div${_scopeId4}><strong${_scopeId4}>Email :</strong> ${ssrInterpolate(unref(customer).EMAIL)}</div>`);
                              } else {
                                return [
                                  createVNode("div", null, [
                                    createVNode("strong", null, "Email :"),
                                    createTextVNode(" " + toDisplayString(unref(customer).EMAIL), 1)
                                  ])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VCol, { cols: "4" }, {
                              default: withCtx(() => [
                                createVNode("div", null, [
                                  createVNode("strong", null, "Nom :"),
                                  createTextVNode(" " + toDisplayString(unref(customer).LAST_NAME), 1)
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, { cols: "4" }, {
                              default: withCtx(() => [
                                createVNode("div", null, [
                                  createVNode("strong", null, "Email :"),
                                  createTextVNode(" " + toDisplayString(unref(customer).EMAIL), 1)
                                ])
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(VRow, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VCol, { cols: "4" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div${_scopeId4}><strong${_scopeId4}>Pr\xE9noms :</strong> ${ssrInterpolate(unref(customer).FIRST_NAME)}</div>`);
                              } else {
                                return [
                                  createVNode("div", null, [
                                    createVNode("strong", null, "Pr\xE9noms :"),
                                    createTextVNode(" " + toDisplayString(unref(customer).FIRST_NAME), 1)
                                  ])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VCol, { cols: "4" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div${_scopeId4}><strong${_scopeId4}>Contact :</strong> ${ssrInterpolate(unref(customer).CONTACT)}</div>`);
                              } else {
                                return [
                                  createVNode("div", null, [
                                    createVNode("strong", null, "Contact :"),
                                    createTextVNode(" " + toDisplayString(unref(customer).CONTACT), 1)
                                  ])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VCol, { cols: "4" }, {
                              default: withCtx(() => [
                                createVNode("div", null, [
                                  createVNode("strong", null, "Pr\xE9noms :"),
                                  createTextVNode(" " + toDisplayString(unref(customer).FIRST_NAME), 1)
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, { cols: "4" }, {
                              default: withCtx(() => [
                                createVNode("div", null, [
                                  createVNode("strong", null, "Contact :"),
                                  createTextVNode(" " + toDisplayString(unref(customer).CONTACT), 1)
                                ])
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          createVNode(VCol, { cols: "4" }, {
                            default: withCtx(() => [
                              createVNode("div", null, [
                                createVNode("strong", null, "Nom :"),
                                createTextVNode(" " + toDisplayString(unref(customer).LAST_NAME), 1)
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { cols: "4" }, {
                            default: withCtx(() => [
                              createVNode("div", null, [
                                createVNode("strong", null, "Email :"),
                                createTextVNode(" " + toDisplayString(unref(customer).EMAIL), 1)
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          createVNode(VCol, { cols: "4" }, {
                            default: withCtx(() => [
                              createVNode("div", null, [
                                createVNode("strong", null, "Pr\xE9noms :"),
                                createTextVNode(" " + toDisplayString(unref(customer).FIRST_NAME), 1)
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { cols: "4" }, {
                            default: withCtx(() => [
                              createVNode("div", null, [
                                createVNode("strong", null, "Contact :"),
                                createTextVNode(" " + toDisplayString(unref(customer).CONTACT), 1)
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(VCardText, null, {
                  default: withCtx(() => [
                    createVNode(VRow, null, {
                      default: withCtx(() => [
                        createVNode(VCol, { cols: "4" }, {
                          default: withCtx(() => [
                            createVNode("div", null, [
                              createVNode("strong", null, "Nom :"),
                              createTextVNode(" " + toDisplayString(unref(customer).LAST_NAME), 1)
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, { cols: "4" }, {
                          default: withCtx(() => [
                            createVNode("div", null, [
                              createVNode("strong", null, "Email :"),
                              createTextVNode(" " + toDisplayString(unref(customer).EMAIL), 1)
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VRow, null, {
                      default: withCtx(() => [
                        createVNode(VCol, { cols: "4" }, {
                          default: withCtx(() => [
                            createVNode("div", null, [
                              createVNode("strong", null, "Pr\xE9noms :"),
                              createTextVNode(" " + toDisplayString(unref(customer).FIRST_NAME), 1)
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, { cols: "4" }, {
                          default: withCtx(() => [
                            createVNode("div", null, [
                              createVNode("strong", null, "Contact :"),
                              createTextVNode(" " + toDisplayString(unref(customer).CONTACT), 1)
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(VBtnToggle, {
          modelValue: unref(text),
          "onUpdate:modelValue": ($event) => isRef(text) ? text.value = $event : null,
          color: "primary",
          divided: "",
          mandatory: "",
          rounded: "xl",
          variant: "outlined"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VBtn, {
                value: "selling",
                class: "text-none"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Vente `);
                  } else {
                    return [
                      createTextVNode(" Vente ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(VBtn, {
                value: "companyFormation",
                class: "text-none"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Constitution de soci\xE9t\xE9 `);
                  } else {
                    return [
                      createTextVNode(" Constitution de soci\xE9t\xE9 ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(VBtn, {
                value: "modificationCompany",
                class: "text-none"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Modification de soci\xE9t\xE9 `);
                  } else {
                    return [
                      createTextVNode(" Modification de soci\xE9t\xE9 ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(VBtn, {
                value: "transferOfMovableProperty",
                class: "text-none"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Succession de biens mobiliers `);
                  } else {
                    return [
                      createTextVNode(" Succession de biens mobiliers ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(VBtn, {
                value: "transferOfRealEstate",
                class: "text-none"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Succession de biens immobiliers `);
                  } else {
                    return [
                      createTextVNode(" Succession de biens immobiliers ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(VBtn, {
                value: "credit",
                class: "text-none"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Cr\xE9dit `);
                  } else {
                    return [
                      createTextVNode(" Cr\xE9dit ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(VBtn, {
                  value: "selling",
                  class: "text-none"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Vente ")
                  ]),
                  _: 1
                }),
                createVNode(VBtn, {
                  value: "companyFormation",
                  class: "text-none"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Constitution de soci\xE9t\xE9 ")
                  ]),
                  _: 1
                }),
                createVNode(VBtn, {
                  value: "modificationCompany",
                  class: "text-none"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Modification de soci\xE9t\xE9 ")
                  ]),
                  _: 1
                }),
                createVNode(VBtn, {
                  value: "transferOfMovableProperty",
                  class: "text-none"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Succession de biens mobiliers ")
                  ]),
                  _: 1
                }),
                createVNode(VBtn, {
                  value: "transferOfRealEstate",
                  class: "text-none"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Succession de biens immobiliers ")
                  ]),
                  _: 1
                }),
                createVNode(VBtn, {
                  value: "credit",
                  class: "text-none"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Cr\xE9dit ")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        if (unref(text) == "selling") {
          _push(ssrRenderComponent(_component_selling_board, null, null, _parent));
        } else if (unref(text) == "companyFormation") {
          _push(ssrRenderComponent(_component_company_formation_board, null, null, _parent));
        } else if (unref(text) == "modificationCompany") {
          _push(ssrRenderComponent(_component_modification_company_board, null, null, _parent));
        } else if (unref(text) == "transferOfMovableProperty") {
          _push(ssrRenderComponent(_component_transfer_of_movable_property_board, null, null, _parent));
        } else if (unref(text) == "transferOfRealEstate") {
          _push(ssrRenderComponent(_component_transfer_of_real_estate_board, null, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<div class="mt-4">`);
        _push(ssrRenderComponent(VAlert, { type: "error" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Client non trouv\xE9`);
            } else {
              return [
                createTextVNode("Client non trouv\xE9")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/customersManagement/[ID].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=_ID_-tcZ6B0L1.mjs.map
