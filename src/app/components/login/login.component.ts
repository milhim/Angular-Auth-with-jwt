import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public error = null;
  constructor(private authService: AuthService,private token:TokenService) { }
  public form = {
    email: null,
    password: null,
  };
  ngOnInit(): void {
  }
  onSubmit() {
    this.authService.login(this.form)
      .subscribe(res => {
        this.handleResponse(res);
      },
        error => {
          this.error = this.authService.handleLoginError(error);
        });
  }
  handleResponse(data:any){
this.token.handle(data.access_token);
  }

}
