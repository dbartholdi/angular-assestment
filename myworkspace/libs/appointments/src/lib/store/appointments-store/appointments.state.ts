import { Appointment } from '../../service/appointment/model/appointment';

export interface ApppointmentsStoreState {
  appointments: Appointment[] | undefined;
  error: Error | undefined;
  loading: boolean;
}

export const initialState: ApppointmentsStoreState = {
  appointments: undefined,
  error: undefined,
  loading: false,
};
