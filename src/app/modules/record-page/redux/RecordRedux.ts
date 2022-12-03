import {Action} from '@reduxjs/toolkit'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {put, takeLatest} from 'redux-saga/effects'

export interface ActionWithPayload<T> extends Action {
    payload?: T
}

export const actionTypes = {
    GetChart: 'record/chart',
    GetEntry: 'record/entry',
    GetExercise: 'record/exercise'
}

const initialTopState: ITopState = {
    chart: [],
    entry: [],
    exercise: []

}

export interface ITopState {
    [key: string]: any
}

export const reducer = /*persistReducer(
    {storage, key: 'v100-demo1-auth', whitelist: ['user', 'accessToken']},*/
    (state: ITopState = initialTopState, action: ActionWithPayload<ITopState>) => {
        console.log(action)
        switch (action.type) {
            case actionTypes.GetChart: {
                const chart = action.payload || []
                return {...state, chart}
            }
            case actionTypes.GetEntry: {

                const entry = action.payload || []
                return {...state, entry}
            }
            case actionTypes.GetExercise: {
                const exercise = action.payload || []
                return {...state, exercise}
            }

            default:
                return state
        }
    }
// )

export const actions = {
    loadChart: (chart: any[]) => ({type: actionTypes.GetChart, payload: chart}),
    loadEntry: (entry: any[]) => ({type: actionTypes.GetEntry, payload: entry}),
    loadExercise: (exercise: any[]) => ({type: actionTypes.GetExercise, payload: exercise}),
}

// export function* saga() {
//     yield takeLatest(actionTypes.Login, function* loginSaga() {
//         yield put(actions.requestUser())
//     })
//
//     yield takeLatest(actionTypes.Register, function* registerSaga() {
//         yield put(actions.requestUser())
//     })
//
//     yield takeLatest(actionTypes.UserRequested, function* userRequested() {
//         const {data: user} = yield getUserByToken()
//         yield put(actions.fulfillUser(user))
//     })
// }
