import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  handleError(error: any) {
    return error.error.error;
  }
  login(data: any) {
    return this.http.post('http://localhost:8000/api/login', data);
  }
}
