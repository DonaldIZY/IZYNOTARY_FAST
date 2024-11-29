<template>
    <div class="d-flex align-center ga-4 " >
        <v-icon icon="mdi-arrow-left" size="24" @click="goBack"/>
        <h2>{{ title }}</h2>
    </div>
</template>

<script setup>
    const props = defineProps({
        title: {
            type: String,
            required: true,
        },
        goBackTo: {
            type: String,
            required: true,
        },
    });

    const router = useRouter();

    const goBack = () => {
        router.push(props.goBackTo);
    };
    
</script>