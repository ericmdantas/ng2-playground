/// <reference path="../../typings/tsd.d.ts" />

import {Component, View} from 'angular2/angular2';
import {Inject} from 'angular2/angular2';
import {CompanyModel} from 'app/company/company_model.js';

@Component({
  selector: 'company',
  viewBindings: [CompanyModel]
})
@View({
  templateUrl: 'app/company/company.html',
  styleUrls: ['app/company/company.css']
})

export class CompanyCmp {
  company: CompanyModel;

  constructor(@Inject(CompanyModel) c: CompanyModel) {
    this.company = c;
  }
}
