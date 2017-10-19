import { Component, Input } from '@angular/core';
import { MenuItem } from '../menu';

@Component({
	selector: 'menu-list',
	templateUrl: './menu-list.component.html'
})
export class MenuListComponent {
	@Input() menu_list: MenuItem[];
}