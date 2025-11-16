import { createReducer, on } from "@ngrx/store";
import { clearAuthUser, setAuthUser } from "./auth.action";

export const authFeatureKey = 'auth';

export interface AuthState {
  user: any;
}

export const initialAuthState: AuthState = {
  user: null,
};

export const authReducer = createReducer<AuthState>(
  initialAuthState,
  on(setAuthUser, (state, { payload }) => ({    ...state, user: payload })),
  on(clearAuthUser, (state) => ({ ...state, user: null })),
);