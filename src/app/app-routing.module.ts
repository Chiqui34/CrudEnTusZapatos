import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticuloFormComponent } from './entities/articulos/articulo-form/articulo-form.component';
import { ListaArticuloComponent } from './entities/articulos/lista-diapositiva/lista-articulo.component';
import { CategoriaFormComponent } from './entities/categorias/categoria-form/categoria-form.component';
import { ListaCategoriaComponent } from './entities/categorias/lista-categoria/lista-categoria.component';
import { DiapositivaFormComponent } from './entities/diapositivas/diapositiva-form/diapositiva-form.component';
import { ListaDiapositivaComponent } from './entities/diapositivas/lista-diapositiva/lista-diapositiva.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'lista-diapositivas', component: ListaDiapositivaComponent},
  {path: 'diapositiva-form', component: DiapositivaFormComponent},
  {path: 'diapositiva-form/:diapositivaId', component: DiapositivaFormComponent},
  {path: 'lista-categorias', component: ListaCategoriaComponent},
  {path: 'categoria-form', component: CategoriaFormComponent},
  {path: 'categoria-form/:categoriaId', component: CategoriaFormComponent},
  {path: 'articulo-form', component: ArticuloFormComponent},
  {path: 'articulo-form/:articuloId', component: ArticuloFormComponent},
  {path: 'lista-articulos', component: ListaArticuloComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
