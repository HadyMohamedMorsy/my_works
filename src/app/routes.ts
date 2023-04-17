import {Routes} from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { ForgetPaswwordComponent } from './components/forget-paswword/forget-paswword.component';
import { WorksComponent } from './components/works/works.component';

export const routes: Routes = [
  {
    path : '',
    redirectTo : 'login',
    pathMatch : 'full'
  },
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : 'register',
    component : RegisterComponent
  },
  {
    path : 'verify-email',
    component : VerifyEmailComponent
  },
  {
    path : 'ForgetPaswword',
    component : ForgetPaswwordComponent
  },
  {
    path : 'works',
    component : WorksComponent
  }
];
