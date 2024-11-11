import styles from './page.module.css';
import Image from 'next/image';
import LogisticsImg from '@/assets/images/LogisticsImg.svg'
import LogisticsTransportImg from '@/assets/images/LogisticsTransportImg.svg'

export default function Page() {

    return (
        <>
            <p className={styles.LogisticsTitle}>Логистика стройматериалов</p>
            <Image src={LogisticsImg} className={styles.LogisticsImg} width='965' height='400' alt='LogisticsImg' />
            <div className={styles.LogisticsBlock}>
                <div className={styles.LogisticsBlockText}>
                    <p>Логистика позволяет свести к минимуму запасы стройматериалов,
                        сократить сроки доставки продукции, ускорить процесс получения требуемой информации, а также повысить уровень сервиса. </p>
                    <p>Одно из ключевых направлений нашей деятельности  – своевременная и безрисковая
                        организация перевозок строительных грузов, доставка с минимальными затратами на объект заказчика материалов, конструкций, спецтехники, оборудования. </p>
                </div>
            </div>
            <div className={styles.LogisticsTitle}>Используемый транспорт</div>
            <section className={styles.LogisticsTransport}>
                <div className={styles.LogisticsTransportText}>
                    <p>При доставке стройматериалов применяются различные виды транспортных средств.Их можно разделить на несколько категорий:</p>
                    <ul>
                        <li>Вертикальные ТС. Служат для погрузочных работ на производствах по изготовлению строительных конструкций. Также принимают участие в разгрузке при поступлении на строительный объект различных материалов и изделий.
                            Необходимы при перемещении строительных грузов по вертикали с поверхности земли на точки, где выполняются работы</li>

                        <li>Горизонтальные. Такие транспортные средства применяются при перевозке продукции с мест получения до строительных площадок,
                            если речь идёт о строительстве целого комплекса. В отношении стройплощадки такие ТС делятся на объектные и внешние</li>

                        <li>Внешние. С их помощью оборудование, материалы и конструкции поступают от заводов-изготовителей на строительные площадки</li>

                        <li> Объектные. Эти транспортные средства применяются в пределах стройплощадки для внутреннего перемещения имеющихся грузов</li>
                    </ul>
                </div>
                <Image src={LogisticsTransportImg} className={styles.LogisticsTransportImg} width='550' height='450' alt='LogisticsTransportImg' />
            </section>
        </>
    )
}