import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment'
import { Configuration } from './configuration';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ConfigurationService {
    private readonly configFile = "/assets/config.json";
    private configData: Configuration

    constructor(private http: HttpClient) {

    }

    load(): Observable<Configuration> {
        return this.http.get<Configuration>(this.configFile)
            .pipe(
                tap(cfg => this.configData = cfg)
            );
    }

    public get config() { return this.configData; }
}