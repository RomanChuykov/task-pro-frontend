import styled from 'styled-components';
import { StyledThemeBtn, StyledThemeDropDown } from './ThemeDropDown.styled';
import sprite from '../../../images/icons.svg';

const StyledSVG = styled.svg`
  fill: transparent;
  /* stroke: ${p => p.theme.colors.shadowColor}; */
  stroke: rgba(22, 22, 22, 0.8);
  width: 16px;
  height: 16px;
  padding: 0;
  margin: auto 0;
`;

export const ThemeDropDown = () => {
  return (
    <StyledThemeDropDown>
      <StyledThemeBtn type="button">
        Thema
        <StyledSVG>
          <use xlinkHref={`${sprite}#icon-chevron-down`}></use>
        </StyledSVG>
      </StyledThemeBtn>
      {/* <StyledThemeList >
<li >Light</li>
<li >Dark</li>
<li >Violet</li>
           </StyledThemeList> */}
    </StyledThemeDropDown>
  );
};
