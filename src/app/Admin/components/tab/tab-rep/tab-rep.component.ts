import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tab-rep',
  templateUrl: './tab-rep.component.html',
  styleUrls: ['./tab-rep.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class TabRepComponent implements OnInit {
  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

}
