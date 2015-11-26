import {bootstrap} from 'angular2/angular2';
import {HTTP_PROVIDERS} from 'angular2/http';
import {AppCmp} from 'app/app.js';

bootstrap(AppCmp, [HTTP_PROVIDERS]).then(() => console.log('app init'));
