import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js'


@Component({
  selector: 'app-carton2019',
  templateUrl: './carton2019.component.html',
  styleUrls: ['./carton2019.component.sass']
})
export class Carton2019Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var myChart = new Chart('carton19', {
      type: 'polarArea',
      data: {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [{
          label: '# of Votes',
          label2: '####',
          data: [12, 19, 3,], 
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)',
            'rgba(255, 159, 64, 0.5)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

}
