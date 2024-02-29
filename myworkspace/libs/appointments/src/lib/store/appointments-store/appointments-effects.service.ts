import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ApppointmentsStoreState } from './appointments.state';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import {
  AppointmentsActions,
  loadAppointments,
  loadAppointmentsError,
  loadAppointmentsSuccess
} from './appointments.action';
import { AppointmentHttpService } from '../../service/appointment/appointment-http.service';
import { Appointment } from '../../service/appointment/model/appointment';

@Injectable()
export class AppointmentsEffects {
  constructor(
    private actions$: Actions<AppointmentsActions>,
    private appointmentsService: AppointmentHttpService
  ) {}

  loadAppointmentsPolicies = createEffect(() =>
    this.actions$.pipe(
      ofType(loadAppointments),
      mergeMap((_) => {
        return this.appointmentsService.getAppointments().pipe(
          map((appointments: Appointment[]) => {
            return loadAppointmentsSuccess({
              appointments,
            });
          }),
          catchError((httpErrorResponse: HttpErrorResponse) =>
            of(
              loadAppointmentsError({
                error: httpErrorResponse,
              })
            )
          )
        );
      })
    )
  );
}
