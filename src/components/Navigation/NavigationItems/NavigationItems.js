import React from 'react';
import './NavigationItems.css';
import active from '../../../assets/Images/active.png';
import ContactSupport from '../../../assets/Images/ContactSupport.png';
import power from '../../../assets/Images/power.png';
import user from '../../../assets/Images/user.png';
import Vector from '../../../assets/Images/Vector.png';
const navigationItems = () => (
    <ul className="NavigationItems">
        <img src={Vector} alt="GitHubLogo" />
        <img src={ContactSupport} alt="GitHubLogo" />
        <img className="msgs" src={active} alt="GitHubLogo" />
        <img src={user} alt="GitHubLogo" />
        <img src={power} alt="GitHubLogo" />
    </ul>
);
export default navigationItems;