import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sub',
  template: `
    <refresh-count name="SUB"></refresh-count>
    <div>PERF TEST SUB</div>
  `
})
export class SubComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
