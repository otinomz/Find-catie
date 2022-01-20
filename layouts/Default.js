import React from 'react';
import Nav from '../components/Nav/Nav';

export default function Default({children}) {
    return (
        <div>
            <Nav />
            <p>Designed by Otinomo</p>
            <main>
                {children}
            </main>

        </div>
    )
}
