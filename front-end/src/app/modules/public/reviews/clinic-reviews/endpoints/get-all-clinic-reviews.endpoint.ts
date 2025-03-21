import {Injectable} from "@angular/core";
import {MyBaseEndpoint} from "../../../../../MyBaseEndpoint";
import {HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";
import {MyConfig} from "../../../../../My-Config";

@Injectable({providedIn: 'root'})
export class GetAllClinicReviewsEndpoint implements MyBaseEndpoint<void, GetAllClinicReviewsResponse> {
  constructor(public httpClient: HttpClient) {

  }

  obradi(request: void): Observable<GetAllClinicReviewsResponse> {
    let url = MyConfig.server_address + '/api/ClinicReviewGetAllEndpoint';

    return this.httpClient.get<GetAllClinicReviewsResponse>(url);
  }

}

export interface GetAllClinicReviewsResponse {
  clinicReview: GetAllClinicReviewsResponseClinic[]
}

export interface GetAllClinicReviewsResponseClinic {
  patientFullName: string;
  clinicReview: string;
  reviewRate:number;
}
