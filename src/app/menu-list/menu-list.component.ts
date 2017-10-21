import { Component, OnInit, Input } from '@angular/core';
import { MenuService } from '../menu.service';
import { MenuItem } from '../menu';

@Component({
	selector: 'menu-list',
	templateUrl: './menu-list.component.html'
})
export class MenuListComponent implements OnInit {
	menu_list: MenuItem[] = [];

	constructor(
		private menuService: MenuService
	) {}

	ngOnInit() : void {
		this.menuService.getMenuItems()
			.subscribe( menu_items => this.menu_list = menu_items );
	}

	deleteMenuListItem(menuItem: MenuItem) {
		let index = this.menu_list.indexOf( menuItem );
		if (index > -1) {
			this.menu_list.splice(index, 1);
		}
	}
}