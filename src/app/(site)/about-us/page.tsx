import styles from './page.module.css';
import Image from 'next/image';
import AboutUsImg1 from "@/assets/images/AboutUsImg1.svg";
import AboutCompanyimg from '@/assets/images/AboutCompanyimg.svg'
import AboutUsTile from '@/assets/images/AboutUsTile.svg'
import AboutUsMan from '@/assets/images/AboutUsMan.svg'
import AboutUsPainting from '@/assets/images/AboutUspainting.svg'
import AboutUsComGroupImg from '@/assets/images/AboutUsComGroupImg.svg'
import logo_red from '@/assets/images/logo_red.svg'

export default function Page() {

  return (
    <>
      <div className={styles.AboutUsText1}>Приморстрой ставит интересы людей на первое место</div>
      <div className={styles.AboutUsImg1}>
        <Image src={AboutUsImg1} className={styles.AboutUsImg1} width="960" height="400" alt="AboutUsImg1" /></div>
      <div className={styles.AboutUsBlock1}>
        <div className={styles.AboutUsHeading}>О нас</div>
        <div className={styles.AboutUsDescription}>Мы предлагаем высокий уровень вовлеченности, активное общение
          и инновационный подход к решению проблем, ориентированный на построение долгосрочных партнерских отношений с клиентами.</div>
      </div>
      <div className={styles.AboutUsBlock2}>
        <div className={styles.AboutUsBlock2Text1}>Мы рассматриваем каждый проект через призму клиентоориентированности и ориентированности на будущее. Такой подход заставляет нас пересмотреть то, как мы видим,
          думаем и работаем, чтобы воплотить ваш проект и задумку в жизнь. Мы здесь для того, чтобы быть вашими партнерами.</div>
        <div className={styles.AboutUsBlock2Text2}>
          <p>Работая с клиентами, мы учитываем финансовые возможности каждого человека. Поэтому в Приморстрой присутствует гибкая система рассрочки платежей. </p>
          <p>Каждая сделка имеет обязательное сопровождение специалиста Приморстрой на всех стадиях оформления квартиры. При предоставлении рассрочки платежей итоговая стоимость квартиры остается
            без изменений и стоимость квадратного метра не увеличивается.</p>
          <p>Если Вас интересует сотрудничество или инвестиции, свяжитесь с нами наиболее удобным способом.</p>
          <div className={styles.AboutUsBtn}>
            <a href="#" className={styles.AboutUsBtn1}>Узнать контакты</a>
          </div>
        </div>
      </div>

      <div className={styles.AboutCompanyTitle}>О компании</div>
      <div className={styles.AboutCompany}>
        <div className={styles.AboutCompanyText}>
          <p>ООО Специализированный застройщик «Приморстрой» образовано 15 января
            1969 года, основной вид деятельности - строительство. Предприятие выполняет функции заказчика, генподрядчика.</p>

          <p>С января 2010 г. ООО Специализированный застройщик «Приморстрой» является членом СРО некоммерческого партнерства
            «Альянс строителей Приморья», зарегистрированного 22.12.2009 г. Ростехнадзором, в состав которого входит 140 строительных организаций по Приморскому краю. </p>

          <p>Получено свидетельство о допуске к работе, которые оказывают влияние на безопасность
            объектов капитального строительства, в строгом соответствии которого ведется строительство объектов.</p>
        </div>
        <div className={styles.AboutCompanyImg}>
          <Image src={AboutCompanyimg} className={styles.AboutCompanyimg} width="600" height="400" alt="AboutCompanyimg" /></div>
      </div>
      <section className={styles.AboutUsTile}>
        <div className={styles.AboutUsTileImg}>
          <Image src={AboutUsTile} className={styles.AboutUsTileImg} height="800" alt="AboutUsTile" />

          <div className={styles.AboutUsBlocks}>
            
            <div className={styles.BlocksGroup1}>
              <div className={styles.AboutUsTileBlock1}>
                <div className={styles.AboutUsBlock1TitleText}>
                  <div className={styles.AboutUsBlock1Title}>c</div>
                  <div className={styles.AboutUsBlock1Title1}>1969</div>
                </div>
                <p className={styles.AboutUsBlock1Text}>года на рынке строительства</p>
              </div>

              <div className={styles.AboutUsTileBlock2}>
                <div className={styles.AboutUsBlock2Title}>5</div>
                <p className={styles.AboutUsBlock2Text}>организаций входит в группу компаний</p>
              </div>

              <div className={styles.AboutUsTileBlock3}>
                <div className={styles.AboutUsBlock3Title}>6</div>
                <p className={styles.AboutUsBlock3Text}>направлений деятельности</p>
              </div>

              <div className={styles.AboutUsTileBlock4}>
                <div className={styles.AboutUsBlock4Title}>более</div>
                <div className={styles.AboutUsBlock4Title1}>53</div>
                <p className={styles.AboutUsBlock4Text}>домов построено в Приморском крае</p>
              </div>
            </div>

            <div className={styles.BlocksGroup2}>
              <div className={styles.AboutUsTileBlock5}>
                <div className={styles.AboutUsBlock5Title}>870</div>
                <p className={styles.AboutUsBlock5Text}>специалистов и рабочих на объектах</p>
              </div>

              <div className={styles.AboutUsTileBlock6}>
                <div className={styles.AboutUsBlock6Title}>6150</div>
                <p className={styles.AboutUsBlock6Text}>квартир реализовано</p>
              </div>

              <div className={styles.AboutUsTileBlock7}>
                <div className={styles.AboutUsBlock7Title}>более</div>
                <div className={styles.AboutUsBlock7Title1}>8000</div>
                <p className={styles.AboutUsBlock7Text}>счастливых новоселов</p>
              </div>

              <div className={styles.AboutUsTileBlock8}>
                <div className={styles.AboutUsBlock8Title}>85</div>
                <div className={styles.AboutUsBlock8Title1}>тыс. кв. м.</div>
                <p className={styles.AboutUsBlock8Text}>реализованные проекты</p>
              </div>
            </div>
          </div>
          </div>
      </section>
      <section className={styles.AboutUsManSection}>
        <div className={styles.AboutUsman}>
          <Image src={AboutUsMan} className={styles.AboutUsMan} height="450" alt="AboutUsMan" />

          <div className={styles.AboutUsText}>
            <p>Благодарю Вас за интерес к компании Приморстрой.</p>

            <p>Мы занимаемся строительством проектов самых разных уровней сложности. С момента основания
              организации, мы регулярно прилагаем большие усилия для того, чтобы развиваться и оказывать нашим клиентам максимально качественные услуги.</p>

            <p>Мы глубоко убеждены в том, что каждая строительная компания может и должна развиваться профессионально. Мы регулярно повышаем квалификацию наших сотрудников, совершенствуя навыки и мастерство.
              Именно это дает нам возможность идти в ногу со временем, используя новейшие и последние достижения в строительной области.</p>

            <p>Приморстрой стремится предложить своим клиентам множество преимуществ,
              включая индивидуальный подход к каждому проекту, точное соблюдение сроков, а также всевозможные бонусные программы.</p>

            <p>Я благодарен всем нашим клиентам за оказанное доверие и продуктивное сотрудничество.
              Без вас развитие и рост нашего коллектива был бы невозможен. И именно вы внесли большой вклад в эволюцию компании Приморстрой.</p>
              <div className={styles.stripe}></div>
            <Image src={AboutUsPainting} className={styles.AboutUsPainImg} width="190" height="120" alt="AboutUsMan" />
            <div className={styles.AboutUsPainTitle}>Бай Личэн</div>
            <p className={styles.AboutUsPainText}>Основатель и генеральный директор компании Приморстрой</p>
          </div>
        </div>
      </section>

      <section className={styles.AboutUsComGroup}>
        <div className={styles.AboutUsComGroupTitle}>Компании группы</div>
               <div className={styles.AboutUsCom}>
        <Image src={AboutUsComGroupImg} className={styles.AboutUsComGroupImg} width="500" height="500" alt="AboutUsComGroup" />
        <div className={styles.AboutUsComGroupText}>
          <p>Мы работаем в сфере строительства с 1969 года. За это время мы создали обширную материально-техническую
            базу и накопили большой опыт. Всё вместе это позволяет нам успешно реализовывать даже самые сложные и нестандартные проекты.</p>
          <p>В группу компаний Приморстрой входят организации, выполняющие функции застройщика, генерального подрядчика и технического заказчика, среди них:</p>
          <li><b>ООО СЗ Приморстрой</b> (застройщик, генеральный подрядчик и технический заказчик)</li>
          <li><b>ООО Приморстрой Сервис </b>(генеральный подрядчик)</li>
          <li><b>ООО СЗ Эмеральд </b> (застройщик)</li>
          <li><b>ООО СЗ Корал Рэд </b>(застройщик)</li>
          <li><b>ООО СЗ Кунгасстрой </b>(застройщик)</li>
        </div>
        </div>
      </section>
      <div className={styles.AboutUsComGroupimg}>
        <Image src={logo_red} className={styles.logo_red} width="210" height="65" alt="logo_red" />
        <Image src={logo_red} className={styles.logo_red} width="210" height="65" alt="logo_red" />
        <Image src={logo_red} className={styles.logo_red} width="210" height="65" alt="logo_red" />
        <Image src={logo_red} className={styles.logo_red} width="210" height="65" alt="logo_red" />
        <Image src={logo_red} className={styles.logo_red} width="210" height="65" alt="logo_red" />
      </div>
    </>
  )
}