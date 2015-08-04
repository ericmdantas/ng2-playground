/// <reference path="typings/tsd.d.ts" />

import {bootstrap} from 'angular2/angular2';
import {bind} from 'angular2/di';
import {App} from 'app/app';
import {MessageBus} from 'app/utils/utils';
import {routerInjectables} from 'angular2/router';

bootstrap(App, [ routerInjectables,
                 bind(MessageBus).toFactory(() => MessageBus.getInstance()) ]);
