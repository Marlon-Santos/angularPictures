import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const API = 'localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  authenticate(userName: string, password: string) {
    return this.http.post(`http://${API}/user/login`, { userName, password });
  }
}
