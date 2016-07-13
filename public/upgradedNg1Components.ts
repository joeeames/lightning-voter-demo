import { upgradeAdapter } from './upgradeAdapter';

const SESSION_DETAIL = upgradeAdapter.upgradeNg1Component('sessionDetail');
const NAV = upgradeAdapter.upgradeNg1Component('nav');

export const NG1_COMPONENTS = [
  SESSION_DETAIL, NAV
]
