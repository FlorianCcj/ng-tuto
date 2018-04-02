import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {LayoutComponent} from '../core/layout/layout.component';

export const APP_ROUTES: Routes = [
  { path: 'home', redirectTo: 'todo', pathMatch: 'full' },
  { path: '', loadChildren: './home/home.module#HomeModule' },
];


@NgModule({
  imports: [
    SharedModule,
    RouterModule.forRoot(APP_ROUTES, {
      // enableTracing: true, // <-- to debug
      preloadingStrategy: PreloadAllModules,
      useHash: true // ne pas toucher, oui ca met un # mais ca apporte tellement
    }),
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModules {}
