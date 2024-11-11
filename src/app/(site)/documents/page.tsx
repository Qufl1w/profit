import styles from './page.module.css';
import Image from 'next/image';
import Documents from '@/assets/images/Documents.svg'



export default function Page() {

    return (
        <>
            <div className={styles.DocTitle}>Учредительные документы</div>
            <div className={styles.DocList}>
                <div className={styles.List}>
                    <Image src={Documents} className={styles.DocImg} width="30" height="30" alt="DocImg" />
                    <a href='' className={styles.DocItem}>Свидетельство о регистрации юридического лица (ОГРН)</a>
                </div>
                <div className={styles.List}>
                    <Image src={Documents} className={styles.DocImg} width="30" height="30" alt="DocImg" />
                    <a href='' className={styles.DocItem}>Свидетельство о постановке на учет (ИНН)</a>
                </div>
                <div className={styles.List}>
                    <Image src={Documents} className={styles.DocImg} width="30" height="30" alt="DocImg" />
                    <a href='' className={styles.DocItem}>Устав ООО СЗ “Приморстрой”</a>
                </div>
            </div>
            <div className={styles.DocTitle}>Разрешительная документация</div>
            <div className={styles.DocList}>
                <div className={styles.List}>
                    <Image src={Documents} className={styles.DocImg} width="30" height="30" alt="DocImg" />
                    <a href='' className={styles.DocItem}>Разрешение на проведение строительства или реконструкции</a>
                </div>
                <div className={styles.List}>
                    <Image src={Documents} className={styles.DocImg} width="30" height="30" alt="DocImg" />
                    <a href='' className={styles.DocItem}>Разрешение на проведение строительства или реконструкции</a>
                </div>
                <div className={styles.List}>
                    <Image src={Documents} className={styles.DocImg} width="30" height="30" alt="DocImg" />
                    <a href='' className={styles.DocItem}>Заключения о соответствии объекта пожарным, строительных, экологическим и иным нормам</a>
                </div>
                <div className={styles.List}>
                    <Image src={Documents} className={styles.DocImg} width="30" height="30" alt="DocImg" />
                    <a href='' className={styles.DocItem}>Разрешение на ввод в эксплуатацию</a>
                </div>
            </div>
            <div className={styles.DocTitle}>Кадастровые документы</div>
            <div className={styles.List}>
                <Image src={Documents} className={styles.DocImg} width="30" height="30" alt="DocImg" />
                <a href='' className={styles.DocItem}>Свидетельство о регистрации юридического лица (ОГРН)</a>
            </div>
            <div className={styles.List}>
                <Image src={Documents} className={styles.DocImg} width="30" height="30" alt="DocImg" />
                <a href='' className={styles.DocItem}>Свидетельство о постановке на учет (ИНН)</a>
            </div>
            <div className={styles.List}>
                <Image src={Documents} className={styles.DocImg} width="30" height="30" alt="DocImg" />
                <a href='' className={styles.DocItem}>Устав ООО СЗ “Приморстрой”</a>
            </div>
            <div className={styles.DocTitle}>СРО</div>
            <div className={styles.DocList}>
                <div className={styles.List}>
                    <Image src={Documents} className={styles.DocImg} width="30" height="30" alt="DocImg" />
                    <a href='' className={styles.DocItem}>Выписка из реестра членов СРО </a>
                </div>
                <div className={styles.List}>
                    <Image src={Documents} className={styles.DocImg} width="30" height="30" alt="DocImg" />
                    <a href='' className={styles.DocItem}>Разрешение на проведение строительства или реконструкции</a>
                </div>
                <div className={styles.List}>
                    <Image src={Documents} className={styles.DocImg} width="30" height="30" alt="DocImg" />
                    <a href='' className={styles.DocItem}>Заключения о соответствии объекта пожарным, строительных, экологическим и иным нормам</a>
                </div>
                <div className={styles.List}>
                    <Image src={Documents} className={styles.DocImg} width="30" height="30" alt="DocImg" />
                    <a href='' className={styles.DocItem}>Разрешение на ввод в эксплуатацию</a>
                </div>
            </div>
        </>
    )
}
