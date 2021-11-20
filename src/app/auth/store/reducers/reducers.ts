import { ActionReducerMap, MetaReducer } from '@ngrx/store'

import { environment } from '../../../../environments/environment'
import { registerReducer } from './register-reducer'
import { AppStateInterface } from '../../../shared/types/app-state.interface'

export const reducers: ActionReducerMap<AppStateInterface> = {
  auth: registerReducer
}

export const metaReducers: MetaReducer<AppStateInterface>[] =
  !environment.production ? [] : []
