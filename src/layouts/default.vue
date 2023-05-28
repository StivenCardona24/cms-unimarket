

<template>
  <div class="common-layout">
    <el-container>
      <el-header class="sticky top-0 left-0 right-0 z-50 bg-white">
        <general-header-nav></general-header-nav>
      </el-header>
      <el-container class="flex">
        <el-aside class="h-screen overflow-y-auto sticky top-14 left-0 right-0 z-40 ">
          <general-asside-nav></general-asside-nav>
        </el-aside>
        <el-main class="flex-grow mt-4">
          <slot></slot>
          
        </el-main>
      
       
       
        
      </el-container>
    </el-container>
  
  </div>
  <general-dialog-modal></general-dialog-modal>
</template>
