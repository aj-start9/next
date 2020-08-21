import { useState } from 'react'
import Axios from 'axios'
import cookies from 'nookies'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Signin = () => {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const submit = async (e) => {
        e.preventDefault()
        try {
            const response = await Axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA65GDqgHuutPXb99voGg0Dlw5Dg4nQ4F0',
                { email: email, password: password, returnSecureToken: true })
            console.log(response)
            cookies.set(null, 'token', response.data.idToken, { path: '/' })
            const { plannedRoute } = cookies.get()
            const parsedPlannedRoute = plannedRoute && JSON.parse(plannedRoute)
            const plannedHrefRoute = parsedPlannedRoute ? parsedPlannedRoute.href : '/[country]'
            const plannedAsRoute = parsedPlannedRoute ? parsedPlannedRoute.as : '/us'
            router.push(plannedHrefRoute, plannedAsRoute)
        }
        catch (err) {

        }

    }

    return <div>
        <form onSubmit={(e) => submit(e)}>
            <p>signin</p>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">submit</button>
        </form>
        <Link href="/signup">
            <a>create account</a>
        </Link>
    </div>
}

export default Signin