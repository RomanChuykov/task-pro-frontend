import { CardListItem } from "components/CardListItem/CardListItem";
import { CardListStyled } from "./CardList.styled";

export const CardList = () => {
    return(
        <CardListStyled>
            <CardListItem/>
            <button>ButtonAddAnotherCard</button>
        </CardListStyled>
    )
};
