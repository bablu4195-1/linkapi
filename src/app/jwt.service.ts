import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor(private httpClient: HttpClient) { }
  // tslint:disable-next-line:typedef
  login(email: string, password: string) {
    // tslint:disable-next-line:max-line-length
    return this.httpClient.post<{access_token: string}>('https://cloud-source.net/WMSService//api/v1/login', {email, password}).pipe(tap(res => {
    localStorage.setItem('access_token', res.access_token);
}));
}
// tslint:disable-next-line:typedef
register(email: string, password: string) {
  // tslint:disable-next-line:max-line-length
  return this.httpClient.post<{access_token: string}>('https://cloud-source.net/WMSService//api/v1/register', {email, password}).pipe(tap(res => {
  this.login(email, password);
}));
}
// tslint:disable-next-line:typedef
logout() {
  localStorage.removeItem('access_token');
}
public get loggedIn(): boolean{
  return localStorage.getItem('access_token') !==  null;
}
}
function tap(arg0: (res: any) => void): import('rxjs').OperatorFunction<{ access_token: string; }, unknown> {
  throw new Error('Function not implemented.');
}

