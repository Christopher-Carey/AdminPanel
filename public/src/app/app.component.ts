import { Component,OnInit} from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  User = false;
  Data = false;

  constructor() { }

ngOnInit() {
  // this.User = this.navComponent.User;
  // this.Data = this.navComponent.Data;
}



}












