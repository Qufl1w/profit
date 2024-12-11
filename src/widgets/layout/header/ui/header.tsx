'use client'
import Link from 'next/link';

import Image from 'next/image';
import styles from './header.module.css';
import Logo from "@/assets/images/logo.svg";
import BurgerMenu from '@/assets/images/BurgerMenu.svg'

export default function Header() {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.headerNav}>
                    <a href="/"> <Image className={styles.logo} width={190} height={60} src={Logo} alt="Logo" /></a>
                    <div className={styles.menu}>
                        <nav>
                            <ul className="list">
                                <li><Link href="/" className={styles.itemLink}>Главная</Link></li>
                                <li><Link href="/about-us" className={styles.itemLink}>О нас</Link></li>
                                <li><Link href="/construction" className={styles.itemLink}>Строительство</Link></li>
                                <li><Link href="/lease" className={styles.itemLink}>Аренда</Link></li>
                                <li><Link href="/tourism" className={styles.itemLink}>Туризм</Link></li>
                                <li><Link href="/special-machinery" className={styles.itemLink}>Спецтехника</Link></li>
                                <li><Link href="/logistics" className={styles.itemLink}>Логистика</Link></li>
                                <li><Link href="/production" className={styles.itemLink}>Производство</Link></li>
                                <li><Link href="/contacts" className={styles.itemLink}>Контакты</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className={styles.Adapt}>
                <div className={styles.phone}>
                    <a href="tel:+79656784559" className={styles.itemLink}>+7 965 678 45 59</a>
                </div>
                <div className={styles.header_burger}>            
                <a href="#burger"><Image src={BurgerMenu} className={styles.BurgerImg} width="40" height="40" alt="BurgerMenu"/></a>
                    </div>
                    </div>
            </header>
        </>
    )
}