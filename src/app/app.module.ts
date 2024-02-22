import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { NavigationComponent } from './navigation/navigation.component';
import { UserListComponent } from './user-list/user-list.component';
import { PlaygroundComponent } from './playground/playground.component';


@NgModule({
  declarations: [AppComponent, NavComponent,NavigationComponent, UserListComponent, PlaygroundComponent], //!Components
  imports: [BrowserModule, AppRoutingModule], //!helpers  / utils
  providers: [], //!Services
  bootstrap: [AppComponent] //!App launcher
})
export class AppModule { }
