import { Component } from '@angular/core';
import { JobserviceService } from '../app/jobservice.service';
import { Jobs } from '../app/job';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jobapi';
  data: any = [];
  constructor(private jobService: JobserviceService){}
  // tslint:disable-next-line:typedef
  getUsers(){
    this.jobService.getData().subscribe((data) =>
    this.data = data
    );

  }
}
