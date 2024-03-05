import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bookgenre } from '../model/bookgenre';

@Injectable({
  providedIn: 'root'
})
export class BookgenreService {

  serverHost = "http://localhost:8080/books-genres";

  constructor(private http: HttpClient) { }

  getBookgenres(): Observable<Bookgenre[]>{
    return this.http.get<Bookgenre[]>(this.serverHost + "/get-all")
  }
  
}
