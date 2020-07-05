import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js'

@Component({
  selector: 'app-ganancia2019',
  templateUrl: './ganancia2019.component.html',
  styleUrls: ['./ganancia2019.component.sass']
})
export class Ganancia2019Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var myChart = new Chart('ganancia19', {
      type: 'line',
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
