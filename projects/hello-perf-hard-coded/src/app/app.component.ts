import {Component, DoCheck} from '@angular/core';

// noinspection JSVoidFunctionReturnValueUsed

@Component({
  selector: 'app-root',
  template: `
    {{onDomRefresh()}}
    <div>App Component works!</div>
    <app-child></app-child>

  `
})
export class AppComponent implements DoCheck {
  counterDom = 1;
  counterCD = 1;

  ngDoCheck(): void {
    console.log('*********************** CD', this.counterCD++);
  }

  onDomRefresh() {
    console.log('************* dom', this.counterDom++);
  }
}

