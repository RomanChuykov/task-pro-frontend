import styled from 'styled-components';
import sprite from '../../../images/icons.svg';
import {  BoardList } from '../BoardList/BoardList';
import { StyledCreateBtn, StyledCreateBtnIconWrapper, StyledCreateBtnWrapper, StyledLogoutBtn, StyledText } from './SidebarNav.styled';

const StyledSVG = styled.svg`
  fill: ${p => p.theme.violetColors.accentColor};
  stroke: rgb(255, 255, 255);
  /* background-color:white; */
  width: 20px;
  height: 20px;
  padding: 8px 10px;
`;

const StyledSVGLogout = styled.svg`
  fill: transparent;
  stroke: white;
  /* background-color:white; */
  width: 32px;
  height: 32px;
`;

export const SidebarNav = () => {
  return (
    <div>
      <StyledText>My boards</StyledText>

<StyledCreateBtnWrapper>  <StyledCreateBtn>
        Create a new board
        <StyledCreateBtnIconWrapper>
          <StyledSVG>
            <use xlinkHref={`${sprite}#icon-plus`}></use>
          </StyledSVG>
        </StyledCreateBtnIconWrapper>
      </StyledCreateBtn>
      </StyledCreateBtnWrapper>
    
      
      <BoardList/>

<div>Need help</div>

<StyledLogoutBtn>
<StyledSVGLogout>
            <use xlinkHref={`${sprite}#icon-login`}></use>
          </StyledSVGLogout>
    Log out</StyledLogoutBtn>
    </div>
  );
};
