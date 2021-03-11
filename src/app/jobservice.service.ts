import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
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
    // tslint:disable-next-line:max-line-length
    return this.http.post<{access_token: string}>('https://cloud-source.net/WMSService//api/v1/authenticate', {username, password}).pipe(tap(res => {
    localStorage.setItem('eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJiYWJsdTQxOTUiLCJleHAiOjE2MTU0Mjc2NTYsImlhdCI6MTYxNTQwOTY1Nn0.6SbcPmjEuX7jDcVIV_PmrZ7avhisUrNwQKknusgg5S02B3XDiUR8IyPUkjs_i016DXz3zhfhEczkS6iqGIG_MA', res.access_token);
}));
}
// tslint:disable-next-line:typedef
register(username: string, password: string) {
  // tslint:disable-next-line:max-line-length
  return this.http.post<{access_token: string}>('https://cloud-source.net/WMSService//api/v1/register', {username, password}).pipe(tap(res => {
  this.login(username, password);
}));
}
// tslint:disable-next-line:typedef
logout() {
  localStorage.removeItem('eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJiYWJsdTQxOTUiLCJleHAiOjE2MTU0Mjc2NTYsImlhdCI6MTYxNTQwOTY1Nn0.6SbcPmjEuX7jDcVIV_PmrZ7avhisUrNwQKknusgg5S02B3XDiUR8IyPUkjs_i016DXz3zhfhEczkS6iqGIG_MA');
}
public get loggedIn(): boolean{
  return localStorage.getItem('eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJiYWJsdTQxOTUiLCJleHAiOjE2MTU0Mjc2NTYsImlhdCI6MTYxNTQwOTY1Nn0.6SbcPmjEuX7jDcVIV_PmrZ7avhisUrNwQKknusgg5S02B3XDiUR8IyPUkjs_i016DXz3zhfhEczkS6iqGIG_MA') !==  null;
}
}


