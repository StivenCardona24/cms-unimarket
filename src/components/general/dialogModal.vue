<template>
    <el-dialog v-model="dialogIsOpen" :title="dialogTitle" :width="size" center class="p-6">
       <auth-login-form v-if="formLogin"></auth-login-form>
       <user-register-form v-else-if="formRegister"></user-register-form>
    
    </el-dialog>
  </template>
  <script lang="ts" setup>
   import { useAuthStore} from '@/store/auth'
  import { storeToRefs } from 'pinia';
  const AuthStore = useAuthStore()
  const { formLogin, formRegister, dialogIsOpen, dialogTitle, size } = storeToRefs(AuthStore)


  </script>
  <style scoped>
  .dialog-footer button:first-child {
    margin-right: 10px;
  }
 

  </style>