import React,{Fragment} from 'react'
import AAP from "./AAP";

function Andhra({andhra}) {
    return (
        <Fragment>
             {andhra.map((value, index) => {
                return(
                <AAP key={index} value={value}/>
                )
            })}
        </Fragment>
    )
}

export default Andhra
