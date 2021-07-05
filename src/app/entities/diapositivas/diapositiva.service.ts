import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { DiapositivaModel } from './diapositiva-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiapositivaService {

  private BASE_API = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) { }

  public obtenerDiapositivas(): Observable<DiapositivaModel[]> {
    const urlEndPoint = this.BASE_API + 'diapositivas';
    return this.http.get<DiapositivaModel[]>(urlEndPoint);  
  }

  public obtenerDiapositiva(diapositivaId: number): Observable<DiapositivaModel> {
    const urlEndPoint = this.BASE_API + 'diapositiva/' + diapositivaId;
    return this.http.get<DiapositivaModel>(urlEndPoint);
  }

  public guardarDiapositiva(diapositiva: DiapositivaModel): Observable<DiapositivaModel> {
    const urlEndPoint = this.BASE_API + 'diapositiva';
    return this.http.post<DiapositivaModel>(urlEndPoint, diapositiva);  
  }

  public eliminarDiapositiva(diapositivaId: DiapositivaModel): Observable<DiapositivaModel> {
    const urlEndPoint = this.BASE_API + 'diapositiva/' + diapositivaId;
    return this.http.delete(urlEndPoint);
  }

}
