import { defineStore } from "pinia";
import { createCrud } from "@/api/crud";



  export const useAuthStore = defineStore("Auth", () => {
      
    const loadingPage = ref(false);
    let mesageBox =ref<{type:"success" | "warning" | "info" | "error",message:string }>();

    // const {
    //   getAll: loadApi,
    //   create: createApi,
    //   update: updateApi,
    //   deleteOne: deleteApi,
    // } = createCrud({ resource: "productos" });

    // const {getOne : LoadUserProducts} = createCrud({resource:"productos/usuario"})
  


    const openLogin = () => {
          
   
     useDialog.hiddenRegister();
     useDialog.showLogin();
     useDialog.openDialog();
    };
  


    return {

      loadingPage,
      mesageBox,
      openLogin,
      ...useDialog
 
    };
  });
