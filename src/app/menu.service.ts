import { Injectable } from '@angular/core';
import { MenuItem } from './menu';

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
	getMenuItems() : MenuItem[] {
		return menu_items;
	}
}