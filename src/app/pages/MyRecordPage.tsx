import React, {FC} from "react";
import SVG from "react-inlinesvg";
import {toAbsoluteUrl} from "../../_metronic/helpers";
import {ListsWidget3, TablesWidget10, ChartsWidget1, StatisticsWidget3} from "../../_metronic/partials/widgets";
import {ChartGraphWidget} from "../../_metronic/partials/widgets/charts/ChartGraphWidget";
import {ExerciseRecordWidget} from "../../_metronic/partials/widgets/lists/ExerciseRecordWidget";
import {EntryRecordWidget3} from "../../_metronic/partials/widgets/statistics/EntryRecordWidget3";
import {MealTopPageWidget3} from "../../_metronic/partials/widgets/statistics/MealTopPageWidget3";
import {DairyWidget3} from "../../_metronic/partials/widgets/statistics/DiaryWidget3";


const MyRecordPage: FC = () => {
    return (
        <>
            {/* begin::Row */}
            <div className='row g-5 g-xl-8 mt-2'>
                <div className='col-xl-4'>
                    <EntryRecordWidget3
                        className='card-xl-stretch mb-xl-8'
                        color='success'
                        title='Weekly Sales'
                        description='Your Weekly Sales Chart'
                        change='+100'
                    />
                </div>

                <div className='col-xl-4 d-flex align-items-center justify-content-center'>
                    <EntryRecordWidget3
                        className='card-xl-stretch mb-xl-8'
                        color='danger'
                        title='Authors Progress'
                        description='Marketplace Authors Chart'
                        change='-260'
                    />
                </div>

                <div className='col-xl-4 d-flex align-items-center justify-content-end'>
                    <EntryRecordWidget3
                        className='card-xl-stretch mb-5 mb-xl-8'
                        color='primary'
                        title='Sales Progress'
                        description='Marketplace Sales Chart'
                        change='+180'
                    />
                </div>
            </div>
            {/* end::Row */}
            {/* begin::Row */}
            <div className='row gy-5 gx-xl-8' style={{
                background: '#414141'
            }}>
                <div className='col-xl-12'>
                    <ChartGraphWidget className='card-xxl-stretch mb-5 mb-xl-8'/>
                </div>
            </div>
            {/* end::Row */}
            {/* begin::Row */}
            <div className='row gy-5 gx-xl-8 mt-10 mb-10' style={{
                background: '#414141'
            }}>
                <div className='col-xxl-12'>
                    <ExerciseRecordWidget className='card-xxl-stretch mb-xl-3'/>
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
