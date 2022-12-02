import React from 'react'
import SVG from 'react-inlinesvg'
import {toAbsoluteUrl} from '../AssetHelpers'

type Props = {
    className?: string
    path: string
    svgClassName?: string,
    style?: any
}

const KTSVG: React.FC<Props> = ({className = '', path, svgClassName = 'mh-50px', style}) => {
    return (
        <span className={`svg-icon ${className}`}>
      <SVG src={toAbsoluteUrl(path)} className={svgClassName} style={style}/>
    </span>
    )
}

export {KTSVG}
