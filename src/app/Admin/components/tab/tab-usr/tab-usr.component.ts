import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tab-usr',
  templateUrl: './tab-usr.component.html',
  styleUrls: ['./tab-usr.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class TabUsrComponent implements OnInit {
  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

}
