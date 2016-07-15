import { upgradeAdapter } from './upgradeAdapter';
import { NameParser } from './admin/nameParser.service';
import { Sessions } from './sessions/sessions.service';
import { ProfileComponent } from './profile/profile.component';
import { UnreviewedTalkComponent } from './home/unreviewedTalk.component';
import { CreateNewSessionComponent } from './home/createNewSession.component';
import { DetailPanelComponent } from './components/detailPanel.component';

export function upgradeAndDowngrade() {
  upgradeAdapter.addProvider(NameParser);
  angular.module('app').factory('nameParser', upgradeAdapter.downgradeNg2Provider(NameParser))
  
  upgradeAdapter.addProvider(Sessions);
  angular.module('app').factory('sessions', upgradeAdapter.downgradeNg2Provider(Sessions))

  upgradeAdapter.upgradeNg1Provider("currentIdentity");
  upgradeAdapter.upgradeNg1Provider("$location");
  upgradeAdapter.upgradeNg1Provider("toastr");
  upgradeAdapter.upgradeNg1Provider("sessions_ng1");

  angular.module('app').directive('profile', 
      <angular.IDirectiveFactory>upgradeAdapter.downgradeNg2Component(ProfileComponent));
  angular.module('app').directive('unreviewedTalk', 
      <angular.IDirectiveFactory>upgradeAdapter.downgradeNg2Component(UnreviewedTalkComponent));
  angular.module('app').directive('createNewSession', 
      <angular.IDirectiveFactory>upgradeAdapter.downgradeNg2Component(CreateNewSessionComponent));
  angular.module('app').directive('detailPanel', 
      <angular.IDirectiveFactory>upgradeAdapter.downgradeNg2Component(DetailPanelComponent));
}