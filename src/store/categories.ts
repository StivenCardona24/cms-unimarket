import { defineStore } from "pinia";
import { createCrud } from "@/api/crud";

  export const useCategoryStore = defineStore("Category", () => {
    

    const {getAll : LoadApi } = createCrud({resource: "Categoria"})

    const categories = ref([]);
    const loadCategories = async () => {

        const data = await LoadApi(true);

        console.log(data);
        categories.value = data;
    }



    return {
        categories,
        loadCategories,

      ...useDialog
    };
  });
