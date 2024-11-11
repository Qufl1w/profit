import styles from './page.module.css';
import Image from 'next/image';
import ObjectPageImg from '@/assets/images/ObjectPageImg.svg'
import ObjectLsitImg from '@/assets/images/ObjectListImg.svg'
import ObjectLsitImg1 from '@/assets/images/ObjectListImg1.svg'
import ObjectLsitImg2 from '@/assets/images/ObjectListImg2.svg'
import ObjectLsitImg3 from '@/assets/images/ObjectListImg3.svg'
import ObjectLsitImg4 from '@/assets/images/ObjectListImg4.svg'
import AboutComplexImg from '@/assets/images/AboutComplexImg.svg'
import Building from '@/assets/images/Building.svg'
import HousePlan from '@/assets/images/HousePlan.svg'
import Stairs from '@/assets/images/Stairs.svg'
import DevImg from '@/assets/images/DevImg.svg'
import DevLogo from '@/assets/images/DevLogo.svg'
import Documents from '@/assets/images/Documents.svg'
import MortImg from '@/assets/images/MortImg.svg'





export default function Page() {

    return (
        <>
            <div className={styles.ObjectPageImg}>
                <Image src={ObjectPageImg} className={styles.objectPageImg} alt="ObjectPageImg" />
                <div className={styles.ImgText}>
                    <div className={styles.ImgTitle}>ЖК Премиум</div>
                    <p>Жилой комплекс бизнес-класса в самом центре города</p>
                </div>
            </div>

            <section className={styles.ComplexItem}>
                <div className={styles.ImgList}>
                    <Image src={ObjectLsitImg} width="600" height="500" alt="ConstMenuObjectLsitImg" />
                    <div className={styles.ImgListRight}>
                        <Image src={ObjectLsitImg1} width="250" height="230" alt="ConstMenuObjectLsitImg" />
                        <Image src={ObjectLsitImg2} width="250" height="230" alt="ConstMenuObjectLsitImg" />
                        <Image src={ObjectLsitImg3} width="250" height="230" alt="ConstMenuObjectLsitImg" />
                        <Image src={ObjectLsitImg4} width="250" height="230" alt="ConstMenuObjectLsitImg" />
                    </div>
                </div>

                <div className={styles.ImgListTitle}>О комплексе</div>
                <div className={styles.AboutComplex}>
                    <Image src={AboutComplexImg} className={styles.AboutComplexImg} width="540" height="400" alt="ConstMenuObjectLsitImg" />
                    <div className={styles.AboutComplexText}>
                        <div className={styles.AboutComplexTitle}>
                            <div className={styles.AboutComplexDesc}>
                                <Image src={Building} className={styles.AboutComplexImg} width="20" height="20" alt="Building" />
                                <p>1200 кв.м.</p>
                            </div>
                            <div className={styles.AboutComplexDesc}>
                                <Image src={Stairs} className={styles.AboutComplexImg} width="20" height="20" alt="Stairs" />
                                <p>26 этажей</p>
                            </div>
                            <div className={styles.AboutComplexDesc}>
                                <Image src={HousePlan} className={styles.HousePlan} width="20" height="20" alt="Stairs" />
                                <p>1, 2, 3 - комнатные квартиры</p>
                            </div>
                        </div>
                        <p>Дома в ЖК Премиум образуют кварталы, внутри которых — уютные дворы-парки, детские и спортивные площадки, места для спокойного отдыха. А снаружи находится пешеходный бульвар.
                            Мы заранее продумали, где жителям будет удобно гулять, отдыхать, играть, заниматься спортом и болтать с соседями.</p>

                        <p>Дома расположены так, чтобы в каждую квартиру попадало как можно больше солнечного света.
                            Во дворах-парках будет много зелени, появятся скамейки, столы и детские площадки, а машин не будет: для них мы построим удобный подземный паркинг. </p>

                        <p>Через весь жилой квартал протянется пешеходный бульвар с велодорожками. В нескольких минутах ходьбы откроются школы и детские сады</p>
                    </div>
                </div>
            </section>

            <section className={styles.Developer}>
                <div className={styles.Title}>Надежный застройщик</div>
                <div className={styles.DevSection}>

                    <div className={styles.DevSectionItem}>
                        <p>Компания ООО Специализированный застройщик «Эмеральд», ведёт бизнес в
                            строгом соответствии с критериями надежности, современными стандартами качества, ответственности перед обществом, своими клиентами и партнерами.</p>
                        <div className={styles.DevLink}>
                            <Image src={DevLogo} className={styles.DevImg} width="190" height="60" alt="DevLogo" />
                            <a href="" className={styles.DevSiteLink}>Перейти на сайт</a>
                        </div>
                        <div className={styles.DevFiles}>
                            <div className={styles.DevFilesItem}>
                                <Image src={Documents} className={styles.DocImg} width="30" height="30" alt="DocImg" />
                                <p>Проектная документация</p>
                            </div>

                            <div className={styles.DevFilesItem}>
                                <Image src={Documents} className={styles.DocImg} width="30" height="30" alt="DocImg" />
                                <p>Отчетная документация</p>
                            </div>

                            <div className={styles.DevFilesItem}>
                                <Image src={Documents} className={styles.DocImg} width="30" height="30" alt="DocImg" />
                                <p>Проекты ДДУ</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.DevImg}>
                        <Image src={DevImg} className={styles.DevImg} width="550" height="500" alt="DevImg" />
                    </div>
                </div>
            </section>

            <section className={styles.Mortgage}>
                <div className={styles.MortSection}>
                    <div className={styles.DomRF}>
                    <Image src={MortImg} className={styles.MortImg} width="300" height="270" alt="MortImg" />
                    <a href="" className={styles.MortLink}>На сайт банка</a>
                    </div>


                <div className={styles.MortItem}>
                <div className={styles.MortTitle}>Выгодная ипотека</div>
                    <p className={styles.MortItemText}>Специализированный застройщик Эмеральд заключил с банком соглашение по субсидированной программе. 
                    А это значит,что клиенту предоставляется скидка на процентную ставку в размере 3%. Скидки применяются и по базовым программам, и по ипотеке с господдержкой.</p>
                    <p className={styles.MortItemText}>Что вы получаете:</p>
                    <ul>
                    <li>один из самых основных плюсов, это уменьшение ежемесячного платежа по ипотеке</li>
                    <li>меньше процентов начисляется по кредиту</li>
                    <li>очень выгодно, если не планируете досрочное погашение ипотеки, значительно уменьшается сумма переплаты по кредиту</li>
                    <li>возможность купить квартиру раньше, чем планировалось.</li>
                    </ul>
                    <p className={styles.MortItemText}>Подробности акции можно уточнить у наших менеджеров или сотрудников банка Дом.рф.</p>
                </div>
                </div>
            </section>
        </>
    )
}