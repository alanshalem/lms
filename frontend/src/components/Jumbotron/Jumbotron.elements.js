import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  height: 100px;
  background: ${({ theme }) => theme.colors.background};
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.h1`
  font-size: 60px;
  font-weight: 600;
  font-family: "Poppins";
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
`;
