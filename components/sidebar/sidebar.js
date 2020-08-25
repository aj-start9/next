import classes from './sidebar.module.css'

const Sidebar = (props) => {

    return (
        <div className={classes.sidebar}>
            <ul className={classes.side_nav}>
                <li className={props.url.startsWith('profile') ? classes.side_nav_item_active : classes.side_nav_item}
                    onClick={() => props.changeUrl(props.url.startsWith('profile') ? `${props.url}` : 'profile/profile-list')}>
                    <img src={props.url.startsWith('profile') ? "/img/Setting_blue.svg" : "/img/Setting.svg"}
                        className={classes.sidebar_setting_logo} />
                    <span className={props.url.startsWith('profile') ? classes.sidebar_nav_link_active : classes.sidebar_nav_link}>
                        Profiles
                    </span>
                </li>
                <li className={props.url.startsWith('customer') ? classes.side_nav_item_active : classes.side_nav_item}
                    onClick={() => props.changeUrl(props.url.startsWith('customer') ? `${props.url}` : 'customer/customer-list')}>
                    <img src={props.url.startsWith('customer') ? "/img/User_blue.svg" : "/img/User.svg"}
                        className={classes.sidebar_invoice_logo} />
                    <span className={props.url.startsWith('customer') ? classes.sidebar_nav_link_active : classes.sidebar_nav_link}>
                        Customers
                    </span>
                </li>
                <li className={props.url.startsWith('invoice') ? classes.side_nav_item_active : classes.side_nav_item}
                    onClick={() => props.changeUrl(props.url.startsWith('invoice') ? `${props.url}` : 'invoice/invoice-list')}>
                    <img src={props.url.startsWith('invoice') ? "/img/invoice_blue.svg" : "/img/invoice.svg"}
                        className={classes.sidebar_invoice_logo} />
                    <span className={props.url.startsWith('invoice') ? classes.sidebar_nav_link_active : classes.sidebar_nav_link}>
                        Invoices
                    </span>
                </li>
            </ul>
        </div>
    )
}


export default Sidebar