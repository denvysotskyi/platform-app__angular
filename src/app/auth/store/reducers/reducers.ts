import { ActionReducerMap, MetaReducer } from '@ngrx/store'

import { environment } from '../../../../environments/environment'
import { registerReducer } from './registerReducer'
import { RegisterReducerInterface } from '../../interfaces/reducers.interface'

export const reducers: ActionReducerMap<RegisterReducerInterface> = {
  auth: registerReducer
}

export const metaReducers: MetaReducer<RegisterReducerInterface>[] =
  !environment.production ? [] : []
