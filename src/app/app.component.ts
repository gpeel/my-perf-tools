import {Component} from '@angular/core';
import {Plog} from '@gpeel/plog';

@Component({
  selector: 'app-root',
  template: `
    <root-refresh-count></root-refresh-count>
    <div>PERF TEST</div>
    <app-sub></app-sub>
    <button (click)="click()">ok</button>
  `
})
export class AppComponent {
  title = 'my-perf-tools';

  click() {
    Plog.red('click');
  }
}
