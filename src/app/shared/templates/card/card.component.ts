import { Component, Input } from '@angular/core';
import { ItemInformation } from 'src/app/model/interface/item-information';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent {

  @Input()
  item: ItemInformation | undefined;

}
