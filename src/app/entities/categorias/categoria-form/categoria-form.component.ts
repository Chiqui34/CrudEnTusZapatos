import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriaModel } from '../categoria-model';
import { CategoriaService } from '../categoria.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.css']
})
export class CategoriaFormComponent implements OnInit {

  tituloCategoria = "Formulario categoría";

  error = false;
  sucess = false;

  categoriaId: any;
  msgError: any;
  categoria: CategoriaModel = new CategoriaModel();
  modoAlta = true;

  valor = this.route.snapshot.paramMap.get('categoriaId');

  constructor(private categoriaService: CategoriaService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    if (this.valor) {
      this.modoAlta = false;
      this.categoriaId = this.valor;
      this.cargarDatosCategoria(this.categoriaId)
    } else {
      this.modoAlta = true;
      this.categoria = new CategoriaModel();
    }

  }

  
  public cargarDatosCategoria(categoriaId: number): void {
    this.categoriaService.obtenerCategoria(categoriaId).subscribe(
      (data: CategoriaModel) => {
        this.categoria = data;
      },
      error => {
        this.msgError = error;
      });

  }

  public guardar(){
    this.categoriaService.guardarCategoria(this.categoria).subscribe(
      result => {
        this.categoria = result;
      },
      error => {
        this.msgError = error;        
      }      
    );    
  }

}
