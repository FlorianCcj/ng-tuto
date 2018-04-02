import { Component, OnInit } from '@angular/core';

import {menu} from '../../../modules/menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menu = menu;
  asideScrollbar = true;

  constructor() {
    console.log(menu);
  }

  ngOnInit() {
  }

}
