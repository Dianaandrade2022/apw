import { Component } from '@angular/core';
import { title } from '../../app.component';
import { tipo } from '../inicio/inicio.model';
import { menu } from '../inicio/inicio.component';
@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.scss']
})
export class PeliculasComponent {
title = title
name = 'Animes'
menu: Array<tipo> = Array.from(menu)
}
