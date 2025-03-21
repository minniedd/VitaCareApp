import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { HomeComponent } from './home/home.component';
import { PublicLayoutComponent } from './public-layout/public-layout.component';
import { ClinicReviewsComponent } from './reviews/clinic-reviews/clinic-reviews.component';
import { DoctorReviewsComponent } from './reviews/doctor-reviews/doctor-reviews.component';
import { HelpPageComponent } from './help-page/help-page.component';
import {ReactiveFormsModule} from "@angular/forms";
import {GoogleMapsModule} from "@angular/google-maps";


@NgModule({
  declarations: [
    HomeComponent,
    PublicLayoutComponent,
    ClinicReviewsComponent,
    DoctorReviewsComponent,
    HelpPageComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    ReactiveFormsModule,
    GoogleMapsModule
  ]
})
export class PublicModule { }
