import { shallowRef, computed, readonly } from 'vue';

function useSsrBoot() {
  const isBooted = shallowRef(false);
  const ssrBootStyles = computed(() => !isBooted.value ? {
    transition: "none !important"
  } : undefined);
  return {
    ssrBootStyles,
    isBooted: readonly(isBooted)
  };
}

export { useSsrBoot as u };
//# sourceMappingURL=ssrBoot-BtvJZs44.mjs.map
