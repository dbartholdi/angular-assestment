import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentsStoreService } from '../../store/appointments-store/appointments-store.service';
import { Observable } from 'rxjs';
import { Appointment } from '../../service/appointment/model/appointment';

@Component({
  selector: 'myworkspace-appointments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './appointments.component.html',
  styleUrl: './appointments.component.scss',
})
export class AppointmentsComponent implements OnInit {

  appointments$: Observable<Appointment[] | undefined> = this.appointmentsStoreService.selectAppointments();

  constructor(private appointmentsStoreService: AppointmentsStoreService) {
  }

  ngOnInit(): void {
    // your logic here
    console.log('init');
  }
}
