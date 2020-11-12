import React, { Fragment } from 'react'
import WB from "./WB"

const WestBengal = ({westbengal})=> {
    return (
        <Fragment>
             {westbengal.map((value, index) => {
                return(
                <WB key={index} value={value}/>
                )
            })}
        </Fragment>
    )
}

export default WestBengal
