import React, { useState, useEffect } from 'react';
import styles from '../css/Header.module.css';
const Header = () => {
    return <>
        <header>
            <h1 className={styles.title}>Your Todos</h1>
    </header>
    </>
}

export default Header;