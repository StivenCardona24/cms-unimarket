import { defineStore } from "pinia";
import { createCrud } from "@/api/crud";



  export const useAuthStore = defineStore("Auth", () => {
    const dialog = useDialog();
    const loadingPage = ref(false);
    let mesageBox =ref<{type:"success" | "warning" | "info" | "error",message:string }>();
    let dialogTitle = ref("");
  
    // const {
    //   getAll: loadApi,
    //   create: createApi,
    //   update: updateApi,
    //   deleteOne: deleteApi,
    // } = createCrud({ resource: "productos" });

    // const {getOne : LoadUserProducts} = createCrud({resource:"productos/usuario"})
  

  
    const openLogin= () => {
        dialog.openDialog();
    };
  


    return {

      loadingPage,
      dialogTitle,
      mesageBox,
      openLogin,
      ...dialog
    };
  });
