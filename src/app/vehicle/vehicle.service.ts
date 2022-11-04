import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";
import { Vehicle } from "./vehicle";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  private apiUrl: string = environment.baseUrl

  constructor(private http: HttpClient) { }

  getVehicles(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(this.apiUrl);
  }
}
