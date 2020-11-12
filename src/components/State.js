import React from 'react'
import "./card-style.css"

function State({value}) {
    const rate = Math.floor((value.recovered/value.confirmed)*100)
    return (
            <div className='card text-center shadow bg-dark'>
					<div className='card-body bg-dark text-light'>
						<h4 className='card-title'>{value.state}</h4>
                        <ul>
                            <li>active cases: {value.active}</li>
                            <li>confirmed cases: {value.confirmed}</li>
                            <li>Recovered cases: {value.recovered}</li>
                            <li>deaths: {value.deaths}</li>
                            <li>Recovery Rate: {rate}%</li>
                        </ul>
						<a href='#' className='btn btn-outline-success text-center'>
							More Details
						</a>
					</div>
			</div>
    )
}

export default State
