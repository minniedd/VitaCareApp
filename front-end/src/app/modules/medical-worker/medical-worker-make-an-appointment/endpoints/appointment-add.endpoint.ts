import {MyBaseEndpoint} from "../../../../MyBaseEndpoint";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MyConfig} from "../../../../My-Config";

@Injectable({providedIn: 'root'})
export class AppointmentAddEndpoint implements MyBaseEndpoint<AppointmentAddRequest, void> {
    constructor(public httpClient:HttpClient) {

    }

    obradi(request: AppointmentAddRequest): Observable<void> {
        let url = MyConfig.server_address + `/api/AppointmentAddEndpoint`;

        return this.httpClient.post<void>(url,request);
    }
}




export interface AppointmentAddRequest {
    firstName: string
    lastName: string
    birthDate: string
    genderID: number
    telephoneNumber: string
    address: string
    country: string
    allegries: string
    emergencyContact: string
    examinationID: number
    appointmentDate: string
    time: string
    doctorID: number
    notes: string
}
