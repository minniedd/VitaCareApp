import {MyBaseEndpoint} from "../../../../MyBaseEndpoint";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MyConfig} from "../../../../My-Config";
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class DoctorsGetallEndpoint implements  MyBaseEndpoint<void, DoctorsGetAllResponse>{
    constructor(public httpClient:HttpClient) {

    }

    obradi(request: void): Observable<DoctorsGetAllResponse> {
        let url = MyConfig.server_address + '/api/DoctorsGetAllEndpoint';

        return this.httpClient.get<DoctorsGetAllResponse>(url);
    }
}


export interface DoctorsGetAllResponse {
    doctors: DoctorsGetAllResponseDoctors[]
}

export interface DoctorsGetAllResponseDoctors {
    doctorID: number;
    firstName: string;
    lastName: string;
}


