import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderStyle, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main$5 = {
  __name: "stepNumber",
  __ssrInlineRender: true,
  props: {
    stepNumber: {
      type: Number,
      required: true
    },
    stepBackgroundColor: {
      type: String,
      required: true
    },
    stepTextColor: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "stepNumber",
        style: { background: __props.stepBackgroundColor, color: __props.stepTextColor }
      }, _attrs))} data-v-0ecac196>${ssrInterpolate(__props.stepNumber)}</div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/stepNumber.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : undefined;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-0ecac196"]]);
const _sfc_main$4 = {
  __name: "stepIcon",
  __ssrInlineRender: true,
  props: {
    imagePath: {
      type: String,
      required: true
    },
    stepBackgroundColor: {
      type: String,
      required: true
    },
    parentDoor: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "stepIcon",
        style: { background: __props.stepBackgroundColor, borderColor: "white" }
      }, _attrs))} data-v-9c15eadc>`);
      if (__props.parentDoor == "not started") {
        _push(`<img${ssrRenderAttr("src", __props.imagePath)} style="${ssrRenderStyle({ "opacity": "0.5" })}" data-v-9c15eadc>`);
      } else {
        _push(`<img${ssrRenderAttr("src", __props.imagePath)} data-v-9c15eadc>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/stepIcon.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : undefined;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-9c15eadc"]]);
const _sfc_main$3 = {
  __name: "subStep",
  __ssrInlineRender: true,
  props: {
    text: {
      type: String,
      required: true
    },
    status: {
      type: String,
      required: true
    },
    inputName: {
      type: String,
      required: true
    },
    parentDoor: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const styleObject = {
      "accentColor": "green"
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "subStep" }, _attrs))} data-v-3341208e>`);
      if (__props.parentDoor == "not started" || __props.status == "none") {
        _push(`<input disabled="true"${ssrRenderAttr("name", __props.inputName)} type="checkbox" style="${ssrRenderStyle(styleObject)}" data-v-3341208e>`);
      } else if (__props.status == "done") {
        _push(`<input${ssrRenderAttr("name", __props.inputName)} type="checkbox" style="${ssrRenderStyle(styleObject)}" checked data-v-3341208e>`);
      } else {
        _push(`<input${ssrRenderAttr("name", __props.inputName)} type="checkbox" style="${ssrRenderStyle(styleObject)}" data-v-3341208e>`);
      }
      _push(`<p data-v-3341208e>${ssrInterpolate(__props.text)}</p></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/subStep.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : undefined;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-3341208e"]]);
const _sfc_main$2 = {
  __name: "stepProgressIcon",
  __ssrInlineRender: true,
  props: {
    stepBackgroundColor: {
      type: String,
      required: true
    },
    parentDoor: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    ({
      "background": props.stepBackgroundColor
    });
    function getImagePathFromStatus(val) {
      if (val == "done") {
        return "check.png";
      } else if (val == "current") {
        return "recycle.png";
      } else if (val == "canceled") {
        return "close.png";
      } else if (val == "suspended") {
        return "dash.png";
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.parentDoor == "not started") {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: "stepProgressionIcon",
          style: { background: "rgb(225, 225, 225)" }
        }, _attrs))} data-v-add26a9f></div>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: "stepProgressionIcon",
          style: { background: __props.stepBackgroundColor }
        }, _attrs))} data-v-add26a9f><img${ssrRenderAttr("src", getImagePathFromStatus(__props.parentDoor))} data-v-add26a9f></div>`);
      }
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/stepProgressIcon.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : undefined;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-add26a9f"]]);
const _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB2AAAAdgB+lymcgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAMcSURBVHic7ZvNaxQxGIef1taq21oVxI9DKSKiF1GoeFg/UMRj9aZd8CKLpz34N+jFm6AgiOBB7F8gIh70IlLFg4haP/CTaq2WoqBVq6z1kJ3dcXaSdDLbvnYnD4Ru5s1v8s7bmSSTZMDjyTQtmuPdwIbK3yjPgJFQfjvQ1WC/ZsIDYDyU3w20R8r8Bj4Bz4HyTE7aBVwApoBpTSpFNPcNZWcz9Uf8mDCUnQBOAyujF9wa+t0OXAOKwEJznOYdK4DjwEPUHVslHIASkJ9DpyRYBVwHeoMD4QAU59obIbqBU0EmCEAO2CTijgwHgTaoBWA5+h4hyuJIfkmDnEpK2I9WYFECbQfqcagGoFVfto5DqDsGVNezPoG2kRyh1u0NkPwfsSCc6SFZF/QBuAX8SqhrdHoNDAF/HLQ9UHkOHFhdSdL0EmrRXUhy6zclPgDSDkgTtAFjQJ+kIwKMSTvg8fwHBMPftaiBTZY4BtwIGsE2YJ2gMxLkwHeDPgA+ANIOSJP5ALi8Dn8FDgNPY2xbgEH0szMjQAEYjbHtB86hn5kar9T7JsaWBy7i/nqfaEJk0HKuqwbtSYt22KA9a9EOJbiG6rqCyyPww2L/brD9TKFNU6+WzLcBPgDSDkjjEgDbSnDdAmSITovWNLVtq9dpfcKl2+hHzckPR463AHuBXQbtUeAO8C7GthPYaNAOADeBVzG2PmCbQWsl6bpAMyTnbrCp8AGQdkAaHwBpB6TxAZB2QBofAAfNZ2AHautZNO0DJg3al8BmjbaA2uigYxQ14ovTHkBt1nAmyUjwsuVcVwzaExbtI4P2jEV7O8E1pBoJ2iY1TPapFNo09WrxbYC0A9L4ADhollnsawy2uO33YUyTHrZ6nbbsu06IlIhfF9iDecN1EXgMvI+x5VHfKOgoAPdQewOjbCXlFh8/IZJVggCYRmDNShlqAfgi6IgUb6EWgG+oj6GywhNUY/zPlvFO1MtMs1NGTbHX9SYdwF3kW+fZTJOo7x20LAXOo1ZipZ1t9IVfIubjDt1mhFylsGmZaz4wDXwEXuD4tujxNDl/AduS6cIVhvJbAAAAAElFTkSuQmCC";
const _sfc_main$1 = {
  __name: "stepDate",
  __ssrInlineRender: true,
  props: {
    date: {
      type: String,
      required: true
    },
    borderColor: {
      type: String,
      required: true
    },
    parentDoor: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.parentDoor == "not started") {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: "stepDate",
          style: { borderColor: __props.borderColor, opacity: 0.5 }
        }, _attrs))} data-v-9b8ef7d0><img${ssrRenderAttr("src", _imports_0)} data-v-9b8ef7d0><span data-v-9b8ef7d0>16/01/2025</span></div>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: "stepDate",
          style: { borderColor: __props.borderColor }
        }, _attrs))} data-v-9b8ef7d0><img${ssrRenderAttr("src", _imports_0)} data-v-9b8ef7d0><span data-v-9b8ef7d0>16/01/2025</span></div>`);
      }
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/stepDate.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-9b8ef7d0"]]);
const _sfc_main = {
  __name: "stepBox",
  __ssrInlineRender: true,
  props: {
    number: {
      type: Number,
      required: true
    },
    status: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    listOfSubStep: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    first: {
      type: Boolean,
      required: false
    }
  },
  setup(__props) {
    function statusToColor(val) {
      if (val == "done") {
        return "green";
      } else if (val == "not started") {
        return "#EAE8E6";
      } else if (val == "current") {
        return "orange";
      } else if (val == "canceled") {
        return "red";
      } else if (val == "suspended") {
        return "purple";
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_step_number = __nuxt_component_0$1;
      const _component_step_icon = __nuxt_component_1;
      const _component_sub_step = __nuxt_component_2;
      const _component_step_progress_icon = __nuxt_component_3;
      const _component_step_date = __nuxt_component_4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "stepBox" }, _attrs))} data-v-c14fe098>`);
      _push(ssrRenderComponent(_component_step_number, {
        stepNumber: __props.number,
        stepBackgroundColor: statusToColor(__props.status),
        stepTextColor: __props.status != "not started" ? "white" : "black"
      }, null, _parent));
      _push(`<div class="stepText" style="${ssrRenderStyle({ borderColor: statusToColor(__props.status) })}" data-v-c14fe098>`);
      _push(ssrRenderComponent(_component_step_icon, {
        stepBackgroundColor: statusToColor(__props.status),
        "image-path": __props.icon,
        parentDoor: __props.status
      }, null, _parent));
      _push(`<h2 data-v-c14fe098>${ssrInterpolate(__props.title)}</h2><div class="subStepBox" data-v-c14fe098><!--[-->`);
      ssrRenderList(__props.listOfSubStep, (val) => {
        _push(ssrRenderComponent(_component_sub_step, {
          text: val.text,
          inputName: val.inputName,
          status: val.status,
          parentDoor: __props.status
        }, null, _parent));
      });
      _push(`<!--]--></div><div class="triangle" style="${ssrRenderStyle({ borderTopColor: statusToColor(__props.status) })}" data-v-c14fe098></div></div><div class="line" data-v-c14fe098></div>`);
      if (!__props.first) {
        _push(`<div class="arrow" data-v-c14fe098></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_step_progress_icon, {
        "parent-door": __props.status,
        stepBackgroundColor: statusToColor(__props.status)
      }, null, _parent));
      _push(ssrRenderComponent(_component_step_date, {
        date: __props.date,
        borderColor: statusToColor(__props.status),
        parentDoor: __props.status
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/stepBox.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c14fe098"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=stepBox-BbU1v1-p.mjs.map
