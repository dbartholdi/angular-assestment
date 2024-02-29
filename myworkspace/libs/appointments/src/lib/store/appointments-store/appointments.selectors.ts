import { createFeatureSelector, createSelector } from '@ngrx/store';
import { appointmentsStoreKey } from './appointments.reducer';
import { ApppointmentsStoreState } from './appointments.state';
import { Appointment } from '../../service/appointment/model/appointment';

export const selectAppointmentsState = createFeatureSelector<ApppointmentsStoreState>(appointmentsStoreKey);

export const selectAppointments = createSelector(selectAppointmentsState, (state: ApppointmentsStoreState): Appointment[] | undefined => state?.appointments);

export const selectLoadingError = createSelector(
  selectAppointmentsState,
  (state: ApppointmentsStoreState): Error | undefined => state?.error
);

export const selectIsLoading = createSelector(selectAppointmentsState, (state: ApppointmentsStoreState): boolean => state.loading);
