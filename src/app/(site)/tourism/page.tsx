import styles from './page.module.css';
import Image from 'next/image';
import TourismImg from '@/assets/images/TourismImg.svg'
import TourismRublino from '@/assets/images/TourismRublino.svg'
import Link from 'next/link';


export default function Page() {

    return (
      <>    
      <div className={styles.TourismTitle}>Туризм</div>
      <div className={styles.TourismSection}>
      <Link href="/objectPage(tourism)"> <Image src={TourismImg} width="600" height="400" alt="TourismImg"/></Link>
      <div className={styles.TourismImgText}>
      <p className={styles.TourismImgTitle}>База отдыха Рублино</p>
      <p>г. Владивосток, ул. Адмирала Угрюмова, 48/49</p>
      <p className={styles.TourismImgDesc}>На территории базы отдыха есть семь экологичных домов из круглого бурса. 
        Каждый дом максимально благоустроен для проживания. Также на территории базы есть гостиница с комфортными номерами разных категорий.</p>
        <p><a href="" className={styles.TourismLink}>рублино.рф</a></p>
        <div className={styles.TourismLinkMore}>
        <Link href="/objectPage(tourism)" className={styles.TourismLinkMore}>Подробнее</Link>
        <Image src={TourismRublino} className={styles.TourismRublinoImg} width="68" height="68" alt="TourismRublino"/>
        </div>
      </div>
      </div>

      <div className={styles.TourismSection}>
      <Link href="/objectPage(tourism)"> <Image src={TourismImg} width="600" height="400" alt="TourismImg"/></Link>
      <div className={styles.TourismImgText}>
      <p className={styles.TourismImgTitle}>База отдыха Рублино</p>
      <p>г. Владивосток, ул. Адмирала Угрюмова, 48/49</p>
      <p className={styles.TourismImgDesc}>На территории базы отдыха есть семь экологичных домов из круглого бурса. 
        Каждый дом максимально благоустроен для проживания. Также на территории базы есть гостиница с комфортными номерами разных категорий.</p>
        <p><a href="/objectPage(tourism)" className={styles.TourismLink}>рублино.рф</a></p>
        <div className={styles.TourismLinkMore}>
        <Link href="" className={styles.TourismLinkMore}>Подробнее</Link>
        <Image src={TourismRublino} className={styles.TourismRublinoImg} width="68" height="68" alt="TourismRublino"/>
        </div>
      </div>
      </div>

      <div className={styles.TourismSection}>
      <Link href="/objectPage(tourism)"> <Image src={TourismImg} width="600" height="400" alt="TourismImg"/></Link>
      <div className={styles.TourismImgText}>
      <p className={styles.TourismImgTitle}>База отдыха Рублино</p>
      <p>г. Владивосток, ул. Адмирала Угрюмова, 48/49</p>
      <p className={styles.TourismImgDesc}>На территории базы отдыха есть семь экологичных домов из круглого бурса. 
        Каждый дом максимально благоустроен для проживания. Также на территории базы есть гостиница с комфортными номерами разных категорий.</p>
        <p><a href="" className={styles.TourismLink}>рублино.рф</a></p>
        <div className={styles.TourismLinkMore}>
        <Link href="/objectPage(tourism)" className={styles.TourismLinkMore}>Подробнее</Link>
        <Image src={TourismRublino} className={styles.TourismRublinoImg} width="68" height="68" alt="TourismRublino"/>
        </div>
      </div>
      </div>

      <div className={styles.TourismSection}>
      <Link href="/objectPage(tourism)"> <Image src={TourismImg} width="600" height="400" alt="TourismImg"/></Link>
      <div className={styles.TourismImgText}>
      <p className={styles.TourismImgTitle}>База отдыха Рублино</p>
      <p>г. Владивосток, ул. Адмирала Угрюмова, 48/49</p>
      <p className={styles.TourismImgDesc}>На территории базы отдыха есть семь экологичных домов из круглого бурса. 
        Каждый дом максимально благоустроен для проживания. Также на территории базы есть гостиница с комфортными номерами разных категорий.</p>
        <p><a href="" className={styles.TourismLink}>рублино.рф</a></p>
        <div className={styles.TourismLinkMore}>
        <Link href="/objectPage(tourism)" className={styles.TourismLinkMore}>Подробнее</Link>
        <Image src={TourismRublino} className={styles.TourismRublinoImg} width="68" height="68" alt="TourismRublino"/>
        </div>
      </div>
      </div>
      </>
    )
  }