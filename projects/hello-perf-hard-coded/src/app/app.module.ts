import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MyPerfModule} from '@gpeel/my-perf-tools';
import {PlogModule} from '@gpeel/plog';
import {environment} from '../environments/environment';

import {AppComponent} from './app.component';
import {ChildComponent} from './child.component';

@NgModule({
  declarations: [
    AppComponent, ChildComponent
  ],
  imports: [
    BrowserModule,
    PlogModule.forRoot(environment),
    MyPerfModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
