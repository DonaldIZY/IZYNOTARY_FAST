import { _ as _sfc_main$1 } from './backButton-HdIxwv9Z.mjs';
import { _ as _sfc_main$2 } from './createCustomerModal-D9-RmGJX.mjs';
import { V as VCombobox, _ as _sfc_main$3 } from './VCombobox-CJua5flN.mjs';
import { _ as _sfc_main$4 } from './confirmationModal-F-IaXnl9.mjs';
import { ref, watchEffect, watch, withCtx, unref, isRef, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { p as procedureNumGenerator } from './procedureNumGenerator-C-saErJR.mjs';
import { V as VRow, a as VCol } from './VRow-xSUG3UwT.mjs';
import { aV as VSheet, a1 as VBtn, aK as VTextField } from './server.mjs';
import { V as VForm } from './VForm-BGp98nb4.mjs';
import { a as VDivider } from './filter-BGBihEE2.mjs';
import './VDialog-BU74V2eV.mjs';
import './VCard-Busk3Fj7.mjs';
import './VAvatar-gxg0IsvB.mjs';
import './VFileInput-ChcsM8I7.mjs';
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

const testUrl = "http://serverizynotary.izydr.net";
const _sfc_main = {
  __name: "transferOfMovableProperty",
  __ssrInlineRender: true,
  setup(__props) {
    const open = ref(false);
    const openConf = ref(false);
    const customers = ref([]);
    const customerId = ref(null);
    const selectedCustomer = ref(null);
    const firstName = ref("");
    const lastName = ref("");
    const birthDate = ref("");
    const gender = ref("");
    const identificationNumber = ref("");
    const customerCNI = ref(null);
    const birthCertificate = ref(null);
    const toggleModal = () => {
      open.value = !open.value;
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
    const handleProcedure = async () => {
      const procedureData = new FormData();
      const folders = await $fetch(`${testUrl}/folders`);
      const count = folders.length;
      if (isNaN(count)) {
        console.error("Erreur : count est NaN");
        return;
      }
      procedureData.append(
        "folderNum",
        procedureNumGenerator("Succession de biens mobiliers", count)
      );
      procedureData.append("procedureType", "Succession de biens mobiliers");
      procedureData.append("progression", 1 / 5);
      procedureData.append("status", "En cours");
      procedureData.append("customerId", selectedCustomer.value.ID);
      const requiredFiles = {
        customerCNI: customerCNI.value,
        birthCertificate: birthCertificate.value
      };
      for (const key in requiredFiles) {
        if (requiredFiles[key]) {
          procedureData.append(`${key}`, requiredFiles[key]);
        }
      }
      try {
        const date = await $fetch(
          `${testUrl}/folders/transferOfMovableProperty`,
          {
            method: "POST",
            body: procedureData
          }
        );
        alert("Proc\xE9dure cr\xE9\xE9e avec succ\xE8s.");
      } catch (error) {
        console.error("Erreur lors de la cr\xE9ation de la proc\xE9dure :", error);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_back_button = _sfc_main$1;
      const _component_create_customer_modal = _sfc_main$2;
      const _component_required_document = _sfc_main$3;
      const _component_confirmation_modal = _sfc_main$4;
      _push(`<!--[--><div class="ma-4">`);
      _push(ssrRenderComponent(_component_back_button, {
        title: "Proc\xE9dure de succession de biens mobiliers",
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
                                    _push6(`<h4 class="mb-3"${_scopeId5}>Aper\xE7u informations du client</h4>`);
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
                                      createVNode("h4", { class: "mb-3" }, "Aper\xE7u informations du client"),
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
                                    createVNode("h4", { class: "mb-3" }, "Aper\xE7u informations du client"),
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
                                  createVNode("h4", { class: "mb-3" }, "Aper\xE7u informations du client"),
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
                                createVNode("h4", { class: "mb-3" }, "Aper\xE7u informations du client"),
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
                                      label: "CNI du client",
                                      file: unref(customerCNI),
                                      "onUpdate:file": ($event) => isRef(customerCNI) ? customerCNI.value = $event : null
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_required_document, {
                                        label: "CNI du client",
                                        file: unref(customerCNI),
                                        "onUpdate:file": ($event) => isRef(customerCNI) ? customerCNI.value = $event : null
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
                                      label: "Extrait d'acte de naissance",
                                      file: unref(birthCertificate),
                                      "onUpdate:file": ($event) => isRef(birthCertificate) ? birthCertificate.value = $event : null
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_required_document, {
                                        label: "Extrait d'acte de naissance",
                                        file: unref(birthCertificate),
                                        "onUpdate:file": ($event) => isRef(birthCertificate) ? birthCertificate.value = $event : null
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
                                      label: "CNI du client",
                                      file: unref(customerCNI),
                                      "onUpdate:file": ($event) => isRef(customerCNI) ? customerCNI.value = $event : null
                                    }, null, 8, ["file", "onUpdate:file"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_required_document, {
                                      label: "Extrait d'acte de naissance",
                                      file: unref(birthCertificate),
                                      "onUpdate:file": ($event) => isRef(birthCertificate) ? birthCertificate.value = $event : null
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
                                    label: "CNI du client",
                                    file: unref(customerCNI),
                                    "onUpdate:file": ($event) => isRef(customerCNI) ? customerCNI.value = $event : null
                                  }, null, 8, ["file", "onUpdate:file"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(_component_required_document, {
                                    label: "Extrait d'acte de naissance",
                                    file: unref(birthCertificate),
                                    "onUpdate:file": ($event) => isRef(birthCertificate) ? birthCertificate.value = $event : null
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
                                  label: "CNI du client",
                                  file: unref(customerCNI),
                                  "onUpdate:file": ($event) => isRef(customerCNI) ? customerCNI.value = $event : null
                                }, null, 8, ["file", "onUpdate:file"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode(_component_required_document, {
                                  label: "Extrait d'acte de naissance",
                                  file: unref(birthCertificate),
                                  "onUpdate:file": ($event) => isRef(birthCertificate) ? birthCertificate.value = $event : null
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
                              createVNode("h4", { class: "mb-3" }, "Aper\xE7u informations du client"),
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
                                label: "CNI du client",
                                file: unref(customerCNI),
                                "onUpdate:file": ($event) => isRef(customerCNI) ? customerCNI.value = $event : null
                              }, null, 8, ["file", "onUpdate:file"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(_component_required_document, {
                                label: "Extrait d'acte de naissance",
                                file: unref(birthCertificate),
                                "onUpdate:file": ($event) => isRef(birthCertificate) ? birthCertificate.value = $event : null
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
        onClick: handleProcedure
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
        text: "Voulez vous enregistrer la proc\xE9dure de succession de biens mobiliers ?",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/transferOfMovableProperty.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=transferOfMovableProperty-BZEcHHpk.mjs.map
