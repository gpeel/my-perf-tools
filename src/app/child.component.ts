import {Component} from '@angular/core';

// noinspection JSVoidFunctionReturnValueUsed

@Component({
  selector: 'app-child',
  template: `
    <refresh-count name="CHILD"></refresh-count>
    <div>Child Component works!</div>
  `
})
export class ChildComponent {
}

