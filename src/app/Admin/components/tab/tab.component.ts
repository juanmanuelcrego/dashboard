import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class TabComponent implements OnInit {
  panelOpenState = false;

  ngOnInit() {
  }
}

