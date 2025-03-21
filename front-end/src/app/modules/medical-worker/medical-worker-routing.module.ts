import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {MedicalWorkerAppointmentsComponent} from "./medical-worker-appointments/medical-worker-appointments.component";
import {
  MedicalWorkerScheduledAppointmentsComponent
} from "./medical-worker-scheduled-appointments/medical-worker-scheduled-appointments.component";
import {
  MedicalWorkerMakeAnAppointmentComponent
} from "./medical-worker-make-an-appointment/medical-worker-make-an-appointment.component";
import {ClinicReviewsComponent} from "../public/reviews/clinic-reviews/clinic-reviews.component";
import {DoctorReviewsComponent} from "../public/reviews/doctor-reviews/doctor-reviews.component";

const routes: Routes = [
  { path: '', component: MedicalWorkerAppointmentsComponent },
  { path: 'appointments', component: MedicalWorkerAppointmentsComponent },
  { path: 'appointments-scheduled', component: MedicalWorkerScheduledAppointmentsComponent },
  { path: 'make-appointment', component: MedicalWorkerMakeAnAppointmentComponent },
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicalWorkerRoutingModule { }
