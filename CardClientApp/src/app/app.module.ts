import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { LoginComponent } from './Components/login/login.component';
import { HeaderComponent } from './Components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from "./Core/material.module";
import { SidenavComponent } from './Components/sidenav/sidenav.component';
import { GameComponent } from './Components/game/game.component';
import { MainComponent } from './Components/main/main.component';
import { LeftComponent } from './Components/left/left.component';
import { RightComponent } from './Components/right/right.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    HeaderComponent,
    SidenavComponent,
    GameComponent,
    MainComponent,
    LeftComponent,
    RightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
