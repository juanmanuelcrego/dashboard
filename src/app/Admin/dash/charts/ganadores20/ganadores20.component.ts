import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js'

@Component({
  selector: 'app-ganadores20',
  templateUrl: './ganadores20.component.html',
  styleUrls: ['./ganadores20.component.sass']
})
export class Ganadores20Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var myChart = new Chart('ganadores20', {
      type: 'pie',
      data: {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [{
          label: '#of Votes',
          data: [2, 7, 20,], 
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 159, 64, 0.5)'
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
