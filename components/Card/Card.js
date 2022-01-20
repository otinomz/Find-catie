import React from 'react';
import styles from "./Card.module.css"

export default function Card({id, name, phone, email, image}) {
    return (
        <div
            className={styles.card}
        >
            <div className={styles["card-header"]}>
                <img src={image.url} alt={image.alt} className={styles["card-img"]} />
            </div>
            <div>
                <h3>{name}</h3>
                <p>{phone}</p>
                <p>{email}</p>
            </div>
        </div>
    )
}
