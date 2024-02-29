import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { appointmentsStoreKey, reducer } from './appointments.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AppointmentsEffects } from './appointments-effects.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, StoreModule.forFeature(appointmentsStoreKey, reducer), EffectsModule.forFeature([AppointmentsEffects])],
})
export class AppointmentsStoreModule {}
