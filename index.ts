/// <reference path="typings/tsd.d.ts" />

import {bootstrap} from 'angular2/angular2';
import {Todo} from './todo/components/todo';
import {httpInjectables} from 'angular2/http';

bootstrap(Todo, [httpInjectables]);