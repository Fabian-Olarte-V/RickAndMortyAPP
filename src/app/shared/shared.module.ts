import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './templates/card/card.component';
import { ItemViewComponent } from './templates/item-view/item-view.component';
import { ItemComponent } from './templates/item/item.component';
import { RouterModule } from '@angular/router';
import { ItemListComponent } from './templates/item-list/item-list.component';

@NgModule({
  declarations: [
    CardComponent,
    ItemViewComponent,
    ItemComponent,
    ItemListComponent
  ],
  imports: [
    CommonModule, 
    RouterModule
  ],
  exports: [
    CardComponent,
    ItemViewComponent,
    ItemComponent
  ]
})
export class SharedModule { }
