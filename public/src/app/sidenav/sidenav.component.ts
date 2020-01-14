import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  // User 
  // Data = false;

  constructor(
    private appComponent:AppComponent

  ) { }

  ngOnInit() {
    console.log(this.appComponent.User)

  }

  ShowUser(){
    this.appComponent.User = true;
    console.log("got here")
    console.log(this.appComponent.User)

  }
  ShowData(){
    this.appComponent.Data = true
  }

}
