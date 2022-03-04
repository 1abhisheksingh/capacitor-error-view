import { registerPlugin } from '@capacitor/core';

import type { ErrorViewPlugin } from './definitions';

const ErrorView = registerPlugin<ErrorViewPlugin>('ErrorView', {
  web: () => import('./web').then(m => new m.ErrorViewWeb()),
});

export * from './definitions';
export { ErrorView };
