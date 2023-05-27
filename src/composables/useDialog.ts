
export const useDialog = {
   dialogIsOpen : ref(false),
   formRegister: ref(false),
   formLogin : ref(true),
   dialogTitle: ref(""),

   openDialog() {
    this.dialogIsOpen.value = true;
  },
  closeDialog() {
    this.dialogIsOpen.value = false;
  },

  showLogin(){
    this.formLogin.value = true;
    this.dialogTitle.value = "Iniciar Sesión"
  },

  hiddenLogin(){
    this.formLogin.value = false;
  },

  showRegister(){
    this.formRegister.value = true;
    this.dialogTitle.value = "Registrarse"
  },

  hiddenRegister(){
    this.formRegister.value = false;
   
  },
}