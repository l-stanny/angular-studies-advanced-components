import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[monoCopyright]',
})
export class CopyrightDirective {
  constructor(el: ElementRef) {
    const currentYear = new Date().getFullYear();
    const targetEl: HTMLElement = el.nativeElement;
    targetEl.classList.add('copyright');
    targetEl.textContent = `Copyright \u00A9${currentYear} `;
  }
}
