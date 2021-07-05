import { Component, Input, OnInit } from '@angular/core';
import { SearchCriteria } from 'src/app/shared/filters/SearchCriteria';
import { CategoriaModel } from '../../categorias/categoria-model';
import { CategoriaService } from '../../categorias/categoria.service';
import { ArticuloModel } from '../articulo-model';
import { ArticuloService } from '../articulo.service';

@Component({
  selector: 'app-lista-articulo',
  templateUrl: './lista-articulo.component.html',
  styleUrls: ['./lista-articulo.component.css']
})
export class ListaArticuloComponent implements OnInit {

  public titulo = "Lista artículos";
  msgError: any;

  articuloEliminar: any;
  articulos: ArticuloModel[] = [];
  articulo: ArticuloModel = new ArticuloModel();

  page: number = 0;
  size: number = 5;
  sort: string = "id,asc";

  first: boolean = false;
  last: boolean = false;
  totalPages: number = 0;
  totalElements: number = 0;

  filtros: SearchCriteria[] = [];
  filtroTitulo: string = "";
  filtroCategoria: CategoriaModel = new CategoriaModel();

  categorias: CategoriaModel [] = [];
  

  constructor(private articuloService: ArticuloService,
    private categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.obtenerArticulos(this.page, this.size, this.sort);
    this.leerCategorias();
  }

  private obtenerArticulos(page: number, size: number, sort: string) {
    this.articuloService.obtenerArticulosPaginados(page, size, sort, this.filtros).subscribe(
      (data: any) => {
        this.articulos = data.content;
        this.first = data.first;
        this.last = data.last;
        this.totalElements = data.totalElements;
        this.totalPages = data.totalPages;
      },
      error => {
        this.msgError = error;
      }
    );
  }

  prepararEliminar(articuloId: any) {
    this.articuloEliminar = articuloId;
  }

  eliminar(articuloId: any) {
    this.articuloService.eliminarArticulo(articuloId).subscribe(
      (data: ArticuloModel) => {
        this.articuloService.obtenerArticulosPaginados(this.page, this.size, this.sort, this.filtros).subscribe((data: ArticuloModel[]) => {
          this.articulos = data;
        });
      },
      (err) => {
        this.msgError = "Error:" + err;
      }
    )
  }

  navegarAnterior() {
    this.page = this.page - 1;
    this.obtenerArticulos(this.page, this.size, this.sort);
  }

  navegarSiguiente() {
    this.page = this.page + 1;
    this.obtenerArticulos(this.page, this.size, this.sort);
  }

  buscar() {
    this.montarFiltros();
    this.obtenerArticulos(this.page, this.size, this.sort);
  }

  montarFiltros() {
    this.filtros = [];

    if (this.filtroTitulo !== "") {
      let filTitulo: SearchCriteria = new SearchCriteria();
      filTitulo.key = "nombre";
      filTitulo.value = this.filtroTitulo;
      filTitulo.operation = "MATCH";
      this.filtros.push(filTitulo);
    }

    if (this.filtroCategoria) {
      let filCategoria: SearchCriteria = new SearchCriteria();
      filCategoria.key = "id";
      filCategoria.value = this.filtroCategoria;
      filCategoria.operation = "EQUAL";
      this.filtros.push(filCategoria);
    }
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

}
