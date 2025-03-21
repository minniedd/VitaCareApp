import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MedicalWorkerAppointmentsComponent} from "./medical-worker-appointments/medical-worker-appointments.component";
import {
  MedicalWorkerMakeAnAppointmentComponent
} from "./medical-worker-make-an-appointment/medical-worker-make-an-appointment.component";
import {MedicalWorkerNavBarComponent} from "./medical-worker-nav-bar/medical-worker-nav-bar.component";
import {
  MedicalWorkerScheduledAppointmentsComponent
} from "./medical-worker-scheduled-appointments/medical-worker-scheduled-appointments.component";
import {MedicalWorkerRoutingModule} from "./medical-worker-routing.module";
import {FormsModule} from "@angular/forms";
import {DoctorReviewsComponent} from "../public/reviews/doctor-reviews/doctor-reviews.component";
import {ClinicReviewsComponent} from "../public/reviews/clinic-reviews/clinic-reviews.component";

@NgModule({
  declarations: [
    MedicalWorkerAppointmentsComponent,
    MedicalWorkerMakeAnAppointmentComponent,
    MedicalWorkerScheduledAppointmentsComponent,
    MedicalWorkerNavBarComponent,
  ],
  imports: [
    CommonModule,
    MedicalWorkerRoutingModule,
    FormsModule
  ]
})

export class MedicalWorkerModule{}
