<template>
  <el-menu active-text-color="false" class="el-menu-demo p-1" mode="horizontal" :ellipsis="false">
    <el-menu-item index="0">
      <el-icon>
        <GoodsFilled />
      </el-icon>
      <div class="text-2xl"> <nuxt-link to="/" active-text-color="#fff" active-class="nuxt-link-desactive">UNIMARKET
        </nuxt-link> </div>


    </el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="1">
      <el-button v-if="!isLogged" type="primary" plain class="large-button " @click="openLogin">Iniciar Sesión</el-button>
      <el-button v-if="!isLogged" type="warning" plain class="large-button " @click="openRegister">Registrarse</el-button>
      <el-button v-if="isLogged" type="danger" plain class="large-button " @click="beforeLogout">Cerrar Sesión</el-button>
    </el-menu-item>
    <el-menu-item>
      <div class="select-container">
        <select v-model="$colorMode.preference" class="large-select">
          <option value="system">System</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="sepia">Sepia</option>
        </select>
      </div>
    </el-menu-item>


    <el-sub-menu index="2" class="hover:text-orange-500" v-if="isLogged">
      <template #title>
        <el-icon>
          <User />
        </el-icon>
        <span>Perfil</span>
      </template>
      <el-menu-item-group>

        <nuxt-link to="/products/myProducts" active-text-color="#f1eeec"> <el-menu-item index="1-1"
            class="hover:text-orange-500" active-text-color="#f1eeec"> <el-icon>
              <Edit />
            </el-icon> Mis Productos</el-menu-item></nuxt-link>
      </el-menu-item-group>
    </el-sub-menu>

    
  </el-menu>
</template>


  
<script lang="ts" setup>
import { ref } from 'vue';
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
  Goods,
  GoodsFilled,
  User,
  Edit
} from '@element-plus/icons-vue'

import { ElMessage, ElMessageBox } from 'element-plus'
import { storeToRefs } from 'pinia';
import { useAuthStore } from '@/store/auth';
import { useUserStore } from '@/store/user';


const AuthStore = useAuthStore();
const { isLogged } = storeToRefs(AuthStore);
const { openLogin, logout, openRegister } = useAuthStore();



const colorMode = useColorMode()
console.log(colorMode.preference)



const beforeLogout = () => {
  ElMessageBox.confirm(
    'Esta seguro de cerrar sesión',
    'Warning',
    {
      confirmButtonText: 'Cerrar Sesión',
      cancelButtonText: 'Cancelar',
      type: 'warning',
    }
  )
    .then(async () => {
      await logout();
      ElMessage({
        type: 'success',
        message: 'Sesión cerrada',
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: 'Gracias por no irte',
      })
    })
}


</script>
  


<style scoped>
.el-menu-demo {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.el-menu-item.is-active i {
  color: white;
}

.el-menu-item.is-desactive i {
  color: white !important;
}

.inactive-link::v-deep(.nuxt-link-desactive) {
  color: white !important;
}


.nuxt-link-desactive {
  color: white !important
}


.flex-grow {
  flex-grow: 1;
}

/* Eliminar efecto hover en el-menu-item */
.el-menu-demo .el-menu-item:hover {
  background-color: transparent;
  color: inherit;
}</style>
