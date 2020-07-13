import { createAction, createReducer, on, props } from '@ngrx/store';

enum ActionTypes {
  Change = 'Change',
}

export const ChangeLoader = createAction(
  ActionTypes.Change,
  props<{ payload: boolean }>()
);

const INITIAL_STATE = {
  loader: false,
};

export const LoaderReducer = createReducer(
  INITIAL_STATE,
  on(ChangeLoader, (state, action: any) => ({
    ...state,
    loader: action.payload,
  }))
);
