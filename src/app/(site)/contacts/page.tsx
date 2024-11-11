import styles from './page.module.css';
import Image from 'next/image';
import Contacts from '@/assets/images/Contacts.svg'
import ContactsMap from '@/assets/images/ContactsMap.svg'




export default function Page() {

    return (
        <> 
        <p className={styles.ContactsTitle}>Контакты</p>

        <section className={styles.ContactsImg}>
            <div className={styles.ContactsImages}>
        <Image src={Contacts} className={styles.Contacts} width='800' height='450' alt='Contacts' />
        <Image src={ContactsMap} className={styles.Contacts} width='800' height='450' alt='ContactsMap' />
        </div>
        <div className={styles.ContactsBlock}>
            <div className={styles.ContactsBlockText}>
            <p>+7 965 678 45 59</p>
            <p>+7 4234 31 52 41</p>
            <p>primorstroy@mail.ru</p>
            <p>Приморский край, г. Уссурийск, ул. Механизаторов, 22А</p>
            </div>
        </div>
        </section>
        </>
    )
}