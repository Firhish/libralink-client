import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Penalty } from '../model/penalty';

@Injectable({
  providedIn: 'root'
})
export class PenaltyService {

  serverHost = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  getPenalties(): Observable<Penalty[]>{
    return this.http.get<Penalty[]>(this.serverHost + "/penalty/get-all")
  }
}
