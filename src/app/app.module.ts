import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { MenuService } from './menu.service';

import { AppComponent } from "./app.component";
import { Home } from "./home/home.component";
import { MenuListComponent } from "./menu-list/menu-list.component";
import { MenuItemComponent } from './menu-item/menu-item.component';

const appRoutes: Routes = [
	{
		path: "",
		component: Home
	},
	{
		path: "categories",
		component: MenuListComponent
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
		MenuItemComponent
	],
	bootstrap: [
		AppComponent
	],
	providers: [
		MenuService
	]
})
export default class AppModule {}