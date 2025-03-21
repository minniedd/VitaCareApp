import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {MyConfig} from "../../../../My-Config";

@Injectable({providedIn: 'root'})
export class FileEndpoint {

  constructor(private httpClient:HttpClient) {
  }

  uploadFile(file: File, appointmentId:number):Observable<any> {
    const formData = new FormData();
    formData.append('file',file);
    formData.append('appointmentId',appointmentId.toString());

    const url = `${MyConfig.server_address}/api/FileEndpoint/UploadFile?appointmentId=${appointmentId}`;

    return this.httpClient.post(url,formData, {
      headers: new HttpHeaders({
        'Accept': '*/*',
      })
    });
  }
}
