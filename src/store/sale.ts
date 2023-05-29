import { defineStore } from "pinia";
import { Sale, SaleDetail } from "@/interfaces/sale.interface";
import { createCrud } from "@/api/crud";
const newSale = (): Sale => ({
  fechaCompra: "",
  totalCompra: 0,
  estado: "CARRITO",
  metodoPago: "EFECTIVO",
  tajetaCompra: undefined,
  usuario: undefined,
});

const newDetailSale = (): SaleDetail => ({
  unidades: 0,
  precioUnitario: 0,
  producto: undefined,
  venta: undefined,
});

export const useSaleStore = defineStore("Sale", () => {
  const loadingPage = ref(false);
  // let mesageBox =ref<{type:"success" | "warning" | "info" | "error",message:string }>(
  //   {
  //     type:"error",
  //     message:"fd"
  //   }
  // );
  let dialogTitle = ref("");

  const { create: createApi } = createCrud({ resource: "ventas/crear" });

  // const {getOne : LoadUserProducts} = createCrud({resource:"productos/usuario"})
  // const {getOne : LoadCategoryProducts} = createCrud({resource:"productos/categoria"})

  const user = ref(null);

  const sales = ref<Sale[]>([]);
  const currentSale = ref<Sale>(newSale());
  const currentSaleDetail = ref<SaleDetail>(newDetailSale());

  const createNewSale = () => {
    currentSale.value = newSale();

    currentSale.value.fechaCompra = getDate();
    currentSale.value.usuario = getUser();
  };

  const createNewDetail = () => {
    currentSaleDetail.value = newDetailSale();
  };

  const getDate = () => {
    const currentDate = new Date();

    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };
  const addNewDetail = () => {
    if (!currentSale.value.detalleVentas?.length) {
      currentSale.value = newSale();
    }
    // currentSaleDetail.value.venta = currentSale.value.codigo;
    currentSale.value.detalleVentas?.push(currentSaleDetail.value);
  };

  const loadSalesUser = async () => {
    // getUser();
    loadingPage.value = true;

    const { getAll: getSaleUser } = createCrud({
      resource: `obtenerCodigo/${user}`,
    });
    const data = await getSaleUser(true);

    console.log(data);
    sales.value = data;

    loadingPage.value = false;
  };

  // const saveSale= async () => {
  //   console.log(currentSale.value);
  //   if (!currentProduct.value) {
  //       alert("error")
  //       return mesageBox;
  //     }
  //     if (currentProduct.value.codigo) {
  //       const response:any = await updateApi(currentProduct.value.codigo, currentProduct.value, false);
  //       if(!response.error){
  //         mesageBox.value = {type:'success', message:`El producto ${currentProduct.value.nombre} se ha actualizado correctamente`};

  //       }

  //   } else {
  //     const response:any = await createApi(currentProduct.value, false);
  //     console.log(response)
  //     if(response){
  //       mesageBox.value = {type:'success',message:`El producto ${currentProduct.value.nombre} ha sido creado correctamente`};
  //       await loadProductsUser(1);
  //       navigateTo('/products/myProducts')
  //     }
  //   }

  // };


  function getUser( ){

  }

  return {
    loadingPage,
    dialogTitle,
  };
});
