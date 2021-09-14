import styled from "styled-components";

export const HeroContainer = styled.div`
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  height: 150px;
  position: relative;
  z-index: 1;
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const HeroContent = styled.h1`
  text-align: center;
  color: red;
  font-size: 10rem;
`;
