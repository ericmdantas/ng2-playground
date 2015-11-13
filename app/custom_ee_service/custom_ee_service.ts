import * as Rx from '@reactivex/rxjs/dist/cjs/Rx';

export class CustomEEService {
  do() {
    return Rx.Observable.create((o) => {
      setInterval(() => {
        o.next(Date.now());
      }, 1234);
    });
  }
}
