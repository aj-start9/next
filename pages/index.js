import Router from 'next/router'
import cookies from 'nookies'
const Home = () => null

Home.getInitialProps = context => {
  const { country } = cookies.get(context)

  const test = context.query.country || country || 'us'
  process.browser ?
    Router.replace('/[country]', `${test}`)
    : context.res.writeHead(302, { Location: `/${test}` }).end()
}

export default Home