/// <reference path="../../../typings/tsd.d.ts" />

import {TaskType} from './task_type';

export class TaskService {
    add(task: TaskType):Rx.Observable {
        return Rx.Observable.create(o => {
           o.onNext(task);
           o.onCompleted();
        });
    }

    edit(id:string|number, taskList: List<TaskType>, task: TaskType):Rx.Observable {
        taskList
            .forEach((t, index) => {
                if (t.id === id) {
                    return taskList[index] = task;
                };
            });

        return Rx.Observable.create(o => {
           o.onNext(taskList);
           o.onCompleted();
        });
    }

    remove(id:string|number, taskList: List<TaskType>):Rx.Observable {
        taskList = <List<TaskType>>taskList.filter(task => task.id !== id);

        return Rx.Observable.create(o => {
           o.onNext(taskList);
           o.onCompleted();
        });
    }
}