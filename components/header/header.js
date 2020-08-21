import classes from './header.module.css'

const Header = () => {
    return (
        <div className={classes.main_div}>
            <div>

            </div>
            <div className={classes.user_image_div}>
                <p className={classes.user_name}> John Smith</p>
                <div className={classes.user_image_bg}>

                </div>
            </div>

        </div>
    )

}


export default Header