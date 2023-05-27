<template>
    <el-dialog v-model="dialogIsOpen" :title="dialogTitle" width="40%" center>
       <auth-login-form v-if="formLogin"></auth-login-form>
       <user-register-form v-else-if="formRegister"></user-register-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogIsOpen = false">Cancel</el-button>
          <el-button type="primary" @click="dialogIsOpen = false">
            {{ dialogTitle }}
          </el-button>
        </span>
      </template>
    </el-dialog>
  </template>
  <script lang="ts" setup>
   import { useAuthStore} from '@/store/auth'
  import { storeToRefs } from 'pinia';
  const AuthStore = useAuthStore()
  const { formLogin, formRegister, dialogIsOpen, dialogTitle } = storeToRefs(AuthStore)

  </script>
  <style scoped>
  .dialog-footer button:first-child {
    margin-right: 10px;
  }
 

  </style>