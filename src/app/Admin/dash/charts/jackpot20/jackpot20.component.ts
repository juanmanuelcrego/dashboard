import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js'


@Component({
  selector: 'app-jackpot20',
  templateUrl: './jackpot20.component.html',
  styleUrls: ['./jackpot20.component.sass']
})
export class Jackpot20Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var myChart = new Chart('jackpot20', {
      type: 'line',
      data: {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [{
          label: '#of Votes',
          data: [2, 7, 20,], 
          backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
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
