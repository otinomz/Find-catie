import {useEffect, useState} from "react"
import { useRouter } from 'next/router';
import React from 'react';

export default function Cat() {
    const [cat, setCat]= useState(null)
    
    const router = useRouter()
    const {id} = router.query

    const fetchCat = async () => {
        const response = await fetch(`/api/cats/${id}`)
        const data = await response.json()
        setCat(data)
    }

    useEffect(() => {
        fetchCat()
    }, [])

    return (
        // rendering cat information for specific cat in mind
        <div>
            {cat && (
                <div className="mt-5 flex">
                    <img src={cat.image.url} alt={cat.image.alt} />
                    <div className="mx-5">
                        <h1>{cat.name}</h1>
                        <p>{cat.description}</p>
                    </div>
                </div>
            )}
        </div>
        
    ) 
}
