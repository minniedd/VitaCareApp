import {Injectable} from "@angular/core";
import {MyBaseEndpoint} from "../../../../../MyBaseEndpoint";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MyConfig} from "../../../../../My-Config";

@Injectable({providedIn: 'root'})
export class GetAllDoctorReviewsEndpoint implements MyBaseEndpoint<void, GetAllDoctorReviewsResponse> {
  constructor(public httpClient: HttpClient) {
  }

  obradi(request: void): Observable<GetAllDoctorReviewsResponse> {
    let url = MyConfig.server_address + '/api/DoctorReviewGetAllEndpoint';

    return this.httpClient.get<GetAllDoctorReviewsResponse>(url);
  }

}

export interface GetAllDoctorReviewsResponse {
  doctorReview: GetAllDoctorReviewsResponseDoctor[]
}

export interface GetAllDoctorReviewsResponseDoctor {
  patientFullName: string;
  doctorFullName:string;
  doctorReview: string;
  reviewRate:number;
}
