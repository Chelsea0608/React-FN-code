import React from 'react';
import '../Styles/headers.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";
class Header extends React.Component{
    render() {
        return (
        <div class="rect">
        <div class="logos">
            <h1 class="ee">e!</h1>
        </div>
        <div class="account">
            <Button variant="outline-light" size="lg">Login</Button>{''} &nbsp; &nbsp;
            <Button variant="outline-light" size="lg">Create Account</Button>{''}
        </div>
        </div>
        )
    }
}
export default Header;
