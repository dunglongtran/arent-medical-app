import {all} from 'redux-saga/effects'
import {combineReducers} from 'redux'

import * as auth from '../../app/modules/auth'
import * as top from '../../app/modules/top-page'
import * as record from '../../app/modules/record-page'
import * as column from '../../app/modules/column-page'

export const rootReducer = combineReducers({
    auth: auth.reducer,
    top: top.reducer,
    record: record.reducer,
    column: column.reducer
})

export type RootState = ReturnType<typeof rootReducer>

export function* rootSaga() {
    yield all([auth.saga()])
}
