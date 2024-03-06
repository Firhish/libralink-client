import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../model/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  serverHost = "http://localhost:8080";

  constructor(private http: HttpClient) {}

  getAdmins(): Observable<Admin[]>{
    return this.http.get<Admin[]>(this.serverHost + "/admin/get-all")
  }

  


}
