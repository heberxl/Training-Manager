import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Users } from './users/users';
import { UsersModule } from './users/users-module';
import { SharedModule } from './shared/shared-module';
import { AlumnosModule } from "./alumnos/alumnos-module";
import { share } from 'rxjs';

@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    AlumnosModule
],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
