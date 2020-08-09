import React from 'react';
import './NavigationItems.css';
import active from '../../../assets/Images/active.png';
import ContactSupport from '../../../assets/Images/ContactSupport.png';
import power from '../../../assets/Images/power.png';
import user from '../../../assets/Images/user.png';
import Vector from '../../../assets/Images/Vector.png';
const navigationItems = () => (
    <ul className="NavigationItems">
        <img src={Vector} alt="DepositSolutions" />
        <img src={ContactSupport} alt="DepositSolutions" />
        <img className="msgs" src={active} alt="DepositSolutions" />
        <img src={user} alt="DepositSolutions" />
        <img src={power} alt="DepositSolutions" />
    </ul>
);
export default navigationItems;