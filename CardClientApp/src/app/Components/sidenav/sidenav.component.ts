import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav} from "@angular/material/sidenav";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  public IsDashboard:boolean = false;
  public IsGame:boolean = true;
  constructor() { }

  ngOnInit() {
  }
  public Dashboard() {
    this.IsDashboard = true;
    this.IsGame = false;
    document.getElementById('btnsidenavMenu').click();
  }
  Game() {
    this.IsDashboard = false;
    this.IsGame = true;
    document.getElementById('btnsidenavMenu').click();
  }

}
