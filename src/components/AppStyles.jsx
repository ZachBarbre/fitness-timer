import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 2% auto;
`;

export const GetAnotherButton = styled.button`
  background: #2078b0;
  margin: 2% auto;
  padding: 1% 2%;
  color: #FFF;
  font-size: 1.1rem;
  min-width: 320px;
  max-width: 580px;
  cursor: pointer;

  &:hover {
    background: #40a0dc;
  }
`;

export const CenterItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DSFImage = styled.img`
  width: 150px;
  vertical-align: middle;
  margin-left: 3px;
`;

export const AppFooter = styled.footer`
  max-width: 520px;
  margin: 10% auto 2px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MeLink = styled.a`
  color: #000;
  text-decoration: none;
  margin: 2px;

  &:hover {
    text-decoration: underline;
  }
`;