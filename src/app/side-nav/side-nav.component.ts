import { Component, OnInit } from '@angular/core';
import { expandCollapse } from '../animations';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  animations: [
    expandCollapse
  ]
})
export class SideNavComponent implements OnInit {

  constructor() { }

  public isCollapsed = false;
  public menuState = 'close';

  ngOnInit() {
  }

}
