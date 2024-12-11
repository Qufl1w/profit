import styles from './page.module.css';
import Image from 'next/image';
import Building2 from '@/assets/images/Building2.svg'
import HousePlan2 from '@/assets/images/HousePlan2.svg'
import Stairs2 from '@/assets/images/Stairs2.svg'
import Geo from '@/assets/images/Geo.svg'
import OfficeImg1 from '@/assets/images/OfficeImg1.svg'
import LeasePopup from '@/assets/images/LeasePopup.svg'
import Close from '@/assets/images/Close.svg'




export default function Page() {

    return (
        <>
            <div className={styles.ObjectTitle}>
                <p className={styles.Title}>Офис в БЦ Триумф</p>
                <div className={styles.TitleText}>
                    <div className={styles.Circle}></div>
                    <p className={styles.CircleText}>Свободно</p>
                </div>
            </div>

            <div className={styles.IconsDesc}>
                <div className={styles.Icon}>
                    <Image src={Geo} width='20' height='20' alt='Icon' />
                    <p>Уссурийск, Центральный район</p>
                </div>

                <div className={styles.Icon}>
                    <Image src={HousePlan2} width='20' height='20' alt='Icon' />
                    <p>200 кв.м.</p>
                </div>

                <div className={styles.Icon}>
                    <Image src={Building2} width='20' height='20' alt='Icon' />
                    <p className={styles.IconText}>улица Некрасова, дом 56, корпус 3</p>
                    <p className={styles.IconText1}>улица Некрасова, дом 56, к. 3</p>
                </div>

                <div className={styles.Icon}>
                    <Image src={Stairs2} width='20' height='20' alt='Icon' />
                    <p>12 этаж из 15 </p>
                </div>
            </div>

            <div className={styles.OfficeSect}>
                <div className={styles.OfficeDesc}>
                    <p>Сдаются 6 этажей в БЦ Триумф по 200-270 кв.м. каждый этаж.
                        Готовы сдать как отдельно этажами, так и целиком здание. Центральное кондиционирование и приточно-вытяжная вентиляция. </p>

                    <p>БЦ с пропускной системой, 24/7. Вид на БЦ Золотой. Парковка рядом городская 180 руб/час. </p>

                    <p>На каждом этаже есть кухня и 2-3 санузла.</p>
                </div>

                <div className={styles.OfficePrice}>
                    <p className={styles.PriceTitle}>100 000 руб./месяц</p>
                    <a href="#popup"><button className={styles.OfficeBtn}>Забронировать</button></a>
                </div>
            </div>
            <Image src={OfficeImg1} className={styles.OfficeImg} width='1200' height='800' alt='OfficeImg' />

            <div id="popup" className={styles.popup}>
                <a href="#popup_fixed" className={styles.popup_area}></a>
                <div className={styles.popup_body}>
                    <div className={styles.popup_content}>
                        <a href="#popup_fixed" className={styles.popup_close}><Image src={Close} className={styles.Close} width="40" height="40" alt="Close" /></a>
                        <div className={styles.popup_title}>Заявка на обратный звонок</div>
                        <div className={styles.popup_contentItem}>
                            <div className={styles.popup_text}>
                                <p className={styles.popup_textItem}>Заполните форму ниже, чтобы мы могли с Вами связаться и обсудить все детали </p>
                                <form action="">
                                    <input type="text" className={styles.popup_form} placeholder="    ФИО"></input>
                                    <input type="text" className={styles.popup_form} placeholder="    Телефон"></input>
                                    <input type="submit" className={styles.popup_submit} value="Откликнуться"></input>
                                </form>
                                <div className={styles.popup_textEnd}>Нажимая “Откликнуться”, Вы даете свое согласие на <a href='' className={styles.href} >обработку персональных данных</a></div>
                            </div>
                            <Image src={LeasePopup} className={styles.JobsPopupImg} width="420" height="400" alt="LeasePopup" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}