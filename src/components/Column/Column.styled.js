import styled from "styled-components";

export const EditSVG = styled.svg`
   stroke: ${p => p.theme.colors.greyIconColor};
  /* fill: ${p => p.theme.colors.white}; */
  opacity: 0.4;
  cursor: pointer;

  width: 16px;
  height: 16px;
  &:hover,
  &:focus {
    stroke: ${p => p.theme.violetColors.accentColor};
  }
`;