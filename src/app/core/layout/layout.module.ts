import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { SharedModule } from '../../shared/shared.module';
import { MenuComponent } from './menu/menu.component';
import { CategoryComponent } from './menu/category/category.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    LayoutComponent,
    MenuComponent,
    CategoryComponent
  ],
  exports: [LayoutComponent]
})
export class LayoutModule { }
