import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className = 'header'>
            <img 
                className = 'header__logo'
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                
            />
            
            <div
                className = 'header__search'>
                <input
                className = 'header__searchInput' type ="text"/>
                {/* logo */}
            </div>

            <div className = 'header__nav'>
                <div className = 'header__option'>
                    <span className = 'header_optionLineOne'>
                        Hello
                    </span>

                    <span className = 'header_optionLineTwo'>
                        Sign In
                    </span>
                </div>

                <div className = 'header__option'>
                    <span className = 'header_optionLineOne'>
                        Returns
                    </span>

                    <span className = 'header_optionLineTwo'>
                        & Orders
                    </span>
                </div>

                <div className = 'header__option'>
                    <span className = 'header_optionLineOne'>
                        Your
                    </span>

                    <span className = 'header_optionLineTwo'>
                        Prime
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Header
