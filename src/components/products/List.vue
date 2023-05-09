<template>
    <div class="w-full py-4 ">
        <el-table element-loading-background="rgba(155, 155, 155, 0.2)" v-loading="loadingPage" :data="products"
            style="width: 100%">
            <el-table-column prop="codigo" label="Código" align="center" />
            <el-table-column prop="nombre" label="Nombre" align="center" />
            <el-table-column prop="unidades" label="Unidades" align="center" />
            <el-table-column prop="precioUnitario" label="Precio" align="center" />
            <el-table-column label="Acciones" align="center">
                <template #default="scope">
                    <div class="flex gap-1 justify-end">
                        <el-button plain type="primary" @click="editBank(scope.row)" >
                
                            <template #icon>
                                <el-icon>
                                    <icon-edit />
                                </el-icon>
                            </template>
                        </el-button>
                        <el-button plain type="danger" @click="delMessageBoxBank(scope.row)" > 
                           
                            <template #icon>
                                <el-icon>
                                    <icon-delete />
                                </el-icon>
                            </template>
                        </el-button>
                    </div>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script lang="ts" setup>
  import { useProductStore } from '@/store/products';
  import { storeToRefs } from "pinia";
  import { ElMessageBox, ElMessage } from 'element-plus';
  const ProductStore = useProductStore();
  const { products, loadingPage } = storeToRefs(ProductStore);
  const {editProduct,deleteProduct }= ProductStore;
  const delMessageBoxBank = (value:any) => {
  ElMessageBox.confirm(
    `¿Desea eliminar el producto ${value.nombre}?`,
    'Eliminando el producto!',
    {
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
      type: 'warning',
      center: true,
    }
  )
  .then( async () => {
    await deleteProduct(value)
    ElMessage({
      type: 'success',
      message: `Producto ${value.name} eliminado`,
    })
  })
}

</script>