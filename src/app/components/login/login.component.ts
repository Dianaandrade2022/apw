import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent{
  name = "Inicia sesión";

   usuario = {
    email:'',
    pass:''
  }
  userlogged = this.authservice.getuserlogged();
  constructor(private authservice:AuthService){
  }

  onlogin(){
    const {email, pass} = this.usuario;
    this.authservice.login(email,pass).then(res=>{
      console.log('login normal', res)
    })
    console.log(this.usuario);
    this.authservice.getuserlogged().subscribe(res=>{
      console.log(res?.email)
    })
  }
  ongooglelogin(){
    const {email, pass} = this.usuario;
    this.authservice.loginwithgoogle().then(res=>{
      console.log('login con google', res)
    })
    console.log(this.usuario);
    this.authservice.getuserlogged().subscribe(res=>{
      console.log(res?.email)
    })
  }




}
