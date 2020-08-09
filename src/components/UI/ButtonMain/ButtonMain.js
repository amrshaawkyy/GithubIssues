import React from 'react';
import './ButtonMain.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import DepositSolutionsLogo from '../../../assets/Images/Main.jpg';
const buttonMain = () => {
    const Div = styled.div`
    background-image: url(${DepositSolutionsLogo});
   `;
    return (
        <Div className="ButtonMain">
            <svg className="svg" viewBox="45 60 400 320" >
                <Link to='/Issues/'>
                    <path fill="#fff" d="M 90 210 C 90 180 90 150 90 150 C 150 150 180 150 180 150 C 180 150 300 150 300 150 C 300 150 330 150 390 150 C 390 150 390 180 390 210 C 390 240 390 270 390 270 C 330 270 300 270 300 270 C 300 270 180 270 180 270 C 180 270 150 270 90 270 C 90 270 90 240 90 210" mask="url(#knockout-text)" >
                    </path>
                </Link>
                <mask id="knockout-text">
                    <rect width="100%" height="100%" fill="#fff" x="0" y="0" />
                    <text x="170" y="227" fill="#000">Issues</text>
                </mask>
            </svg>
        </Div>
    );
}
export default buttonMain;