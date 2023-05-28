<template>
  <el-form 
  :inline="true" 
  class="demo-form-inline" 
  label-position="top" 
  label-width="100px" 
  ref="formRef" 
  :model="currentUser" 
  :rules="rules"
    style="max-width: 1000px" destroy-on-close size="large">
    <el-form-item label="Nombre" prop="nombre">
      <el-input v-model="currentUser.nombre" placeholder="Ingrese su nombre completo" />
    </el-form-item>
    <el-form-item label="Cedula" prop="cedula">
      <el-input v-model="currentUser.cedula" placeholder="Ingrese su cedula" type="number"/>
    </el-form-item>

    <el-form-item class="w-full" label="fecha de nacimiento" prop="fechaNacimiento">
      <el-date-picker format="YYYY/MM/DD"
        value-format="YYYY-MM-DD" v-model="currentUser.fechaNacimiento" type="date" placeholder="Ingrese la fecha de nacimiento"
        style="width: 100%;" class="w-full" />
    </el-form-item>
    <el-form-item label="Telefono" prop="telefono" >
      <el-input v-model="currentUser.telefono" placeholder="Ingrese su telefono" type="number" />
    </el-form-item>
    <el-form-item label="Dirección" prop="direccion">
      <el-input v-model="currentUser.direccion" placeholder="Ingrese su dirección" />
    </el-form-item>
    <el-form-item label="Usuario" prop="userName">
      <el-input v-model="currentUser.userName" placeholder="Ingrese su usuario" />
    </el-form-item>
    <el-form-item label="Email" prop="email">
      <el-input type="email" v-model="currentUser.email" placeholder="Ingresa tu email">
        <template #prepend>
          <el-icon>
            <User />
          </el-icon>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item label="Contraseña" prop="password">
      <el-input v-model="currentUser.password" type="password" placeholder="Ingresa tu contraseña" show-password>
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
          <el-button type="primary" @click="beforeRegister()">
            Registrarse
          </el-button>
        </span>
  </div>
</template>
<script lang="ts" setup>
import { User, Lock } from '@element-plus/icons-vue'
import { useAuthStore } from '@/store/auth'
import { storeToRefs } from 'pinia';
import type { FormInstance, FormRules } from "element-plus";


const formRef = ref<FormInstance>();
const rules = reactive<FormRules>({
  nombre: [
    {
      required: true,
      message: "Por favor ingrese el nombre",
      trigger: "blur",
    },
    // { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
  ],
  cedula: [
    {
      required: true,
      message: "Por favor ingrese la cedula",
      trigger: "blur",
    },
    // { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
  ],
  fechaNacimiento: [
    {
      required: true,
      message: "Por favor ingrese su fecha de nacimiento",
      trigger: "blur",
    },
    // { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
  ],
  telefono: [
    {
      required: true,
      message: "Por favor ingrese su telefono",
      trigger: "blur",
    },
     { min: 7, max: 10, message: 'el telefono no debe superar más de 10 numeros, ni puede ser menor de 7', trigger: 'blur' },
  ],
  direccion: [
    {
      required: true,
      message: "Por favor ingrese su dirección",
      trigger: "blur",
    },
    // { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
  ],
  userName: [
    {
      required: true,
      message: "Por favor ingrese su userName o Nick",
      trigger: "blur",
    },
    // { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
  ],
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

const { saveUser } = AuthStore;

const { currentUser, dialogIsOpen } = storeToRefs(AuthStore)



const beforeRegister = async () => {
  console.log("dkfjskfjdkfjdkgjkfd")
  if(formRef.value){
    console.log("dkfjskfjdkfjdkgjdfe33455454kfd")
  formRef.value.validate(async (valid) => {
    if (valid) {
      let ward = await saveUser();
      if(ward){
      if(formRef.value) formRef.value.resetFields();
      }
    }
  });
}
};


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