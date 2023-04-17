import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule , FooterComponent , RouterModule , FormsModule , ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  authRegister = inject(AuthService);

  email !: string;
  password !:string;


  register(){
    if(this.email == '' || this.password == ''){
      alert('there something wrong whit email and password check theme again');
      return
    }
    this.authRegister.register(this.email , this.password);

    this.email = '';
    this.password = '';
  }

}
