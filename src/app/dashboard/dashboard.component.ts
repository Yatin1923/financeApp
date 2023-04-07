import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public chart: any;
  constructor() { }
  createChart(){

    this.chart = new Chart("MyChart", {
      type: 'pie', //this denotes tha type of chart

      data: {
       
	       datasets: [{
    label: 'My First Dataset',
    data: [300, 240, 100, 432, 253, 74],
    backgroundColor: [
      'red',
      'pink',
      'green',
			'yellow',
      'orange',
      'blue',			
    ],
    hoverOffset: 4, 

  }],

 
  labels: ['Personal', 'EMI','Other','other1','other2','other3' ],
      },
     
      options: {
        
        aspectRatio:1.5,    
      },
      
      
    });
  }
 
 
  ngOnInit() {
      /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */
      this.createChart();
      
  }
     


}
