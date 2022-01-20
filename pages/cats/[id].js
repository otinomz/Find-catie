import {useState} from "react"
import { useRouter } from 'next/router';
import React from 'react';

export default function Cat() {
    const [cat, setCat]= useState(null)
    
    const router = useRouter()
    const {id} = router.query

    const fetchCat = async () => {
        const response = await fetch(`/api/cats/${id}`)
        const data = await response.json()
    }



    return (
        // rendering cat information for specific cat in mind
        <div>
            
        </div>
        
    ) 
}
