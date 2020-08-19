import React from 'react';
import App from 'next/app';
import { wrapper } from './../store/store';
import Header from './../components/header/index'

import { useSelector, useDispatch } from 'react-redux';
class MyApp extends App {
  static getInitialProps = async ({ Component, ctx }) => {
    ctx.store.dispatch({ type: 'reducerA/setCounter', payload: 2000 })
    return {
      pageProps: {
        // Call page-level getInitialProps
        ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
        // Some custom thing for all pages
        pathname: ctx.pathname,
      },
    };
  };

  render() {
    const { Component, pageProps } = this.props;

    return (
      <div>
        <Header />
        <Component {...pageProps} />
      </div>
    );
  }
}

export default wrapper.withRedux(MyApp);