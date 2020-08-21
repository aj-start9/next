import classes from './layout.module.css'
import Sidebar from './../sidebar/sidebar'
import { useRouter } from 'next/router'

const Layout = (props) => {
    const router = useRouter()

    const changeUrl = (item) => {
        router.push(`/${item}`)
    }


    return (
        <div className={classes.content}>
            <Sidebar url={props.url} changeUrl={(item)=>changeUrl(item)} />
            {props.children}
        </div>
    )

}

export default Layout