<template>
    <div class="w-full">
        <products-header></products-header>
        <products-list></products-list>
    </div>
</template>

<script setup lang="ts">

import { useProductStore } from '@/store/products';
const { loadProductsUser} = useProductStore();

onMounted(() => {
    loadProductsUser(1);
});


</script>