import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import {VentaTotComponent} from '../dash/charts/venta-tot/venta-tot.component'

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent {
cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Total Venta diaria | Julio 2020', cols: 1, rows: 1 },
        { title: 'Total Venta diaria | Julio 2019', cols: 1, rows: 1 },
        { title: 'Total cartones vendidos | Julio 2020', cols: 1, rows: 1 },
        { title: 'Total cartones vendidos | Julio 2019', cols: 1, rows: 1 },
        { title: 'Incremento Jackpot | Julio 2020', cols: 2, rows: 1 },
        { title: 'Ganadores | Julio 2020', cols: 1, rows: 1 },
        { title: 'Ganadores | Julio 2019', cols: 1, rows: 1 },
        { title: 'Ganancia Loteria | Julio 2020', cols: 1, rows: 1 },
        { title: 'Ganancia Loteria | Julio 2019', cols: 1, rows: 1}
      ];
    }
    )
  
  );
  

  constructor(private breakpointObserver: BreakpointObserver) {

  }
  
}
