import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';

// Demo Modules
import { StylingModule } from './styling/styling.module';
import { HostModule } from './host/host.module';

@NgModule({
  declarations: [AppComponent, SidebarComponent],
  imports: [BrowserModule, AppRoutingModule, StylingModule, HostModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
