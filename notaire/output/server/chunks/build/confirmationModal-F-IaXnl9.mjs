import { useSSRContext, mergeProps, withCtx, createVNode, toDisplayString } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { V as VDialog } from './VDialog-BU74V2eV.mjs';
import { V as VCard, b as VCardText, c as VCardActions } from './VCard-Busk3Fj7.mjs';
import { a as VDivider } from './filter-BGBihEE2.mjs';
import { aR as VSpacer, a1 as VBtn } from './server.mjs';

const _sfc_main = {
  __name: "confirmationModal",
  __ssrInlineRender: true,
  props: {
    open: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: ""
    },
    submit: {
      type: Function,
      default: () => {
      }
    }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const closeModal = () => {
      emit("update:open", false);
    };
    const submitModal = () => {
      props.submit();
      emit("update:open", false);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VDialog, mergeProps({
        modelValue: props.open,
        "onUpdate:modelValue": ($event) => props.open = $event,
        width: "500"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, {
              "prepend-icon": "mdi-information-outline",
              title: "Confirmation"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardText, { class: "ma-4 text-center" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p${_scopeId3}>${ssrInterpolate(__props.text)}</p>`);
                      } else {
                        return [
                          createVNode("p", null, toDisplayString(__props.text), 1)
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
                          text: "Valider",
                          variant: "tonal",
                          onClick: submitModal,
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
                            text: "Valider",
                            variant: "tonal",
                            onClick: submitModal,
                            class: "text-none"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCardText, { class: "ma-4 text-center" }, {
                      default: withCtx(() => [
                        createVNode("p", null, toDisplayString(__props.text), 1)
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
                          text: "Valider",
                          variant: "tonal",
                          onClick: submitModal,
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
                "prepend-icon": "mdi-information-outline",
                title: "Confirmation"
              }, {
                default: withCtx(() => [
                  createVNode(VCardText, { class: "ma-4 text-center" }, {
                    default: withCtx(() => [
                      createVNode("p", null, toDisplayString(__props.text), 1)
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
                        text: "Valider",
                        variant: "tonal",
                        onClick: submitModal,
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/confirmationModal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as _ };
//# sourceMappingURL=confirmationModal-F-IaXnl9.mjs.map
