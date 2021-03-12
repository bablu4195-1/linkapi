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
    return this.http.post<{access_token: string}>('https://cloud-source.net/WMSService/api/v1/authenticate', {username, password}).pipe(tap(res => {
    localStorage.setItem('eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJiYWJsdTQxOTUiLCJleHAiOjE2MTU1ODAxNDMsImlhdCI6MTYxNTU2MjE0M30.aiRUmO_wK6n-puzaj9N9dhXEYn8YaV_QrueTs_NwLKSAtJEpUpN7u1wlgLKTU7Coke0ptrmq-QeUfIadBrHNZg', res.access_token);
}));
}
// tslint:disable-next-line:typedef
register(username: string, password: string) {
  // tslint:disable-next-line:max-line-length
  return this.http.post<{access_token: string}>('https://cloud-source.net/WMSService/api/v1/register', {username, password}).pipe(tap(res => {
  this.login(username, password);
}));
}
// tslint:disable-next-line:typedef
logout() {
  localStorage.removeItem('eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJiYWJsdTQxOTUiLCJleHAiOjE2MTU1ODAxNDMsImlhdCI6MTYxNTU2MjE0M30.aiRUmO_wK6n-puzaj9N9dhXEYn8YaV_QrueTs_NwLKSAtJEpUpN7u1wlgLKTU7Coke0ptrmq-QeUfIadBrHNZg');
}
public get loggedIn(): boolean{
  return localStorage.getItem('eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJiYWJsdTQxOTUiLCJleHAiOjE2MTU1ODAxNDMsImlhdCI6MTYxNTU2MjE0M30.aiRUmO_wK6n-puzaj9N9dhXEYn8YaV_QrueTs_NwLKSAtJEpUpN7u1wlgLKTU7Coke0ptrmq-QeUfIadBrHNZg') !==  null;
}
getForms(): Observable<any>{
 const url = 'https://cloud-source.net/WMSService/api/v1/emp/employee/6';
 return this.http.get<any>(url);
}
}


