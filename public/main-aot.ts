import { platformBrowser } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';
import './app/rxjsOperations';
import { AppModule } from "./app/app.module";
import { AppModuleNgFactory } from '../aot/public/app/app.module.ngfactory';

enableProdMode();
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory)