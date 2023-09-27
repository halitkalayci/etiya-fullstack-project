import { createReducer, on } from '@ngrx/store';
import { login, logout } from './auth.actions';
import { LoggedInUserModel } from '../../models/loggedInUserModel';

const initialState = { isAuthenticated: false, user: {} };

export const authReducer = createReducer(
  initialState,
  on(login, (state, action) => {
    return { isAuthenticated: true, user: action };
  }),
  on(logout, (state, action) => {
    return { isAuthenticated: false, user: {} };
  })
);
// State is immutable
