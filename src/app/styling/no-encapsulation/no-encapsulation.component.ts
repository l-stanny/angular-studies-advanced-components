import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-no-encapsulation',
  template: `
    <h4 class="ui horizontal divider header">No encapsulation example</h4>
    <div class="highlight">
      This uses the component <code>ViewEncapsulation.none</code> property and
      leaks styles into other components. Comment out this component selector
      <code
        ><span ngNonBindable
          ><app-no-encapsulation></app-no-encapsulation></span></code
      >, in the parent component, <code>styling-demo.component.ts</code> to see
      the difference in the appearance of its sibling component above
    </div>
  `,
  styles: [
    `
      .highlight {
        border: 1px solid #40d9f3;
        text-align: center;
        margin-bottom: 20px;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.None,
})
export class NoEncapsulationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
