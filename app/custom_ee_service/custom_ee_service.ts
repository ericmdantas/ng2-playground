import {Observable} from 'angular2/angular2';

export class CustomEEService {
  do() {
    return Observable.create((o) => {
      setInterval(() => {
        o.next(Date.now());
      }, 1234);
    });
  }
}
