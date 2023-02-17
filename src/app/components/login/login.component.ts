import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  name = "Inicia sesión";

   usuario = {
    email:'',
    pass:''
  }

  constructor(private authservice:AuthService){
  }

  onlogin(){
    const {email, pass} = this.usuario;
    this.authservice.login(email,pass).then(res=>{
      console.log('login normal', res)
    })
    console.log(this.usuario);
  }
  ongooglelogin(){
    const {email, pass} = this.usuario;
    this.authservice.loginwithgoogle().then(res=>{
      console.log('login con google', res)
    })
    console.log(this.usuario);
  }




}
