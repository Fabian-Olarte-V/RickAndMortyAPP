import { Component, Input } from '@angular/core';
import { ItemFullInformation } from 'src/app/model/interface/item-information';

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.sass']
})
export class ItemViewComponent {

  @Input()
  item: ItemFullInformation | undefined;

}
