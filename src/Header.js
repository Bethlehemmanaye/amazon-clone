import  './Header.css';
import React from 'react'
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
{/*contain logo,search icon,sign in,order,prime,cart*/ }
function Header() {
    return (
        <div className='header'>
            <img className="header__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"/>
              {/*logo*/}
            <div 
            className="header__search">
                <input
                 className="header__searchIn 
                 put" type="text" />
                 <SearchIcon
                 className="header__searchIcon" />
                {/*search*/}
              
            </div>
            //sign in button 
            <div className="header__nav">
                <div className='header__option'>
                    <span
                    className='header__optionLineOne'
                    >Hello Betty</span>
                    <span 
                    className='header__optionLineTwo'
                    >Sign In</span>

                </div>
              {/*order button*/}
                <div className='header__option'>
                    <span
                    className='header__optionLineOne'
                    >Returns</span>
                    <span 
                    className='header__optionLineTwo'
                    >& Orders</span>
                </div>
                {/*prime button*/}

                    <div className='header__option'>
                        <span
                        className='header__optionLineOne'
                        >Your</span>
                        <span className='header__optionLineTwo'
                        >Prime</span>
                    </div>
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon/>
                        <span className="header__optionLineTwo
                        header__basketCount">0</span>
                    </div>
            </div>
        </div>

    );
}

export default Header
