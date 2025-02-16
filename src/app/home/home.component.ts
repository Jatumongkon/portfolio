import { ServiceService } from './../service.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: false
})
export class HomeComponent implements OnInit {

  data: any[] = [];
  constructor(private serviceService: ServiceService) {}


   ngOnInit() {
    this.serviceService.getAboutInfo().subscribe(
     (response) => {
       this.data = response;
       console.log(response);


     },
     (error) => {
       console.error('Error fetching data:', error);
     }
    );
    // this.serviceService.getHello()

  }


}
