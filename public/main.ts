import { upgradeAdapter } from './app.module';
import { upgradeAndDowngrade } from './upgrades';
import './rxjsOperations';

upgradeAndDowngrade();

upgradeAdapter.bootstrap(document.documentElement, ['app']);
