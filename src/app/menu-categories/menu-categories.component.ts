import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MenuItem } from '../menu';

@Component({
	selector: 'menu-categories',
	templateUrl: './menu-categories.component.html'
})
export class MenuCategoriesComponent {
	@Input() menu_item: MenuItem;
	@Output() delete: EventEmitter<MenuItem> = new EventEmitter();

	onDelete() {
		this.delete.emit( this.menu_item );
	}
}