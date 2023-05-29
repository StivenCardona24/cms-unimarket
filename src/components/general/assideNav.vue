<template>
  
        <el-menu
      default-active="2"
      class="el-menu-vertical-demo h-screen overflow-y-auto "
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
    >
    <el-menu-item class="hover:text-orange-500" @click="isCollapse = !isCollapse">
      <el-icon ><Expand v-if="isCollapse" /> <Fold v-else /> </el-icon>
    </el-menu-item >
     
      <el-sub-menu index="2" >
        <template #title>
          <el-icon><MoreFilled /></el-icon>
          <span>Categorias</span>
        </template>
        <el-menu-item-group>
          <nuxt-link to="/" active-text-color="#f1eeec">  <el-menu-item index="2-1"  class="hover:text-orange-500" @click="loadProducts()">Todos</el-menu-item></nuxt-link>
         <el-menu-item   class="hover:text-orange-500" v-for="(category, index) in categories" :key="index" @click="loadProductsCategory(category)" > {{  category }}</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
      <!-- <el-menu-item index="2">
        <el-icon><icon-menu /></el-icon>
        <template #title>Navigator Two</template>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <el-icon><document /></el-icon>
        <template #title>Navigator Three</template>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon><setting /></el-icon>
        <template #title>Navigator Four</template>
      </el-menu-item> -->
     
    </el-menu>
   
</template>


<script lang="ts" setup>
import {Expand, Fold, MoreFilled} from "@element-plus/icons-vue"
import { ref } from 'vue'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'



import { useCategoryStore } from "@/store/categories";
import { useProductStore } from "@/store/products";
import { storeToRefs } from "pinia";
import { text } from "stream/consumers";

const CategoryStore = useCategoryStore();

const {categories} = storeToRefs(CategoryStore);
const { loadProductsCategory, loadProducts } = useProductStore();

const isCollapse = ref(false)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
 button:first-child {
    margin-right: 10px;
  }
 .el-sub-menu__title:hover {
  color: orangered
 }
 .el-menu-item.is-active i {
    color: white !important;
}


.el-menu-item.is-desactive i{
    color: white !important;
}

</style>