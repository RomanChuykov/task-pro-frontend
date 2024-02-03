import styled from 'styled-components';

export const StyledSvgWhitePlus = styled.svg`
  fill: ${props => props.theme.colors.white};
  stroke: ${props => props.theme.colors.white};
  display: flex;
  /* position: absolute; */
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
  /* top: 50%;
  right: 50%;
  transform: translate(50%, -50%); */
  border: none;

  /* transition: background-color 0.3s ease; */
`;

export const StyledSvgDarkPlus = styled.svg`
  fill: ${props => props.theme.colors.darkTextColor};
  stroke: ${props => props.theme.colors.darkTextColor};
  display: flex;
  /* position: absolute; */
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
  /* top: 50%;
  right: 50%;
  transform: translate(50%, -50%); */
  border: none;

  /* transition: background-color 0.3s ease; */
`;
