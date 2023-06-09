import { defineStore } from "pinia";
import { Product } from "@/interfaces/product.interface";
import { createCrud } from "@/api/crud";
const newProduct= (): Product => ({
  nombre: "",
  descripcion:"",
  unidades: 0,
  precio: 0,
  categorias: [],
  imagenes: {},
  vendedor: 1
  });

  export const useProductStore = defineStore("product", () => {

    const loadingPage = ref(false);
    let mesageBox =ref<{type:"success" | "warning" | "info" | "error",message:string }>(
      {
        type:"error",
        message:"fd"
      }
    );
    let dialogTitle = ref("");
  
    const {
      getAll: loadApi,
      create: createApi,
      update: updateApi,
      deleteOne: deleteApi,
    } = createCrud({ resource: "productos" });

    const {getOne : LoadUserProducts} = createCrud({resource:"productos/usuario"})
    const {getOne : LoadCategoryProducts} = createCrud({resource:"productos/categoria"})

   
  
    const products = ref<Product[]>([]);
    const userProducts = ref<Product[]>([]);
    const currentProduct = ref<Product>(newProduct());
  
    const createNewProduct= () => {
      currentProduct.value = newProduct();
      navigateTo('/products/form')
      dialogTitle.value = "Nuevo Producto:";
    };
  


    const loadProducts = async () => {

      // getUser();
      loadingPage.value = true;
      const data = await loadApi(true);

      console.log(data);
      products.value = data;
    
      loadingPage.value = false;
    };

    const loadProductsUser = async (id:number) => {

      // getUser();
      loadingPage.value = true;
      const data = await LoadUserProducts(id, false);

      console.log(data);
      userProducts.value = data.respuesta;
    
      loadingPage.value = false;
    };

    const loadProductsCategory = async (category:any) => {
      console.log(category);
      const data = await LoadCategoryProducts(category, true)
      console.log(data)
      products.value = data.respuesta;
      navigateTo('/')
    }
  
    const saveProduct = async () => {
      console.log(currentProduct.value);
      if (!currentProduct.value) {
          alert("error")
          return mesageBox;
        }
        if (currentProduct.value.codigo) {
          const response:any = await updateApi(currentProduct.value.codigo, currentProduct.value, false);
          if(!response.error){
            mesageBox.value = {type:'success', message:`El producto ${currentProduct.value.nombre} se ha actualizado correctamente`};

          }
       
        
       
      } else {
        const response:any = await createApi(currentProduct.value, false);
        console.log(response)
        if(response){
          mesageBox.value = {type:'success',message:`El producto ${currentProduct.value.nombre} ha sido creado correctamente`};
          await loadProductsUser(1);
          navigateTo('/products/myProducts')
        }  
      }
      
      
    };
  
    const editProduct = (product: Product) => {
      currentProduct.value = JSON.parse(JSON.stringify(product));
      dialogTitle.value = `Editar producto: ${currentProduct.value.nombre} `;
      navigateTo('/products/form');

    };


    const viewProduct = (product: Product) => {
      currentProduct.value = JSON.parse(JSON.stringify(product));
      dialogTitle.value = `Editar producto: ${currentProduct.value.nombre} `;
      navigateTo('/products/info');

    };
  
  
    const deleteProduct = async (product: Product) => {
      console.log(product)
      currentProduct.value = JSON.parse(JSON.stringify(product));
      if(product.codigo){

        await deleteApi(product.codigo, true);
      }
      await loadProductsUser(1);
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
      loadProductsCategory,
      userProducts,
      mesageBox,
      viewProduct,
    };
  });
