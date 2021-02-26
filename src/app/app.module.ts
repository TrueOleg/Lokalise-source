import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';

// the second parameter 'fr-FR' is optional
registerLocaleData(localeRu, 'ru');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// lokalise2 project create --name AngularI18n --token "22a1143aac3aab8b4d9dded56f3640e7a8cbb1d3" --languages '[{"lang_iso":"ru"},{"lang_iso": "en", "custom_iso": "en-us"}]' --base-lang-iso "en-us"
// lokalise2 file upload --lang-iso ru --file "./src/i18n/messages.ru.xlf" --project-id "84556675603338d432d834.85083532" --token "22a1143aac3aab8b4d9dded56f3640e7a8cbb1d3" --detect-icu-plurals
