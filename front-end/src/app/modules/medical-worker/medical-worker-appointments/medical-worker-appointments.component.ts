import { Component, OnInit } from '@angular/core';
import {MyConfig} from "../../../My-Config";
import {AppointmentsGetAllResponse, AppointmentsGetAllResponseAppointment} from "./appointments-getAll-response";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-medical-worker-appointments',
  templateUrl: './medical-worker-appointments.component.html',
  styleUrls: ['./medical-worker-appointments.component.css']
})
export class MedicalWorkerAppointmentsComponent implements OnInit {

  constructor(public httpClient: HttpClient) {

  }
  appointments : AppointmentsGetAllResponseAppointment[]=[];
  approvedAppointments:AppointmentsGetAllResponseAppointment[]=[];

  ngOnInit(): void {
    let url = MyConfig.server_address + `/api/AppointmentGetAllEndpoint/GET-ALL`

    // @ts-ignore
    this.httpClient.get<AppointmentsGetAllResponseAppointment>(url).subscribe((x: AppointmentsGetAllResponse) => {
      // @ts-ignore
        this.appointments = x.appointments;
    },
      error => {
      console.error('Error fetching appointments', error);
      });
  }

  approveAppointment(appointment:AppointmentsGetAllResponseAppointment) {
    const url = MyConfig.server_address + `/api/AppointmentGetAllEndpoint/Approve/${appointment.appointmentID}`;

    this.httpClient.post(url, {}).subscribe(()=>{
      this.appointments = this.appointments.filter(x=>x.appointmentID !== appointment.appointmentID);
    }, error => {
      console.error('Error approving appointment',error);
    });
  }

  rejectAppointment(appointment:AppointmentsGetAllResponseAppointment) {
    const url = MyConfig.server_address + `/api/AppointmentGetAllEndpoint/Reject/${appointment.appointmentID}`;

    this.httpClient.post(url, {}).subscribe(()=>{
      this.appointments = this.appointments.filter(x=>x.appointmentID !== appointment.appointmentID);
    }, error => {
      console.error('Error rejecting appointment',error);
    });
  }
}
