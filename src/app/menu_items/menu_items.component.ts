import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Items } from '../items';

import { MenuService } from '../menu.service';

import 'rxjs/add/operator/switchMap';

@Component({
	selector: 'menu-items',
	templateUrl: './menu_items.component.html'
})
export class MenuItemsComponent implements OnInit {
	id: string = '';
	items: Observable<Items[]>;

	constructor(
		private route: ActivatedRoute,
		private menuService: MenuService
	){}

	ngOnInit() {
		const id = this.route.snapshot.paramMap.get('id');

		this.items = this.route.paramMap
			.switchMap((params: ParamMap) => {
				this.id = params.get('id');
				return this.menuService.getMenuItems( this.id );
			}) 
	}
}