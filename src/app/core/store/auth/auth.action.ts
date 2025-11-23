import { createAction, props } from "@ngrx/store";

export const setAuthUser = createAction('[Auth] setAuthUser', props<{ payload: any}>());
    
export const clearAuthUser = createAction('[Auth] clearAuthUser');