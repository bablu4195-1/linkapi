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
  formgroup: any = FormGroup;
  constructor(private Jobs: JobserviceService) {}

  ngOnInit(): void {
    this.initForm();
    this.loginProcess();
  }
  // tslint:disable-next-line:typedef
  initForm(){
    this.formgroup = new FormGroup({
     username: new FormControl('', Validators.required),
     password: new FormControl('', Validators.required)
    });
  }
  // tslint:disable-next-line:typedef
  loginProcess(){
    this.Jobs.login(this.model.username, this.model.password).subscribe(response => {
      if (this.response == null){
        console.log(response);
      }
    });
  }
  // tslint:disable-next-line:typedef
  getEmployee(){
    this.Jobs.getForms().subscribe((data: any[]) =>
    console.log(data)
    );
  }

}


