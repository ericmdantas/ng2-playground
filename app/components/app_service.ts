import {Stuff} from 'stuff_type';

export class AppService {
    add(info: string):Rx.Observable {
        return Rx.Observable.create(observer => {
            debugger;
            observer.onNext(info);
            observer.onCompleted();
        });
    }

    remove(list: List<Stuff>, date: Date):Rx.Observable {
        list.forEach((stuff, index) => {
            if (stuff.createdAt === date) {
                list.splice(index, 1);
                return;
            }
        });

        return Rx.Observable.create(observer => {
            observer.onNext(list);
            observer.onCompleted();
        });
    }
}
