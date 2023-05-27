<template>
    <el-form>
      <p class="text-center text-2xl mb-3">Usuario</p>
      <el-form-item>
        <el-input  placeholder="Ingresa tu usuario"></el-input>
      </el-form-item>
      <p class="text-center text-2xl mb-3">Contraseña</p>
      <el-form-item>
        <el-input type="password" placeholder="Ingresa tu contraseña"></el-input>
      </el-form-item>
    </el-form>
    <div class=" flex justify-around text-white-200">
      <el-link type="info">¿Haz olvidado tu contraseña?</el-link>
      <el-link type="primary">Registrarse</el-link>
    </div>
</template>
<script lang="ts" setup>
import { useAuthStore } from '@/store/auth'
import { storeToRefs } from 'pinia';
const AuthStore = useAuthStore()
const {  } = storeToRefs(AuthStore)

const username = ref("")
</script>
<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>