
export interface User  {
    codigo?: number;
    nombre: string;
    cedula: string;
    userName: string;
    password?: string;
    direccion: string;
    email: string;
    telefono?: string;
    fechaNacimiento: Date;
    activo?:boolean
   
    // categorias: Category[];
    // imagenes: { [key: string]: string;};
    // estado?: ProductStatus
    // // comentario: Comentario[];
    //  vendedor?: number;


}