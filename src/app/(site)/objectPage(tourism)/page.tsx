import styles from './page.module.css';
import Image from 'next/image';
import TourismObject from '@/assets/images/TourismObject.svg'
import TourismObject2 from '@/assets/images/TourismObject2.svg'
import TourismObjectList1 from '@/assets/images/TourismObjectList1.svg'
import TourismObjectList2 from '@/assets/images/TourismObjectList2.svg'
import TourismObjectList3 from '@/assets/images/TourismObjectList3.svg'
import TourismObjectList4 from '@/assets/images/TourismObjectList4.svg'
import TourismRublino from '@/assets/images/TourismRublino.svg'
import Building2 from '@/assets/images/Building2.svg'
import Calendar from '@/assets/images/Calendar.svg'
import Geo from '@/assets/images/Geo.svg'
import Planet from '@/assets/images/Planet.svg'
import TourismBase from '@/assets/images/TourismBase.svg'



export default function Page() {

    return (
        <>
            <div className={styles.TitleImg}>
                <Image src={TourismObject} className={styles.TourismObject} alt="TourismObject" />
                <div className={styles.TitleText}>
                    <div className={styles.ImgTitle}>База отдыха Рублено</div>
                    <p className={styles.ImgTitleDesc}>Оазис гармонии рядом с бухтой Шамора</p>
                </div>
            </div>

            <section className={styles.ImgList}>
                <div className={styles.ImgListItems}>
                    <Image src={TourismObject2} className={styles.TourismObject2} width='600' height='500' alt="TourismObject" />
                    <div className={styles.ImgListRight}>
                        <Image src={TourismObjectList1} className={styles.TourismObjectList1} width='250' height='230' alt="TourismObjectList1" />
                        <Image src={TourismObjectList2} className={styles.TourismObjectList2} width='250' height='230' alt="TourismObjectList2" />
                        <Image src={TourismObjectList3} className={styles.TourismObjectList3} width='250' height='230' alt="TourismObjectList3" />
                        <Image src={TourismObjectList4} className={styles.TourismObjectList4} width='250' height='230' alt="TourismObjectList4" />
                    </div>
                </div>
            </section>
            <section className={styles.ObjectBase}>
                <div className={styles.BaseTitle}>О базе отдыха</div>
                <div className={styles.AboutBase}>
                    <div className={styles.BaseDesc}>
                        <p className={styles.BaseDescText}>На территории базы отдыха есть семь экологичных домов из круглого бурса.
                            Каждый дом максимально благоустроен для проживания. Небольшая кухня, санузел, двуспальные кровати, диваны, кондиционер. </p>

                        <p className={styles.BaseDescText}>Самый большой дом 10-ти местный, четыре 4-х местных дома и два 2-х местных (2-х местные дома сдаются только в летний период).</p>

                        <p className={styles.BaseDescText}>Также на территории базы есть гостиница с комфортными номерами разных категорий; Стандарт, Полулюкс, Люкс (все номера 2-х местные)</p>
                        <div className={styles.BaseDescInfo}>
                            <div className={styles.InfoDesc}>
                                <div className={styles.Info}>
                                    <div className={styles.InfoText}>
                                        <Image src={Building2} width="20" height="20" alt="Building" />
                                        <p>1200 кв.м.</p>
                                    </div>

                                    <div className={styles.InfoText}>
                                        <Image src={Calendar} width="20" height="20" alt="Calendar" />
                                        <p>Год постройки 2016</p>
                                    </div>

                                </div>
                                <div className={styles.InfoText}>
                                    <Image src={Geo} width='20' height='20' alt="Geo" />
                                    <p className={styles.InfoTextAdapt}>г. Владивосток, ул. Адмирала Угрюмова, 48/49</p>
                                </div>

                                <div className={styles.InfoText}>
                                    <Image src={Planet} width='20' height='20' alt="Planet" />
                                    <a href="" className={styles.InfoLink}>рублино.рф</a>
                                </div>
                            </div>
                            <Image src={TourismRublino} className={styles.TourismRublino} width='100' height='100' alt="TourismRublino" />
                        </div>
                    </div>
                    <Image src={TourismObject2} className={styles.TourismObjectAdapt} width='600' height='500' alt="TourismObject" />
                    <Image src={TourismBase} className={styles.TourismBase} width='540' height='400' alt="TourismBase" />
                </div>
            </section>
        </>
    )
}