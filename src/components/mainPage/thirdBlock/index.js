import React, { useRef, useState } from "react";
import CivilizationSlides from "./slides";
import preview from '../../../styles/img/origin-story-placeholder.png';
import arrowP from "../../../styles/img/icons/arrow_purple.svg";
import arrowG from "../../../styles/img/icons/arrow_gold.svg";
import sound from "../../../styles/img/icons/sound_icon.png";
import border from "../../../styles/img/border1.svg";
import videoBlock from "../../../styles/img/border_video.png";
import decoration from "../../../styles/img/back_decoration.png";
import borderTablet from "../../../styles/img/border_tablet.png";
import borderMobile from "../../../styles/img/border-mobile.png";
import * as styles from "./index.module.scss";
import cursorPlay from "../../../styles/img/cursors/watch.png";
import cursorStop from "../../../styles/img/cursors/stop.png";

export const animatedArrows = (color) => {
  return (
    <div className={styles.animatedArrow}>
      <img src={color === "purple" ? arrowP : arrowG} alt="arrow" />
      <img src={color === "purple" ? arrowP : arrowG} alt="arrow" />
      <img src={color === "purple" ? arrowP : arrowG} alt="arrow" />
    </div>
  );
};

const ThirdBlock = () => {
  const videoRef = useRef(null);
  const [videoActive, setVideoActive] = useState(true);

  const handleClickVideo = (e) => {
    setVideoActive(!videoActive);
    if (videoActive) {
      e.target.pause();
    } else {
      e.target.play();
      e.target.muted = false;
    }
  };
  const handleSound = (e) => {
    e.stopPropagation();
    if (videoRef) {
      if (videoRef.current.muted) {
        videoRef.current.muted = false;
      } else {
        videoRef.current.muted = true;
      }
    }
  };
  return (
    <section className={styles.main}>
      <div className={`${styles.mainHeader} container-width`}>
        <h2 data-aos="fade-up" className="title">
          Origin Story
        </h2>
      </div>
      <div className={`${styles.contentWrapper} container-width`}>
        <div data-aos-delay="66" data-aos="fade-up" className={`${styles.mainContent}`}>
          <div className={styles.arrowsP}>{animatedArrows("purple")}</div>
          <div className={styles.arrowsG}>{animatedArrows("")}</div>
          <img className={styles.desktop} src={border} alt="border" />
          <img className={styles.tablet} src={borderTablet} alt="border" />
          <img className={styles.mobile} src={borderMobile} alt="border" />
          <p data-aos="zoom-in" className={`description ${styles.contentText}`}>
            The Galactic Fight League brings together the best fighters from earth and beyond. Where Humans, Cyborgs, Aliens and Zombies battle to become the best mixed martial art fighter in the metaverse.
          </p>
        </div>
        <div data-aos="fade-up" data-aos-delay="133" className={styles.videoWrapper}>
          <img src={videoBlock} alt="videoBlock" />
          <video
            style={
              videoActive
                ? { cursor: `url(${cursorStop}) 25 15, auto` }
                : { cursor: `url(${cursorPlay}) 25 15, auto` }
            }
            onClick={handleClickVideo}
            ref={videoRef}
            autoPlay
            muted
            loop
            src="https://storage.googleapis.com/galactic_assets/GFLFinal.mp4"
            poster={preview}
          ></video>
          <div className={styles.soundIcon}>
            <img onClick={handleSound} src={sound} alt="sound" />
          </div>
        </div>
      </div>
      <div className={`${styles.civilizations} container-width`}>
        <img src={decoration} alt="decoration" />
        <h2 data-aos="fade-up" className={`title ${styles.civilizationsTitle}`}>
          Civilizations
        </h2>
        <p data-aos-delay="66" data-aos="fade-up" className={`description ${styles.civilizationsSubtitle}`}>
          In the future, our galaxy is a very different place. Where humans once believed they were the only form of intelligent life, new civilizations were discovered, new lifeforms forged. Co-existence was never easy, battles raged.
        </p>
        <CivilizationSlides />
      </div>
    </section>
  );
};

export default ThirdBlock;
