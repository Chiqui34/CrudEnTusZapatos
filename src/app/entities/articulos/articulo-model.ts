export class ArticuloModel {

   id?: number;
   nombre?: string;
   imagen?: any;
   activo?: boolean;
   idCategoria?: number;

   constructor(id?: number, nombre?: string, imagen?: any, activo?: boolean, idCategoria?: number){
      this.id = id;
      this.nombre = nombre;
      this.imagen = imagen;
      this.activo = activo;
      this.idCategoria = idCategoria;
   }

}