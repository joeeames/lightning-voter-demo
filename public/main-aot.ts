import { platformBrowser }    from '@angular/platform-browser';
import {AppModuleNgFactory} from "../aot/public/app/app.module.ngfactory";

import { UpgradeModule } from '@angular/upgrade/static';
import { downgradeInjectable, downgradeComponent } from '@angular/upgrade/static';

import './app/rxjsOperations';

import { AppModule } from './app/app.module';
import { downgradeItems } from "./downgrades";

import { enableProdMode } from '@angular/core';

declare var process;
if (process.env.ENV === 'production') {
    console.log("PROD MODE");
    enableProdMode();
}

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory).then(platformRef => {
  // downgrades
  downgradeItems();
    
  const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
  upgrade.bootstrap(document.documentElement, ['app']);
  console.log('hybrid app bootstrapped');
})
