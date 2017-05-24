import { platformBrowserDynamic }    from '@angular/platform-browser-dynamic';
import { UpgradeModule } from '@angular/upgrade/static';
import { downgradeInjectable, downgradeComponent } from '@angular/upgrade/static';
// this is done to make sure that typescript knows about all the rxjs operations
import './rxjsOperations';

import { AppModule } from './app.module';
import { NameParser } from './admin/nameParser.service';
import { UnreviewedTalkComponent  } from './home/unreviewedTalk.component';

declare var angular: angular.IAngularStatic;

platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {
  // upgrades & downgrades
  angular.module('app')
    .factory('nameParser', downgradeInjectable(NameParser))
    .directive('unreviewedTalk', downgradeComponent({
        component: UnreviewedTalkComponent
    }))

  const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
  upgrade.bootstrap(document.documentElement, ['app']);
  console.log('hybrid app bootstrapped');
})
