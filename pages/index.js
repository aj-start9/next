import Router from 'next/router'
const Home = () => null

Home.getInitialProps = context => {

  const test = context.query.country  || 'us'
  process.browser ?
    Router.replace('/[country]', `${test}`)
    : context.res.writeHead(302, { Location: `/${test}` })

  context.res.end()  
}

export default Home