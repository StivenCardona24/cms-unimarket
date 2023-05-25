import { AssideNav } from '../../.nuxt/components';

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <header-nav></header-nav>
      </el-header>
      <el-container>
        <el-aside>
          <asside-nav></asside-nav>
        </el-aside>
        <el-main>
          <slot></slot>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>



<!-- <template>

   <div>
    <header-nav ></header-nav>
  <div class="flex">
  <div>

   <asside-nav></asside-nav>
  </div >
  <div class="m-3 w-full">
  <slot/>
</div>
</div>

</div>
    
    
  </template> -->
  