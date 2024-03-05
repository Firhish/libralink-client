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

  updatePaymentStatusById(penaltyId: number): Observable<Penalty> {
    return this.http.put<Penalty>(`${this.serverHost}/penalty/update-payment-status-by-id/${penaltyId}`, null);
  }

  // updatePaymentStatusById(penaltyId: number, paymentStatus: Boolean): Observable<any> {
  //   return this.http.put(`${this.serverHost}/penalty/update-payment-status-by-id/${penaltyId}`, { paymentStatus });
  // }

}
