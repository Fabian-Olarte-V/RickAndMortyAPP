import { Component, Input } from '@angular/core';
import { ItemInformation } from 'src/app/model/interface/item-information';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.sass']
})
export class ItemComponent {
  
  @Input()
  item: ItemInformation | undefined;

}
