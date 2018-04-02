import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import { HomeIndexComponent } from './home-index/home-index.component';

const TODOS_ROUTES: Routes = [
  {
    path: '', component: HomeIndexComponent, data: {title: 'Tuto' + ' - Accueil'},
  },
];


@NgModule({
  imports: [RouterModule.forChild(TODOS_ROUTES)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
