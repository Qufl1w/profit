import styles from './page.module.css';
import Image from 'next/image';
import ProfTitleImg from '@/assets/images/ProdTitleImg.svg'
import ProdSliderImg1 from '@/assets/images/ProdSliderImg1.svg'
import ProdSliderBtn from '@/assets/images/ProdSliderBtn.svg'
import ProdCard1 from '@/assets/images/ProdCard1.svg'
import ProdCard2 from '@/assets/images/ProdCard2.svg'
import ProdCard3 from '@/assets/images/ProdCard3.svg'
import ProdCard4 from '@/assets/images/ProdCard4.svg'
import ProdCard5 from '@/assets/images/ProdCard5.svg'
import ProdCard6 from '@/assets/images/ProdCard6.svg'





export default function Page() {

    return (
        <>
            <p className={styles.ProdTitle}>Производство строительных материалов</p>
            <Image src={ProfTitleImg} className={styles.ProfTitleImg} width='960' height='400' alt='ProfTitleImg' />
            <div className={styles.Block}>
                <div className={styles.BlockText}>
                    <p>Помимо строительства, компания Приморстрой реализует бетон и раствор различных марок и предлагает услуги по доставке произведенной продукции.</p>
                    <p>Качество продукции подтверждено результатами лабораторных испытаний.</p>
                    <p>Также мы оказываем услуги по перевозке сыпучих материалов грузовым транспортом.</p>
                </div>
            </div>

            <section className={styles.ProdSlider}>
                <div className={styles.ProdSliderList}>
                    <Image src={ProdSliderBtn} className={styles.ProdSliderBtn1} width='40' height='40' alt='ProdSliderBtn' />
                    <button className={styles.ProdSliderBtn1}>Previous</button>
                    <Image src={ProdSliderBtn} className={styles.ProdSliderBtn2} width='40' height='40' alt='ProdSliderBtn' />
                    <button className={styles.ProdSliderBtn2}>Next</button>
                    <div className={styles.ProdSliderImg}>
                        <div className={styles.SliderImg}>
                            <Image src={ProdSliderImg1} className={styles.LogisticsImg} width='1000' height='600' alt='ProdSliderImg1' />
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.ProdCatalog}>
                <p className={styles.ProdCatalogTitle}>Каталог продукции</p>
                <div className={styles.ProdCatalogItem}>

                    <div className={styles.ProdCatalogCard}>
                        <Image src={ProdCard1} className={styles.ProdCard} width='460' height='275' alt='ProdCard' />
                        <div className={styles.ProdCardTitle}>Бетон</div>
                        <p>от 5 300 руб./куб</p>
                    </div>

                    <div className={styles.ProdCatalogCard}>
                        <Image src={ProdCard2} className={styles.ProdCard} width='460' height='275' alt='ProdCard' />
                        <div className={styles.ProdCardTitle}>Пенобетон</div>
                        <p>от 5 700 руб./куб</p>
                    </div>

                    <div className={styles.ProdCatalogCard}>
                        <Image src={ProdCard3} className={styles.ProdCard} width='460' height='275' alt='ProdCard' />
                        <div className={styles.ProdCardTitle}>Газобетон</div>
                        <p>от 5 800 руб./куб</p>
                    </div>

                    
                    <div className={styles.ProdCatalogCard}>
                        <Image src={ProdCard4} className={styles.ProdCard} width='460' height='275' alt='ProdCard' />
                        <div className={styles.ProdCardTitle}>Пескоблоки</div>
                        <p>от 6 300 руб./куб</p>
                    </div>

                    
                    <div className={styles.ProdCatalogCard}>
                        <Image src={ProdCard5} className={styles.ProdCard} width='460' height='275' alt='ProdCard' />
                        <div className={styles.ProdCardTitle}>Керамзитобетон</div>
                        <p>от 7 700 руб./куб</p>
                    </div>

                    
                    <div className={styles.ProdCatalogCard}>
                        <Image src={ProdCard6} className={styles.ProdCard} width='460' height='275' alt='ProdCard' />
                        <div className={styles.ProdCardTitle}>Строительный раствор</div>
                        <p>от 4 800 руб./куб</p>
                    </div>
                </div>
            </section>

            <section className={styles.ProdPrice}>
                <div className={styles.ProdPriceTitle}>Прайс-лист</div>
                <div className={styles.ProdPriceTitleText}>От 25.08.2022 года, цена указана с НДС, без учета доставки</div>
                <div className={styles.ProdPriceItemList}>
                    <div className={styles.ProdPriceItem}>
                        <div className={styles.ProdPriceItemTitle}>Бетон</div>
                        <div className={styles.ProdPriceItemText}>Цена</div>
                    </div>

                    <div className={styles.ProdPriceItem}>
                        <div className={styles.ProdPriceItemTitle}>Пенобетон</div>
                        <div className={styles.ProdPriceItemText}>Цена</div>
                    </div>

                    <div className={styles.ProdPriceItem}>
                        <div className={styles.ProdPriceItemTitle}>Газобетон</div>
                        <div className={styles.ProdPriceItemText}>Цена</div>
                    </div>

                    <div className={styles.ProdPriceItem}>
                        <div className={styles.ProdPriceItemTitle}>Пескоблоки</div>
                        <div className={styles.ProdPriceItemText}>Цена</div>
                    </div>

                    <div className={styles.ProdPriceItem}>
                        <div className={styles.ProdPriceItemTitle}>Керамзитобетон</div>
                        <div className={styles.ProdPriceItemText}>Цена</div>
                    </div>

                    <div className={styles.ProdPriceItem}>
                        <div className={styles.ProdPriceItemTitle}>строительный раствор</div>
                        <div className={styles.ProdPriceItemText}>Цена</div>
                    </div>
                </div>  
            </section>
        </>
    )
}