<template>
  <el-form :inline="true" class="demo-form-inline" label-position="top" label-width="100px" :model="currentUser"
    style="max-width: 1000px" destroy-on-close size="large">
    <el-form-item label="Nombre">
      <el-input v-model="currentUser.nombre" placeholder="Ingrese su nombre completo" />
    </el-form-item>
    <el-form-item label="Cedula">
      <el-input v-model="currentUser.cedula" placeholder="Ingrese su cedula" />
    </el-form-item>

    <el-form-item class="w-full" label="fecha de nacimiento">
      <el-date-picker v-model="currentUser.fechaNacimiento" type="date" placeholder="Ingrese la fecha de nacimiento"
        style="width: 100%;" class="w-full" />
    </el-form-item>
    <el-form-item label="Telefono">
      <el-input v-model="currentUser.telefono" placeholder="Ingrese su telefono" />
    </el-form-item>
    <el-form-item label="Dirección">
      <el-input v-model="currentUser.telefono" placeholder="Ingrese su dirección" />
    </el-form-item>
    <el-form-item label="Usuario">
      <el-input v-model="currentUser.userName" placeholder="Ingrese su usuario" />
    </el-form-item>
    <el-form-item label="Email">
      <el-input v-model="currentUser.email" placeholder="Ingresa tu email">
        <template #prepend>
          <el-icon>
            <User />
          </el-icon>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item label="Contraseña">
      <el-input type="password" placeholder="Ingresa tu contraseña">
        <template #prepend>
          <el-icon>
            <Lock />
          </el-icon>
        </template>
      </el-input>
    </el-form-item>
  </el-form>
  <div class=" flex justify-around mt-8">
    <span class="dialog-footer">
          <el-button @click="dialogIsOpen = false">Cancel</el-button>
          <el-button type="primary" @click="beforeLogin">
            Registrarse
          </el-button>
        </span>
  </div>
</template>
<script lang="ts" setup>
import { User, Lock } from '@element-plus/icons-vue'
import { useUserStore } from '@/store/user'
import { storeToRefs } from 'pinia';
const UserStore = useUserStore()
const { currentUser } = storeToRefs(UserStore)

</script>
<style >
.dialog-footer button:first-child {
  margin-right: 10px;
}

.el-form--inline.el-form--label-top {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.el-form--inline.el-form--label-top .el-form-item {
  display: block;
  width: 40%;
}

.el-input--large .el-input__wrapper {
  width: 100%;
}
</style>