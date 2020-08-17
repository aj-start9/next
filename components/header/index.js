import { useState } from 'react'
import { useRouter } from 'next/router'

const Header = () => {
    const [country, setCountry] = useState('us')
    const router = useRouter()
    const handleChang = e => {
        router.push(`/[country]`,`/${e.target.value}`)
        setCountry(e.target.value)
    }

    return (<div className="header">
        <select onChange={handleChang}>
            <option value="us">UNites State</option>
            <option value="br">Brizal</option>
        </select>
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