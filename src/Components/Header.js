import React from 'react';
import '../Styles/headers.css';
class Header extends React.Component{
    render() {
        return (
            <div>
        <div class="rect"></div>
        <div class="logos">
            <h1 class="ee">e!</h1>
        </div>
        <div class="login">
            <button>login</button>
        </div>
        <div class="account">
            Create account
        </div>
         </div>
        )
    }
}
export default Header;