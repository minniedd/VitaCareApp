import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PublicLayoutComponent} from "./public-layout/public-layout.component";
import {HomeComponent} from "./home/home.component";
import {
  DoctorScheduledAppointmentsComponent
} from "../doctor/doctor-scheduled-appointments/doctor-scheduled-appointments.component";
import {DoctorReviewsComponent} from "./reviews/doctor-reviews/doctor-reviews.component";
import {ClinicReviewsComponent} from "./reviews/clinic-reviews/clinic-reviews.component";
import {HelpPageComponent} from "./help-page/help-page.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'doctor-reviews', component: DoctorReviewsComponent },
  { path: 'clinic-reviews', component: ClinicReviewsComponent },
  { path: 'help', component:HelpPageComponent},
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
