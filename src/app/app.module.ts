import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MyPerfModule} from '@gpeel/my-perf-tools';
import {PlogModule} from '@gpeel/plog';
import {environment} from '../environments/environment';

import {AppComponent} from './app.component';
import { SubComponent } from './sub.component';

@NgModule({
  declarations: [
    AppComponent,
    SubComponent
  ],
  imports: [
    BrowserModule,
    MyPerfModule,
    PlogModule.forRoot(environment)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
