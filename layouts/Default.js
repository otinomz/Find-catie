import React from 'react';
import Nav from '../components/Nav/Nav';

export default function Default({children}) {
    return (
        <div>
            <Nav />
            <p style={{marginLeft: "20px"}}>Designed by Otinomo</p>
            <main>
                {children}
            </main>
        </div>
    )
}
