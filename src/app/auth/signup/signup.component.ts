import { AuthService } from './../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  private singup: FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthService) { 

    this.buildForm();
  }

  ngOnInit() {
  }

  onSubmit() {
    // console.log(this.singup.value.email);
    // console.log(this.singup.value.password);
    this.authService.signUpUser(this.singup.value.email, this.singup.value.password);
    
  }

  buildForm() {
    this.singup = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
}
