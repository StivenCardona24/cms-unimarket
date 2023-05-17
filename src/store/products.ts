import { defineStore } from "pinia";
import { Product } from "@/interfaces/product.interface";
import { createCrud } from "@/api/crud";
const newProduct= (): Product => ({
  nombre: "",
  descripcion:"",
  unidades: 0,
  precioUnitario: 0,
  categorias: [],
  imagenes: new Map<string, string>(),
  usuarioPropietario: 1
  });

  export const useProductStore = defineStore("product", () => {

    const loadingPage = ref(false);
    let mesageBox =ref<{type:"success" | "warning" | "info" | "error",message:string }>();
    let dialogTitle = ref("");
  
    const {
      getAll: loadApi,
      create: createApi,
      update: updateApi,
      deleteOne: deleteApi,
    } = createCrud({ resource: "productos" });

    const {getOne : LoadUserProducts} = createCrud({resource:"productos/usuario"})
  
    const products = ref<Product[]>([]);
    const currentProduct = ref<Product>(newProduct());
  
    const createNewProduct= () => {
      currentProduct.value = newProduct();
      navigateTo('/products/form')
      dialogTitle.value = "Nuevo Producto:";
    };
  


    const loadProducts = async () => {

      // getUser();
      loadingPage.value = true;
      const data = await loadApi();

      console.log(data);
      products.value = data.respuesta;
    
      loadingPage.value = false;
    };

    const loadProductsUser = async (id:number) => {

      // getUser();
      loadingPage.value = true;
      const data = await LoadUserProducts(id);

      console.log(data);
      products.value = data.respuesta;
    
      loadingPage.value = false;
    };
  
    const saveProduct = async () => {
      if (!currentProduct.value) {
          alert("error")
          return mesageBox;
        }
        if (currentProduct.value.codigo) {
          const response:any = await updateApi(currentProduct.value.codigo, currentProduct.value);
          if(!response.error){
            mesageBox.value = {type:'success', message:`El producto ${currentProduct.value.nombre} se ha actualizado correctamente`};
          }
       
        
       
      } else {
        const response:any = await createApi(currentProduct.value);
        if(currentProduct.value.codigo){
          mesageBox.value = {type:'success',message:`El producto ${currentProduct.value.nombre} ha sido creado correctamente`};
        }  
      }
      await loadProducts();
      
    };
  
    const editProduct = (product: Product) => {
      currentProduct.value = JSON.parse(JSON.stringify(product));
      dialogTitle.value = `Editar producto: ${currentProduct.value.nombre} `;

    };
  
    const deleteProduct = async (product: Product) => {
      currentProduct.value = JSON.parse(JSON.stringify(product));
      if(currentProduct.value.codigo){

        await deleteApi(currentProduct.value.codigo);
      }
      await loadProducts();
    };
    return {
      products,
      currentProduct,
      createNewProduct,
      saveProduct,
      editProduct,
      loadProducts,
      loadProductsUser,
      deleteProduct,
      loadingPage,
      dialogTitle,
      mesageBox,
    };
  });
