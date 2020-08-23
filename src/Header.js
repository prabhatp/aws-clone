import React from 'react';
import "./Header.css";
import {Link} from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
function Header() {
    return (
        <nav className="header">
            {/* Left image logo */}
            <Link to="/">
                <img 
                    className="header__logo" 
                    src="http://pngimg.com/uploads/amazon/amazon_PNG25.png" 
                    alt="" 
                />
            </Link>

            {/* Search box */}
            <div className="header__search">
                <input type="text" name="search" className="header_searchInput" />
                <SearchIcon className="header__searchIcon"/>
            </div>
            {/* 3 Links */}
            <div className="header__nav">
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header_optionLineOne">Hello Prabhat</span>
                        <span className="header_optionLineTwo">Sign In</span>
                    </div>
                </Link>
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header_optionLineOne">Returns</span>
                        <span className="header_optionLineTwo">& Orders</span>
                    </div>
                </Link>
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header_optionLineOne">Your</span>
                        <span className="header_optionLineTwo">Prime</span>
                    </div>
                </Link>

                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header_optionLineTwo header_basketCount">0</span>
                    </div>
                </Link>
            </div>  

            {/* Basket icon with number */}
        </nav>
    )
}

export default Header
