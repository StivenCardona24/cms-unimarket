import { defineStore } from "pinia";
import { createCrud } from "@/api/crud";
import axios from "axios";

export const useImageStore = defineStore("image", () => {
  const loadingPage = ref(false);
  let mesageBox = ref<{
    type: "success" | "warning" | "info" | "error";
    message: string;
  }>();

  const url = ref();

  const { create: createApi, deleteOne: deleteApi } = createCrud({
    resource: "imagenes",
  });

  const saveImage = async (file: any) => {

    if (!file) {
      alert("error");
      return null
    }    
    const token = sessionStorage.getItem('TOKEN_KEY')
    const api  = axios.create({
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    });
    await api.post("https://unimarket-production-54f8.up.railway.app/api/imagenes", file)
    .then(response => {
      // Manejar la respuesta del backend aquí
      mesageBox.value = {
        type: "success",
        message: `la imagenes de ha guardado correctamente`,
      };
      console.log(response.data.respuesta.url);
      console.log('Archivo cargado con éxito', response.data);
      url.value = response.data.respuesta.url;
      console.log('Archivo cargado con éxito', url.value);
    })
    .catch(error => {
      // Manejar errores aquí
      mesageBox.value = {
        type: "error",
        message: `Error al cargar el archivo`,
      };
      console.log(error);
      console.error('Error al cargar el archivo', error);
    });

  };

  

  // const deleteProduct = async (product: Product) => {
  //   console.log(product)
  //   currentProduct.value = JSON.parse(JSON.stringify(product));
  //   if(product.codigo){

  //     await deleteApi(product.codigo);
  //   }
  //   await loadProductsUser(1);
  // };
  return {
    saveImage,
    loadingPage,

    mesageBox,
    url
  };
});
