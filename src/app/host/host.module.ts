import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupDemoComponent } from './popup-demo/popup-demo.component';
import { Host1Directive } from './popup-demo/steps/host-1';
import { Host2Directive } from './popup-demo/steps/host-2';
import { Host3Directive } from './popup-demo/steps/host-3';
import { Host4Directive } from './popup-demo/steps/host-4';
import { PopupDemoComponent1 } from './popup-demo/steps/host-1';
import { ElementRefDemoComponent1 } from './popup-demo/steps/host-2';
import { HostlistenerAlertDemoComponent1 } from './popup-demo/steps/host-3';
import { OutsideHostElementAlertDemoComponent1 } from './popup-demo/steps/host-4';

@NgModule({
  imports: [CommonModule],

  declarations: [
    PopupDemoComponent,
    Host1Directive,
    PopupDemoComponent1,
    Host2Directive,
    ElementRefDemoComponent1,
    Host3Directive,
    HostlistenerAlertDemoComponent1,
    Host4Directive,
    OutsideHostElementAlertDemoComponent1,
  ],
})
export class HostModule {}
