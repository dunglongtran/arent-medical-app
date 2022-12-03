import React, {FC, useEffect} from "react";
import SVG from "react-inlinesvg";
import {toAbsoluteUrl} from "../../_metronic/helpers";
import {ListsWidget3, TablesWidget10, ChartsWidget1, StatisticsWidget3} from "../../_metronic/partials/widgets";
import {ChartGraphWidget} from "../../_metronic/partials/widgets/charts/ChartGraphWidget";
import {ChartTopPageWidget} from "../../_metronic/partials/widgets/charts/ChartTopPageWidget";
import {TransitTopPageWidget3} from "../../_metronic/partials/widgets/statistics/TransitTopPageWidget3";
import {MainTopPageWidget} from "../../_metronic/partials/widgets/statistics/MainTopPageWidget";
import {MealTopPageWidget3} from "../../_metronic/partials/widgets/statistics/MealTopPageWidget3";
import * as top from '../modules/top-page'
import {useDispatch, useSelector} from "react-redux";
import {ITopState} from "../modules/top-page";

const TopPage: FC = () => {
    const {chart, transit = [], meal} = useSelector(state => (state as any).top as ITopState)
    const dispatch = useDispatch()
    const loadData = async () => {
        const chart = await top.getChart().then(res => res.data)
        dispatch(top.actions.loadChart(chart as Array<any>))
        const transit = await top.getTransit().then(res => res.data)
        dispatch(top.actions.loadTransit(transit as Array<any>))
        const meal = await top.getMeal().then(res => res.data)
        dispatch(top.actions.loadMeal(meal as Array<any>))
    }
    useEffect(() => {
        loadData()
        return () => {

        };
    }, []);

    return (
        <>
            {/* begin::Row */}
            <div className='row gy-5 gx-xl-8' style={{backgroundColor: '#2E2E2E'}}>
                <div className='col-xxl-5 m-0 p-0'>
                    <MainTopPageWidget className='card-xxl-stretch mb-xl-3 m-0 p-0 h-100'/>
                </div>
                <div className='col-xl-7'>
                    <ChartTopPageWidget className='card-xxl-stretch mb-5 mb-xl-8' chart={chart}/>
                </div>
            </div>
            {/* end::Row */}
            {/* begin::Row */}
            <div className='row gy-5 gx-xl-8 d-flex justify-content-evenly m-2'>
                {transit.map((item: any, index: number) => (
                    <div key={`transit_top_${index}`} className='col-lg-2 w-200px h-200px m-2'>
                        <TransitTopPageWidget3
                            className='card-xl-stretch mb-xl-8'
                            color='success'
                            title={item.name}
                            description='Your Weekly Sales Chart'
                            change='+100'
                            icon={item.icon}
                        />
                    </div>
                ))
                }
            </div>
            {/* end::Row */}
            {/* begin::Row */}
            <div className='row g-5 g-xl-8'>
                {meal.map((item:any, index:number) => (
                    <div className='col-xl-3'>
                        <MealTopPageWidget3
                            className='card-xl-stretch mb-xl-8'
                            color='success'
                            title={item.name}
                            description='Your Weekly Sales Chart'
                            change='+100'
                            icon={item.icon}
                        />
                    </div>))}


            </div>
            {/* end::Row */}
        </>
    )
}

export
{
    TopPage
}
