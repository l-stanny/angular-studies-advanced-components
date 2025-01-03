import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-native-encapsulation',
  template: `
    <h4 class="ui horizontal divider header">Native encapsulation example</h4>
    <div class="highlight">
      This component uses the component <code>ViewEncapsulation.ShadowDom</code> property which uses the browser&#39;s native Shadow DOM API to encapsulate CSS styles, meaning that it creates a ShadowRoot for the component&#39;s host element which is then used to encapsulate all of the Component&#39;s styling. Styles required for this component that exist in stylesheets within the <code>/assets/</code> directory, specified in the <code>angular.json</code> file, as in the styles for the headline above, are inaccessible to this component and that stylesheet must be added externally or those styles added inline.
    </div>
  `,
  styles: [
    `
    /* the following class is overwritten because the no-encapsulation component uses encapsulation: ViewEncapsulation.None and so leaks its styles into other components. Comment out the no-encapsulation component selector, in the parent component, styling-demo.component.ts, to see the difference in the appearance of this component when the following class is not overwritten. */
      .highlight {
        border: 2px dotted #aab2b1;
        text-align: center;
        margin-bottom: 20px;
      }
      /* the following class from the root styles.scss file is not accessible due to CSS specificity and is shown here as an effective inline styling solution */
      h4.ui.header {
        font-family: Arial, Helvetica, sans-serif;
      }
    `,
  ],
  styleUrls: ['../../../assets/vendor/semantic.min.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class NativeEncapsulationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
