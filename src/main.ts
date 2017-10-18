import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { enableProdMode } from "@angular/core";
import AppModule from "./app/app.module";

if (process.env.NODE_ENV === 'production') {
	enableProdMode();
} 

const platform_browser_dynamic = platformBrowserDynamic();
platform_browser_dynamic.bootstrapModule( AppModule );