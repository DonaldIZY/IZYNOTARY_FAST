import { useSSRContext, ref, resolveComponent, mergeProps, withCtx, unref, isRef, createVNode } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { V as VDialog } from './VDialog-BU74V2eV.mjs';
import { V as VCard, b as VCardText, c as VCardActions } from './VCard-Busk3Fj7.mjs';
import { V as VRow, a as VCol } from './VRow-xSUG3UwT.mjs';
import { aK as VTextField, aR as VSpacer, a1 as VBtn } from './server.mjs';
import { V as VSelect, a as VDivider } from './filter-BGBihEE2.mjs';
import { V as VFileInput } from './VFileInput-ChcsM8I7.mjs';

const _sfc_main = {
  __name: "createCustomerModal",
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
      const customerData = new FormData();
      customerData.append("lastName", lastName.value);
      customerData.append("firstName", firstName.value);
      customerData.append("gender", gender.value);
      customerData.append("birthDate", birthDate.value);
      customerData.append("email", email.value);
      customerData.append("phone", phone.value);
      customerData.append("identification", identification.value);
      customerData.append("identificationNumber", identificationNumber.value);
      customerData.append("imageOfIdentification", imageOfIdentification.value);
      console.log(customerData.get("imageOfIdentification"));
      try {
        const testUrl = "http://serverizynotary.izydr.net";
        const data = await $fetch(
          `${testUrl}/customers`,
          {
            method: "POST",
            body: customerData
          }
        );
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
              "prepend-icon": "mdi-account-tie",
              title: "Cr\xE9er un client"
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
                                      label: "Date de naissance",
                                      variant: "outlined",
                                      density: "compact",
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
                                        label: "Date de naissance",
                                        variant: "outlined",
                                        density: "compact",
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
                                    _push6(ssrRenderComponent(VTextField, {
                                      modelValue: unref(email),
                                      "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                      color: "primary",
                                      label: "Email",
                                      variant: "outlined",
                                      density: "compact",
                                      rules: [emailRule]
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTextField, {
                                        modelValue: unref(email),
                                        "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                        color: "primary",
                                        label: "Email",
                                        variant: "outlined",
                                        density: "compact",
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
                                      variant: "outlined",
                                      density: "compact"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTextField, {
                                        modelValue: unref(phone),
                                        "onUpdate:modelValue": ($event) => isRef(phone) ? phone.value = $event : null,
                                        color: "primary",
                                        label: "T\xE9l\xE9phone",
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
                                      label: "Date de naissance",
                                      variant: "outlined",
                                      density: "compact",
                                      max: unref(maxDate),
                                      year: new Date(unref(maxDate)).getFullYear()
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "max", "year"])
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
                                      variant: "outlined",
                                      density: "compact",
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
                                      variant: "outlined",
                                      density: "compact"
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
                                    label: "Date de naissance",
                                    variant: "outlined",
                                    density: "compact",
                                    max: unref(maxDate),
                                    year: new Date(unref(maxDate)).getFullYear()
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "max", "year"])
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
                                    variant: "outlined",
                                    density: "compact",
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
                                    variant: "outlined",
                                    density: "compact"
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
                                  label: "Date de naissance",
                                  variant: "outlined",
                                  density: "compact",
                                  max: unref(maxDate),
                                  year: new Date(unref(maxDate)).getFullYear()
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "max", "year"])
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
                                  variant: "outlined",
                                  density: "compact",
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
                                  variant: "outlined",
                                  density: "compact"
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
                "prepend-icon": "mdi-account-tie",
                title: "Cr\xE9er un client"
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
                                label: "Date de naissance",
                                variant: "outlined",
                                density: "compact",
                                max: unref(maxDate),
                                year: new Date(unref(maxDate)).getFullYear()
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "max", "year"])
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
                                variant: "outlined",
                                density: "compact",
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
                                variant: "outlined",
                                density: "compact"
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/createCustomerModal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as _ };
//# sourceMappingURL=createCustomerModal-D9-RmGJX.mjs.map
