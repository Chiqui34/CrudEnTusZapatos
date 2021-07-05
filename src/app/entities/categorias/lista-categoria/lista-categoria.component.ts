import { Component, Input, OnInit } from '@angular/core';
import { CategoriaModel } from '../categoria-model';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-lista-categoria',
  templateUrl: './lista-categoria.component.html',
  styleUrls: ['./lista-categoria.component.css']
})
export class ListaCategoriaComponent implements OnInit {

  public titulo = "Lista categorias";
  msgError: any;

  categoriaEliminar: any;
  categorias: CategoriaModel[] = [];

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.leerCategorias();
  }

  private leerCategorias(){
    this.categoriaService.obtenerCategorias().subscribe(
      result => {
        this.categorias = result;
      },
      error => {
        this.msgError = error;        
      }      
    );
  }

  prepararEliminar(categoriaId: any){
    this.categoriaEliminar = categoriaId;
  }

  eliminar(categoriaId: any) {
    this.categoriaService.eliminarCategoria(categoriaId).subscribe(
      (data: CategoriaModel) => {
        this.categoriaService.obtenerCategorias().subscribe((data: CategoriaModel[]) => {
          this.categorias = data;
        });
      },
      (err) => {
        this.msgError = "Error:" + err;
      }
    );
  }
}
