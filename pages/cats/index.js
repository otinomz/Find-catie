import React, {useEffect, useState} from 'react';
import Nav from '../../components/Nav/Nav';
import Card from '../../components/Card/Card'

export default function Cats() {
    
    const [ cats, setCats ] = useState([])

    const fetchCats = async () => {
        const response = await fetch('/api/cats')
        const data = await response.json()
        console.log(data)
        setCats(data)
    }

    useEffect(() => {
        fetchCats()
    }, [])

    return (
        <div>
            <Nav />
            
            <div className="card__container">
                {cats.map(cat => (
                    <Card
                        key={cat.id}
                        name={cat.name}
                        id={cat.id}
                        phone={cat.phone}
                        email={cat.email}
                        image={cat.image}
                    />
                ))}
            </div>
            
        </div>
    )
}
