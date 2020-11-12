import React from 'react'
import "./card-styles.css"

function WB({value}) {
    const rate = Math.floor((value.recovered/value.confirmed)*100)
    return (
            <div className='card text-center shadow bg-dark'>
					<div className='card-body bg-dark text-light'>
						<h4 className='card-title'>{value.district}</h4>
                        <ul>
                            <li>active cases: {value.active}</li>
                            <li>confirmed cases: {value.confirmed}</li>
                            <li>Recovered cases: {value.recovered}</li>
                            <li>deaths: {value.deceased}</li>
                            <li>Recovery Rate: {rate}%</li>
                        </ul>
						<a href='#' className='btn btn-outline-success text-center'>
							More Details
						</a>
					</div>
			</div>
    )}

export default WB
