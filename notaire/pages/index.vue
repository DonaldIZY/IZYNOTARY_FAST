<template>
    <div></div>
</template>

<script setup>
    const router = useRouter();

    // Rediriger après que le composant soit monté
    onMounted(() => {
        router.push("/login");
    });

    definePageMeta({
        layout: ''
    })
</script>