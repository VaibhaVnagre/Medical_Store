import React,{Fragment} from 'react';
import classes from './Header.module.css'
import CartButton from '../Cart/CartButton';


const Header = () => {
    return(
        <Fragment>
        <div className={classes.header}>
            <h1>Medical Store</h1>
            <CartButton className={classes.header}/>
        </div>
       
        {/* <div className={classes['main-image']}>
            <img src='https://solutionpharmacy.in/wp-content/uploads/2022/01/Drug-Store-Management-and-Inventory-Control.jpeg' />
        </div> */}
        </Fragment>
           
        
    )
}
export default Header; 