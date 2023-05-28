import { defineStore } from "pinia";
import { createCrud } from "@/api/crud";

import {Login} from "@/interfaces/auth.interface";

const newLogin= (): Login => ({
  email: "",
  password: ""

  });


  export const useAuthStore = defineStore("Auth", () => {

    
    const currentLogin = ref<Login>(newLogin());

    const Token = ref();
    const isLogged = ref(false);
      
    const loadingPage = ref(false);
    let mesageBox =ref<{type:"success" | "warning" | "info" | "error",message:string }>();

    const {
      create: postLogin,
    } = createCrud({ resource: "auth/login" });



   
  const login = async () => {
    const  data  = await postLogin(currentLogin.value);
    console.log(data)
     
   if ( data.response && data.response.data.error) {
      ElNotification({
        title: 'Warning',
        message: `${data.response.data.respuesta}`,
        type: 'warning',
      });
      return false;
    }

    Token.value = data.respuesta.token;
    saveToken(Token.value);
    ElNotification({
      title: 'Success',
      message: 'Has iniciado sesión correctamente',
      type: 'success',
    });

    return true;
  
    }


    const openLogin = () => {
    currentLogin.value = newLogin();
     useDialog.hiddenRegister();
     useDialog.showLogin();
     useDialog.openDialog();
    };
  



    const saveToken = (token: string) => {
      console.log(token)
      sessionStorage.removeItem('TOKEN_KEY');
      sessionStorage.setItem('TOKEN_KEY', token);
      isLogged.value = true
    }

    const getToken = () =>{
      console.log('dfjdfj')
      if(sessionStorage.getItem('TOKEN_KEY')){
        console.log('entro')
        Token.value = sessionStorage.getItem('TOKEN_KEY');
        isLogged.value = true

      }
      console.log(Token.value)
      
    }

    const logout = () => {
      sessionStorage.clear();
      Token.value = null;
      isLogged.value = false;
    }

  

    return {

      loadingPage,
      mesageBox,
      openLogin,
      login,
      currentLogin,
      isLogged,
      logout,
      getToken,
      ...useDialog
 
    };
  });
