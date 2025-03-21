import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {TimeSlot} from "../time-slots-model";
import {MyConfig} from "../../../../My-Config";

@Injectable({providedIn: 'root'})
export class TimeSlotEndpoint {
  constructor(private httpClient:HttpClient) {
  }

  getAvailableTimeSlot(date: string):Observable<TimeSlot[]> {
    const url = MyConfig.server_address + '/api/GetTimeRangeEndpoint';
    const params = new HttpParams().set('date', date);

    return this.httpClient.get<TimeSlot[]>(url, {params});
  }
}
