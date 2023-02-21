import { Component } from '@angular/core';
import { title } from 'src/app/app.component';
import { tipo } from './inicio.model';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {
  title = title;
  name="Inicio"

}
//exportamos datos que usaremos en los demás componentes
export const menu: tipo[]= [
 {
  name: 'Inicio',
  ruta:'/inicio'
 },
 {
  name: 'Peliculas',
  ruta:'/peliculas'
 },
 {
  name: 'Series',
  ruta:'/series'
 },
 {
  name: 'Animes',
  ruta:'/animes'

 }
]

