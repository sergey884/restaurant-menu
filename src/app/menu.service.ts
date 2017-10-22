import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { MenuItem } from './menu';
import { Items } from './items';

import 'rxjs/add/operator/map';

@Injectable()
export class MenuService {
	private apiUrl = 'https://davids-restaurant.herokuapp.com';

	constructor(
		private http: Http
	) {}

	getMenuCategories(): Observable<MenuItem[]> {
		const url = `${this.apiUrl}/categories.json`;

		return this.http
				.get( url )
				.map(response => {
					console.log(response.json());
					return response.json() as MenuItem[];
				});
	}

	getMenuItems(id: string): Observable<Items[]> {
		const url = `${this.apiUrl}/menu_items.json?category=${id}`;

		return this.http
				.get( url )
				.map(response => {
					console.log(response.json().menu_items);
					return response.json().menu_items as Items[];
				});
	}
}