import { upgradeAdapter } from './upgradeAdapter';
import { NameParser } from './admin/nameParser';

upgradeAdapter.addProvider(NameParser);
angular.module('app').factory('nameParser', upgradeAdapter.downgradeNg2Provider(NameParser))

upgradeAdapter.bootstrap(document.documentElement, ['app']);
