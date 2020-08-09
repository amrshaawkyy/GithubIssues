import React from 'react';
import './Toolbar.css';
import Logo from "../../Logo/Logo";
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
const toolbar = (props) => (
    <header className="Toolbar">
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <div className="LogoToolBar">
            <Link to='/'>
                <Logo /*height="80%"*/ />
            </Link>
        </div>
        <nav className="DestopOnly">
            <NavigationItems />
        </nav>
        <nav className="MobileOnly">
        </nav>
    </header>
);
toolbar.propTypes = {
    drawerToggleClicked: PropTypes.func
};
export default toolbar;  