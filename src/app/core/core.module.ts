import {NgModule, Optional, SkipSelf} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {environment} from '../../environments/environment';

import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {EFFECTS, REDUCERS} from './store/store.variables';
import {StoreDevtoolsModule, StoreDevtoolsOptions} from '@ngrx/store-devtools';

import { LayoutComponent } from './layout/layout.component';
import {HeaderHttpInterceptor} from './services/header-http-interceptor';
import {throwIfAlreadyLoaded} from './module-import.guard';
import { TodosApiService } from './services/todo.api.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forRoot(REDUCERS),
    EffectsModule.forRoot(EFFECTS),
    // permit to active debug module https://github.com/ngrx/platform/blob/master/docs/store-devtools/README.md
    StoreDevtoolsModule.instrument(<StoreDevtoolsOptions>{
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  declarations: [],
  providers: [
    TodosApiService,
    { provide: HTTP_INTERCEPTORS, useClass: HeaderHttpInterceptor, multi: true},
  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
