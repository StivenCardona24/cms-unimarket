<template>
  <el-row justify="center">
    <el-col v-for="(product, index) in products" :key="index" :xs="8" :sm="6" :md="5" :lg="4" :xl="3"  class="mx-12">
      <el-card  class="cardProduct hover:shadow-indigo-500/40" @click="viewProduct(product)">
        <img :src="product.imagenes.image1" class="image" />
        <div style="padding: 14px">
          <span class="title">{{ product.nombre }}</span>
          <p class="description">{{ truncateDescription(product.descripcion, 50) }}</p>
          <p class="price">$ {{ product.precio }}</p>
        </div>
        <div class="bottom">  
            <el-button class="buy-button" type="primary" >
              Añadir al carrito
            </el-button>
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
const { loadProducts, viewProduct } = useProductStore();

onMounted(() => {
  loadProducts();
});
const currentDate = ref(new Date())


function truncateDescription(description:string, maxLength:number) {
  if (description.length > maxLength) {
    return description.slice(0, maxLength) + '...';
  }
  return description;
}
</script>



<style>

.cardProduct {
  padding: 2px;
  min-height: 450px;
  max-height: 450px;
  margin-bottom: 30px;
  transition: all 0.3s;
  cursor: pointer;
}

.cardProduct:hover {
  transform: scale(1.05);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}


.el-card__body {
    height: 450px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    flex-wrap: nowrap;
}




.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: end;
  align-items: end;
}

.image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.title {
  font-size: 18px;
  font-weight: bold;
}

.description {
  margin-top: 10px;
  font-size: 14px;
  max-height: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.price {
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
}

.buy-button {
  width: 100%;
  margin-top: auto;
}

</style>
