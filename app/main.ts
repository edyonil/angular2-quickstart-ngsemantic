import { bootstrap } from '@angular/platform-browser-dynamic';
import { Type } from "@angular/core";

import { AppComponent } from './components/app.component';
import { APP_ROUTER_PROVIDERS } from "./routes";
import { Auth } from "./services/auth";

bootstrap(AppComponent,
[
    Auth,
    APP_ROUTER_PROVIDERS
]);