import React, { useState } from 'react'
import axios from 'axios'
import Cast from './../../components/cast/index'
import Error from 'next/error'
import { withAuthorization } from './../../utils/withAuthorization'


const ShowDetails = ({ show, statusCode }) => {
    if (statusCode) {
        return <Error statusCode={statusCode} />
    }
    const { name, image, summary, _embedded } = show
    return (<div>
        <h1>
            {name}
            <Cast cast={_embedded.cast} />
        </h1>
    </div>
    )
}

ShowDetails.getInitialProps = async ({ query }) => {
    const country = query.showId
    try {
        const response = await axios.get(`https://api.tvmaze.com/shows/${country}?embed=cast`)
        console.log(response.data)
        return {
            show: response.data
        }
    }
    catch (error) {
        return {
            statusCode: error.response ? error.response.status : 500
        }
    }
}

export default withAuthorization(ShowDetails)