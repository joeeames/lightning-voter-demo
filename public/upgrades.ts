import { upgradeAdapter } from './app.module';
import { NameParser } from './admin/nameParser.service';
import { Sessions } from './sessions/sessions.service';
import { ProfileComponent } from './profile/profile.component';
import { UnreviewedTalkComponent } from './home/unreviewedTalk.component';
import { CreateNewSessionComponent } from './home/createNewSession.component';
import { DetailPanelComponent } from './common/detailPanel.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';

export function upgradeAndDowngrade() {
//   upgradeAdapter.addProvider(NameParser);
//   upgradeAdapter.addProvider(Sessions);
  
  // Downgrading Angular 2 services to Angular 1 services
  angular.module('app').factory('nameParser', upgradeAdapter.downgradeNg2Provider(NameParser)) 
  angular.module('app').factory('sessions', upgradeAdapter.downgradeNg2Provider(Sessions))

  // Upgrading Angular 1 services to Angular 2 services
  upgradeAdapter.upgradeNg1Provider("currentIdentity");
  upgradeAdapter.upgradeNg1Provider("$location");
  upgradeAdapter.upgradeNg1Provider("toastr");
  upgradeAdapter.upgradeNg1Provider("unreviewedSessionCount");

  // downgrading Angular 2 Components to Angular 1 Directives
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