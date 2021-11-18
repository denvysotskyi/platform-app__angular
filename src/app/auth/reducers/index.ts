import { ActionReducerMap, MetaReducer } from '@ngrx/store'

import { environment } from '../../../environments/environment'
import { REGISTER_KEY, registerReducer } from './register'
import { AuthStateInterface } from '../types/authState.interface'

export interface State {
  [REGISTER_KEY]: AuthStateInterface
}
export const reducers: ActionReducerMap<State> = {
  [REGISTER_KEY]: registerReducer
}

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : []
