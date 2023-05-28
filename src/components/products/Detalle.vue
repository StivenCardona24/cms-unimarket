

<template>
<div class="flex justify-center bg-gray-100">
    <div class="max-w-6xl py-8 px-4 w-full">
      <div class="grid grid-cols-12 gap-8">
        <div class="col-start-1  col-span-6">
          <div class="bg-white rounded-lg shadow-lg">
            <el-carousel :interval="5000" arrow="always" height="500px">
              <el-carousel-item v-for="(image, index) in currentProduct.imagenes" :key="index">
                <img :src="image" alt="Product Image" class="object-cover h-full w-full" />
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
        <div class=" col-span-6">
          <div class="bg-white rounded-lg shadow-lg p-6">
            <h2 class="text-2xl font-semibold">{{ currentProduct.nombre }}</h2>
            <p class="text-gray-600 mt-2">{{ currentProduct.descripcion }}</p>
            <div class="flex items-center mt-4">
              <span class="text-3xl font-semibold mr-2">$ {{ currentProduct.precio }}</span>
              <span class="text-gray-500">Envío Gratis</span>
            </div>
            <div class="flex items-center mt-4">
              <label class="mr-2">Cantidad:</label>
              <el-input-number v-model="quantity" :min="1" :max="currentProduct.unidades" size="small"></el-input-number>
            </div>
            <div class="mt-6">
              <el-button type="primary" class="w-full" @click="buyNow">Comprar Ahora</el-button>
            </div>
            <div class="mt-4">
              <el-button class="w-full" @click="addToCart">Añadir al Carrito</el-button>
            </div>
            <div class="mt-4 text-gray-500 text-sm">
              Disponibles: {{ currentProduct.unidades }} unidades
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useProductStore } from '@/store/products';
import { storeToRefs } from "pinia";

const ProductStore = useProductStore();
const { currentProduct } = storeToRefs(ProductStore);

</script>


    

<style>
.el-carousel__indicators {
  bottom: 10px;
}

.el-carousel__arrow {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  color: white;
}

.el-carousel__arrow:hover {
  background-color: rgba(0, 0, 0, 0.7);
}

.el-input-number {
  width: 120px;
}

.el-button {
  border-radius: 0;
  height: 40px;
  font-size: 14px;
}
</style>