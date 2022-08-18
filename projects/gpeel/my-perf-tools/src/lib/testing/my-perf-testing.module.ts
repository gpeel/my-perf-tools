import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RefreshCountTestingComponent} from './refresh-count-testing.component';
import {RootRefreshCountTestingComponent} from './root-refresh-count-testing.component';

@NgModule({
  declarations: [RefreshCountTestingComponent, RootRefreshCountTestingComponent],
  imports: [
    CommonModule,
  ],
  exports: [RefreshCountTestingComponent, RootRefreshCountTestingComponent]
})
export class MyPerfTestingModule {
}
