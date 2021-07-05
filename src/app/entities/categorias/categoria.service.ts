import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { CategoriaModel } from './categoria-model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private BASE_API = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) { }

  public obtenerCategorias(): Observable<CategoriaModel[]> {
    const urlEndPoint = this.BASE_API + 'categorias';
    return this.http.get<CategoriaModel[]>(urlEndPoint);  
  }

public obtenerCategoria(categoriaId: number): Observable<CategoriaModel> {
    const urlEndPoint = this.BASE_API + 'categoria/' + categoriaId;
    return this.http.get<CategoriaModel>(urlEndPoint);
  }

  public guardarCategoria(categoria: CategoriaModel): Observable<CategoriaModel> {
    const urlEndPoint = this.BASE_API + 'categoria';
    return this.http.post<CategoriaModel>(urlEndPoint, categoria);
  }

  public eliminarCategoria(categoriaId: CategoriaModel): Observable<CategoriaModel> {
    const urlEndPoint = this.BASE_API + 'categoria/' + categoriaId;
    return this.http.delete(urlEndPoint);
  }

}
