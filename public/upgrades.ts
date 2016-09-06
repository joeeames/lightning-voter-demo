import { upgradeAdapter } from './app.module';
import { NameParser } from './admin/nameParser.service';
import { Sessions } from './sessions/sessions.service';
import { Users } from './security/users.service';
import { CurrentIdentity } from './security/currentIdentity.service';
import { ProfileComponent } from './profile/profile.component';
import { UnreviewedTalkComponent } from './home/unreviewedTalk.component';
import { CreateNewSessionComponent } from './home/createNewSession.component';
import { DetailPanelComponent } from './common/detailPanel.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { SessionDetailWithVotesComponent } from './sessions/sessionDetailWithVotes.component';
import { SessionDetailComponent } from './sessions/sessionDetail.component';
import { LogoutComponent } from './security/logout.component';
import { LoginComponent } from './security/login.component';
import { UserListComponent } from './admin/userList.component';
import { Auth } from './security/auth.service';

export function upgradeAndDowngrade() {
  
  // Downgrading Angular 2 services to Angular 1 services
  angular.module('app').factory('nameParser', upgradeAdapter.downgradeNg2Provider(NameParser)) 
  angular.module('app').factory('sessions', upgradeAdapter.downgradeNg2Provider(Sessions))
  angular.module('app').factory('users', upgradeAdapter.downgradeNg2Provider(Users))
  angular.module('app').factory('unreviewedSessionCount', upgradeAdapter.downgradeNg2Provider(Sessions))
  angular.module('app').factory('currentIdentity', upgradeAdapter.downgradeNg2Provider(CurrentIdentity))
  angular.module('app').factory('auth', upgradeAdapter.downgradeNg2Provider(Auth))

  // Upgrading Angular 1 services to Angular 2 services
  upgradeAdapter.upgradeNg1Provider("$location");
  upgradeAdapter.upgradeNg1Provider("toastr");

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
  angular.module('app').directive('sessionDetailWithVotes', 
      <angular.IDirectiveFactory>upgradeAdapter.downgradeNg2Component(SessionDetailWithVotesComponent));
  angular.module('app').directive('sessionDetail', 
      <angular.IDirectiveFactory>upgradeAdapter.downgradeNg2Component(SessionDetailComponent));
  angular.module('app').directive('logout', 
      <angular.IDirectiveFactory>upgradeAdapter.downgradeNg2Component(LogoutComponent));
  angular.module('app').directive('login', 
      <angular.IDirectiveFactory>upgradeAdapter.downgradeNg2Component(LoginComponent));
  angular.module('app').directive('userList', 
      <angular.IDirectiveFactory>upgradeAdapter.downgradeNg2Component(UserListComponent));
}