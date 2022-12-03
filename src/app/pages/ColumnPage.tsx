import React, {FC} from "react";
import SVG from "react-inlinesvg";
import {toAbsoluteUrl} from "../../_metronic/helpers";
import {ListsWidget3, TablesWidget10, ChartsWidget1, StatisticsWidget3} from "../../_metronic/partials/widgets";
import {ChartGraphWidget} from "../../_metronic/partials/widgets/charts/ChartGraphWidget";
import {ExerciseRecordWidget} from "../../_metronic/partials/widgets/lists/ExerciseRecordWidget";
import {EntryRecordWidget3} from "../../_metronic/partials/widgets/statistics/EntryRecordWidget3";
import {MealTopPageWidget3} from "../../_metronic/partials/widgets/statistics/MealTopPageWidget3";
import {DairyWidget3} from "../../_metronic/partials/widgets/statistics/DiaryWidget3";
import {RecommendedWidget3} from "../../_metronic/partials/widgets/statistics/RecommendedWidget3";
import {PostColumnWidget3} from "../../_metronic/partials/widgets/statistics/PostColumnWidget3";


const ColumnPage: FC = () => {
    return (
        <>
            {/* begin::Row */}
            <div className='row g-5 g-xl-8 mt-2'>
                <div className='col-xl-3'>
                    <RecommendedWidget3
                        className='card-xl-stretch mb-xl-8'
                        color='success'
                        title='Weekly Sales'
                        description='Your Weekly Sales Chart'
                        change='+100'
                    />
                </div>

                <div className='col-xl-3'>
                    <RecommendedWidget3
                        className='card-xl-stretch mb-xl-8'
                        color='danger'
                        title='Authors Progress'
                        description='Marketplace Authors Chart'
                        change='-260'
                    />
                </div>

                <div className='col-xl-3'>
                    <RecommendedWidget3
                        className='card-xl-stretch mb-5 mb-xl-8'
                        color='primary'
                        title='Sales Progress'
                        description='Marketplace Sales Chart'
                        change='+180'
                    />
                </div>
                <div className='col-xl-3'>
                    <RecommendedWidget3
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
            <div className='row g-5 g-xl-8'>
                {Array(8).fill(1).map((value, index) => (
                    <div className='col-xl-3'>
                        <PostColumnWidget3
                            className='card-xl-stretch mb-xl-8'
                            color='success'
                            title='2021.05.17   23:25'
                            description='Your Weekly Sales Chart'
                            change='+100'
                        />
                    </div>))}


            </div>
            {/* end::Row */}
        </>
    )
}

export {ColumnPage}
