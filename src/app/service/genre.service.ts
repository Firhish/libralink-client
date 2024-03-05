import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Genre } from '../model/genre';

@Injectable({
  providedIn: 'root'
})
export class GenreService {
  serverHost = "http://localhost:8080/genre";

  constructor(private http: HttpClient) { }

  getGenres(): Observable<Genre[]>{
    return this.http.get<Genre[]>(this.serverHost + "/get-all")
  }
}
