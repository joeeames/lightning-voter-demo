import { NameParser } from "./app/admin/nameParser.service";
import { UnreviewedTalkComponent } from "./app/home/unreviewedTalk.component";
import { ProfileComponent } from "./app/profile/profile.component";
import { Sessions } from "./app/sessions/sessions.service";
import { DetailPanelComponent } from "./app/common/detailPanel.component";
import { UpgradeModule, downgradeInjectable, downgradeComponent } from '@angular/upgrade/static';

declare var angular: angular.IAngularStatic;

export function downgradeItems() {
  angular.module('app')
    .factory('nameParser', downgradeInjectable(NameParser))
    .factory('sessions', downgradeInjectable(Sessions))
    .directive('unreviewedTalk', downgradeComponent({
      component: UnreviewedTalkComponent
    }))
    .directive('profile', downgradeComponent({
      component: ProfileComponent
    }))
    .directive('detailPanel', downgradeComponent({
      component: DetailPanelComponent
    }))
}