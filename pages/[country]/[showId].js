import React, { useState } from 'react'
import axios from 'axios'
import Cast from './../../components/cast/index'
const ShowDetails = ({ show }) => {
    // const { name, image, summary, _embedded } = show
    // return (<div>
    //     <h1>
    //         {name}
    //         <Cast cast={_embedded.cast} />
    //     </h1>


    // </div>
    // )
    return <div>
        
    </div>
}



// ShowDetails.getInitialProps = async ({ query }) => {
//     const country = query.showId
//     const response = await axios.get(`https://api.tvmaze.com/shows/${country}?embed=cast`)
//     console.log(response.data)
//     return {
//         show: response.data
//     }
// }

export default ShowDetails