import { ref, withCtx, createTextVNode, unref, isRef, createVNode, withModifiers, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_0 } from './Notary-Cbd0OErC.mjs';
import { defineStore } from 'pinia';
import { y as klona, z as parse, A as getRequestHeader, d as destr, B as isEqual, C as setCookie, D as getCookie, E as deleteCookie } from '../_/nitro.mjs';
import { _ as _export_sfc, b as useNuxtApp, u as useRouter$1, aK as VTextField, a1 as VBtn, V as VIcon } from './server.mjs';
import { a as useRequestEvent } from './ssr-6SqBYcwq.mjs';
import { V as VCard, a as VCardTitle, b as VCardText, c as VCardActions } from './VCard-Busk3Fj7.mjs';
import { V as VForm } from './VForm-BGp98nb4.mjs';
import { V as VDialog } from './VDialog-BU74V2eV.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import 'node:path';
import 'vue-router';
import './VAvatar-gxg0IsvB.mjs';

const CookieDefaults = {
  path: "/",
  watch: true,
  decode: (val) => destr(decodeURIComponent(val)),
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  var _a2, _b;
  var _a;
  const opts = { ...CookieDefaults, ..._opts };
  (_a2 = opts.filter) != null ? _a2 : opts.filter = (key) => key === name;
  const cookies = readRawCookies(opts) || {};
  let delay;
  if (opts.maxAge !== undefined) {
    delay = opts.maxAge * 1e3;
  } else if (opts.expires) {
    delay = opts.expires.getTime() - Date.now();
  }
  const hasExpired = delay !== undefined && delay <= 0;
  const cookieValue = klona(hasExpired ? undefined : (_b = cookies[name]) != null ? _b : (_a = opts.default) == null ? undefined : _a.call(opts));
  const cookie = ref(cookieValue);
  {
    const nuxtApp = useNuxtApp();
    const writeFinalCookieValue = () => {
      if (opts.readonly || isEqual(cookie.value, cookies[name])) {
        return;
      }
      nuxtApp._cookies || (nuxtApp._cookies = {});
      if (name in nuxtApp._cookies) {
        if (isEqual(cookie.value, nuxtApp._cookies[name])) {
          return;
        }
      }
      nuxtApp._cookies[name] = cookie.value;
      writeServerCookie(useRequestEvent(nuxtApp), name, cookie.value, opts);
    };
    const unhook = nuxtApp.hooks.hookOnce("app:rendered", writeFinalCookieValue);
    nuxtApp.hooks.hookOnce("app:error", () => {
      unhook();
      return writeFinalCookieValue();
    });
  }
  return cookie;
}
function readRawCookies(opts = {}) {
  {
    return parse(getRequestHeader(useRequestEvent(), "cookie") || "", opts);
  }
}
function writeServerCookie(event, name, value, opts = {}) {
  if (event) {
    if (value !== null && value !== undefined) {
      return setCookie(event, name, value, opts);
    }
    if (getCookie(event, name) !== undefined) {
      return deleteCookie(event, name, opts);
    }
  }
}
const useAuthStore = defineStore("auth", {
  state: () => ({
    // Use the cookie store to persist the token across sessions
    token: useCookie("access_token").value || null
  }),
  actions: {
    setToken(newToken) {
      useCookie("access_token").value = newToken;
      this.token = newToken;
    },
    clearToken() {
      useCookie("access_token").value = null;
      this.token = null;
    }
  },
  getters: {
    isAuthenticated: (state) => !!state.token
  }
});
const _sfc_main = {
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    const form = ref(false);
    const email = ref("");
    const password = ref("");
    const loading = ref(false);
    const show = ref(false);
    const showModal = ref(false);
    const modalTitle = ref("");
    const modalText = ref("");
    const required = (v) => {
      return !!v || "Le champ est obligatoire.";
    };
    const emailRule = (v) => {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || "Veuillez entrer une adresse email valide.";
    };
    const passwordRule = (v) => {
      return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W)[A-Za-z\d\W]{8,}$/.test(v) || "Veuillez entrer un mot de passe ayant au moins huit (8) caract\xE8res, un chiffre, une lettre minuscule, une lettre majuscule; un caract\xE8re sp\xE9cial.";
    };
    const authStore = useAuthStore();
    const router = useRouter$1();
    const onSubmit = async () => {
      loading.value = true;
      showModal.value = false;
      try {
        const testUrl = "http://serverizynotary.izydr.net";
        const data = await $fetch(
          `${testUrl}/auth/login`,
          {
            method: "POST",
            body: JSON.stringify({
              email: email.value,
              password: password.value
            })
          }
        );
        if (data == null ? void 0 : data.accessToken) {
          console.log(data.accessToken);
          authStore.setToken(data.accessToken);
          router.push("/home");
        }
      } catch (error) {
        console.error("Erreur de connexion :", error);
        modalTitle.value = "Erreur de connexion";
        modalText.value = "Veuillez v\xE9rifier vos informations.";
      } finally {
        loading.value = false;
        showModal.value = true;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="d-flex fill-height" data-v-852774ea><div class="w-100 d-none d-sm-none d-md-flex bg-img" data-v-852774ea></div><div class="w-100 d-flex flex-column align-center justify-center" data-v-852774ea>`);
      _push(ssrRenderComponent(VCard, {
        class: "px-6 py-8 w-100 bg-background",
        "max-width": "450",
        variant: "flat"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-100 d-flex justify-center" data-v-852774ea${_scopeId}><img class="w-25"${ssrRenderAttr("src", _imports_0)} alt="" data-v-852774ea${_scopeId}></div>`);
            _push2(ssrRenderComponent(VCardTitle, { class: "text-center font-weight-bold text-h5" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Connexion `);
                } else {
                  return [
                    createTextVNode(" Connexion ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VForm, {
              modelValue: unref(form),
              "onUpdate:modelValue": ($event) => isRef(form) ? form.value = $event : null,
              onSubmit
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VTextField, {
                    modelValue: unref(email),
                    "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                    readonly: unref(loading),
                    rules: [required, emailRule],
                    color: "primary",
                    label: "Email",
                    placeholder: "Entrer votre email",
                    variant: "outlined",
                    clearable: "",
                    class: "mb-2"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VTextField, {
                    modelValue: unref(password),
                    "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                    readonly: unref(loading),
                    "append-inner-icon": unref(show) ? "mdi-eye" : "mdi-eye-off",
                    rules: [required, passwordRule],
                    type: unref(show) ? "text" : "password",
                    color: "primary",
                    label: "Mot de passe",
                    placeholder: "Entrer votre mot de passe",
                    variant: "outlined",
                    clearable: "",
                    "onClick:appendInner": ($event) => show.value = !unref(show)
                  }, null, _parent3, _scopeId2));
                  _push3(`<br data-v-852774ea${_scopeId2}>`);
                  _push3(ssrRenderComponent(VBtn, {
                    disabled: !unref(form),
                    loading: unref(loading),
                    color: "primary",
                    size: "large",
                    type: "submit",
                    variant: "elevated",
                    class: "text-none",
                    block: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Se connecter `);
                      } else {
                        return [
                          createTextVNode(" Se connecter ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VTextField, {
                      modelValue: unref(email),
                      "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                      readonly: unref(loading),
                      rules: [required, emailRule],
                      color: "primary",
                      label: "Email",
                      placeholder: "Entrer votre email",
                      variant: "outlined",
                      clearable: "",
                      class: "mb-2"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly", "rules"]),
                    createVNode(VTextField, {
                      modelValue: unref(password),
                      "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                      readonly: unref(loading),
                      "append-inner-icon": unref(show) ? "mdi-eye" : "mdi-eye-off",
                      rules: [required, passwordRule],
                      type: unref(show) ? "text" : "password",
                      color: "primary",
                      label: "Mot de passe",
                      placeholder: "Entrer votre mot de passe",
                      variant: "outlined",
                      clearable: "",
                      "onClick:appendInner": ($event) => show.value = !unref(show)
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly", "append-inner-icon", "rules", "type", "onClick:appendInner"]),
                    createVNode("br"),
                    createVNode(VBtn, {
                      disabled: !unref(form),
                      loading: unref(loading),
                      color: "primary",
                      size: "large",
                      type: "submit",
                      variant: "elevated",
                      class: "text-none",
                      block: ""
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Se connecter ")
                      ]),
                      _: 1
                    }, 8, ["disabled", "loading"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "w-100 d-flex justify-center" }, [
                createVNode("img", {
                  class: "w-25",
                  src: _imports_0,
                  alt: ""
                })
              ]),
              createVNode(VCardTitle, { class: "text-center font-weight-bold text-h5" }, {
                default: withCtx(() => [
                  createTextVNode(" Connexion ")
                ]),
                _: 1
              }),
              createVNode(VForm, {
                modelValue: unref(form),
                "onUpdate:modelValue": ($event) => isRef(form) ? form.value = $event : null,
                onSubmit: withModifiers(onSubmit, ["prevent"])
              }, {
                default: withCtx(() => [
                  createVNode(VTextField, {
                    modelValue: unref(email),
                    "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                    readonly: unref(loading),
                    rules: [required, emailRule],
                    color: "primary",
                    label: "Email",
                    placeholder: "Entrer votre email",
                    variant: "outlined",
                    clearable: "",
                    class: "mb-2"
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly", "rules"]),
                  createVNode(VTextField, {
                    modelValue: unref(password),
                    "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                    readonly: unref(loading),
                    "append-inner-icon": unref(show) ? "mdi-eye" : "mdi-eye-off",
                    rules: [required, passwordRule],
                    type: unref(show) ? "text" : "password",
                    color: "primary",
                    label: "Mot de passe",
                    placeholder: "Entrer votre mot de passe",
                    variant: "outlined",
                    clearable: "",
                    "onClick:appendInner": ($event) => show.value = !unref(show)
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly", "append-inner-icon", "rules", "type", "onClick:appendInner"]),
                  createVNode("br"),
                  createVNode(VBtn, {
                    disabled: !unref(form),
                    loading: unref(loading),
                    color: "primary",
                    size: "large",
                    type: "submit",
                    variant: "elevated",
                    class: "text-none",
                    block: ""
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Se connecter ")
                    ]),
                    _: 1
                  }, 8, ["disabled", "loading"])
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(VDialog, {
        modelValue: unref(showModal),
        "onUpdate:modelValue": ($event) => isRef(showModal) ? showModal.value = $event : null,
        persistent: "",
        "max-width": "400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardTitle, { class: "headline" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(unref(modalTitle))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(modalTitle)), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, { class: "textModal" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VIcon, {
                          class: "mb-3",
                          color: "#ad1919",
                          size: 80
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`mdi-close-circle-outline`);
                            } else {
                              return [
                                createTextVNode("mdi-close-circle-outline")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<p data-v-852774ea${_scopeId3}>${ssrInterpolate(unref(modalText))}</p>`);
                      } else {
                        return [
                          createVNode(VIcon, {
                            class: "mb-3",
                            color: "#ad1919",
                            size: 80
                          }, {
                            default: withCtx(() => [
                              createTextVNode("mdi-close-circle-outline")
                            ]),
                            _: 1
                          }),
                          createVNode("p", null, toDisplayString(unref(modalText)), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardActions, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, {
                          color: "#808080",
                          variant: "elevated",
                          class: "text-none",
                          onClick: ($event) => showModal.value = false
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Fermer`);
                            } else {
                              return [
                                createTextVNode("Fermer")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, {
                            color: "#808080",
                            variant: "elevated",
                            class: "text-none",
                            onClick: ($event) => showModal.value = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Fermer")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCardTitle, { class: "headline" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(modalTitle)), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(VCardText, { class: "textModal" }, {
                      default: withCtx(() => [
                        createVNode(VIcon, {
                          class: "mb-3",
                          color: "#ad1919",
                          size: 80
                        }, {
                          default: withCtx(() => [
                            createTextVNode("mdi-close-circle-outline")
                          ]),
                          _: 1
                        }),
                        createVNode("p", null, toDisplayString(unref(modalText)), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(VCardActions, null, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          color: "#808080",
                          variant: "elevated",
                          class: "text-none",
                          onClick: ($event) => showModal.value = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Fermer")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
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
              createVNode(VCard, null, {
                default: withCtx(() => [
                  createVNode(VCardTitle, { class: "headline" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(modalTitle)), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(VCardText, { class: "textModal" }, {
                    default: withCtx(() => [
                      createVNode(VIcon, {
                        class: "mb-3",
                        color: "#ad1919",
                        size: 80
                      }, {
                        default: withCtx(() => [
                          createTextVNode("mdi-close-circle-outline")
                        ]),
                        _: 1
                      }),
                      createVNode("p", null, toDisplayString(unref(modalText)), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(VCardActions, null, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        color: "#808080",
                        variant: "elevated",
                        class: "text-none",
                        onClick: ($event) => showModal.value = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Fermer")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
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
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const login = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-852774ea"]]);

export { login as default };
//# sourceMappingURL=login-DsJJymDB.mjs.map
