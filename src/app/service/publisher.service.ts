import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Publisher } from '../model/publisher';

@Injectable({
  providedIn: 'root'
})
export class PublisherService {

  serverHost = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  getPublishers(): Observable<Publisher[]>{
    return this.http.get<Publisher[]>(this.serverHost + "/publisher/get-all")
  }

  getPublisherById(id:string): Observable<Publisher>{
    return this.http.get<Publisher>(this.serverHost + "/publisher/get-by-id/"+id)
  }

  addPublisher(publisher: any): Observable<any>{
    return this.http.post(this.serverHost + "/publisher/add", publisher)
  }

  deletePublisher(id:string|null): Observable<any>{
    return this.http.delete<any>(this.serverHost + "/publisher/delete-by-id/" + id)
  }
  
}
