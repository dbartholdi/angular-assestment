import { createAction, props, union } from '@ngrx/store';
import { Appointment } from '../../service/appointment/model/appointment';

export const loadAppointments = createAction('[Appointments] Load Appointments');
export const loadAppointmentsSuccess = createAction('[Appointments] Load Appointments success', props<{ appointments: Appointment[] }>());
export const loadAppointmentsError = createAction('[Appointments] Load Appointments error', props<{ error: Error }>());

const all = union({
  loadAppointments: loadAppointments,
  loadInsurancePoliciesSuccess: loadAppointmentsSuccess,
  loadInsurancePoliciesError: loadAppointmentsError,
});
export type AppointmentsActions = typeof all;
