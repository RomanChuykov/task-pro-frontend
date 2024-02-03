export const CardListItem = () => {
    const cards = [];
    return(
        <>
          {cards.map(card =>
            <li key={card.id}>
                <>Card</>                 
            </li>
          ) }  
        </>      
      );
};
