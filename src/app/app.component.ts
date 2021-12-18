import { Component } from '@angular/core';
import { ConfigurationService } from './services/configuration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'angular-config';
  public api = 'lah-de-dah';

  constructor(configService: ConfigurationService) {    
    this.title = configService.config.title;
    this.api = configService.config.api;
  }
}
