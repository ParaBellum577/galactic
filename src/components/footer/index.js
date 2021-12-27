import React, { useContext } from "react";
import { navigate } from "gatsby";
import logo from "../../styles/img/logo.png";
import border from "../../styles/img/border_line.png";
import * as styles from "./index.module.scss";
import { MainButtonExternal, SocialButton } from "../buttons";
import {
  instagram,
  twitter,
  twitterLink,
  instagramLink,
  discordLink,
} from "../../constants";
import useWindowSize from "../../utils/useWindowSize";
import Context from "../../context";

const Footer = ({ siteTitle }) => {
  const ws = useWindowSize();
  const showSmallButton = ws.width <= 480;
  const { showCurtain } = useContext(Context);

  const onLinkClick = async (route) => {
    if (typeof window !== "undefined" && window.location.pathname !== route) {
      await showCurtain();
      navigate(route);
    }
  };

  return (
    <footer className={styles.footer}>
      <img src={border} alt="border" />
      <section>
        <div className={styles.leftBlock}>
          <img onClick={() => navigate("/")} src={logo} alt="logo" />
          <span>
            Copyright © Galactic Fight League
            <br />
            All rights reserved
          </span>
        </div>
        <div className={styles.rightBlock}>
          <div>
            <MainButtonExternal
              url={discordLink}
              title={"Join Discord"}
              isDouble={false}
              isPurple={false}
              small={showSmallButton}
            />
            <div className="sm-buttons">
              <SocialButton url={twitterLink} Icon={twitter} />
              <SocialButton url={instagramLink} Icon={instagram} />
            </div>
          </div>
          <div>
            <span onClick={() => onLinkClick('/')}>Main Page</span>
            <span onClick={() => onLinkClick('/civilizations')}>Civilisations</span>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
