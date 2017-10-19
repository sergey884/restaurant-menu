import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MenuService } from './menu.service';

import { AppComponent } from "./app.component";
import { MenuListComponent } from "./menu-list/menu-list.component";
import { MenuItemComponent } from './menu-item/menu-item.component';

@NgModule({
	imports: [
		BrowserModule
	],
	declarations: [
		AppComponent,
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