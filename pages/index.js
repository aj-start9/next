import Router from 'next/router'
import cookies from 'nookies'
const Home = () => null

Home.getInitialProps = context => {
  const {country} = cookies.get(context)
  process.browser ?
    Router.replace('/[country]', `${country}`)
    : context.res.writeHead(302, { Location: `/${country}` }).end()
}

export default Home