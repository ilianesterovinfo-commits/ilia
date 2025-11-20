import React from 'react';
import styles from './notFoundBlock.module.scss';

function NotFoundBlock() {
    return (
        <div className={styles.root}>
            <span>&#128555;</span>
            <br/>
            <h1>Ничего не найдено</h1>
            <p className={styles.descriptions}> К сожалению данная страница отсутствует в нашем магазине </p>
        </div>
    );
}

export default NotFoundBlock;