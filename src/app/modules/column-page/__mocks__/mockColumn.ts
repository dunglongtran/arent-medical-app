import MockAdapter from 'axios-mock-adapter'
import {
    GET_POST, GET_RECOMMEND,
} from '../redux/ColumnCRUD'


export function mockColumn(mock: MockAdapter) {

    mock.onGet(GET_RECOMMEND).reply(() => {
        const data = [
            {
                icon: '/healthy/icon_knife.svg',
                name:'RECOMMENDED COLUMN'
            },
            {
                icon: '/healthy/icon_knife.svg',
                name:'RECOMMENDED DIET'
            },
            {
                icon: '/healthy/icon_knife.svg',
                name:'RECOMMENDED BEAUTY'
            },
            {
                icon: '/healthy/icon_cup.svg',
                name:'RECOMMENDED HEALTH'
            },
        ]
        return [200, data]
    })
    mock.onGet(GET_POST).reply(() => {
        const data = [
            {
                icon: '/healthy/column/column_1.svg',
                name:'2021.05.17   23:25'
            },
            {
                icon: '/healthy/column/column_3.svg',
                name:'2021.05.17   23:25'
            },
            {
                icon: '/healthy/column/column_4.svg',
                name:'2021.05.17   23:25'
            },
            {
                icon: '/healthy/column/column_5.svg',
                name:'2021.05.17   23:25'
            },
            {
                icon: '/healthy/column/column_6.svg',
                name:'2021.05.17   23:25'
            },
            {
                icon: '/healthy/column/column_7.svg',
                name:'2021.05.17   23:25'
            },
            {
                icon: '/healthy/column/column_8.svg',
                name:'2021.05.17   23:25'
            },
            {
                icon: '/healthy/column/column_2.svg',
                name:'2021.05.17   23:25'
            },
        ]
        return [200, data]
    })
}
