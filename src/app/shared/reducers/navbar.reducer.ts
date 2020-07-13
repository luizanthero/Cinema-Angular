import { createAction, createReducer, on } from '@ngrx/store';

enum ActionTypes {
  Show = 'Show',
  Hide = 'Hide',
}

export const Show = createAction(ActionTypes.Show);
export const Hide = createAction(ActionTypes.Hide);

const INITIAL_STATE = {
  navbar: true,
};

export const NavbarReducer = createReducer(
  INITIAL_STATE,
  on(Show, (state) => ({ ...state, navbar: true })),
  on(Hide, (state) => ({ ...state, navbar: false }))
);
