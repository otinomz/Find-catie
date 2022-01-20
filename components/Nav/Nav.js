import React from 'react';
import Link from "next/link"

export default function Nav() {
    return (
        <nav className="navar navbar-light bg-light mt-5">
            <div className="container-fluid">
                <Link href="/" className="navbar-brand mb-0 h1">HomePage</Link>
            </div>
        </nav>
    )
}
