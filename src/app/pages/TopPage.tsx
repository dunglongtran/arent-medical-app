import React, {FC} from "react";
import SVG from "react-inlinesvg";
import {toAbsoluteUrl} from "../../_metronic/helpers";
import {ListsWidget3, TablesWidget10, ChartsWidget1, StatisticsWidget3} from "../../_metronic/partials/widgets";
import {ChartGraphWidget} from "../../_metronic/partials/widgets/charts/ChartGraphWidget";

const TopPage: FC = () => {
    return (
        <>
            {/* begin::Row */}
            <div className='row gy-5 gx-xl-8'>
                <div className='col-xxl-4'>
                    <ListsWidget3 className='card-xxl-stretch mb-xl-3' />
                </div>
                <div className='col-xl-8'>
                    <ChartGraphWidget className='card-xxl-stretch mb-5 mb-xl-8' />
                </div>
            </div>
            {/* end::Row */}
            {/* begin::Row */}
            <div className='row g-5 g-xl-8'>
                <div className='col-xl-3'>
                    <StatisticsWidget3
                        className='card-xl-stretch mb-xl-8'
                        color='success'
                        title='Weekly Sales'
                        description='Your Weekly Sales Chart'
                        change='+100'
                    />
                </div>

                <div className='col-xl-3'>
                    <StatisticsWidget3
                        className='card-xl-stretch mb-xl-8'
                        color='danger'
                        title='Authors Progress'
                        description='Marketplace Authors Chart'
                        change='-260'
                    />
                </div>

                <div className='col-xl-3'>
                    <StatisticsWidget3
                        className='card-xl-stretch mb-5 mb-xl-8'
                        color='primary'
                        title='Sales Progress'
                        description='Marketplace Sales Chart'
                        change='+180'
                    />
                </div>
                <div className='col-xl-3'>
                    <StatisticsWidget3
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
                <div className='col-xl-3'>
                    <StatisticsWidget3
                        className='card-xl-stretch mb-xl-8'
                        color='success'
                        title='Weekly Sales'
                        description='Your Weekly Sales Chart'
                        change='+100'
                    />
                </div>

                <div className='col-xl-3'>
                    <StatisticsWidget3
                        className='card-xl-stretch mb-xl-8'
                        color='danger'
                        title='Authors Progress'
                        description='Marketplace Authors Chart'
                        change='-260'
                    />
                </div>

                <div className='col-xl-3'>
                    <StatisticsWidget3
                        className='card-xl-stretch mb-5 mb-xl-8'
                        color='primary'
                        title='Sales Progress'
                        description='Marketplace Sales Chart'
                        change='+180'
                    />
                </div>
                <div className='col-xl-3'>
                    <StatisticsWidget3
                        className='card-xl-stretch mb-5 mb-xl-8'
                        color='primary'
                        title='Sales Progress'
                        description='Marketplace Sales Chart'
                        change='+180'
                    />
                </div>
            </div>
            {/* end::Row */}
        </>
    )
}

export {TopPage}
