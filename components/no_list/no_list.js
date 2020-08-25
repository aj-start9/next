import classes from './no_list.module.css'



const NoList = (props) => {
    return (
        <div className={classes.no_data_div} style={{...props.style}}>
            <img className={classes.bg_img} style={{...props.style_img}} src="/img/bg.svg" />
            <h2 className={classes.no_data_title}>You do not have any {props.name} yet</h2>
            <p className={classes.no_data_desc}>Start adding {props.name} by clicking on the {props.name_btn} button in the top right corner</p>
        </div>
    )
}


export default NoList