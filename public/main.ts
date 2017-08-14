import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UpgradeModule, downgradeInjectable, downgradeComponent } from '@angular/upgrade/static';
import './app/rxjsOperations';
import { AppModule } from "./app/app.module";
import { NameParser } from "./app/admin/nameParser.service";
import { UnreviewedTalkComponent } from "./app/home/unreviewedTalk.component";
import { ProfileComponent } from "./app/profile/profile.component";
import { Sessions } from "./app/sessions/sessions.service";

declare var angular: angular.IAngularStatic;

platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {
  // downgrades
  angular.module('app')
    .factory('nameParser', downgradeInjectable(NameParser))
    .factory('sessions_v2', downgradeInjectable(Sessions))
    .directive('unreviewedTalk', downgradeComponent({
      component: UnreviewedTalkComponent
    }))
    .directive('profile', downgradeComponent({
      component: ProfileComponent
    }))

  const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
  upgrade.bootstrap(document.documentElement, ['app']);
  console.log('hybrid app bootstrapped');
})