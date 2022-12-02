/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG} from '../../../helpers'
import {Dropdown1} from '../../content/dropdown/Dropdown1'

type Props = {
  className: string
}
const ExerciseRecordItem = () => {
  return (
    <div className='d-flex align-items-center mb-8 col-lg-5'>
      {/* begin::Bullet */}
      <span className='bullet bullet-vertical h-40px bg-success'></span>
      {/* end::Bullet */}
      {/* begin::Checkbox */}
      <div className='form-check form-check-custom form-check-solid mx-5'>
        <input className='form-check-input' type='checkbox' value='' />
      </div>
      {/* end::Checkbox */}
      {/* begin::Description */}
      <div className='flex-grow-1'>
        <a href='#' className='text-gray-800 text-hover-primary fw-bolder fs-6'>
          Create FireStone Logo
        </a>
        <span className='text-muted fw-bold d-block'>Due in 2 Days</span>
      </div>
      {/* end::Description */}
      <span className='badge badge-light-success fs-8 fw-bolder'>New</span>
    </div>
  )
}
const ExerciseRecordWidget: React.FC<Props> = ({className}) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0'>
        <h3 className='card-title fw-bolder text-dark'>Todo</h3>
        <div className='card-toolbar'>
          {/* begin::Menu */}
          <button
            type='button'
            className='btn btn-sm btn-icon btn-color-primary btn-active-light-primary'
            data-kt-menu-trigger='click'
            data-kt-menu-placement='bottom-end'
            data-kt-menu-flip='top-end'
          >
            <KTSVG path='/media/icons/duotune/general/gen024.svg' className='svg-icon-2' />
          </button>
          <Dropdown1 />
          {/* end::Menu */}
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body pt-2 row'>
        {Array(8)
          .fill(1)
          .map((value, index) => (
            <ExerciseRecordItem key={index} />
          ))}
      </div>
      {/* end::Body */}
    </div>
  )
}

export {ExerciseRecordWidget}
