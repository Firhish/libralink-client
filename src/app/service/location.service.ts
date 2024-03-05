import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Location } from '../model/location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  serverHost = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  getLocations(): Observable<Location[]>{
    return this.http.get<Location[]>(this.serverHost + "/location/get-all")
  }

  getLocationById(id:string|null): Observable<any>{
    return this.http.get<any>(this.serverHost + "/location/get-by-id/" + id)
  }

  addLocation(location: any): Observable<any>{
    return this.http.post(this.serverHost + "/location/add", location);
  }

  deleteLocation(id:string|null): Observable<any>{
    return this.http.delete<any>(this.serverHost + "/location/delete-by-id/" + id)
  }

}

