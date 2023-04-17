import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule , FooterComponent,FormsModule , RouterModule , ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  private authRegister = inject(AuthService);
  email !: string;
  password !:string;


  login(){
    if(this.email == '' || this.password == ''){
      alert('there something wrong whit email and password check theme again');
      return
    }

    this.authRegister.login(this.email , this.password);

    this.email = '';
    this.password = '';
  }

}
