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
  try {
   const {email, pass} = this.usuario;
   this.authservice.register(email,pass).then(res=>{
     console.log('login normal', res)
   })
   console.log(this.usuario);
   this.authservice.getuserlogged().subscribe(res=>{
     console.log(res?.email)
   })
  } catch (error) {
   console.log(error)
  }
 }
 ongoogleregister(){
   try {
     const {email, pass} = this.usuario;
     this.authservice.registerwithgoogle().then(res=>{
       console.log('login con google', res)
     })
     console.log(this.usuario);
     this.authservice.getuserlogged().subscribe(res=>{
       console.log(res?.email)
     })

   } catch (error) {
     console.log(error)
   }
 }

}
