import { Directive, Component, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[data-elementref]',
})
export class Host2Directive {
  constructor(elementref: ElementRef) {
    console.log('Host-2 directive is bound to this DOM element: ', elementref);
  }
}

@Component({
  selector: 'app-elementref',
  template: `
    <h4 class="ui horizontal divider header">
      Host-2 Directive | Component Step
    </h4>
    <div class="ui message" data-elementref>
      <!-- data-elementref is the directive's selector (see above) -->
      <div class="header">
        DOM elements to which directives are bound can be referenced
      </div>
      <p>
        This should display a message in the console that indicates what host
        DOM elements to which the host-2 directive is bound (<em
          >see console).</em
        >
      </p>
      <i class="alarm icon" data-elementref></i>
    </div>
  `,
})
export class ElementRefDemoComponent1 {
  @HostBinding('attr.style') cssStyle = 'top:2em;position:relative;';
}
