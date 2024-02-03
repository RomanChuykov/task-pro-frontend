import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  background: linear-gradient(
    180deg,
    rgba(196, 196, 196, 0) 25%,
    #bedbb0 92.19%
  );
`;
export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 335px;

  text-align: center;

  @media only screen and (min-width: 768px) {
    width: 473px;
    height: 438px;
  }
`;
export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
`;

export const StyledImg = styled.img`
  width: 124px;
  height: 124px;
  margin: 0 auto 14px;

  @media only screen and (min-width: 768px) {
    width: 162px;
    height: 162px;
    margin: 0 auto 24px;
  }
`;

export const StyledSVG = styled.svg`
  width: 40px;
  height: 40px;
  fill: ${props => props.theme.colors.darkTextColor};
  stroke: ${props => props.theme.colors.white};
  margin-right: 16px;
  @media only screen and (min-width: 768px) {
    width: 48px;
    height: 48px;
  }
`;

export const StyledH1 = styled.h1`
  font-weight: 600;
  font-size: 28px;
  letter-spacing: -0.04em;
  @media only screen and (min-width: 768px) {
    font-size: 40px;
  }
`;
export const StyledText = styled.p`
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.02em;
  text-align: center;
  margin: 0 auto 48px;
`;
export const RegistrationBtn = styled.button`
  width: 335px;
  padding: 14px 0px;
  justify-content: center;
  align-items: center;

  border-radius: ${props => props.theme.radius.m};
  border: none;
  background: ${props => props.theme.colors.darkTextColor};
  display: block;

  color: ${props => props.theme.colors.white};

  font-family: inherit;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  text-align: center;

  margin: 0 auto 14px;
  @media only screen and (min-width: 768px) {
    width: 344px;
  }
`;
export const LoginBtn = styled.button`
  color: ${props => props.theme.colors.darkTextColor};

  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.02em;

  border: none;
  background: transparent;
`;
