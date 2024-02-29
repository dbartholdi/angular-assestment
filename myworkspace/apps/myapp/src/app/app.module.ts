import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { appRoutes } from './app.routes';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppointmentsStoreModule } from '@myworkspace/appointments';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    RouterOutlet,
    StoreModule.forRoot(
      {},
      {
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: false,
        },
      }
    ),
    EffectsModule.forRoot([]),
    AppointmentsStoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
