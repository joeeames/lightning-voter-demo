import { upgradeAdapter } from './app.module';
import { upgradeAndDowngrade } from './upgrades';
import './rxjsOperations';
// import { HTTP_PROVIDERS } from '@angular/http';

upgradeAndDowngrade();

console.log('upgrading & downgrading done');
// upgradeAdapter.addProvider(HTTP_PROVIDERS);

upgradeAdapter.bootstrap(document.documentElement, ['app']);
