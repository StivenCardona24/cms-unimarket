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
  <auth-login-modal></auth-login-modal>
</template>
