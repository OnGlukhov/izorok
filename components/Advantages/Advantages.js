import styles from "./Advantages.module.sass";
export default function Advantages() {
  return (
    <section className={styles.advantages} id="advantages">
      <h3 className={styles.advantages_title}>
        Достоинства утеплителя <span>ISOROC</span>
      </h3>
      <article className={styles.advantages_container}>
        <div className={styles.block}>
          <div className={styles.graphics}></div>
          <div className={styles.content}>
            <p className={styles.content_title}>Низкая теплопроводность</p>
            <p className={styles.content_subtitle}>
              Благодаря низкой теплопроводности, обеспеченной множеством
              воздушных пор конденсаторов тепла, минераловатная продукция марки
              ИЗОРОК обладает высокими теплоизоляционными свойствами. Это
              позволяет минимизировать потерю тепла через ограждающие
              конструкции зданий и оборудования, а следовательно, значительно
              снизить энергозатраты.
            </p>
          </div>
        </div>
        <div className={styles.block}>
          <div className={styles.graphics}></div>
          <div className={styles.content}>
            <p className={styles.content_title}>Высокая огнестойкость</p>
            <p className={styles.content_subtitle}>
              Основа минераловатной продукции марки ИЗОРОК - негорючие природные
              компоненты. Это позволяет волокнам минеральной ваты работать в
              широком температурном диапазоне. В процессе испытаний на
              негорючесть изделия нагревают до 850°С. Поэтому материалы ИЗОРОК
              отвечают самым высоким требованиям пожарной безопасности и могут
              использоваться в качестве противопожарных преград.
            </p>
          </div>
        </div>
        <div className={styles.block}>
          <div className={styles.graphics}></div>
          <div className={styles.content}>
            <p className={styles.content_title}>
              Высокая прочность при деформации
            </p>
            <p className={styles.content_subtitle}>
              Для тяжелых плит, работающих в сложных условиях (плоские,
              эксплуатируемые крыши и т.п.) важным показателем является
              прочность на сжатие при 10%-ной деформации. Легкие материалы
              ИЗОРОК также имеют хорошие прочностные показатели и
              характеризуются низкой сжимаемостью. Отличные прочностные
              характеристики материалов ИЗОРОК делают конструкции долговечными.
            </p>
          </div>
        </div>
        <div className={styles.block}>
          <div className={styles.graphics}></div>
          <div className={styles.content}>
            <p className={styles.content_title}>
              Высокая прочность на отрыв слоев
            </p>
            <p className={styles.content_subtitle}>
              Нередко утеплители работают в прямом контакте с отделочными
              материалами (штукатурные фасады, кашировка и т.п.). Особые
              технологии формирования минераловатного ковра марки ИЗОРОК, помимо
              хорошей адгезии, обеспечивают целостность конструкции за счет
              прочной связки волокон между собой, что определяется прочностью на
              отрыв слоев.
            </p>
          </div>
        </div>
      </article>
      <h3 className={`${styles.advantages_title} ${styles.margin}`}>
        Применение <span>ISOROC</span>
      </h3>
      <article className={styles.advantages_container}>
        <div className={styles.block}>
          <div className={styles.graphics}></div>
          <div className={styles.content}>
            <p className={styles.content_title}>
              теплоизоляция скатных и плоских кровель
            </p>
          </div>
        </div>
        <div className={styles.block}>
          <div className={styles.graphics}></div>
          <div className={styles.content}>
            <p className={styles.content_title}>
              теплоизоляция межэтажных перекрытий
            </p>
          </div>
        </div>
        <div className={styles.block}>
          <div className={styles.graphics}></div>
          <div className={styles.content}>
            <p className={styles.content_title}>теплоизоляция перегородок</p>
          </div>
        </div>
        <div className={styles.block}>
          <div className={styles.graphics}></div>
          <div className={styles.content}>
            <p className={styles.content_title}>
              теплоизоляция вентилируемых и штукатурных фасадов
            </p>
          </div>
        </div>
        <div className={styles.block}>
          <div className={styles.graphics}></div>
          <div className={styles.content}>
            <p className={styles.content_title}>
              теплоизоляция слоистой кладки
            </p>
          </div>
        </div>
        <div className={styles.block}>
          <div className={styles.graphics}></div>
          <div className={styles.content}>
            <p className={styles.content_title}>теплоизоляция пола</p>
          </div>
        </div>
        <div className={styles.block}>
          <div className={styles.graphics}></div>
          <div className={styles.content}>
            <p className={styles.content_title}>теплоизоляция трубопроводов</p>
          </div>
        </div>
      </article>
    </section>
  );
}
