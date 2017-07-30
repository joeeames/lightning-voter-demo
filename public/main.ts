import { platformBrowserDynamic }    from '@angular/platform-browser-dynamic';
import { UpgradeModule } from '@angular/upgrade/static';
import { downgradeInjectable, downgradeComponent } from '@angular/upgrade/static';

import { AppModule } from './app/app.module';
import { NameParser } from "./app/admin/nameParser.service";
import { UnreviewedTalkComponent } from "./app/home/unreviewedTalk.component";

declare var angular: angular.IAngularStatic;

platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {
  // downgrades
  angular.module('app')
    .factory('nameParser', downgradeInjectable(NameParser))
    .directive('unreviewedTalk', downgradeComponent({
      component: UnreviewedTalkComponent
    }))
    
  const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
  upgrade.bootstrap(document.documentElement, ['app']);
  console.log('hybrid app bootstrapped');
})
