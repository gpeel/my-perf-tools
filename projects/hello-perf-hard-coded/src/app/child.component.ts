import {Component} from '@angular/core';

// noinspection JSVoidFunctionReturnValueUsed

@Component({
  selector: 'app-child',
  template: `
    {{onDomRefreshComponent()}}
    <div>Child Component works!</div>
  `
})
export class ChildComponent {
  counterDom = 1;

  onDomRefreshComponent() {
    console.log('**** component CHILD', this.counterDom++);
  }
}

