import { defineStore } from "pinia";
import { createCrud } from "@/api/crud";
import { User } from '@/interfaces/user.interface'

const newUser= (): User => ({
    nombre: "",
    cedula: "",
    userName: "",
    password: "",
    direccion: "",
    email:"",
    telefono: "",
    fechaNacimiento: '',

    });

  export const useUserStore = defineStore("User", () => {
    
   
    const loadingPage = ref(false);
    let mesageBox =ref<{type:"success" | "warning" | "info" | "error",message:string }>();


    const currentUser = ref<User>(newUser());
    const openRegister= () => {
        currentUser.value = newUser();
     
        useDialog.hiddenLogin()
        useDialog.showRegister();
        useDialog.openDialog();
    };
  
    // const {
    //   getAll: loadApi,
    //   create: createApi,
    //   update: updateApi,
    //   deleteOne: deleteApi,
    // } = createCrud({ resource: "productos" });

    // const {getOne : LoadUserProducts} = createCrud({resource:"productos/usuario"})
  

  
  


    return {

      loadingPage,
      mesageBox,
      currentUser,
      openRegister,
      ...useDialog
    };
  });
