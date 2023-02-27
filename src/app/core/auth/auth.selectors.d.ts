import { Store } from '@ngrx/store';
import { AppState } from '../core.state';
import { AuthState } from './auth.models';
import { AuthUser } from '@shared/models/user.model';
export declare const selectAuthState: import("@ngrx/store").MemoizedSelector<object, AuthState, import("@ngrx/store").DefaultProjectorFn<AuthState>>;
export declare const selectAuth: import("@ngrx/store").MemoizedSelector<object, AuthState, (s1: AuthState) => AuthState>;
export declare const selectIsAuthenticated: import("@ngrx/store").MemoizedSelector<object, boolean, (s1: AuthState) => boolean>;
export declare const selectIsUserLoaded: import("@ngrx/store").MemoizedSelector<object, boolean, (s1: AuthState) => boolean>;
export declare const selectAuthUser: import("@ngrx/store").MemoizedSelector<object, AuthUser, (s1: AuthState) => AuthUser>;
export declare const selectUserDetails: import("@ngrx/store").MemoizedSelector<object, import("@shared/models/user.model").User, (s1: AuthState) => import("@shared/models/user.model").User>;
export declare const selectUserTokenAccessEnabled: import("@ngrx/store").MemoizedSelector<object, boolean, (s1: AuthState) => boolean>;
export declare const selectHasRepository: import("@ngrx/store").MemoizedSelector<object, boolean, (s1: AuthState) => boolean>;
export declare const selectTbelEnabled: import("@ngrx/store").MemoizedSelector<object, boolean, (s1: AuthState) => boolean>;
export declare function getCurrentAuthState(store: Store<AppState>): AuthState;
export declare function getCurrentAuthUser(store: Store<AppState>): AuthUser;
