import { Category } from "./category.interface";
import { ProductStatus } from "./productStatus.interface";

export interface Product  {
    codigo?: number;
    nombre: string;
    descripcion: string;
    unidades: number;
    precioUnitario: number;
    fechaLimite?: Date;
    prioridad?: number;
    disponible?: boolean;
    
   
    categorias: Category[];
    imagenes: Map<string, string>;
    estado?: ProductStatus
    // comentario: Comentario[];
     usuarioPropietario?: number;


}