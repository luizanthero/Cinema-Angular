import { createAction, createReducer, on } from '@ngrx/store';

enum ActionTypes {
  Show = 'Show',
  Hide = 'Hide',
}

export const ShowLoader = createAction(ActionTypes.Show);
export const HideLoader = createAction(ActionTypes.Hide);

const INITIAL_STATE = {
  loader: false,
};

export const LoaderReducer = createReducer(
  INITIAL_STATE,
  on(ShowLoader, (state) => ({ ...state, loader: true })),
  on(HideLoader, (state) => ({ ...state, loader: true }))
);
