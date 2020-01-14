import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { UserComponent } from './user/user.component';
import { DataComponent } from './data/data.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    UserComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SidenavComponent,AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
