import { Component, OnInit } from '@angular/core';
import {
  GetAllClinicReviewsEndpoint,
  GetAllClinicReviewsResponseClinic
} from "./endpoints/get-all-clinic-reviews.endpoint";
import {Location} from "@angular/common";


@Component({
  selector: 'app-clinic-reviews',
  templateUrl: './clinic-reviews.component.html',
  styleUrls: ['./clinic-reviews.component.css']
})
export class ClinicReviewsComponent implements OnInit {
  clientReviewPodaci:GetAllClinicReviewsResponseClinic[]=[];
  constructor(private clientGetAllReviewsEndpoint: GetAllClinicReviewsEndpoint,private location: Location) { }

  ngOnInit(): void {
    this.getClientReviews();
  }

  getClientReviews(): void {
    this.clientGetAllReviewsEndpoint.obradi().subscribe(
      response => {
        this.clientReviewPodaci = response.clinicReview;
      },
      error => {
        console.error('Error fetching client reviews', error);
      }
    );
  }

  goBack(): void {
    this.location.back();
  }
}
