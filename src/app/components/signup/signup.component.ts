import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public form = {
    email: null,
    name: null,
    password: null,
    password_confirmation: null

  };
  public error = {
    email: null,
    name: null,
    password: null,
  };

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.authService.signup(this.form)
      .subscribe(
        res => console.log(res),
        error => this.error = this.authService.handleRegisterError(error)
      );
  }

}
