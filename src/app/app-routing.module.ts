import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StylingDemoComponent } from './styling/styling-demo/styling-demo.component';
import { PopupDemoComponent } from './host/popup-demo/popup-demo.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'styling', component: StylingDemoComponent, pathMatch: 'full' },
  {
    path: 'externalstyling',
    component: StylingDemoComponent,
    pathMatch: 'full',
  },
  {
    path: 'popup',
    component: PopupDemoComponent,
    pathMatch: 'full',
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
