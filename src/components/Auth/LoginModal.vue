<template>
    <!-- <el-button text @click="dialogIsOpen = true">
      Click to open the Dialog
    </el-button> -->
  
    <el-dialog v-model="dialogIsOpen" title="Inicio de Sesión" width="30%" center>
        <el-form label-position="right" >
      <el-form-item label="Usuario"  >
        <el-input v-model="username" placeholder="Ingresa tu usuario"></el-input>
      </el-form-item>
      <el-form-item label="Contraseña">
        <el-input type="password" v-model="password" placeholder="Ingresa tu contraseña"></el-input>
      </el-form-item>
    </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogIsOpen = false">Cancel</el-button>
          <el-button type="primary" @click="dialogIsOpen = false">
            Confirm
          </el-button>
        </span>
      </template>
    </el-dialog>
  </template>
  <script lang="ts" setup>
   import { useAuthStore} from '@/store/auth'
  import { storeToRefs } from 'pinia';
  const AuthStore = useAuthStore()
  const { dialogIsOpen } = storeToRefs(AuthStore)
  </script>
  <style scoped>
  .dialog-footer button:first-child {
    margin-right: 10px;
  }
  </style>