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
  this.afAuth.signInWithEmailAndPassword(email , password).then((res)=>{
    localStorage.setItem('token' , 'true');
    if(res.user?.emailVerified == true){
      this.router.navigate(['/works'])
    }else{
      this.router.navigate(['/verify-email']);
    }
  } , err =>{
    alert(err.message)
    this.router.navigate(['/login'])
  })
 }

 register(email : string , password : string){
  this.afAuth.createUserWithEmailAndPassword(email , password).then((res)=>{
    alert('Regeneration successful');
    this.router.navigate(['/login']);
    const user = res.user;
    user!.sendEmailVerification().then(()=>{
      this.router.navigate(['/verify-email']);
    } , (err : any) =>{
      alert('something went wrong');
    })

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


}
