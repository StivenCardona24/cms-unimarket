import axios from "axios";

interface CrudOptions {
  resource: string;
  errorGetAll?: (error: any) => void;
  errorGetOne?: (error: any) => void;
  errorCrete?: (error:any) => void;
  errorUpdate?: (error: any) => void;
  errorDelete?: (error: any) => void;
}
export const createCrud = (options: CrudOptions) => {
  const api = axios.create({
    baseURL: `https://unimarket-production-54f8.up.railway.app/api/${options.resource}`,
    headers: {
      "Content-Type": "application/json",
    },
  });

  const skipToken = {
    skipToken: false
  }

  api.interceptors.request.use((config) => {
    console.log("entro aqui", config)
    config.headers.Authorization = ''
    const token = sessionStorage.getItem('TOKEN_KEY')
    if (token && !config.skipToken) {
      console.log("entro aqui2")
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  })

  const getAll = async (token: boolean, data?: any) => {
 
      skipToken.skipToken = token;
  
    try {
      if(data){
        
        const response = await api.get("/", { params: data, skipToken});
        return response.data;
      }
        const response = await api.get('', skipToken);
      
      return response.data;
    } catch (error) {
      options.errorGetAll?.(error);
      return error;
    }
  };

  const getOne = async (id: number, token: boolean) => {
    
    skipToken.skipToken = token;
    try {
      const response = await api.get(`/${id}`, skipToken);
      return response.data;
    } catch (error) {
      options.errorGetOne?.(error);
      return error;
    }
  };

  const create = async (data: any, token: boolean) => {
    skipToken.skipToken = token;
    try {
      const response = await api.post("", data, skipToken);
      return response.data;
    } catch (error) {
      options.errorCrete?.(error);
      return error;
    }
  };

  const update = async (id: number, data: any, token: boolean) => {
    skipToken.skipToken = token;
    try {
      const response = await api.put(`/${id}`, data, skipToken);
      return response.data;
    } catch (error) {
      options.errorUpdate?.(error);
      return error;
    }
  };

  const deleteOne = async (id: number, token: boolean) => {
    skipToken.skipToken = token;
    try {
      const response = await api.delete(`/${id}`, skipToken);
      return response.data;
    } catch (error) {
      options.errorDelete?.(error);
      return error;
    }
  };

 

  return { getAll, getOne, create, update, deleteOne };
};
