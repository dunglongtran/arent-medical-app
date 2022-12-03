/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG} from '../../../helpers'
import {Dropdown1} from '../../content/dropdown/Dropdown1'

type Props = {
    className: string
}
const ExerciseRecordItem = () => {
    return (
        <div className='d-flex align-items-center mb-8 col-lg-6 position-relative'>
            <div className={'w-100 d-flex border-bottom  bottom-0 align-items-center pb-3'}>
                {/* begin::Bullet */}
                <span className='bullet secondary bullet-dot me-5 '></span>
                {/* end::Bullet */}
                {/* begin::Checkbox */}
                {/*<div className='form-check form-check-custom form-check-solid mx-5'>*/}
                {/*  <input className='form-check-input' type='checkbox' value='' />*/}
                {/*</div>*/}
                {/* end::Checkbox */}
                {/* begin::Description */}
                <div className='flex-grow-1'>
                    <a href='#' className='text-white text-hover-primary fw-bolder fs-6'>
                        家事全般（立位・軽い）
                    </a>
                    <span className='text-warning fw-bold d-block'>26kcal</span>
                </div>
                {/* end::Description */}
                <span className='text-warning fs-8 fw-bolder fs-4'>10 min</span>
            </div>
        </div>
    )
}
const ExerciseRecordWidget: React.FC<Props> = ({className}) => {
    return (
        <div className={`card ${className}`} style={{
            background: '#414141'
        }}>
            {/* begin::Header */}
            <div className='card-header border-0'>
                {/* begin::Title */}
                <h3 className='card-title align-items-start flex-row'>
                    <span
                        className='card-label fw-bolder fs-3 mb-1 text-uppercase text-white fw-light text-wrap'>My <br/>Exercise</span>

                    <span className=' fw-bold fs-1 text-white'>2021.05.21</span>
                </h3>
                {/* end::Title */}

                <div className='card-toolbar'>
                </div>
            </div>
            {/* end::Header */}
            {/* begin::Body */}
            <div className='card-body pt-2 row d-flex align-items-center justify-content-between'>
                {Array(8)
                    .fill(1)
                    .map((value, index) => (
                        <ExerciseRecordItem key={index}/>
                    ))}
            </div>
            {/* end::Body */}
        </div>
    )
}

export {ExerciseRecordWidget}
