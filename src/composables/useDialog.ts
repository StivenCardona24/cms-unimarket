
export const useDialog = {
   dialogIsOpen : ref(false),
   formRegister: ref(false),
   formLogin : ref(true),
   dialogTitle: ref(""),
   size: ref('30%'),

   openDialog() {
    this.dialogIsOpen.value = true;
  },
  closeDialog() {
    this.dialogIsOpen.value = false;
  },

  showLogin(){
    this.size.value = '30%';
    this.formLogin.value = true;
    this.dialogTitle.value = "Iniciar Sesión"
  },

  hiddenLogin(){
    this.formLogin.value = false;
  },

  showRegister(){
    this.size.value = '50%';
    this.formRegister.value = true;
    this.dialogTitle.value = "Registrarse"
  },

  hiddenRegister(){
    this.formRegister.value = false;
   
  },
}