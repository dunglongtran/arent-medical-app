import MockAdapter from 'axios-mock-adapter'
import {
    GET_CHART, GET_MEAL, GET_TRANSIT,
} from '../redux/TopCRUD'


export function mockTop(mock: MockAdapter) {
    mock.onGet(GET_CHART).reply(() => {
        const data = [
            {
                name: 'Desktops',
                data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 6, 8, 10],
                color: 'yellow',
            },
            {
                name: 'Desktops',
                data: [10, 51, 85, 51, 59, 92, 69, 11, 90, 6, 8,25],
            },
        ]
        return [200, data]
    })
    mock.onGet(GET_TRANSIT).reply(() => {
        const data = [
            {
                icon: '/healthy/icon_knife.svg',
                name:'Morning'
            },
            {
                icon: '/healthy/icon_knife.svg',
                name:'Lunch'
            },
            {
                icon: '/healthy/icon_knife.svg',
                name:'Dinner'
            },
            {
                icon: '/healthy/icon_cup.svg',
                name:'Snack'
            },
        ]
        return [200, data]
    })
    mock.onGet(GET_MEAL).reply(() => {
        const data = [
            {
                icon: '/healthy/meal/d01.svg',
                name:'05.21 Morning'
            },
            {
                icon: '/healthy/meal/d02.svg',
                name:'05.21 Lunch'
            },
            {
                icon: '/healthy/meal/m01.svg',
                name:'05.21 Dinner'
            },
            {
                icon: '/healthy/meal/l01.svg',
                name:'05.21 Snack'
            },
            {
                icon: '/healthy/meal/l02.svg',
                name:'05.20 Morning'
            },
            {
                icon: '/healthy/meal/l03.svg',
                name:'05.20 Lunch'
            },
            {
                icon: '/healthy/meal/m01.svg',
                name:'05.20 Dinner'
            },
            {
                icon: '/healthy/meal/d01.svg',
                name:'05.20 Snack'
            },
        ]
        return [200, data]
    })
}
