import Header from "../../components/Header/Header";
import styles from "./HomePage.module.css";
import PropTypes from "prop-types";

const sectionsData = [
  {
    content: "mentalHealth",
    typeContent: "mentalHealth",
    textType: "section",
    title: "Ментальне здоров’я",
    description:
      "Для багатьох людей, особливо для самотніх, домашня тварина може бути цінним джерелом комфорту. Взяти у свою зону щастя домашнього улюбленця дає самотнім людям можливість насолодитися присутністю і любов'ю домашнього улюбленця, що може значно підвищити їх настрій і самопочуття в такий важкий час.",
  },
  {
    content: "socialization",
    typeContent: "socialization",
    textType: "section",
    title: "соціалізація тварин",
    description:
      "Багатьом домашнім тваринам необхідно спілкуватися з людьми та іншими тваринами, щоб бути щасливими та здоровими. Вони отримують турботу, увагу та можливість проявити свої найкращі якості перед потенційними усиновителями. Це може істотно збільшити шанси на їх успішну адаптацію і щасливе життя в новому будинку.",
  },
  {
    content: "mentalHealth",
    typeContent: "convenience",
    textType: "convenience",
    title: "зручність",
    description:
      "Ви самі обираєте кого і як забрати зі стрічки улюбленців. Це дуже зручно тим, що ви просто гортаєте стірку у зручний час, домовляєтесь із власником і все, забираєте тваринку.",
  },
];

const Section = ({ content, typeContent, textType, title, description }) => {
  return (
    <section>
      <div className={styles.section__container}>
        <div className={`${styles[`section__${content}_content`]}`}>
          <div className={styles[`${typeContent}__content_bg`]}></div>
          <div className={styles[`${textType}__content_text`]}>
            <h1 className={styles.content_text_title}>{title}</h1>
            <p className={styles.content_text_descr}>{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const HomePage = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        {/* Section start start)  */}
        <section>
          <div className={styles.section__container}>
            <div className={styles.circle}></div>
            <div className={styles.start__content}>
              <div className={styles.start__content_bg}></div>
              <div className={styles.start__content_text}>
                <h1 className={styles.context_text_title}>
                  Щастя ближче, ніж ви думаєте
                </h1>
                <a href="#about" className={styles.content_text_btn}>
                  Вперед!
                </a>
              </div>
            </div>
            <div className={styles.start_circle}></div>
          </div>
        </section>
        {/* Section start end */}

        {/* Section about us start */}
        <section>
          <div id="about" className={styles.section__container}>
            <div className={styles.section__about_content}>
              <div className={styles.about__content_bg}></div>
              <div className={styles.about__content_text}>
                <h1 className={styles.about_contnet_title}>про нас</h1>
                <div className={styles.about_content_intro}>
                  <p>Мене звуть Кітті, і я розповім вам про наш проект!</p>
                </div>
                <div className={styles.about_circle1}></div>
                <div className={styles.about_circle3}></div>
              </div>
            </div>

            <div className={styles.about_circle2}></div>
            <div className={styles.about_circle4}></div>
          </div>
        </section>
        {/* Section about end */}
        {sectionsData.map((section, index) => (
          <Section
            key={index}
            content={section.content}
            typeContent={section.typeContent}
            textType={section.textType}
            title={section.title}
            description={section.description}
          />
        ))}
      </main>
    </>
  );
};

Section.propTypes = {
  content: PropTypes.string.isRequired,
  typeContent: PropTypes.string.isRequired,
  textType: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default HomePage;
