import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  serverHost = "http://localhost:8080/user";

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.serverHost + "/get-all")
  }
  
  // salwa
  getUserNameById(id:string): Observable<User>{
    return this.http.get<User>(this.serverHost + "/get-by-id/" + id)
  }

  getUserById(id:string|null): Observable<any>{
    return this.http.get<any>(this.serverHost + "/get-by-id/" + id)
  }

  loginByEmailAndPassword(input:any): Observable<any>{
    return this.http.post(this.serverHost + "/login", input);
  }

  addUser(user: any): Observable<any>{
    return this.http.post(this.serverHost + "/add", user);
  }




}
