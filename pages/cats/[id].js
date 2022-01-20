import {useEffect, useState} from "react"
import { useRouter } from 'next/router';
import React from 'react';
import Nav from "../../components/Nav/Nav";
import DefaultLayout from "../../layouts/Default";

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
        <> 
            <DefaultLayout>
                {/*rendering cat infor mation for specific cat in mind */}
                <div>
                    {cat && (
                        <div 
                            className= "container mt-5"
                            style={{display: 'flex'}}
                        >
                            <img style={{width: '30%', height: '30%'}} src={cat.image.url} alt={cat.image.alt} />
                            <div className="mx-5">
                                <h1>{cat.name}</h1>
                                <p>{cat.description}</p>
                            </div>
                        </div>
                    )}
                </div>
            </DefaultLayout>
        </>    
    ) 
}
