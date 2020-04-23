import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'fact-root',
    templateUrl: './fact.component.html',
    styleUrls: ['./fact.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class FactComponent { }