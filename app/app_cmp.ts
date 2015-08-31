/// <reference path="../typings/tsd.d.ts"/>

import {Component, View, LifecycleEvent, bootstrap} from 'angular2/angular2';
import {Inject, bind} from 'angular2/di';
import {HeaderCmp} from 'app/header/header_cmp.js';
import {FooterCmp} from 'app/footer/footer_cmp.js';
import {MainCmp} from 'app/main/main_cmp.js';
import {MainBus, IBus} from 'app/bus/bus.js';
import {SomethingThatUsesWebWorkerCmp} from 'app/something_that_uses_web_worker/something_that_uses_web_worker_cmp.js';
import {SimpleEventsCmp} from 'app/simple_events/simple_event_cmp.js';
import {X9Directive} from 'app/simple_events/simple_event_cmp.js';
import {OldestCmp} from 'app/hierarchy_cmps/oldest_cmp.js';
import {HalfWayThereCmp} from 'app/hierarchy_cmps/half_way_there_cmp.js';
import {YoungestCmp} from 'app/hierarchy_cmps/youngest_cmp.js';
import {NotYetDefinedProblemCmp} from 'app/not_yet_defined/not_yet_defined_problem_cmp.js';
import {NyCmp} from 'app/not_yet_defined_cmp_stuff/ny_cmp.js';
import {ModalWrapperCmp} from 'app/modal/modal_cmp.js';
import {QueryCmp} from 'app/query/query_cmp.js';
import {DiCmp} from 'app/di/di_cmp.js';
import {HostOfStuffCmp} from 'app/host/host_of_stuff_cmp.js';
import {HosKidCmp} from 'app/host/host_of_stuff_cmp.js';
import {HostWithoutNgContentParentCmp} from 'app/host_without_ng_content/host_without_ng_content_cmp.js';
import {HttpCmp} from 'app/http/http_cmp.js'
import {DirectivesCmp} from 'app/directives/directives_cmp.js';
import {DirwpropWrapperCmp} from 'app/directives/directives_with_prop_cmp';

@Component({
  selector: 'app',
  lifecycle: [LifecycleEvent.onInit]
})
@View({
  template: `
    <hheader></hheader>

    <mmain>
      <something-that-uses-web-worker></something-that-uses-web-worker>

      <simple-events></simple-events>

      <oldest>
        <half-way-there>
          <youngest></youngest>
        </half-way-there>
      </oldest>

      <not-yet-defined-problem></not-yet-defined-problem>

      <host-of-stuff>
        <hos-kid></hos-kid>
      </host-of-stuff>

      <query-cmp></query-cmp>

      <mah-http></mah-http>

      <dir-cmp></dir-cmp>

      <dirwprop-wrapper></dirwprop-wrapper>

      <hwonc-parent></hwonc-parent>

      <di></di>

      <ny></ny>

      <modal-wrapper><modal-wrapper>

    </mmain>

    <ffooter></ffooter>
  `,
  directives: [HeaderCmp, MainCmp, FooterCmp,
              SimpleEventsCmp, SomethingThatUsesWebWorkerCmp,
              SimpleEventsCmp, OldestCmp, HalfWayThereCmp,
              YoungestCmp, NotYetDefinedProblemCmp,
              NyCmp, QueryCmp, ModalWrapperCmp,
              DiCmp, HostOfStuffCmp, HosKidCmp,
              HostWithoutNgContentParentCmp, HttpCmp, DirectivesCmp, DirwpropWrapperCmp]
})

export class AppCmp {
  _mainBus: IBus = MainBus.getInstance();

  onInit() {
      console.log('app init');

      this._mainBus
          .listen()
          .toRx()
          .subscribe(i => console.log(i));
  }
}

Promise.all([
              bootstrap(HeaderCmp, bind(MainBus).toFactory(() => MainBus.getInstance())),
              bootstrap(MainCmp, bind(MainBus).toFactory(() => MainBus.getInstance())),
              bootstrap(FooterCmp, bind(MainBus).toFactory(() => MainBus.getInstance())),
              bootstrap(SomethingThatUsesWebWorkerCmp, bind(MainBus).toFactory(() => MainBus.getInstance())),
              bootstrap(SimpleEventsCmp, bind(MainBus).toFactory(() => MainBus.getInstance())),
              bootstrap(OldestCmp), bootstrap(HalfWayThereCmp), bootstrap(YoungestCmp),
              bootstrap(NotYetDefinedProblemCmp),
              bootstrap(HostOfStuffCmp),
              bootstrap(HosKidCmp),
              bootstrap(NyCmp),
              bootstrap(ModalWrapperCmp),
              bootstrap(DiCmp),
              bootstrap(HostWithoutNgContentParentCmp),
              bootstrap(HttpCmp),
              bootstrap(DirectivesCmp),
              bootstrap(DirwpropWrapperCmp),
              bootstrap(QueryCmp)])
       .then(() => console.log('app boot ok'))
       .catch((error) => console.log(`app boot error: ${error}`));
