import { Component } from '@angular/core';
import { JobserviceService } from '../app/jobservice.service';
import { Jobs } from '../app/job';
import { DataTableComponent } from './data-table/data-table.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jobapi';


 // tslint:disable-next-line:ban-types
 page: Number = 1;
  constructor(private jobService: JobserviceService){
  }
  // tslint:disable-next-line:typedef

}
