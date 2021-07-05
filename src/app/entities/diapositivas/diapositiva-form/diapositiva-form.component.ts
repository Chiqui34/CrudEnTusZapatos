import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DiapositivaModel } from '../diapositiva-model';
import { DiapositivaService } from '../diapositiva.service';
import { CategoriaService } from '../../categorias/categoria.service';
import { CategoriaModel } from '../../categorias/categoria-model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-diapositiva-form',
  templateUrl: './diapositiva-form.component.html',
  styleUrls: ['./diapositiva-form.component.css']
})
export class DiapositivaFormComponent implements OnInit {

  tituloFormulario = "Formulario diapositiva";

  error = false;
  sucess = false;

  diapositivaId: any;
  msgError: any;
  diapositiva: DiapositivaModel = new DiapositivaModel();
  modoAlta = true;

  categorias: CategoriaModel [] = [];

  valor = this.route.snapshot.paramMap.get('diapositivaId');

  constructor(private diapositivaService: DiapositivaService,
    private categoriaService: CategoriaService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    if (this.valor) {
      this.modoAlta = false;
      this.diapositivaId = this.valor;
      this.cargarDatosDiapositiva(this.diapositivaId)
    } else {
      this.modoAlta = true;
      this.diapositiva = new DiapositivaModel();
    }

    this.categoriaService.obtenerCategorias().subscribe(
      result => {
        this.categorias = result;
      }
    );
  }

  public cargarDatosDiapositiva(diapositivaId: number): void {
    this.diapositivaService.obtenerDiapositiva(diapositivaId).subscribe(
      (data: DiapositivaModel) => {
        this.diapositiva = data;
      },
      error => {
        this.msgError = error;
      });

  }

  public guardar(){
    this.diapositivaService.guardarDiapositiva(this.diapositiva).subscribe(
      result => {
        this.diapositiva = result;
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
      this.diapositiva.imagen = reader.result!.toString().split('base64,',2)[1];
    }
  }

}
