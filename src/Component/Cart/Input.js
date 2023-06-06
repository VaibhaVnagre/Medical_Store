import React,{Fragment} from "react";
import classes from './Input.module.css'

const Input = (props) => {
    return(
        <Fragment className={classes.input}>
        <label className={classes.label}>{props.label}</label>
        <input >{props.children}</input>
        </Fragment>
    )
}
export default Input;