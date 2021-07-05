import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticuloModel } from '../articulo-model';
import { ArticuloService } from '../articulo.service';
import { CategoriaService } from '../../categorias/categoria.service';
import { CategoriaModel } from '../../categorias/categoria-model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-articulo-form',
  templateUrl: './articulo-form.component.html',
  styleUrls: ['./articulo-form.component.css']
})
export class ArticuloFormComponent implements OnInit {

  tituloArticulo = "Formulario artículos";

  error = false;
  sucess = false;

  articuloId: any;
  msgError: any;
  articulo: ArticuloModel = new ArticuloModel();
  modoAlta = true;

  categorias: CategoriaModel [] = [];
  categoria: CategoriaModel = new CategoriaModel();

  valor = this.route.snapshot.paramMap.get('articuloId');

  constructor(private articuloService: ArticuloService,
    private categoriaService: CategoriaService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    if (this.valor) {
      this.modoAlta = false;
      this.articuloId = this.valor;
      this.cargarDatosArticulo(this.articuloId)
    } else {
      this.modoAlta = true;
      this.articulo = new ArticuloModel();
    }

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

  public cargarDatosArticulo(articuloId: number): void {
    this.articuloService.obtenerArticulo(articuloId).subscribe(
      (data: ArticuloModel) => {
        this.articulo = data;
      },
      error => {
        this.msgError = error;
      });

  }

  public guardar(){
    this.articuloService.guardarArticulo(this.articulo).subscribe(
      result => {
        this.articulo = result;
      },
      error => {
        this.msgError = error;        
      }      
    );    
  }

  public procesarImagen(event: any){
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.articulo.imagen = reader.result!.toString().split('base64,',2)[1];
    }
  }

}
