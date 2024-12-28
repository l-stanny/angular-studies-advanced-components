import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-native-encapsulation',
  template: `
    <h4 class="ui horizontal divider header">Native encapsulation example</h4>
    <div class="highlight">
      This uses the component <code>ViewEncapsulation.ShadowDom</code> property
    </div>
  `,
  styles: [
    `
      .highlight {
        border: 2px dotted #aab2b1;
        text-align: center;
        margin-bottom: 20px;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class NativeEncapsulationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
