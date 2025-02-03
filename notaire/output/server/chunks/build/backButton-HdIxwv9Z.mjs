import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { u as useRouter$1, V as VIcon } from './server.mjs';

const _sfc_main = {
  __name: "backButton",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      required: true
    },
    goBackTo: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const router = useRouter$1();
    const goBack = () => {
      router.push(props.goBackTo);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex align-center ga-4" }, _attrs))}>`);
      _push(ssrRenderComponent(VIcon, {
        icon: "mdi-arrow-left",
        size: "24",
        onClick: goBack
      }, null, _parent));
      _push(`<h2>${ssrInterpolate(__props.title)}</h2></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/backButton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as _ };
//# sourceMappingURL=backButton-HdIxwv9Z.mjs.map
