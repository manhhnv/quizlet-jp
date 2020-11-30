import React from 'react';
import { VscCreditCard } from 'react-icons/vsc';

const TermButton = ({path, title}: any) => {
    return (
        <div className="term-button-container">
            <svg style={{height: "2rem", width: "2rem", fill:"#4257b2"}}>
                <path d={path}>
                </path>
            </svg>
            <div style={{fontSize: "1rem", fontWeight: "bold", marginLeft: "0.3rem"}}>
                {title}
            </div>
        </div>
    )
}

export default TermButton
