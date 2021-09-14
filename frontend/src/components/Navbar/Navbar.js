import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Container,
  Wrapper,
  LogoContainer,
  Menu,
  MenuItem,
  MenuItemLink,
  ThemeIcon,
  LangIcon,
  MobileIcon,
  Flag,
} from "./Navbar.elements";

import { FaBars } from "react-icons/fa";
import { BiSun, BiMoon } from "react-icons/bi";
import Arg from "../../assets/img/arg.svg";
import Uk from "../../assets/img/uk.svg";

const Navbar = ({ theme, toggleTheme }) => {
  const [t, i18n] = useTranslation("global");
  const [lang, setlang] = useState("");
  return (
    <Container>
      <Wrapper>
        <LogoContainer>{t("navbar.logo")}</LogoContainer>
        <MobileIcon>
          <FaBars />
        </MobileIcon>
        <Menu>
          <MenuItem>
            <MenuItemLink>HOME</MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink>HOME</MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink>HOME</MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink>HOME</MenuItemLink>
          </MenuItem>
          <MenuItem>
            <ThemeIcon onClick={toggleTheme}>
              {lang === "es" ? (
                <BiMoon color="white" onClick={toggleTheme} />
              ) : (
                <BiSun color="yellow" onClick={toggleTheme} />
              )}
            </ThemeIcon>
          </MenuItem>
          <MenuItem>
            <LangIcon>
              {i18n.language === "en" ? (
                <Flag
                  src={Arg}
                  onClick={() => {
                    i18n.changeLanguage("es");
                    console.log(i18n.language);
                  }}
                />
              ) : (
                <Flag
                  src={Uk}
                  onClick={() => {
                    i18n.changeLanguage("en");
                    console.log(i18n.language);
                  }}
                />
              )}
            </LangIcon>
          </MenuItem>
        </Menu>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
