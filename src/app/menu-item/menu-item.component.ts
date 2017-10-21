import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MenuItem } from '../menu';

@Component({
	selector: 'menu-item',
	templateUrl: './menu-item.component.html'
})
export class MenuItemComponent {
	@Input() menu_item: MenuItem;
	@Output() delete: EventEmitter<MenuItem> = new EventEmitter();

	onDelete() {
		this.delete.emit( this.menu_item );
	}
}