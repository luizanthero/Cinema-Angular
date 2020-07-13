import { createAction, createReducer, on } from '@ngrx/store';

enum ActionTypes {
  Login = 'Login',
  Logout = 'Logout',
}

export const Login = createAction(ActionTypes.Login);
export const Logout = createAction(ActionTypes.Logout);

const INITIAL_STATE = {
  isAuth: sessionStorage['isAuth'],
};

export const AuthenticateReducer = createReducer(
  INITIAL_STATE,
  on(Login, (state) => ({ ...state, isAuth: true })),
  on(Logout, (state) => ({ ...state, isAuth: false }))
);
