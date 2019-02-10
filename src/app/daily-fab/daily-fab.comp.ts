import { Component, Input, OnInit } from '@angular/core';
import { DailyFabAnimations } from './daily-fab-animation';

@Component({
  selector: 'app-daily-fab',
  templateUrl: './daily-fab.comp.html',
  styleUrls: ['./daily-fab.comp.scss'],
  animations: DailyFabAnimations
})
// tslint:disable-next-line:component-class-suffix
export class DailyFabComp implements OnInit {

  @Input() options;
  buttons = [];
  fabTogglerState = 'inactive';

  constructor() { }

  ngOnInit() {
    const maxButtons = 6;
    if (this.options.buttons.length > maxButtons) {
      this.options.buttons.splice(5, this.options.buttons.length - maxButtons);
    }
  }

  showItems() {
    this.fabTogglerState = 'active';
    this.buttons = this.options.buttons;
  }

  hideItems() {
    this.fabTogglerState = 'inactive';
    this.buttons = [];
  }

  onToggleFab() {
    this.buttons.length ? this.hideItems() : this.showItems();
  }
}
