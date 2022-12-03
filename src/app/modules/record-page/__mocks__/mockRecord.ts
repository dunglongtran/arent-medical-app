import MockAdapter from 'axios-mock-adapter'
import {
    GET_CHART, GET_EXERCISE, GET_ENTRY,
} from '../redux/RecordCRUD'


export function mockRecord(mock: MockAdapter) {
    mock.onGet(GET_CHART).reply(() => {
        const data = [
            {
                name: 'Data 1',
                data: [118, 89, 71, 65, 51, 49, 42, 39, 36, 26, 18, 3],
                color: 'yellow',
            },
            {
                name: 'DA2',
                data: [10, 71, 85, 51, 89, 92, 69, 21, 90, 6, 8, 25],
                color: 'green'
            },
            {
                name: 'DA2',
                data: [143, 103, 85, 91, 89, 92, 69, 71, 90, 56, 84, 25],
                color: 'blue'
            },
        ]
        return [200, data]
    })
    mock.onGet(GET_ENTRY).reply(() => {
        const data = [
            {
                icon: '/healthy/record/MyRecommend-1.svg',
                name: 'Body Record'
            },
            {
                icon: '/healthy/record/MyRecommend-2.svg',
                name: 'My Exercise'
            },
            {
                icon: '/healthy/record/MyRecommend-3.svg',
                name: 'My Diary'
            },
        ]
        return [200, data]
    })
    mock.onGet(GET_EXERCISE).reply(() => {
        const data = Array(8).fill(1).map(() => ({
            kcal: 36,
            time: '10 min'
        }))
        return [200, data]
    })
}
