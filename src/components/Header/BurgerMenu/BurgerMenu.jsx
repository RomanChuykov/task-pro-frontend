import styled from 'styled-components';
import sprite from '../../../images/icons.svg';
import { StyledBurgerMenu } from './BurgerMenu.styled';

const StyledSVG = styled.svg`
  stroke: rgb(22, 22, 22);
  width: 100%;
  height: 100%;
`;
export const BurgerMenu = () => {
  return (
    <StyledBurgerMenu type="button">
      <StyledSVG>
        <use xlinkHref={`${sprite}#icon-menu-01`}></use>
      </StyledSVG>
    </StyledBurgerMenu>
  );
};
