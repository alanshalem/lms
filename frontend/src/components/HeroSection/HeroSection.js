import React from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
} from "./HeroSection.elements";
import { useTranslation } from "react-i18next";
import Video from "../../assets/videos/hero_video.mp4";

const HeroSection = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} typpe="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>{t("hero.title")}</HeroH1>
        <HeroP>{t("hero.paragraph")}</HeroP>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
