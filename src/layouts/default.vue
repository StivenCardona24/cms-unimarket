<template>

   <div>
    <header-nav ></header-nav>
  <div class="flex">
  <div>

    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
    >
    <el-menu-item @click="isCollapse = !isCollapse">
      <el-icon ><Expand v-if="isCollapse" /> <Fold v-else /> </el-icon>
    </el-menu-item>
      <el-sub-menu index="1">
        <template #title>
          <el-icon><icon-menu /></el-icon>
          <span>Productos</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1" > <nuxt-link to="/products/myProducts">Mis Productos</nuxt-link></el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
      <el-menu-item index="2">
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
      </el-menu-item>
     
    </el-menu>
  </div >
  <div class="m-3 w-full">
  <slot/>
</div>
</div>

</div>
    
    
  </template>
  
  <script lang="ts" setup>
  import {Expand, Fold} from "@element-plus/icons-vue"
  import { ref } from 'vue'
  import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
  } from '@element-plus/icons-vue'

  const isCollapse = ref(true)
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

  </style>