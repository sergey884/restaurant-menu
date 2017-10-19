import { Component, OnInit } from '@angular/core';
import { MenuService } from './menu.service';
import { MenuItem } from './menu';

@Component({
	selector: 'menu-app',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title: string = "Welcome to our restaurant!";
	menu_list: MenuItem[] = [];

	constructor(
		private menuService: MenuService
	) {}

	ngOnInit() : void {
		this.menu_list = this.menuService.getMenuItems();
	}
}