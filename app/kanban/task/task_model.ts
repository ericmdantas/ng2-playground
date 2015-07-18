/// <reference path="../../../typings/tsd.d.ts" />

import {Inject} from 'angular2/di';
import {FormBuilder, ControlGroup, Validators} from 'angular2/forms';

export class TaskModel {
    form: ControlGroup;

    constructor(@Inject(FormBuilder) fb: FormBuilder) {
        this.form = fb.group({
            "description": ["desc default", Validators.required],
            "owner": ["_eric", Validators.required]
        });
    }
}