/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useRef} from 'react'
import ApexCharts, {ApexOptions} from 'apexcharts'
import {KTSVG} from '../../../helpers'
import {Dropdown1} from '../../content/dropdown/Dropdown1'
import {getCSS, getCSSVariableValue} from '../../../assets/ts/_utils'

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
        <div className={`card ${className}`} style={{
            background: '#414141'
        }}>
            {/* begin::Header */}
            <div className='card-header border-0 pt-5'>
                {/* begin::Title */}
                <h3 className='card-title align-items-start flex-row'>
                    <span className='card-label fw-bolder fs-3 mb-1 text-uppercase text-white fw-light text-wrap'>Body <br />Record</span>

                    <span className=' fw-bold fs-1 text-white'>2021.05.21</span>
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
                    <Dropdown1/>
                    {/* end::Menu */}
                </div>
                {/* end::Toolbar */}
            </div>
            {/* end::Header */}

            {/* begin::Body */}
            <div className='card-body'>
                {/* begin::Chart */}
                {/*<div ref={chartRef} id='kt_charts_widget_1_chart' style={{height: '350px'}} />*/}
                <ReactApexChart options={options} series={series} type='line' height={350}/>
                {/* end::Chart */}
            </div>
            {/* end::Body */}
            <div className='card-toolbar col-xl-3 d-flex justify-content-evenly'>
                <button className={'btn rounded-3 bg-white text-warning fs-5 w-60px h-30px p-0'}>日</button>
                <button className={'btn rounded-3 bg-white text-warning fs-5 w-60px h-30px p-0'}>週</button>
                <button className={'btn rounded-3 bg-white text-warning fs-5 w-60px h-30px p-0'}>月</button>
                <button className={'btn rounded-3 bg-warning text-white fs-5 w-60px h-30px p-0'}>年</button>
            </div>
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
                data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 6, 8, 78],
                color: 'yellow',
            },
            {
                name: 'Desktops',
                data: [10, 51, 85, 51, 59, 92, 69, 11, 90, 6, 8, 9],
            },
        ],
        chart: {
            height: 350,
            type: 'line',
            zoom: {
                enabled: false,
            },
            toolbar: {
                show: false
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
            categories: Array(12).fill(1).map(((value, index) => `${index + 1}月`)),
            labels: {
                style: {
                    colors: 'white',
                }
            },
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            }
        },
        annotations: {
            xaxis: xdata,
        },
        markers: {
            size: 5,
        },

        yaxis: {
            show: true,
            labels: {
                style: {
                    colors: 'transparent',
                }
            }
        },
        legend: {
            show: false,
        },
    }
}

const xdata = Array(12).fill(1).map(((value, index) => `${index + 1}月`)).map((value, index) => ({
    x: value,
    strokeDashArray: 0,
    borderColor: '#777777',
    marginLeft: '5px'
}))
console.log(xdata)
