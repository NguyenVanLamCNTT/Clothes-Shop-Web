import { Component, OnInit } from '@angular/core';
import {headerPath} from '../../../../clothes-shop/constance/menu-header-path';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  listMenu = headerPath.menu;
  listIconContact = headerPath.iconContact;
  constructor() { }

  ngOnInit(): void {
  }
  getActiveMenu(url: string): string{
    const urlNow = window.location.href;
    if (urlNow.indexOf(url) !== -1){
      return 'active-item';
    }else {
      return  '';
    }
  }
}
