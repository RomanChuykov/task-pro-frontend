import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const WelcomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(
    180deg,
    rgba(196, 196, 196, 0) 25%,
    #bedbb0 92.19%
  );
`;

export const LinkWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
  margin-top: 20px;
  gap: 14px;
`;

export const FormContainer = styled.div`
  width: calc(100%-84px);
  background-color: #151515;
  height: 395px;
  border-radius: 8px;

  @media (min-width: 375px) {
    width: 335px;
  }

  @media (min-width: 768px) {
    width: 424px;
  }
`;

export const AuthLinks = styled(NavLink)`
  margin-left: 29px;
  color: rgba(255, 255, 255, 0.3);
  text-decoration: none;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.02em;
  text-decoration: none;
  background: none;
  border: none;
  transition: color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover,
  &.active {
    color: #fff;
  }
`;
