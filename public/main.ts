import { platformBrowserDynamic }    from '@angular/platform-browser-dynamic';
import { UpgradeModule } from '@angular/upgrade/static';
import { downgradeInjectable, downgradeComponent } from '@angular/upgrade/static';
// this is done to make sure that typescript knows about all the rxjs operations
import './app/rxjsOperations';

import { AppModule } from './app/app.module';
import { UnreviewedTalkComponent  } from './app/home/unreviewedTalk.component';

declare var angular: angular.IAngularStatic;

platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {
  // upgrades & downgrades
    angular.module('app')
    .directive('unreviewedTalk', downgradeComponent({
        component: UnreviewedTalkComponent
    }))

  const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
  upgrade.bootstrap(document.documentElement, ['app']);
  console.log('hybrid app bootstrapped');
})
