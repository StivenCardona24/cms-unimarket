<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
</div>
</template>

<script setup lang="ts">
import { useAuthStore } from "@/store/auth";


const AuthStore = useAuthStore();
const { getToken } = useAuthStore();

onMounted(async() => {
  await getToken();
});
</script>



