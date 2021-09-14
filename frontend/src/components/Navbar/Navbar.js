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

import { FaBars, FaTimes } from "react-icons/fa";
import { BiSun, BiMoon } from "react-icons/bi";
import Arg from "../../assets/img/arg.svg";
import Uk from "../../assets/img/uk.svg";

const Navbar = ({ theme, toggleTheme }) => {
  const [t, i18n] = useTranslation("global");
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <Container>
      <Wrapper>
        <LogoContainer>{t("navbar.logo")}</LogoContainer>

        <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
          {showMobileMenu ? <FaTimes /> : <FaBars />}
        </MobileIcon>
        <Menu open={showMobileMenu}>
          <MenuItem>
            <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
              {t("navbar.register")}
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
              {t("navbar.login")}
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
              HOME
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
              HOME
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <ThemeIcon onClick={toggleTheme}>
              {theme === "default" ? (
                <BiMoon color="black" onClick={toggleTheme} />
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
                    // console.log(i18n.language);
                  }}
                />
              ) : (
                <Flag
                  src={Uk}
                  onClick={() => {
                    i18n.changeLanguage("en");
                    // console.log(i18n.language);
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
