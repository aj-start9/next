import React from 'react'
import axios from 'axios'
import Thumbanil from './../../components/thumbnail/index'
import Header from './../../components/header/index'
const Home = ({ shows,country }) => {
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
    const country = context.query.country || 'us'
    const response = await axios.get(`https://api.tvmaze.com/schedule?country=${country}&date=2014-12-01`)
    return {
        shows: response.data,
        country: country

    }

}


export default Home