import { platformBrowserDynamic }    from '@angular/platform-browser-dynamic';
import { UpgradeModule } from '@angular/upgrade/static';
import { downgradeInjectable, downgradeComponent } from '@angular/upgrade/static';

import { AppModule } from './app/app.module';

declare var angular: angular.IAngularStatic;

platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {
  // upgrades & downgrades

  const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
  upgrade.bootstrap(document.documentElement, ['app']);
  console.log('hybrid app bootstrapped');
})
