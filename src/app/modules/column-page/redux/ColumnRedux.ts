import {Action} from '@reduxjs/toolkit'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {put, takeLatest} from 'redux-saga/effects'

export interface ActionWithPayload<T> extends Action {
    payload?: T
}

export const actionTypes = {
    GetRecommend: 'column/recommend',
    GetPost: 'column/post'
}

const initialTopState: ITopState = {
    recommend: [],
    post: []

}

export interface ITopState {
    [key: string]: any
}

export const reducer = /*persistReducer(
    {storage, key: 'v100-demo1-auth', whitelist: ['user', 'accessToken']},*/
    (state: ITopState = initialTopState, action: ActionWithPayload<ITopState>) => {
        switch (action.type) {

            case actionTypes.GetRecommend: {
                const recommend = action.payload || []
                return {...state, recommend}
            }
            case actionTypes.GetPost: {
                const post = action.payload || []
                return {...state, post}
            }

            default:
                return state
        }
    }
// )

export const actions = {
    loadRecommend: (recommend: any[]) => ({type: actionTypes.GetRecommend, payload: recommend}),
    loadPost: (post: any[]) => ({type: actionTypes.GetPost, payload: post}),
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
