import { platformBrowserDynamic }    from '@angular/platform-browser-dynamic';
import { UpgradeModule } from '@angular/upgrade/static';
import { downgradeInjectable, downgradeComponent } from '@angular/upgrade/static';
import { setUpLocationSync } from '@angular/router/upgrade';

import './app/rxjsOperations';

import { AppModule } from './app/app.module';
import { downgradeItems } from "./downgrades";


platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {
  // downgrades
  downgradeItems();
    
  const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
  upgrade.bootstrap(document.documentElement, ['app']);
  setUpLocationSync(upgrade);
  console.log('hybrid app bootstrapped');
})
