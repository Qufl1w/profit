import styles from './page.module.css';
import Image from 'next/image';
import LeaseImg1 from '@/assets/images/LeaseImg1.svg'
import LeaseImg2 from '@/assets/images/LeaseImg2.svg'
import Link from 'next/link';




export default function Page() {

  return (
    <>
      <section className={styles.Lease}>
        <div className={styles.LeaseTitle}>Аренда</div>
        <div className={styles.LeaseFilter}>
          <p className={styles.LeaseStatus}>Статус: <span className={styles.spncolor}>Свободно</span></p>
          <p className={styles.LeaseArea}>Площадь: <span className={styles.spncolor}>от 100 до 200 кв.м.</span></p>
          <p className={styles.LeaseCity}>Город: <span className={styles.spncolor}>Уссурийск</span></p>
          <p className={styles.LeaseDistrict}>Район: <span className={styles.spncolor}>Центральный</span></p>
          <div className={styles.LeaseConfirmText}>
            <p className={styles.LeaseConfirm}>Применить</p>
          </div>
        </div>
      </section>

      <section className={styles.LeaseImg}>
        <div className={styles.LeaseImg1Sect}>
        <Link href="/objectPage(lease)"><Image src={LeaseImg1} width="560" height="350" alt="LeaseImg1" /></Link>
          <div className={styles.LeaseImg1Text1}>
           <div className={styles.LeaseImg1Title1}>Офис в БЦ Триумф</div>
            <div className={styles.LeaseImg1Circle}></div>
            <span className={styles.LeaseImg1Title2}>Свободно</span>           
            </div>
            <div className={styles.LeaseImg1Text2}>
              <p>Уссурийск, Центральный район</p>
              <p>200 кв.м.</p>
            </div> 
            
            <Link href="/objectPage(lease)" className={styles.LeaseImgBtnHref}><div className={styles.LeaseImgBtn}>Забронировать</div></Link>
        </div>



        <div className={styles.LeaseImg1Sect}>
          <Image src={LeaseImg2} width="560" height="350" alt="LeaseImg2" />
          <div className={styles.LeaseImg1Text1}>
           <div className={styles.LeaseImg2Title1}>Торговое помещение</div>
            <div className={styles.LeaseImg2Circle}></div>
            <span className={styles.LeaseImg1Title2}>Свободно</span>
            </div>
            <div className={styles.LeaseImg1Text2}>
              <p>Уссурийск, Центральный район</p>
              <p>200 кв.м.</p>
            </div> 
            <div className={styles.LeaseImgBtn}>Забронировать</div>
        </div>
      </section>


      <section className={styles.LeaseImg}>
      <div className={styles.LeaseImg1Sect}>
          <Image src={LeaseImg1} className={styles.LeaseImg3} width="560" height="350" alt="LeaseImg1" />
          <div className={styles.LeaseImg1Text1}>
           <div className={styles.LeaseImg3Title1}>Офис в БЦ Триумф</div>
            <div className={styles.LeaseImg3Circle}></div>
            <span className={styles.LeaseImg1Title2}>Занято</span>           
            </div>
            <div className={styles.LeaseImg1Text2}>
              <p>Уссурийск, Центральный район</p>
              <p>200 кв.м.</p>
            </div> 
            <div className={styles.LeaseImgBtn3}>Забронировать</div>
        </div>

        <div className={styles.LeaseImg1Sect}>
          <Image src={LeaseImg1} className={styles.LeaseImg3} width="560" height="350" alt="LeaseImg1" />
          <div className={styles.LeaseImg1Text1}>
           <div className={styles.LeaseImg4Title1}>Торговое помещение</div>
            <div className={styles.LeaseImg3Circle}></div>
            <span className={styles.LeaseImg1Title2}>Занято</span>           
            </div>
            <div className={styles.LeaseImg1Text2}>
              <p>Уссурийск, Центральный район</p>
              <p>200 кв.м.</p>
            </div> 
            <div className={styles.LeaseImgBtn3}>Забронировать</div>
        </div>
      </section>
    </>
  )
}