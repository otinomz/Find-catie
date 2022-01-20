import {useEffect, useState} from "react"
import { useRouter } from 'next/router';
import React from 'react';
import DefaultLayout from "../../layouts/Default";
import Head from "next/head"
import styles from "./index.module.css"

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
                        <>
                            {/* rendering head tag dynamically */}
                            <Head>
                                <title>{cat.name}</title>
                                <meta name="description" content="know your dream cat today" />
                                <link rel="icon" href="/favicon.ico" />
                            </Head> 
                        

                            <div className= {styles["cat-container"]}>
                                <img style={{width: '40%', height: '40%'}} src={cat.image.url} alt={cat.image.alt} />
                                <div className="mx-5">
                                    <h1 className={styles.top}>{cat.name}</h1>
                                    <p className={styles.top}>{cat.description}</p>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </DefaultLayout>
        </>    
    ) 
}
