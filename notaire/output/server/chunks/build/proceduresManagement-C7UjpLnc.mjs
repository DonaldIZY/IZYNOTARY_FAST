import { _ as _sfc_main$2 } from './backButton-HdIxwv9Z.mjs';
import { ref, computed, createVNode, mergeProps, Fragment, shallowRef, watch, provide, withDirectives, resolveDirective, inject, vShow, toRef, nextTick, resolveComponent, withCtx, createTextVNode, unref, isRef, useSSRContext, mergeModels, useModel, reactive, toDisplayString, openBlock, createBlock, renderList } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { V as VDialog } from './VDialog-BU74V2eV.mjs';
import { V as VCard, b as VCardText, c as VCardActions } from './VCard-Busk3Fj7.mjs';
import { p as propsFactory, aq as omit, b7 as makeVBtnProps, g as genericComponent, ao as useTextColor, j as useRender, a1 as VBtn, aJ as forwardRefs, m as makeComponentProps, f as makeTagProps, A as makeThemeProps, C as provideTheme, a6 as useRtl, a5 as useLocale, as as useGroup, a4 as useProxiedModel, aw as makeGroupItemProps, bb as makeLazyProps, ax as useGroupItem, bc as useLazy, X as MaybeTransition, l as makeDensityProps, F as useDensity, T as useBackgroundColor, aT as useScopeId, h as provideDefaults, W as convertToUnit, _ as _export_sfc, b8 as animate, b9 as standardEasing, aD as isObject, aV as VSheet, aK as VTextField, ba as keys, aR as VSpacer } from './server.mjs';
import { u as useSsrBoot } from './ssrBoot-BtvJZs44.mjs';
import { m as makeVSlideGroupProps, b as VSlideGroup, V as VSelect, c as VChip, a as VDivider } from './filter-BGBihEE2.mjs';
import { V as VFileInput } from './VFileInput-ChcsM8I7.mjs';
import { _ as _imports_0 } from './tableIcon_nodata-BFvCTCmh.mjs';
import { V as VRow, a as VCol } from './VRow-xSUG3UwT.mjs';
import { V as VForm } from './VForm-BGp98nb4.mjs';
import { V as VDataTable } from './VDataTable-BOKaCzwU.mjs';
import { V as VImg } from './VAvatar-gxg0IsvB.mjs';
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

const VTabsSymbol = Symbol.for("vuetify:v-tabs");
const makeVTabProps = propsFactory({
  fixed: Boolean,
  sliderColor: String,
  hideSlider: Boolean,
  direction: {
    type: String,
    default: "horizontal"
  },
  ...omit(makeVBtnProps({
    selectedClass: "v-tab--selected",
    variant: "text"
  }), ["active", "block", "flat", "location", "position", "symbol"])
}, "VTab");
const VTab = genericComponent()({
  name: "VTab",
  props: makeVTabProps(),
  setup(props, _ref) {
    let {
      slots,
      attrs
    } = _ref;
    const {
      textColorClasses: sliderColorClasses,
      textColorStyles: sliderColorStyles
    } = useTextColor(props, "sliderColor");
    const rootEl = ref();
    const sliderEl = ref();
    const isHorizontal = computed(() => props.direction === "horizontal");
    const isSelected = computed(() => {
      var _a2;
      var _a, _b;
      return (_a2 = (_b = (_a = rootEl.value) == null ? undefined : _a.group) == null ? undefined : _b.isSelected.value) != null ? _a2 : false;
    });
    function updateSlider(_ref2) {
      var _a, _b;
      let {
        value
      } = _ref2;
      if (value) {
        const prevEl = (_b = (_a = rootEl.value) == null ? undefined : _a.$el.parentElement) == null ? undefined : _b.querySelector(".v-tab--selected .v-tab__slider");
        const nextEl = sliderEl.value;
        if (!prevEl || !nextEl) return;
        const color = getComputedStyle(prevEl).color;
        const prevBox = prevEl.getBoundingClientRect();
        const nextBox = nextEl.getBoundingClientRect();
        const xy = isHorizontal.value ? "x" : "y";
        const XY = isHorizontal.value ? "X" : "Y";
        const rightBottom = isHorizontal.value ? "right" : "bottom";
        const widthHeight = isHorizontal.value ? "width" : "height";
        const prevPos = prevBox[xy];
        const nextPos = nextBox[xy];
        const delta = prevPos > nextPos ? prevBox[rightBottom] - nextBox[rightBottom] : prevBox[xy] - nextBox[xy];
        const origin = Math.sign(delta) > 0 ? isHorizontal.value ? "right" : "bottom" : Math.sign(delta) < 0 ? isHorizontal.value ? "left" : "top" : "center";
        const size = Math.abs(delta) + (Math.sign(delta) < 0 ? prevBox[widthHeight] : nextBox[widthHeight]);
        const scale = size / Math.max(prevBox[widthHeight], nextBox[widthHeight]) || 0;
        const initialScale = prevBox[widthHeight] / nextBox[widthHeight] || 0;
        const sigma = 1.5;
        animate(nextEl, {
          backgroundColor: [color, "currentcolor"],
          transform: [`translate${XY}(${delta}px) scale${XY}(${initialScale})`, `translate${XY}(${delta / sigma}px) scale${XY}(${(scale - 1) / sigma + 1})`, "none"],
          transformOrigin: Array(3).fill(origin)
        }, {
          duration: 225,
          easing: standardEasing
        });
      }
    }
    useRender(() => {
      const btnProps = VBtn.filterProps(props);
      return createVNode(VBtn, mergeProps({
        "symbol": VTabsSymbol,
        "ref": rootEl,
        "class": ["v-tab", props.class],
        "style": props.style,
        "tabindex": isSelected.value ? 0 : -1,
        "role": "tab",
        "aria-selected": String(isSelected.value),
        "active": false
      }, btnProps, attrs, {
        "block": props.fixed,
        "maxWidth": props.fixed ? 300 : undefined,
        "onGroup:selected": updateSlider
      }), {
        ...slots,
        default: () => {
          var _a2;
          var _a;
          return createVNode(Fragment, null, [(_a2 = (_a = slots.default) == null ? undefined : _a.call(slots)) != null ? _a2 : props.text, !props.hideSlider && createVNode("div", {
            "ref": sliderEl,
            "class": ["v-tab__slider", sliderColorClasses.value],
            "style": sliderColorStyles.value
          }, null)]);
        }
      });
    });
    return forwardRefs({}, rootEl);
  }
});
const handleGesture = (wrapper) => {
  const {
    touchstartX,
    touchendX,
    touchstartY,
    touchendY
  } = wrapper;
  const dirRatio = 0.5;
  const minDistance = 16;
  wrapper.offsetX = touchendX - touchstartX;
  wrapper.offsetY = touchendY - touchstartY;
  if (Math.abs(wrapper.offsetY) < dirRatio * Math.abs(wrapper.offsetX)) {
    wrapper.left && touchendX < touchstartX - minDistance && wrapper.left(wrapper);
    wrapper.right && touchendX > touchstartX + minDistance && wrapper.right(wrapper);
  }
  if (Math.abs(wrapper.offsetX) < dirRatio * Math.abs(wrapper.offsetY)) {
    wrapper.up && touchendY < touchstartY - minDistance && wrapper.up(wrapper);
    wrapper.down && touchendY > touchstartY + minDistance && wrapper.down(wrapper);
  }
};
function touchstart(event, wrapper) {
  var _a;
  const touch = event.changedTouches[0];
  wrapper.touchstartX = touch.clientX;
  wrapper.touchstartY = touch.clientY;
  (_a = wrapper.start) == null ? undefined : _a.call(wrapper, {
    originalEvent: event,
    ...wrapper
  });
}
function touchend(event, wrapper) {
  var _a;
  const touch = event.changedTouches[0];
  wrapper.touchendX = touch.clientX;
  wrapper.touchendY = touch.clientY;
  (_a = wrapper.end) == null ? undefined : _a.call(wrapper, {
    originalEvent: event,
    ...wrapper
  });
  handleGesture(wrapper);
}
function touchmove(event, wrapper) {
  var _a;
  const touch = event.changedTouches[0];
  wrapper.touchmoveX = touch.clientX;
  wrapper.touchmoveY = touch.clientY;
  (_a = wrapper.move) == null ? undefined : _a.call(wrapper, {
    originalEvent: event,
    ...wrapper
  });
}
function createHandlers() {
  let value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const wrapper = {
    touchstartX: 0,
    touchstartY: 0,
    touchendX: 0,
    touchendY: 0,
    touchmoveX: 0,
    touchmoveY: 0,
    offsetX: 0,
    offsetY: 0,
    left: value.left,
    right: value.right,
    up: value.up,
    down: value.down,
    start: value.start,
    move: value.move,
    end: value.end
  };
  return {
    touchstart: (e) => touchstart(e, wrapper),
    touchend: (e) => touchend(e, wrapper),
    touchmove: (e) => touchmove(e, wrapper)
  };
}
function mounted(el, binding) {
  var _a2, _b;
  var _a;
  const value = binding.value;
  const target = (value == null ? undefined : value.parent) ? el.parentElement : el;
  const options = (_a2 = value == null ? undefined : value.options) != null ? _a2 : {
    passive: true
  };
  const uid = (_a = binding.instance) == null ? undefined : _a.$.uid;
  if (!target || !uid) return;
  const handlers = createHandlers(binding.value);
  target._touchHandlers = (_b = target._touchHandlers) != null ? _b : /* @__PURE__ */ Object.create(null);
  target._touchHandlers[uid] = handlers;
  keys(handlers).forEach((eventName) => {
    target.addEventListener(eventName, handlers[eventName], options);
  });
}
function unmounted(el, binding) {
  var _a, _b;
  const target = ((_a = binding.value) == null ? undefined : _a.parent) ? el.parentElement : el;
  const uid = (_b = binding.instance) == null ? undefined : _b.$.uid;
  if (!(target == null ? undefined : target._touchHandlers) || !uid) return;
  const handlers = target._touchHandlers[uid];
  keys(handlers).forEach((eventName) => {
    target.removeEventListener(eventName, handlers[eventName]);
  });
  delete target._touchHandlers[uid];
}
const Touch = {
  mounted,
  unmounted
};
const VWindowSymbol = Symbol.for("vuetify:v-window");
const VWindowGroupSymbol = Symbol.for("vuetify:v-window-group");
const makeVWindowProps = propsFactory({
  continuous: Boolean,
  nextIcon: {
    type: [Boolean, String, Function, Object],
    default: "$next"
  },
  prevIcon: {
    type: [Boolean, String, Function, Object],
    default: "$prev"
  },
  reverse: Boolean,
  showArrows: {
    type: [Boolean, String],
    validator: (v) => typeof v === "boolean" || v === "hover"
  },
  touch: {
    type: [Object, Boolean],
    default: undefined
  },
  direction: {
    type: String,
    default: "horizontal"
  },
  modelValue: null,
  disabled: Boolean,
  selectedClass: {
    type: String,
    default: "v-window-item--active"
  },
  // TODO: mandatory should probably not be exposed but do this for now
  mandatory: {
    type: [Boolean, String],
    default: "force"
  },
  ...makeComponentProps(),
  ...makeTagProps(),
  ...makeThemeProps()
}, "VWindow");
const VWindow = genericComponent()({
  name: "VWindow",
  directives: {
    Touch
  },
  props: makeVWindowProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      isRtl
    } = useRtl();
    const {
      t
    } = useLocale();
    const group = useGroup(props, VWindowGroupSymbol);
    const rootRef = ref();
    const isRtlReverse = computed(() => isRtl.value ? !props.reverse : props.reverse);
    const isReversed = shallowRef(false);
    const transition = computed(() => {
      const axis = props.direction === "vertical" ? "y" : "x";
      const reverse = isRtlReverse.value ? !isReversed.value : isReversed.value;
      const direction = reverse ? "-reverse" : "";
      return `v-window-${axis}${direction}-transition`;
    });
    const transitionCount = shallowRef(0);
    const transitionHeight = ref(undefined);
    const activeIndex = computed(() => {
      return group.items.value.findIndex((item) => group.selected.value.includes(item.id));
    });
    watch(activeIndex, (newVal, oldVal) => {
      const itemsLength = group.items.value.length;
      const lastIndex = itemsLength - 1;
      if (itemsLength <= 2) {
        isReversed.value = newVal < oldVal;
      } else if (newVal === lastIndex && oldVal === 0) {
        isReversed.value = true;
      } else if (newVal === 0 && oldVal === lastIndex) {
        isReversed.value = false;
      } else {
        isReversed.value = newVal < oldVal;
      }
    });
    provide(VWindowSymbol, {
      transition,
      isReversed,
      transitionCount,
      transitionHeight,
      rootRef
    });
    const canMoveBack = computed(() => props.continuous || activeIndex.value !== 0);
    const canMoveForward = computed(() => props.continuous || activeIndex.value !== group.items.value.length - 1);
    function prev() {
      canMoveBack.value && group.prev();
    }
    function next() {
      canMoveForward.value && group.next();
    }
    const arrows = computed(() => {
      const arrows2 = [];
      const prevProps = {
        icon: isRtl.value ? props.nextIcon : props.prevIcon,
        class: `v-window__${isRtlReverse.value ? "right" : "left"}`,
        onClick: group.prev,
        "aria-label": t("$vuetify.carousel.prev")
      };
      arrows2.push(canMoveBack.value ? slots.prev ? slots.prev({
        props: prevProps
      }) : createVNode(VBtn, prevProps, null) : createVNode("div", null, null));
      const nextProps = {
        icon: isRtl.value ? props.prevIcon : props.nextIcon,
        class: `v-window__${isRtlReverse.value ? "left" : "right"}`,
        onClick: group.next,
        "aria-label": t("$vuetify.carousel.next")
      };
      arrows2.push(canMoveForward.value ? slots.next ? slots.next({
        props: nextProps
      }) : createVNode(VBtn, nextProps, null) : createVNode("div", null, null));
      return arrows2;
    });
    const touchOptions = computed(() => {
      if (props.touch === false) return props.touch;
      const options = {
        left: () => {
          isRtlReverse.value ? prev() : next();
        },
        right: () => {
          isRtlReverse.value ? next() : prev();
        },
        start: (_ref2) => {
          let {
            originalEvent
          } = _ref2;
          originalEvent.stopPropagation();
        }
      };
      return {
        ...options,
        ...props.touch === true ? {} : props.touch
      };
    });
    useRender(() => withDirectives(createVNode(props.tag, {
      "ref": rootRef,
      "class": ["v-window", {
        "v-window--show-arrows-on-hover": props.showArrows === "hover"
      }, themeClasses.value, props.class],
      "style": props.style
    }, {
      default: () => {
        var _a, _b;
        return [createVNode("div", {
          "class": "v-window__container",
          "style": {
            height: transitionHeight.value
          }
        }, [(_a = slots.default) == null ? undefined : _a.call(slots, {
          group
        }), props.showArrows !== false && createVNode("div", {
          "class": "v-window__controls"
        }, [arrows.value])]), (_b = slots.additional) == null ? undefined : _b.call(slots, {
          group
        })];
      }
    }), [[resolveDirective("touch"), touchOptions.value]]));
    return {
      group
    };
  }
});
const makeVTabsWindowProps = propsFactory({
  ...omit(makeVWindowProps(), ["continuous", "nextIcon", "prevIcon", "showArrows", "touch", "mandatory"])
}, "VTabsWindow");
const VTabsWindow = genericComponent()({
  name: "VTabsWindow",
  props: makeVTabsWindowProps(),
  emits: {
    "update:modelValue": (v) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const group = inject(VTabsSymbol, null);
    const _model = useProxiedModel(props, "modelValue");
    const model = computed({
      get() {
        var _a;
        if (_model.value != null || !group) return _model.value;
        return (_a = group.items.value.find((item) => group.selected.value.includes(item.id))) == null ? undefined : _a.value;
      },
      set(val) {
        _model.value = val;
      }
    });
    useRender(() => {
      const windowProps = VWindow.filterProps(props);
      return createVNode(VWindow, mergeProps({
        "_as": "VTabsWindow"
      }, windowProps, {
        "modelValue": model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        "class": ["v-tabs-window", props.class],
        "style": props.style,
        "mandatory": false,
        "touch": false
      }), slots);
    });
    return {};
  }
});
const makeVWindowItemProps = propsFactory({
  reverseTransition: {
    type: [Boolean, String],
    default: undefined
  },
  transition: {
    type: [Boolean, String],
    default: undefined
  },
  ...makeComponentProps(),
  ...makeGroupItemProps(),
  ...makeLazyProps()
}, "VWindowItem");
const VWindowItem = genericComponent()({
  name: "VWindowItem",
  directives: {
    Touch
  },
  props: makeVWindowItemProps(),
  emits: {
    "group:selected": (val) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const window = inject(VWindowSymbol);
    const groupItem = useGroupItem(props, VWindowGroupSymbol);
    const {
      isBooted
    } = useSsrBoot();
    if (!window || !groupItem) throw new Error("[Vuetify] VWindowItem must be used inside VWindow");
    const isTransitioning = shallowRef(false);
    const hasTransition = computed(() => isBooted.value && (window.isReversed.value ? props.reverseTransition !== false : props.transition !== false));
    function onAfterTransition() {
      if (!isTransitioning.value || !window) {
        return;
      }
      isTransitioning.value = false;
      if (window.transitionCount.value > 0) {
        window.transitionCount.value -= 1;
        if (window.transitionCount.value === 0) {
          window.transitionHeight.value = undefined;
        }
      }
    }
    function onBeforeTransition() {
      var _a;
      if (isTransitioning.value || !window) {
        return;
      }
      isTransitioning.value = true;
      if (window.transitionCount.value === 0) {
        window.transitionHeight.value = convertToUnit((_a = window.rootRef.value) == null ? undefined : _a.clientHeight);
      }
      window.transitionCount.value += 1;
    }
    function onTransitionCancelled() {
      onAfterTransition();
    }
    function onEnterTransition(el) {
      if (!isTransitioning.value) {
        return;
      }
      nextTick(() => {
        if (!hasTransition.value || !isTransitioning.value || !window) {
          return;
        }
        window.transitionHeight.value = convertToUnit(el.clientHeight);
      });
    }
    const transition = computed(() => {
      const name = window.isReversed.value ? props.reverseTransition : props.transition;
      return !hasTransition.value ? false : {
        name: typeof name !== "string" ? window.transition.value : name,
        onBeforeEnter: onBeforeTransition,
        onAfterEnter: onAfterTransition,
        onEnterCancelled: onTransitionCancelled,
        onBeforeLeave: onBeforeTransition,
        onAfterLeave: onAfterTransition,
        onLeaveCancelled: onTransitionCancelled,
        onEnter: onEnterTransition
      };
    });
    const {
      hasContent
    } = useLazy(props, groupItem.isSelected);
    useRender(() => createVNode(MaybeTransition, {
      "transition": transition.value,
      "disabled": !isBooted.value
    }, {
      default: () => {
        var _a;
        return [withDirectives(createVNode("div", {
          "class": ["v-window-item", groupItem.selectedClass.value, props.class],
          "style": props.style
        }, [hasContent.value && ((_a = slots.default) == null ? undefined : _a.call(slots))]), [[vShow, groupItem.isSelected.value]])];
      }
    }));
    return {
      groupItem
    };
  }
});
const makeVTabsWindowItemProps = propsFactory({
  ...makeVWindowItemProps()
}, "VTabsWindowItem");
const VTabsWindowItem = genericComponent()({
  name: "VTabsWindowItem",
  props: makeVTabsWindowItemProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => {
      const windowItemProps = VWindowItem.filterProps(props);
      return createVNode(VWindowItem, mergeProps({
        "_as": "VTabsWindowItem"
      }, windowItemProps, {
        "class": ["v-tabs-window-item", props.class],
        "style": props.style
      }), slots);
    });
    return {};
  }
});
function parseItems(items) {
  if (!items) return [];
  return items.map((item) => {
    if (!isObject(item)) return {
      text: item,
      value: item
    };
    return item;
  });
}
const makeVTabsProps = propsFactory({
  alignTabs: {
    type: String,
    default: "start"
  },
  color: String,
  fixedTabs: Boolean,
  items: {
    type: Array,
    default: () => []
  },
  stacked: Boolean,
  bgColor: String,
  grow: Boolean,
  height: {
    type: [Number, String],
    default: undefined
  },
  hideSlider: Boolean,
  sliderColor: String,
  ...makeVSlideGroupProps({
    mandatory: "force",
    selectedClass: "v-tab-item--selected"
  }),
  ...makeDensityProps(),
  ...makeTagProps()
}, "VTabs");
const VTabs = genericComponent()({
  name: "VTabs",
  props: makeVTabsProps(),
  emits: {
    "update:modelValue": (v) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const model = useProxiedModel(props, "modelValue");
    const items = computed(() => parseItems(props.items));
    const {
      densityClasses
    } = useDensity(props);
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(toRef(props, "bgColor"));
    const {
      scopeId
    } = useScopeId();
    provideDefaults({
      VTab: {
        color: toRef(props, "color"),
        direction: toRef(props, "direction"),
        stacked: toRef(props, "stacked"),
        fixed: toRef(props, "fixedTabs"),
        sliderColor: toRef(props, "sliderColor"),
        hideSlider: toRef(props, "hideSlider")
      }
    });
    useRender(() => {
      const slideGroupProps = VSlideGroup.filterProps(props);
      const hasWindow = !!(slots.window || props.items.length > 0);
      return createVNode(Fragment, null, [createVNode(VSlideGroup, mergeProps(slideGroupProps, {
        "modelValue": model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        "class": ["v-tabs", `v-tabs--${props.direction}`, `v-tabs--align-tabs-${props.alignTabs}`, {
          "v-tabs--fixed-tabs": props.fixedTabs,
          "v-tabs--grow": props.grow,
          "v-tabs--stacked": props.stacked
        }, densityClasses.value, backgroundColorClasses.value, props.class],
        "style": [{
          "--v-tabs-height": convertToUnit(props.height)
        }, backgroundColorStyles.value, props.style],
        "role": "tablist",
        "symbol": VTabsSymbol
      }, scopeId, attrs), {
        default: () => {
          var _a2;
          var _a;
          return [(_a2 = (_a = slots.default) == null ? undefined : _a.call(slots)) != null ? _a2 : items.value.map((item) => {
            var _a3;
            var _a22;
            return (_a3 = (_a22 = slots.tab) == null ? undefined : _a22.call(slots, {
              item
            })) != null ? _a3 : createVNode(VTab, mergeProps(item, {
              "key": item.text,
              "value": item.value
            }), {
              default: slots[`tab.${item.value}`] ? () => {
                var _a32;
                return (_a32 = slots[`tab.${item.value}`]) == null ? undefined : _a32.call(slots, {
                  item
                });
              } : undefined
            });
          })];
        }
      }), hasWindow && createVNode(VTabsWindow, mergeProps({
        "modelValue": model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        "key": "tabs-window"
      }, scopeId), {
        default: () => {
          var _a;
          return [items.value.map((item) => {
            var _a3;
            var _a2;
            return (_a3 = (_a2 = slots.item) == null ? undefined : _a2.call(slots, {
              item
            })) != null ? _a3 : createVNode(VTabsWindowItem, {
              "value": item.value
            }, {
              default: () => {
                var _a32;
                return (_a32 = slots[`item.${item.value}`]) == null ? undefined : _a32.call(slots, {
                  item
                });
              }
            });
          }), (_a = slots.window) == null ? undefined : _a.call(slots)];
        }
      })]);
    });
    return {};
  }
});
const _sfc_main$1 = {
  __name: "procedureStep",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    show: {
      type: Boolean,
      required: true
    },
    data: {
      type: Object
      // required: true
    }
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["closeModal", "submit"], ["update:modelValue"]),
  setup(__props, { emit: __emit }) {
    const props = __props;
    const tab = useModel(__props, "modelValue");
    const procedureData = toRef(props, "data");
    const newProcedureData = reactive({});
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VDialog, mergeProps({
        modelValue: props.show,
        "onUpdate:modelValue": ($event) => props.show = $event,
        "max-width": "900",
        persistent: true
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, { title: "Modifier l'\xE9tape de la proc\xE9dure" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VTabs, {
                    modelValue: tab.value,
                    "onUpdate:modelValue": ($event) => tab.value = $event,
                    color: "#ad1919"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(unref(procedureData).steps.filter((elem) => ["termin\xE9e", "en cours"].includes(elem.status.toLowerCase())), (step) => {
                          _push4(ssrRenderComponent(VTab, {
                            value: step.action
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(step.action)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(step.action), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(procedureData).steps.filter((elem) => ["termin\xE9e", "en cours"].includes(elem.status.toLowerCase())), (step) => {
                            return openBlock(), createBlock(VTab, {
                              value: step.action
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(step.action), 1)
                              ]),
                              _: 2
                            }, 1032, ["value"]);
                          }), 256))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTabsWindow, {
                          modelValue: tab.value,
                          "onUpdate:modelValue": ($event) => tab.value = $event
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(unref(procedureData).steps.filter((elem) => ["termin\xE9e", "en cours"].includes(elem.status.toLowerCase())), (step) => {
                                _push5(ssrRenderComponent(VTabsWindowItem, {
                                  value: step.action
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<!--[-->`);
                                      ssrRenderList(Object.keys(step.documents), (doc) => {
                                        _push6(ssrRenderComponent(VFileInput, {
                                          name: "test",
                                          label: doc,
                                          variant: "outlined",
                                          "prepend-inner-icon": "mdi-file",
                                          "onUpdate:modelValue": (file) => {
                                            if (unref(newProcedureData).action == step.action) {
                                              unref(newProcedureData).documents[doc] = file;
                                            } else {
                                              newProcedureData.value = { action: step.action, documents: { [doc]: file } };
                                            }
                                          }
                                        }, null, _parent6, _scopeId5));
                                      });
                                      _push6(`<!--]-->`);
                                    } else {
                                      return [
                                        (openBlock(true), createBlock(Fragment, null, renderList(Object.keys(step.documents), (doc) => {
                                          return openBlock(), createBlock(VFileInput, {
                                            name: "test",
                                            label: doc,
                                            variant: "outlined",
                                            "prepend-inner-icon": "mdi-file",
                                            "onUpdate:modelValue": (file) => {
                                              if (unref(newProcedureData).action == step.action) {
                                                unref(newProcedureData).documents[doc] = file;
                                              } else {
                                                newProcedureData.value = { action: step.action, documents: { [doc]: file } };
                                              }
                                            }
                                          }, null, 8, ["label", "onUpdate:modelValue"]);
                                        }), 256))
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(procedureData).steps.filter((elem) => ["termin\xE9e", "en cours"].includes(elem.status.toLowerCase())), (step) => {
                                  return openBlock(), createBlock(VTabsWindowItem, {
                                    value: step.action
                                  }, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(Object.keys(step.documents), (doc) => {
                                        return openBlock(), createBlock(VFileInput, {
                                          name: "test",
                                          label: doc,
                                          variant: "outlined",
                                          "prepend-inner-icon": "mdi-file",
                                          "onUpdate:modelValue": (file) => {
                                            if (unref(newProcedureData).action == step.action) {
                                              unref(newProcedureData).documents[doc] = file;
                                            } else {
                                              newProcedureData.value = { action: step.action, documents: { [doc]: file } };
                                            }
                                          }
                                        }, null, 8, ["label", "onUpdate:modelValue"]);
                                      }), 256))
                                    ]),
                                    _: 2
                                  }, 1032, ["value"]);
                                }), 256))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VTabsWindow, {
                            modelValue: tab.value,
                            "onUpdate:modelValue": ($event) => tab.value = $event
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(procedureData).steps.filter((elem) => ["termin\xE9e", "en cours"].includes(elem.status.toLowerCase())), (step) => {
                                return openBlock(), createBlock(VTabsWindowItem, {
                                  value: step.action
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(Object.keys(step.documents), (doc) => {
                                      return openBlock(), createBlock(VFileInput, {
                                        name: "test",
                                        label: doc,
                                        variant: "outlined",
                                        "prepend-inner-icon": "mdi-file",
                                        "onUpdate:modelValue": (file) => {
                                          if (unref(newProcedureData).action == step.action) {
                                            unref(newProcedureData).documents[doc] = file;
                                          } else {
                                            newProcedureData.value = { action: step.action, documents: { [doc]: file } };
                                          }
                                        }
                                      }, null, 8, ["label", "onUpdate:modelValue"]);
                                    }), 256))
                                  ]),
                                  _: 2
                                }, 1032, ["value"]);
                              }), 256))
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
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
                          onClick: () => {
                            _ctx.$emit("closeModal");
                            newProcedureData.value = {};
                          },
                          class: "text-none"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          color: "primary",
                          text: "Enregistrer",
                          variant: "tonal",
                          onClick: ($event) => _ctx.$emit("submit", { ...unref(newProcedureData), contact: unref(procedureData).customer.phone, folderNum: unref(procedureData).folderNum, procedureType: unref(procedureData).PROCEDURE_TYPE, id: unref(procedureData).id }),
                          class: "text-none"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VSpacer),
                          createVNode(VBtn, {
                            text: "Annuler",
                            variant: "plain",
                            onClick: () => {
                              _ctx.$emit("closeModal");
                              newProcedureData.value = {};
                            },
                            class: "text-none"
                          }, null, 8, ["onClick"]),
                          createVNode(VBtn, {
                            color: "primary",
                            text: "Enregistrer",
                            variant: "tonal",
                            onClick: ($event) => _ctx.$emit("submit", { ...unref(newProcedureData), contact: unref(procedureData).customer.phone, folderNum: unref(procedureData).folderNum, procedureType: unref(procedureData).PROCEDURE_TYPE, id: unref(procedureData).id }),
                            class: "text-none"
                          }, null, 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VTabs, {
                      modelValue: tab.value,
                      "onUpdate:modelValue": ($event) => tab.value = $event,
                      color: "#ad1919"
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(procedureData).steps.filter((elem) => ["termin\xE9e", "en cours"].includes(elem.status.toLowerCase())), (step) => {
                          return openBlock(), createBlock(VTab, {
                            value: step.action
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(step.action), 1)
                            ]),
                            _: 2
                          }, 1032, ["value"]);
                        }), 256))
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(VCardText, null, {
                      default: withCtx(() => [
                        createVNode(VTabsWindow, {
                          modelValue: tab.value,
                          "onUpdate:modelValue": ($event) => tab.value = $event
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(procedureData).steps.filter((elem) => ["termin\xE9e", "en cours"].includes(elem.status.toLowerCase())), (step) => {
                              return openBlock(), createBlock(VTabsWindowItem, {
                                value: step.action
                              }, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(Object.keys(step.documents), (doc) => {
                                    return openBlock(), createBlock(VFileInput, {
                                      name: "test",
                                      label: doc,
                                      variant: "outlined",
                                      "prepend-inner-icon": "mdi-file",
                                      "onUpdate:modelValue": (file) => {
                                        if (unref(newProcedureData).action == step.action) {
                                          unref(newProcedureData).documents[doc] = file;
                                        } else {
                                          newProcedureData.value = { action: step.action, documents: { [doc]: file } };
                                        }
                                      }
                                    }, null, 8, ["label", "onUpdate:modelValue"]);
                                  }), 256))
                                ]),
                                _: 2
                              }, 1032, ["value"]);
                            }), 256))
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
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
                          onClick: () => {
                            _ctx.$emit("closeModal");
                            newProcedureData.value = {};
                          },
                          class: "text-none"
                        }, null, 8, ["onClick"]),
                        createVNode(VBtn, {
                          color: "primary",
                          text: "Enregistrer",
                          variant: "tonal",
                          onClick: ($event) => _ctx.$emit("submit", { ...unref(newProcedureData), contact: unref(procedureData).customer.phone, folderNum: unref(procedureData).folderNum, procedureType: unref(procedureData).PROCEDURE_TYPE, id: unref(procedureData).id }),
                          class: "text-none"
                        }, null, 8, ["onClick"])
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
              createVNode(VCard, { title: "Modifier l'\xE9tape de la proc\xE9dure" }, {
                default: withCtx(() => [
                  createVNode(VTabs, {
                    modelValue: tab.value,
                    "onUpdate:modelValue": ($event) => tab.value = $event,
                    color: "#ad1919"
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(procedureData).steps.filter((elem) => ["termin\xE9e", "en cours"].includes(elem.status.toLowerCase())), (step) => {
                        return openBlock(), createBlock(VTab, {
                          value: step.action
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(step.action), 1)
                          ]),
                          _: 2
                        }, 1032, ["value"]);
                      }), 256))
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(VCardText, null, {
                    default: withCtx(() => [
                      createVNode(VTabsWindow, {
                        modelValue: tab.value,
                        "onUpdate:modelValue": ($event) => tab.value = $event
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(procedureData).steps.filter((elem) => ["termin\xE9e", "en cours"].includes(elem.status.toLowerCase())), (step) => {
                            return openBlock(), createBlock(VTabsWindowItem, {
                              value: step.action
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(Object.keys(step.documents), (doc) => {
                                  return openBlock(), createBlock(VFileInput, {
                                    name: "test",
                                    label: doc,
                                    variant: "outlined",
                                    "prepend-inner-icon": "mdi-file",
                                    "onUpdate:modelValue": (file) => {
                                      if (unref(newProcedureData).action == step.action) {
                                        unref(newProcedureData).documents[doc] = file;
                                      } else {
                                        newProcedureData.value = { action: step.action, documents: { [doc]: file } };
                                      }
                                    }
                                  }, null, 8, ["label", "onUpdate:modelValue"]);
                                }), 256))
                              ]),
                              _: 2
                            }, 1032, ["value"]);
                          }), 256))
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
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
                        onClick: () => {
                          _ctx.$emit("closeModal");
                          newProcedureData.value = {};
                        },
                        class: "text-none"
                      }, null, 8, ["onClick"]),
                      createVNode(VBtn, {
                        color: "primary",
                        text: "Enregistrer",
                        variant: "tonal",
                        onClick: ($event) => _ctx.$emit("submit", { ...unref(newProcedureData), contact: unref(procedureData).customer.phone, folderNum: unref(procedureData).folderNum, procedureType: unref(procedureData).PROCEDURE_TYPE, id: unref(procedureData).id }),
                        class: "text-none"
                      }, null, 8, ["onClick"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/modal/edit/procedureStep.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
const testUrl = "http://localhost:8000";
const _sfc_main = {
  __name: "proceduresManagement",
  __ssrInlineRender: true,
  setup(__props) {
    const proceduresHeaders = ref([
      { align: "start", key: "NUM", title: "N\xB0" },
      { align: "start", key: "CUSTOMER", title: "Client" },
      { align: "start", key: "PROCEDURE_TYPE", title: "Type de proc\xE9dure" },
      { align: "start", key: "CREATE_BY", title: "Cr\xE9\xE9e par" },
      { align: "start", key: "CREATE_AT", title: "Date de cr\xE9ation" },
      { align: "start", key: "PROGRESSION", title: "Progression" },
      { align: "center", key: "STATUS", title: "Statut" },
      { align: "center", key: "ACTIONS", title: "Actions" }
    ]);
    const procedures = ref([]);
    const searchCNI = ref(null);
    const searchNum = ref(null);
    const searchCustomer = ref(null);
    const searchStartDate = ref(null);
    const searchProcedureType = ref(null);
    const searchStatus = ref(null);
    const form = ref(null);
    const filteredProcedures = computed(() => {
      return procedures.value.filter((item) => {
        const matchesCNI = !searchCNI.value || item.NUM.toString().includes(searchCNI.value);
        const matchesNum = !searchNum.value || item.NUM.toString().includes(searchNum.value);
        const matchesCustomer = !searchCustomer.value || item.CUSTOMER.toLowerCase().includes(searchCustomer.value.toLowerCase());
        const matchesStartDate = !searchStartDate.value || new Date(item.CREATE_AT).toISOString().slice(0, 10) >= searchStartDate.value;
        const matchesProcedureType = !searchProcedureType.value || new Date(item.CREATE_AT).toISOString().slice(0, 10) <= searchProcedureType.value;
        const matchesStatus = !searchStatus.value || item.STATUS.toLowerCase;
        return matchesCNI && matchesNum && matchesCustomer && matchesStartDate && matchesProcedureType && matchesStatus;
      });
    });
    const clearFilters = () => {
      searchCNI.value = null;
      searchNum.value = null;
      searchCustomer.value = null;
      searchStartDate.value = null;
      searchProcedureType.value = null;
      searchStatus.value = null;
    };
    const loadProcedures = async () => {
      try {
        const fetchedProcedures = await $fetch(
          `${testUrl}/folders`
        );
        console.log("fetchedProcedures : ", fetchedProcedures);
        if (fetchedProcedures) {
          procedures.value = fetchedProcedures.map((procedure, index) => ({
            NUM: index + 1,
            CUSTOMER: procedure.customer.lastName + " " + procedure.customer.firstName,
            PROCEDURE_TYPE: procedure.procedureType,
            CREATE_BY: "",
            CREATE_AT: new Date(procedure.createAt).toLocaleDateString(),
            PROGRESSION: procedure.progression * 100 + "%",
            STATUS: procedure.status,
            steps: procedure.step.steps,
            customer: procedure.customer,
            id: procedure.id,
            folderNum: procedure.folderNum
          }));
        }
      } catch (err) {
        console.error("Erreur lors du chargement des proc\xE9dures : ", err);
      }
    };
    loadProcedures();
    const dialog = ref(false);
    const selectedProcedure = ref({});
    const openModal = (val) => {
      dialog.value = true;
      selectedProcedure.value = val;
      console.log("selectedValue : ", selectedProcedure.value);
    };
    const closeModal = () => {
      dialog.value = false;
    };
    const redirectRegardingProcedure = (procedure) => {
      console.log("procedure details : ", procedure);
      let type = procedure.PROCEDURE_TYPE;
      if (type.toLowerCase() == "constitution de soci\xE9t\xE9") {
        return "/companyIncorporationDetails";
      } else if (type.toLowerCase() == "modification de soci\xE9t\xE9") {
        return "/companyModificationDetails";
      } else if (type.toLowerCase() == "succession de biens immobiliers") {
        return "/realEstateDetails";
      } else if (type.toLowerCase() == "succession de biens mobiliers") {
        return "/personalPropertyDetails";
      } else if (type.toLowerCase() == "vente") {
        return "/salesDetails";
      }
    };
    const updateProcedure = async (val) => {
      try {
        console.log("data to send before change to formadata : ", val);
        var dataToSend = new FormData();
        dataToSend.append("action", val.action);
        dataToSend.append("folderNum", val.folderNum);
        dataToSend.append("procedureType", val.procedureType);
        dataToSend.append("contact", val.contact);
        for (const fileKey of Object.keys(val.documents)) {
          dataToSend.append(fileKey, val.documents[fileKey]);
        }
        const resultOfProcedureUpdate = await $fetch(
          `${testUrl}/steps/update/${val.id}`,
          {
            method: "PATCH",
            //   headers: {"Content-Type": "application/json"},
            cors: "no-cors",
            body: dataToSend
          }
        );
        console.log("back response : ", resultOfProcedureUpdate);
      } catch (err) {
        console.error("Erreur lors de la mise \xE0 jour de la proc\xE9dure : ", err);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_back_button = _sfc_main$2;
      const _component_v_date_input = resolveComponent("v-date-input");
      const _component_modal_edit_procedureStep = _sfc_main$1;
      _push(`<!--[--><div class="ma-4" data-v-309f46d4>`);
      _push(ssrRenderComponent(_component_back_button, {
        title: "Gestion des proc\xE9dures",
        goBackTo: "/home"
      }, null, _parent));
      _push(`</div><div class="ma-4" data-v-309f46d4>`);
      _push(ssrRenderComponent(VRow, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              class: "d-flex justify-end"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VBtn, {
                    color: "primary",
                    class: "text-none",
                    prependIcon: "mdi-folder-plus-outline",
                    to: "/addProcedure"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Cr\xE9er une proc\xE9dure `);
                      } else {
                        return [
                          createTextVNode(" Cr\xE9er une proc\xE9dure ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VBtn, {
                      color: "primary",
                      class: "text-none",
                      prependIcon: "mdi-folder-plus-outline",
                      to: "/addProcedure"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Cr\xE9er une proc\xE9dure ")
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
                class: "d-flex justify-end"
              }, {
                default: withCtx(() => [
                  createVNode(VBtn, {
                    color: "primary",
                    class: "text-none",
                    prependIcon: "mdi-folder-plus-outline",
                    to: "/addProcedure"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Cr\xE9er une proc\xE9dure ")
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
      _push(ssrRenderComponent(VRow, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, {
              cols: "12",
              lg: "3"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VSheet, {
                    elevation: 3,
                    rounded: "",
                    class: "pa-2"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h4 class="mb-3" data-v-309f46d4${_scopeId3}>Recherche avanc\xE9e</h4>`);
                        _push4(ssrRenderComponent(VForm, {
                          modelValue: unref(form),
                          "onUpdate:modelValue": ($event) => isRef(form) ? form.value = $event : null
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VRow, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      lg: "12",
                                      sm: "4"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VTextField, {
                                            color: "primary",
                                            modelValue: unref(searchNum),
                                            "onUpdate:modelValue": ($event) => isRef(searchNum) ? searchNum.value = $event : null,
                                            label: "Recherche par N\xB0",
                                            "prepend-inner-icon": "mdi-numeric",
                                            variant: "outlined",
                                            density: "compact",
                                            "hide-details": ""
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VTextField, {
                                              color: "primary",
                                              modelValue: unref(searchNum),
                                              "onUpdate:modelValue": ($event) => isRef(searchNum) ? searchNum.value = $event : null,
                                              label: "Recherche par N\xB0",
                                              "prepend-inner-icon": "mdi-numeric",
                                              variant: "outlined",
                                              density: "compact",
                                              "hide-details": ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      lg: "12",
                                      sm: "4"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VTextField, {
                                            color: "primary",
                                            modelValue: unref(searchCustomer),
                                            "onUpdate:modelValue": ($event) => isRef(searchCustomer) ? searchCustomer.value = $event : null,
                                            label: "Recherche par client",
                                            "prepend-inner-icon": "mdi-account",
                                            variant: "outlined",
                                            density: "compact",
                                            "hide-details": ""
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VTextField, {
                                              color: "primary",
                                              modelValue: unref(searchCustomer),
                                              "onUpdate:modelValue": ($event) => isRef(searchCustomer) ? searchCustomer.value = $event : null,
                                              label: "Recherche par client",
                                              "prepend-inner-icon": "mdi-account",
                                              variant: "outlined",
                                              density: "compact",
                                              "hide-details": ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      lg: "12",
                                      sm: "4"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VSelect, {
                                            modelValue: unref(searchProcedureType),
                                            "onUpdate:modelValue": ($event) => isRef(searchProcedureType) ? searchProcedureType.value = $event : null,
                                            color: "primary",
                                            label: "Type de proc\xE9dure",
                                            "prepend-inner-icon": "mdi-folder-open-outline",
                                            chips: "",
                                            items: [
                                              "Vente",
                                              "Constitution de soci\xE9t\xE9",
                                              "Modification de soci\xE9t\xE9",
                                              "Succession de biens mobiliers",
                                              "Succession de biens immobiliers",
                                              "Cr\xE9dit"
                                            ],
                                            multiple: "",
                                            clearable: "",
                                            variant: "outlined",
                                            density: "compact",
                                            "hide-details": ""
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VSelect, {
                                              modelValue: unref(searchProcedureType),
                                              "onUpdate:modelValue": ($event) => isRef(searchProcedureType) ? searchProcedureType.value = $event : null,
                                              color: "primary",
                                              label: "Type de proc\xE9dure",
                                              "prepend-inner-icon": "mdi-folder-open-outline",
                                              chips: "",
                                              items: [
                                                "Vente",
                                                "Constitution de soci\xE9t\xE9",
                                                "Modification de soci\xE9t\xE9",
                                                "Succession de biens mobiliers",
                                                "Succession de biens immobiliers",
                                                "Cr\xE9dit"
                                              ],
                                              multiple: "",
                                              clearable: "",
                                              variant: "outlined",
                                              density: "compact",
                                              "hide-details": ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      lg: "12",
                                      sm: "6"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_date_input, {
                                            modelValue: unref(searchStartDate),
                                            "onUpdate:modelValue": ($event) => isRef(searchStartDate) ? searchStartDate.value = $event : null,
                                            color: "primary",
                                            "prepend-icon": "",
                                            "prepend-inner-icon": "mdi-calendar",
                                            label: "Date de naissance",
                                            variant: "outlined",
                                            density: "compact",
                                            "hide-details": ""
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_date_input, {
                                              modelValue: unref(searchStartDate),
                                              "onUpdate:modelValue": ($event) => isRef(searchStartDate) ? searchStartDate.value = $event : null,
                                              color: "primary",
                                              "prepend-icon": "",
                                              "prepend-inner-icon": "mdi-calendar",
                                              label: "Date de naissance",
                                              variant: "outlined",
                                              density: "compact",
                                              "hide-details": ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      lg: "12",
                                      sm: "6"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VSelect, {
                                            modelValue: unref(searchStatus),
                                            "onUpdate:modelValue": ($event) => isRef(searchStatus) ? searchStatus.value = $event : null,
                                            color: "primary",
                                            label: "Statut",
                                            "prepend-inner-icon": "mdi-state-machine",
                                            items: ["En cours", "Suspendu", "Arr\xEAt\xE9"],
                                            chips: "",
                                            multiple: "",
                                            clearable: "",
                                            variant: "outlined",
                                            density: "compact",
                                            "hide-details": ""
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VSelect, {
                                              modelValue: unref(searchStatus),
                                              "onUpdate:modelValue": ($event) => isRef(searchStatus) ? searchStatus.value = $event : null,
                                              color: "primary",
                                              label: "Statut",
                                              "prepend-inner-icon": "mdi-state-machine",
                                              items: ["En cours", "Suspendu", "Arr\xEAt\xE9"],
                                              chips: "",
                                              multiple: "",
                                              clearable: "",
                                              variant: "outlined",
                                              density: "compact",
                                              "hide-details": ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, { cols: "12" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VBtn, {
                                            color: "primary",
                                            prependIcon: "mdi-restart",
                                            block: "",
                                            onClick: clearFilters,
                                            class: "text-none"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(` R\xE9initialiser `);
                                              } else {
                                                return [
                                                  createTextVNode(" R\xE9initialiser ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VBtn, {
                                              color: "primary",
                                              prependIcon: "mdi-restart",
                                              block: "",
                                              onClick: clearFilters,
                                              class: "text-none"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" R\xE9initialiser ")
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
                                      createVNode(VCol, {
                                        cols: "12",
                                        lg: "12",
                                        sm: "4"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            color: "primary",
                                            modelValue: unref(searchNum),
                                            "onUpdate:modelValue": ($event) => isRef(searchNum) ? searchNum.value = $event : null,
                                            label: "Recherche par N\xB0",
                                            "prepend-inner-icon": "mdi-numeric",
                                            variant: "outlined",
                                            density: "compact",
                                            "hide-details": ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        lg: "12",
                                        sm: "4"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            color: "primary",
                                            modelValue: unref(searchCustomer),
                                            "onUpdate:modelValue": ($event) => isRef(searchCustomer) ? searchCustomer.value = $event : null,
                                            label: "Recherche par client",
                                            "prepend-inner-icon": "mdi-account",
                                            variant: "outlined",
                                            density: "compact",
                                            "hide-details": ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        lg: "12",
                                        sm: "4"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VSelect, {
                                            modelValue: unref(searchProcedureType),
                                            "onUpdate:modelValue": ($event) => isRef(searchProcedureType) ? searchProcedureType.value = $event : null,
                                            color: "primary",
                                            label: "Type de proc\xE9dure",
                                            "prepend-inner-icon": "mdi-folder-open-outline",
                                            chips: "",
                                            items: [
                                              "Vente",
                                              "Constitution de soci\xE9t\xE9",
                                              "Modification de soci\xE9t\xE9",
                                              "Succession de biens mobiliers",
                                              "Succession de biens immobiliers",
                                              "Cr\xE9dit"
                                            ],
                                            multiple: "",
                                            clearable: "",
                                            variant: "outlined",
                                            density: "compact",
                                            "hide-details": ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        lg: "12",
                                        sm: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_date_input, {
                                            modelValue: unref(searchStartDate),
                                            "onUpdate:modelValue": ($event) => isRef(searchStartDate) ? searchStartDate.value = $event : null,
                                            color: "primary",
                                            "prepend-icon": "",
                                            "prepend-inner-icon": "mdi-calendar",
                                            label: "Date de naissance",
                                            variant: "outlined",
                                            density: "compact",
                                            "hide-details": ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        lg: "12",
                                        sm: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VSelect, {
                                            modelValue: unref(searchStatus),
                                            "onUpdate:modelValue": ($event) => isRef(searchStatus) ? searchStatus.value = $event : null,
                                            color: "primary",
                                            label: "Statut",
                                            "prepend-inner-icon": "mdi-state-machine",
                                            items: ["En cours", "Suspendu", "Arr\xEAt\xE9"],
                                            chips: "",
                                            multiple: "",
                                            clearable: "",
                                            variant: "outlined",
                                            density: "compact",
                                            "hide-details": ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VBtn, {
                                            color: "primary",
                                            prependIcon: "mdi-restart",
                                            block: "",
                                            onClick: clearFilters,
                                            class: "text-none"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" R\xE9initialiser ")
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
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, {
                                      cols: "12",
                                      lg: "12",
                                      sm: "4"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          color: "primary",
                                          modelValue: unref(searchNum),
                                          "onUpdate:modelValue": ($event) => isRef(searchNum) ? searchNum.value = $event : null,
                                          label: "Recherche par N\xB0",
                                          "prepend-inner-icon": "mdi-numeric",
                                          variant: "outlined",
                                          density: "compact",
                                          "hide-details": ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      lg: "12",
                                      sm: "4"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          color: "primary",
                                          modelValue: unref(searchCustomer),
                                          "onUpdate:modelValue": ($event) => isRef(searchCustomer) ? searchCustomer.value = $event : null,
                                          label: "Recherche par client",
                                          "prepend-inner-icon": "mdi-account",
                                          variant: "outlined",
                                          density: "compact",
                                          "hide-details": ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      lg: "12",
                                      sm: "4"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VSelect, {
                                          modelValue: unref(searchProcedureType),
                                          "onUpdate:modelValue": ($event) => isRef(searchProcedureType) ? searchProcedureType.value = $event : null,
                                          color: "primary",
                                          label: "Type de proc\xE9dure",
                                          "prepend-inner-icon": "mdi-folder-open-outline",
                                          chips: "",
                                          items: [
                                            "Vente",
                                            "Constitution de soci\xE9t\xE9",
                                            "Modification de soci\xE9t\xE9",
                                            "Succession de biens mobiliers",
                                            "Succession de biens immobiliers",
                                            "Cr\xE9dit"
                                          ],
                                          multiple: "",
                                          clearable: "",
                                          variant: "outlined",
                                          density: "compact",
                                          "hide-details": ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      lg: "12",
                                      sm: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_date_input, {
                                          modelValue: unref(searchStartDate),
                                          "onUpdate:modelValue": ($event) => isRef(searchStartDate) ? searchStartDate.value = $event : null,
                                          color: "primary",
                                          "prepend-icon": "",
                                          "prepend-inner-icon": "mdi-calendar",
                                          label: "Date de naissance",
                                          variant: "outlined",
                                          density: "compact",
                                          "hide-details": ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      lg: "12",
                                      sm: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VSelect, {
                                          modelValue: unref(searchStatus),
                                          "onUpdate:modelValue": ($event) => isRef(searchStatus) ? searchStatus.value = $event : null,
                                          color: "primary",
                                          label: "Statut",
                                          "prepend-inner-icon": "mdi-state-machine",
                                          items: ["En cours", "Suspendu", "Arr\xEAt\xE9"],
                                          chips: "",
                                          multiple: "",
                                          clearable: "",
                                          variant: "outlined",
                                          density: "compact",
                                          "hide-details": ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VBtn, {
                                          color: "primary",
                                          prependIcon: "mdi-restart",
                                          block: "",
                                          onClick: clearFilters,
                                          class: "text-none"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" R\xE9initialiser ")
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
                          createVNode("h4", { class: "mb-3" }, "Recherche avanc\xE9e"),
                          createVNode(VForm, {
                            modelValue: unref(form),
                            "onUpdate:modelValue": ($event) => isRef(form) ? form.value = $event : null
                          }, {
                            default: withCtx(() => [
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, {
                                    cols: "12",
                                    lg: "12",
                                    sm: "4"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        color: "primary",
                                        modelValue: unref(searchNum),
                                        "onUpdate:modelValue": ($event) => isRef(searchNum) ? searchNum.value = $event : null,
                                        label: "Recherche par N\xB0",
                                        "prepend-inner-icon": "mdi-numeric",
                                        variant: "outlined",
                                        density: "compact",
                                        "hide-details": ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    lg: "12",
                                    sm: "4"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        color: "primary",
                                        modelValue: unref(searchCustomer),
                                        "onUpdate:modelValue": ($event) => isRef(searchCustomer) ? searchCustomer.value = $event : null,
                                        label: "Recherche par client",
                                        "prepend-inner-icon": "mdi-account",
                                        variant: "outlined",
                                        density: "compact",
                                        "hide-details": ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    lg: "12",
                                    sm: "4"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VSelect, {
                                        modelValue: unref(searchProcedureType),
                                        "onUpdate:modelValue": ($event) => isRef(searchProcedureType) ? searchProcedureType.value = $event : null,
                                        color: "primary",
                                        label: "Type de proc\xE9dure",
                                        "prepend-inner-icon": "mdi-folder-open-outline",
                                        chips: "",
                                        items: [
                                          "Vente",
                                          "Constitution de soci\xE9t\xE9",
                                          "Modification de soci\xE9t\xE9",
                                          "Succession de biens mobiliers",
                                          "Succession de biens immobiliers",
                                          "Cr\xE9dit"
                                        ],
                                        multiple: "",
                                        clearable: "",
                                        variant: "outlined",
                                        density: "compact",
                                        "hide-details": ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    lg: "12",
                                    sm: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_date_input, {
                                        modelValue: unref(searchStartDate),
                                        "onUpdate:modelValue": ($event) => isRef(searchStartDate) ? searchStartDate.value = $event : null,
                                        color: "primary",
                                        "prepend-icon": "",
                                        "prepend-inner-icon": "mdi-calendar",
                                        label: "Date de naissance",
                                        variant: "outlined",
                                        density: "compact",
                                        "hide-details": ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    lg: "12",
                                    sm: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VSelect, {
                                        modelValue: unref(searchStatus),
                                        "onUpdate:modelValue": ($event) => isRef(searchStatus) ? searchStatus.value = $event : null,
                                        color: "primary",
                                        label: "Statut",
                                        "prepend-inner-icon": "mdi-state-machine",
                                        items: ["En cours", "Suspendu", "Arr\xEAt\xE9"],
                                        chips: "",
                                        multiple: "",
                                        clearable: "",
                                        variant: "outlined",
                                        density: "compact",
                                        "hide-details": ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(VBtn, {
                                        color: "primary",
                                        prependIcon: "mdi-restart",
                                        block: "",
                                        onClick: clearFilters,
                                        class: "text-none"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" R\xE9initialiser ")
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
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VSheet, {
                      elevation: 3,
                      rounded: "",
                      class: "pa-2"
                    }, {
                      default: withCtx(() => [
                        createVNode("h4", { class: "mb-3" }, "Recherche avanc\xE9e"),
                        createVNode(VForm, {
                          modelValue: unref(form),
                          "onUpdate:modelValue": ($event) => isRef(form) ? form.value = $event : null
                        }, {
                          default: withCtx(() => [
                            createVNode(VRow, null, {
                              default: withCtx(() => [
                                createVNode(VCol, {
                                  cols: "12",
                                  lg: "12",
                                  sm: "4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      color: "primary",
                                      modelValue: unref(searchNum),
                                      "onUpdate:modelValue": ($event) => isRef(searchNum) ? searchNum.value = $event : null,
                                      label: "Recherche par N\xB0",
                                      "prepend-inner-icon": "mdi-numeric",
                                      variant: "outlined",
                                      density: "compact",
                                      "hide-details": ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  lg: "12",
                                  sm: "4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      color: "primary",
                                      modelValue: unref(searchCustomer),
                                      "onUpdate:modelValue": ($event) => isRef(searchCustomer) ? searchCustomer.value = $event : null,
                                      label: "Recherche par client",
                                      "prepend-inner-icon": "mdi-account",
                                      variant: "outlined",
                                      density: "compact",
                                      "hide-details": ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  lg: "12",
                                  sm: "4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VSelect, {
                                      modelValue: unref(searchProcedureType),
                                      "onUpdate:modelValue": ($event) => isRef(searchProcedureType) ? searchProcedureType.value = $event : null,
                                      color: "primary",
                                      label: "Type de proc\xE9dure",
                                      "prepend-inner-icon": "mdi-folder-open-outline",
                                      chips: "",
                                      items: [
                                        "Vente",
                                        "Constitution de soci\xE9t\xE9",
                                        "Modification de soci\xE9t\xE9",
                                        "Succession de biens mobiliers",
                                        "Succession de biens immobiliers",
                                        "Cr\xE9dit"
                                      ],
                                      multiple: "",
                                      clearable: "",
                                      variant: "outlined",
                                      density: "compact",
                                      "hide-details": ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  lg: "12",
                                  sm: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_date_input, {
                                      modelValue: unref(searchStartDate),
                                      "onUpdate:modelValue": ($event) => isRef(searchStartDate) ? searchStartDate.value = $event : null,
                                      color: "primary",
                                      "prepend-icon": "",
                                      "prepend-inner-icon": "mdi-calendar",
                                      label: "Date de naissance",
                                      variant: "outlined",
                                      density: "compact",
                                      "hide-details": ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  lg: "12",
                                  sm: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VSelect, {
                                      modelValue: unref(searchStatus),
                                      "onUpdate:modelValue": ($event) => isRef(searchStatus) ? searchStatus.value = $event : null,
                                      color: "primary",
                                      label: "Statut",
                                      "prepend-inner-icon": "mdi-state-machine",
                                      items: ["En cours", "Suspendu", "Arr\xEAt\xE9"],
                                      chips: "",
                                      multiple: "",
                                      clearable: "",
                                      variant: "outlined",
                                      density: "compact",
                                      "hide-details": ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(VBtn, {
                                      color: "primary",
                                      prependIcon: "mdi-restart",
                                      block: "",
                                      onClick: clearFilters,
                                      class: "text-none"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" R\xE9initialiser ")
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
                        }, 8, ["modelValue", "onUpdate:modelValue"])
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
              lg: "9"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VSheet, {
                    elevation: 4,
                    rounded: "",
                    class: "pa-2"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h4 class="mb-3" data-v-309f46d4${_scopeId3}>Liste des proc\xE9dures</h4>`);
                        _push4(ssrRenderComponent(VDataTable, {
                          headers: unref(proceduresHeaders),
                          items: unref(filteredProcedures),
                          "items-per-page-text": "Proc\xE9dures par page :",
                          "page-text": "",
                          hover: "",
                          "item-value": "NUM",
                          class: "customTable1",
                          density: "compact",
                          "fixed-header": ""
                        }, {
                          "item.ACTIONS": withCtx(({ item }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VBtn, {
                                variant: "text",
                                onClick: () => {
                                },
                                color: "primary text-none",
                                to: redirectRegardingProcedure(item)
                              }, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Voir `);
                                  } else {
                                    return [
                                      createTextVNode(" Voir ")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VBtn, {
                                variant: "text",
                                color: "primary text-none",
                                onClick: ($event) => openModal(item)
                              }, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Modifier `);
                                  } else {
                                    return [
                                      createTextVNode(" Modifier ")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VBtn, {
                                  variant: "text",
                                  onClick: () => {
                                  },
                                  color: "primary text-none",
                                  to: redirectRegardingProcedure(item)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Voir ")
                                  ]),
                                  _: 2
                                }, 1032, ["onClick", "to"]),
                                createVNode(VBtn, {
                                  variant: "text",
                                  color: "primary text-none",
                                  onClick: ($event) => openModal(item)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Modifier ")
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"])
                              ];
                            }
                          }),
                          "item.STATUS": withCtx(({ item }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VChip, {
                                color: item.STATUS == "Termin\xE9e" ? "#63AD19" : item.STATUS == "En cours" ? "#FFC300" : "#AD1919",
                                text: item.STATUS,
                                size: "small",
                                variant: "flat",
                                label: ""
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VChip, {
                                  color: item.STATUS == "Termin\xE9e" ? "#63AD19" : item.STATUS == "En cours" ? "#FFC300" : "#AD1919",
                                  text: item.STATUS,
                                  size: "small",
                                  variant: "flat",
                                  label: ""
                                }, null, 8, ["color", "text"])
                              ];
                            }
                          }),
                          "no-data": withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="no-data-container" data-v-309f46d4${_scopeId4}>`);
                              _push5(ssrRenderComponent(VImg, {
                                src: _imports_0,
                                height: "80",
                                width: "80",
                                class: "mb-3",
                                alt: "Aucune donn\xE9e"
                              }, null, _parent5, _scopeId4));
                              _push5(`<p data-v-309f46d4${_scopeId4}>Aucune donn\xE9e</p></div>`);
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("h4", { class: "mb-3" }, "Liste des proc\xE9dures"),
                          createVNode(VDataTable, {
                            headers: unref(proceduresHeaders),
                            items: unref(filteredProcedures),
                            "items-per-page-text": "Proc\xE9dures par page :",
                            "page-text": "",
                            hover: "",
                            "item-value": "NUM",
                            class: "customTable1",
                            density: "compact",
                            "fixed-header": ""
                          }, {
                            "item.ACTIONS": withCtx(({ item }) => [
                              createVNode(VBtn, {
                                variant: "text",
                                onClick: () => {
                                },
                                color: "primary text-none",
                                to: redirectRegardingProcedure(item)
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Voir ")
                                ]),
                                _: 2
                              }, 1032, ["onClick", "to"]),
                              createVNode(VBtn, {
                                variant: "text",
                                color: "primary text-none",
                                onClick: ($event) => openModal(item)
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Modifier ")
                                ]),
                                _: 2
                              }, 1032, ["onClick"])
                            ]),
                            "item.STATUS": withCtx(({ item }) => [
                              createVNode(VChip, {
                                color: item.STATUS == "Termin\xE9e" ? "#63AD19" : item.STATUS == "En cours" ? "#FFC300" : "#AD1919",
                                text: item.STATUS,
                                size: "small",
                                variant: "flat",
                                label: ""
                              }, null, 8, ["color", "text"])
                            ]),
                            "no-data": withCtx(() => [
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
                            ]),
                            _: 1
                          }, 8, ["headers", "items"])
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
                      class: "pa-2"
                    }, {
                      default: withCtx(() => [
                        createVNode("h4", { class: "mb-3" }, "Liste des proc\xE9dures"),
                        createVNode(VDataTable, {
                          headers: unref(proceduresHeaders),
                          items: unref(filteredProcedures),
                          "items-per-page-text": "Proc\xE9dures par page :",
                          "page-text": "",
                          hover: "",
                          "item-value": "NUM",
                          class: "customTable1",
                          density: "compact",
                          "fixed-header": ""
                        }, {
                          "item.ACTIONS": withCtx(({ item }) => [
                            createVNode(VBtn, {
                              variant: "text",
                              onClick: () => {
                              },
                              color: "primary text-none",
                              to: redirectRegardingProcedure(item)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Voir ")
                              ]),
                              _: 2
                            }, 1032, ["onClick", "to"]),
                            createVNode(VBtn, {
                              variant: "text",
                              color: "primary text-none",
                              onClick: ($event) => openModal(item)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Modifier ")
                              ]),
                              _: 2
                            }, 1032, ["onClick"])
                          ]),
                          "item.STATUS": withCtx(({ item }) => [
                            createVNode(VChip, {
                              color: item.STATUS == "Termin\xE9e" ? "#63AD19" : item.STATUS == "En cours" ? "#FFC300" : "#AD1919",
                              text: item.STATUS,
                              size: "small",
                              variant: "flat",
                              label: ""
                            }, null, 8, ["color", "text"])
                          ]),
                          "no-data": withCtx(() => [
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
                          ]),
                          _: 1
                        }, 8, ["headers", "items"])
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
                lg: "3"
              }, {
                default: withCtx(() => [
                  createVNode(VSheet, {
                    elevation: 3,
                    rounded: "",
                    class: "pa-2"
                  }, {
                    default: withCtx(() => [
                      createVNode("h4", { class: "mb-3" }, "Recherche avanc\xE9e"),
                      createVNode(VForm, {
                        modelValue: unref(form),
                        "onUpdate:modelValue": ($event) => isRef(form) ? form.value = $event : null
                      }, {
                        default: withCtx(() => [
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                lg: "12",
                                sm: "4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    color: "primary",
                                    modelValue: unref(searchNum),
                                    "onUpdate:modelValue": ($event) => isRef(searchNum) ? searchNum.value = $event : null,
                                    label: "Recherche par N\xB0",
                                    "prepend-inner-icon": "mdi-numeric",
                                    variant: "outlined",
                                    density: "compact",
                                    "hide-details": ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                lg: "12",
                                sm: "4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    color: "primary",
                                    modelValue: unref(searchCustomer),
                                    "onUpdate:modelValue": ($event) => isRef(searchCustomer) ? searchCustomer.value = $event : null,
                                    label: "Recherche par client",
                                    "prepend-inner-icon": "mdi-account",
                                    variant: "outlined",
                                    density: "compact",
                                    "hide-details": ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                lg: "12",
                                sm: "4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VSelect, {
                                    modelValue: unref(searchProcedureType),
                                    "onUpdate:modelValue": ($event) => isRef(searchProcedureType) ? searchProcedureType.value = $event : null,
                                    color: "primary",
                                    label: "Type de proc\xE9dure",
                                    "prepend-inner-icon": "mdi-folder-open-outline",
                                    chips: "",
                                    items: [
                                      "Vente",
                                      "Constitution de soci\xE9t\xE9",
                                      "Modification de soci\xE9t\xE9",
                                      "Succession de biens mobiliers",
                                      "Succession de biens immobiliers",
                                      "Cr\xE9dit"
                                    ],
                                    multiple: "",
                                    clearable: "",
                                    variant: "outlined",
                                    density: "compact",
                                    "hide-details": ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                lg: "12",
                                sm: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_date_input, {
                                    modelValue: unref(searchStartDate),
                                    "onUpdate:modelValue": ($event) => isRef(searchStartDate) ? searchStartDate.value = $event : null,
                                    color: "primary",
                                    "prepend-icon": "",
                                    "prepend-inner-icon": "mdi-calendar",
                                    label: "Date de naissance",
                                    variant: "outlined",
                                    density: "compact",
                                    "hide-details": ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                lg: "12",
                                sm: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VSelect, {
                                    modelValue: unref(searchStatus),
                                    "onUpdate:modelValue": ($event) => isRef(searchStatus) ? searchStatus.value = $event : null,
                                    color: "primary",
                                    label: "Statut",
                                    "prepend-inner-icon": "mdi-state-machine",
                                    items: ["En cours", "Suspendu", "Arr\xEAt\xE9"],
                                    chips: "",
                                    multiple: "",
                                    clearable: "",
                                    variant: "outlined",
                                    density: "compact",
                                    "hide-details": ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(VBtn, {
                                    color: "primary",
                                    prependIcon: "mdi-restart",
                                    block: "",
                                    onClick: clearFilters,
                                    class: "text-none"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" R\xE9initialiser ")
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
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VCol, {
                cols: "12",
                lg: "9"
              }, {
                default: withCtx(() => [
                  createVNode(VSheet, {
                    elevation: 4,
                    rounded: "",
                    class: "pa-2"
                  }, {
                    default: withCtx(() => [
                      createVNode("h4", { class: "mb-3" }, "Liste des proc\xE9dures"),
                      createVNode(VDataTable, {
                        headers: unref(proceduresHeaders),
                        items: unref(filteredProcedures),
                        "items-per-page-text": "Proc\xE9dures par page :",
                        "page-text": "",
                        hover: "",
                        "item-value": "NUM",
                        class: "customTable1",
                        density: "compact",
                        "fixed-header": ""
                      }, {
                        "item.ACTIONS": withCtx(({ item }) => [
                          createVNode(VBtn, {
                            variant: "text",
                            onClick: () => {
                            },
                            color: "primary text-none",
                            to: redirectRegardingProcedure(item)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Voir ")
                            ]),
                            _: 2
                          }, 1032, ["onClick", "to"]),
                          createVNode(VBtn, {
                            variant: "text",
                            color: "primary text-none",
                            onClick: ($event) => openModal(item)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Modifier ")
                            ]),
                            _: 2
                          }, 1032, ["onClick"])
                        ]),
                        "item.STATUS": withCtx(({ item }) => [
                          createVNode(VChip, {
                            color: item.STATUS == "Termin\xE9e" ? "#63AD19" : item.STATUS == "En cours" ? "#FFC300" : "#AD1919",
                            text: item.STATUS,
                            size: "small",
                            variant: "flat",
                            label: ""
                          }, null, 8, ["color", "text"])
                        ]),
                        "no-data": withCtx(() => [
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
                        ]),
                        _: 1
                      }, 8, ["headers", "items"])
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
      _push(`</div>`);
      _push(ssrRenderComponent(_component_modal_edit_procedureStep, {
        show: unref(dialog),
        onCloseModal: closeModal,
        onSubmit: updateProcedure,
        data: unref(selectedProcedure)
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/proceduresManagement.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const proceduresManagement = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-309f46d4"]]);

export { proceduresManagement as default };
//# sourceMappingURL=proceduresManagement-C7UjpLnc.mjs.map
