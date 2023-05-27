<template>
        <el-form
    label-position="top"
    label-width="100px"
    :model="currentUser"
    style="min-width: 460px"
    destroy-on-close
  >
    <el-form-item label="Nombre">
      <el-input v-model="currentUser.nombre" placeholder="Ingrese su nombre completo"  />
    </el-form-item>
    <el-form-item label="Cedula">
      <el-input v-model="currentUser.cedula" placeholder="Ingrese su cedula" />
    </el-form-item>
    <el-form-item label="Usuario">
      <el-input v-model="currentUser.userName" placeholder="Ingrese su usuario"/>
    </el-form-item>
    <el-form-item label="fecha de nacimiento">
      <el-date-picker
        v-model="currentUser.fechaNacimiento"
        type="date"
        placeholder="Ingrese la fecha de nacimiento"
        style="width: 100%;"
      />
    </el-form-item>
  </el-form>
  </template>
  <script lang="ts" setup>
   import { useUserStore} from '@/store/user'
  import { storeToRefs } from 'pinia';
  const UserStore = useUserStore()
  const {currentUser } = storeToRefs(UserStore)

  </script>
  <style scoped>
  .dialog-footer button:first-child {
    margin-right: 10px;
  }
 

  </style>