import { Component } from '@angular/core';
import { menu } from './components/inicio/inicio.component';
import { tipo } from './components/inicio/inicio.model';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title:string = 'DAJAC';
  name="Inicio"
  menu: Array<tipo> = Array.from(menu)
  constructor(private authservice:AuthService){
  }
  userlogged = this.authservice.getuserlogged();
  cerrarsesion(){
    this.authservice.logout();
  }
}
export const title = 'DAJAC';
