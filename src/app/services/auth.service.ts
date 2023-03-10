import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})


export class AuthService {

  constructor(private afauth:AngularFireAuth) {

  }
  async register (email:string,pass:string){
    try {
      return new Promise ((resolve,reject)=>{
        this.afauth.createUserWithEmailAndPassword(email,pass).then(
          userData => resolve(userData)
        )
      })
    } catch (error) {

    }
  }
  async registerwithgoogle (){
    try {
      return await this.afauth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    } catch (error) {
      console.log(error)
      return null
    }
  }

  async login(email:string, pass:string){
    try {
      return await this.afauth.signInWithEmailAndPassword(email,pass);
    } catch (error) {
      console.log(error)
      return null
    }

  }

  async loginwithgoogle(){
    try {
      return await this.afauth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    } catch (error) {
      console.log(error)
      return null
    }

  }



  async forgotpass (email:string,pass:string){
    try {
      return new Promise ((resolve,reject)=>{
        this.afauth.confirmPasswordReset(pass,pass).then(
          userData => resolve(userData)
        )
      })
    } catch (error) {

    }
  }

  getuserlogged(){
    return this.afauth.authState;
  }
  logout(){
    this.afauth.signOut;
  }
}
