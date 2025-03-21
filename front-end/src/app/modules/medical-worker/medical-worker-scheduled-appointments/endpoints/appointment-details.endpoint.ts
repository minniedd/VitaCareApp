import {MyBaseEndpoint} from "../../../../MyBaseEndpoint";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";
import {MyConfig} from "../../../../My-Config";

@Injectable({providedIn: 'root'})
export class AppointmentDetailsEndpoint implements MyBaseEndpoint<number, AppointmentDetailsResponse> {
  private apiUrl = `${MyConfig.server_address}/api/AppointmentDetailsGetAllEndpoint/`;

  constructor(private httpClient: HttpClient) {}

  obradi(appointmentID: number): Observable<AppointmentDetailsResponse> {
    const url = MyConfig.server_address + `/api/AppointmentDetailsGetAllEndpoint?id=${appointmentID}`;
    return this.httpClient.get<AppointmentDetailsResponse>(url);
  }


}

export interface AppointmentDetailsResponse {
  appointmentID: number;
  patient: string;
  birthDate: string;
  telephoneNumber: string;
  address: string;
  country: string;
  allergy: string;
  emergencyContact: string;
  doctor: string;
  examination: string;
  appointmentDateTime:string;
  appointmentNotes: string;
}
