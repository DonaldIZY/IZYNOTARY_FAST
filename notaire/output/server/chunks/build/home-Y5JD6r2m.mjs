import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { V as VRow, a as VCol } from './VRow-xSUG3UwT.mjs';
import { V as VCard, a as VCardTitle } from './VCard-Busk3Fj7.mjs';
import { V as VImg } from './VAvatar-gxg0IsvB.mjs';
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

const _imports_0 = "" + buildAssetsURL("gest_proc.D-hgL0pL.png");
const _imports_1 = "" + buildAssetsURL("gest_cli.CqqtF4EY.png");
const _imports_2 = "" + buildAssetsURL("tab_bord.DkjBYLk9.png");
const _imports_3 = "" + buildAssetsURL("admin.B4nEzina.png");
const _imports_4 = "" + buildAssetsURL("param.B5vdP4q9.png");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-100 bg-img" }, _attrs))} data-v-749823d2><div class="h-10 d-flex align-center" data-v-749823d2><h1 class="text-center w-100" data-v-749823d2>Bienvenue sur IzyNotary</h1></div><div class="d-flex h-90 w-sm-75 w-lg-50 mx-8 align-center" data-v-749823d2>`);
  _push(ssrRenderComponent(VRow, {
    align: "start",
    justify: "center"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VCol, { cols: "4" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VCard, {
                class: "mx-auto rounded-lg hover-card",
                to: "/proceduresManagement"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VImg, {
                      src: _imports_0,
                      class: "mb-3 mt-2 mx-2 rounded-lg",
                      cover: "",
                      alt: "Gestion des proc\xE9dures"
                    }, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCardTitle, { class: "titleCardText my-1 text-center" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(` Gestion des proc\xE9dures `);
                        } else {
                          return [
                            createTextVNode(" Gestion des proc\xE9dures ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VImg, {
                        src: _imports_0,
                        class: "mb-3 mt-2 mx-2 rounded-lg",
                        cover: "",
                        alt: "Gestion des proc\xE9dures"
                      }),
                      createVNode(VCardTitle, { class: "titleCardText my-1 text-center" }, {
                        default: withCtx(() => [
                          createTextVNode(" Gestion des proc\xE9dures ")
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
                createVNode(VCard, {
                  class: "mx-auto rounded-lg hover-card",
                  to: "/proceduresManagement"
                }, {
                  default: withCtx(() => [
                    createVNode(VImg, {
                      src: _imports_0,
                      class: "mb-3 mt-2 mx-2 rounded-lg",
                      cover: "",
                      alt: "Gestion des proc\xE9dures"
                    }),
                    createVNode(VCardTitle, { class: "titleCardText my-1 text-center" }, {
                      default: withCtx(() => [
                        createTextVNode(" Gestion des proc\xE9dures ")
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
        _push2(ssrRenderComponent(VCol, { cols: "4" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VCard, {
                class: "mx-auto rounded-lg hover-card",
                to: "/customersManagement"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VImg, {
                      src: _imports_1,
                      class: "mb-3 mt-2 mx-2 rounded-lg",
                      cover: "",
                      alt: "Gestion des clients"
                    }, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCardTitle, { class: "titleCardText my-1 text-center" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(` Gestion des clients `);
                        } else {
                          return [
                            createTextVNode(" Gestion des clients ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VImg, {
                        src: _imports_1,
                        class: "mb-3 mt-2 mx-2 rounded-lg",
                        cover: "",
                        alt: "Gestion des clients"
                      }),
                      createVNode(VCardTitle, { class: "titleCardText my-1 text-center" }, {
                        default: withCtx(() => [
                          createTextVNode(" Gestion des clients ")
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
                createVNode(VCard, {
                  class: "mx-auto rounded-lg hover-card",
                  to: "/customersManagement"
                }, {
                  default: withCtx(() => [
                    createVNode(VImg, {
                      src: _imports_1,
                      class: "mb-3 mt-2 mx-2 rounded-lg",
                      cover: "",
                      alt: "Gestion des clients"
                    }),
                    createVNode(VCardTitle, { class: "titleCardText my-1 text-center" }, {
                      default: withCtx(() => [
                        createTextVNode(" Gestion des clients ")
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
        _push2(ssrRenderComponent(VCol, { cols: "4" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VCard, {
                class: "mx-auto rounded-lg hover-card",
                to: "/dashboard"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VImg, {
                      src: _imports_2,
                      class: "mb-3 mt-2 mx-2 rounded-lg",
                      cover: "",
                      alt: "Tableau de bord"
                    }, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCardTitle, { class: "titleCardText my-1 text-center" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(` Tableau de bord `);
                        } else {
                          return [
                            createTextVNode(" Tableau de bord ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VImg, {
                        src: _imports_2,
                        class: "mb-3 mt-2 mx-2 rounded-lg",
                        cover: "",
                        alt: "Tableau de bord"
                      }),
                      createVNode(VCardTitle, { class: "titleCardText my-1 text-center" }, {
                        default: withCtx(() => [
                          createTextVNode(" Tableau de bord ")
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
                createVNode(VCard, {
                  class: "mx-auto rounded-lg hover-card",
                  to: "/dashboard"
                }, {
                  default: withCtx(() => [
                    createVNode(VImg, {
                      src: _imports_2,
                      class: "mb-3 mt-2 mx-2 rounded-lg",
                      cover: "",
                      alt: "Tableau de bord"
                    }),
                    createVNode(VCardTitle, { class: "titleCardText my-1 text-center" }, {
                      default: withCtx(() => [
                        createTextVNode(" Tableau de bord ")
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
        _push2(ssrRenderComponent(VCol, { cols: "4" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VCard, {
                class: "mx-auto rounded-lg hover-card",
                to: "/administration"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VImg, {
                      src: _imports_3,
                      class: "mb-3 mt-2 mx-2 rounded-lg",
                      cover: "",
                      alt: "Administration"
                    }, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCardTitle, { class: "titleCardText my-1 text-center" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(` Administration `);
                        } else {
                          return [
                            createTextVNode(" Administration ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VImg, {
                        src: _imports_3,
                        class: "mb-3 mt-2 mx-2 rounded-lg",
                        cover: "",
                        alt: "Administration"
                      }),
                      createVNode(VCardTitle, { class: "titleCardText my-1 text-center" }, {
                        default: withCtx(() => [
                          createTextVNode(" Administration ")
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
                createVNode(VCard, {
                  class: "mx-auto rounded-lg hover-card",
                  to: "/administration"
                }, {
                  default: withCtx(() => [
                    createVNode(VImg, {
                      src: _imports_3,
                      class: "mb-3 mt-2 mx-2 rounded-lg",
                      cover: "",
                      alt: "Administration"
                    }),
                    createVNode(VCardTitle, { class: "titleCardText my-1 text-center" }, {
                      default: withCtx(() => [
                        createTextVNode(" Administration ")
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
        _push2(ssrRenderComponent(VCol, { cols: "4" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VCard, {
                disabled: "",
                class: "mx-auto rounded-lg hover-card",
                to: "/settings"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VImg, {
                      src: _imports_4,
                      class: "mb-3 mt-2 mx-2 rounded-lg",
                      cover: "",
                      alt: "Param\xE8tres"
                    }, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCardTitle, { class: "titleCardText my-1 text-center" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(` Param\xE8tres `);
                        } else {
                          return [
                            createTextVNode(" Param\xE8tres ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VImg, {
                        src: _imports_4,
                        class: "mb-3 mt-2 mx-2 rounded-lg",
                        cover: "",
                        alt: "Param\xE8tres"
                      }),
                      createVNode(VCardTitle, { class: "titleCardText my-1 text-center" }, {
                        default: withCtx(() => [
                          createTextVNode(" Param\xE8tres ")
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
                createVNode(VCard, {
                  disabled: "",
                  class: "mx-auto rounded-lg hover-card",
                  to: "/settings"
                }, {
                  default: withCtx(() => [
                    createVNode(VImg, {
                      src: _imports_4,
                      class: "mb-3 mt-2 mx-2 rounded-lg",
                      cover: "",
                      alt: "Param\xE8tres"
                    }),
                    createVNode(VCardTitle, { class: "titleCardText my-1 text-center" }, {
                      default: withCtx(() => [
                        createTextVNode(" Param\xE8tres ")
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
          createVNode(VCol, { cols: "4" }, {
            default: withCtx(() => [
              createVNode(VCard, {
                class: "mx-auto rounded-lg hover-card",
                to: "/proceduresManagement"
              }, {
                default: withCtx(() => [
                  createVNode(VImg, {
                    src: _imports_0,
                    class: "mb-3 mt-2 mx-2 rounded-lg",
                    cover: "",
                    alt: "Gestion des proc\xE9dures"
                  }),
                  createVNode(VCardTitle, { class: "titleCardText my-1 text-center" }, {
                    default: withCtx(() => [
                      createTextVNode(" Gestion des proc\xE9dures ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(VCol, { cols: "4" }, {
            default: withCtx(() => [
              createVNode(VCard, {
                class: "mx-auto rounded-lg hover-card",
                to: "/customersManagement"
              }, {
                default: withCtx(() => [
                  createVNode(VImg, {
                    src: _imports_1,
                    class: "mb-3 mt-2 mx-2 rounded-lg",
                    cover: "",
                    alt: "Gestion des clients"
                  }),
                  createVNode(VCardTitle, { class: "titleCardText my-1 text-center" }, {
                    default: withCtx(() => [
                      createTextVNode(" Gestion des clients ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(VCol, { cols: "4" }, {
            default: withCtx(() => [
              createVNode(VCard, {
                class: "mx-auto rounded-lg hover-card",
                to: "/dashboard"
              }, {
                default: withCtx(() => [
                  createVNode(VImg, {
                    src: _imports_2,
                    class: "mb-3 mt-2 mx-2 rounded-lg",
                    cover: "",
                    alt: "Tableau de bord"
                  }),
                  createVNode(VCardTitle, { class: "titleCardText my-1 text-center" }, {
                    default: withCtx(() => [
                      createTextVNode(" Tableau de bord ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(VCol, { cols: "4" }, {
            default: withCtx(() => [
              createVNode(VCard, {
                class: "mx-auto rounded-lg hover-card",
                to: "/administration"
              }, {
                default: withCtx(() => [
                  createVNode(VImg, {
                    src: _imports_3,
                    class: "mb-3 mt-2 mx-2 rounded-lg",
                    cover: "",
                    alt: "Administration"
                  }),
                  createVNode(VCardTitle, { class: "titleCardText my-1 text-center" }, {
                    default: withCtx(() => [
                      createTextVNode(" Administration ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(VCol, { cols: "4" }, {
            default: withCtx(() => [
              createVNode(VCard, {
                disabled: "",
                class: "mx-auto rounded-lg hover-card",
                to: "/settings"
              }, {
                default: withCtx(() => [
                  createVNode(VImg, {
                    src: _imports_4,
                    class: "mb-3 mt-2 mx-2 rounded-lg",
                    cover: "",
                    alt: "Param\xE8tres"
                  }),
                  createVNode(VCardTitle, { class: "titleCardText my-1 text-center" }, {
                    default: withCtx(() => [
                      createTextVNode(" Param\xE8tres ")
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
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const home = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-749823d2"]]);

export { home as default };
//# sourceMappingURL=home-Y5JD6r2m.mjs.map
