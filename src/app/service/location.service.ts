import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Location } from '../model/location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  serverHost = "http://localhost:8080/location";

  constructor(private http: HttpClient) { }

  getLocations(): Observable<Location[]>{
    return this.http.get<Location[]>(this.serverHost + "/get-all")
  }

}

