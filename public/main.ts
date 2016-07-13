import { upgradeAdapter } from './upgradeAdapter';
import { upgradeAndDowngrade } from './upgrades';
import {disableDeprecatedForms, provideForms} from '@angular/forms';

upgradeAndDowngrade();

upgradeAdapter.addProvider(disableDeprecatedForms());
upgradeAdapter.addProvider(provideForms());

upgradeAdapter.bootstrap(document.documentElement, ['app']);
