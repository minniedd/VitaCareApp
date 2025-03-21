import {RouterModule, Routes} from "@angular/router";
import {
  DoctorScheduledAppointmentsComponent
} from "./doctor-scheduled-appointments/doctor-scheduled-appointments.component";
import {NgModule} from "@angular/core";
import {ClinicReviewsComponent} from "../public/reviews/clinic-reviews/clinic-reviews.component";
import {DoctorReviewsComponent} from "../public/reviews/doctor-reviews/doctor-reviews.component";


const routes: Routes = [
  { path: '', component: DoctorScheduledAppointmentsComponent,children:[
      { path:'', redirectTo: 'appointments-scheduled-doctor', pathMatch:'full' },
      {path: 'appointments-scheduled-doctor', component: DoctorScheduledAppointmentsComponent},
    ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
