/// <reference path="../typings/tsd.d.ts" />

import {Component, View, LifecycleEvent} from 'angular2/angular2';
import {RouterOutlet, RouteConfig} from 'angular2/router';
import {DashboardCmp} from 'app/dashboard/dashboard.js';
import {CompanyCmp} from 'app/company/company.js';
import {EmployeeCmp} from 'app/employees/employee.js';
import {HeaderCmp} from 'app/header/header_cmp.js';
import {SuperSecretCmp} from 'app/super_secret/super_secret_cmp.js';

@Component({
    selector: 'app',
    lifecycle: [LifecycleEvent.onInit]
})
@View({
    template: `
      <h-header></h-header>
      <main>
        <router-outlet></router-outlet>
      </main>
      </div>
    `,
    directives: [RouterOutlet, HeaderCmp]
})
@RouteConfig([
  {path: '/', as: 'dashboard', component: DashboardCmp},
  {path: '/company', as: 'company', component: CompanyCmp},
  {path: '/employee', as: 'employee', component: EmployeeCmp},
  {path: '/super_secret', as: 'super_secret', component: SuperSecretCmp}
])

export class AppCmp {
  onInit() {
    console.log('app init');
  }
}
