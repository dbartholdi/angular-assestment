import { Route } from '@angular/router';
import { AppointmentDetailsComponent, AppointmentsComponent } from '@myworkspace/appointments';

export const appRoutes: Route[] = [
  {
    path: 'appointments', component: AppointmentsComponent, children: [
      { path: 'id:', component: AppointmentDetailsComponent }
    ]
  },
];
