import { WebPlugin } from '@capacitor/core';

import type { ErrorViewPlugin } from './definitions';

export class ErrorViewWeb extends WebPlugin implements ErrorViewPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
