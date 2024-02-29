import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Appointment } from './model/appointment';
import { AppointmentResponse } from './model/appointmentResponse';
import { map } from 'rxjs/operators';
import { parseISO } from 'date-fns';

@Injectable({
  providedIn: 'root'
})
export class AppointmentHttpService {

  constructor(private httpClient: HttpClient) {
  }

  getAppointments(): Observable<Appointment[]> {
    // TODO map appointment response to appointment
    //return this.httpClient.get<AppointmentResponse[]>('./assets/testdata.json');
    return of();
  }
}
