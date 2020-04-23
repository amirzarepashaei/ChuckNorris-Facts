import { Injectable } from '@angular/core';
import { Action } from 'redux';

@Injectable()
export class AddRemoveActions {
  static ADD = 'ADD';
  static REMOVE = 'REMOVE';

  add(): Action {
    return { type: AddRemoveActions.ADD };
  }

  remove(): Action {
    return { type: AddRemoveActions.REMOVE };
  }
}