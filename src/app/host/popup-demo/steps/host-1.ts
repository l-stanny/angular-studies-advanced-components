import { Directive, Component } from '@angular/core';

@Directive({
  selector: '[data-popup]',
  //selector: '[appHost1]'
})
export class Host1Directive {
  constructor() {
    console.log('Host-1 directive is bound to a host DOM element');
  }
}

@Component({
  selector: 'app-popup',
  template: `
    <h4 class="ui horizontal divider header">
      Host-1 Directive | Component Step
    </h4>
    <div class="ui message" data-popup>
      <!-- data-popup is the directive's selector (see above) -->
      <div class="header">Directives are bound to components</div>
      <p>
        This should use the <code>Host-1</code> directive (<em>see console)</em>
        to display a message in the console.
      </p>
    </div>
  `,
})
export class PopupDemoComponent1 {}
