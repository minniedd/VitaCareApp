import { Component, OnInit } from '@angular/core';
import {
  GetAllDoctorReviewsEndpoint,
  GetAllDoctorReviewsResponseDoctor
} from "./endpoints/get-all-doctor-reviews.endpoint";
import {Location} from "@angular/common";


@Component({
  selector: 'app-doctor-reviews',
  templateUrl: './doctor-reviews.component.html',
  styleUrls: ['./doctor-reviews.component.css']
})
export class DoctorReviewsComponent implements OnInit {

  doctorReviewPodaci:GetAllDoctorReviewsResponseDoctor[]=[];
  constructor(private getAllDoctorReviewsEndpoint:GetAllDoctorReviewsEndpoint,private location: Location) { }

  ngOnInit(): void {
    this.getDoctorReviews();
  }

  getDoctorReviews(): void {
    this.getAllDoctorReviewsEndpoint.obradi().subscribe(
      response => {
        this.doctorReviewPodaci = response.doctorReview;
      },
      error => {
        console.error('Error fetching client reviews', error);
      }
    );
  }


  goBack() {
    this.location.back();
  }
}
