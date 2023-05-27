<template>
  <el-menu active-text-color="false" class="el-menu-demo" mode="horizontal" :ellipsis="false" >
    <el-menu-item index="0">
      <div class="text-2xl"> <nuxt-link to="/" >UNIMARKET </nuxt-link> </div>
    </el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="1">
      <el-button type="primary" plain class="large-button " @click="openLogin" >Iniciar Sesión</el-button>
      <el-button type="warning" plain class="large-button " @click="openRegister" >Registrarse</el-button>
    </el-menu-item>


    <el-sub-menu index="3">
      <template #title>Workspace</template>
      <!-- Resto del código... -->
    </el-sub-menu>

    <el-menu-item index="4">
      <div class="select-container">
        <select v-model="$colorMode.preference" class="large-select">
          <option value="system">System</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="sepia">Sepia</option>
        </select>
      </div>
    </el-menu-item>
  </el-menu>


</template>


  
<script lang="ts" setup>
import { ref } from 'vue';
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

import { useAuthStore } from '@/store/auth';
import {useUserStore} from '@/store/user';

const { openRegister } = useUserStore();
const { openLogin } = useAuthStore();



const colorMode = useColorMode()
console.log(colorMode.preference)



</script>
  


<style scoped>
.el-menu-demo {
  display: flex;
  justify-content: space-between;
  align-items: center;
}







.flex-grow {
  flex-grow: 1;
}

/* Eliminar efecto hover en el-menu-item */
.el-menu-demo .el-menu-item:hover {
  background-color: transparent;
  color: inherit;
}
</style>
