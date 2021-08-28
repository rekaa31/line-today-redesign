import React from 'react';
import NavbarComponent from './../component/navbar/NavbarComponent';

const MainLayout = ({children, ...rest}) => {
    
    // document.body.style.backgroundColor = "#1B1B2F"
    
    return (
        <div className="container-fluid">
            
            <NavbarComponent />

            <div className="main">
                {children}
            </div>

        </div>
    );
}

export default MainLayout;