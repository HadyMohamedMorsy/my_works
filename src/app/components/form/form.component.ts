import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule , Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule , ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit{
  private formBuilder = inject(FormBuilder);
  registerForm!: FormGroup;

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      domain : ['' , Validators.required],
      Server : ['' , Validators.required],
      Username : ['' , Validators.required],
      Password : ['' , Validators.required],
      ConfirmPassword : ['' , Validators.required],
      wpAdmin : ['' , Validators.required],
      wpPassword : ['' , Validators.required],
    },
      {
        validator : this.matchingPasswords('Password' , 'ConfirmPassword')
      }
    )
  }

  onSubmit() {
    console.log(this.registerForm.value);
  }

  matchingPasswords(passwordKey : string , confirmPasswordKey : string){
    return (group : FormGroup) => {
      let password = group.controls[passwordKey];
      let confirmPassword = group.controls[confirmPasswordKey];
      if (password.value !== confirmPassword.value) {
        return confirmPassword.setErrors({ mismatchedPasswords: true })
      }

      return null
    }
  }
}
