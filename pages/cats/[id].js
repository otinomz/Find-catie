import { useRouter } from 'next/router';
import React from 'react';

export default function Cat() {

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
