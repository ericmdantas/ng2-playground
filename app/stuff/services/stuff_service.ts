import {Stuff} from 'stuff_type';
import {IStuffService} from 'app/common/interfaces';

export class StuffService implements IStuffService {
    add(info:string):Rx.Observable {
        return Rx.Observable.create(observer => {
            observer.onNext(info);
            observer.onCompleted();
        });
    }

    remove(list: List<Stuff>, id:string|number):Rx.Observable {
        list.forEach((stuff, index) => {
            if (stuff.createdAt == id) {
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
