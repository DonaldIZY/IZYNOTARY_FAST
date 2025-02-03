import { _ as _sfc_main$3 } from './backButton-HdIxwv9Z.mjs';
import { ref, watchEffect, withCtx, createTextVNode, unref, toDisplayString, createVNode, useSSRContext, mergeProps, isRef, reactive, computed, toValue, shallowRef, toRef, getCurrentInstance, onServerPrefetch } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc, a1 as VBtn, V as VIcon, aK as VTextField, aR as VSpacer, c as useRuntimeConfig, aQ as fetchDefaults, b as useNuxtApp, aO as asyncDataDefaults, aP as createError } from './server.mjs';
import { x as hash } from '../_/nitro.mjs';
import { u as useRequestFetch } from './ssr-6SqBYcwq.mjs';
import { V as VDialog } from './VDialog-BU74V2eV.mjs';
import { V as VCard, b as VCardText, c as VCardActions } from './VCard-Busk3Fj7.mjs';
import { V as VRow, a as VCol } from './VRow-xSUG3UwT.mjs';
import { V as VSelect, a as VDivider } from './filter-BGBihEE2.mjs';
import { _ as _sfc_main$4 } from './confirmationModal-F-IaXnl9.mjs';
import { _ as _imports_0 } from './tableIcon_nodata-BFvCTCmh.mjs';
import { V as VDataTable } from './VDataTable-BOKaCzwU.mjs';
import { V as VImg } from './VAvatar-gxg0IsvB.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'pinia';
import 'vue-router';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import 'node:path';
import './ssrBoot-BtvJZs44.mjs';

const isDefer = (dedupe) => dedupe === "defer" || dedupe === false;
function useAsyncData(...args) {
  var _a2, _b2, _c, _d, _e, _f, _g, _h;
  var _b;
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : undefined;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  let [key, _handler, options = {}] = args;
  if (typeof key !== "string") {
    throw new TypeError("[nuxt] [asyncData] key must be a string.");
  }
  if (typeof _handler !== "function") {
    throw new TypeError("[nuxt] [asyncData] handler must be a function.");
  }
  const nuxtApp = useNuxtApp();
  const handler = _handler ;
  const getDefault = () => asyncDataDefaults.value;
  const getDefaultCachedData = () => nuxtApp.isHydrating ? nuxtApp.payload.data[key] : nuxtApp.static.data[key];
  options.server = (_a2 = options.server) != null ? _a2 : true;
  options.default = (_b2 = options.default) != null ? _b2 : getDefault;
  options.getCachedData = (_c = options.getCachedData) != null ? _c : getDefaultCachedData;
  options.lazy = (_d = options.lazy) != null ? _d : false;
  options.immediate = (_e = options.immediate) != null ? _e : true;
  options.deep = (_f = options.deep) != null ? _f : asyncDataDefaults.deep;
  options.dedupe = (_g = options.dedupe) != null ? _g : "cancel";
  const initialCachedData = options.getCachedData(key, nuxtApp);
  const hasCachedData = initialCachedData != null;
  if (!nuxtApp._asyncData[key] || !options.immediate) {
    (_h = (_b = nuxtApp.payload._errors)[key]) != null ? _h : _b[key] = asyncDataDefaults.errorValue;
    const _ref = options.deep ? ref : shallowRef;
    nuxtApp._asyncData[key] = {
      data: _ref(hasCachedData ? initialCachedData : options.default()),
      pending: ref(!hasCachedData),
      error: toRef(nuxtApp.payload._errors, key),
      status: ref("idle"),
      _default: options.default
    };
  }
  const asyncData = { ...nuxtApp._asyncData[key] };
  delete asyncData._default;
  asyncData.refresh = asyncData.execute = (opts = {}) => {
    var _a3;
    if (nuxtApp._asyncDataPromises[key]) {
      if (isDefer((_a3 = opts.dedupe) != null ? _a3 : options.dedupe)) {
        return nuxtApp._asyncDataPromises[key];
      }
      nuxtApp._asyncDataPromises[key].cancelled = true;
    }
    if (opts._initial || nuxtApp.isHydrating && opts._initial !== false) {
      const cachedData = opts._initial ? initialCachedData : options.getCachedData(key, nuxtApp);
      if (cachedData != null) {
        return Promise.resolve(cachedData);
      }
    }
    asyncData.pending.value = true;
    asyncData.status.value = "pending";
    const promise = new Promise(
      (resolve, reject) => {
        try {
          resolve(handler(nuxtApp));
        } catch (err) {
          reject(err);
        }
      }
    ).then(async (_result) => {
      if (promise.cancelled) {
        return nuxtApp._asyncDataPromises[key];
      }
      let result = _result;
      if (options.transform) {
        result = await options.transform(_result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      nuxtApp.payload.data[key] = result;
      asyncData.data.value = result;
      asyncData.error.value = asyncDataDefaults.errorValue;
      asyncData.status.value = "success";
    }).catch((error) => {
      if (promise.cancelled) {
        return nuxtApp._asyncDataPromises[key];
      }
      asyncData.error.value = createError(error);
      asyncData.data.value = unref(options.default());
      asyncData.status.value = "error";
    }).finally(() => {
      if (promise.cancelled) {
        return;
      }
      asyncData.pending.value = false;
      delete nuxtApp._asyncDataPromises[key];
    });
    nuxtApp._asyncDataPromises[key] = promise;
    return nuxtApp._asyncDataPromises[key];
  };
  asyncData.clear = () => clearNuxtDataByKey(nuxtApp, key);
  const initialFetch = () => asyncData.refresh({ _initial: true });
  const fetchOnServer = options.server !== false && nuxtApp.payload.serverRendered;
  if (fetchOnServer && options.immediate) {
    const promise = initialFetch();
    if (getCurrentInstance()) {
      onServerPrefetch(() => promise);
    } else {
      nuxtApp.hook("app:created", async () => {
        await promise;
      });
    }
  }
  const asyncDataPromise = Promise.resolve(nuxtApp._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
function clearNuxtDataByKey(nuxtApp, key) {
  if (key in nuxtApp.payload.data) {
    nuxtApp.payload.data[key] = undefined;
  }
  if (key in nuxtApp.payload._errors) {
    nuxtApp.payload._errors[key] = asyncDataDefaults.errorValue;
  }
  if (nuxtApp._asyncData[key]) {
    nuxtApp._asyncData[key].data.value = undefined;
    nuxtApp._asyncData[key].error.value = asyncDataDefaults.errorValue;
    nuxtApp._asyncData[key].pending.value = false;
    nuxtApp._asyncData[key].status.value = "idle";
  }
  if (key in nuxtApp._asyncDataPromises) {
    if (nuxtApp._asyncDataPromises[key]) {
      nuxtApp._asyncDataPromises[key].cancelled = true;
    }
    nuxtApp._asyncDataPromises[key] = undefined;
  }
}
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
function useFetch(request, arg1, arg2) {
  const [opts = {}, autoKey] = typeof arg1 === "string" ? [{}, arg1] : [arg1, arg2];
  const _request = computed(() => toValue(request));
  const _key = opts.key || hash([autoKey, typeof _request.value === "string" ? _request.value : "", ...generateOptionSegments(opts)]);
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useFetch] key must be a string: " + _key);
  }
  if (!request) {
    throw new Error("[nuxt] [useFetch] request is missing.");
  }
  const key = _key === autoKey ? "$f" + _key : _key;
  if (!opts.baseURL && typeof _request.value === "string" && (_request.value[0] === "/" && _request.value[1] === "/")) {
    throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');
  }
  const {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick: pick2,
    watch,
    immediate,
    getCachedData,
    deep,
    dedupe,
    ...fetchOptions
  } = opts;
  const _fetchOptions = reactive({
    ...fetchDefaults,
    ...fetchOptions,
    cache: typeof opts.cache === "boolean" ? undefined : opts.cache
  });
  const _asyncDataOptions = {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick: pick2,
    immediate,
    getCachedData,
    deep,
    dedupe,
    watch: watch === false ? [] : [_fetchOptions, _request, ...watch || []]
  };
  let controller;
  const asyncData = useAsyncData(key, () => {
    var _a;
    (_a = controller == null ? undefined : controller.abort) == null ? undefined : _a.call(controller, new DOMException("Request aborted as another request to the same endpoint was initiated.", "AbortError"));
    controller = typeof AbortController !== "undefined" ? new AbortController() : {};
    const timeoutLength = toValue(opts.timeout);
    let timeoutId;
    if (timeoutLength) {
      timeoutId = setTimeout(() => controller.abort(new DOMException("Request aborted due to timeout.", "AbortError")), timeoutLength);
      controller.signal.onabort = () => clearTimeout(timeoutId);
    }
    let _$fetch = opts.$fetch || globalThis.$fetch;
    if (!opts.$fetch) {
      const isLocalFetch = typeof _request.value === "string" && _request.value[0] === "/" && (!toValue(opts.baseURL) || toValue(opts.baseURL)[0] === "/");
      if (isLocalFetch) {
        _$fetch = useRequestFetch();
      }
    }
    return _$fetch(_request.value, { signal: controller.signal, ..._fetchOptions }).finally(() => {
      clearTimeout(timeoutId);
    });
  }, _asyncDataOptions);
  return asyncData;
}
function generateOptionSegments(opts) {
  var _a;
  const segments = [
    ((_a = toValue(opts.method)) == null ? undefined : _a.toUpperCase()) || "GET",
    toValue(opts.baseURL)
  ];
  for (const _obj of [opts.params || opts.query]) {
    const obj = toValue(_obj);
    if (!obj) {
      continue;
    }
    const unwrapped = {};
    for (const [key, value] of Object.entries(obj)) {
      unwrapped[toValue(key)] = toValue(value);
    }
    segments.push(unwrapped);
  }
  return segments;
}
const _sfc_main$2 = {
  __name: "user",
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
    const email = ref("");
    const roles = ref([]);
    const roleId = ref(null);
    const emit = __emit;
    const config = useRuntimeConfig();
    const resetForm = () => {
      lastName.value = "";
      firstName.value = "";
      email.value = "";
      roleId.value = null;
    };
    const closeModal = () => {
      resetForm();
      emit("update:open", false);
    };
    const handleUser = async () => {
      const userData = {
        lastName: lastName.value,
        firstName: firstName.value,
        email: email.value,
        roleId: roleId.value
      };
      try {
        const data = await $fetch(`${config.public.baseUrl}/users`, {
          method: "POST",
          body: JSON.stringify(userData)
        });
        alert("Utilisateur cr\xE9\xE9 avec succ\xE8s.");
        closeModal();
      } catch (error) {
        console.error("Erreur lors de la cr\xE9ation de l'utilisateur :", error);
      }
    };
    const required = (v) => {
      return !!v || "Le champ est requis.";
    };
    const emailRule = (v) => {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || "Veuillez entrer une adresse email valide.";
    };
    useFetch(`${config.public.baseUrl}/roles`, "$rq42d9012t");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VDialog, mergeProps({
        modelValue: props.open,
        "onUpdate:modelValue": ($event) => props.open = $event,
        "max-width": "600"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, {
              "prepend-icon": "mdi-account-plus",
              title: "Cr\xE9er un utilisateur"
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
                                      variant: "outlined"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTextField, {
                                        modelValue: unref(lastName),
                                        "onUpdate:modelValue": ($event) => isRef(lastName) ? lastName.value = $event : null,
                                        color: "primary",
                                        label: "Nom",
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
                                    _push6(ssrRenderComponent(VTextField, {
                                      modelValue: unref(firstName),
                                      "onUpdate:modelValue": ($event) => isRef(firstName) ? firstName.value = $event : null,
                                      color: "primary",
                                      label: "Pr\xE9noms",
                                      variant: "outlined"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTextField, {
                                        modelValue: unref(firstName),
                                        "onUpdate:modelValue": ($event) => isRef(firstName) ? firstName.value = $event : null,
                                        color: "primary",
                                        label: "Pr\xE9noms",
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
                                    _push6(ssrRenderComponent(VTextField, {
                                      modelValue: unref(email),
                                      "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                      color: "primary",
                                      label: "Email",
                                      variant: "outlined",
                                      rules: [required, emailRule]
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTextField, {
                                        modelValue: unref(email),
                                        "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                        color: "primary",
                                        label: "Email",
                                        variant: "outlined",
                                        rules: [required, emailRule]
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, { cols: "6" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VSelect, {
                                      modelValue: unref(roleId),
                                      "onUpdate:modelValue": ($event) => isRef(roleId) ? roleId.value = $event : null,
                                      color: "primary",
                                      label: "R\xF4le",
                                      items: unref(roles),
                                      "item-title": "NAME",
                                      "item-value": "ID",
                                      variant: "outlined"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VSelect, {
                                        modelValue: unref(roleId),
                                        "onUpdate:modelValue": ($event) => isRef(roleId) ? roleId.value = $event : null,
                                        color: "primary",
                                        label: "R\xF4le",
                                        items: unref(roles),
                                        "item-title": "NAME",
                                        "item-value": "ID",
                                        variant: "outlined"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
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
                                      variant: "outlined"
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
                                      variant: "outlined"
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
                                      variant: "outlined",
                                      rules: [required, emailRule]
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "6" }, {
                                  default: withCtx(() => [
                                    createVNode(VSelect, {
                                      modelValue: unref(roleId),
                                      "onUpdate:modelValue": ($event) => isRef(roleId) ? roleId.value = $event : null,
                                      color: "primary",
                                      label: "R\xF4le",
                                      items: unref(roles),
                                      "item-title": "NAME",
                                      "item-value": "ID",
                                      variant: "outlined"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
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
                                    variant: "outlined"
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
                                    variant: "outlined"
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
                                    variant: "outlined",
                                    rules: [required, emailRule]
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { cols: "6" }, {
                                default: withCtx(() => [
                                  createVNode(VSelect, {
                                    modelValue: unref(roleId),
                                    "onUpdate:modelValue": ($event) => isRef(roleId) ? roleId.value = $event : null,
                                    color: "primary",
                                    label: "R\xF4le",
                                    items: unref(roles),
                                    "item-title": "NAME",
                                    "item-value": "ID",
                                    variant: "outlined"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
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
                          onClick: handleUser,
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
                            onClick: handleUser,
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
                                  variant: "outlined"
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
                                  variant: "outlined"
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
                                  variant: "outlined",
                                  rules: [required, emailRule]
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, { cols: "6" }, {
                              default: withCtx(() => [
                                createVNode(VSelect, {
                                  modelValue: unref(roleId),
                                  "onUpdate:modelValue": ($event) => isRef(roleId) ? roleId.value = $event : null,
                                  color: "primary",
                                  label: "R\xF4le",
                                  items: unref(roles),
                                  "item-title": "NAME",
                                  "item-value": "ID",
                                  variant: "outlined"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
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
                          onClick: handleUser,
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
                "prepend-icon": "mdi-account-plus",
                title: "Cr\xE9er un utilisateur"
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
                                variant: "outlined"
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
                                variant: "outlined"
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
                                variant: "outlined",
                                rules: [required, emailRule]
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { cols: "6" }, {
                            default: withCtx(() => [
                              createVNode(VSelect, {
                                modelValue: unref(roleId),
                                "onUpdate:modelValue": ($event) => isRef(roleId) ? roleId.value = $event : null,
                                color: "primary",
                                label: "R\xF4le",
                                items: unref(roles),
                                "item-title": "NAME",
                                "item-value": "ID",
                                variant: "outlined"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
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
                        onClick: handleUser,
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/modal/add/user.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : undefined;
};
const _sfc_main$1 = {
  __name: "user",
  __ssrInlineRender: true,
  props: {
    open: Boolean,
    userData: Object
    // Données de l'utilisateur à modifier
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const config = useRuntimeConfig();
    const roles = ref([]);
    const user = reactive({
      id: null,
      lastName: "",
      firstName: "",
      email: "",
      roleId: null
    });
    watchEffect(() => {
      var _a;
      if (props.userData) {
        user.id = props.userData.ID;
        user.lastName = props.userData.LAST_NAME;
        user.firstName = props.userData.FIRST_NAME;
        user.email = props.userData.EMAIL;
        user.roleId = (_a = props.userData.ROLE) == null ? undefined : _a.id;
      }
    });
    const { data: fetchedRoles, error } = useFetch(`${config.public.baseUrl}/roles`, "$ADP5ZjRhYE");
    watchEffect(() => {
      if (fetchedRoles.value) {
        roles.value = fetchedRoles.value.map((role) => ({
          ID: role.id,
          NAME: role.name
        }));
      } else if (error.value) {
        console.error("Erreur lors du chargement des r\xF4les :", error.value);
      }
    });
    const required = (v) => !!v || "Le champ est requis.";
    const emailRule = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || "Veuillez entrer une adresse email valide.";
    const closeModal = () => {
      emit("update:open", false);
    };
    const handleUser = async () => {
      try {
        const response = await fetch(`${config.public.baseUrl}/users/${user.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(user)
        });
        if (!response.ok) throw new Error("Erreur lors de la modification");
        alert("Utilisateur modifi\xE9 avec succ\xE8s.");
        emit("userUpdated");
        closeModal();
      } catch (error2) {
        console.error("Erreur lors de la modification de l'utilisateur :", error2);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VDialog, mergeProps({
        modelValue: _ctx.$props.open,
        "onUpdate:modelValue": ($event) => _ctx.$props.open = $event,
        "max-width": "600"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, {
              "prepend-icon": "mdi-account-edit",
              title: "Modifier un utilisateur"
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
                                      modelValue: unref(user).lastName,
                                      "onUpdate:modelValue": ($event) => unref(user).lastName = $event,
                                      color: "primary",
                                      label: "Nom",
                                      variant: "outlined"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTextField, {
                                        modelValue: unref(user).lastName,
                                        "onUpdate:modelValue": ($event) => unref(user).lastName = $event,
                                        color: "primary",
                                        label: "Nom",
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
                                    _push6(ssrRenderComponent(VTextField, {
                                      modelValue: unref(user).firstName,
                                      "onUpdate:modelValue": ($event) => unref(user).firstName = $event,
                                      color: "primary",
                                      label: "Pr\xE9noms",
                                      variant: "outlined"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTextField, {
                                        modelValue: unref(user).firstName,
                                        "onUpdate:modelValue": ($event) => unref(user).firstName = $event,
                                        color: "primary",
                                        label: "Pr\xE9noms",
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
                                    _push6(ssrRenderComponent(VTextField, {
                                      modelValue: unref(user).email,
                                      "onUpdate:modelValue": ($event) => unref(user).email = $event,
                                      color: "primary",
                                      label: "Email",
                                      variant: "outlined",
                                      rules: [required, emailRule]
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VTextField, {
                                        modelValue: unref(user).email,
                                        "onUpdate:modelValue": ($event) => unref(user).email = $event,
                                        color: "primary",
                                        label: "Email",
                                        variant: "outlined",
                                        rules: [required, emailRule]
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, { cols: "6" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VSelect, {
                                      modelValue: unref(user).roleId,
                                      "onUpdate:modelValue": ($event) => unref(user).roleId = $event,
                                      color: "primary",
                                      label: "R\xF4le",
                                      items: unref(roles),
                                      "item-title": "NAME",
                                      "item-value": "ID",
                                      variant: "outlined"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VSelect, {
                                        modelValue: unref(user).roleId,
                                        "onUpdate:modelValue": ($event) => unref(user).roleId = $event,
                                        color: "primary",
                                        label: "R\xF4le",
                                        items: unref(roles),
                                        "item-title": "NAME",
                                        "item-value": "ID",
                                        variant: "outlined"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
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
                                      modelValue: unref(user).lastName,
                                      "onUpdate:modelValue": ($event) => unref(user).lastName = $event,
                                      color: "primary",
                                      label: "Nom",
                                      variant: "outlined"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "6" }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      modelValue: unref(user).firstName,
                                      "onUpdate:modelValue": ($event) => unref(user).firstName = $event,
                                      color: "primary",
                                      label: "Pr\xE9noms",
                                      variant: "outlined"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "6" }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      modelValue: unref(user).email,
                                      "onUpdate:modelValue": ($event) => unref(user).email = $event,
                                      color: "primary",
                                      label: "Email",
                                      variant: "outlined",
                                      rules: [required, emailRule]
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "6" }, {
                                  default: withCtx(() => [
                                    createVNode(VSelect, {
                                      modelValue: unref(user).roleId,
                                      "onUpdate:modelValue": ($event) => unref(user).roleId = $event,
                                      color: "primary",
                                      label: "R\xF4le",
                                      items: unref(roles),
                                      "item-title": "NAME",
                                      "item-value": "ID",
                                      variant: "outlined"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
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
                                    modelValue: unref(user).lastName,
                                    "onUpdate:modelValue": ($event) => unref(user).lastName = $event,
                                    color: "primary",
                                    label: "Nom",
                                    variant: "outlined"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { cols: "6" }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    modelValue: unref(user).firstName,
                                    "onUpdate:modelValue": ($event) => unref(user).firstName = $event,
                                    color: "primary",
                                    label: "Pr\xE9noms",
                                    variant: "outlined"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { cols: "6" }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    modelValue: unref(user).email,
                                    "onUpdate:modelValue": ($event) => unref(user).email = $event,
                                    color: "primary",
                                    label: "Email",
                                    variant: "outlined",
                                    rules: [required, emailRule]
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { cols: "6" }, {
                                default: withCtx(() => [
                                  createVNode(VSelect, {
                                    modelValue: unref(user).roleId,
                                    "onUpdate:modelValue": ($event) => unref(user).roleId = $event,
                                    color: "primary",
                                    label: "R\xF4le",
                                    items: unref(roles),
                                    "item-title": "NAME",
                                    "item-value": "ID",
                                    variant: "outlined"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
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
                          onClick: handleUser,
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
                            onClick: handleUser,
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
                                  modelValue: unref(user).lastName,
                                  "onUpdate:modelValue": ($event) => unref(user).lastName = $event,
                                  color: "primary",
                                  label: "Nom",
                                  variant: "outlined"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, { cols: "6" }, {
                              default: withCtx(() => [
                                createVNode(VTextField, {
                                  modelValue: unref(user).firstName,
                                  "onUpdate:modelValue": ($event) => unref(user).firstName = $event,
                                  color: "primary",
                                  label: "Pr\xE9noms",
                                  variant: "outlined"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, { cols: "6" }, {
                              default: withCtx(() => [
                                createVNode(VTextField, {
                                  modelValue: unref(user).email,
                                  "onUpdate:modelValue": ($event) => unref(user).email = $event,
                                  color: "primary",
                                  label: "Email",
                                  variant: "outlined",
                                  rules: [required, emailRule]
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, { cols: "6" }, {
                              default: withCtx(() => [
                                createVNode(VSelect, {
                                  modelValue: unref(user).roleId,
                                  "onUpdate:modelValue": ($event) => unref(user).roleId = $event,
                                  color: "primary",
                                  label: "R\xF4le",
                                  items: unref(roles),
                                  "item-title": "NAME",
                                  "item-value": "ID",
                                  variant: "outlined"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
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
                          onClick: handleUser,
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
                "prepend-icon": "mdi-account-edit",
                title: "Modifier un utilisateur"
              }, {
                default: withCtx(() => [
                  createVNode(VCardText, null, {
                    default: withCtx(() => [
                      createVNode(VRow, { dense: "" }, {
                        default: withCtx(() => [
                          createVNode(VCol, { cols: "6" }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                modelValue: unref(user).lastName,
                                "onUpdate:modelValue": ($event) => unref(user).lastName = $event,
                                color: "primary",
                                label: "Nom",
                                variant: "outlined"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { cols: "6" }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                modelValue: unref(user).firstName,
                                "onUpdate:modelValue": ($event) => unref(user).firstName = $event,
                                color: "primary",
                                label: "Pr\xE9noms",
                                variant: "outlined"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { cols: "6" }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                modelValue: unref(user).email,
                                "onUpdate:modelValue": ($event) => unref(user).email = $event,
                                color: "primary",
                                label: "Email",
                                variant: "outlined",
                                rules: [required, emailRule]
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { cols: "6" }, {
                            default: withCtx(() => [
                              createVNode(VSelect, {
                                modelValue: unref(user).roleId,
                                "onUpdate:modelValue": ($event) => unref(user).roleId = $event,
                                color: "primary",
                                label: "R\xF4le",
                                items: unref(roles),
                                "item-title": "NAME",
                                "item-value": "ID",
                                variant: "outlined"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
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
                        onClick: handleUser,
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/modal/edit/user.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
const _sfc_main = {
  __name: "users",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    const usersHeaders = ref([
      { align: "start", key: "NUM", title: "N\xB0" },
      { align: "start", key: "LAST_NAME", title: "Nom" },
      { align: "start", key: "FIRST_NAME", title: "Pr\xE9noms" },
      { align: "start", key: "EMAIL", title: "Email" },
      { align: "start", key: "CREATE_AT", title: "Date de cr\xE9ation" },
      { align: "start", key: "ROLE", title: "R\xF4le" },
      { align: "start", key: "actions", title: "Actions" }
    ]);
    const users2 = ref([]);
    const usersSearch = ref(null);
    const open = ref(false);
    const openConf = ref(false);
    const openEdit = ref(false);
    const selectedUser = ref(null);
    const toggleModal = () => {
      open.value = !open.value;
    };
    const toggleConfModal = (item) => {
      selectedUser.value = item;
      openConf.value = !openConf.value;
    };
    const toggleEditModal = (item) => {
      selectedUser.value = item;
      openEdit.value = !openEdit.value;
    };
    const loadUsers = async () => {
      try {
        const fetchedUsers = await $fetch(`${config.public.baseUrl}/users`);
        if (fetchedUsers) {
          users2.value = fetchedUsers.map((user, index) => ({
            NUM: index + 1,
            ID: user.id,
            LAST_NAME: user.lastName,
            FIRST_NAME: user.firstName,
            EMAIL: user.email,
            CREATE_AT: new Date(user.createAt).toLocaleDateString(),
            ROLE: user.role
          }));
        }
      } catch (err) {
        console.error("Erreur lors du chargement des utilisateurs :", err);
      }
    };
    loadUsers();
    watchEffect(() => {
      if (!open.value) {
        loadUsers();
      }
    });
    const deleteUser = async (id) => {
      try {
        await $fetch(`${config.public.baseUrl}/users/${id}`, {
          method: "DELETE"
        });
        alert("Utilisateur supprim\xE9 avec succ\xE8s!");
        const updatedUsers = users2.value.filter((user) => user.ID !== id);
        users2.value = updatedUsers;
        selectedUser.value = null;
      } catch (err) {
        console.error("Erreur lors de la suppression de l'utilisateur :", err);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_back_button = _sfc_main$3;
      const _component_modal_add_user = _sfc_main$2;
      const _component_modal_edit_user = _sfc_main$1;
      const _component_confirmation_modal = _sfc_main$4;
      _push(`<!--[--><div class="d-flex justify-space-between ma-4" data-v-e3e4e008>`);
      _push(ssrRenderComponent(_component_back_button, {
        title: "Liste des utilisateurs",
        goBackTo: "/home"
      }, null, _parent));
      _push(ssrRenderComponent(VBtn, {
        prependIcon: "mdi-account-plus-outline",
        color: "primary",
        class: "text-none",
        onClick: toggleModal
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Ajouter un utilisateur`);
          } else {
            return [
              createTextVNode("Ajouter un utilisateur")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_modal_add_user, {
        open: unref(open),
        "onUpdate:open": ($event) => open.value = $event
      }, null, _parent));
      _push(`</div><div class="ma-4" data-v-e3e4e008>`);
      _push(ssrRenderComponent(VDataTable, {
        headers: unref(usersHeaders),
        items: unref(users2),
        search: unref(usersSearch),
        "items-per-page-text": "Utilisateurs par page :",
        "page-text": "",
        class: "customTable1",
        density: "compact",
        "fixed-header": "",
        hover: ""
      }, {
        "item.ROLE": withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(item.ROLE.name)}`);
          } else {
            return [
              createTextVNode(toDisplayString(item.ROLE.name), 1)
            ];
          }
        }),
        "item.actions": withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VIcon, {
              class: "me-2",
              size: "small",
              color: "primary",
              onClick: ($event) => toggleEditModal(item)
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` mdi-pencil `);
                } else {
                  return [
                    createTextVNode(" mdi-pencil ")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VIcon, {
              class: "me-2",
              size: "small",
              color: "primary",
              onClick: ($event) => toggleConfModal(item)
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` mdi-delete `);
                } else {
                  return [
                    createTextVNode(" mdi-delete ")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VIcon, {
              size: "small",
              color: "primary",
              onClick: ($event) => _ctx.changePassword(item)
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` mdi-lock-reset `);
                } else {
                  return [
                    createTextVNode(" mdi-lock-reset ")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VIcon, {
                class: "me-2",
                size: "small",
                color: "primary",
                onClick: ($event) => toggleEditModal(item)
              }, {
                default: withCtx(() => [
                  createTextVNode(" mdi-pencil ")
                ]),
                _: 2
              }, 1032, ["onClick"]),
              createVNode(VIcon, {
                class: "me-2",
                size: "small",
                color: "primary",
                onClick: ($event) => toggleConfModal(item)
              }, {
                default: withCtx(() => [
                  createTextVNode(" mdi-delete ")
                ]),
                _: 2
              }, 1032, ["onClick"]),
              createVNode(VIcon, {
                size: "small",
                color: "primary",
                onClick: ($event) => _ctx.changePassword(item)
              }, {
                default: withCtx(() => [
                  createTextVNode(" mdi-lock-reset ")
                ]),
                _: 2
              }, 1032, ["onClick"])
            ];
          }
        }),
        "no-data": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="no-data-container" data-v-e3e4e008${_scopeId}>`);
            _push2(ssrRenderComponent(VImg, {
              src: _imports_0,
              height: "80",
              width: "80",
              class: "mb-3",
              alt: "Aucune donn\xE9e"
            }, null, _parent2, _scopeId));
            _push2(`<p data-v-e3e4e008${_scopeId}>Aucune donn\xE9e</p></div>`);
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
      _push(ssrRenderComponent(_component_modal_edit_user, {
        open: unref(openEdit),
        userData: unref(selectedUser),
        "onUpdate:open": ($event) => openEdit.value = $event,
        onUserUpdated: loadUsers
      }, null, _parent));
      _push(ssrRenderComponent(_component_confirmation_modal, {
        text: "Vous allez supprimer un utilisateur. Continuer?",
        open: unref(openConf),
        "onUpdate:open": ($event) => openConf.value = $event,
        submit: () => deleteUser(unref(selectedUser).ID)
      }, null, _parent));
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/administration/users.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const users = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e3e4e008"]]);

export { users as default };
//# sourceMappingURL=users-CCKToRao.mjs.map
