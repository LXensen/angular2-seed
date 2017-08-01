import { AuthService } from './../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  private singin: FormGroup;

  constructor(private fb: FormBuilder,
    private authService: AuthService) {

    this.buildForm();
  }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.signInUser(this.singin.value.email, this.singin.value.password);
  }

  buildForm() {
    this.singin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
}