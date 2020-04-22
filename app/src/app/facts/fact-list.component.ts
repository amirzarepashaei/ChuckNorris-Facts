import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'fact-list',
    templateUrl: './fact-list.component.html',
    styleUrls: ['./fact-list.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class FactDetailComponent { }