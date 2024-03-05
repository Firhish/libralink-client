import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Publisher } from '../model/publisher';

@Injectable({
  providedIn: 'root'
})
export class PublisherService {

  serverHost = "http://localhost:8080/publisher";

  constructor(private http: HttpClient) { }

  getPublishers(): Observable<Publisher[]>{
    return this.http.get<Publisher[]>(this.serverHost + "/get-all")
  }
  
}
