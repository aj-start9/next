import React from 'react'
import axios from 'axios'
import Thumbanil from './../../components/thumbnail/index'
import cookies from 'nookies'

const Home = ({ shows, country }) => {
    const renderShows = () => {
        return shows.map((showItem, index) => {
            const { show } = showItem

            return <li key={index}>
                <Thumbanil as={`/${country}/${show.id}`} image_url={show.image && show.image.medium} />
            </li>
        })
    }
    return (
        <div>
            <ul className="header">{renderShows()}</ul>

        </div>
    )
}

Home.getInitialProps = async context => {
    const { country } = cookies.get(context)
    const test = context.query.country || country || 'us'
    const response = await axios.get(`http://api.tvmaze.com/schedule?country=${test}&date=2014-12-01`)
    return {
        shows: response.data,
        country: country

    }

}


export default Home