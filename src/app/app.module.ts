import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { LayoutModule } from './core/layout/layout.module';
import {AppRoutingModules} from './modules/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    LayoutModule,
    SharedModule.forRoot(),
    AppRoutingModules,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
