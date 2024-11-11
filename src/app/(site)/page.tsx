import Image from "next/image";
import styles from "./page.module.css";
import img1 from "@/assets/images/img1.svg";
import img2 from "@/assets/images/img2.svg";
import picture1_6 from "@/assets/images/picture1_6.svg";
import picture2_6 from "@/assets/images/picture2_6.svg";
import picture3_6 from "@/assets/images/picture3_6.svg";
import picture4_6 from "@/assets/images/picture4_6.svg";
import picture5_6 from "@/assets/images/picture5_6.svg";
import picture6_6 from "@/assets/images/picture6_6.svg";
import logo_red from "@/assets/images/logo_red.svg";
import img3 from "@/assets/images/img3.svg";
import img4 from "@/assets/images/img4.svg";
import img5 from "@/assets/images/img5.svg";
import kzs from "@/assets/images/KZS.svg";
import gazprom from "@/assets/images/GazProm.svg";
import bankprim from "@/assets/images/BankPrim.svg";
import sovkombank from "@/assets/images/SovkomBank.svg";
import vtb from "@/assets/images/VTB.svg";
import domrf from "@/assets/images/DomRF.svg";
import alliance from "@/assets/images/Alliance.svg";
import objectmap from "@/assets/images/ObjectMap.svg";
import Link from "next/link";


export default function Home() {

  return (
    <>
      <section className={styles.page1}>
        <div className={styles.text1}>Группа компаний ПРИМОРСТРОЙ - многопрофильная строительная компания. Но то, кто мы есть, - это гораздо больше, чем то, что мы делаем.
          Благодаря стратегическим и креативным проектным решениям, мы привносим ценность в созданную среду.</div>
        <div className={styles.text2}>Эффективное управление строительством </div>
        <div className={styles.text3}>Связаться с нами</div>
        <div className={styles.img1}>
          <Image src={img1} style={{ objectFit: 'cover', width: '100%' }} alt="Img1" />
        </div>
      </section>
      <section className={styles.page1_1}>
        <div className="container">
          <h2 className={styles.text4}>Акции и спецпредложения</h2>
          <div className={styles.block1}>
            <div className={styles.sectionPromotionBody}>
              <h3 className={styles.sectionPromotionBodyTitle}>Квартиры в готовых домах</h3>
              <span className={styles.sectionPromotionBodyText}>Ипотека от 2,5%</span>
              <a href="/promotions" className={styles.btn}>Подробнее об условиях</a>
            </div>
          </div>
          <Image src={img2} width="865" height="550" alt="Img2" />
        </div>
      </section>
      <section className={styles.page1_3}>
        <div className={styles.text7}>Сферы деятельности</div>
        <div className={styles.text8}>За 50 лет успешной работы Группа компаний Приморстрой зарекомендовала себя как организация, ведущая бизнес в строгом соответствии с
          критериями надежности, современными стандартами качества, ответственности перед обществом, своими клиентами и партнерами. Стратегией предприятия является постоянное
          развитие, повышение конкурентоспособности и эффективности бизнеса.</div>
          <div className={styles.promotionCardMenu}>
          <div className={styles.MenuImg1}>
          <Link href='/construction' className={styles.CardMenuText}>Строительство</Link>
            <Image src={picture1_6} width="370" height="450" alt="picture1_6" />
            </div>

            <div className={styles.MenuImg1}>
            <Link href='/lease' className={styles.CardMenuText}>Аренда</Link>
            <Image src={picture2_6} width="370" height="450" alt="picture2_6" />
            </div>

            <div className={styles.MenuImg1}>
            <Link href='/turism' className={styles.CardMenuText}>Туризм</Link>
            <Image src={picture3_6} width="370" height="450" alt="picture3_6" />
            </div>

            <div className={styles.MenuImg1}>
            <Link href='/special' className={styles.CardMenuText}>Спецтехника</Link>
            <Image src={picture4_6} width="370" height="450" alt="picture4_6" />
            </div>

            <div className={styles.MenuImg1}>
            <Link href='/production' className={styles.CardMenuText}>Производство</Link>
            <Image src={picture5_6} width="370" height="450" alt="picture5_6" />
            </div>

            <div className={styles.MenuImg1}>
            <Link href='/logistics' className={styles.CardMenuText}>Логистика</Link>
            <Image src={picture6_6} width="370" height="450" alt="picture6_6" />
            </div>

        </div>
      </section>
      <section className={styles.sectionInfo}>
        <div className={styles.sectionInfoText1}>53</div>
        <div className={styles.sectionInfoText2}>84,720</div>
        <div className={styles.sectionInfoText3}>17</div>
      </section>
      <section className={styles.sectionInfo2}>
        <div className={styles.sectionInfoText1_1}>года на рынке строительства Приморского края</div>
        <div className={styles.sectionInfoText2_2}>квадратных метров освоенных площадей</div>
        <div className={styles.sectionInfoText3_3}>крупных реализованных проектов жилых комплексов</div>
      </section>
      <section className={styles.sectionTextInfo}>
        <div className={styles.sectionTextImg}>
          <div className={styles.TextItemImg}>
            <Image src={logo_red} width="209" height="61" alt="logo_red" />
            <Image src={logo_red} width="209" height="61" alt="logo_red" />
            <Image src={logo_red} width="209" height="61" alt="logo_red" />
            <Image src={logo_red} width="209" height="61" alt="logo_red" />
            <Image src={logo_red} width="209" height="61" alt="logo_red" />
          </div>
          <div className={styles.sectionText}>
            <div className={styles.sectionTextInfoTitle}>Компании группы</div>
            <div className={styles.sectionTextInfo1}>
              <p>В группу компаний Приморстрой входят организации, выполняющие функции застройщика, генерального подрядчика и технического заказчика.</p>
              <p>Мы работаем в сфере строительства с 1969 года. За это время мы создали обширную материально-техническую базу и накопили большой опыт. Всё вместе это позволяет
                нам успешно реализовывать даже самые сложные и нестандартные проекты.</p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.sectionImg3}>
        <Image src={img3} style={{ height: '100%', width: '100%' }} alt="img3" />
      </section>
      <section className={styles.sectionObjectMenu}>
        <div className={styles.sectionObjectMenuText1}>Строящиеся объекты</div>
        <div className={styles.sectionImg1_3}>
          <Image src={img4} width="600" height="400" alt="img4_1" />
          <div className={styles.sectionImg1_3Text}>
            <p className={styles.sectionImg1_3TextTitle}>Жилой комплекс Ягоды</p>
            <p>г. Уссурийск, ул. Механизаторов, 22А</p>
            <p>Премиальный клубный дом в закрытом квартале в центре города. Это элегантная архитектура, ультрасовременные инженерные решения и клубный малоквартирный формат.</p>
            <div className={styles.sectionImg1_3TextDesc}>
              <p>1200 кв.м.</p>
              <p>26 этажей</p>
              <p>1, 2, 3 - комнатые квартиры</p>
            </div>
            <div className={styles.sectionImg1_3TextDesc1}>4 кв. 2022 / 4 кв. 2023</div>
            <a href="" className={styles.sectionImg1_3Btn}>Подробнее об объекте</a>
          </div>
        </div>
        <div className={styles.sectionImg1_3}>
          <Image src={img4} width="600" height="400" alt="img4_1" />
          <div className={styles.sectionImg1_3Text}>
            <p className={styles.sectionImg1_3TextTitle}>Жилой комплекс Ягоды</p>
            <p>г. Уссурийск, ул. Механизаторов, 22А</p>
            <p>Премиальный клубный дом в закрытом квартале в центре города. Это элегантная архитектура, ультрасовременные инженерные решения и клубный малоквартирный формат.</p>
            <div className={styles.sectionImg1_3TextDesc}>
              <p>1200 кв.м.</p>
              <p>26 этажей</p>
              <p>1, 2, 3 - комнатые квартиры</p>
            </div>
            <div className={styles.sectionImg1_3TextDesc1}>4 кв. 2022 / 4 кв. 2023</div>
            <a href="" className={styles.sectionImg1_3Btn}>Подробнее об объекте</a>
          </div>
        </div>
        <div className={styles.sectionImg1_3}>
          <Image src={img4} width="600" height="400" alt="img4_1" />
          <div className={styles.sectionImg1_3Text}>
            <p className={styles.sectionImg1_3TextTitle}>Жилой комплекс Ягоды</p>
            <p>г. Уссурийск, ул. Механизаторов, 22А</p>
            <p>Премиальный клубный дом в закрытом квартале в центре города. Это элегантная архитектура, ультрасовременные инженерные решения и клубный малоквартирный формат.</p>
            <div className={styles.sectionImg1_3TextDesc}>
              <p>1200 кв.м.</p>
              <p>26 этажей</p>
              <p>1, 2, 3 - комнатые квартиры</p>
            </div>
            <div className={styles.sectionImg1_3TextDesc1}>4 кв. 2022 / 4 кв. 2023</div>
            <a href="" className={styles.sectionImg1_3Btn}>Подробнее об объекте</a>
          </div>
        </div>
        <a href="" className={styles.sectionImg1_3Btn2}>Смотреть все</a>
      </section>
      <section className={styles.Img2_3}>
        <div className={styles.sectionImg2_3Title}>Перспективы строительства</div>
        <div className={styles.sectionImg2_3}>
          <div className={styles.sectionImg2_3Pic}>
            <Image src={img5} width="670" height="500" alt="img5" />
          </div>
          <div className={styles.sectionImg2_3Text}>
            <p className={styles.sectionImg2_3TextTitle}>Жилой комплекс Премиум</p>
            <p>г. Уссурийск, ул. Механизаторов, 22А</p>
            <p className={styles.sectionImg2_3TextDesc}>Премиальный клубный дом в закрытом квартале в центре города. Это элегантная архитектура, ультрасовременные
              инженерные решения и клубный малоквартирный формат.</p>
            <p className={styles.sectionImg2_3Desc}>4 кв. 2022 / 4 кв. 2023 </p>
            <a href="" className={styles.sectionImg2_3Link}>Подробнее о проекте</a>
            {/* <div className={styles.block2}>
          <div className={styles.sectionImg2_3TextDesc1}>4 кв. 2022 / 4 кв. 2023</div>
          </div>  */}
          </div>
          <div className={styles.block2}>
            <div className={styles.sectionImg2_3TextDesc1}>
              <p>1200 кв.м.</p>
              <p>26 этажей </p>
              <p>1, 2, 3 - комнатные квартиры</p>
            </div>
          </div>
        </div>
        <div className={styles.sectionImg2_3}>
          <div className={styles.sectionImg2_3Pic}>
            <Image src={img5} width="670" height="500" alt="img5" />
          </div>
          <div className={styles.sectionImg2_3Text}>
            <p className={styles.sectionImg2_3TextTitle}>Жилой комплекс Премиум</p>
            <p>г. Уссурийск, ул. Механизаторов, 22А</p>
            <p className={styles.sectionImg2_3TextDesc}>Премиальный клубный дом в закрытом квартале в центре города. Это элегантная архитектура, ультрасовременные
              инженерные решения и клубный малоквартирный формат.</p>
            <p className={styles.sectionImg2_3Desc}>4 кв. 2022 / 4 кв. 2023 </p>
            <a href="" className={styles.sectionImg2_3Link}>Подробнее о проекте</a>
            {/* <div className={styles.block2}>
          <div className={styles.sectionImg2_3TextDesc1}>4 кв. 2022 / 4 кв. 2023</div>
          </div>  */}
          </div>
          <div className={styles.block2}>
            <div className={styles.sectionImg2_3TextDesc1}>
              <p>1200 кв.м.</p>
              <p>26 этажей </p>
              <p>1, 2, 3 - комнатные квартиры</p>
            </div>
          </div>
        </div>
        <div className={styles.sectionImg2_3}>
          <div className={styles.sectionImg2_3Pic}>
            <Image src={img5} width="670" height="500" alt="img5" />
          </div>
          <div className={styles.sectionImg2_3Text}>
            <p className={styles.sectionImg2_3TextTitle}>Жилой комплекс Премиум</p>
            <p>г. Уссурийск, ул. Механизаторов, 22А</p>
            <p className={styles.sectionImg2_3TextDesc}>Премиальный клубный дом в закрытом квартале в центре города. Это элегантная архитектура, ультрасовременные
              инженерные решения и клубный малоквартирный формат.</p>
            <p className={styles.sectionImg2_3Desc}>4 кв. 2022 / 4 кв. 2023 </p>
            <a href="" className={styles.sectionImg2_3Link}>Подробнее о проекте</a>
            {/* <div className={styles.block2}>
          <div className={styles.sectionImg2_3TextDesc1}>4 кв. 2022 / 4 кв. 2023</div>
          </div>  */}
          </div>
          <div className={styles.block2}>
            <div className={styles.sectionImg2_3TextDesc1}>
              <p>1200 кв.м.</p>
              <p>26 этажей </p>
              <p>1, 2, 3 - комнатные квартиры</p>
            </div>
          </div>
        </div>
      </section>
      <a href="" className={styles.sectionImg1_3Btn3}>Смотреть все</a>
      <section className={styles.promotionPartners}>
        <div className={styles.promotionPartnersTitle}>Наши партнеры</div>
        <div className={styles.promotionPartnersImg}>
          <Image src={kzs} width="142" height="60" alt="kzs" />
          <Image src={gazprom} width="81" height="60" alt="gazprom" />
          <Image src={bankprim} width="273" height="60" alt="bankprim" />
          <Image src={sovkombank} width="160" height="60" alt="sovkombank" />
          <Image src={vtb} width="160" height="60" alt="vtb" />
          <Image src={domrf} width="53" height="60" alt="domrf" />
          <Image src={alliance} width="88" height="60" alt="alliance" />
        </div>
      </section>
      <section className={styles.promotionAdvantages}>
        <div className={styles.promotionAdvantagesTitle}>Наши преимущества</div>
        <div className={styles.promotionAdvantages1}>
          <div className={styles.promotionAdvantages01}>01</div>
          <div className={styles.promotionAdvantagesText}>
            <p className={styles.promotionAdvantagesText01}>Своя производственная база</p>
            <p>В том числе модульный бетонный завод, участок автотранспорта и механизмов, столярный цех, цех металлоизделий, токарный цех, склады</p>
          </div>
        </div>
        <div className={styles.promotionAdvantages1}>
          <div className={styles.promotionAdvantages01}>02</div>
          <div className={styles.promotionAdvantagesText}>
            <p className={styles.promotionAdvantagesText01}>Многолетний опыт</p>
            <p>У нас большой опыт более 50 лет  в сфере строительства объектов различного назначения, ремонта и реконструкции</p>
          </div>
        </div>
        <div className={styles.promotionAdvantages1}>
          <div className={styles.promotionAdvantages01}>03</div>
          <div className={styles.promotionAdvantagesText}>
            <p className={styles.promotionAdvantagesText01}>Резидент порта Владивосток</p>
            <p>С 2018 года компания входит в реестр резидентов свободного порта Владивосток в соответствии с ФЗ от 13 июля 2015 года №212-ФЗ «О свободном порте Владивосток»</p>
          </div>
        </div>
        <div className={styles.promotionAdvantages1}>
          <div className={styles.promotionAdvantages01}>04</div>
          <div className={styles.promotionAdvantagesText}>
            <p className={styles.promotionAdvantagesText01}>Член СРО Альянс строителей Приморья</p>
            <p>Компании группы являются членами СРО некоммерческого партнерства «Альянс строителей Приморья» с допуском к работе, оказывающей влияние на безопасность объектов капитального строительства</p>
          </div>
        </div>
        <div className={styles.promotionAdvantages1}>
          <div className={styles.promotionAdvantages01}>05</div>
          <div className={styles.promotionAdvantagesText}>
            <p className={styles.promotionAdvantagesText01}>Многопрофильность</p>
            <p>Возможность выступать в роли подрядчика, генерального подрядчика и заказчика</p>
          </div>
        </div>
        <div className={styles.promotionAdvantages1}>
          <div className={styles.promotionAdvantages01}>06</div>
          <div className={styles.promotionAdvantagesText}>
            <p className={styles.promotionAdvantagesText01}>Работа в рамках 44-ФЗ</p>
            <p>Имеем опыт по 44-ФЗ при заключении муниципальных контрактов с доведением их до положительного результата</p>
          </div>
        </div>
        <div className={styles.promotionAdvantages1}>
          <div className={styles.promotionAdvantages01}>07</div>
          <div className={styles.promotionAdvantagesText}>
            <p className={styles.promotionAdvantagesText01}>Финансирования</p>
            <p>Принимаем участия в проектных финансированиях в соответствии ФЗ-214 с открытием счетов-эскроу</p>
          </div>
        </div>
        <div className={styles.promotionAdvantages1}>
          <div className={styles.promotionAdvantages01}>08</div>
          <div className={styles.promotionAdvantagesText}>
            <p className={styles.promotionAdvantagesText01}>Индивидуальный подход</p>
            <p>Ответственность в выполнении каждого уровня задач, внимательность к каждому клиенту</p>
          </div>
        </div>
      </section>
      <section className={styles.sectionObjectMap}>
        <div className={styles.sectionObjectMapText}>
          <div className={styles.ObjectMapTitle}>Карта объектов</div>
          <div className={styles.ObjectMapDesc}>
            <p>На сегодняшний день Приморстрой - это динамично развивающаяся строительная компания, за плечами которой участие в более чем десятке красивых проектов по
              строительству и реконструкции объектов в Приморском крае. </p>
            <p>Мы гордимся своими достижениями и стремимся к дальнейшему развитию.</p>
          </div>
        </div>
        <div className={styles.ObjectMapImg}>
          <Image src={objectmap} width="795" height="900" alt="objectmap" />
        </div>
      </section>
    </>
  );
}

