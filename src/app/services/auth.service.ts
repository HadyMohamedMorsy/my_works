import { Injectable, inject } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 private afAuth = inject(AngularFireAuth);
 private router = inject(Router);
  

 login(email : string , password : string){
  this.afAuth.createUserWithEmailAndPassword(email , password).then(()=>{
    localStorage.setItem('token' , 'true');
    this.router.navigate(['/works'])
  } , err =>{
    alert(err.message)
    this.router.navigate(['/login'])
  })
 }
 
 register(email : string , password : string){
  this.afAuth.createUserWithEmailAndPassword(email , password).then(()=>{
    alert('Regesteration successful')
    this.router.navigate(['/login'])
  } , err => {
    alert(err.message)
    this.router.navigate(['/register'])
  })
 }

 logout(){
  this.afAuth.signOut().then(()=>{
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
  } , err =>{
    alert(err.message)
  })
 }
 
}
