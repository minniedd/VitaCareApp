import { Component, OnInit } from '@angular/core';
import {TimeSlot} from "./time-slots-model";
import {
  DoctorsGetallEndpoint,
  DoctorsGetAllResponseDoctors
} from "./endpoints/doctors-getall.endpoint";
import {ActivatedRoute} from "@angular/router";
import {AppointmentAddEndpoint, AppointmentAddRequest} from "./endpoints/appointment-add.endpoint";
import {
    ExaminationsGetallEndpoint,
    ExaminationsGetAllResponseExamination
} from "./endpoints/examinations-getall.endpoint";
import {TimeSlotEndpoint} from "./endpoints/time-slot.endpoint";
import { ChangeDetectorRef } from '@angular/core';
import {GenderGetAllEndpoint, GenderGetAllResponseGender} from "./endpoints/gender-getall.endpoint";
import {MatSnackBar} from "@angular/material/snack-bar";




@Component({
  selector: 'app-medical-worker-make-an-appointment',
  templateUrl: './medical-worker-make-an-appointment.component.html',
  styleUrls: ['./medical-worker-make-an-appointment.component.css']
})

export class MedicalWorkerMakeAnAppointmentComponent implements OnInit {
  newAppointment: AppointmentAddRequest = {
    firstName: '',
    lastName: '',
    birthDate: '',
    genderID: 0,
    telephoneNumber: '',
    address: '',
    country: '',
    allegries: '',
    emergencyContact: '',
    examinationID: 0,
    appointmentDate: '',
    time: '',
    doctorID: 0,
    notes: ''
  };
  doctorsPodaci: DoctorsGetAllResponseDoctors[] = [];
  examinationsPodaci: ExaminationsGetAllResponseExamination[] = [];
  genderPodaci: GenderGetAllResponseGender[]=[];
  timeSlots: TimeSlot[] = [];


  constructor(public activatedRoute: ActivatedRoute,
              private doctorsGetAllEndpoint: DoctorsGetallEndpoint,
              private AppointmentAddEndpoint: AppointmentAddEndpoint,
              private examinationGetAllEndpoint: ExaminationsGetallEndpoint,
              private timeSlotEndpoint: TimeSlotEndpoint,
              private cdr: ChangeDetectorRef,
              private genderGetAllEndpoint:GenderGetAllEndpoint,
              private snackBar:MatSnackBar) {
  }

  ngOnInit(): void {
    this.getDoctors();
    this.getExaminations();
    this.getGenders();
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message,action, {
      duration: 3000,
    });
  }

  getDoctors() {
    this.doctorsGetAllEndpoint.obradi().subscribe(x => {
      this.doctorsPodaci = x.doctors
    });
  }

  getExaminations() {
    this.examinationGetAllEndpoint.obradi().subscribe(x => {
      this.examinationsPodaci = x.examinations
    });
  }

  getGenders(){
    this.genderGetAllEndpoint.obradi().subscribe(x => {
      this.genderPodaci = x.genders
    });
  }

  onDateChange(event: any): void {
    const date = event.target.value;
    console.log('Date changed:', date);  // Debug line
    this.loadTimeSlots(date);
  }

  submitAppointment() {
    if (this.isFormValid()) {
      this.AppointmentAddEndpoint.obradi(this.newAppointment!).subscribe(x => {
        this.clearForm();
        this.openSnackBar('Appointment successfully submitted!', 'Close');

        setTimeout(() => {
          console.log("All Good");
        }, 50);
      }, error => {
        this.openSnackBar(`${error}`, 'Close');
      });
    } else {
      this.openSnackBar('Please fill in all the required input fields (*)!', 'Close');
    }
  }

  isFormValid(): boolean {
    return Object.values(this.newAppointment).every(field => field !== null && field !== '');
  }


  private clearForm() {
    this.newAppointment = {
      firstName: '',
      lastName: '',
      birthDate: '',
      genderID: 0,
      telephoneNumber: '',
      address: '',
      country: '',
      allegries: '',
      emergencyContact: '',
      examinationID: 0,
      appointmentDate: '',
      time: '',
      doctorID: 0,
      notes: ''
    };
  }

  private loadTimeSlots(date: string) {
    this.timeSlotEndpoint.getAvailableTimeSlot(date).subscribe(data => {
      console.log('Loaded time slots:', data);
      this.timeSlots = data;
      this.cdr.detectChanges();
    }, error => {
      console.error('Error loading time slots:', error);
    });
  }
}
