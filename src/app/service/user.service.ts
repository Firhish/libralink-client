import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  serverHost = "http://localhost:8080";

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.serverHost + "/user/get-all")
  }
}
