import styles from './page.module.css';
import Image from 'next/image';
import ObjectPromImg from '@/assets/images/ObjectPromImg.svg'
import Link from 'next/link';





export default function Page() {

    return (
        <>
            <div className={styles.Title}>Рассрочка 0%</div>

            <div className={styles.PromSect}>
                <div className={styles.PromSectDesc}>
                    <div className={styles.PromTitle}>В ЖК Премиум</div>
                    <p className={styles.PromTitleDesc}>Условия акции</p>
                    <div className={styles.PromSectText}>
                        <p>В жилом комплексе Премиум доступна рассрочка 0% до 15 октября 2022 года при первоначальном взносе от 40%. </p>
                        <p>Акцию проводит ООО Специализированный застройщик Эмеральд.</p>
                        <p>Предложение действительно с 01 августа 2022 года. Условия и подробности уточняйте у менеджеров по телефону и на сайте застройщика.</p>
                    </div>
                    <a href="" className={styles.PromSectLink}><div className={styles.PromSectLinkText}>Перейти на сайт застройщика</div></a>
                   <Link href="/promotions" className={styles.ItemLink}><div className={styles.PromSectBtn}>Вернуться к акциям</div></Link> 
                </div>
                <Image src={ObjectPromImg} className={styles.ObjectPromImg} width="450" height="455" alt="ObjectPromImg" />
            </div>
        </>

    )
}