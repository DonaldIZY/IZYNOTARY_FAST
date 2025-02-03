import { _ as _sfc_main$2 } from './backButton-HdIxwv9Z.mjs';
import { _ as _sfc_main$3 } from './createCustomerModal-D9-RmGJX.mjs';
import { ref, watchEffect, watch, withCtx, unref, isRef, createVNode, createTextVNode, useSSRContext, resolveComponent, mergeProps } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { V as VDialog } from './VDialog-BU74V2eV.mjs';
import { V as VCard, b as VCardText, c as VCardActions } from './VCard-Busk3Fj7.mjs';
import { V as VRow, a as VCol } from './VRow-xSUG3UwT.mjs';
import { aV as VSheet, a1 as VBtn, aK as VTextField, aR as VSpacer } from './server.mjs';
import { a as VDivider, V as VSelect } from './filter-BGBihEE2.mjs';
import { V as VFileInput } from './VFileInput-ChcsM8I7.mjs';
import { V as VCombobox, _ as _sfc_main$4 } from './VCombobox-CJua5flN.mjs';
import { _ as _sfc_main$5 } from './confirmationModal-F-IaXnl9.mjs';
import { V as VForm } from './VForm-BGp98nb4.mjs';
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
import './ssrBoot-BtvJZs44.mjs';

const _sfc_main$1 = {
  __name: "createSellerModal",
  __ssrInlineRender: true,
  props: {
    open: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const lastName = ref("");
    const firstName = ref("");
    const gender = ref(null);
    const birthDate = ref(null);
    const email = ref("");
    const phone = ref("");
    const maritalStatus = ref("");
    const identification = ref(null);
    const identificationNumber = ref("");
    const imageOfIdentification = ref(null);
    const emailRule = (v) => {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || "Veuillez entrer une adresse email valide.";
    };
    const emit = __emit;
    const today = /* @__PURE__ */ new Date();
    const maxDate = new Date(
      today.getFullYear() - 18,
      today.getMonth(),
      today.getDate()
    ).toISOString().split("T")[0];
    const handleCustomer = async () => {
      const sellerData = new FormData();
      sellerData.append("lastName", lastName.value);
      sellerData.append("firstName", firstName.value);
      sellerData.append("gender", gender.value);
      sellerData.append("birthDate", birthDate.value);
      sellerData.append("email", email.value);
      sellerData.append("phone", phone.value);
      sellerData.append("maritalStatus", maritalStatus.value);
      sellerData.append("identification", identification.value);
      sellerData.append("identificationNumber", identificationNumber.value);
      sellerData.append("imageOfIdentification", imageOfIdentification.value);
      console.log(sellerData.get("imageOfIdentification"));
      try {
        const testUrl2 = "http://serverizynotary.izydr.net";
        const data = await $fetch(`${testUrl2}/sellers`, {
          method: "POST",
          body: sellerData
        });
        alert("Client cr\xE9\xE9 avec succ\xE8s.");
        closeModal();
      } catch (error) {
        console.error("Erreur lors de la cr\xE9ation du client :", error);
      }
    };
    const closeModal = () => {
      emit("update:open", false);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_date_input = resolveComponent("v-date-input");
      _push(ssrRenderComponent(VDialog, mergeProps({
        modelValue: props.open,
        "onUpdate:modelValue": ($event) => props.open = $event,
        "max-width": "600"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, {
              "prepend-icon": "mdi-account-tie-voice",
              title: "Cr\xE9er un vendeur"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardText, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRow, { dense: "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, { cols: "6" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VTextField, {
                                      modelValue: unref(lastName),
                                      "onUpdate:modelValue": ($event) => isRef(lastName) ? lastName.value = $event : null,
                                      color: "primary",
                                      label: "Nom",
                                      variant: "outlined",
                                      density: "compact"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTextField, {
                                        modelValue: unref(lastName),
                                        "onUpdate:modelValue": ($event) => isRef(lastName) ? lastName.value = $event : null,
                                        color: "primary",
                                        label: "Nom",
                                        variant: "outlined",
                                        density: "compact"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, { cols: "6" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VTextField, {
                                      modelValue: unref(firstName),
                                      "onUpdate:modelValue": ($event) => isRef(firstName) ? firstName.value = $event : null,
                                      color: "primary",
                                      label: "Pr\xE9noms",
                                      variant: "outlined",
                                      density: "compact"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTextField, {
                                        modelValue: unref(firstName),
                                        "onUpdate:modelValue": ($event) => isRef(firstName) ? firstName.value = $event : null,
                                        color: "primary",
                                        label: "Pr\xE9noms",
                                        variant: "outlined",
                                        density: "compact"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, { cols: "6" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VSelect, {
                                      modelValue: unref(gender),
                                      "onUpdate:modelValue": ($event) => isRef(gender) ? gender.value = $event : null,
                                      color: "primary",
                                      label: "Sexe",
                                      items: ["Homme", "Femme"],
                                      variant: "outlined",
                                      density: "compact"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VSelect, {
                                        modelValue: unref(gender),
                                        "onUpdate:modelValue": ($event) => isRef(gender) ? gender.value = $event : null,
                                        color: "primary",
                                        label: "Sexe",
                                        items: ["Homme", "Femme"],
                                        variant: "outlined",
                                        density: "compact"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, { cols: "6" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_date_input, {
                                      modelValue: unref(birthDate),
                                      "onUpdate:modelValue": ($event) => isRef(birthDate) ? birthDate.value = $event : null,
                                      color: "primary",
                                      "prepend-icon": "",
                                      density: "compact",
                                      label: "Date de naissance",
                                      variant: "outlined",
                                      max: unref(maxDate),
                                      year: new Date(unref(maxDate)).getFullYear()
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_date_input, {
                                        modelValue: unref(birthDate),
                                        "onUpdate:modelValue": ($event) => isRef(birthDate) ? birthDate.value = $event : null,
                                        color: "primary",
                                        "prepend-icon": "",
                                        density: "compact",
                                        label: "Date de naissance",
                                        variant: "outlined",
                                        max: unref(maxDate),
                                        year: new Date(unref(maxDate)).getFullYear()
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "max", "year"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, { cols: "6" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VSelect, {
                                      modelValue: unref(maritalStatus),
                                      "onUpdate:modelValue": ($event) => isRef(maritalStatus) ? maritalStatus.value = $event : null,
                                      color: "primary",
                                      label: "Situation matrimoniale",
                                      items: ["Mari\xE9", "C\xE9libataire", "Divorc\xE9", "Veuf"],
                                      variant: "outlined",
                                      density: "compact"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VSelect, {
                                        modelValue: unref(maritalStatus),
                                        "onUpdate:modelValue": ($event) => isRef(maritalStatus) ? maritalStatus.value = $event : null,
                                        color: "primary",
                                        label: "Situation matrimoniale",
                                        items: ["Mari\xE9", "C\xE9libataire", "Divorc\xE9", "Veuf"],
                                        variant: "outlined",
                                        density: "compact"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, { cols: "6" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VTextField, {
                                      modelValue: unref(email),
                                      "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                      color: "primary",
                                      label: "Email",
                                      density: "compact",
                                      variant: "outlined",
                                      rules: [emailRule]
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTextField, {
                                        modelValue: unref(email),
                                        "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                        color: "primary",
                                        label: "Email",
                                        density: "compact",
                                        variant: "outlined",
                                        rules: [emailRule]
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, { cols: "6" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VTextField, {
                                      modelValue: unref(phone),
                                      "onUpdate:modelValue": ($event) => isRef(phone) ? phone.value = $event : null,
                                      color: "primary",
                                      label: "T\xE9l\xE9phone",
                                      density: "compact",
                                      variant: "outlined"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTextField, {
                                        modelValue: unref(phone),
                                        "onUpdate:modelValue": ($event) => isRef(phone) ? phone.value = $event : null,
                                        color: "primary",
                                        label: "T\xE9l\xE9phone",
                                        density: "compact",
                                        variant: "outlined"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, { cols: "6" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VSelect, {
                                      modelValue: unref(identification),
                                      "onUpdate:modelValue": ($event) => isRef(identification) ? identification.value = $event : null,
                                      color: "primary",
                                      label: "Pi\xE8ce d'identit\xE9",
                                      density: "compact",
                                      items: ["CNI", "Passeport"],
                                      variant: "outlined"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VSelect, {
                                        modelValue: unref(identification),
                                        "onUpdate:modelValue": ($event) => isRef(identification) ? identification.value = $event : null,
                                        color: "primary",
                                        label: "Pi\xE8ce d'identit\xE9",
                                        density: "compact",
                                        items: ["CNI", "Passeport"],
                                        variant: "outlined"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, { cols: "6" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VRow, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VCol, { cols: "12" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: unref(identificationNumber),
                                                  "onUpdate:modelValue": ($event) => isRef(identificationNumber) ? identificationNumber.value = $event : null,
                                                  color: "primary",
                                                  density: "compact",
                                                  label: "Num\xE9ro de la pi\xE8ce d'identit\xE9",
                                                  variant: "outlined"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(identificationNumber),
                                                    "onUpdate:modelValue": ($event) => isRef(identificationNumber) ? identificationNumber.value = $event : null,
                                                    color: "primary",
                                                    density: "compact",
                                                    label: "Num\xE9ro de la pi\xE8ce d'identit\xE9",
                                                    variant: "outlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(identificationNumber),
                                                  "onUpdate:modelValue": ($event) => isRef(identificationNumber) ? identificationNumber.value = $event : null,
                                                  color: "primary",
                                                  density: "compact",
                                                  label: "Num\xE9ro de la pi\xE8ce d'identit\xE9",
                                                  variant: "outlined"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(identificationNumber),
                                                "onUpdate:modelValue": ($event) => isRef(identificationNumber) ? identificationNumber.value = $event : null,
                                                color: "primary",
                                                density: "compact",
                                                label: "Num\xE9ro de la pi\xE8ce d'identit\xE9",
                                                variant: "outlined"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, { cols: "12" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VFileInput, {
                                      modelValue: unref(imageOfIdentification),
                                      "onUpdate:modelValue": ($event) => isRef(imageOfIdentification) ? imageOfIdentification.value = $event : null,
                                      color: "primary",
                                      density: "compact",
                                      label: "Ajout d'une image de la pi\xE8ce d'identit\xE9",
                                      "prepend-icon": "",
                                      "prepend-inner-icon": "mdi-id-card",
                                      variant: "outlined"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VFileInput, {
                                        modelValue: unref(imageOfIdentification),
                                        "onUpdate:modelValue": ($event) => isRef(imageOfIdentification) ? imageOfIdentification.value = $event : null,
                                        color: "primary",
                                        density: "compact",
                                        label: "Ajout d'une image de la pi\xE8ce d'identit\xE9",
                                        "prepend-icon": "",
                                        "prepend-inner-icon": "mdi-id-card",
                                        variant: "outlined"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, { cols: "6" }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      modelValue: unref(lastName),
                                      "onUpdate:modelValue": ($event) => isRef(lastName) ? lastName.value = $event : null,
                                      color: "primary",
                                      label: "Nom",
                                      variant: "outlined",
                                      density: "compact"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "6" }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      modelValue: unref(firstName),
                                      "onUpdate:modelValue": ($event) => isRef(firstName) ? firstName.value = $event : null,
                                      color: "primary",
                                      label: "Pr\xE9noms",
                                      variant: "outlined",
                                      density: "compact"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "6" }, {
                                  default: withCtx(() => [
                                    createVNode(VSelect, {
                                      modelValue: unref(gender),
                                      "onUpdate:modelValue": ($event) => isRef(gender) ? gender.value = $event : null,
                                      color: "primary",
                                      label: "Sexe",
                                      items: ["Homme", "Femme"],
                                      variant: "outlined",
                                      density: "compact"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "6" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_date_input, {
                                      modelValue: unref(birthDate),
                                      "onUpdate:modelValue": ($event) => isRef(birthDate) ? birthDate.value = $event : null,
                                      color: "primary",
                                      "prepend-icon": "",
                                      density: "compact",
                                      label: "Date de naissance",
                                      variant: "outlined",
                                      max: unref(maxDate),
                                      year: new Date(unref(maxDate)).getFullYear()
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "max", "year"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "6" }, {
                                  default: withCtx(() => [
                                    createVNode(VSelect, {
                                      modelValue: unref(maritalStatus),
                                      "onUpdate:modelValue": ($event) => isRef(maritalStatus) ? maritalStatus.value = $event : null,
                                      color: "primary",
                                      label: "Situation matrimoniale",
                                      items: ["Mari\xE9", "C\xE9libataire", "Divorc\xE9", "Veuf"],
                                      variant: "outlined",
                                      density: "compact"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "6" }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      modelValue: unref(email),
                                      "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                      color: "primary",
                                      label: "Email",
                                      density: "compact",
                                      variant: "outlined",
                                      rules: [emailRule]
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "6" }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      modelValue: unref(phone),
                                      "onUpdate:modelValue": ($event) => isRef(phone) ? phone.value = $event : null,
                                      color: "primary",
                                      label: "T\xE9l\xE9phone",
                                      density: "compact",
                                      variant: "outlined"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "6" }, {
                                  default: withCtx(() => [
                                    createVNode(VSelect, {
                                      modelValue: unref(identification),
                                      "onUpdate:modelValue": ($event) => isRef(identification) ? identification.value = $event : null,
                                      color: "primary",
                                      label: "Pi\xE8ce d'identit\xE9",
                                      density: "compact",
                                      items: ["CNI", "Passeport"],
                                      variant: "outlined"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "6" }, {
                                  default: withCtx(() => [
                                    createVNode(VRow, null, {
                                      default: withCtx(() => [
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: unref(identificationNumber),
                                              "onUpdate:modelValue": ($event) => isRef(identificationNumber) ? identificationNumber.value = $event : null,
                                              color: "primary",
                                              density: "compact",
                                              label: "Num\xE9ro de la pi\xE8ce d'identit\xE9",
                                              variant: "outlined"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(VFileInput, {
                                      modelValue: unref(imageOfIdentification),
                                      "onUpdate:modelValue": ($event) => isRef(imageOfIdentification) ? imageOfIdentification.value = $event : null,
                                      color: "primary",
                                      density: "compact",
                                      label: "Ajout d'une image de la pi\xE8ce d'identit\xE9",
                                      "prepend-icon": "",
                                      "prepend-inner-icon": "mdi-id-card",
                                      variant: "outlined"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VRow, { dense: "" }, {
                            default: withCtx(() => [
                              createVNode(VCol, { cols: "6" }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    modelValue: unref(lastName),
                                    "onUpdate:modelValue": ($event) => isRef(lastName) ? lastName.value = $event : null,
                                    color: "primary",
                                    label: "Nom",
                                    variant: "outlined",
                                    density: "compact"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { cols: "6" }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    modelValue: unref(firstName),
                                    "onUpdate:modelValue": ($event) => isRef(firstName) ? firstName.value = $event : null,
                                    color: "primary",
                                    label: "Pr\xE9noms",
                                    variant: "outlined",
                                    density: "compact"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { cols: "6" }, {
                                default: withCtx(() => [
                                  createVNode(VSelect, {
                                    modelValue: unref(gender),
                                    "onUpdate:modelValue": ($event) => isRef(gender) ? gender.value = $event : null,
                                    color: "primary",
                                    label: "Sexe",
                                    items: ["Homme", "Femme"],
                                    variant: "outlined",
                                    density: "compact"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { cols: "6" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_date_input, {
                                    modelValue: unref(birthDate),
                                    "onUpdate:modelValue": ($event) => isRef(birthDate) ? birthDate.value = $event : null,
                                    color: "primary",
                                    "prepend-icon": "",
                                    density: "compact",
                                    label: "Date de naissance",
                                    variant: "outlined",
                                    max: unref(maxDate),
                                    year: new Date(unref(maxDate)).getFullYear()
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "max", "year"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { cols: "6" }, {
                                default: withCtx(() => [
                                  createVNode(VSelect, {
                                    modelValue: unref(maritalStatus),
                                    "onUpdate:modelValue": ($event) => isRef(maritalStatus) ? maritalStatus.value = $event : null,
                                    color: "primary",
                                    label: "Situation matrimoniale",
                                    items: ["Mari\xE9", "C\xE9libataire", "Divorc\xE9", "Veuf"],
                                    variant: "outlined",
                                    density: "compact"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { cols: "6" }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    modelValue: unref(email),
                                    "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                    color: "primary",
                                    label: "Email",
                                    density: "compact",
                                    variant: "outlined",
                                    rules: [emailRule]
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { cols: "6" }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    modelValue: unref(phone),
                                    "onUpdate:modelValue": ($event) => isRef(phone) ? phone.value = $event : null,
                                    color: "primary",
                                    label: "T\xE9l\xE9phone",
                                    density: "compact",
                                    variant: "outlined"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { cols: "6" }, {
                                default: withCtx(() => [
                                  createVNode(VSelect, {
                                    modelValue: unref(identification),
                                    "onUpdate:modelValue": ($event) => isRef(identification) ? identification.value = $event : null,
                                    color: "primary",
                                    label: "Pi\xE8ce d'identit\xE9",
                                    density: "compact",
                                    items: ["CNI", "Passeport"],
                                    variant: "outlined"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { cols: "6" }, {
                                default: withCtx(() => [
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(identificationNumber),
                                            "onUpdate:modelValue": ($event) => isRef(identificationNumber) ? identificationNumber.value = $event : null,
                                            color: "primary",
                                            density: "compact",
                                            label: "Num\xE9ro de la pi\xE8ce d'identit\xE9",
                                            variant: "outlined"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(VFileInput, {
                                    modelValue: unref(imageOfIdentification),
                                    "onUpdate:modelValue": ($event) => isRef(imageOfIdentification) ? imageOfIdentification.value = $event : null,
                                    color: "primary",
                                    density: "compact",
                                    label: "Ajout d'une image de la pi\xE8ce d'identit\xE9",
                                    "prepend-icon": "",
                                    "prepend-inner-icon": "mdi-id-card",
                                    variant: "outlined"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VDivider, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardActions, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VSpacer, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          text: "Annuler",
                          variant: "plain",
                          onClick: closeModal,
                          class: "text-none"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          color: "primary",
                          text: "Enregistrer",
                          variant: "tonal",
                          onClick: handleCustomer,
                          class: "text-none"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VSpacer),
                          createVNode(VBtn, {
                            text: "Annuler",
                            variant: "plain",
                            onClick: closeModal,
                            class: "text-none"
                          }),
                          createVNode(VBtn, {
                            color: "primary",
                            text: "Enregistrer",
                            variant: "tonal",
                            onClick: handleCustomer,
                            class: "text-none"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCardText, null, {
                      default: withCtx(() => [
                        createVNode(VRow, { dense: "" }, {
                          default: withCtx(() => [
                            createVNode(VCol, { cols: "6" }, {
                              default: withCtx(() => [
                                createVNode(VTextField, {
                                  modelValue: unref(lastName),
                                  "onUpdate:modelValue": ($event) => isRef(lastName) ? lastName.value = $event : null,
                                  color: "primary",
                                  label: "Nom",
                                  variant: "outlined",
                                  density: "compact"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, { cols: "6" }, {
                              default: withCtx(() => [
                                createVNode(VTextField, {
                                  modelValue: unref(firstName),
                                  "onUpdate:modelValue": ($event) => isRef(firstName) ? firstName.value = $event : null,
                                  color: "primary",
                                  label: "Pr\xE9noms",
                                  variant: "outlined",
                                  density: "compact"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, { cols: "6" }, {
                              default: withCtx(() => [
                                createVNode(VSelect, {
                                  modelValue: unref(gender),
                                  "onUpdate:modelValue": ($event) => isRef(gender) ? gender.value = $event : null,
                                  color: "primary",
                                  label: "Sexe",
                                  items: ["Homme", "Femme"],
                                  variant: "outlined",
                                  density: "compact"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, { cols: "6" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_date_input, {
                                  modelValue: unref(birthDate),
                                  "onUpdate:modelValue": ($event) => isRef(birthDate) ? birthDate.value = $event : null,
                                  color: "primary",
                                  "prepend-icon": "",
                                  density: "compact",
                                  label: "Date de naissance",
                                  variant: "outlined",
                                  max: unref(maxDate),
                                  year: new Date(unref(maxDate)).getFullYear()
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "max", "year"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, { cols: "6" }, {
                              default: withCtx(() => [
                                createVNode(VSelect, {
                                  modelValue: unref(maritalStatus),
                                  "onUpdate:modelValue": ($event) => isRef(maritalStatus) ? maritalStatus.value = $event : null,
                                  color: "primary",
                                  label: "Situation matrimoniale",
                                  items: ["Mari\xE9", "C\xE9libataire", "Divorc\xE9", "Veuf"],
                                  variant: "outlined",
                                  density: "compact"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, { cols: "6" }, {
                              default: withCtx(() => [
                                createVNode(VTextField, {
                                  modelValue: unref(email),
                                  "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                  color: "primary",
                                  label: "Email",
                                  density: "compact",
                                  variant: "outlined",
                                  rules: [emailRule]
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, { cols: "6" }, {
                              default: withCtx(() => [
                                createVNode(VTextField, {
                                  modelValue: unref(phone),
                                  "onUpdate:modelValue": ($event) => isRef(phone) ? phone.value = $event : null,
                                  color: "primary",
                                  label: "T\xE9l\xE9phone",
                                  density: "compact",
                                  variant: "outlined"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, { cols: "6" }, {
                              default: withCtx(() => [
                                createVNode(VSelect, {
                                  modelValue: unref(identification),
                                  "onUpdate:modelValue": ($event) => isRef(identification) ? identification.value = $event : null,
                                  color: "primary",
                                  label: "Pi\xE8ce d'identit\xE9",
                                  density: "compact",
                                  items: ["CNI", "Passeport"],
                                  variant: "outlined"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, { cols: "6" }, {
                              default: withCtx(() => [
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(identificationNumber),
                                          "onUpdate:modelValue": ($event) => isRef(identificationNumber) ? identificationNumber.value = $event : null,
                                          color: "primary",
                                          density: "compact",
                                          label: "Num\xE9ro de la pi\xE8ce d'identit\xE9",
                                          variant: "outlined"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode(VFileInput, {
                                  modelValue: unref(imageOfIdentification),
                                  "onUpdate:modelValue": ($event) => isRef(imageOfIdentification) ? imageOfIdentification.value = $event : null,
                                  color: "primary",
                                  density: "compact",
                                  label: "Ajout d'une image de la pi\xE8ce d'identit\xE9",
                                  "prepend-icon": "",
                                  "prepend-inner-icon": "mdi-id-card",
                                  variant: "outlined"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VDivider),
                    createVNode(VCardActions, null, {
                      default: withCtx(() => [
                        createVNode(VSpacer),
                        createVNode(VBtn, {
                          text: "Annuler",
                          variant: "plain",
                          onClick: closeModal,
                          class: "text-none"
                        }),
                        createVNode(VBtn, {
                          color: "primary",
                          text: "Enregistrer",
                          variant: "tonal",
                          onClick: handleCustomer,
                          class: "text-none"
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
              createVNode(VCard, {
                "prepend-icon": "mdi-account-tie-voice",
                title: "Cr\xE9er un vendeur"
              }, {
                default: withCtx(() => [
                  createVNode(VCardText, null, {
                    default: withCtx(() => [
                      createVNode(VRow, { dense: "" }, {
                        default: withCtx(() => [
                          createVNode(VCol, { cols: "6" }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                modelValue: unref(lastName),
                                "onUpdate:modelValue": ($event) => isRef(lastName) ? lastName.value = $event : null,
                                color: "primary",
                                label: "Nom",
                                variant: "outlined",
                                density: "compact"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { cols: "6" }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                modelValue: unref(firstName),
                                "onUpdate:modelValue": ($event) => isRef(firstName) ? firstName.value = $event : null,
                                color: "primary",
                                label: "Pr\xE9noms",
                                variant: "outlined",
                                density: "compact"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { cols: "6" }, {
                            default: withCtx(() => [
                              createVNode(VSelect, {
                                modelValue: unref(gender),
                                "onUpdate:modelValue": ($event) => isRef(gender) ? gender.value = $event : null,
                                color: "primary",
                                label: "Sexe",
                                items: ["Homme", "Femme"],
                                variant: "outlined",
                                density: "compact"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { cols: "6" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_date_input, {
                                modelValue: unref(birthDate),
                                "onUpdate:modelValue": ($event) => isRef(birthDate) ? birthDate.value = $event : null,
                                color: "primary",
                                "prepend-icon": "",
                                density: "compact",
                                label: "Date de naissance",
                                variant: "outlined",
                                max: unref(maxDate),
                                year: new Date(unref(maxDate)).getFullYear()
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "max", "year"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { cols: "6" }, {
                            default: withCtx(() => [
                              createVNode(VSelect, {
                                modelValue: unref(maritalStatus),
                                "onUpdate:modelValue": ($event) => isRef(maritalStatus) ? maritalStatus.value = $event : null,
                                color: "primary",
                                label: "Situation matrimoniale",
                                items: ["Mari\xE9", "C\xE9libataire", "Divorc\xE9", "Veuf"],
                                variant: "outlined",
                                density: "compact"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { cols: "6" }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                modelValue: unref(email),
                                "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                color: "primary",
                                label: "Email",
                                density: "compact",
                                variant: "outlined",
                                rules: [emailRule]
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { cols: "6" }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                modelValue: unref(phone),
                                "onUpdate:modelValue": ($event) => isRef(phone) ? phone.value = $event : null,
                                color: "primary",
                                label: "T\xE9l\xE9phone",
                                density: "compact",
                                variant: "outlined"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { cols: "6" }, {
                            default: withCtx(() => [
                              createVNode(VSelect, {
                                modelValue: unref(identification),
                                "onUpdate:modelValue": ($event) => isRef(identification) ? identification.value = $event : null,
                                color: "primary",
                                label: "Pi\xE8ce d'identit\xE9",
                                density: "compact",
                                items: ["CNI", "Passeport"],
                                variant: "outlined"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { cols: "6" }, {
                            default: withCtx(() => [
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(identificationNumber),
                                        "onUpdate:modelValue": ($event) => isRef(identificationNumber) ? identificationNumber.value = $event : null,
                                        color: "primary",
                                        density: "compact",
                                        label: "Num\xE9ro de la pi\xE8ce d'identit\xE9",
                                        variant: "outlined"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(VFileInput, {
                                modelValue: unref(imageOfIdentification),
                                "onUpdate:modelValue": ($event) => isRef(imageOfIdentification) ? imageOfIdentification.value = $event : null,
                                color: "primary",
                                density: "compact",
                                label: "Ajout d'une image de la pi\xE8ce d'identit\xE9",
                                "prepend-icon": "",
                                "prepend-inner-icon": "mdi-id-card",
                                variant: "outlined"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VDivider),
                  createVNode(VCardActions, null, {
                    default: withCtx(() => [
                      createVNode(VSpacer),
                      createVNode(VBtn, {
                        text: "Annuler",
                        variant: "plain",
                        onClick: closeModal,
                        class: "text-none"
                      }),
                      createVNode(VBtn, {
                        color: "primary",
                        text: "Enregistrer",
                        variant: "tonal",
                        onClick: handleCustomer,
                        class: "text-none"
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
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/createSellerModal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
const testUrl = "http://serverizynotary.izydr.net";
const _sfc_main = {
  __name: "selling",
  __ssrInlineRender: true,
  setup(__props) {
    const open = ref(false);
    const openSellerModal = ref(false);
    const openConf = ref(false);
    const customers = ref([]);
    const customerId = ref(null);
    const selectedCustomer = ref(null);
    const sellers = ref([]);
    const sellerId = ref(null);
    ref(null);
    const firstName = ref("");
    const lastName = ref("");
    const birthDate = ref("");
    const gender = ref("");
    const identificationNumber = ref("");
    const sellerLastName = ref("");
    const sellerFirstName = ref("");
    const sellerGender = ref("");
    const sellerMaritalStatus = ref("");
    const sellerCNINumber = ref("");
    const sellerCNI = ref(null);
    const partnerCNI = ref(null);
    const certificateOfBirthOrMarriage = ref(null);
    const CIEOrSODECIInvoice = ref(null);
    const taxStatusCertificate = ref(null);
    const titleDeed = ref(null);
    const landRegistry = ref(null);
    const certificateOfLocation = ref(null);
    const toggleConfModal = () => {
      openConf.value = !openConf.value;
    };
    const toggleModal = () => {
      open.value = !open.value;
    };
    const toggleSellerModal = () => {
      openSellerModal.value = !openSellerModal.value;
    };
    const loadCustomers = async () => {
      try {
        const fetchCustomers = await $fetch(
          `${testUrl}/customers`
        );
        if (fetchCustomers) {
          customers.value = fetchCustomers.map((customer) => ({
            ID: customer.id,
            LASTNAME: customer.lastName,
            FIRSTNAME: customer.firstName,
            NAME: customer.lastName + " " + customer.firstName,
            IDENTIFICATION_NUMBER: customer.identificationNumber,
            BIRTHDATE: customer.birthDate,
            GENDER: customer.gender
          }));
        }
      } catch (err) {
        console.error("Erreur lors du chargement des clients :", err);
      }
    };
    loadCustomers();
    watchEffect(() => {
      if (!open.value) {
        loadCustomers();
      }
    });
    watch(customerId, (newSelectedCustomer) => {
      selectedCustomer.value = customers.value.find(
        (customer) => customer.ID === newSelectedCustomer.ID
      );
      if (selectedCustomer.value) {
        lastName.value = selectedCustomer.value.LASTNAME;
        firstName.value = selectedCustomer.value.FIRSTNAME;
        birthDate.value = new Date(
          selectedCustomer.value.BIRTHDATE
        ).toLocaleDateString();
        gender.value = selectedCustomer.value.GENDER;
        identificationNumber.value = selectedCustomer.value.IDENTIFICATION_NUMBER;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_back_button = _sfc_main$2;
      const _component_create_customer_modal = _sfc_main$3;
      const _component_create_seller_modal = _sfc_main$1;
      const _component_required_document = _sfc_main$4;
      const _component_confirmation_modal = _sfc_main$5;
      _push(`<!--[--><div class="ma-4">`);
      _push(ssrRenderComponent(_component_back_button, {
        title: "Proc\xE9dure de vente",
        goBackTo: "/addProcedure"
      }, null, _parent));
      _push(`</div><div class="ma-2">`);
      _push(ssrRenderComponent(VRow, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              lg: "5"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VRow, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCol, { cols: "12" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VSheet, {
                                elevation: 4,
                                rounded: "",
                                height: "100%",
                                class: "pa-2"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<h4 class="mb-3"${_scopeId5}>S\xE9lection du client</h4><div class="d-flex flex-column justify-center"${_scopeId5}>`);
                                    _push6(ssrRenderComponent(VForm, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VCombobox, {
                                            modelValue: unref(customerId),
                                            "onUpdate:modelValue": ($event) => isRef(customerId) ? customerId.value = $event : null,
                                            color: "primary",
                                            label: "Selectionner un client",
                                            items: unref(customers),
                                            "item-title": "NAME",
                                            "item-value": "ID",
                                            variant: "outlined",
                                            "hide-details": "",
                                            density: "compact"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VCombobox, {
                                              modelValue: unref(customerId),
                                              "onUpdate:modelValue": ($event) => isRef(customerId) ? customerId.value = $event : null,
                                              color: "primary",
                                              label: "Selectionner un client",
                                              items: unref(customers),
                                              "item-title": "NAME",
                                              "item-value": "ID",
                                              variant: "outlined",
                                              "hide-details": "",
                                              density: "compact"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VDivider, { class: "my-5" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`ou`);
                                        } else {
                                          return [
                                            createTextVNode("ou")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VBtn, {
                                      color: "primary",
                                      class: "text-none align-self-center",
                                      "prepend-icon": "mdi-account-tie",
                                      onClick: toggleModal
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Cr\xE9er un client`);
                                        } else {
                                          return [
                                            createTextVNode("Cr\xE9er un client")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_create_customer_modal, {
                                      open: unref(open),
                                      "onUpdate:open": ($event) => open.value = $event
                                    }, null, _parent6, _scopeId5));
                                    _push6(`</div>`);
                                  } else {
                                    return [
                                      createVNode("h4", { class: "mb-3" }, "S\xE9lection du client"),
                                      createVNode("div", { class: "d-flex flex-column justify-center" }, [
                                        createVNode(VForm, null, {
                                          default: withCtx(() => [
                                            createVNode(VCombobox, {
                                              modelValue: unref(customerId),
                                              "onUpdate:modelValue": ($event) => isRef(customerId) ? customerId.value = $event : null,
                                              color: "primary",
                                              label: "Selectionner un client",
                                              items: unref(customers),
                                              "item-title": "NAME",
                                              "item-value": "ID",
                                              variant: "outlined",
                                              "hide-details": "",
                                              density: "compact"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VDivider, { class: "my-5" }, {
                                          default: withCtx(() => [
                                            createTextVNode("ou")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VBtn, {
                                          color: "primary",
                                          class: "text-none align-self-center",
                                          "prepend-icon": "mdi-account-tie",
                                          onClick: toggleModal
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Cr\xE9er un client")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_create_customer_modal, {
                                          open: unref(open),
                                          "onUpdate:open": ($event) => open.value = $event
                                        }, null, 8, ["open", "onUpdate:open"])
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VSheet, {
                                  elevation: 4,
                                  rounded: "",
                                  height: "100%",
                                  class: "pa-2"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("h4", { class: "mb-3" }, "S\xE9lection du client"),
                                    createVNode("div", { class: "d-flex flex-column justify-center" }, [
                                      createVNode(VForm, null, {
                                        default: withCtx(() => [
                                          createVNode(VCombobox, {
                                            modelValue: unref(customerId),
                                            "onUpdate:modelValue": ($event) => isRef(customerId) ? customerId.value = $event : null,
                                            color: "primary",
                                            label: "Selectionner un client",
                                            items: unref(customers),
                                            "item-title": "NAME",
                                            "item-value": "ID",
                                            variant: "outlined",
                                            "hide-details": "",
                                            density: "compact"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VDivider, { class: "my-5" }, {
                                        default: withCtx(() => [
                                          createTextVNode("ou")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VBtn, {
                                        color: "primary",
                                        class: "text-none align-self-center",
                                        "prepend-icon": "mdi-account-tie",
                                        onClick: toggleModal
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Cr\xE9er un client")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_create_customer_modal, {
                                        open: unref(open),
                                        "onUpdate:open": ($event) => open.value = $event
                                      }, null, 8, ["open", "onUpdate:open"])
                                    ])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, { cols: "12" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VSheet, {
                                elevation: 4,
                                rounded: "",
                                height: "100%",
                                class: "pa-2"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<h4 class="mb-3"${_scopeId5}>Aper\xE7u des informations du client</h4>`);
                                    _push6(ssrRenderComponent(VForm, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VRow, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VCol, {
                                                  cols: "12",
                                                  sm: "5"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VTextField, {
                                                        modelValue: unref(lastName),
                                                        "onUpdate:modelValue": ($event) => isRef(lastName) ? lastName.value = $event : null,
                                                        color: "primary",
                                                        label: "Nom",
                                                        variant: "outlined",
                                                        "hide-details": "",
                                                        disabled: "",
                                                        density: "compact"
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VTextField, {
                                                          modelValue: unref(lastName),
                                                          "onUpdate:modelValue": ($event) => isRef(lastName) ? lastName.value = $event : null,
                                                          color: "primary",
                                                          label: "Nom",
                                                          variant: "outlined",
                                                          "hide-details": "",
                                                          disabled: "",
                                                          density: "compact"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VCol, {
                                                  cols: "12",
                                                  sm: "7"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VTextField, {
                                                        modelValue: unref(firstName),
                                                        "onUpdate:modelValue": ($event) => isRef(firstName) ? firstName.value = $event : null,
                                                        color: "primary",
                                                        label: "Pr\xE9noms",
                                                        variant: "outlined",
                                                        "hide-details": "",
                                                        disabled: "",
                                                        density: "compact"
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VTextField, {
                                                          modelValue: unref(firstName),
                                                          "onUpdate:modelValue": ($event) => isRef(firstName) ? firstName.value = $event : null,
                                                          color: "primary",
                                                          label: "Pr\xE9noms",
                                                          variant: "outlined",
                                                          "hide-details": "",
                                                          disabled: "",
                                                          density: "compact"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VCol, {
                                                  cols: "12",
                                                  sm: "5"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VTextField, {
                                                        modelValue: unref(identificationNumber),
                                                        "onUpdate:modelValue": ($event) => isRef(identificationNumber) ? identificationNumber.value = $event : null,
                                                        color: "primary",
                                                        label: "CNI",
                                                        variant: "outlined",
                                                        "hide-details": "",
                                                        disabled: "",
                                                        density: "compact"
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VTextField, {
                                                          modelValue: unref(identificationNumber),
                                                          "onUpdate:modelValue": ($event) => isRef(identificationNumber) ? identificationNumber.value = $event : null,
                                                          color: "primary",
                                                          label: "CNI",
                                                          variant: "outlined",
                                                          "hide-details": "",
                                                          disabled: "",
                                                          density: "compact"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VCol, {
                                                  cols: "12",
                                                  sm: "4"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VTextField, {
                                                        modelValue: unref(birthDate),
                                                        "onUpdate:modelValue": ($event) => isRef(birthDate) ? birthDate.value = $event : null,
                                                        color: "primary",
                                                        label: "Date de naissance",
                                                        variant: "outlined",
                                                        "hide-details": "",
                                                        disabled: "",
                                                        density: "compact"
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VTextField, {
                                                          modelValue: unref(birthDate),
                                                          "onUpdate:modelValue": ($event) => isRef(birthDate) ? birthDate.value = $event : null,
                                                          color: "primary",
                                                          label: "Date de naissance",
                                                          variant: "outlined",
                                                          "hide-details": "",
                                                          disabled: "",
                                                          density: "compact"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VCol, {
                                                  cols: "12",
                                                  sm: "3"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VTextField, {
                                                        modelValue: unref(gender),
                                                        "onUpdate:modelValue": ($event) => isRef(gender) ? gender.value = $event : null,
                                                        color: "primary",
                                                        label: "Sexe",
                                                        variant: "outlined",
                                                        "hide-details": "",
                                                        disabled: "",
                                                        density: "compact"
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VTextField, {
                                                          modelValue: unref(gender),
                                                          "onUpdate:modelValue": ($event) => isRef(gender) ? gender.value = $event : null,
                                                          color: "primary",
                                                          label: "Sexe",
                                                          variant: "outlined",
                                                          "hide-details": "",
                                                          disabled: "",
                                                          density: "compact"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VCol, {
                                                    cols: "12",
                                                    sm: "5"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VTextField, {
                                                        modelValue: unref(lastName),
                                                        "onUpdate:modelValue": ($event) => isRef(lastName) ? lastName.value = $event : null,
                                                        color: "primary",
                                                        label: "Nom",
                                                        variant: "outlined",
                                                        "hide-details": "",
                                                        disabled: "",
                                                        density: "compact"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VCol, {
                                                    cols: "12",
                                                    sm: "7"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VTextField, {
                                                        modelValue: unref(firstName),
                                                        "onUpdate:modelValue": ($event) => isRef(firstName) ? firstName.value = $event : null,
                                                        color: "primary",
                                                        label: "Pr\xE9noms",
                                                        variant: "outlined",
                                                        "hide-details": "",
                                                        disabled: "",
                                                        density: "compact"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VCol, {
                                                    cols: "12",
                                                    sm: "5"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VTextField, {
                                                        modelValue: unref(identificationNumber),
                                                        "onUpdate:modelValue": ($event) => isRef(identificationNumber) ? identificationNumber.value = $event : null,
                                                        color: "primary",
                                                        label: "CNI",
                                                        variant: "outlined",
                                                        "hide-details": "",
                                                        disabled: "",
                                                        density: "compact"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VCol, {
                                                    cols: "12",
                                                    sm: "4"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VTextField, {
                                                        modelValue: unref(birthDate),
                                                        "onUpdate:modelValue": ($event) => isRef(birthDate) ? birthDate.value = $event : null,
                                                        color: "primary",
                                                        label: "Date de naissance",
                                                        variant: "outlined",
                                                        "hide-details": "",
                                                        disabled: "",
                                                        density: "compact"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VCol, {
                                                    cols: "12",
                                                    sm: "3"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VTextField, {
                                                        modelValue: unref(gender),
                                                        "onUpdate:modelValue": ($event) => isRef(gender) ? gender.value = $event : null,
                                                        color: "primary",
                                                        label: "Sexe",
                                                        variant: "outlined",
                                                        "hide-details": "",
                                                        disabled: "",
                                                        density: "compact"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VRow, null, {
                                              default: withCtx(() => [
                                                createVNode(VCol, {
                                                  cols: "12",
                                                  sm: "5"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VTextField, {
                                                      modelValue: unref(lastName),
                                                      "onUpdate:modelValue": ($event) => isRef(lastName) ? lastName.value = $event : null,
                                                      color: "primary",
                                                      label: "Nom",
                                                      variant: "outlined",
                                                      "hide-details": "",
                                                      disabled: "",
                                                      density: "compact"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VCol, {
                                                  cols: "12",
                                                  sm: "7"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VTextField, {
                                                      modelValue: unref(firstName),
                                                      "onUpdate:modelValue": ($event) => isRef(firstName) ? firstName.value = $event : null,
                                                      color: "primary",
                                                      label: "Pr\xE9noms",
                                                      variant: "outlined",
                                                      "hide-details": "",
                                                      disabled: "",
                                                      density: "compact"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VCol, {
                                                  cols: "12",
                                                  sm: "5"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VTextField, {
                                                      modelValue: unref(identificationNumber),
                                                      "onUpdate:modelValue": ($event) => isRef(identificationNumber) ? identificationNumber.value = $event : null,
                                                      color: "primary",
                                                      label: "CNI",
                                                      variant: "outlined",
                                                      "hide-details": "",
                                                      disabled: "",
                                                      density: "compact"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VCol, {
                                                  cols: "12",
                                                  sm: "4"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VTextField, {
                                                      modelValue: unref(birthDate),
                                                      "onUpdate:modelValue": ($event) => isRef(birthDate) ? birthDate.value = $event : null,
                                                      color: "primary",
                                                      label: "Date de naissance",
                                                      variant: "outlined",
                                                      "hide-details": "",
                                                      disabled: "",
                                                      density: "compact"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VCol, {
                                                  cols: "12",
                                                  sm: "3"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VTextField, {
                                                      modelValue: unref(gender),
                                                      "onUpdate:modelValue": ($event) => isRef(gender) ? gender.value = $event : null,
                                                      color: "primary",
                                                      label: "Sexe",
                                                      variant: "outlined",
                                                      "hide-details": "",
                                                      disabled: "",
                                                      density: "compact"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode("h4", { class: "mb-3" }, "Aper\xE7u des informations du client"),
                                      createVNode(VForm, null, {
                                        default: withCtx(() => [
                                          createVNode(VRow, null, {
                                            default: withCtx(() => [
                                              createVNode(VCol, {
                                                cols: "12",
                                                sm: "5"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(lastName),
                                                    "onUpdate:modelValue": ($event) => isRef(lastName) ? lastName.value = $event : null,
                                                    color: "primary",
                                                    label: "Nom",
                                                    variant: "outlined",
                                                    "hide-details": "",
                                                    disabled: "",
                                                    density: "compact"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VCol, {
                                                cols: "12",
                                                sm: "7"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(firstName),
                                                    "onUpdate:modelValue": ($event) => isRef(firstName) ? firstName.value = $event : null,
                                                    color: "primary",
                                                    label: "Pr\xE9noms",
                                                    variant: "outlined",
                                                    "hide-details": "",
                                                    disabled: "",
                                                    density: "compact"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VCol, {
                                                cols: "12",
                                                sm: "5"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(identificationNumber),
                                                    "onUpdate:modelValue": ($event) => isRef(identificationNumber) ? identificationNumber.value = $event : null,
                                                    color: "primary",
                                                    label: "CNI",
                                                    variant: "outlined",
                                                    "hide-details": "",
                                                    disabled: "",
                                                    density: "compact"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VCol, {
                                                cols: "12",
                                                sm: "4"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(birthDate),
                                                    "onUpdate:modelValue": ($event) => isRef(birthDate) ? birthDate.value = $event : null,
                                                    color: "primary",
                                                    label: "Date de naissance",
                                                    variant: "outlined",
                                                    "hide-details": "",
                                                    disabled: "",
                                                    density: "compact"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VCol, {
                                                cols: "12",
                                                sm: "3"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(gender),
                                                    "onUpdate:modelValue": ($event) => isRef(gender) ? gender.value = $event : null,
                                                    color: "primary",
                                                    label: "Sexe",
                                                    variant: "outlined",
                                                    "hide-details": "",
                                                    disabled: "",
                                                    density: "compact"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VSheet, {
                                  elevation: 4,
                                  rounded: "",
                                  height: "100%",
                                  class: "pa-2"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("h4", { class: "mb-3" }, "Aper\xE7u des informations du client"),
                                    createVNode(VForm, null, {
                                      default: withCtx(() => [
                                        createVNode(VRow, null, {
                                          default: withCtx(() => [
                                            createVNode(VCol, {
                                              cols: "12",
                                              sm: "5"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(lastName),
                                                  "onUpdate:modelValue": ($event) => isRef(lastName) ? lastName.value = $event : null,
                                                  color: "primary",
                                                  label: "Nom",
                                                  variant: "outlined",
                                                  "hide-details": "",
                                                  disabled: "",
                                                  density: "compact"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              sm: "7"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(firstName),
                                                  "onUpdate:modelValue": ($event) => isRef(firstName) ? firstName.value = $event : null,
                                                  color: "primary",
                                                  label: "Pr\xE9noms",
                                                  variant: "outlined",
                                                  "hide-details": "",
                                                  disabled: "",
                                                  density: "compact"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              sm: "5"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(identificationNumber),
                                                  "onUpdate:modelValue": ($event) => isRef(identificationNumber) ? identificationNumber.value = $event : null,
                                                  color: "primary",
                                                  label: "CNI",
                                                  variant: "outlined",
                                                  "hide-details": "",
                                                  disabled: "",
                                                  density: "compact"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              sm: "4"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(birthDate),
                                                  "onUpdate:modelValue": ($event) => isRef(birthDate) ? birthDate.value = $event : null,
                                                  color: "primary",
                                                  label: "Date de naissance",
                                                  variant: "outlined",
                                                  "hide-details": "",
                                                  disabled: "",
                                                  density: "compact"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              sm: "3"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(gender),
                                                  "onUpdate:modelValue": ($event) => isRef(gender) ? gender.value = $event : null,
                                                  color: "primary",
                                                  label: "Sexe",
                                                  variant: "outlined",
                                                  "hide-details": "",
                                                  disabled: "",
                                                  density: "compact"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            })
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCol, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(VSheet, {
                                elevation: 4,
                                rounded: "",
                                height: "100%",
                                class: "pa-2"
                              }, {
                                default: withCtx(() => [
                                  createVNode("h4", { class: "mb-3" }, "S\xE9lection du client"),
                                  createVNode("div", { class: "d-flex flex-column justify-center" }, [
                                    createVNode(VForm, null, {
                                      default: withCtx(() => [
                                        createVNode(VCombobox, {
                                          modelValue: unref(customerId),
                                          "onUpdate:modelValue": ($event) => isRef(customerId) ? customerId.value = $event : null,
                                          color: "primary",
                                          label: "Selectionner un client",
                                          items: unref(customers),
                                          "item-title": "NAME",
                                          "item-value": "ID",
                                          variant: "outlined",
                                          "hide-details": "",
                                          density: "compact"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VDivider, { class: "my-5" }, {
                                      default: withCtx(() => [
                                        createTextVNode("ou")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VBtn, {
                                      color: "primary",
                                      class: "text-none align-self-center",
                                      "prepend-icon": "mdi-account-tie",
                                      onClick: toggleModal
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Cr\xE9er un client")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_create_customer_modal, {
                                      open: unref(open),
                                      "onUpdate:open": ($event) => open.value = $event
                                    }, null, 8, ["open", "onUpdate:open"])
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(VSheet, {
                                elevation: 4,
                                rounded: "",
                                height: "100%",
                                class: "pa-2"
                              }, {
                                default: withCtx(() => [
                                  createVNode("h4", { class: "mb-3" }, "Aper\xE7u des informations du client"),
                                  createVNode(VForm, null, {
                                    default: withCtx(() => [
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          createVNode(VCol, {
                                            cols: "12",
                                            sm: "5"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(lastName),
                                                "onUpdate:modelValue": ($event) => isRef(lastName) ? lastName.value = $event : null,
                                                color: "primary",
                                                label: "Nom",
                                                variant: "outlined",
                                                "hide-details": "",
                                                disabled: "",
                                                density: "compact"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            sm: "7"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(firstName),
                                                "onUpdate:modelValue": ($event) => isRef(firstName) ? firstName.value = $event : null,
                                                color: "primary",
                                                label: "Pr\xE9noms",
                                                variant: "outlined",
                                                "hide-details": "",
                                                disabled: "",
                                                density: "compact"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            sm: "5"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(identificationNumber),
                                                "onUpdate:modelValue": ($event) => isRef(identificationNumber) ? identificationNumber.value = $event : null,
                                                color: "primary",
                                                label: "CNI",
                                                variant: "outlined",
                                                "hide-details": "",
                                                disabled: "",
                                                density: "compact"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            sm: "4"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(birthDate),
                                                "onUpdate:modelValue": ($event) => isRef(birthDate) ? birthDate.value = $event : null,
                                                color: "primary",
                                                label: "Date de naissance",
                                                variant: "outlined",
                                                "hide-details": "",
                                                disabled: "",
                                                density: "compact"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            sm: "3"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(gender),
                                                "onUpdate:modelValue": ($event) => isRef(gender) ? gender.value = $event : null,
                                                color: "primary",
                                                label: "Sexe",
                                                variant: "outlined",
                                                "hide-details": "",
                                                disabled: "",
                                                density: "compact"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
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
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VRow, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCol, { cols: "12" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VSheet, {
                                elevation: 4,
                                rounded: "",
                                height: "100%",
                                class: "pa-2"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<h4 class="mb-3"${_scopeId5}>S\xE9lection du vendeur</h4><div class="d-flex flex-column justify-center"${_scopeId5}>`);
                                    _push6(ssrRenderComponent(VForm, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VCombobox, {
                                            modelValue: unref(sellerId),
                                            "onUpdate:modelValue": ($event) => isRef(sellerId) ? sellerId.value = $event : null,
                                            color: "primary",
                                            label: "Selectionner un vendeur",
                                            items: unref(sellers),
                                            "item-title": "NAME",
                                            "item-value": "ID",
                                            variant: "outlined",
                                            "hide-details": "",
                                            density: "compact"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VCombobox, {
                                              modelValue: unref(sellerId),
                                              "onUpdate:modelValue": ($event) => isRef(sellerId) ? sellerId.value = $event : null,
                                              color: "primary",
                                              label: "Selectionner un vendeur",
                                              items: unref(sellers),
                                              "item-title": "NAME",
                                              "item-value": "ID",
                                              variant: "outlined",
                                              "hide-details": "",
                                              density: "compact"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VDivider, { class: "my-5" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`ou`);
                                        } else {
                                          return [
                                            createTextVNode("ou")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VBtn, {
                                      color: "blue",
                                      class: "text-none align-self-center",
                                      "prepend-icon": "mdi-account-tie-voice",
                                      onClick: toggleSellerModal
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Cr\xE9er un vendeur`);
                                        } else {
                                          return [
                                            createTextVNode("Cr\xE9er un vendeur")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_create_seller_modal, {
                                      open: unref(openSellerModal),
                                      "onUpdate:open": ($event) => openSellerModal.value = $event
                                    }, null, _parent6, _scopeId5));
                                    _push6(`</div>`);
                                  } else {
                                    return [
                                      createVNode("h4", { class: "mb-3" }, "S\xE9lection du vendeur"),
                                      createVNode("div", { class: "d-flex flex-column justify-center" }, [
                                        createVNode(VForm, null, {
                                          default: withCtx(() => [
                                            createVNode(VCombobox, {
                                              modelValue: unref(sellerId),
                                              "onUpdate:modelValue": ($event) => isRef(sellerId) ? sellerId.value = $event : null,
                                              color: "primary",
                                              label: "Selectionner un vendeur",
                                              items: unref(sellers),
                                              "item-title": "NAME",
                                              "item-value": "ID",
                                              variant: "outlined",
                                              "hide-details": "",
                                              density: "compact"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VDivider, { class: "my-5" }, {
                                          default: withCtx(() => [
                                            createTextVNode("ou")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VBtn, {
                                          color: "blue",
                                          class: "text-none align-self-center",
                                          "prepend-icon": "mdi-account-tie-voice",
                                          onClick: toggleSellerModal
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Cr\xE9er un vendeur")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_create_seller_modal, {
                                          open: unref(openSellerModal),
                                          "onUpdate:open": ($event) => openSellerModal.value = $event
                                        }, null, 8, ["open", "onUpdate:open"])
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VSheet, {
                                  elevation: 4,
                                  rounded: "",
                                  height: "100%",
                                  class: "pa-2"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("h4", { class: "mb-3" }, "S\xE9lection du vendeur"),
                                    createVNode("div", { class: "d-flex flex-column justify-center" }, [
                                      createVNode(VForm, null, {
                                        default: withCtx(() => [
                                          createVNode(VCombobox, {
                                            modelValue: unref(sellerId),
                                            "onUpdate:modelValue": ($event) => isRef(sellerId) ? sellerId.value = $event : null,
                                            color: "primary",
                                            label: "Selectionner un vendeur",
                                            items: unref(sellers),
                                            "item-title": "NAME",
                                            "item-value": "ID",
                                            variant: "outlined",
                                            "hide-details": "",
                                            density: "compact"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VDivider, { class: "my-5" }, {
                                        default: withCtx(() => [
                                          createTextVNode("ou")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VBtn, {
                                        color: "blue",
                                        class: "text-none align-self-center",
                                        "prepend-icon": "mdi-account-tie-voice",
                                        onClick: toggleSellerModal
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Cr\xE9er un vendeur")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_create_seller_modal, {
                                        open: unref(openSellerModal),
                                        "onUpdate:open": ($event) => openSellerModal.value = $event
                                      }, null, 8, ["open", "onUpdate:open"])
                                    ])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, { cols: "12" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VSheet, {
                                elevation: 4,
                                rounded: "",
                                height: "100%",
                                class: "pa-4"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<h4 class="mb-3"${_scopeId5}>Aper\xE7u des informations du vendeur</h4>`);
                                    _push6(ssrRenderComponent(VRow, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            sm: "5"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: unref(sellerLastName),
                                                  "onUpdate:modelValue": ($event) => isRef(sellerLastName) ? sellerLastName.value = $event : null,
                                                  color: "primary",
                                                  label: "Nom",
                                                  variant: "outlined",
                                                  "hide-details": "",
                                                  disabled: "",
                                                  density: "compact"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(sellerLastName),
                                                    "onUpdate:modelValue": ($event) => isRef(sellerLastName) ? sellerLastName.value = $event : null,
                                                    color: "primary",
                                                    label: "Nom",
                                                    variant: "outlined",
                                                    "hide-details": "",
                                                    disabled: "",
                                                    density: "compact"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            sm: "7"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: unref(sellerFirstName),
                                                  "onUpdate:modelValue": ($event) => isRef(sellerFirstName) ? sellerFirstName.value = $event : null,
                                                  color: "primary",
                                                  label: "Pr\xE9noms",
                                                  variant: "outlined",
                                                  "hide-details": "",
                                                  disabled: "",
                                                  density: "compact"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(sellerFirstName),
                                                    "onUpdate:modelValue": ($event) => isRef(sellerFirstName) ? sellerFirstName.value = $event : null,
                                                    color: "primary",
                                                    label: "Pr\xE9noms",
                                                    variant: "outlined",
                                                    "hide-details": "",
                                                    disabled: "",
                                                    density: "compact"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            sm: "5"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: unref(sellerCNINumber),
                                                  "onUpdate:modelValue": ($event) => isRef(sellerCNINumber) ? sellerCNINumber.value = $event : null,
                                                  color: "primary",
                                                  label: "Num\xE9ro de la CNI",
                                                  variant: "outlined",
                                                  "hide-details": "",
                                                  disabled: "",
                                                  density: "compact"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(sellerCNINumber),
                                                    "onUpdate:modelValue": ($event) => isRef(sellerCNINumber) ? sellerCNINumber.value = $event : null,
                                                    color: "primary",
                                                    label: "Num\xE9ro de la CNI",
                                                    variant: "outlined",
                                                    "hide-details": "",
                                                    disabled: "",
                                                    density: "compact"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            sm: "3"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: unref(sellerGender),
                                                  "onUpdate:modelValue": ($event) => isRef(sellerGender) ? sellerGender.value = $event : null,
                                                  color: "primary",
                                                  label: "Sexe",
                                                  variant: "outlined",
                                                  "hide-details": "",
                                                  disabled: "",
                                                  density: "compact"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(sellerGender),
                                                    "onUpdate:modelValue": ($event) => isRef(sellerGender) ? sellerGender.value = $event : null,
                                                    color: "primary",
                                                    label: "Sexe",
                                                    variant: "outlined",
                                                    "hide-details": "",
                                                    disabled: "",
                                                    density: "compact"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            sm: "4"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: unref(sellerMaritalStatus),
                                                  "onUpdate:modelValue": ($event) => isRef(sellerMaritalStatus) ? sellerMaritalStatus.value = $event : null,
                                                  color: "primary",
                                                  label: "Situation matrimoniale",
                                                  variant: "outlined",
                                                  "hide-details": "",
                                                  disabled: "",
                                                  density: "compact"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(sellerMaritalStatus),
                                                    "onUpdate:modelValue": ($event) => isRef(sellerMaritalStatus) ? sellerMaritalStatus.value = $event : null,
                                                    color: "primary",
                                                    label: "Situation matrimoniale",
                                                    variant: "outlined",
                                                    "hide-details": "",
                                                    disabled: "",
                                                    density: "compact"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VCol, {
                                              cols: "12",
                                              sm: "5"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(sellerLastName),
                                                  "onUpdate:modelValue": ($event) => isRef(sellerLastName) ? sellerLastName.value = $event : null,
                                                  color: "primary",
                                                  label: "Nom",
                                                  variant: "outlined",
                                                  "hide-details": "",
                                                  disabled: "",
                                                  density: "compact"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              sm: "7"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(sellerFirstName),
                                                  "onUpdate:modelValue": ($event) => isRef(sellerFirstName) ? sellerFirstName.value = $event : null,
                                                  color: "primary",
                                                  label: "Pr\xE9noms",
                                                  variant: "outlined",
                                                  "hide-details": "",
                                                  disabled: "",
                                                  density: "compact"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              sm: "5"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(sellerCNINumber),
                                                  "onUpdate:modelValue": ($event) => isRef(sellerCNINumber) ? sellerCNINumber.value = $event : null,
                                                  color: "primary",
                                                  label: "Num\xE9ro de la CNI",
                                                  variant: "outlined",
                                                  "hide-details": "",
                                                  disabled: "",
                                                  density: "compact"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              sm: "3"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(sellerGender),
                                                  "onUpdate:modelValue": ($event) => isRef(sellerGender) ? sellerGender.value = $event : null,
                                                  color: "primary",
                                                  label: "Sexe",
                                                  variant: "outlined",
                                                  "hide-details": "",
                                                  disabled: "",
                                                  density: "compact"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              sm: "4"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(sellerMaritalStatus),
                                                  "onUpdate:modelValue": ($event) => isRef(sellerMaritalStatus) ? sellerMaritalStatus.value = $event : null,
                                                  color: "primary",
                                                  label: "Situation matrimoniale",
                                                  variant: "outlined",
                                                  "hide-details": "",
                                                  disabled: "",
                                                  density: "compact"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode("h4", { class: "mb-3" }, "Aper\xE7u des informations du vendeur"),
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          createVNode(VCol, {
                                            cols: "12",
                                            sm: "5"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(sellerLastName),
                                                "onUpdate:modelValue": ($event) => isRef(sellerLastName) ? sellerLastName.value = $event : null,
                                                color: "primary",
                                                label: "Nom",
                                                variant: "outlined",
                                                "hide-details": "",
                                                disabled: "",
                                                density: "compact"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            sm: "7"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(sellerFirstName),
                                                "onUpdate:modelValue": ($event) => isRef(sellerFirstName) ? sellerFirstName.value = $event : null,
                                                color: "primary",
                                                label: "Pr\xE9noms",
                                                variant: "outlined",
                                                "hide-details": "",
                                                disabled: "",
                                                density: "compact"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            sm: "5"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(sellerCNINumber),
                                                "onUpdate:modelValue": ($event) => isRef(sellerCNINumber) ? sellerCNINumber.value = $event : null,
                                                color: "primary",
                                                label: "Num\xE9ro de la CNI",
                                                variant: "outlined",
                                                "hide-details": "",
                                                disabled: "",
                                                density: "compact"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            sm: "3"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(sellerGender),
                                                "onUpdate:modelValue": ($event) => isRef(sellerGender) ? sellerGender.value = $event : null,
                                                color: "primary",
                                                label: "Sexe",
                                                variant: "outlined",
                                                "hide-details": "",
                                                disabled: "",
                                                density: "compact"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            sm: "4"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(sellerMaritalStatus),
                                                "onUpdate:modelValue": ($event) => isRef(sellerMaritalStatus) ? sellerMaritalStatus.value = $event : null,
                                                color: "primary",
                                                label: "Situation matrimoniale",
                                                variant: "outlined",
                                                "hide-details": "",
                                                disabled: "",
                                                density: "compact"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VSheet, {
                                  elevation: 4,
                                  rounded: "",
                                  height: "100%",
                                  class: "pa-4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("h4", { class: "mb-3" }, "Aper\xE7u des informations du vendeur"),
                                    createVNode(VRow, null, {
                                      default: withCtx(() => [
                                        createVNode(VCol, {
                                          cols: "12",
                                          sm: "5"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: unref(sellerLastName),
                                              "onUpdate:modelValue": ($event) => isRef(sellerLastName) ? sellerLastName.value = $event : null,
                                              color: "primary",
                                              label: "Nom",
                                              variant: "outlined",
                                              "hide-details": "",
                                              disabled: "",
                                              density: "compact"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          sm: "7"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: unref(sellerFirstName),
                                              "onUpdate:modelValue": ($event) => isRef(sellerFirstName) ? sellerFirstName.value = $event : null,
                                              color: "primary",
                                              label: "Pr\xE9noms",
                                              variant: "outlined",
                                              "hide-details": "",
                                              disabled: "",
                                              density: "compact"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          sm: "5"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: unref(sellerCNINumber),
                                              "onUpdate:modelValue": ($event) => isRef(sellerCNINumber) ? sellerCNINumber.value = $event : null,
                                              color: "primary",
                                              label: "Num\xE9ro de la CNI",
                                              variant: "outlined",
                                              "hide-details": "",
                                              disabled: "",
                                              density: "compact"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          sm: "3"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: unref(sellerGender),
                                              "onUpdate:modelValue": ($event) => isRef(sellerGender) ? sellerGender.value = $event : null,
                                              color: "primary",
                                              label: "Sexe",
                                              variant: "outlined",
                                              "hide-details": "",
                                              disabled: "",
                                              density: "compact"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          sm: "4"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: unref(sellerMaritalStatus),
                                              "onUpdate:modelValue": ($event) => isRef(sellerMaritalStatus) ? sellerMaritalStatus.value = $event : null,
                                              color: "primary",
                                              label: "Situation matrimoniale",
                                              variant: "outlined",
                                              "hide-details": "",
                                              disabled: "",
                                              density: "compact"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCol, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(VSheet, {
                                elevation: 4,
                                rounded: "",
                                height: "100%",
                                class: "pa-2"
                              }, {
                                default: withCtx(() => [
                                  createVNode("h4", { class: "mb-3" }, "S\xE9lection du vendeur"),
                                  createVNode("div", { class: "d-flex flex-column justify-center" }, [
                                    createVNode(VForm, null, {
                                      default: withCtx(() => [
                                        createVNode(VCombobox, {
                                          modelValue: unref(sellerId),
                                          "onUpdate:modelValue": ($event) => isRef(sellerId) ? sellerId.value = $event : null,
                                          color: "primary",
                                          label: "Selectionner un vendeur",
                                          items: unref(sellers),
                                          "item-title": "NAME",
                                          "item-value": "ID",
                                          variant: "outlined",
                                          "hide-details": "",
                                          density: "compact"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VDivider, { class: "my-5" }, {
                                      default: withCtx(() => [
                                        createTextVNode("ou")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VBtn, {
                                      color: "blue",
                                      class: "text-none align-self-center",
                                      "prepend-icon": "mdi-account-tie-voice",
                                      onClick: toggleSellerModal
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Cr\xE9er un vendeur")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_create_seller_modal, {
                                      open: unref(openSellerModal),
                                      "onUpdate:open": ($event) => openSellerModal.value = $event
                                    }, null, 8, ["open", "onUpdate:open"])
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(VSheet, {
                                elevation: 4,
                                rounded: "",
                                height: "100%",
                                class: "pa-4"
                              }, {
                                default: withCtx(() => [
                                  createVNode("h4", { class: "mb-3" }, "Aper\xE7u des informations du vendeur"),
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "5"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(sellerLastName),
                                            "onUpdate:modelValue": ($event) => isRef(sellerLastName) ? sellerLastName.value = $event : null,
                                            color: "primary",
                                            label: "Nom",
                                            variant: "outlined",
                                            "hide-details": "",
                                            disabled: "",
                                            density: "compact"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "7"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(sellerFirstName),
                                            "onUpdate:modelValue": ($event) => isRef(sellerFirstName) ? sellerFirstName.value = $event : null,
                                            color: "primary",
                                            label: "Pr\xE9noms",
                                            variant: "outlined",
                                            "hide-details": "",
                                            disabled: "",
                                            density: "compact"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "5"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(sellerCNINumber),
                                            "onUpdate:modelValue": ($event) => isRef(sellerCNINumber) ? sellerCNINumber.value = $event : null,
                                            color: "primary",
                                            label: "Num\xE9ro de la CNI",
                                            variant: "outlined",
                                            "hide-details": "",
                                            disabled: "",
                                            density: "compact"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "3"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(sellerGender),
                                            "onUpdate:modelValue": ($event) => isRef(sellerGender) ? sellerGender.value = $event : null,
                                            color: "primary",
                                            label: "Sexe",
                                            variant: "outlined",
                                            "hide-details": "",
                                            disabled: "",
                                            density: "compact"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "4"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(sellerMaritalStatus),
                                            "onUpdate:modelValue": ($event) => isRef(sellerMaritalStatus) ? sellerMaritalStatus.value = $event : null,
                                            color: "primary",
                                            label: "Situation matrimoniale",
                                            variant: "outlined",
                                            "hide-details": "",
                                            disabled: "",
                                            density: "compact"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      })
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VRow, null, {
                      default: withCtx(() => [
                        createVNode(VCol, { cols: "12" }, {
                          default: withCtx(() => [
                            createVNode(VSheet, {
                              elevation: 4,
                              rounded: "",
                              height: "100%",
                              class: "pa-2"
                            }, {
                              default: withCtx(() => [
                                createVNode("h4", { class: "mb-3" }, "S\xE9lection du client"),
                                createVNode("div", { class: "d-flex flex-column justify-center" }, [
                                  createVNode(VForm, null, {
                                    default: withCtx(() => [
                                      createVNode(VCombobox, {
                                        modelValue: unref(customerId),
                                        "onUpdate:modelValue": ($event) => isRef(customerId) ? customerId.value = $event : null,
                                        color: "primary",
                                        label: "Selectionner un client",
                                        items: unref(customers),
                                        "item-title": "NAME",
                                        "item-value": "ID",
                                        variant: "outlined",
                                        "hide-details": "",
                                        density: "compact"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VDivider, { class: "my-5" }, {
                                    default: withCtx(() => [
                                      createTextVNode("ou")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VBtn, {
                                    color: "primary",
                                    class: "text-none align-self-center",
                                    "prepend-icon": "mdi-account-tie",
                                    onClick: toggleModal
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Cr\xE9er un client")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_create_customer_modal, {
                                    open: unref(open),
                                    "onUpdate:open": ($event) => open.value = $event
                                  }, null, 8, ["open", "onUpdate:open"])
                                ])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, { cols: "12" }, {
                          default: withCtx(() => [
                            createVNode(VSheet, {
                              elevation: 4,
                              rounded: "",
                              height: "100%",
                              class: "pa-2"
                            }, {
                              default: withCtx(() => [
                                createVNode("h4", { class: "mb-3" }, "Aper\xE7u des informations du client"),
                                createVNode(VForm, null, {
                                  default: withCtx(() => [
                                    createVNode(VRow, null, {
                                      default: withCtx(() => [
                                        createVNode(VCol, {
                                          cols: "12",
                                          sm: "5"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: unref(lastName),
                                              "onUpdate:modelValue": ($event) => isRef(lastName) ? lastName.value = $event : null,
                                              color: "primary",
                                              label: "Nom",
                                              variant: "outlined",
                                              "hide-details": "",
                                              disabled: "",
                                              density: "compact"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          sm: "7"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: unref(firstName),
                                              "onUpdate:modelValue": ($event) => isRef(firstName) ? firstName.value = $event : null,
                                              color: "primary",
                                              label: "Pr\xE9noms",
                                              variant: "outlined",
                                              "hide-details": "",
                                              disabled: "",
                                              density: "compact"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          sm: "5"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: unref(identificationNumber),
                                              "onUpdate:modelValue": ($event) => isRef(identificationNumber) ? identificationNumber.value = $event : null,
                                              color: "primary",
                                              label: "CNI",
                                              variant: "outlined",
                                              "hide-details": "",
                                              disabled: "",
                                              density: "compact"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          sm: "4"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: unref(birthDate),
                                              "onUpdate:modelValue": ($event) => isRef(birthDate) ? birthDate.value = $event : null,
                                              color: "primary",
                                              label: "Date de naissance",
                                              variant: "outlined",
                                              "hide-details": "",
                                              disabled: "",
                                              density: "compact"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          sm: "3"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: unref(gender),
                                              "onUpdate:modelValue": ($event) => isRef(gender) ? gender.value = $event : null,
                                              color: "primary",
                                              label: "Sexe",
                                              variant: "outlined",
                                              "hide-details": "",
                                              disabled: "",
                                              density: "compact"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VRow, null, {
                      default: withCtx(() => [
                        createVNode(VCol, { cols: "12" }, {
                          default: withCtx(() => [
                            createVNode(VSheet, {
                              elevation: 4,
                              rounded: "",
                              height: "100%",
                              class: "pa-2"
                            }, {
                              default: withCtx(() => [
                                createVNode("h4", { class: "mb-3" }, "S\xE9lection du vendeur"),
                                createVNode("div", { class: "d-flex flex-column justify-center" }, [
                                  createVNode(VForm, null, {
                                    default: withCtx(() => [
                                      createVNode(VCombobox, {
                                        modelValue: unref(sellerId),
                                        "onUpdate:modelValue": ($event) => isRef(sellerId) ? sellerId.value = $event : null,
                                        color: "primary",
                                        label: "Selectionner un vendeur",
                                        items: unref(sellers),
                                        "item-title": "NAME",
                                        "item-value": "ID",
                                        variant: "outlined",
                                        "hide-details": "",
                                        density: "compact"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VDivider, { class: "my-5" }, {
                                    default: withCtx(() => [
                                      createTextVNode("ou")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VBtn, {
                                    color: "blue",
                                    class: "text-none align-self-center",
                                    "prepend-icon": "mdi-account-tie-voice",
                                    onClick: toggleSellerModal
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Cr\xE9er un vendeur")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_create_seller_modal, {
                                    open: unref(openSellerModal),
                                    "onUpdate:open": ($event) => openSellerModal.value = $event
                                  }, null, 8, ["open", "onUpdate:open"])
                                ])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, { cols: "12" }, {
                          default: withCtx(() => [
                            createVNode(VSheet, {
                              elevation: 4,
                              rounded: "",
                              height: "100%",
                              class: "pa-4"
                            }, {
                              default: withCtx(() => [
                                createVNode("h4", { class: "mb-3" }, "Aper\xE7u des informations du vendeur"),
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "5"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(sellerLastName),
                                          "onUpdate:modelValue": ($event) => isRef(sellerLastName) ? sellerLastName.value = $event : null,
                                          color: "primary",
                                          label: "Nom",
                                          variant: "outlined",
                                          "hide-details": "",
                                          disabled: "",
                                          density: "compact"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "7"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(sellerFirstName),
                                          "onUpdate:modelValue": ($event) => isRef(sellerFirstName) ? sellerFirstName.value = $event : null,
                                          color: "primary",
                                          label: "Pr\xE9noms",
                                          variant: "outlined",
                                          "hide-details": "",
                                          disabled: "",
                                          density: "compact"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "5"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(sellerCNINumber),
                                          "onUpdate:modelValue": ($event) => isRef(sellerCNINumber) ? sellerCNINumber.value = $event : null,
                                          color: "primary",
                                          label: "Num\xE9ro de la CNI",
                                          variant: "outlined",
                                          "hide-details": "",
                                          disabled: "",
                                          density: "compact"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "3"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(sellerGender),
                                          "onUpdate:modelValue": ($event) => isRef(sellerGender) ? sellerGender.value = $event : null,
                                          color: "primary",
                                          label: "Sexe",
                                          variant: "outlined",
                                          "hide-details": "",
                                          disabled: "",
                                          density: "compact"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "4"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(sellerMaritalStatus),
                                          "onUpdate:modelValue": ($event) => isRef(sellerMaritalStatus) ? sellerMaritalStatus.value = $event : null,
                                          color: "primary",
                                          label: "Situation matrimoniale",
                                          variant: "outlined",
                                          "hide-details": "",
                                          disabled: "",
                                          density: "compact"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              lg: "7"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VSheet, {
                    elevation: 4,
                    rounded: "",
                    height: "100%",
                    class: "pa-4"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h4 class="mb-3"${_scopeId3}>Documents requis pour initier la proc\xE9dure</h4>`);
                        _push4(ssrRenderComponent(VRow, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, { cols: "12" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_required_document, {
                                      label: "CNI du vendeur",
                                      file: unref(sellerCNI),
                                      "onUpdate:file": ($event) => isRef(sellerCNI) ? sellerCNI.value = $event : null
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_required_document, {
                                        label: "CNI du vendeur",
                                        file: unref(sellerCNI),
                                        "onUpdate:file": ($event) => isRef(sellerCNI) ? sellerCNI.value = $event : null
                                      }, null, 8, ["file", "onUpdate:file"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, { cols: "12" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_required_document, {
                                      label: "CNI du conjoint",
                                      file: unref(partnerCNI),
                                      "onUpdate:file": ($event) => isRef(partnerCNI) ? partnerCNI.value = $event : null
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_required_document, {
                                        label: "CNI du conjoint",
                                        file: unref(partnerCNI),
                                        "onUpdate:file": ($event) => isRef(partnerCNI) ? partnerCNI.value = $event : null
                                      }, null, 8, ["file", "onUpdate:file"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, { cols: "12" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_required_document, {
                                      label: "Extrait d'acte de naissance ou de mariage",
                                      file: unref(certificateOfBirthOrMarriage),
                                      "onUpdate:file": ($event) => isRef(certificateOfBirthOrMarriage) ? certificateOfBirthOrMarriage.value = $event : null
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_required_document, {
                                        label: "Extrait d'acte de naissance ou de mariage",
                                        file: unref(certificateOfBirthOrMarriage),
                                        "onUpdate:file": ($event) => isRef(certificateOfBirthOrMarriage) ? certificateOfBirthOrMarriage.value = $event : null
                                      }, null, 8, ["file", "onUpdate:file"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, { cols: "12" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_required_document, {
                                      label: "Facture de CIE ou SODECI",
                                      file: unref(CIEOrSODECIInvoice),
                                      "onUpdate:file": ($event) => isRef(CIEOrSODECIInvoice) ? CIEOrSODECIInvoice.value = $event : null
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_required_document, {
                                        label: "Facture de CIE ou SODECI",
                                        file: unref(CIEOrSODECIInvoice),
                                        "onUpdate:file": ($event) => isRef(CIEOrSODECIInvoice) ? CIEOrSODECIInvoice.value = $event : null
                                      }, null, 8, ["file", "onUpdate:file"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, { cols: "12" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_required_document, {
                                      label: "Attestation de situation fiscale",
                                      file: unref(taxStatusCertificate),
                                      "onUpdate:file": ($event) => isRef(taxStatusCertificate) ? taxStatusCertificate.value = $event : null
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_required_document, {
                                        label: "Attestation de situation fiscale",
                                        file: unref(taxStatusCertificate),
                                        "onUpdate:file": ($event) => isRef(taxStatusCertificate) ? taxStatusCertificate.value = $event : null
                                      }, null, 8, ["file", "onUpdate:file"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, { cols: "12" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_required_document, {
                                      label: "Titre de propri\xE9t\xE9 (copie du titre foncier, ACD ...)",
                                      file: unref(titleDeed),
                                      "onUpdate:file": ($event) => isRef(titleDeed) ? titleDeed.value = $event : null
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_required_document, {
                                        label: "Titre de propri\xE9t\xE9 (copie du titre foncier, ACD ...)",
                                        file: unref(titleDeed),
                                        "onUpdate:file": ($event) => isRef(titleDeed) ? titleDeed.value = $event : null
                                      }, null, 8, ["file", "onUpdate:file"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, { cols: "12" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_required_document, {
                                      label: "\xC9tat foncier",
                                      file: unref(landRegistry),
                                      "onUpdate:file": ($event) => isRef(landRegistry) ? landRegistry.value = $event : null
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_required_document, {
                                        label: "\xC9tat foncier",
                                        file: unref(landRegistry),
                                        "onUpdate:file": ($event) => isRef(landRegistry) ? landRegistry.value = $event : null
                                      }, null, 8, ["file", "onUpdate:file"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, { cols: "12" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_required_document, {
                                      label: "Certificat de localisation",
                                      file: unref(certificateOfLocation),
                                      "onUpdate:file": ($event) => isRef(certificateOfLocation) ? certificateOfLocation.value = $event : null
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_required_document, {
                                        label: "Certificat de localisation",
                                        file: unref(certificateOfLocation),
                                        "onUpdate:file": ($event) => isRef(certificateOfLocation) ? certificateOfLocation.value = $event : null
                                      }, null, 8, ["file", "onUpdate:file"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_required_document, {
                                      label: "CNI du vendeur",
                                      file: unref(sellerCNI),
                                      "onUpdate:file": ($event) => isRef(sellerCNI) ? sellerCNI.value = $event : null
                                    }, null, 8, ["file", "onUpdate:file"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_required_document, {
                                      label: "CNI du conjoint",
                                      file: unref(partnerCNI),
                                      "onUpdate:file": ($event) => isRef(partnerCNI) ? partnerCNI.value = $event : null
                                    }, null, 8, ["file", "onUpdate:file"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_required_document, {
                                      label: "Extrait d'acte de naissance ou de mariage",
                                      file: unref(certificateOfBirthOrMarriage),
                                      "onUpdate:file": ($event) => isRef(certificateOfBirthOrMarriage) ? certificateOfBirthOrMarriage.value = $event : null
                                    }, null, 8, ["file", "onUpdate:file"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_required_document, {
                                      label: "Facture de CIE ou SODECI",
                                      file: unref(CIEOrSODECIInvoice),
                                      "onUpdate:file": ($event) => isRef(CIEOrSODECIInvoice) ? CIEOrSODECIInvoice.value = $event : null
                                    }, null, 8, ["file", "onUpdate:file"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_required_document, {
                                      label: "Attestation de situation fiscale",
                                      file: unref(taxStatusCertificate),
                                      "onUpdate:file": ($event) => isRef(taxStatusCertificate) ? taxStatusCertificate.value = $event : null
                                    }, null, 8, ["file", "onUpdate:file"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_required_document, {
                                      label: "Titre de propri\xE9t\xE9 (copie du titre foncier, ACD ...)",
                                      file: unref(titleDeed),
                                      "onUpdate:file": ($event) => isRef(titleDeed) ? titleDeed.value = $event : null
                                    }, null, 8, ["file", "onUpdate:file"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_required_document, {
                                      label: "\xC9tat foncier",
                                      file: unref(landRegistry),
                                      "onUpdate:file": ($event) => isRef(landRegistry) ? landRegistry.value = $event : null
                                    }, null, 8, ["file", "onUpdate:file"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_required_document, {
                                      label: "Certificat de localisation",
                                      file: unref(certificateOfLocation),
                                      "onUpdate:file": ($event) => isRef(certificateOfLocation) ? certificateOfLocation.value = $event : null
                                    }, null, 8, ["file", "onUpdate:file"])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("h4", { class: "mb-3" }, "Documents requis pour initier la proc\xE9dure"),
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(_component_required_document, {
                                    label: "CNI du vendeur",
                                    file: unref(sellerCNI),
                                    "onUpdate:file": ($event) => isRef(sellerCNI) ? sellerCNI.value = $event : null
                                  }, null, 8, ["file", "onUpdate:file"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(_component_required_document, {
                                    label: "CNI du conjoint",
                                    file: unref(partnerCNI),
                                    "onUpdate:file": ($event) => isRef(partnerCNI) ? partnerCNI.value = $event : null
                                  }, null, 8, ["file", "onUpdate:file"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(_component_required_document, {
                                    label: "Extrait d'acte de naissance ou de mariage",
                                    file: unref(certificateOfBirthOrMarriage),
                                    "onUpdate:file": ($event) => isRef(certificateOfBirthOrMarriage) ? certificateOfBirthOrMarriage.value = $event : null
                                  }, null, 8, ["file", "onUpdate:file"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(_component_required_document, {
                                    label: "Facture de CIE ou SODECI",
                                    file: unref(CIEOrSODECIInvoice),
                                    "onUpdate:file": ($event) => isRef(CIEOrSODECIInvoice) ? CIEOrSODECIInvoice.value = $event : null
                                  }, null, 8, ["file", "onUpdate:file"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(_component_required_document, {
                                    label: "Attestation de situation fiscale",
                                    file: unref(taxStatusCertificate),
                                    "onUpdate:file": ($event) => isRef(taxStatusCertificate) ? taxStatusCertificate.value = $event : null
                                  }, null, 8, ["file", "onUpdate:file"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(_component_required_document, {
                                    label: "Titre de propri\xE9t\xE9 (copie du titre foncier, ACD ...)",
                                    file: unref(titleDeed),
                                    "onUpdate:file": ($event) => isRef(titleDeed) ? titleDeed.value = $event : null
                                  }, null, 8, ["file", "onUpdate:file"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(_component_required_document, {
                                    label: "\xC9tat foncier",
                                    file: unref(landRegistry),
                                    "onUpdate:file": ($event) => isRef(landRegistry) ? landRegistry.value = $event : null
                                  }, null, 8, ["file", "onUpdate:file"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(_component_required_document, {
                                    label: "Certificat de localisation",
                                    file: unref(certificateOfLocation),
                                    "onUpdate:file": ($event) => isRef(certificateOfLocation) ? certificateOfLocation.value = $event : null
                                  }, null, 8, ["file", "onUpdate:file"])
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VSheet, {
                      elevation: 4,
                      rounded: "",
                      height: "100%",
                      class: "pa-4"
                    }, {
                      default: withCtx(() => [
                        createVNode("h4", { class: "mb-3" }, "Documents requis pour initier la proc\xE9dure"),
                        createVNode(VRow, null, {
                          default: withCtx(() => [
                            createVNode(VCol, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode(_component_required_document, {
                                  label: "CNI du vendeur",
                                  file: unref(sellerCNI),
                                  "onUpdate:file": ($event) => isRef(sellerCNI) ? sellerCNI.value = $event : null
                                }, null, 8, ["file", "onUpdate:file"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode(_component_required_document, {
                                  label: "CNI du conjoint",
                                  file: unref(partnerCNI),
                                  "onUpdate:file": ($event) => isRef(partnerCNI) ? partnerCNI.value = $event : null
                                }, null, 8, ["file", "onUpdate:file"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode(_component_required_document, {
                                  label: "Extrait d'acte de naissance ou de mariage",
                                  file: unref(certificateOfBirthOrMarriage),
                                  "onUpdate:file": ($event) => isRef(certificateOfBirthOrMarriage) ? certificateOfBirthOrMarriage.value = $event : null
                                }, null, 8, ["file", "onUpdate:file"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode(_component_required_document, {
                                  label: "Facture de CIE ou SODECI",
                                  file: unref(CIEOrSODECIInvoice),
                                  "onUpdate:file": ($event) => isRef(CIEOrSODECIInvoice) ? CIEOrSODECIInvoice.value = $event : null
                                }, null, 8, ["file", "onUpdate:file"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode(_component_required_document, {
                                  label: "Attestation de situation fiscale",
                                  file: unref(taxStatusCertificate),
                                  "onUpdate:file": ($event) => isRef(taxStatusCertificate) ? taxStatusCertificate.value = $event : null
                                }, null, 8, ["file", "onUpdate:file"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode(_component_required_document, {
                                  label: "Titre de propri\xE9t\xE9 (copie du titre foncier, ACD ...)",
                                  file: unref(titleDeed),
                                  "onUpdate:file": ($event) => isRef(titleDeed) ? titleDeed.value = $event : null
                                }, null, 8, ["file", "onUpdate:file"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode(_component_required_document, {
                                  label: "\xC9tat foncier",
                                  file: unref(landRegistry),
                                  "onUpdate:file": ($event) => isRef(landRegistry) ? landRegistry.value = $event : null
                                }, null, 8, ["file", "onUpdate:file"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode(_component_required_document, {
                                  label: "Certificat de localisation",
                                  file: unref(certificateOfLocation),
                                  "onUpdate:file": ($event) => isRef(certificateOfLocation) ? certificateOfLocation.value = $event : null
                                }, null, 8, ["file", "onUpdate:file"])
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCol, {
                cols: "12",
                lg: "5"
              }, {
                default: withCtx(() => [
                  createVNode(VRow, null, {
                    default: withCtx(() => [
                      createVNode(VCol, { cols: "12" }, {
                        default: withCtx(() => [
                          createVNode(VSheet, {
                            elevation: 4,
                            rounded: "",
                            height: "100%",
                            class: "pa-2"
                          }, {
                            default: withCtx(() => [
                              createVNode("h4", { class: "mb-3" }, "S\xE9lection du client"),
                              createVNode("div", { class: "d-flex flex-column justify-center" }, [
                                createVNode(VForm, null, {
                                  default: withCtx(() => [
                                    createVNode(VCombobox, {
                                      modelValue: unref(customerId),
                                      "onUpdate:modelValue": ($event) => isRef(customerId) ? customerId.value = $event : null,
                                      color: "primary",
                                      label: "Selectionner un client",
                                      items: unref(customers),
                                      "item-title": "NAME",
                                      "item-value": "ID",
                                      variant: "outlined",
                                      "hide-details": "",
                                      density: "compact"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VDivider, { class: "my-5" }, {
                                  default: withCtx(() => [
                                    createTextVNode("ou")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VBtn, {
                                  color: "primary",
                                  class: "text-none align-self-center",
                                  "prepend-icon": "mdi-account-tie",
                                  onClick: toggleModal
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Cr\xE9er un client")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_create_customer_modal, {
                                  open: unref(open),
                                  "onUpdate:open": ($event) => open.value = $event
                                }, null, 8, ["open", "onUpdate:open"])
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, { cols: "12" }, {
                        default: withCtx(() => [
                          createVNode(VSheet, {
                            elevation: 4,
                            rounded: "",
                            height: "100%",
                            class: "pa-2"
                          }, {
                            default: withCtx(() => [
                              createVNode("h4", { class: "mb-3" }, "Aper\xE7u des informations du client"),
                              createVNode(VForm, null, {
                                default: withCtx(() => [
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "5"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(lastName),
                                            "onUpdate:modelValue": ($event) => isRef(lastName) ? lastName.value = $event : null,
                                            color: "primary",
                                            label: "Nom",
                                            variant: "outlined",
                                            "hide-details": "",
                                            disabled: "",
                                            density: "compact"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "7"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(firstName),
                                            "onUpdate:modelValue": ($event) => isRef(firstName) ? firstName.value = $event : null,
                                            color: "primary",
                                            label: "Pr\xE9noms",
                                            variant: "outlined",
                                            "hide-details": "",
                                            disabled: "",
                                            density: "compact"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "5"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(identificationNumber),
                                            "onUpdate:modelValue": ($event) => isRef(identificationNumber) ? identificationNumber.value = $event : null,
                                            color: "primary",
                                            label: "CNI",
                                            variant: "outlined",
                                            "hide-details": "",
                                            disabled: "",
                                            density: "compact"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "4"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(birthDate),
                                            "onUpdate:modelValue": ($event) => isRef(birthDate) ? birthDate.value = $event : null,
                                            color: "primary",
                                            label: "Date de naissance",
                                            variant: "outlined",
                                            "hide-details": "",
                                            disabled: "",
                                            density: "compact"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "3"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(gender),
                                            "onUpdate:modelValue": ($event) => isRef(gender) ? gender.value = $event : null,
                                            color: "primary",
                                            label: "Sexe",
                                            variant: "outlined",
                                            "hide-details": "",
                                            disabled: "",
                                            density: "compact"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VRow, null, {
                    default: withCtx(() => [
                      createVNode(VCol, { cols: "12" }, {
                        default: withCtx(() => [
                          createVNode(VSheet, {
                            elevation: 4,
                            rounded: "",
                            height: "100%",
                            class: "pa-2"
                          }, {
                            default: withCtx(() => [
                              createVNode("h4", { class: "mb-3" }, "S\xE9lection du vendeur"),
                              createVNode("div", { class: "d-flex flex-column justify-center" }, [
                                createVNode(VForm, null, {
                                  default: withCtx(() => [
                                    createVNode(VCombobox, {
                                      modelValue: unref(sellerId),
                                      "onUpdate:modelValue": ($event) => isRef(sellerId) ? sellerId.value = $event : null,
                                      color: "primary",
                                      label: "Selectionner un vendeur",
                                      items: unref(sellers),
                                      "item-title": "NAME",
                                      "item-value": "ID",
                                      variant: "outlined",
                                      "hide-details": "",
                                      density: "compact"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VDivider, { class: "my-5" }, {
                                  default: withCtx(() => [
                                    createTextVNode("ou")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VBtn, {
                                  color: "blue",
                                  class: "text-none align-self-center",
                                  "prepend-icon": "mdi-account-tie-voice",
                                  onClick: toggleSellerModal
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Cr\xE9er un vendeur")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_create_seller_modal, {
                                  open: unref(openSellerModal),
                                  "onUpdate:open": ($event) => openSellerModal.value = $event
                                }, null, 8, ["open", "onUpdate:open"])
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, { cols: "12" }, {
                        default: withCtx(() => [
                          createVNode(VSheet, {
                            elevation: 4,
                            rounded: "",
                            height: "100%",
                            class: "pa-4"
                          }, {
                            default: withCtx(() => [
                              createVNode("h4", { class: "mb-3" }, "Aper\xE7u des informations du vendeur"),
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "5"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(sellerLastName),
                                        "onUpdate:modelValue": ($event) => isRef(sellerLastName) ? sellerLastName.value = $event : null,
                                        color: "primary",
                                        label: "Nom",
                                        variant: "outlined",
                                        "hide-details": "",
                                        disabled: "",
                                        density: "compact"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "7"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(sellerFirstName),
                                        "onUpdate:modelValue": ($event) => isRef(sellerFirstName) ? sellerFirstName.value = $event : null,
                                        color: "primary",
                                        label: "Pr\xE9noms",
                                        variant: "outlined",
                                        "hide-details": "",
                                        disabled: "",
                                        density: "compact"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "5"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(sellerCNINumber),
                                        "onUpdate:modelValue": ($event) => isRef(sellerCNINumber) ? sellerCNINumber.value = $event : null,
                                        color: "primary",
                                        label: "Num\xE9ro de la CNI",
                                        variant: "outlined",
                                        "hide-details": "",
                                        disabled: "",
                                        density: "compact"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "3"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(sellerGender),
                                        "onUpdate:modelValue": ($event) => isRef(sellerGender) ? sellerGender.value = $event : null,
                                        color: "primary",
                                        label: "Sexe",
                                        variant: "outlined",
                                        "hide-details": "",
                                        disabled: "",
                                        density: "compact"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "4"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(sellerMaritalStatus),
                                        "onUpdate:modelValue": ($event) => isRef(sellerMaritalStatus) ? sellerMaritalStatus.value = $event : null,
                                        color: "primary",
                                        label: "Situation matrimoniale",
                                        variant: "outlined",
                                        "hide-details": "",
                                        disabled: "",
                                        density: "compact"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                lg: "7"
              }, {
                default: withCtx(() => [
                  createVNode(VSheet, {
                    elevation: 4,
                    rounded: "",
                    height: "100%",
                    class: "pa-4"
                  }, {
                    default: withCtx(() => [
                      createVNode("h4", { class: "mb-3" }, "Documents requis pour initier la proc\xE9dure"),
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          createVNode(VCol, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(_component_required_document, {
                                label: "CNI du vendeur",
                                file: unref(sellerCNI),
                                "onUpdate:file": ($event) => isRef(sellerCNI) ? sellerCNI.value = $event : null
                              }, null, 8, ["file", "onUpdate:file"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(_component_required_document, {
                                label: "CNI du conjoint",
                                file: unref(partnerCNI),
                                "onUpdate:file": ($event) => isRef(partnerCNI) ? partnerCNI.value = $event : null
                              }, null, 8, ["file", "onUpdate:file"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(_component_required_document, {
                                label: "Extrait d'acte de naissance ou de mariage",
                                file: unref(certificateOfBirthOrMarriage),
                                "onUpdate:file": ($event) => isRef(certificateOfBirthOrMarriage) ? certificateOfBirthOrMarriage.value = $event : null
                              }, null, 8, ["file", "onUpdate:file"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(_component_required_document, {
                                label: "Facture de CIE ou SODECI",
                                file: unref(CIEOrSODECIInvoice),
                                "onUpdate:file": ($event) => isRef(CIEOrSODECIInvoice) ? CIEOrSODECIInvoice.value = $event : null
                              }, null, 8, ["file", "onUpdate:file"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(_component_required_document, {
                                label: "Attestation de situation fiscale",
                                file: unref(taxStatusCertificate),
                                "onUpdate:file": ($event) => isRef(taxStatusCertificate) ? taxStatusCertificate.value = $event : null
                              }, null, 8, ["file", "onUpdate:file"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(_component_required_document, {
                                label: "Titre de propri\xE9t\xE9 (copie du titre foncier, ACD ...)",
                                file: unref(titleDeed),
                                "onUpdate:file": ($event) => isRef(titleDeed) ? titleDeed.value = $event : null
                              }, null, 8, ["file", "onUpdate:file"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(_component_required_document, {
                                label: "\xC9tat foncier",
                                file: unref(landRegistry),
                                "onUpdate:file": ($event) => isRef(landRegistry) ? landRegistry.value = $event : null
                              }, null, 8, ["file", "onUpdate:file"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(_component_required_document, {
                                label: "Certificat de localisation",
                                file: unref(certificateOfLocation),
                                "onUpdate:file": ($event) => isRef(certificateOfLocation) ? certificateOfLocation.value = $event : null
                              }, null, 8, ["file", "onUpdate:file"])
                            ]),
                            _: 1
                          })
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
      _push(`</div><div class="ma-4 d-flex justify-end">`);
      _push(ssrRenderComponent(VBtn, {
        color: "primary",
        class: "text-none",
        "prepend-icon": "mdi-content-save-outline",
        onClick: toggleConfModal
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Enregistrer la proc\xE9dure `);
          } else {
            return [
              createTextVNode(" Enregistrer la proc\xE9dure ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_confirmation_modal, {
        text: "Voulez-vous enregistrer cette proc\xE9dure de vente ?",
        open: unref(openConf),
        "onUpdate:open": ($event) => openConf.value = $event
      }, null, _parent));
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/selling.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=selling-BRVUOvxR.mjs.map
