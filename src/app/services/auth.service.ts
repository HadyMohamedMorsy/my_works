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
  this.afAuth.signInWithEmailAndPassword(email , password).then(()=>{
    localStorage.setItem('token' , 'true');
    this.router.navigate(['/works'])
  } , err =>{
    alert(err.message)
    this.router.navigate(['/login'])
  })
 }

 register(email : string , password : string){
  this.afAuth.createUserWithEmailAndPassword(email , password).then((res)=>{
    alert('Regeneration successful')
    this.router.navigate(['/login'])
    // this.sendEmailForVarification(res.user);
    console.log(res.user);

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

  forgotPassword(email : string){
    this.afAuth.sendPasswordResetEmail(email).then(()=>{
      this.router.navigate(['verify-email'])
    }, err =>{
      alert(err.message)
    })
  }

  // private sendEmailForVarification(user : any){
  //   user.sendEmailVerification().then((res : any) => {
  //     this.router.navigate(['/verify-email']);
  //   } , (err : any) => {
  //     alert('something  went wrong . Not able to send mail check later again')
  //   })
  // }

}
