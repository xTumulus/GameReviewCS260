import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.less']
})
export class TabsComponent {

  @Output() selectedTab = new  EventEmitter();
  @Input() tabRoutes = [];
  @Input() isSubTab: boolean;

  constructor() {}

  onSelectTab(routeName: string) {
    this.selectedTab.emit(routeName);
  }

}
