import { upgradeAdapter } from './upgradeAdapter';
import { NameParser } from './admin/nameParser.service';
import { Sessions } from './sessions/sessions.service';
import { ProfileComponent } from './profile/profile.component';
import { UnreviewedTalkComponent } from './home/unreviewedTalk.component';
import { CreateNewSessionComponent } from './home/createNewSession.component';
import { DetailPanelComponent } from './common/detailPanel.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';

export function upgradeAndDowngrade() {
  upgradeAdapter.addProvider(NameParser);
  angular.module('app').factory('nameParser', upgradeAdapter.downgradeNg2Provider(NameParser))
  
  upgradeAdapter.addProvider(Sessions);
  angular.module('app').factory('sessions', upgradeAdapter.downgradeNg2Provider(Sessions))

  upgradeAdapter.upgradeNg1Provider("currentIdentity");
  upgradeAdapter.upgradeNg1Provider("$location");
  upgradeAdapter.upgradeNg1Provider("toastr");
  upgradeAdapter.upgradeNg1Provider("unreviewedSessionCount");

  angular.module('app').directive('profile', 
      <angular.IDirectiveFactory>upgradeAdapter.downgradeNg2Component(ProfileComponent));
  angular.module('app').directive('unreviewedTalk', 
      <angular.IDirectiveFactory>upgradeAdapter.downgradeNg2Component(UnreviewedTalkComponent));
  angular.module('app').directive('createNewSession', 
      <angular.IDirectiveFactory>upgradeAdapter.downgradeNg2Component(CreateNewSessionComponent));
  angular.module('app').directive('detailPanel', 
      <angular.IDirectiveFactory>upgradeAdapter.downgradeNg2Component(DetailPanelComponent));
  angular.module('app').directive('home', 
      <angular.IDirectiveFactory>upgradeAdapter.downgradeNg2Component(HomeComponent));
  angular.module('app').directive('nav', 
      <angular.IDirectiveFactory>upgradeAdapter.downgradeNg2Component(NavComponent));
}