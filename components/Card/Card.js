import React from 'react';
import styles from "Card.module.css"

export default function Card() {
    return (
        <div
            className={styles.card}
        >
            <div className={styles["card-header"]}>
                <img src="" alt="" className={styles["card-img"]} />
            </div>
        </div>
    )
}
