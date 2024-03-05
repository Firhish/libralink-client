import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoanDetail } from '../model/loanDetail';

@Injectable({
  providedIn: 'root'
})
export class LoanDetailService {

  serverHost = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  getLoanDetails(): Observable<LoanDetail[]>{
    return this.http.get<LoanDetail[]>(this.serverHost + "/loan-detail/get-all")
  }
}
