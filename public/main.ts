import { upgradeAdapter } from './app.module';
import { upgradeAndDowngrade } from './upgrades';
// this is done to make sure that typescript knows about all the rxjs operations
import './rxjsOperations';

upgradeAndDowngrade();

upgradeAdapter.bootstrap(document.documentElement, ['app']);
