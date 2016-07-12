import { upgradeAdapter } from './upgradeAdapter';
import { upgradeAndDowngrade } from './upgrades';

upgradeAndDowngrade();

upgradeAdapter.bootstrap(document.documentElement, ['app']);
