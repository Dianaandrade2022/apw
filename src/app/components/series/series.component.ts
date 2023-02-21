import { Component } from '@angular/core';
import { title } from '../../app.component';
import { tipo } from '../inicio/inicio.model';
import { menu } from '../inicio/inicio.component';
@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent {
title = title
name = 'Series'
  menu: Array<tipo> = Array.from(menu)
}
