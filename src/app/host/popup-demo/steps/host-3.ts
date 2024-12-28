import {
  Directive,
  Component,
  HostListener,
  Input,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[data-hostlistener]',
})
export class Host3Directive {
  @Input() message!: String;
  constructor() {}

  @HostListener('click') displayMessage(): void {
    alert(this.message);
  }
}

@Component({
  selector: 'app-hostlistener',
  template: `
    <h4 class="ui horizontal divider header">
      Host-3 Directive | Component Step
    </h4>
    <div
      class="ui message"
      data-hostlistener
      message="Clicked the container div"
    >
      <!-- data-hostlistener is the directive's selector (see above) -->
      <div class="header">
        Directives listen to events on their host DOM elements
      </div>
      <p>
        This displays an alert when the alarm icon and its containing div are
        clicked.
      </p>
      <i
        class="alarm icon"
        data-hostlistener
        message="Clicked the alarm icon"
      ></i>
    </div>
  `,
})
export class HostlistenerAlertDemoComponent1 {
  @HostBinding('attr.style') cssStyle = 'top:3.8em;position:relative;';
}
