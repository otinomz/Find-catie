import React, {useState} from 'react';
import Nav from '../../components/Nav/Nav';

export default function index() {
    const [ cats, setCats ] = useState([])

    const fetchCats = async () => {
        const response = await fetch('/api/cats')
        const data = await response.json()
    }

    return (
        <div>
            <Nav />      
        </div>
    )
}
