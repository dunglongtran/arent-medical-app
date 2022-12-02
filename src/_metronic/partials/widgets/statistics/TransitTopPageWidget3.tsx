/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useRef} from 'react'
import ApexCharts, {ApexOptions} from 'apexcharts'
import {getCSS, getCSSVariableValue} from '../../../assets/ts/_utils'
import {KTSVG, toAbsoluteUrl} from "../../../helpers";

type Props = {
    className: string
    title: string
    description: string
    change: string
    color: string
}

const TransitTopPageWidget3: React.FC<Props> = ({className, title, description, change, color}) => {
    const chartRef = useRef<HTMLDivElement | null>(null)


    return (
        <div className={`card ${className} bg-transparent h-100 p-1`}>
            {/* begin::Body */}
            <div className='card-body d-flex flex-column p-0 align-items-center justify-content-center'
                 style={{
                     background: `url(${toAbsoluteUrl('/healthy/bg_transit.svg')})`,
                     backgroundRepeat: 'no-repeat',
                     backgroundSize: '100% auto'
                 }}
            >
                {/*<KTSVG path={'/healthy/bg_transit.svg'}/>*/}
                <img
                    src={toAbsoluteUrl('/healthy/icon_knife.svg')}
                    className='w-50 h-auto'
                />
                <span className="text-white fw-bold d-block fs-1">Morning</span>
            </div>
            {/* end::Body */}
        </div>
    )
}

export {TransitTopPageWidget3}

function getChartOptions(
    height: number,
    labelColor: string,
    baseColor: string,
    lightColor: string
): ApexOptions {
    const options: ApexOptions = {
        series: [
            {
                name: 'Net Profit',
                data: [30, 45, 32, 70, 40],
            },
        ],
        chart: {
            fontFamily: 'inherit',
            type: 'area',
            height: height,
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: false,
            },
            sparkline: {
                enabled: true,
            },
        },
        plotOptions: {},
        legend: {
            show: false,
        },
        dataLabels: {
            enabled: false,
        },
        fill: {
            type: 'solid',
            opacity: 1,
        },
        stroke: {
            curve: 'smooth',
            show: true,
            width: 3,
            colors: [baseColor],
        },
        xaxis: {
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            labels: {
                show: false,
                style: {
                    colors: labelColor,
                    fontSize: '12px',
                },
            },
            crosshairs: {
                show: false,
                position: 'front',
                stroke: {
                    color: '#E4E6EF',
                    width: 1,
                    dashArray: 3,
                },
            },
            tooltip: {
                enabled: false,
            },
        },
        yaxis: {
            min: 0,
            max: 80,
            labels: {
                show: false,
                style: {
                    colors: labelColor,
                    fontSize: '12px',
                },
            },
        },
        states: {
            normal: {
                filter: {
                    type: 'none',
                    value: 0,
                },
            },
            hover: {
                filter: {
                    type: 'none',
                    value: 0,
                },
            },
            active: {
                allowMultipleDataPointsSelection: false,
                filter: {
                    type: 'none',
                    value: 0,
                },
            },
        },
        tooltip: {
            style: {
                fontSize: '12px',
            },
            y: {
                formatter: function (val) {
                    return '$' + val + ' thousands'
                },
            },
        },
        colors: [lightColor],
        markers: {
            colors: [lightColor],
            strokeColors: [baseColor],
            strokeWidth: 3,
        },
    }
    return options
}
