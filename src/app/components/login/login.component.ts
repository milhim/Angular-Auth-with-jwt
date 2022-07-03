import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public error = null;
  constructor(private authService: AuthService) { }
  public form = {
    email: null,
    password: null,
  };
  ngOnInit(): void {
  }
  onSubmit() {
    this.authService.login(this.form)
      .subscribe(res => {
        console.log(res);
      },
        error => {
          this.error = this.authService.handleError(error);
        });

  }

}
