import { Component, OnInit } from '@angular/core';

export interface Section {
  name: string;
  component: string;
}

@Component({
  selector: 'app-sidebar',
  template: `
    <a
      [routerLink]="link.component"
      routerLinkActive="active"
      *ngFor="let link of menuLinks"
    >
      {{ link.name }}
    </a>
  `,
  styles: [
    `
      a {
        display: block;
        margin-left: 1.4em;
        color: #607788;
        margin-top: 3px;
        margin-bottom: 3px;
      }
      a.active {
        font-weight: 700;
      }
      a:first-child {
        color: #ecb101;
      }
    `,
  ],
})
export class SidebarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  menuLinks: Section[] = [
    {
      name: 'Home',
      component: 'home',
    },
    {
      name: 'Styling scope',
      component: 'styling',
    },
    {
      name: 'Directives',
      component: 'popup',
    },
  ];
}
