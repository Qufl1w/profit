import styles from './page.module.css';
import Image from 'next/image';
import ConstMenuImg1 from '@/assets/images/ConstMenuImg1.svg'
import ConstMenuImg2 from '@/assets/images/ConstMenuImg2.svg'
import ConstMenuImg3 from '@/assets/images/ConstMenuImg3.svg'
import ConstMenuImg4 from '@/assets/images/ConstMenuImg4.svg'
import Link from 'next/link';

export default function Page() {

    return (
        <>

                <div className={styles.ConstTitle}>Строящиеся объекты</div>
                <div className={styles.ConstBtn}>
                    <p className={styles.ConstText1Btn}>Жилые</p>
                    <p className={styles.ConstText2Btn}>Коммерческие</p>
                </div>
                <div className={styles.ConstFilter}>
                    <p className={styles.ConstStage}>Стадия: <span className={styles.spncolor}>Строительство</span></p>
                    <p className={styles.ConstChange}>Сдача до: <span className={styles.spncolor}>4 квартала 2022 года</span></p>
                    <div className={styles.ConstApply}>
                        <div className={styles.ConstApplyText}>Применить</div>
                    </div>
                </div>
                <section className={styles.ConstImgMenu}>
                    <div className={styles.ConstMenuImg1}>
                        <Link href="/objectPage(construction)"> <Image src={ConstMenuImg1} className={styles.MenuImg} width="560" height="350" alt="ConstMenuImg1"/></Link>
                        <div className={styles.ConstMenuImgTitle}>
                            <div className={styles.ConstMenuImgTitle1}>ЖК Премиум</div>
                            <div className={styles.ConstMenuImgTitle2}>4 кв. 2022 / 4 кв. 2023 </div>
                        </div>
                        <div className={styles.ConstMenuImgText}>
                            <div>1200 кв.м.</div>
                            <div>26 этажей </div>
                            <div>1, 2, 3 - комнатные квартиры</div>
                        </div>
                    </div>

                    <div className={styles.ConstMenuImg2}>
                        <Image src={ConstMenuImg2} className={styles.MenuImg} width="560" height="350" alt="ConstMenuImg2"/>
                        <div className={styles.ConstMenuImgTitle}>
                            <div className={styles.ConstMenuImgTitle1}>ЖК Ягоды</div>
                            <div className={styles.ConstMenuImgTitle2}>4 кв. 2022 / 4 кв. 2023 </div>
                        </div>
                        <div className={styles.ConstMenuImgText}>
                            <div>1200 кв.м.</div>
                            <div>26 этажей </div>
                            <div>1, 2, 3 - комнатные квартиры</div>
                        </div>
                    </div>
                </section>
                


                <section className={styles.ConstImgMenu2}>
                <div className={styles.ConstMenuImg3}>
                        <Image src={ConstMenuImg3} className={styles.MenuImg} width="560" height="350" alt="ConstMenuImg3"/>
                        <div className={styles.ConstMenuImgTitle}>
                            <div className={styles.ConstMenuImgTitle1}>ЖК Элит</div>
                            <div className={styles.ConstMenuImgTitle2}>4 кв. 2022 / 4 кв. 2023 </div>
                        </div>
                        <div className={styles.ConstMenuImgText}>
                            <div>1200 кв.м.</div>
                            <div>26 этажей </div>
                            <div>1, 2, 3 - комнатные квартиры</div>
                        </div>
                    </div>

                    <div className={styles.ConstMenuImg3}>
                        <Image src={ConstMenuImg4} className={styles.MenuImg} width="560" height="350" alt="ConstMenuImg4"/>
                        <div className={styles.ConstMenuImgTitle}>
                            <div className={styles.ConstMenuImgTitle1}>ЖК Триумф</div>
                            <div className={styles.ConstMenuImgTitle2}>4 кв. 2022 / 4 кв. 2023 </div>
                        </div>
                        <div className={styles.ConstMenuImgText}>
                            <div>1200 кв.м.</div>
                            <div>26 этажей </div>
                            <div>1, 2, 3 - комнатные квартиры</div>
                        </div>
                    </div>
                </section>
        </>
    )
}