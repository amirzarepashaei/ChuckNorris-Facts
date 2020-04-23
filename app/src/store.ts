import { Action } from 'redux';
import { AddRemoveActions } from './app/app.actions';

export interface IAppState {
  custom: any[];
}

export const INITIAL_STATE: IAppState = {
  custom: [],
};

export function rootReducer(lastState: IAppState, action: Action): IAppState {
  switch(action.type) {
    case AddRemoveActions.ADD: return { custom: lastState.custom };
    case AddRemoveActions.REMOVE: return { custom: lastState.custom };
  }
  return lastState;
}
