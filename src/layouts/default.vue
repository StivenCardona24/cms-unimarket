

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <general-header-nav></general-header-nav>
      </el-header>
      <el-container>
        <el-aside>
          <general-asside-nav></general-asside-nav>
        </el-aside>
        <el-main>
          <slot></slot>
          
        </el-main>
      
       
       
        
      </el-container>
    </el-container>
  
  </div>
  <general-dialog-modal></general-dialog-modal>
</template>
