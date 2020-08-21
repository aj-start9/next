import React from 'react'
import axios from 'axios'
import Thumbanil from './../../components/thumbnail/index'
import cookies from 'nookies'
import { useSelector, useDispatch } from 'react-redux';
import { connect } from 'react-redux'
import { Test } from './../../store/action/actionType'
const Home = ({ shows, country }) => {
    const dispatch = useDispatch();
    const test1 = useSelector(state => state);
    console.log('qwert', test1)

    const test = () => {
        dispatch({ type: 'reducerA/setCounter', payload: 1 })
    }

    const renderShows = () => {
        return shows.map((showItem, index) => {
            const { show } = showItem

            return <li key={index}>
                <Thumbanil as={`/${country}/${show.id}`} image_url={show.image && show.image.medium} />
            </li>
        })
    }

    const test12 = `
    <html>
    <head>
    </head>
    <body>
    <div>
    sjdhcvjsvcjsvcjvjhjhhcshjshj
    </div>
    </body>
    </html>
    `

    return (
        <div>
            <ul className="header">{renderShows()}</ul>
            {test12}
            <button onClick={test}>sum</button>
        </div>
    )
}

Home.getInitialProps = async context => {
    console.log('test')
    context.store.dispatch(Test())
    const { country } = cookies.get(context)
    const test = context.query.country || country || 'us'
    const response = await axios.get(`https://api.tvmaze.com/schedule?country=${test}&date=2014-12-01`)
    return {
        shows: response.data,
        country: test
    }
}
export default connect((state) => state)(Home)