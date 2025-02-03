import { useSSRContext, ref, shallowRef, computed, watch, nextTick, createVNode, mergeProps, Fragment, createTextVNode, unref, isRef, withCtx, toDisplayString, openBlock, createBlock } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { V as VFileInput } from './VFileInput-ChcsM8I7.mjs';
import { p as propsFactory, aq as omit, aG as makeVTextFieldProps, Q as makeTransitionProps$1, g as genericComponent, a5 as useLocale, a4 as useProxiedModel, ao as useTextColor, af as wrapInArray, aI as useForm, j as useRender, aK as VTextField, aL as VMenu, V as VIcon, aM as ensureValidVNode, o as VDefaultsProvider, aW as noop, aJ as forwardRefs, a1 as VBtn, aN as checkPrintable, aX as isComposingIgnoreKey } from './server.mjs';
import { V as VDialog } from './VDialog-BU74V2eV.mjs';
import { V as VCard, a as VCardTitle, b as VCardText } from './VCard-Busk3Fj7.mjs';
import { e as makeFilterProps, f as makeSelectProps, g as useItems, t as transformItem$1, u as useFilter, h as useScrolling, i as VList, j as VListItem, k as VVirtualScroll, d as VCheckboxBtn, c as VChip } from './filter-BGBihEE2.mjs';
import { a as VAvatar } from './VAvatar-gxg0IsvB.mjs';

const _sfc_main = {
  __name: "requiredDocument",
  __ssrInlineRender: true,
  props: {
    label: {
      type: String,
      required: true
    }
  },
  emits: ["update:file"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const open = ref(false);
    const file = ref(null);
    const previewContent = ref(null);
    const fileType = ref(null);
    const toggleModal = () => {
      open.value = !open.value;
    };
    const onFileChange = async () => {
      if (previewContent.value && fileType.value === "pdf") {
        URL.revokeObjectURL(previewContent.value);
      }
      previewContent.value = null;
      fileType.value = null;
      if (file.value) {
        const selectFile = file.value;
        const fileExtension = selectFile.name.split(".").pop().toLowerCase();
        try {
          if (["jpg", "jpeg", "png"].includes(fileExtension)) {
            fileType.value = "image";
            const reader = new FileReader();
            reader.onload = (e) => {
              previewContent.value = e.target.result;
            };
            reader.readAsDataURL(selectFile);
          } else if (fileExtension === "pdf") {
            fileType.value = "pdf";
            previewContent.value = URL.createObjectURL(file);
          } else if (fileExtension === "txt") {
            fileType.value = "text";
            const reader = new FileReader();
            reader.onload = (e) => {
              previewContent.value = e.target.result;
            };
            reader.readAsText(selectFile);
          } else if (fileExtension === "docx") {
            fileType.value = "docx";
            const reader = new FileReader();
            reader.onload = async (e) => {
              const arrayBuffer = e.target.result;
              const result = await mammoth.convertToHtml({ arrayBuffer });
              previewContent.value = result.value;
            };
            reader.readAsArrayBuffer(selectFile);
          } else if (fileExtension === "doc") {
            fileType.value = "doc";
            previewContent.value = URL.createObjectURL(selectFile);
          } else {
            fileType.value = null;
            previewContent.value = "Type de fichier non support\xE9.";
          }
          emit("update:file", selectFile);
        } catch (error) {
          console.error("Erreur lors de la pr\xE9visualisation du fichier :", error);
          previewContent.value = "Erreur lors du traitement du fichier.";
        }
        emit("update:file", file.value);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex align-center ga-8" }, _attrs))}>`);
      _push(ssrRenderComponent(VFileInput, {
        label: __props.label,
        variant: "outlined",
        "hide-details": "",
        modelValue: unref(file),
        "onUpdate:modelValue": ($event) => isRef(file) ? file.value = $event : null,
        accept: ".jpg,.jpeg,.png,.pdf,.doc,.docx,.txt",
        onChange: onFileChange,
        density: "compact"
      }, null, _parent));
      _push(ssrRenderComponent(VBtn, {
        color: "primary",
        onClick: toggleModal,
        class: "text-none",
        disabled: !unref(file)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Aper\xE7u `);
          } else {
            return [
              createTextVNode(" Aper\xE7u ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VDialog, {
        modelValue: unref(open),
        "onUpdate:modelValue": ($event) => isRef(open) ? open.value = $event : null,
        width: "50%",
        class: "ma-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(__props.label)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(__props.label), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      var _a;
                      if (_push4) {
                        if (unref(fileType) === "image") {
                          _push4(`<img${ssrRenderAttr("src", unref(previewContent))} alt="Pr\xE9visualisation" style="${ssrRenderStyle({ "max-width": "100%" })}"${_scopeId3}>`);
                        } else if (unref(fileType) === "pdf") {
                          _push4(`<iframe${ssrRenderAttr("src", unref(previewContent))} style="${ssrRenderStyle({ "width": "100%", "height": "400px" })}" frameborder="0"${_scopeId3}></iframe>`);
                        } else if (unref(fileType) === "text") {
                          _push4(`<pre style="${ssrRenderStyle({ "white-space": "pre-wrap", "max-height": "400px", "overflow": "auto" })}"${_scopeId3}>${ssrInterpolate(unref(previewContent))}</pre>`);
                        } else if (unref(fileType) === "docx") {
                          _push4(`<div${_scopeId3}>${(_a = unref(previewContent)) != null ? _a : ""}</div>`);
                        } else if (unref(fileType) === "doc") {
                          _push4(`<!--[--><p${_scopeId3}> Impossible de pr\xE9visualiser le fichier Word (.doc). Vous pouvez le t\xE9l\xE9charger ci-dessous : </p><a${ssrRenderAttr("href", unref(previewContent))} download class="v-btn v-btn--outlined primary text-none"${_scopeId3}> T\xE9l\xE9charger le fichier </a><!--]-->`);
                        } else {
                          _push4(`<p${_scopeId3}>Aucun aper\xE7u disponible pour ce type de fichier.</p>`);
                        }
                      } else {
                        return [
                          unref(fileType) === "image" ? (openBlock(), createBlock("img", {
                            key: 0,
                            src: unref(previewContent),
                            alt: "Pr\xE9visualisation",
                            style: { "max-width": "100%" }
                          }, null, 8, ["src"])) : unref(fileType) === "pdf" ? (openBlock(), createBlock("iframe", {
                            key: 1,
                            src: unref(previewContent),
                            style: { "width": "100%", "height": "400px" },
                            frameborder: "0"
                          }, null, 8, ["src"])) : unref(fileType) === "text" ? (openBlock(), createBlock("pre", {
                            key: 2,
                            style: { "white-space": "pre-wrap", "max-height": "400px", "overflow": "auto" }
                          }, toDisplayString(unref(previewContent)), 1)) : unref(fileType) === "docx" ? (openBlock(), createBlock("div", {
                            key: 3,
                            innerHTML: unref(previewContent)
                          }, null, 8, ["innerHTML"])) : unref(fileType) === "doc" ? (openBlock(), createBlock(Fragment, { key: 4 }, [
                            createVNode("p", null, " Impossible de pr\xE9visualiser le fichier Word (.doc). Vous pouvez le t\xE9l\xE9charger ci-dessous : "),
                            createVNode("a", {
                              href: unref(previewContent),
                              download: "",
                              class: "v-btn v-btn--outlined primary text-none"
                            }, " T\xE9l\xE9charger le fichier ", 8, ["href"])
                          ], 64)) : (openBlock(), createBlock("p", { key: 5 }, "Aucun aper\xE7u disponible pour ce type de fichier."))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(__props.label), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(VCardText, null, {
                      default: withCtx(() => [
                        unref(fileType) === "image" ? (openBlock(), createBlock("img", {
                          key: 0,
                          src: unref(previewContent),
                          alt: "Pr\xE9visualisation",
                          style: { "max-width": "100%" }
                        }, null, 8, ["src"])) : unref(fileType) === "pdf" ? (openBlock(), createBlock("iframe", {
                          key: 1,
                          src: unref(previewContent),
                          style: { "width": "100%", "height": "400px" },
                          frameborder: "0"
                        }, null, 8, ["src"])) : unref(fileType) === "text" ? (openBlock(), createBlock("pre", {
                          key: 2,
                          style: { "white-space": "pre-wrap", "max-height": "400px", "overflow": "auto" }
                        }, toDisplayString(unref(previewContent)), 1)) : unref(fileType) === "docx" ? (openBlock(), createBlock("div", {
                          key: 3,
                          innerHTML: unref(previewContent)
                        }, null, 8, ["innerHTML"])) : unref(fileType) === "doc" ? (openBlock(), createBlock(Fragment, { key: 4 }, [
                          createVNode("p", null, " Impossible de pr\xE9visualiser le fichier Word (.doc). Vous pouvez le t\xE9l\xE9charger ci-dessous : "),
                          createVNode("a", {
                            href: unref(previewContent),
                            download: "",
                            class: "v-btn v-btn--outlined primary text-none"
                          }, " T\xE9l\xE9charger le fichier ", 8, ["href"])
                        ], 64)) : (openBlock(), createBlock("p", { key: 5 }, "Aucun aper\xE7u disponible pour ce type de fichier."))
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
                  createVNode(VCardTitle, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(__props.label), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(VCardText, null, {
                    default: withCtx(() => [
                      unref(fileType) === "image" ? (openBlock(), createBlock("img", {
                        key: 0,
                        src: unref(previewContent),
                        alt: "Pr\xE9visualisation",
                        style: { "max-width": "100%" }
                      }, null, 8, ["src"])) : unref(fileType) === "pdf" ? (openBlock(), createBlock("iframe", {
                        key: 1,
                        src: unref(previewContent),
                        style: { "width": "100%", "height": "400px" },
                        frameborder: "0"
                      }, null, 8, ["src"])) : unref(fileType) === "text" ? (openBlock(), createBlock("pre", {
                        key: 2,
                        style: { "white-space": "pre-wrap", "max-height": "400px", "overflow": "auto" }
                      }, toDisplayString(unref(previewContent)), 1)) : unref(fileType) === "docx" ? (openBlock(), createBlock("div", {
                        key: 3,
                        innerHTML: unref(previewContent)
                      }, null, 8, ["innerHTML"])) : unref(fileType) === "doc" ? (openBlock(), createBlock(Fragment, { key: 4 }, [
                        createVNode("p", null, " Impossible de pr\xE9visualiser le fichier Word (.doc). Vous pouvez le t\xE9l\xE9charger ci-dessous : "),
                        createVNode("a", {
                          href: unref(previewContent),
                          download: "",
                          class: "v-btn v-btn--outlined primary text-none"
                        }, " T\xE9l\xE9charger le fichier ", 8, ["href"])
                      ], 64)) : (openBlock(), createBlock("p", { key: 5 }, "Aucun aper\xE7u disponible pour ce type de fichier."))
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
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/requiredDocument.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
function highlightResult(text, matches, length) {
  if (matches == null) return text;
  if (Array.isArray(matches)) throw new Error("Multiple matches is not implemented");
  return typeof matches === "number" && ~matches ? createVNode(Fragment, null, [createVNode("span", {
    "class": "v-combobox__unmask"
  }, [text.substr(0, matches)]), createVNode("span", {
    "class": "v-combobox__mask"
  }, [text.substr(matches, length)]), createVNode("span", {
    "class": "v-combobox__unmask"
  }, [text.substr(matches + length)])]) : text;
}
const makeVComboboxProps = propsFactory({
  autoSelectFirst: {
    type: [Boolean, String]
  },
  clearOnSelect: {
    type: Boolean,
    default: true
  },
  delimiters: Array,
  ...makeFilterProps({
    filterKeys: ["title"]
  }),
  ...makeSelectProps({
    hideNoData: true,
    returnObject: true
  }),
  ...omit(makeVTextFieldProps({
    modelValue: null,
    role: "combobox"
  }), ["validationValue", "dirty", "appendInnerIcon"]),
  ...makeTransitionProps$1({
    transition: false
  })
}, "VCombobox");
const VCombobox = genericComponent()({
  name: "VCombobox",
  props: makeVComboboxProps(),
  emits: {
    "update:focused": (focused) => true,
    "update:modelValue": (value) => true,
    "update:search": (value) => true,
    "update:menu": (value) => true
  },
  setup(props, _ref) {
    var _a2;
    var _a;
    let {
      emit,
      slots
    } = _ref;
    const {
      t
    } = useLocale();
    const vTextFieldRef = ref();
    const isFocused = shallowRef(false);
    const isPristine = shallowRef(true);
    const listHasFocus = shallowRef(false);
    const vMenuRef = ref();
    const vVirtualScrollRef = ref();
    const _menu = useProxiedModel(props, "menu");
    const menu = computed({
      get: () => _menu.value,
      set: (v) => {
        var _a22;
        if (_menu.value && !v && ((_a22 = vMenuRef.value) == null ? undefined : _a22.\u03A8openChildren.size)) return;
        _menu.value = v;
      }
    });
    const selectionIndex = shallowRef(-1);
    let cleared = false;
    const color = computed(() => {
      var _a22;
      return (_a22 = vTextFieldRef.value) == null ? undefined : _a22.color;
    });
    const label = computed(() => menu.value ? props.closeText : props.openText);
    const {
      items,
      transformIn,
      transformOut
    } = useItems(props);
    const {
      textColorClasses,
      textColorStyles
    } = useTextColor(color);
    const model = useProxiedModel(props, "modelValue", [], (v) => transformIn(wrapInArray(v)), (v) => {
      var _a3;
      const transformed = transformOut(v);
      return props.multiple ? transformed : (_a3 = transformed[0]) != null ? _a3 : null;
    });
    const form = useForm(props);
    const hasChips = computed(() => !!(props.chips || slots.chip));
    const hasSelectionSlot = computed(() => hasChips.value || !!slots.selection);
    const _search = shallowRef(!props.multiple && !hasSelectionSlot.value ? (_a2 = (_a = model.value[0]) == null ? undefined : _a.title) != null ? _a2 : "" : "");
    const search = computed({
      get: () => {
        return _search.value;
      },
      set: (val) => {
        var _a22;
        _search.value = val != null ? val : "";
        if (!props.multiple && !hasSelectionSlot.value) {
          model.value = [transformItem$1(props, val)];
        }
        if (val && props.multiple && ((_a22 = props.delimiters) == null ? undefined : _a22.length)) {
          const values = val.split(new RegExp(`(?:${props.delimiters.join("|")})+`));
          if (values.length > 1) {
            values.forEach((v) => {
              v = v.trim();
              if (v) select(transformItem$1(props, v));
            });
            _search.value = "";
          }
        }
        if (!val) selectionIndex.value = -1;
        isPristine.value = !val;
      }
    });
    const counterValue = computed(() => {
      return typeof props.counterValue === "function" ? props.counterValue(model.value) : typeof props.counterValue === "number" ? props.counterValue : props.multiple ? model.value.length : search.value.length;
    });
    watch(_search, (value) => {
      if (cleared) {
        nextTick(() => cleared = false);
      } else if (isFocused.value && !menu.value) {
        menu.value = true;
      }
      emit("update:search", value);
    });
    watch(model, (value) => {
      var _a3;
      var _a22;
      if (!props.multiple && !hasSelectionSlot.value) {
        _search.value = (_a3 = (_a22 = value[0]) == null ? undefined : _a22.title) != null ? _a3 : "";
      }
    });
    const {
      filteredItems,
      getMatches
    } = useFilter(props, items, () => isPristine.value ? "" : search.value);
    const displayItems = computed(() => {
      if (props.hideSelected) {
        return filteredItems.value.filter((filteredItem) => !model.value.some((s) => s.value === filteredItem.value));
      }
      return filteredItems.value;
    });
    const selectedValues = computed(() => model.value.map((selection) => selection.value));
    const highlightFirst = computed(() => {
      var _a22;
      const selectFirst = props.autoSelectFirst === true || props.autoSelectFirst === "exact" && search.value === ((_a22 = displayItems.value[0]) == null ? undefined : _a22.title);
      return selectFirst && displayItems.value.length > 0 && !isPristine.value && !listHasFocus.value;
    });
    const menuDisabled = computed(() => props.hideNoData && !displayItems.value.length || form.isReadonly.value || form.isDisabled.value);
    const listRef = ref();
    const listEvents = useScrolling(listRef, vTextFieldRef);
    function onClear(e) {
      cleared = true;
      if (props.openOnClear) {
        menu.value = true;
      }
    }
    function onMousedownControl() {
      if (menuDisabled.value) return;
      menu.value = true;
    }
    function onMousedownMenuIcon(e) {
      if (menuDisabled.value) return;
      if (isFocused.value) {
        e.preventDefault();
        e.stopPropagation();
      }
      menu.value = !menu.value;
    }
    function onListKeydown(e) {
      var _a22;
      if (e.key !== " " && checkPrintable(e)) {
        (_a22 = vTextFieldRef.value) == null ? undefined : _a22.focus();
      }
    }
    function onKeydown(e) {
      var _a22;
      if (isComposingIgnoreKey(e) || form.isReadonly.value) return;
      const selectionStart = vTextFieldRef.value.selectionStart;
      const length = model.value.length;
      if (["Enter", "ArrowDown", "ArrowUp"].includes(e.key)) {
        e.preventDefault();
      }
      if (["Enter", "ArrowDown"].includes(e.key)) {
        menu.value = true;
      }
      if (["Escape"].includes(e.key)) {
        menu.value = false;
      }
      if (["Enter", "Escape", "Tab"].includes(e.key)) {
        if (highlightFirst.value && ["Enter", "Tab"].includes(e.key) && !model.value.some((_ref2) => {
          let {
            value
          } = _ref2;
          return value === displayItems.value[0].value;
        })) {
          select(filteredItems.value[0]);
        }
        isPristine.value = true;
      }
      if (e.key === "ArrowDown" && highlightFirst.value) {
        (_a22 = listRef.value) == null ? undefined : _a22.focus("next");
      }
      if (e.key === "Enter" && search.value) {
        select(transformItem$1(props, search.value));
        if (hasSelectionSlot.value) _search.value = "";
      }
      if (["Backspace", "Delete"].includes(e.key)) {
        if (!props.multiple && hasSelectionSlot.value && model.value.length > 0 && !search.value) return select(model.value[0], false);
        if (~selectionIndex.value) {
          e.preventDefault();
          const originalSelectionIndex = selectionIndex.value;
          select(model.value[selectionIndex.value], false);
          selectionIndex.value = originalSelectionIndex >= length - 1 ? length - 2 : originalSelectionIndex;
        } else if (e.key === "Backspace" && !search.value) {
          selectionIndex.value = length - 1;
        }
        return;
      }
      if (!props.multiple) return;
      if (e.key === "ArrowLeft") {
        if (selectionIndex.value < 0 && selectionStart > 0) return;
        const prev = selectionIndex.value > -1 ? selectionIndex.value - 1 : length - 1;
        if (model.value[prev]) {
          selectionIndex.value = prev;
        } else {
          selectionIndex.value = -1;
          vTextFieldRef.value.setSelectionRange(search.value.length, search.value.length);
        }
      } else if (e.key === "ArrowRight") {
        if (selectionIndex.value < 0) return;
        const next = selectionIndex.value + 1;
        if (model.value[next]) {
          selectionIndex.value = next;
        } else {
          selectionIndex.value = -1;
          vTextFieldRef.value.setSelectionRange(0, 0);
        }
      } else if (~selectionIndex.value && checkPrintable(e)) {
        selectionIndex.value = -1;
      }
    }
    function onAfterEnter() {
      var _a22;
      if (props.eager) {
        (_a22 = vVirtualScrollRef.value) == null ? undefined : _a22.calculateVisibleItems();
      }
    }
    function onAfterLeave() {
      var _a22;
      if (isFocused.value) {
        isPristine.value = true;
        (_a22 = vTextFieldRef.value) == null ? undefined : _a22.focus();
      }
    }
    function select(item) {
      let set = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      if (!item || item.props.disabled) return;
      if (props.multiple) {
        const index = model.value.findIndex((selection) => props.valueComparator(selection.value, item.value));
        const add = set == null ? !~index : set;
        if (~index) {
          const value = add ? [...model.value, item] : [...model.value];
          value.splice(index, 1);
          model.value = value;
        } else if (add) {
          model.value = [...model.value, item];
        }
        if (props.clearOnSelect) {
          search.value = "";
        }
      } else {
        const add = set !== false;
        model.value = add ? [item] : [];
        _search.value = add && !hasSelectionSlot.value ? item.title : "";
        nextTick(() => {
          menu.value = false;
          isPristine.value = true;
        });
      }
    }
    function onFocusin(e) {
      isFocused.value = true;
      setTimeout(() => {
        listHasFocus.value = true;
      });
    }
    function onFocusout(e) {
      listHasFocus.value = false;
    }
    function onUpdateModelValue(v) {
      if (v == null || v === "" && !props.multiple && !hasSelectionSlot.value) model.value = [];
    }
    watch(isFocused, (val, oldVal) => {
      if (val || val === oldVal) return;
      selectionIndex.value = -1;
      menu.value = false;
      if (search.value) {
        if (props.multiple) {
          select(transformItem$1(props, search.value));
          return;
        }
        if (!hasSelectionSlot.value) return;
        if (model.value.some((_ref3) => {
          let {
            title
          } = _ref3;
          return title === search.value;
        })) {
          _search.value = "";
        } else {
          select(transformItem$1(props, search.value));
        }
      }
    });
    watch(menu, () => {
      if (!props.hideSelected && menu.value && model.value.length) {
        displayItems.value.findIndex((item) => model.value.some((s) => props.valueComparator(s.value, item.value)));
      }
    });
    watch(() => props.items, (newVal, oldVal) => {
      if (menu.value) return;
      if (isFocused.value && !oldVal.length && newVal.length) {
        menu.value = true;
      }
    });
    useRender(() => {
      const hasList = !!(!props.hideNoData || displayItems.value.length || slots["prepend-item"] || slots["append-item"] || slots["no-data"]);
      const isDirty = model.value.length > 0;
      const textFieldProps = VTextField.filterProps(props);
      return createVNode(VTextField, mergeProps({
        "ref": vTextFieldRef
      }, textFieldProps, {
        "modelValue": search.value,
        "onUpdate:modelValue": [($event) => search.value = $event, onUpdateModelValue],
        "focused": isFocused.value,
        "onUpdate:focused": ($event) => isFocused.value = $event,
        "validationValue": model.externalValue,
        "counterValue": counterValue.value,
        "dirty": isDirty,
        "class": ["v-combobox", {
          "v-combobox--active-menu": menu.value,
          "v-combobox--chips": !!props.chips,
          "v-combobox--selection-slot": !!hasSelectionSlot.value,
          "v-combobox--selecting-index": selectionIndex.value > -1,
          [`v-combobox--${props.multiple ? "multiple" : "single"}`]: true
        }, props.class],
        "style": props.style,
        "readonly": form.isReadonly.value,
        "placeholder": isDirty ? undefined : props.placeholder,
        "onClick:clear": onClear,
        "onMousedown:control": onMousedownControl,
        "onKeydown": onKeydown
      }), {
        ...slots,
        default: () => createVNode(Fragment, null, [createVNode(VMenu, mergeProps({
          "ref": vMenuRef,
          "modelValue": menu.value,
          "onUpdate:modelValue": ($event) => menu.value = $event,
          "activator": "parent",
          "contentClass": "v-combobox__content",
          "disabled": menuDisabled.value,
          "eager": props.eager,
          "maxHeight": 310,
          "openOnClick": false,
          "closeOnContentClick": false,
          "transition": props.transition,
          "onAfterEnter": onAfterEnter,
          "onAfterLeave": onAfterLeave
        }, props.menuProps), {
          default: () => {
            var _a3;
            return [hasList && createVNode(VList, mergeProps({
              "ref": listRef,
              "selected": selectedValues.value,
              "selectStrategy": props.multiple ? "independent" : "single-independent",
              "onMousedown": (e) => e.preventDefault(),
              "onKeydown": onListKeydown,
              "onFocusin": onFocusin,
              "onFocusout": onFocusout,
              "tabindex": "-1",
              "aria-live": "polite",
              "color": (_a3 = props.itemColor) != null ? _a3 : props.color
            }, listEvents, props.listProps), {
              default: () => {
                var _a4;
                var _a22, _b, _c;
                return [(_a22 = slots["prepend-item"]) == null ? undefined : _a22.call(slots), !displayItems.value.length && !props.hideNoData && ((_a4 = (_b = slots["no-data"]) == null ? undefined : _b.call(slots)) != null ? _a4 : createVNode(VListItem, {
                  "key": "no-data",
                  "title": t(props.noDataText)
                }, null)), createVNode(VVirtualScroll, {
                  "ref": vVirtualScrollRef,
                  "renderless": true,
                  "items": displayItems.value
                }, {
                  default: (_ref4) => {
                    var _a5;
                    var _a32;
                    let {
                      item,
                      index,
                      itemRef
                    } = _ref4;
                    const itemProps = mergeProps(item.props, {
                      ref: itemRef,
                      key: item.value,
                      active: highlightFirst.value && index === 0 ? true : undefined,
                      onClick: () => select(item, null)
                    });
                    return (_a5 = (_a32 = slots.item) == null ? undefined : _a32.call(slots, {
                      item,
                      index,
                      props: itemProps
                    })) != null ? _a5 : createVNode(VListItem, mergeProps(itemProps, {
                      "role": "option"
                    }), {
                      prepend: (_ref5) => {
                        let {
                          isSelected
                        } = _ref5;
                        return createVNode(Fragment, null, [props.multiple && !props.hideSelected ? createVNode(VCheckboxBtn, {
                          "key": item.value,
                          "modelValue": isSelected,
                          "ripple": false,
                          "tabindex": "-1"
                        }, null) : undefined, item.props.prependAvatar && createVNode(VAvatar, {
                          "image": item.props.prependAvatar
                        }, null), item.props.prependIcon && createVNode(VIcon, {
                          "icon": item.props.prependIcon
                        }, null)]);
                      },
                      title: () => {
                        var _a6;
                        var _a42, _b2;
                        return isPristine.value ? item.title : highlightResult(item.title, (_a42 = getMatches(item)) == null ? undefined : _a42.title, (_a6 = (_b2 = search.value) == null ? undefined : _b2.length) != null ? _a6 : 0);
                      }
                    });
                  }
                }), (_c = slots["append-item"]) == null ? undefined : _c.call(slots)];
              }
            })];
          }
        }), model.value.map((item, index) => {
          function onChipClose(e) {
            e.stopPropagation();
            e.preventDefault();
            select(item, false);
          }
          const slotProps = {
            "onClick:close": onChipClose,
            onKeydown(e) {
              if (e.key !== "Enter" && e.key !== " ") return;
              e.preventDefault();
              e.stopPropagation();
              onChipClose(e);
            },
            onMousedown(e) {
              e.preventDefault();
              e.stopPropagation();
            },
            modelValue: true,
            "onUpdate:modelValue": undefined
          };
          const hasSlot = hasChips.value ? !!slots.chip : !!slots.selection;
          const slotContent = hasSlot ? ensureValidVNode(hasChips.value ? slots.chip({
            item,
            index,
            props: slotProps
          }) : slots.selection({
            item,
            index
          })) : undefined;
          if (hasSlot && !slotContent) return undefined;
          return createVNode("div", {
            "key": item.value,
            "class": ["v-combobox__selection", index === selectionIndex.value && ["v-combobox__selection--selected", textColorClasses.value]],
            "style": index === selectionIndex.value ? textColorStyles.value : {}
          }, [hasChips.value ? !slots.chip ? createVNode(VChip, mergeProps({
            "key": "chip",
            "closable": props.closableChips,
            "size": "small",
            "text": item.title,
            "disabled": item.props.disabled
          }, slotProps), null) : createVNode(VDefaultsProvider, {
            "key": "chip-defaults",
            "defaults": {
              VChip: {
                closable: props.closableChips,
                size: "small",
                text: item.title
              }
            }
          }, {
            default: () => [slotContent]
          }) : slotContent != null ? slotContent : createVNode("span", {
            "class": "v-combobox__selection-text"
          }, [item.title, props.multiple && index < model.value.length - 1 && createVNode("span", {
            "class": "v-combobox__selection-comma"
          }, [createTextVNode(",")])])]);
        })]),
        "append-inner": function() {
          var _a22;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return createVNode(Fragment, null, [(_a22 = slots["append-inner"]) == null ? undefined : _a22.call(slots, ...args), (!props.hideNoData || props.items.length) && props.menuIcon ? createVNode(VIcon, {
            "class": "v-combobox__menu-icon",
            "icon": props.menuIcon,
            "onMousedown": onMousedownMenuIcon,
            "onClick": noop,
            "aria-label": t(label.value),
            "title": t(label.value),
            "tabindex": "-1"
          }, null) : undefined]);
        }
      });
    });
    return forwardRefs({
      isFocused,
      isPristine,
      menu,
      search,
      selectionIndex,
      filteredItems,
      select
    }, vTextFieldRef);
  }
});

export { VCombobox as V, _sfc_main as _ };
//# sourceMappingURL=VCombobox-CJua5flN.mjs.map
