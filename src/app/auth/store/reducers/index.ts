import { ActionReducerMap, MetaReducer } from '@ngrx/store'

import { environment } from '../../../../environments/environment'
import { reducers } from './reducers'
import { AppStateInterface } from '../../../shared/interfaces/app-state.interface'

export const index: ActionReducerMap<AppStateInterface> = {
  auth: reducers
}

export const metaReducers: MetaReducer<AppStateInterface>[] =
  !environment.production ? [] : []
