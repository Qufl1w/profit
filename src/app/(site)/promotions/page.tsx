import styles from './page.module.css';
import Image from 'next/image';
import PromotionImg1 from '@/assets/images/PromotionImg1.svg'
import PromotionImg2 from '@/assets/images/PromotionImg2.svg'
import PromotionImg3 from '@/assets/images/PromotionImg3.svg'
import PromotionImg4 from '@/assets/images/PromotionImg4.svg'
import PromotionImg5 from '@/assets/images/PromotionImg5.svg'





export default function Page() {

    return (
        <>
            <section className={styles.PromotionImages}>
                <p className={styles.Title}>Акции и спецпредложения</p>

                <div className={styles.Menu}>
                    <div className={styles.MenuItem1}>

                        <div className={styles.MenuImg}>
                        <div className={styles.Img1BlockTitle}>до 15.10.2022</div>
                            <div className={styles.Img1BlockDesc}>
                                <div className={styles.ImgBlockText}>Квартиры в готовых домах</div>
                                <p>в ЖК Ягоды</p>
                            </div>
                            <Image src={PromotionImg1} width='580' height='500' alt='PromotionImg' />
                        </div>

                        <div className={styles.MenuItem2}>

                        <div className={styles.MenuImg}>
                        <div className={styles.Img2BlockTitle}>до 15.10.2022</div>
                            <div className={styles.Img2BlockDesc}>
                                <div className={styles.ImgBlockText}>Рассрочка 0%</div>
                                <p>в ЖК Премиум</p>
                            </div>
                            <Image src={PromotionImg2} width='580' height='230' alt='PromotionImg' />
                        </div>

                        <div className={styles.MenuImg}>
                        <div className={styles.Img2BlockTitle}>до 15.10.2022</div>
                            <div className={styles.Img2BlockDesc}>
                                <div className={styles.ImgBlockText}>Ипотека от 2%</div>
                                <p>в ЖК Триумф</p>
                            </div>
                            <Image src={PromotionImg3} width='580' height='230' alt='PromotionImg' />
                        </div>
                        </div>
                    </div>
                    <div className={styles.MenuItem3}>
                    <div className={styles.MenuImg}>
                        <div className={styles.Img3BlockTitle}>до 15.10.2022</div>
                            <div className={styles.Img3BlockDesc}>
                                <div className={styles.ImgBlockText}>Ипотека от 3%</div>
                                <p>в ЖК Ягоды</p>
                            </div>
                            <Image src={PromotionImg4} width='580' height='300' alt='PromotionImg' />
                        </div>

                        <div className={styles.MenuImg}>
                        <div className={styles.Img3BlockTitle}>до 15.10.2022</div>
                            <div className={styles.Img3BlockDesc}>
                                <div className={styles.ImgBlockText}>Ипотека от 3%</div>
                                <p>в ЖК Ягоды</p>
                            </div>
                            <Image src={PromotionImg5} width='580' height='300' alt='PromotionImg' />
                        </div>
                        
                        </div>
                </div>
                
            </section>
        </>
    )
}