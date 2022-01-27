import styles from "./Description.module.sass";

export default function Description() {
  return (
    <section className={styles.description}>
      <h3 className={styles.description_title}>
        Виды утеплителя Изорок: <span>Изолайт, Изоруф, Изофлор</span>
      </h3>
      <div className={styles.description_wrapper}>
        <p className={styles.description_subtitle}>
          Учитывая состав и особенности минеральной ваты можно выделить три
          основных вида:
        </p>
        <p className={styles.description_subtitle}>
          Изолайт - достаточно легкий и плотный утеплитель. Рекомендуется для
          утепления всех основных элементов жилых построек.
        </p>
        <p className={styles.description_subtitle}>
          Изоруф - с легкостью удерживает нагрузку кровельного покрытия. Серия
          наиболее востребована в промышленном и многоэтажном строительстве.
        </p>
        <p className={styles.description_subtitle}>
          Изофлор - подходит для любых видов перекрытий под нагрузкой, в том
          числе и в качестве утеплителя для бетонных полов.
        </p>
        <p className={styles.description_subtitle}>
          Помимо перечисленных видов, есть специальные виды утеплителя,
          простеганные проволокой или армированные металлической сеткой.
        </p>
        {/* <p className={styles.description_subtitle}>
          Кроме перечисленных типов, есть специализированные фанерные листы,
          среди которых гибкая, бакелизированная и морская фанера, но в
          розничной продаже они встречаются крайне редко из-за специфичных
          характеристик.
        </p>
        <p className={styles.description_subtitle}>
          Еще один важный параметр, по которому подразделяют фанеру – это
          вариант обработки поверхности. Тут бывают следующие варианты:
          нешлифованная (НШ), со шлифовкой с одной (Ш1) или с обработкой обеих
          сторон (Ш2). Также не стоит упускать сортовую классификацию, она может
          быть от одного до четырех, где один – лучший. 1 – это самое хорошее
          качество, без недочетов и дефектов, например, сучков и червоточин, а 4
          – низкого качества.
        </p> */}
      </div>
      {/* <div className={styles.description_percentages}>
        <div className={styles.description_item}>
          <img
            className={styles.description_item_img}
            src="/images/icon1.png"
            alt="ГИДРАЦИОННЫЕ ДОБАВКИ"
          />
          <p className={styles.description_item_number}>2 .5%</p>
          <p className={styles.description_item_text}>ГИДРАЦИОННЫЕ ДОБАВКИ</p>
        </div>
        <div className={styles.description_item}>
          <img
            className={styles.description_item_img}
            src="/images/icon2.png"
            alt="ДЕРЕВЯННАЯ СТРУЖКА"
          />
          <p className={styles.description_item_number}>24 %</p>
          <p className={styles.description_item_text}>ДЕРЕВЯННАЯ СТРУЖКА</p>
        </div>
        <div className={styles.description_item}>
          <img
            className={styles.description_item_img}
            src="/images/icon3.png"
            alt="ВОДА"
          />
          <p className={styles.description_item_number}>8 .5%</p>
          <p className={styles.description_item_text}>ВОДА</p>
        </div>
        <div className={styles.description_item}>
          <img
            className={styles.description_item_img}
            src="/images/icon4.png"
            alt="ПОРТЛАНД-ЦЕМЕНТ"
          />
          <p className={styles.description_item_number}>65 %</p>
          <p className={styles.description_item_text}>ПОРТЛАНД-ЦЕМЕНТ</p>
        </div>
      </div> */}
    </section>
  );
}
