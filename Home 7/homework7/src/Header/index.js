import React from 'react';
import Logo from './Logo/index';

function headerComponent() {
    return (
        <div className="test-header">
            <Logo/>
            <p>My test header</p>
        </div>
    );
}

export default headerComponent;
