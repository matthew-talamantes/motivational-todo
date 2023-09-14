'use client'

import styles from './currentDateStyles.module.scss';

export default function CurrentDate() {

    const currentDate: Date = new Date();

    const dateString: string = `${currentDate.toLocaleDateString("en-US", { weekday: 'long' })} ${currentDate.toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}`

    return (
        <article>
            <h1 className={styles.currentDate}>{dateString}</h1>
        </article>
    );
}