<template>
  <el-row justify="center">
    <el-col v-for="(product, index) in products" :key="index" :xs="8" :sm="6" :md="5" :lg="4" :xl="3"  class="mx-12">
      <el-card :body-style="{ padding: '2px' }">
        <img :src="product.imagenes.image1"
          class="image" />
        <div style="padding: 14px">
          <span >{{ product.nombre }}</span>
          <div class="bottom">
            <time class="time">{{ product.fechaLimite }}</time>
            <el-button text class="button">Operating</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useProductStore } from '@/store/products';
import { storeToRefs } from "pinia";
import { ElMessageBox, ElMessage } from 'element-plus';
const ProductStore = useProductStore();
const { products, loadingPage } = storeToRefs(ProductStore);
const { loadProducts } = useProductStore();

onMounted(() => {
  loadProducts();
});
const currentDate = ref(new Date())
</script>

<style>
.time {
  font-size: 12px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  display: block;
}
</style>
