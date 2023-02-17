import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {

  usuario = {
    email:'',
    pass:''
  }
  constructor(private authservice:AuthService){
  }
name = "Registrate";

onregister(){
  const {email,pass} = this.usuario;
this.authservice.register(email,pass)
console.log(this.usuario)
}
ongoogleregister(){
  const {email,pass} = this.usuario;
this.authservice.registerwithgoogle(email,pass)
console.log(this.usuario)
}
}
