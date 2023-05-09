
<template>
  <div class="container mx-auto">

   <sub-header :title="dialogTitle"></sub-header>
    
  <el-form
    ref="formRef"
    :model="currentProduct"
    :rules="rules"
    label-width="190px"
    label-position="left"
    class="mt-10"
   
  >
  <!-- class="flex flex-wrap justify-around m-3 " -->
  <el-row :gutter="24">
  <el-col :span="12">
    <el-form-item class="mb-6" label="Nombre: " prop="nombre">
      <el-input v-model="currentProduct.name" placeholder="Ingresa el nombre" />
    </el-form-item>
  </el-col>
  <el-col :span="12">
    <el-form-item class="mb-6" label="Unidades disponibles: " prop="unidades">
      <el-input-number  style="width: 100%" size="large" :min="1"  v-model="currentProduct.unidades" placeholder="Ingresa las unidades" />
    </el-form-item>
  </el-col>

</el-row>

<el-row :gutter="24">
  <el-col :span="12">
    <el-form-item class="mb-6" label="Precio: " prop="precioUnitario">
      <el-input-number  style="width: 100%"  size="large" :min="0"  v-model="currentProduct.precioUnitario" placeholder="Ingresa el precio" />
    </el-form-item>
  </el-col>
  <el-col :span="12">
    <el-form-item class="mb-6" label="Categorias: " prop="categorias">
      <el-select  v-model="currentProduct.categorias"  multiple
      collapse-tags
      collapse-tags-tooltip
      :max-collapse-tags="3"
      style="width: 100%"
      placeholder="Selecciona las categorias"
      clearable
      filterable 
      size="large"
      class="w-full">
        <el-option
          label="ROPA"
          :value="Category.ROPA"
        />
        <el-option
          label="CALZADO"
          :value="Category.CALZADO"
        />
        <el-option
          label="ELECTRODOMESTICO"
          :value="Category.ELECTRODOMESTICO"
        />
        <el-option
          label="TECNOLOGIA"
          :value="Category.TECNOLOGIA"
        />
        <el-option
          label="HOGAR"
          :value="Category.HOGAR"
        />
      </el-select>
    </el-form-item>
  </el-col>

</el-row>
    <el-form-item class="mb-6" label="Descripción: " prop="descripcion">
      <el-input type="textarea" v-model="currentProduct.descripcion" placeholder="Ingresa la descripción" />
    </el-form-item>
    <el-form-item class="mb-6" label="Imagenes: " prop="imagenes">
      <el-upload
    v-model:file-list="fileList"
    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
    list-type="picture-card"
    :on-preview="handlePictureCardPreview"
    :on-remove="handleRemove"
  >
    <el-icon><Plus /></el-icon>
  </el-upload>

  <el-dialog v-model="dialogVisible">
    <img w-full :src="dialogImageUrl" alt="Preview Image" />
  </el-dialog>

    </el-form-item>
    
   
  
    <el-form-item v-if="!formDisable">
      <el-button @click="save" type="primary" plain v-if="loadingModal" loading>GUARDAR</el-button>
      <el-button @click="save" type="primary" plain v-else>GUARDAR</el-button>
    </el-form-item>
  </el-form>
</div>
</template>
<script lang="ts" setup>
import type { FormInstance, FormRules } from "element-plus";
import { Plus } from '@element-plus/icons-vue'
import type { UploadProps, UploadUserFile } from 'element-plus'
import { ref } from 'vue'
import { useProductStore } from '@/store/products'
// import { useCityStore } from "@/store/city";
// import { useCountryStore } from "@/store/country";
// import { useDocumentTypeStore } from "@/store/documentType";
import { Category } from "@/interfaces/category.interface";
import { ElMessage } from 'element-plus'
import { storeToRefs } from "pinia";
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
  descripcion: [
    {
      required: true,
      message: "Por favor ingrese la descripcion",
      trigger: "blur",
    },
  ],
  unidades: [
    {
      required: true,
      message: "Por favor ingrese las unidades",
      trigger: "blur",
    },
  ],
  precioUnitario: [
    {
      required: true,
      message: "Por favor ingrese el precio",
      trigger: "blur",
    },
  ],
  categorias: [
    {
      required: true,
      message: "Por favor ingrese las categorias",
      trigger: "blur",
    },
  ],
  imagenes: [
    {
      required: true,
      message: "Por favor cargue las imagenes",
      trigger: "blur",
    },
  ],
  
});

const ProductStore = useProductStore();


const { currentProduct, mesageBox, dialogTitle} = storeToRefs(ProductStore);
const { saveProduct } = ProductStore;



const save = async () => {
  formRef.value.validate(async (valid) => {
    if (valid ) {
      await saveProduct();
      ElMessage({
          type: `${mesageBox.value.type}`,
          message: `${mesageBox.value.message}`,
        });
      formRef.value.resetFields();
    }
    
  });
};


const fileList = ref<UploadUserFile[]>([])

const dialogImageUrl = ref('')
const dialogVisible = ref(false)

const handleRemove: UploadProps['onRemove'] = (uploadFile, uploadFiles) => {
  console.log(uploadFile, uploadFiles)
}

const handlePictureCardPreview: UploadProps['onPreview'] = (uploadFile) => {
  dialogImageUrl.value = uploadFile.url!
  dialogVisible.value = true
}



onMounted(() => {
  if(currentProduct.value.codigo){
    console.log(currentProduct);
  }
 });


</script> 
