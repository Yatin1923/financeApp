import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import {
  ColDef,
  FirstDataRenderedEvent,
  GridReadyEvent,
  IDetailCellRendererParams,
} from '@ag-grid-community/core';
import { HttpClient } from '@angular/common/http';


export  class category{
  id: number;
  category: string;
  count: number;

}

const CategoryData: category[]=[

  { id: 1, category: 'Personal',count: 0},
  { id: 2, category: 'EMI', count: 3 },
  { id: 3, category: 'Others', count: 2 },
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public chart: any;

 
  constructor(private http: HttpClient) { }
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

  cateories = CategoryData;
  selecteddata: category;

  onselectdata(category: category){
    this.selecteddata = category;
  }

  onFirstDataRendered(params: FirstDataRenderedEvent) {
    // arbitrarily expand a row for presentational purposes
    setTimeout(function () {
      params.api.getDisplayedRowAtIndex(1)!.setExpanded(true);
    }, 0);
  }
 
}
