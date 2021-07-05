import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ArticuloModel } from './articulo-model';
import { SearchCriteria } from 'src/app/shared/filters/SearchCriteria';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  private BASE_API = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) { }

  public obtenerArticulosPaginados(page: number, size: number, sort: string, filtros: SearchCriteria[]): Observable<ArticuloModel[]> {

    const paramPageable = "?page=" + page + "&size=" + size + "&sort=" + sort;    
    const urlEndPoint = this.BASE_API + 'articulos-spec' + paramPageable;
  
    return this.http.post<ArticuloModel[]>(urlEndPoint, filtros);
  }

  public obtenerArticulo(articuloId: number): Observable<ArticuloModel> {
    const urlEndPoint = this.BASE_API + 'articulo/' + articuloId;
    return this.http.get<ArticuloModel>(urlEndPoint);
  }

  public guardarArticulo(articulo: ArticuloModel): Observable<ArticuloModel> {
    const urlEndPoint = this.BASE_API + 'articulo';
    return this.http.post<ArticuloModel>(urlEndPoint, articulo);
  }

  public eliminarArticulo(articuloId: ArticuloModel): Observable<ArticuloModel> {
    const urlEndPoint = this.BASE_API + 'articulo/' + articuloId;
    return this.http.delete(urlEndPoint);
  }

}
