import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfigurationService } from './services/configuration.service';
import { Configuration } from './services/configuration';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appInit,
      deps: [ConfigurationService],
      multi: true
    }
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }

function appInit(configService: ConfigurationService) {
  return () => new Promise((resolve, reject) => {
    configService.load()
      .subscribe(cfg => {
        resolve(cfg);
      });
  });
}