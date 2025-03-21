import {Injectable} from "@angular/core";
import {MyBaseEndpoint} from "../../../../MyBaseEndpoint";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MyConfig} from "../../../../My-Config";

@Injectable({providedIn: 'root'})
export class GenderGetAllEndpoint  implements  MyBaseEndpoint<void, GenderGetAllResponse>{
  constructor(public httpClient:HttpClient) {

  }

  obradi(request: void): Observable<GenderGetAllResponse> {
    let url = MyConfig.server_address + '/api/GenderGetAllEndpoint';

    return this.httpClient.get<GenderGetAllResponse>(url);
  }
}

export interface GenderGetAllResponse {
  genders: GenderGetAllResponseGender[]
}

export interface GenderGetAllResponseGender {
  genderID: number;
  genderDescription: string;
}
