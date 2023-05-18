import { Category } from "./category.interface";
import { ProductStatus } from "./productStatus.interface";

export interface Product  {
    codigo?: number;
    nombre: string;
    descripcion: string;
    unidades: number;
    precio: number;
    fechaLimite?: Date;
    prioridad?: number;
    disponible?: boolean;
    
   
    categorias: Category[];
    imagenes: { [key: string]: string;};
    estado?: ProductStatus
    // comentario: Comentario[];
     vendedor?: number;


}