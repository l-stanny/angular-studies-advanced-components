import {
  NgModule,
  Directive,
  Component,
  HostListener,
  Input,
  HostBinding,
  ElementRef,
} from '@angular/core';

@Directive({
  selector: '[data-outsidehostelement]',
  exportAs: 'data-outsidehostelement', //this is key
})
export class Host4Directive {
  @Input() message!: String;

  constructor(private elementref: ElementRef) {}

  @HostListener('button.click') displayMessage(): void {
    //button.click rather than .click is also key
    alert(
      this.message + ' ' + 'nativeElement: ' + this.elementref.nativeElement
    );
  }
}

@Component({
  selector: 'app-outsidehostelement',
  template: `
    <h4 class="ui horizontal divider header">
      Host-4 Directive | Component Step
    </h4>
    <div
      class="ui message"
      data-outsidehostelement
      message="Clicked button referencing the container div message"
      #dataoutsidehostelement1="data-outsidehostelement"
    >
      <!-- data-outsidehostelement is the directive's selector (see above) -->
      <div class="header">
        Directives can be used outside of the host DOM element to reference
        elements in the host DOM element
      </div>
      <p>
        This displays an alert displaying messages inside of the alarm icon and
        the containing div host DOM element (a div) when corresponding buttons
        outside of the alarm icon and the containing div host Dom element (a
        different div) are clicked.
      </p>
      <i
        class="alarm icon"
        data-outsidehostelement
        message="Clicked the button referencing the alarm icon message"
        #dataoutsidehostelement2="data-outsidehostelement"
      ></i>
    </div>
    <div style="padding-bottom:120px;">
      <button
        (click)="dataoutsidehostelement1.displayMessage()"
        class="ui button"
        style="margin-top:5px;"
        name="firstButton"
      >
        Display popup message for container div element
      </button>
      <button
        (click)="dataoutsidehostelement2.displayMessage()"
        class="ui button"
        style="margin-top:5px;"
        name="secondButton"
      >
        Display popup message for alarm icon
      </button>
    </div>
  `,
})
export class OutsideHostElementAlertDemoComponent1 {
  @HostBinding('attr.style') cssStyle = 'top:5.6em;position:relative;';
}
