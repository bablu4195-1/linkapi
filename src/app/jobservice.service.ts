import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class JobserviceService {

  constructor(private http: HttpClient) { }
  getData(): Observable<any> {
    const url = 'https://cloud-source.net/WMSService/api/v1/emp/pafemployees';
    return this.http.get<any>(url);
  }
}
