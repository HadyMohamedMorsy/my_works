import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-forget-paswword',
  standalone: true,
  imports: [CommonModule , FooterComponent , RouterModule , FormsModule , ReactiveFormsModule],
  templateUrl: './forget-paswword.component.html',
  styleUrls: ['./forget-paswword.component.scss']
})
export class ForgetPaswwordComponent {
  authResetPassword = inject(AuthService);

  email !: string;

  forgetPassword(){
    if(this.email == ''){
      alert('there something wrong whit email');
      return
    }
    this.authResetPassword.forgotPassword(this.email);
    this.email = '';
  }
}
