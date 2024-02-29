import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Technician } from './model/technician';

@Injectable({
  providedIn: 'root'
})
export class TechnicianHttpServiceService {

  constructor(private httpClient: HttpClient) {
  }

  getTechnicianById(id: string): Observable<Technician> {
    // TODO map appointment responses to appointment
    return this.httpClient.get<Technician>(`./assets/${id}.json`);
  }
}
