import React, {FC, useEffect} from "react";
import SVG from "react-inlinesvg";
import {toAbsoluteUrl} from "../../_metronic/helpers";
import {ListsWidget3, TablesWidget10, ChartsWidget1, StatisticsWidget3} from "../../_metronic/partials/widgets";
import {ChartGraphWidget} from "../../_metronic/partials/widgets/charts/ChartGraphWidget";
import {ExerciseRecordWidget} from "../../_metronic/partials/widgets/lists/ExerciseRecordWidget";
import {EntryRecordWidget3} from "../../_metronic/partials/widgets/statistics/EntryRecordWidget3";
import {MealTopPageWidget3} from "../../_metronic/partials/widgets/statistics/MealTopPageWidget3";
import {DairyWidget3} from "../../_metronic/partials/widgets/statistics/DiaryWidget3";
import {useDispatch, useSelector} from "react-redux";
import {ITopState} from "../modules/record-page";
import * as record from "../modules/record-page";


const MyRecordPage: FC = () => {
    const {chart, entry = [], exercise} = useSelector(state => (state as any).record as ITopState)
    const dispatch = useDispatch()
    const loadData = async () => {
        const chart = await record.getChart().then(res => res.data)
        dispatch(record.actions.loadChart(chart as Array<any>))
        const entry = await record.getEntry().then(res => res.data)
console.log(entry)
        dispatch(record.actions.loadEntry(entry as Array<any>))
        const exercise = await record.getExercise().then(res => res.data)
        dispatch(record.actions.loadExercise(exercise as Array<any>))
    }
    useEffect(() => {
        loadData()
        return () => {

        };
    }, []);
    console.log(entry,'---')
    return (
        <>
            {/* begin::Row */}
            <div className='row g-5 g-xl-8 mt-2'>
                {entry[0] && <div className='col-xl-4'>
                    <EntryRecordWidget3
                        className='card-xl-stretch mb-xl-8'
                        color='success'
                        title={entry[0].name}
                        description='Your Weekly Sales Chart'
                        change='+100'
                        icon={entry[0].icon}
                    />
                </div>}

                {entry[1] && <div className='col-xl-4 d-flex align-items-center justify-content-center'>
                    <EntryRecordWidget3
                        className='card-xl-stretch mb-xl-8'
                        color='danger'
                        title={entry[1].name}
                        description='Marketplace Authors Chart'
                        change='-260'
                        icon={entry[1].icon}
                    />
                </div>}

                {entry[2] && <div className='col-xl-4 d-flex align-items-center justify-content-end'>
                    <EntryRecordWidget3
                        className='card-xl-stretch mb-5 mb-xl-8'
                        color='primary'
                        title={entry[2].name}
                        description='Marketplace Sales Chart'
                        change='+180'
                        icon={entry[2].icon}
                    />
                </div>}
            </div>
            {/* end::Row */}
            {/* begin::Row */}
            <div className='row gy-5 gx-xl-8' style={{
                background: '#414141'
            }}>
                <div className='col-xl-12'>
                    <ChartGraphWidget className='card-xxl-stretch mb-5 mb-xl-8' chart={chart}/>
                </div>
            </div>
            {/* end::Row */}
            {/* begin::Row */}
            <div className='row gy-5 gx-xl-8 mt-10 mb-10' style={{
                background: '#414141'
            }}>
                <div className='col-xxl-12'>
                    <ExerciseRecordWidget className='card-xxl-stretch mb-xl-3' items={exercise}/>
                </div>
            </div>
            {/* end::Row */}
            {/* begin::Row */}
            <div className='row g-5 g-xl-8'>
                <div className='card-header border-0 p-0 bg-transparent mb-4'>
                    {/* begin::Title */}
                    <h2 className='card-title align-items-start  flex-column'>

                        <span className='card-label fw-bolder fs-1 text-uppercase'> My Diary  </span>
                    </h2>
                </div>
                <div className={'row d-flex align-items-center justify-content-between p-0'}>
                    {Array(8).fill(1).map((value, index) => (
                        <div className='col-lg-3 m-auto'>
                            <DairyWidget3
                                className='card-xl-stretch mb-xl-8'
                                color='success'
                                title='Weekly Sales'
                                description='Your Weekly Sales Chart'
                                change='+100'
                            />
                        </div>))}

                </div>
            </div>
            {/* end::Row */}
        </>
    )
}

export {MyRecordPage}
