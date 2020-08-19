import '../styles/globals.css'
import Header from './../components/header/index'
import { wrapper } from './../store/index';

function MyApp({ Component, pageProps, store }) {
  console.log(store)
  return (
    <div>
      <Header />
      <Component {...pageProps} />
    </div>
  )
}

export default wrapper.withRedux(MyApp); 
