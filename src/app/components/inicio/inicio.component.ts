import { Component } from '@angular/core';
import { title } from 'src/app/app.component';
import { tipo } from './inicio.model';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {
  title = title;
  menu: Array<tipo> = Array.from(menu)
}
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
