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

  updateStatus(loanId: number, status: string): Observable<any> {
    return this.http.put(`${this.serverHost}/loan-detail/update-status-by-id/${loanId}`, { status });
  }

  updateReturnDate(loanId: number): Observable<any> {
    const currentDate = new Date().toISOString().split('T')[0]; // Get today's date
    return this.http.put(`${this.serverHost}/loan-detail/update-return-date-by-id/${loanId}`, { returnDate: currentDate });
  }

  // updateReturnDate(loanId: number, returnDate: Date): Observable<any> {
  //   return this.http.put(`${this.serverHost}/loan-detail/update-return-date-by-id/${loanId}`, { returnDate });
  // }

  addLoanDetails(loanDetail:any): Observable<any>{
    return this.http.post(this.serverHost + "/loan-detail/add", loanDetail);
  }

  getAllLoanDetailsByUserId(id:string|null): Observable<LoanDetail[]>{
    return this.http.get<LoanDetail[]>(this.serverHost + "/loan-detail/get-all-by-user-id/" + id);
  } 

  deleteById(id:string):Observable<any>{
    return this.http.delete(this.serverHost + "/loan-detail/delete-by-id/" + id);
  }


  // updateReturnDate(loanId: number, returnDate: Date): Observable<any> {
  //   return this.http.put(`${this.serverHost}/loan-detail/update-return-date-by-id/${loanId}`, { returnDate });
  // }

  // updateReturnDate(loanId: number, returnDate: Date): Observable<any> {
  //   const url = `${this.serverHost}/loan-detail/update-return-date-by-id/${loanId}`;
  //   return this.http.put(url, { returnDate });
  // }
}
