import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { JobserviceService } from '../jobservice.service';
import { tap } from 'rxjs/operators';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { stringify } from '@angular/compiler/src/util';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  response: any;
  data: Array<any> = [];
  model: any = {};
  formGroup: any = FormGroup;
  userid: any;
  expiresin: any;
  token: any;
  constructor(private Jobs: JobserviceService) {}

  ngOnInit(): void {
    this.initForm();
    this.loginProcess();
  }
  // tslint:disable-next-line:typedef
  initForm(){
    this.formGroup = new FormGroup({
     username: new FormControl(),
     password: new FormControl()
    });
  }

  // tslint:disable-next-line:typedef
  loginProcess(){
    this.Jobs.login(this.model.username, this.model.password).subscribe(response => {
    console.log(this.Jobs.login);
    localStorage.getItem('userid');
    console.log(localStorage.getItem('userid'));
    localStorage.getItem('expiresin');
    console.log(localStorage.getItem('expiresin'));
    localStorage.getItem('token');
    console.log(localStorage.getItem('token'));
    });
  }
   // tslint:disable-next-line:typedef
   loginget() {
     localStorage.getItem('userid');
     console.log(localStorage.getItem('userid'));
     localStorage.getItem('expiresin');
     console.log(localStorage.getItem('expiresin'));
     localStorage.getItem('token');
     console.log(localStorage.getItem('token'));
   }
  // tslint:disable-next-line:typedef
  getEmployee(){
    this.Jobs.getForms().subscribe((data: any[]) =>
    console.log(data)
    );
  }

}


