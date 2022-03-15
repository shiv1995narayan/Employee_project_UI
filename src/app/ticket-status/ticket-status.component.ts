import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-ticket-status',
  templateUrl: './ticket-status.component.html',
  styleUrls: ['./ticket-status.component.css']
})
export class TicketStatusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}
  
  highcharts = Highcharts;
  HighChartOptions = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: 0,
      plotShadow: false
  },
  title: {
    text: ''
  },
 
  exporting: {
    enabled: false
  },
  credits: {
    enabled: false
  },
  plotOptions: {
      pie: {
          dataLabels: {
              enabled: true,
              distance: -120,
              y: 2,
              format: '{y}%',
              style: {
                  fontWeight: 'bold',
                  color: 'black',
                  fontSize: '20px'
              },
             filter: {
                  property: 'name',
                  operator: '===',
                  value: 'Firefox'
              },
          },
           borderWidth: 0
      },
      series: {
        animation: true
      }
  },
  series: [{
      type: 'pie',
      name: 'Browser share',
      size: '50%',
      innerSize: '70%',
      data: [
          { name: 'Firefox', y: 96, color: '#4476eb' },
          { name: 'Chrome', y: 2, color: '#e39817' },
          { name: 'Tor Browser', y: 2, color: '#1dde67' }
      ]
  }]
};
  LineChartOptions = {
    chart: {
      type: 'spline'

    },
    title:
    {
      text: 'LineChart Example'
    },
    subtitle: {
      text: 'try to create data'
    },
    // plotOptions: {
    //   series: {
    //     dataLabels: {
    //       enabled: true
    //     }
    //   }
    // },
    xAxis:
    {
      categories: ['jan', 'feb', 'march', 'april', 'may', 'june', 'july', 'aug', 'sept', 'oct', 'nov', 'dec']
    },
    yAxis: {
      display: true,

      title: {
        text: 'FirstChart'
      },
    },
    tooltip: {
      valueSufix: 'try'
    },

    series: [{
      name: 'new',
      data: [10, 20, 2, 3, 4, 5, 6, 7, 8, 9, 4, 20],
      color: 'red'
    },
    {
      name: 'total',
      data: [2, 3, 4, 6, 7, 8, 9, 0, 7, 5, 3, 1]
    },
    {
      name: 'closed',
      data: [1, 2, 3, 4, 1, 2, 3, 4, 5, 6, 7, 8]
    },
    {
      name: 'resolved',
      data: [7, 8, 5, 9, 6, 2, 3, 1, 5, 4, 6, 8]
    },
    {
      name: 'cancelled',
      data: [5, 4, 8, 8, 6, 2, 4, 5, 2, 3, 5, 0]
    },
    {
      name: 'open',
      data: [5, 6, 3, 2, 0, 1, 4, 7, 8, 9, 6, 2]
    }

    ],
    credits: {
      enabled: false
    },
  };


}
