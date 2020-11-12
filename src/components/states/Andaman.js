import React, {Fragment} from 'react'
import AA from "./AA"

const Andaman = ({andaman}) => {
    return (
        <Fragment>
             {andaman.map((value, index) => {
                return(
                <AA key={index} value={value}/>
                )
            })}
        </Fragment>
    )
}

export default Andaman
