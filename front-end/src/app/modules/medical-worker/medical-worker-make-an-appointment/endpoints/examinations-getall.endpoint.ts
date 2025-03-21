import {Injectable} from "@angular/core";
import {MyBaseEndpoint} from "../../../../MyBaseEndpoint";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MyConfig} from "../../../../My-Config";


@Injectable({providedIn: 'root'})
export class ExaminationsGetallEndpoint  implements  MyBaseEndpoint<void, ExaminationsGetAllResponse>{
    constructor(public httpClient:HttpClient) {

    }

    obradi(request: void): Observable<ExaminationsGetAllResponse> {
        let url = MyConfig.server_address + '/api/ExaminationGetAllEndpoint';

        return this.httpClient.get<ExaminationsGetAllResponse>(url);
    }
}

export interface ExaminationsGetAllResponse {
    examinations: ExaminationsGetAllResponseExamination[]
}

export interface ExaminationsGetAllResponseExamination {
    examinationID: number;
    examinationName: string;
}
