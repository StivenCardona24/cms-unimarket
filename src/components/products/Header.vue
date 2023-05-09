<template>
  <div>
    <el-progress v-if="loadingPage" :percentage="100" :show-text="false" :indeterminate="true" style="width: 100%" />
  </div>
  <el-menu :class="[
    'py-4',
    'border-b',
    'border-b-spdy-white',
    'flex',
    'justify-around',
    'items-center',
  ]">
    <h1 class="font-bold text-xl text-white">Tus Productos</h1>
    <div>
      <el-button plain type="primary" size="large" class="font-bold text-center" @click="createNewProduct">
        <template #icon>
          <el-icon>
            <Plus/>
          </el-icon>
        </template>
        NUEVO PRODUCTO
      </el-button>
    </div>
  </el-menu>
</template>
<script lang="ts" setup>
  import {Plus} from "@element-plus/icons-vue"
  import { useProductStore } from "~/store/products";
  import { storeToRefs } from "pinia";

  const ProductStore = useProductStore();
  const { products, loadingPage } = storeToRefs(ProductStore);
  const {createNewProduct} = ProductStore
</script>

