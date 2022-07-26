import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import * as signalR from '@microsoft/signalr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  connection: signalR.HubConnection;
  constructor() {
    this.connection = new signalR.HubConnectionBuilder()
      .withUrl('https:localhost:7283/satishub')
      .build();
    this.connection.start();

    this.connection.on('receiveMessage', (message) => {
      alert(message);
    });
  }
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    title: {
      text: 'Başlık',
    },
    subtitle: {
      text: 'Alt Başlık',
    },
    yAxis: {
      title: {
        text: 'Y ekseni',
      },
    },
    xAxis: {
      accessibility: {
        rangeDescription: '2021-2022',
      },
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
    },
    series: [
      {
        name: 'X',
        type: 'line',
        data: [1000, 2000, 3000],
      },
      {
        name: 'Y',
        type: 'line',
        data: [9000, 5000, 6000],
      },
      {
        name: 'Z',
        type: 'line',
        data: [7000, 6000, 1000],
      },
    ],
    plotOptions: {
      series: {
        label: {
          connectorAllowed: true,
        },
        pointStart: 100,
      },
    },
  };
}
