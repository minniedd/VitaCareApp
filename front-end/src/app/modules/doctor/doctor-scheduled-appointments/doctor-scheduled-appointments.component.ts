import { Component, OnInit } from '@angular/core';
import {
  AppointmentDetailsEndpoint,
  AppointmentDetailsResponse
} from "../../medical-worker/medical-worker-scheduled-appointments/endpoints/appointment-details.endpoint";
import {HttpClient, HttpParams} from "@angular/common/http";
import {
  DoctorScheduledAppointmentsResponse,
  DoctorScheduledAppointmentsResponseDoctor
} from "./doctor-scheduled-appointments-response";
import {MyConfig} from "../../../My-Config";
import {FileEndpoint} from "./endpoints/file.endpoint";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-doctor-scheduled-appointments',
  templateUrl: './doctor-scheduled-appointments.component.html',
  styleUrls: ['./doctor-scheduled-appointments.component.css']
})
export class DoctorScheduledAppointmentsComponent implements OnInit {

  appointments: DoctorScheduledAppointmentsResponseDoctor[]=[];
  selectedAppointment: AppointmentDetailsResponse | null = null;
  selectedFile: File | null = null;
  selectedAppointmentId: number | null = null;
  fileUploaded: boolean = false;
  currentPage: number = 1;
  appointmentsPerPage: number = 10;
  totalAppointments: number = 0;
  searchTerm: string = '';

  constructor(public httpClient:HttpClient,
              private appointmentDetailEndpoint:AppointmentDetailsEndpoint,
              private fileEndpoint:FileEndpoint,
              private snackBar:MatSnackBar) { }

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
      .get<DoctorScheduledAppointmentsResponse>(url, { params })
      .subscribe(
        (response: DoctorScheduledAppointmentsResponse) => {
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

  onFileSelected(event:any,appointmentId:number):void {
    if (this.fileUploaded) {
      this.openSnackBar('A file has already been uploaded for this appointment. Please choose a different appointment to upload a new file.', 'Close');
      return;
  }
    this.selectedFile = event.target.files[0];
    this.selectedAppointmentId = appointmentId;
}

  onUpload(appointmentId: number): void {
    if (this.selectedFile) {
      this.fileEndpoint.uploadFile(this.selectedFile, appointmentId)
        .subscribe(x => {
          console.log('File uploaded:', x);
          this.openSnackBar('File uploaded successfully!', 'Close');
          this.fileUploaded = true;
          this.selectedFile = null;
        }, error => {
          console.error('Upload failed:', error);
          this.openSnackBar('Upload failed. Please try again.', 'Close');
        });
    } else {
      this.openSnackBar('Please select a file before uploading.', 'Close');
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message,action, {
      duration: 3000,
    });
  }

  get totalPages(): number[] {
    return Array(Math.ceil(this.totalAppointments / this.appointmentsPerPage))
      .fill(0)
      .map((_, i) => i + 1);
  }

  softDelete(appointmentID: number) {
    this.httpClient.post(MyConfig.server_address + `/api/SoftDelete?appointmentID=${appointmentID}`, {}).subscribe(x => {
      this.loadAppointments();
    });
  }

}
