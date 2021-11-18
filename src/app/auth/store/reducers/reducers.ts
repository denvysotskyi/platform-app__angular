import { ActionReducerMap, MetaReducer } from '@ngrx/store'

import { environment } from '../../../../environments/environment'
import { registerReducer } from './registerReducer'
import { AppStateInterface } from '../../../shared/types/appState.interface'

export const reducers: ActionReducerMap<AppStateInterface> = {
  auth: registerReducer
}

export const metaReducers: MetaReducer<AppStateInterface>[] =
  !environment.production ? [] : []
