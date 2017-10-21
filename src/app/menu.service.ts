import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { MenuItem } from './menu';

import 'rxjs/add/operator/map';

const menu_items: MenuItem[] = [
  {
    id: 81,
    short_name: "L",
    name: "Lunch",
    special_instructions: "Sunday-Friday 11:15am-3:00pm. Served with your choice of rice (Vegetable Fried RIce, Steamed Rice, Brown Rice), AND EITHER soup (Hot & Sour, Wonton, Vegetable, Egg Drop, Chicken Corn Soup) OR veggie egg roll. $1.00 extra to have both soup and egg roll.",
    url: "https://davids-restaurant.herokuapp.com/categories/81.json"
  },
  {
    id: 82,
    short_name: "A",
    name: "Soup",
    special_instructions: "",
    url: "https://davids-restaurant.herokuapp.com/categories/82.json"
  }
 ];

@Injectable()
export class MenuService {
	private apiUrl = 'https://davids-restaurant.herokuapp.com/categories.json';

	constructor(
		private http: Http
	) {}

	getMenuItems(): Observable<MenuItem[]> {
		return this.http
				.get(this.apiUrl)
				.map(response => {
					console.log(response.json());
					return response.json() as MenuItem[];
				});
	}
}