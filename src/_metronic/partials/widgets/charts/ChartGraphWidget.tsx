/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useRef} from 'react'
import ApexCharts, {ApexOptions} from 'apexcharts'
import {KTSVG} from '../../../helpers'
import {Dropdown1} from '../../content/dropdown/Dropdown1'
import {getCSS, getCSSVariableValue} from '../../../assets/ts/_utils'
import {faker} from '@faker-js/faker'

import ReactApexChart from 'react-apexcharts'

type Props = {
  className: string
}
// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const ChartGraphWidget: React.FC<Props> = ({className}) => {
  const chartRef = useRef<HTMLDivElement | null>(null)
  // const height = parseInt(getCSS(chartRef.current, 'height'))
  const {series, ...options} = getChartOptions(350)
  // useEffect(() => {
  //   if (!chartRef.current) {
  //     return
  //   }
  //
  //   const height = parseInt(getCSS(chartRef.current, 'height'))
  //
  //   const chart = new ApexCharts(chartRef.current, getChartOptions(height))
  //   if (chart) {
  //     chart.render()
  //   }
  //
  //   return () => {
  //     if (chart) {
  //       chart.destroy()
  //     }
  //   }
  // }, [chartRef])

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        {/* begin::Title */}
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bolder fs-3 mb-1'>Recent Statistics</span>

          <span className='text-muted fw-bold fs-7'>More than 400 new members</span>
        </h3>
        {/* end::Title */}

        {/* begin::Toolbar */}
        <div className='card-toolbar'>
          {/* begin::Menu */}
          <button
            type='button'
            className='btn btn-sm btn-icon btn-color-primary btn-active-light-primary'
            data-kt-menu-trigger='click'
            data-kt-menu-placement='bottom-end'
            data-kt-menu-flip='top-end'
          >
            {/*<KTSVG path='/media/icons/duotune/general/gen024.svg' className='svg-icon-2' />*/}
          </button>
          <Dropdown1 />
          {/* end::Menu */}
        </div>
        {/* end::Toolbar */}
      </div>
      {/* end::Header */}

      {/* begin::Body */}
      <div className='card-body'>
        {/* begin::Chart */}
        {/*<div ref={chartRef} id='kt_charts_widget_1_chart' style={{height: '350px'}} />*/}
        <ReactApexChart options={options} series={series} type='line' height={350} />
        {/* end::Chart */}
      </div>
      {/* end::Body */}
    </div>
  )
}

export {ChartGraphWidget}

function getChartOptions(height: number): ApexOptions {
  const labelColor = getCSSVariableValue('--bs-gray-500')
  const borderColor = getCSSVariableValue('--bs-gray-200')
  const baseColor = getCSSVariableValue('--bs-primary')
  const secondaryColor = getCSSVariableValue('--bs-gray-300')

  return {
    series: [
      {
        name: 'Desktops',
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 6, 8],
        color: 'yellow',
      },
      {
        name: 'Desktops',
        data: [10, 51, 85, 51, 59, 92, 69, 11, 90, 6, 8],
      },
    ],
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      curve: 'straight',
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        gradientToColors: ['#FDD835'],
        shadeIntensity: 1,
        type: 'horizontal',
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100, 100, 100],
      },
    },
    // grid: {
    //   show: true,
    //   // borderColor: 'red',
    //   strokeDashArray: 0,
    //   position: 'back',
    //   // row: {
    //   //   colors: ['#e5e5e5', 'transparent'],
    //   //   opacity: 0.5
    //   // },
    //   // column: {
    //   //   colors: ['#f8f8f8', 'transparent'],
    //   // },
    //   xaxis: {
    //     lines: {
    //       show: true
    //     }
    //   },
    //   yaxis: {
    //     lines: {
    //       show: true,
    //     },
    //   },
    // },
    grid: {
      show: true,
      borderColor: '#eee',
      strokeDashArray: 0,
      position: 'front',
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
      row: {
        colors: undefined,
        opacity: 0.5,
      },
      column: {
        colors: undefined,
        opacity: 0.5,
      },
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },
    xaxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
    },
    annotations: {
      xaxis: xdata,
    },
    markers: {
      size: 5,
    },
    yaxis: {
      show: true,
    },
  }
}

const xdata = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
].map((value, index) => ({
  x: value,
  strokeDashArray: 0,
  borderColor: '#eee',
}))
console.log(xdata)
