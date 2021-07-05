import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ListaDiapositivaComponent } from './entities/diapositivas/lista-diapositiva/lista-diapositiva.component';
import { DiapositivaFormComponent } from './entities/diapositivas/diapositiva-form/diapositiva-form.component';
import { CategoriaFormComponent } from './entities/categorias/categoria-form/categoria-form.component';
import { ListaCategoriaComponent } from './entities/categorias/lista-categoria/lista-categoria.component';
import { ListaArticuloComponent } from './entities/articulos/lista-diapositiva/lista-articulo.component';
import { ArticuloFormComponent } from './entities/articulos/articulo-form/articulo-form.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ListaDiapositivaComponent,
    DiapositivaFormComponent,
    CategoriaFormComponent,
    ListaCategoriaComponent,
    ListaArticuloComponent,
    ArticuloFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
