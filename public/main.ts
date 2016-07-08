import { upgradeAdapter } from './upgradeAdapter';
import { NameParser } from './admin/nameParser';
import { profileComponent } from './profile/profile.component';

upgradeAdapter.addProvider(NameParser);
angular.module('app').factory('nameParser', upgradeAdapter.downgradeNg2Provider(NameParser))

upgradeAdapter.upgradeNg1Provider("currentIdentity");
upgradeAdapter.upgradeNg1Provider("$location");
upgradeAdapter.upgradeNg1Provider("toastr");

angular.module('app').directive('profile', 
    <angular.IDirectiveFactory>upgradeAdapter.downgradeNg2Component(profileComponent));

upgradeAdapter.bootstrap(document.documentElement, ['app']);
