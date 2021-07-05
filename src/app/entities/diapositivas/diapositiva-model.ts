export class DiapositivaModel {

   id?: number;
   titulo?: string;
   imagen?: any;
   activo?: boolean;

   constructor(id?: number, titulo?: string, imagen?: any, activo?: boolean){
      this.id = id;
      this.titulo = titulo;
      this.imagen = imagen;
      this.activo = activo;
   }

}