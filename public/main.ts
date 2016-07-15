import { upgradeAdapter } from './upgradeAdapter';
import { upgradeAndDowngrade } from './upgrades';
import { disableDeprecatedForms, provideForms} from '@angular/forms';
import './rxjsOperations';
import { HTTP_PROVIDERS } from '@angular/http';

upgradeAndDowngrade();

upgradeAdapter.addProvider(disableDeprecatedForms());
upgradeAdapter.addProvider(provideForms());
upgradeAdapter.addProvider(HTTP_PROVIDERS);

upgradeAdapter.bootstrap(document.documentElement, ['app']);
