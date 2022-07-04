import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  handleLoginError(error: any) {
    return error.error.error;
  }
  
  handleRegisterError(error: any) {
    return error.error.errors;
  }
  login(data: any) {
    return this.http.post('http://localhost:8000/api/login', data);
  }
  signup(data:any){
    return this.http.post('http://localhost:8000/api/register',data);
  }
}
