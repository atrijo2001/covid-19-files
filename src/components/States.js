import React, { Fragment } from 'react'
import './card-style.css';
import State from "./State"

const States = ({details}) => {
    return (
        <Fragment>
            {details.map((value, index) => {
                return(
                <State key={index} value={value}/>
                )
            })}
        </Fragment>
    )
}

export default States
