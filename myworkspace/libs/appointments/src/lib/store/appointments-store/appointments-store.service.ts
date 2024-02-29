import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApppointmentsStoreState } from './appointments.state';
import { loadAppointments } from './appointments.action';
import { selectAppointments, selectIsLoading, selectLoadingError } from './appointments.selectors';
import { Observable } from 'rxjs';
import { Appointment } from '../../service/appointment/model/appointment';

@Injectable({
  providedIn: 'root',
})
export class AppointmentsStoreService {
  constructor(private store$: Store<ApppointmentsStoreState>) {}

  loadAppointments(): void {
    this.store$.dispatch(loadAppointments());
  }

  selectAppointments(): Observable<Appointment[] | undefined> {
    return this.store$.select(selectAppointments);
  }

  selectErrors(): Observable<Error | undefined> {
    return this.store$.select(selectLoadingError);
  }

  selectIsLoading(): Observable<boolean> {
    return this.store$.select(selectIsLoading);
  }
}
