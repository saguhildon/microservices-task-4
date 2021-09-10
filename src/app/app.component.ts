import { Component } from '@angular/core';
import { DashboardService } from '../dashboard.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _dashboardService: DashboardService) { }

  title = 'Angularconsumer';
  Bookingarray = [];
  Bookingarray1 = [];
  ngOnInit(): void {
    
    this._dashboardService.GetBookingDetails().subscribe(
      data => {
     
         this.Bookingarray = data;
        console.log(data);
      },
      error => console.log(error)
    );

    this._dashboardService.GetBookingDetails1().subscribe(
      data => {
        
         this.Bookingarray1 = data;
        console.log(data);
      },
      error => console.log(error)
    );
  }
}
