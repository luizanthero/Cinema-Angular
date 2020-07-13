import { createAction, createReducer, on, props } from '@ngrx/store';

enum ActionTypes {
  IsAuth = 'Auth',
  NotAuth = 'NotAuth',
}

export const IsAuth = createAction(
  ActionTypes.IsAuth,
  props<{ payload: any }>()
);
export const NotAuth = createAction(ActionTypes.NotAuth);

const INITIAL_STATE = {
  menus: [],
};

export const MenuReducer = createReducer(
  INITIAL_STATE,
  on(IsAuth, (state, action: any) => ({ ...state, menus: action.payload })),
  on(NotAuth, (state) => ({ ...state, menus: [] }))
);
