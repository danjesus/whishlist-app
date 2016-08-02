import {Component} from '@angular/core';
import {WhishlistPage} from '../whishlist/whishlist';

@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  private whishlist: any;

  constructor() {
    this.whishlist = WhishlistPage;
  }
}
