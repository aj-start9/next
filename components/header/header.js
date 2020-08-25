import classes from './header.module.css'
import Logo from './../logo/logo'
const Header = () => {
    return (
        <div className={classes.main_div}>
            <div>
                <Logo style={{width:'21.9rem',height:'5rem'}}/>
            </div>
            <div className={classes.user_image_div}>
                <p className={classes.user_name}> test@test.com</p>
                {/* <div className={classes.user_image_bg}>

                </div> */}
                <img style={{width:'4rem',height:'4rem'}} src="/img/logout-icon.svg" /   >
            </div>

        </div>
    )

}


export default Header