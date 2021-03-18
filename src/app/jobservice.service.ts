import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Employee } from './employee';
@Injectable({
  providedIn: 'root'
})
export class JobserviceService {
  constructor(private http: HttpClient) { }
  getData(): Observable<any> {
    const url = 'https://cloud-source.net/WMSService/api/v1/emp/pafemployees';
    return this.http.get<any>(url);
  }
  // tslint:disable-next-line:typedef
  login(username: string, password: string) {
    console.log(username);
    console.log(password);
    // tslint:disable-next-line:max-line-length
    // tslint:disable-next-line:max-line-length
    return this.http.post<{access_token: string}>('https://cloud-source.net/WMSService/api/v1/authenticate', {username, password}).pipe(tap(res => {
    console.log(res);
    localStorage.setItem('eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJiYWJsdTQxOTUiLCJleHAiOjE2MTYxMTA0NTAsImlhdCI6MTYxNjA5MjQ1MH0.UAoGdXlb4gfPmSnLWLiFK6DTNkkgVN2EOjj4kIMvKbZbAICR-KEo0fAB7fLcKUKWw5_3bzdSNoHMZodgcDPmJg', res.access_token);
    localStorage.setItem('userid', '43');
    localStorage.setItem('expiresin', '30');
    localStorage.setItem('token', 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJiYWJsdTQxOTUiLCJleHAiOjE2MTYxMTA0NTAsImlhdCI6MTYxNjA5MjQ1MH0.UAoGdXlb4gfPmSnLWLiFK6DTNkkgVN2EOjj4kIMvKbZbAICR-KEo0fAB7fLcKUKWw5_3bzdSNoHMZodgcDPmJg');
  }));
}
// tslint:disable-next-line:typedef

public get loggedIn(): boolean{
  return localStorage.getItem('eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJiYWJsdTQxOTUiLCJleHAiOjE2MTYxMTA0NTAsImlhdCI6MTYxNjA5MjQ1MH0.UAoGdXlb4gfPmSnLWLiFK6DTNkkgVN2EOjj4kIMvKbZbAICR-KEo0fAB7fLcKUKWw5_3bzdSNoHMZodgcDPmJg') !==  null;
}
getForms(): Observable<any>{
  const BASE_URL = 'https://cloud-source.net';
  console.log(BASE_URL);
  return this.http.get<Employee>(BASE_URL + '/WMSService/api/v1/emp/employee/6' , {
    headers : {
        Authorization : 'Bearer' + ' ' + 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJiYWJsdTQxOTUiLCJleHAiOjE2MTYxMTA0NTAsImlhdCI6MTYxNjA5MjQ1MH0.UAoGdXlb4gfPmSnLWLiFK6DTNkkgVN2EOjj4kIMvKbZbAICR-KEo0fAB7fLcKUKWw5_3bzdSNoHMZodgcDPmJg'
    }

});
}
}


