import React, {FC, useEffect} from "react";
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
import {useDispatch, useSelector} from "react-redux";
import {ITopState} from "../modules/top-page";
import * as column from "../modules/column-page";


const ColumnPage: FC = () => {
    const {recommend = [], post} = useSelector(state => (state as any).column as ITopState)
    const dispatch = useDispatch()
    const loadData = async () => {
        const recommend = await column.getRecommend().then(res => res.data)
        console.log(recommend)
        dispatch(column.actions.loadRecommend(recommend as Array<any>))
        const post = await column.getPost().then(res => res.data)
        dispatch(column.actions.loadPost(post as Array<any>))
    }
    useEffect(() => {
        loadData()
        return () => {

        };
    }, []);
    return (
        <>
            {/* begin::Row */}
            <div className='row g-5 g-xl-8 mt-2'>
                {recommend.map((value:any, index:number) => (
                    <div className='col-xl-3' key={`recommend_${index}`}>
                        <RecommendedWidget3
                            className='card-xl-stretch mb-xl-8'
                            color='success'
                            title={value.name}
                            description='Your Weekly Sales Chart'
                            change='+100'
                        />
                    </div>))
                }

                {/* <div className='col-xl-3'>
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
                </div>*/}
            </div>
            {/* end::Row */}
            {/* begin::Row */}
            <div className='row g-5 g-xl-8'>
                {post.map((item:any, index:any) => (
                    <div className='col-xl-3' key={`post_${index}`}>
                        <PostColumnWidget3
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

export {ColumnPage}
