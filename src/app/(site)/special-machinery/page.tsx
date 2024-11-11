import styles from './page.module.css';
import Image from 'next/image';
import SpecMacDesc from '@/assets/images/SpecMacDesc.svg'
import Loader from '@/assets/images/Loader.svg'
import HydraulicHammer from '@/assets/images/HydraulicHammer.svg'
import Excavators from '@/assets/images/Excavators.svg'
import DumbTrucks from '@/assets/images/DumbTrucks.svg'
import TruckСranes from '@/assets/images/TruckCranes.svg'
import Bulldozers from '@/assets/images/Bulldozers.svg'
import Manipulators from '@/assets/images/Manipulators.svg'
import AerialPlatmorms from '@/assets/images/AerialPlatforms.svg'
import Rollers from '@/assets/images/Rollers.svg'




export default function Page() {

    return (
        <>
            <section className={styles.SpecMacLease}>
                <div className={styles.SpecMacTitle}>Аренда спецтехники</div>
                <Image src={SpecMacDesc} className={styles.SpecMacDescImg} width='965' height='400' alt='SpecMacDesc'/>
                <div className={styles.SpecMacBlock}>
                    <div className={styles.SpecMacBlockText}>
                        <p>Аренда спецтехники в компании Приморстрой оптимизирует работу и сокращает единовременные вложения и позволяет равномерно распределять расходы.</p>
                        <p>Мы предлагаем рентабельные решения для каждого и предоставляем услуги аренды спецтехники, которые положительно скажутся на стоимости и организации работ.</p>
                    </div>
                </div>
            </section>

            <section className={styles.SpecMacСatalog}>
                <div className={styles.CatalogTitle}>Каталог</div>
                <div className={styles.CatalogMenu}>

                    <div className={styles.CatalogCard}>
                        <p className={styles.CatalogCardText}>Погрузчики</p>
                        <Image src={Loader} width='370' height='250' alt='Loader' />
                    </div>

                    <div className={styles.CatalogCard}>
                        <p className={styles.CatalogCardText}>Гидромолоты</p>
                        <Image src={HydraulicHammer} width='370' height='250' alt='HydraulicHammer' />
                    </div>

                    <div className={styles.CatalogCard}>
                        <p className={styles.CatalogCardText}>Экскаваторы</p>
                        <Image src={Excavators} width='370' height='250' alt='Excavators' />
                    </div>

                    <div className={styles.CatalogCard}>
                        <p className={styles.CatalogCardText}>Самосвалы</p>
                        <Image src={DumbTrucks} width='370' height='250' alt='DumbTrucks' />
                    </div>

                    <div className={styles.CatalogCard}>
                        <p className={styles.CatalogCardText}>Автокраны</p>
                        <Image src={TruckСranes} width='370' height='250' alt='TruckСranes' />
                    </div>

                    <div className={styles.CatalogCard}>
                        <p className={styles.CatalogCardText}>Бульдозеры</p>
                        <Image src={Bulldozers} width='370' height='250' alt='Bulldozers' />
                    </div>

                    <div className={styles.CatalogCard}>
                        <p className={styles.CatalogCardText}>Манипуляторы</p>
                        <Image src={Manipulators} width='370' height='250' alt='Manipulators' />
                    </div>

                    <div className={styles.CatalogCard}>
                        <p className={styles.CatalogCardText}>Автовышки</p>
                        <Image src={AerialPlatmorms} width='370' height='250' alt='AerialPlatmorms' />
                    </div>

                    <div className={styles.CatalogCard}>
                        <p className={styles.CatalogCardText}>Катки</p>
                        <Image src={Rollers} width='370' height='250' alt='Rollers' />
                    </div>
                </div>
            </section>
        </>
    )
}