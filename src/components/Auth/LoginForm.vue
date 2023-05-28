<template>
  <el-form ref="formRef" :model="currentLogin" :rules="rules" style="max-width: 460px" input-width="100px"
    destroy-on-close>
    <p class="text-center text-2xl mb-3 ">Email</p>
    <el-form-item prop="email">
      <el-input v-model="currentLogin.email" placeholder="Ingresa tu email" type="email">
        <template #prepend>
          <el-icon>
            <User />
          </el-icon>
        </template>
      </el-input>
    </el-form-item>
    <p class="text-center text-2xl mb-3">Contraseña</p>
    <el-form-item prop="password">
      <el-input v-model="currentLogin.password" type="password" placeholder="Ingresa tu contraseña">
        <template #prepend>
          <el-icon>
            <Lock />
          </el-icon>
        </template>
      </el-input>
    </el-form-item>
  </el-form>
  <div class=" flex justify-around text-white-200">
    <el-link type="info">¿Haz olvidado tu contraseña?</el-link>
    <el-link type="primary" @click="openRegister">Registrarse</el-link>
  </div>
  <div class=" flex justify-around mt-8">
    <span class="dialog-footer">
          <el-button @click="dialogIsOpen = false">Cancel</el-button>
          <el-button type="primary" @click="beforeLogin" >
            Iniciar sesion
          </el-button>
        </span>
  </div>
</template>
<script lang="ts" setup>
import type { FormInstance, FormRules } from "element-plus";
import { User, Lock } from '@element-plus/icons-vue'
import { storeToRefs } from 'pinia';
import { useAuthStore } from '@/store/auth'
import { useUserStore } from '@/store/user';

const formRef = ref<FormInstance>();
const rules = reactive<FormRules>({
  email: [
    {
      required: true,
      message: "Por favor ingrese el email",
      trigger: "blur",
    },
    // { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
  ],
  password: [
    {
      required: true,
      message: "Por favor ingrese la contraseña",
      trigger: "blur",
    },
  ],

});


const AuthStore = useAuthStore();

const { openRegister } = useUserStore();

const { currentLogin, dialogIsOpen } = storeToRefs(AuthStore)
const {login} = AuthStore;

const username = ref("")




const beforeLogin = async () => {
  if(formRef.value){
  formRef.value.validate(async (valid) => {
    if (valid) {
      let ward = await login();
      if(ward){
      if(formRef.value) formRef.value.resetFields();
      dialogIsOpen.value = false;
      }
    }
  });
}
};


</script>
<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>