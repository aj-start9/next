import { Component } from 'react'
import cookies from 'nookies'
import Router from 'next/router'

const authenticate = context => {
    const { token } = cookies.get(context)
    console.log(context)
    cookies.set(null, 'plannedRoute',
        JSON.stringify({ as: context.asPath, href: context.pathname }, { path: '/' }))

    // checking if cooki is present
    //this is on server side
    if (context.req && !token) {
        context.res.writeHead(302, { Location: '/signin' })
        context.res.end()
        return;
    }





    
    //this for client side
    if (!token) {
        Router.push('/signin')
    }

}

const isAuthenticate = context => {
    const { token } = cookies.get(context)
    return token
}

const withAuthorization = (WrappedComponent) => {
    return class extends Component {
        static async getInitialProps(context) {
            const token = authenticate(context)
            const componentprops = WrappedComponent.getInitialProps &&
                (await WrappedComponent.getInitialProps(context));
            return { ...componentprops, token }
        }

        render() {
            return <WrappedComponent {...this.props} />
        }
    }
}

export { withAuthorization, isAuthenticate }