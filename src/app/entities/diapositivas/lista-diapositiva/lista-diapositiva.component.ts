import { Component, Input, OnInit } from '@angular/core';
import { DiapositivaModel } from '../diapositiva-model';
import { DiapositivaService } from '../diapositiva.service';

@Component({
  selector: 'app-lista-diapositiva',
  templateUrl: './lista-diapositiva.component.html',
  styleUrls: ['./lista-diapositiva.component.css']
})
export class ListaDiapositivaComponent implements OnInit {

  public titulo = "Lista diapositivas";
  msgError: any;

  diapositivaEliminar: any;
  diapositivas: DiapositivaModel[] = [];

  constructor(private diapositivaService: DiapositivaService) { }

  ngOnInit(): void {
    this.leerDiapositivas();
  }

  private leerDiapositivas(){
    this.diapositivaService.obtenerDiapositivas().subscribe(
      result => {
        this.diapositivas = result;
      },
      error => {
        this.msgError = error;        
      }      
    );
  }

  prepararEliminar(diapositivaId: any){
    this.diapositivaEliminar = diapositivaId;
  }

  eliminar(diapositivaId: any) {
    this.diapositivaService.eliminarDiapositiva(diapositivaId).subscribe(
      (data: DiapositivaModel) => {
        this.diapositivaService.obtenerDiapositivas().subscribe((data: DiapositivaModel[]) => {
          this.diapositivas = data;
        });
      },
      (err) => {
        this.msgError = "Error:" + err;
      }
    )
  }
}
