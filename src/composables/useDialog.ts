export const useDialog = () => {
  const dialogIsOpen = ref(false);

  const openDialog = () => {
    dialogIsOpen.value = true;
  }

  const closeDialog = () => {
    dialogIsOpen.value = false;
  }

  return {
    dialogIsOpen,
    openDialog,
    closeDialog,
  }
}