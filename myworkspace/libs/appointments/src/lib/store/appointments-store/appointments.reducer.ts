import { Action, createReducer, on } from '@ngrx/store';
import { ApppointmentsStoreState, initialState } from './appointments.state';
import * as Actions from './appointments.action';

export const appointmentsStoreKey = 'appointments';

const appointmentsReducer = createReducer(
  initialState,
  on(Actions.loadAppointments, (state) => ({ ...state, loading: true })),
  on(Actions.loadAppointmentsSuccess, (state, { appointments }) => ({ ...state, appointments, loading: false })),
  on(Actions.loadAppointmentsError, (state, { error }) => ({ ...state, error: error, loading: false }))
);

export function reducer(state: ApppointmentsStoreState | undefined, action: Action): ApppointmentsStoreState {
  return appointmentsReducer(state, action);
}
