import {Component} from '@angular/core';

// noinspection JSVoidFunctionReturnValueUsed

@Component({
  selector: 'app-root',
  template: `
    <root-refresh-count></root-refresh-count>
    <div>App Component works!</div>
    <app-child></app-child>
  `
})
export class AppComponent {
}

