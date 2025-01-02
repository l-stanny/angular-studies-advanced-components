import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline-style',
  styles: [
    `
      .highlight {
        border: 1px solid #aab2b1;
        background-color: #d0d9d9;
        text-align: center;
        margin-bottom: 20px;
      }
    `,
  ],
  template: `
    <h4 class="ui horizontal divider header">Inline style example</h4>
    <div class="highlight">
      This component uses the component <code>styles</code> property
    </div>
  `,
})
export class InlineStyleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
