import React, { useCallback } from "react";
import * as styles from "./index.module.scss";
import Ticker from "react-ticker";
import gradientLine from "../../../styles/img/gradient-line.svg";
import partner1 from "../../../styles/img/partner1.png";
import partner2 from "../../../styles/img/partner2.png";
import partner3 from "../../../styles/img/partner3.png";
import partner5 from "../../../styles/img/partner5.png";
import partner6 from "../../../styles/img/partner6.png";
import partner7 from "../../../styles/img/partner7.png";
import { useInView } from 'react-intersection-observer';

const partners = [partner1, partner2, partner3, partner5, partner6, partner7];

const OurSponsors = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const GetItems = useCallback(() => {
    return (
      <>
        {partners.map((item, index)=> (
          <img key={index} src={item} className={styles.sponsorImage} width={142} height={72} alt="sponsor" />
        ))}
      </>
    );
  }, []);

  return (
    <section ref={ref} className={`${styles.partners}`} style={{ visibility: inView ? 'visible' : 'hidden' }}>
      <div className={ `container-width ${styles.partnersContainer}`}>
        <h3 data-aos="fade-up" className={`title ${styles.partnersTitle}`}>
          Our Partners
        </h3>
      </div>
      <div data-aos="fade-up" className={styles.partnersWrap}>
        <div className={styles.gradientLine}>
          <img src={gradientLine} alt="Gradient Line" />
          <img src={gradientLine} alt="Gradient Line" />
        </div>
        <div className={styles.tickerWrap}>
          <Ticker direction="toLeft">
            {() => <GetItems />}
          </Ticker>
        </div>
      </div>
    </section>
  );
};

export default OurSponsors;
