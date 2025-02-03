import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { _ as _sfc_main$1 } from './backButton-HdIxwv9Z.mjs';
import { withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
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

const _imports_0 = "" + buildAssetsURL("vente.BgU1Ga-G.png");
const _imports_1 = "" + buildAssetsURL("constSoc.BUgikbMx.png");
const _imports_2 = "" + buildAssetsURL("modifSoc.7GmfXREd.png");
const _imports_3 = "" + buildAssetsURL("succBienMob.DGisd7Qo.png");
const _imports_4 = "" + buildAssetsURL("succBienImmob.PXHLU2Bq.png");
const _imports_5 = "" + buildAssetsURL("credit.Dm9r4kYJ.png");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_back_button = _sfc_main$1;
  _push(`<!--[--><div class="ma-4" data-v-22de3d93>`);
  _push(ssrRenderComponent(_component_back_button, {
    title: "Cr\xE9ation de proc\xE9dure",
    goBackTo: "/proceduresManagement"
  }, null, _parent));
  _push(`</div><div class="w-full d-flex justify-center" data-v-22de3d93><div class="w-75 ma-2 center" data-v-22de3d93>`);
  _push(ssrRenderComponent(VRow, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VCol, {
          cols: "12",
          sm: "6",
          md: "4"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VCard, {
                class: "mx-auto rounded-lg hover-card",
                to: "/selling"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VImg, {
                      src: _imports_0,
                      class: "mb-2 mt-2 mx-2 rounded-lg",
                      cover: "",
                      alt: "Proc\xE9dure de vente"
                    }, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCardTitle, { class: "my-1 text-center titleCardText" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(` Vente `);
                        } else {
                          return [
                            createTextVNode(" Vente ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VImg, {
                        src: _imports_0,
                        class: "mb-2 mt-2 mx-2 rounded-lg",
                        cover: "",
                        alt: "Proc\xE9dure de vente"
                      }),
                      createVNode(VCardTitle, { class: "my-1 text-center titleCardText" }, {
                        default: withCtx(() => [
                          createTextVNode(" Vente ")
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
                  to: "/selling"
                }, {
                  default: withCtx(() => [
                    createVNode(VImg, {
                      src: _imports_0,
                      class: "mb-2 mt-2 mx-2 rounded-lg",
                      cover: "",
                      alt: "Proc\xE9dure de vente"
                    }),
                    createVNode(VCardTitle, { class: "my-1 text-center titleCardText" }, {
                      default: withCtx(() => [
                        createTextVNode(" Vente ")
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
          sm: "6",
          md: "4"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VCard, {
                class: "mx-auto rounded-lg hover-card",
                to: "/companyFormation"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VImg, {
                      src: _imports_1,
                      class: "mb-2 mt-2 mx-2 rounded-lg",
                      cover: "",
                      alt: "Proc\xE9dure de constitution de soci\xE9t\xE9"
                    }, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCardTitle, { class: "my-1 text-center titleCardText" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(` Constitution de soci\xE9t\xE9 `);
                        } else {
                          return [
                            createTextVNode(" Constitution de soci\xE9t\xE9 ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VImg, {
                        src: _imports_1,
                        class: "mb-2 mt-2 mx-2 rounded-lg",
                        cover: "",
                        alt: "Proc\xE9dure de constitution de soci\xE9t\xE9"
                      }),
                      createVNode(VCardTitle, { class: "my-1 text-center titleCardText" }, {
                        default: withCtx(() => [
                          createTextVNode(" Constitution de soci\xE9t\xE9 ")
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
                  to: "/companyFormation"
                }, {
                  default: withCtx(() => [
                    createVNode(VImg, {
                      src: _imports_1,
                      class: "mb-2 mt-2 mx-2 rounded-lg",
                      cover: "",
                      alt: "Proc\xE9dure de constitution de soci\xE9t\xE9"
                    }),
                    createVNode(VCardTitle, { class: "my-1 text-center titleCardText" }, {
                      default: withCtx(() => [
                        createTextVNode(" Constitution de soci\xE9t\xE9 ")
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
          sm: "6",
          md: "4"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VCard, {
                class: "mx-auto rounded-lg hover-card",
                to: "/modificationCompany"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VImg, {
                      src: _imports_2,
                      class: "mb-2 mt-2 mx-2 rounded-lg",
                      cover: "",
                      alt: "Proc\xE9dure de modification de soci\xE9t\xE9"
                    }, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCardTitle, { class: "my-1 text-center titleCardText" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(` Modification de soci\xE9t\xE9 `);
                        } else {
                          return [
                            createTextVNode(" Modification de soci\xE9t\xE9 ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VImg, {
                        src: _imports_2,
                        class: "mb-2 mt-2 mx-2 rounded-lg",
                        cover: "",
                        alt: "Proc\xE9dure de modification de soci\xE9t\xE9"
                      }),
                      createVNode(VCardTitle, { class: "my-1 text-center titleCardText" }, {
                        default: withCtx(() => [
                          createTextVNode(" Modification de soci\xE9t\xE9 ")
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
                  to: "/modificationCompany"
                }, {
                  default: withCtx(() => [
                    createVNode(VImg, {
                      src: _imports_2,
                      class: "mb-2 mt-2 mx-2 rounded-lg",
                      cover: "",
                      alt: "Proc\xE9dure de modification de soci\xE9t\xE9"
                    }),
                    createVNode(VCardTitle, { class: "my-1 text-center titleCardText" }, {
                      default: withCtx(() => [
                        createTextVNode(" Modification de soci\xE9t\xE9 ")
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
          sm: "6",
          md: "4"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VCard, {
                class: "mx-auto rounded-lg hover-card",
                to: "/transferOfMovableProperty"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VImg, {
                      src: _imports_3,
                      class: "mb-2 mt-2 mx-2 rounded-lg",
                      cover: "",
                      alt: "Proc\xE9dure de succession de biens mobiliers"
                    }, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCardTitle, { class: "my-1 text-center titleCardText" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(` Succession de biens mobiliers `);
                        } else {
                          return [
                            createTextVNode(" Succession de biens mobiliers ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VImg, {
                        src: _imports_3,
                        class: "mb-2 mt-2 mx-2 rounded-lg",
                        cover: "",
                        alt: "Proc\xE9dure de succession de biens mobiliers"
                      }),
                      createVNode(VCardTitle, { class: "my-1 text-center titleCardText" }, {
                        default: withCtx(() => [
                          createTextVNode(" Succession de biens mobiliers ")
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
                  to: "/transferOfMovableProperty"
                }, {
                  default: withCtx(() => [
                    createVNode(VImg, {
                      src: _imports_3,
                      class: "mb-2 mt-2 mx-2 rounded-lg",
                      cover: "",
                      alt: "Proc\xE9dure de succession de biens mobiliers"
                    }),
                    createVNode(VCardTitle, { class: "my-1 text-center titleCardText" }, {
                      default: withCtx(() => [
                        createTextVNode(" Succession de biens mobiliers ")
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
          sm: "6",
          md: "4"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VCard, {
                class: "mx-auto rounded-lg hover-card",
                to: "transferOfRealEstate"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VImg, {
                      src: _imports_4,
                      class: "mb-2 mt-2 mx-2 rounded-lg",
                      cover: "",
                      alt: "Proc\xE9dures de succession de biens immobiliers"
                    }, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCardTitle, { class: "my-1 text-center titleCardText" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(` Succession de biens immobiliers `);
                        } else {
                          return [
                            createTextVNode(" Succession de biens immobiliers ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VImg, {
                        src: _imports_4,
                        class: "mb-2 mt-2 mx-2 rounded-lg",
                        cover: "",
                        alt: "Proc\xE9dures de succession de biens immobiliers"
                      }),
                      createVNode(VCardTitle, { class: "my-1 text-center titleCardText" }, {
                        default: withCtx(() => [
                          createTextVNode(" Succession de biens immobiliers ")
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
                  to: "transferOfRealEstate"
                }, {
                  default: withCtx(() => [
                    createVNode(VImg, {
                      src: _imports_4,
                      class: "mb-2 mt-2 mx-2 rounded-lg",
                      cover: "",
                      alt: "Proc\xE9dures de succession de biens immobiliers"
                    }),
                    createVNode(VCardTitle, { class: "my-1 text-center titleCardText" }, {
                      default: withCtx(() => [
                        createTextVNode(" Succession de biens immobiliers ")
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
          sm: "6",
          md: "4"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VCard, {
                class: "mx-auto rounded-lg hover-card",
                to: "",
                disabled: ""
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VImg, {
                      src: _imports_5,
                      class: "mb-2 mt-2 mx-2 rounded-lg",
                      cover: "",
                      alt: "Proc\xE9dure de cr\xE9dit"
                    }, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCardTitle, { class: "my-1 text-center titleCardText" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(` Cr\xE9dit `);
                        } else {
                          return [
                            createTextVNode(" Cr\xE9dit ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VImg, {
                        src: _imports_5,
                        class: "mb-2 mt-2 mx-2 rounded-lg",
                        cover: "",
                        alt: "Proc\xE9dure de cr\xE9dit"
                      }),
                      createVNode(VCardTitle, { class: "my-1 text-center titleCardText" }, {
                        default: withCtx(() => [
                          createTextVNode(" Cr\xE9dit ")
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
                  to: "",
                  disabled: ""
                }, {
                  default: withCtx(() => [
                    createVNode(VImg, {
                      src: _imports_5,
                      class: "mb-2 mt-2 mx-2 rounded-lg",
                      cover: "",
                      alt: "Proc\xE9dure de cr\xE9dit"
                    }),
                    createVNode(VCardTitle, { class: "my-1 text-center titleCardText" }, {
                      default: withCtx(() => [
                        createTextVNode(" Cr\xE9dit ")
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
            sm: "6",
            md: "4"
          }, {
            default: withCtx(() => [
              createVNode(VCard, {
                class: "mx-auto rounded-lg hover-card",
                to: "/selling"
              }, {
                default: withCtx(() => [
                  createVNode(VImg, {
                    src: _imports_0,
                    class: "mb-2 mt-2 mx-2 rounded-lg",
                    cover: "",
                    alt: "Proc\xE9dure de vente"
                  }),
                  createVNode(VCardTitle, { class: "my-1 text-center titleCardText" }, {
                    default: withCtx(() => [
                      createTextVNode(" Vente ")
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
            sm: "6",
            md: "4"
          }, {
            default: withCtx(() => [
              createVNode(VCard, {
                class: "mx-auto rounded-lg hover-card",
                to: "/companyFormation"
              }, {
                default: withCtx(() => [
                  createVNode(VImg, {
                    src: _imports_1,
                    class: "mb-2 mt-2 mx-2 rounded-lg",
                    cover: "",
                    alt: "Proc\xE9dure de constitution de soci\xE9t\xE9"
                  }),
                  createVNode(VCardTitle, { class: "my-1 text-center titleCardText" }, {
                    default: withCtx(() => [
                      createTextVNode(" Constitution de soci\xE9t\xE9 ")
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
            sm: "6",
            md: "4"
          }, {
            default: withCtx(() => [
              createVNode(VCard, {
                class: "mx-auto rounded-lg hover-card",
                to: "/modificationCompany"
              }, {
                default: withCtx(() => [
                  createVNode(VImg, {
                    src: _imports_2,
                    class: "mb-2 mt-2 mx-2 rounded-lg",
                    cover: "",
                    alt: "Proc\xE9dure de modification de soci\xE9t\xE9"
                  }),
                  createVNode(VCardTitle, { class: "my-1 text-center titleCardText" }, {
                    default: withCtx(() => [
                      createTextVNode(" Modification de soci\xE9t\xE9 ")
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
            sm: "6",
            md: "4"
          }, {
            default: withCtx(() => [
              createVNode(VCard, {
                class: "mx-auto rounded-lg hover-card",
                to: "/transferOfMovableProperty"
              }, {
                default: withCtx(() => [
                  createVNode(VImg, {
                    src: _imports_3,
                    class: "mb-2 mt-2 mx-2 rounded-lg",
                    cover: "",
                    alt: "Proc\xE9dure de succession de biens mobiliers"
                  }),
                  createVNode(VCardTitle, { class: "my-1 text-center titleCardText" }, {
                    default: withCtx(() => [
                      createTextVNode(" Succession de biens mobiliers ")
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
            sm: "6",
            md: "4"
          }, {
            default: withCtx(() => [
              createVNode(VCard, {
                class: "mx-auto rounded-lg hover-card",
                to: "transferOfRealEstate"
              }, {
                default: withCtx(() => [
                  createVNode(VImg, {
                    src: _imports_4,
                    class: "mb-2 mt-2 mx-2 rounded-lg",
                    cover: "",
                    alt: "Proc\xE9dures de succession de biens immobiliers"
                  }),
                  createVNode(VCardTitle, { class: "my-1 text-center titleCardText" }, {
                    default: withCtx(() => [
                      createTextVNode(" Succession de biens immobiliers ")
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
            sm: "6",
            md: "4"
          }, {
            default: withCtx(() => [
              createVNode(VCard, {
                class: "mx-auto rounded-lg hover-card",
                to: "",
                disabled: ""
              }, {
                default: withCtx(() => [
                  createVNode(VImg, {
                    src: _imports_5,
                    class: "mb-2 mt-2 mx-2 rounded-lg",
                    cover: "",
                    alt: "Proc\xE9dure de cr\xE9dit"
                  }),
                  createVNode(VCardTitle, { class: "my-1 text-center titleCardText" }, {
                    default: withCtx(() => [
                      createTextVNode(" Cr\xE9dit ")
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
  _push(`</div></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/addProcedure.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const addProcedure = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-22de3d93"]]);

export { addProcedure as default };
//# sourceMappingURL=addProcedure-DFiEkmFD.mjs.map
