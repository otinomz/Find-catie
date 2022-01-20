import React, {useEffect, useState} from 'react';
import Nav from '../../components/Nav/Nav';

export default function Cats() {
    
    const [ cats, setCats ] = useState([])

    const fetchCats = async () => {
        const response = await fetch('/api/cats')
        const data = await response.json()
        setCats(data)
    }

    useEffect(() => {
        fetchCats()
    }, [])

    return (
        <div>
            <Nav />      
        </div>
    )
}
