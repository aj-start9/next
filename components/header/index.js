import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import cookies from 'nookies'
import Link from 'next/link'

const Header = () => {
    const router = useRouter()
    const [country, setCountry] = useState(router.query.country || 'us')
    const handleChang = e => {
        router.push(`/[country]`, `/${e.target.value}`)
        setCountry(e.target.value)
    }

    useEffect(() => {
        cookies.set(null, 'country', country, {
            maxAge: 30 * 24 * 60 * 60,
            path: '/'
        })
    }, [country])


    const handleSignout = () => {
        cookies.destroy(null, 'token')
    }


    return (<div className="header">
        <select onChange={handleChang} value={country}>
            <option value="us">UNites State</option>
            <option value="br">Brizal</option>
            <option value="in">India</option>
        </select>
        <Link href="/[country]" as={`/${country}`}>
            <a onClick={handleSignout}>Signout</a>
        </Link>
        <style jsx>
            {
                `
         .header{
             background-color:#ccc;
             height:50px
         }
         `
            }
        </style>
    </div>
    )
}


export default Header