import styled from "styled-components";

export const ColumnListStyled = styled.ul`
    display: flex;
    flex-direction: row;
    gap: ${p=> p.theme.spacing(8.5)};
`;