import { Card } from "./Card.interfaces";
import { Category } from "./category.interface";
import { Product } from "./product.interface";
import { ProductStatus } from "./productStatus.interface";
import { User } from "./user.interface";

export interface Sale  {
    codigo?: number;
    fechaCompra: string;
    totalCompra: number;
    estado: string;
    metodoPago: string;
    detalleVentas?: SaleDetail[];
    tajetaCompra?: number | Card;
    usuario: number | User;
    

}

export interface SaleDetail {
    codigo?: number;
    unidades: number;
    precioUnitario: number;
    producto: number | Product;
    venta: number | Sale;
}