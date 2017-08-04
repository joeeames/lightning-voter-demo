import { downgradeInjectable, downgradeComponent } from '@angular/upgrade/static';
import { NameParser } from "./app/admin/nameParser.service";
import { UnreviewedTalkComponent } from "./app/home/unreviewedTalk.component";
import { ProfileComponent } from "./app/profile/profile.component";
import { Sessions } from "./app/sessions/sessions.service";
import { DetailPanelComponent } from "./app/common/detailPanel.component";
import { ResultsComponent } from "./app/admin/results.component";
import { NavComponent } from "./app/nav/nav.component";
import { CurrentIdentity } from "./app/security/currentIdentity.service";
import { UnreviewedSessionCount } from "./app/sessions/unreviewedSessionCount.service";
import { Auth } from "./app/security/auth.service";

declare var angular: angular.IAngularStatic;

export function downgradeItems() {
   angular.module('app')
    .factory('nameParser', downgradeInjectable(NameParser))
    .factory('sessions', downgradeInjectable(Sessions))
    .factory('currentIdentity', downgradeInjectable(CurrentIdentity))
    .factory('sessions', downgradeInjectable(Sessions))
    .factory('auth', downgradeInjectable(Auth))
    .factory('unreviewedSessionCount', downgradeInjectable(UnreviewedSessionCount))
    .directive('unreviewedTalk', downgradeComponent({
      component: UnreviewedTalkComponent
    }))
    .directive('profile', downgradeComponent({
      component: ProfileComponent
    }))
    .directive('detailPanel', downgradeComponent({
      component: DetailPanelComponent,
    }))
    .directive('results', downgradeComponent({
      component: ResultsComponent,
    }))
    .directive('nav', downgradeComponent({
      component: NavComponent,
    }))
}