
<template>
  <div class="container mx-auto">

    <general-sub-header :title="dialogTitle"></general-sub-header>

    <el-form ref="formRef" :model="currentProduct" :rules="rules" label-width="190px" label-position="left" class="mt-10">
      <!-- class="flex flex-wrap justify-around m-3 " -->
      <el-row :gutter="24">
        <el-col :span="12">
          <el-form-item class="mb-6" label="Nombre: " prop="nombre">
            <el-input v-model="currentProduct.nombre" placeholder="Ingresa el nombre" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item class="mb-6" label="Unidades disponibles: " prop="unidades">
            <el-input-number style="width: 100%" size="large" :min="1" v-model="currentProduct.unidades"
              placeholder="Ingresa las unidades" />
          </el-form-item>
        </el-col>

      </el-row>

      <el-row :gutter="24">
        <el-col :span="12">
          <el-form-item class="mb-6" label="Precio: " prop="precioUnitario">
            <el-input-number style="width: 100%" size="large" :min="0" v-model="currentProduct.precio"
              placeholder="Ingresa el precio" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item class="mb-6" label="Categorias: " prop="categorias">
            <el-select v-model="currentProduct.categorias" multiple collapse-tags collapse-tags-tooltip
              :max-collapse-tags="3" style="width: 100%" placeholder="Selecciona las categorias" clearable filterable
              size="large" class="w-full">
              <el-option label="ROPA" :value="Category.ROPA" />
              <el-option label="CALZADO" :value="Category.CALZADO" />
              <el-option label="ELECTRODOMESTICO" :value="Category.ELECTRODOMESTICO" />
              <el-option label="TECNOLOGIA" :value="Category.TECNOLOGIA" />
              <el-option label="HOGAR" :value="Category.HOGAR" />
            </el-select>
          </el-form-item>
        </el-col>

      </el-row>
      <el-form-item class="mb-6" label="Descripción: " prop="descripcion">
        <el-input type="textarea" v-model="currentProduct.descripcion" placeholder="Ingresa la descripción" />
      </el-form-item>


      <el-form-item class="mb-6" label="Imagenes:">
        <el-upload v-model:file-list="fileList" action="http://localhost:8081/api/imagenes" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove" :before-upload="handleBeforeUpload">
    <el-icon>
      <Plus />
    </el-icon>
  </el-upload>


      </el-form-item>




      <el-form-item v-if="!formDisable">
        <el-button @click="save" type="primary" plain v-if="loadingModal" loading>GUARDAR</el-button>
        <el-button @click="save" type="primary" plain v-else>GUARDAR</el-button>
      </el-form-item>

      <el-dialog v-model="dialogVisible">
        <img w-full :src="dialogImageUrl" alt="Preview Image" />
      </el-dialog>
    </el-form>


  </div>
</template>
<script lang="ts" setup>
import type { FormInstance, FormRules } from "element-plus";
import { Plus } from '@element-plus/icons-vue'
import type { UploadProps, UploadUserFile } from 'element-plus'
import { ref } from 'vue'
import { useProductStore } from '@/store/products'
import { useImageStore } from "@/store/images";
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
  categorias: [
  {
      required: true,
      message: "Por favor ingrese las categorias",
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
  precio: [
    {
      required: true,
      message: "Por favor ingrese el precio",
      trigger: "blur",
    },
  ],


});

const ProductStore = useProductStore();
const ImageStore = useImageStore();

const { currentProduct, mesageBox, dialogTitle } = storeToRefs(ProductStore);
const { saveProduct } = ProductStore;

const {url} = storeToRefs(ImageStore);
const { saveImage } = ImageStore;


const save = async () => {
  console.log("holiiii")
  if(formRef.value){
  formRef.value.validate(async (valid) => {
    if (valid) {
      await saveProduct();
      ElMessage({
        type: `${mesageBox.value.type}`,
        message: ` ${mesageBox.value.message} `,
      })
      if(formRef.value) formRef.value.resetFields();
    }
  });
}
};

const fileList = ref<UploadUserFile[]>([])

const dialogImageUrl = ref('')
const dialogVisible = ref(false)

const  handleBeforeUpload = async (file: any) => {
  // Agregar lógica adicional aquí si es necesario
  // Enviar el archivo al backend
  const formData = new FormData();
  formData.append('file', file);

  // Realizar la petición al backend
  
 await saveImage(formData);
  console.log(url.value)
  if(url.value){
    const num =Object.keys(currentProduct.value.imagenes).length + 1;
    currentProduct.value.imagenes[`image${num}`] = url.value;
  }

  // Retorna false para evitar que Element Plus maneje automáticamente la carga del archivo
  return false;
}

const handleRemove: UploadProps['onRemove'] = (uploadFile, uploadFiles) => {
  console.log(uploadFile, uploadFiles)
}

const handlePictureCardPreview: UploadProps['onPreview'] = (uploadFile) => {
  console.log(" fjgfjgjkf");
  dialogImageUrl.value = uploadFile.url!
  console.log(dialogImageUrl)
  dialogVisible.value = true
}



onMounted(() => {
  if (currentProduct.value.codigo) {
    console.log(currentProduct);
  }
});


</script> 
