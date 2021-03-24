import { Component, OnInit } from '@angular/core';
import { JobserviceService } from '../jobservice.service';
import { Jobs } from '../job';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  constructor(public jobService: JobserviceService) {  this.data = new Array<any>(); }
  jobs: Jobs[] = [];
  data: Array<any>;
  firstName: any;
  // tslint:disable-next-line:no-inferrable-types
  key: string = 'empNo';
  reverse = false;
  p = 1;
  // tslint:disable-next-line:typedef
  getUsers(){
    this.jobService.getForms().subscribe((data: any[]) =>
    this.data = data
    );
  }
  ngOnInit(): void {
    this.jobService.getData().subscribe(response => {
      this.jobs = response;
    });
    }
    // tslint:disable-next-line:typedef
    Search() {
      if (this.firstName === ''){
        this.ngOnInit();
      } else {
        this.jobs = this.jobs.filter(response => {
          return response.firstName.toLocaleLowerCase().match(this.firstName.toLocaleLowerCase());
        });
      }
    }
    // tslint:disable-next-line:typedef
    sort(key: string){
     this.key = key;
     this.reverse = !this.reverse;
    }
  }


