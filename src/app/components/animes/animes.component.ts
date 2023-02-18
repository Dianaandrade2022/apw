import { Component } from '@angular/core';
import { title } from '../../app.component';
import { tipo } from '../inicio/inicio.model';
import { menu } from '../inicio/inicio.component';
@Component({
  selector: 'app-animes',
  templateUrl: './animes.component.html',
  styleUrls: ['./animes.component.scss']
})


export class AnimesComponent {
title = title
name = 'Animes'
menu: Array<tipo> = Array.from(menu)
}
