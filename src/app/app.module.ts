import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { MenuService } from './menu.service';

import { AppComponent } from "./app.component";
import { Home } from "./home/home.component";
import { MenuListComponent } from "./menu-list/menu-list.component";
import { MenuCategoriesComponent } from './menu-categories/menu-categories.component';
import { MenuItemsComponent } from './menu_items/menu_items.component';
import { PageNotFoundComponent } from './PageNotFound/PageNotFound.component';

const appRoutes: Routes = [
	{
		path: "",
		component: Home
	},
	{
		path: "categories",
		component: MenuListComponent
	},
	{
		path: "items/:id",
		component: MenuItemsComponent
	},
	{
		path: "**",
		component: PageNotFoundComponent
	}
];

@NgModule({
	imports: [
		BrowserModule,
		HttpModule,
		RouterModule.forRoot( appRoutes )
	],
	declarations: [
		AppComponent,
		Home,
		MenuListComponent,
		MenuCategoriesComponent,
		MenuItemsComponent,
		PageNotFoundComponent
	],
	bootstrap: [
		AppComponent
	],
	providers: [
		MenuService
	]
})
export default class AppModule {}