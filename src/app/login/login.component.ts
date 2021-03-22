import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { JobserviceService } from '../jobservice.service';
import { tap } from 'rxjs/operators';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { stringify } from '@angular/compiler/src/util';
import { Employee } from '../employee';
import { Jobs } from '../job';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  // tslint:disable-next-line:no-shadowed-variable
  constructor(private Jobs: JobserviceService) { }
  response: any;
  data: any = [];
  employee: Employee[] = [];
  model: any = {};
  formGroup: any = FormGroup;
  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  initForm(){
    this.formGroup = new FormGroup({
     username: new FormControl('', [Validators.required]),
     password: new FormControl('', [Validators.required])
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
    console.log(this.Jobs.getForms);
    this.Jobs.getForms().subscribe(response => {
    this.data = response;
    console.log(response);
      });
  }
}
