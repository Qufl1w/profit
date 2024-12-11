import styles from './page.module.css';
import Image from 'next/image';
import JobsImg from '@/assets/images/JobsImg.svg'
import Close from '@/assets/images/Close.svg'
import Documents from '@/assets/images/Documents.svg'
import JobsPopupImg from '@/assets/images/JobsPopupImg.svg'



export default function Page() {

    return (
        <>
        <div id="popup_fixed" className={styles.popup_fixed}></div>
            <section className={styles.JobsHeading}>
                <p className={styles.JobsTitle}>Люди любят работать здесь, просто и ясно</p>
                <Image src={JobsImg} className={styles.JobsImg} width="965" height="400" alt="JobsImg" />
                <div className={styles.JobsBlock}>
                    <div className={styles.BlockTitle}>Почему мы</div>
                    <p className={styles.BlockText}>Легко любить свою работу, когда тебя окружают целеустремленные, увлеченные лидеры.
                        Мы приходим на работу каждый день и выкладываемся по полной не потому, что мы должны, а потому, что мы этого хотим.</p>
                </div>
            </section>

            <div className={styles.JobsTitle}>Вакансии</div>
            <section className={styles.Jobs}>
                <div className={styles.JobsText}>
                    <div className={styles.JobsSectTitle}>Сварщик технологических трубопроводов</div>
                    <p>г. Уссурийск, ул. Механизаторов, д. 22А</p>
                    <p>Опыт работы от 1 года, работа вахтовым методом</p>
                    <p className={styles.JobsTextPrice}>от 140 000 руб./месяц</p>
                </div>
                <div className={styles.JobsBtn}>
                    <p><a href="#popup" className={styles.JobsBtnLink}><button className={styles.JobsBtn1}>Откликнуться</button></a></p>
                    <p><a href="" className={styles.JobsBtn2}>Подробнее</a></p>
                </div>

                <div className={styles.JobsVacanciesTitle}>Обязанности</div>
                <div className={styles.JobsVacancies}>
                    <ul>
                        <li>сварка трубопровода (аргон.титан)</li>
                    </ul>
                </div>
                <div className={styles.JobsVacanciesTitle}>Требования</div>
                <div className={styles.JobsVacancies}>
                    <ul>
                        <li>желателен опыт работы с титанами и другими высокопрочными сплавами</li>
                        <li>желателен опыт работы с титанами и другими высокопрочными сплавами</li>
                        <li>пунктуальность, добросовестное отношение к работе, исполнительность</li>
                        <li>умение исполнять работы в бригаде</li>
                        <li>опыт работы не менее 2 лет</li>
                        <li>удостоверение о квалификации</li>
                    </ul>
                </div>
                <div className={styles.JobsVacanciesTitle}>Условия</div>
                <div className={styles.JobsVacancies}>
                    <ul>
                        <li>работа в городе Уссурийск</li>
                        <li>вахта 60/15</li>
                        <li>оформление по ТК РФ</li>
                        <li>проезд и проживание и питание за счёт работодателя</li>
                    </ul>
                </div>

                <div className={styles.JobsText}>
                    <div className={styles.JobsSectTitle}>Сварщик технологических трубопроводов</div>
                    <p>г. Уссурийск, ул. Механизаторов, д. 22А</p>
                    <p>Опыт работы от 1 года, работа вахтовым методом</p>
                    <p className={styles.JobsTextPrice}>от 140 000 руб./месяц</p>
                </div>
            </section>
            <a href="" className={styles.JobsBtn3}>Смотреть все</a>


            <div id="popup" className={styles.popup}>
               <a href="#popup_fixed" className={styles.popup_area}></a>
                <div className={styles.popup_body}>
                    <div className={styles.popup_content}>
                        <a href="#popup_fixed" className={styles.popup_close}><Image src={Close} className={styles.Close} width="40" height="40" alt="Close"/></a>
                        <div className={styles.popup_title}>Ваш отклик на вакансию</div>
                        <div className={styles.popup_contentItem}>
                            <div className={styles.popup_text}>
                                <p className={styles.popup_textItem}>Заполните форму ниже, чтобы мы могли с Вами связаться </p>
                                <form action="">
                                    <input type="text" className={styles.popup_form} placeholder="    ФИО"></input>
                                    <input type="text" className={styles.popup_form} placeholder="    Телефон"></input>
                                    <div className={styles.Resume}>
                                    <Image src={Documents} className={styles.Documents} width="30" height="30" alt="Documents" />
                                    <p>Прикрепить резюме</p>
                                    </div>
                                    <input type="submit" className={styles.popup_submit} value="Откликнуться"></input>
                                </form>
                                <div className={styles.popup_textEnd}>Нажимая “Откликнуться”, Вы даете свое согласие на <a href='' className={styles.href} >обработку персональных данных</a></div>
                            </div>
                            <Image src={JobsPopupImg} className={styles.JobsPopupImg} width="420" height="500" alt="JobsPopupImg" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


