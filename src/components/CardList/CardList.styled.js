import styled from "styled-components";

export const CardListStyled = styled.ul`
    display: flex;
    flex-direction: column;
    gap: ${p=> p.theme.spacing(2)};
`;