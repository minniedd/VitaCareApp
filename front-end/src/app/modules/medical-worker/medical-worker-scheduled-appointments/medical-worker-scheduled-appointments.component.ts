import { Component, OnInit } from '@angular/core';
import {
  MedicalWorkerScheduledAppointmentsResponse,
  MedicalWorkerScheduledAppointmentsResponseMedicalWorker
} from "./medical-worker-scheduled-appointments-response";
import {MyConfig} from "../../../My-Config";
import {HttpClient, HttpParams} from "@angular/common/http";
import {AppointmentDetailsEndpoint, AppointmentDetailsResponse} from "./endpoints/appointment-details.endpoint";
import {
  DoctorScheduledAppointmentsResponse
} from "../../doctor/doctor-scheduled-appointments/doctor-scheduled-appointments-response";

@Component({
  selector: 'app-medical-worker-scheduled-appointments',
  templateUrl: './medical-worker-scheduled-appointments.component.html',
  styleUrls: ['./medical-worker-scheduled-appointments.component.css']
})
export class MedicalWorkerScheduledAppointmentsComponent implements OnInit {

  appointments: MedicalWorkerScheduledAppointmentsResponseMedicalWorker[]=[];
  selectedAppointment: AppointmentDetailsResponse | null = null;
  currentPage: number = 1;
  appointmentsPerPage: number = 10;
  totalAppointments: number = 0;
  searchTerm: string = '';

  constructor(public httpClient:HttpClient,private appointmentDetailEndpoint:AppointmentDetailsEndpoint) { }

  ngOnInit(): void {
    this.loadAppointments();
  }

  loadAppointments(): void {
    let url = `${MyConfig.server_address}/api/AppointmentSeachEndpoint/SEARCH`;
    let params = new HttpParams()
      .set('Search', this.searchTerm)
      .set('PageNumber', this.currentPage.toString())
      .set('PageSize', this.appointmentsPerPage.toString());

    this.httpClient
      .get<MedicalWorkerScheduledAppointmentsResponse>(url, { params })
      .subscribe(
        (response: MedicalWorkerScheduledAppointmentsResponse) => {
          this.appointments = response.appointments;
          this.totalAppointments = response.totalCount;
        },
        (error) => {
          console.error('Error fetching appointments:', error);
        }
      );
  }

  searchDate($event: Event) {
    this.searchTerm = ($event.target as HTMLInputElement).value;
    this.currentPage = 1;
    this.loadAppointments();
  }

  rejectAppointment(appointment: MedicalWorkerScheduledAppointmentsResponseMedicalWorker) {
    const url = MyConfig.server_address + `/api/AppointmentSeachEndpoint/Reject/${appointment.appointmentID}`;

    this.httpClient.post(url, {}).subscribe(()=>{
      this.appointments = this.appointments.filter(x=>x.appointmentID !== appointment.appointmentID);
    }, error => {
      console.error('Error rejecting appointment',error);
    });
  }

  changePage(page: number): void {
    this.currentPage = page;
    this.loadAppointments();
  }

  showDetails(appointmentID: number) {
    this.appointmentDetailEndpoint.obradi(appointmentID).subscribe(
      (data: AppointmentDetailsResponse) => {
        this.selectedAppointment = data;

      },
      (error) => {
        console.error('Error fetching appointment details:', error);
      }
    );
  }

  closeModal() {
    this.selectedAppointment = null;
  }

  get totalPages(): number[] {
    return Array(Math.ceil(this.totalAppointments / this.appointmentsPerPage))
      .fill(0)
      .map((_, i) => i + 1);
  }
}
