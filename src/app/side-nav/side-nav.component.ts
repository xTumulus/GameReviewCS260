import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.less']
})
export class SideNavComponent {

  @Input() navOptions = [];
  @Output() selectedItem = new EventEmitter();

  constructor() {}

  onSelectItem(itemName) {
    this.selectedItem.emit(itemName);
  }

}
