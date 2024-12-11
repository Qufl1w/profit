'use client'

import Image from 'next/image';
import styles from './footer.module.css';
import primend from "@/assets/images/PrimEnd copy.svg";
import Link from 'next/link';

export default function Footer() {
    return (
        <>
        <div className={styles.sectionEndPage}>
        <div className={styles.a123}>
            <Image src={primend} className={styles.sectionEndPageImg} width="230" height="67" alt="primend"/>
            </div>
            <div className={styles.sectionEndPageGroup}>
                <div className={styles.promotionEndPage1}>
                    <h1>Контакты</h1>
                    <p><a href="" className={styles.ItemLinkEnd}>+7 965 678 45 59</a></p>
                    <p><a href="" className={styles.ItemLinkEnd}>+7 4234 31 52 41</a></p>
                    <p><a href="" className={styles.ItemLinkEnd}>primorstroy@mail.ru</a></p>
                    <p><a href="" className={styles.ItemLinkEnd}>Приморский край, г. Уссурийск, ул. Механизаторов, 22-а</a></p>
                </div>
                <div className={styles.promotionEndPage2}>
                    <h1>Компания</h1>
                    <p><a href="" className={styles.ItemLinkEnd}>Главная</a></p>
                    <p><Link href="/about-us" className={styles.ItemLinkEnd}>О нас</Link></p>
                    <p><Link href="/jobs" className={styles.ItemLinkEnd}>Вакансии</Link></p>
                    <p><Link href="/contacts" className={styles.ItemLinkEnd}>Контакты</Link></p>
                    <p><a href="" className={styles.ItemLinkEnd}>Пользовательское соглашение</a></p>
                    <p><a href="" className={styles.ItemLinkEnd}>Политика конфиденциальности</a></p>
                </div>
                <div className={styles.promotionEndPage3}>
                    <h1>Деятельность</h1>
                    <p><Link href="/construction" className={styles.ItemLinkEnd}>Строительство</Link></p>
                    <p><Link href="/lease" className={styles.ItemLinkEnd}>Аренда</Link></p>
                    <p><Link href="/tourism" className={styles.ItemLinkEnd}>Туризм</Link></p>
                    <p><a href="" className={styles.ItemLinkEnd}>Услуги</a></p>
                    <p><Link href="/production" className={styles.ItemLinkEnd}>Производство</Link></p>
                    <p><Link href="/documents" className={styles.ItemLinkEnd}>Документы</Link></p>
                </div>
            </div>
            </div>
        </>
    )
}