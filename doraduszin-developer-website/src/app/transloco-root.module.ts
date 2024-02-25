import {
  getBrowserLang,
  provideTransloco,
  TranslocoModule
} from '@ngneat/transloco';
import { NgModule } from '@angular/core';
import { TranslocoHttpLoader } from './transloco-loader';
import {environment} from '../environments/environment';

@NgModule({
  exports: [ TranslocoModule ],
  providers: [
      provideTransloco({
        config: {
          availableLangs: ['en', 'es', 'hu'],
          defaultLang: determineDefaultLanguage(),
          reRenderOnLangChange: true,
          prodMode: environment.production,
        },
        loader: TranslocoHttpLoader
      }),
  ],
})
export class TranslocoRootModule {
}

function determineDefaultLanguage(): string {
  const browserLang = getBrowserLang().toLowerCase();

  if (browserLang.includes('es')) {
    return 'es';
  } else if (browserLang.includes('hu')) {
    return 'hu';
  } else {
    return 'en';
  }

  /*const normalizedLang = browserLang.split('-')[0];*/

  /*if (['en', 'es', 'hu'].includes(normalizedLang)) {
    return normalizedLang;
  } else {
    return 'en';
  }*/
}
