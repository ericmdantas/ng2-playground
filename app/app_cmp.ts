/// <reference path="../typings/tsd.d.ts" />

import {Component, View} from 'angular2/angular2';
import {RouterOutlet, RouteConfig} from 'angular2/router';
import {DashboardCmp} from 'app/dashboard/dashboard.js';
import {CompanyCmp} from 'app/company/company.js';
import {EmployeeCmp} from 'app/employees/employee.js';
import {HeaderCmp} from 'app/header/header_cmp.js';

@Component({
    selector: 'app'
})
@View({
    template: `
      <h-header></h-header>
      <div class="container">
        <h1>app</h1>
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
  {path: '/employee', as: 'employee', component: EmployeeCmp}
])

export class AppCmp {

}
