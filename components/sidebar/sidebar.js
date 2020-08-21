import classes from './sidebar.module.css'

const Sidebar = (props) => {

    return (
        <div className={classes.sidebar}>
            <ul className={classes.side_nav}>
                <li className={props.url === 'dashboard' ? classes.side_nav_item_active : classes.side_nav_item}
                    onClick={() => props.changeUrl('dashboard')}>
                    <img src="/img/Dashboard.png" className={classes.sidebar_dashboard_logo} />
                    <span className={props.url === 'dashboard' ? classes.sidebar_nav_link_active : classes.sidebar_nav_link}>
                        Dashboard
                    </span>
                </li>
                <li className={props.url === 'my-invoice' ? classes.side_nav_item_active : classes.side_nav_item}
                    onClick={() => props.changeUrl('my-invoice/invoice-form')}>
                    <img src="/img/invoice.png" className={classes.sidebar_invoice_logo} />
                    <span className={props.url === 'my-invoice' ? classes.sidebar_nav_link_active : classes.sidebar_nav_link}>
                        My Invoices
                    </span>
                </li>
                <li className={props.url === 'my-clients' ? classes.side_nav_item_active : classes.side_nav_item}
                    onClick={() => props.changeUrl('my-clients')}>
                    <img src="/img/user.png" className={classes.sidebar_user_logo} />
                    <span className={props.url === 'my-clients' ? classes.sidebar_nav_link_active : classes.sidebar_nav_link}>
                        My Clients
                    </span>
                </li>
                <li className={props.url === 'settings' ? classes.side_nav_item_active : classes.side_nav_item}
                    onClick={() => props.changeUrl('settings')}>
                    <img src="/img/setting.png" className={classes.sidebar_setting_logo} />
                    <span className={props.url === 'settings' ? classes.sidebar_nav_link_active : classes.sidebar_nav_link}>
                        Account Settings
                    </span>
                </li>
            </ul>
        </div>
    )
}


export default Sidebar