import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CopyrightDirective } from './copyright.directive';

// Demo Modules
import { StylingModule } from './styling/styling.module';
import { HostModule } from './host/host.module';

@NgModule({
  declarations: [AppComponent, SidebarComponent, CopyrightDirective],
  imports: [BrowserModule, AppRoutingModule, StylingModule, HostModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
