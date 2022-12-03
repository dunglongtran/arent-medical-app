import {Action} from '@reduxjs/toolkit'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {put, takeLatest} from 'redux-saga/effects'

export interface ActionWithPayload<T> extends Action {
    payload?: T
}

export const actionTypes = {
    GetChart: 'top/chart',
    GetTransit: 'top/transit',
    GetMeal: 'top/meal'
}

const initialTopState: ITopState = {
    chart: [],
    transit: [],
    meal: []

}

export interface ITopState {
    [key: string]: any
}

export const reducer = /*persistReducer(
    {storage, key: 'v100-demo1-auth', whitelist: ['user', 'accessToken']},*/
    (state: ITopState = initialTopState, action: ActionWithPayload<ITopState>) => {
        switch (action.type) {
            case actionTypes.GetChart: {
                const chart = action.payload || []
                return {...state, chart}
            }
            case actionTypes.GetTransit: {
                const transit = action.payload || []
                return {...state, transit}
            }
            case actionTypes.GetMeal: {
                const meal = action.payload || []
                return {...state, meal}
            }

            default:
                return state
        }
    }
// )

export const actions = {
    loadChart: (chart: any[]) => ({type: actionTypes.GetChart, payload: chart}),
    loadTransit: (transit: any[]) => ({type: actionTypes.GetTransit, payload: transit}),
    loadMeal: (meal: any[]) => ({type: actionTypes.GetMeal, payload: meal}),
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
