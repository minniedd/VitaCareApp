import {NgModule} from "@angular/core";
import {DoctorNavBarComponent} from "./doctor-nav-bar/doctor-nav-bar.component";
import {DoctorScheduledAppointmentsComponent} from "./doctor-scheduled-appointments/doctor-scheduled-appointments.component";
import {CommonModule} from "@angular/common";
import {DoctorRoutingModule} from "./doctor-routing.module";
import {PublicRoutingModule} from "../public/public-routing.module";

@NgModule({
  declarations: [
    DoctorNavBarComponent,
    DoctorScheduledAppointmentsComponent
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    PublicRoutingModule
  ]
})

export class DoctorModule{}
