// import { useDispatch, useSelector } from "react-redux";

import sprite from '../../images/icons.svg'
import { CardList } from "components/CardList/CardList";
import { EditSVG } from "./ColumnListItem.styled";

export const ColumnListItem = () => {

    // const dispatch = useDispatch();    
    // const items = useSelector(selectColumns);
    // const columns = [];
    const columnTitle = 'Title column';
    
    return(
        <>
          <h3>{columnTitle}</h3>
          <div>
            <button type="button">
              <EditSVG>
                <use xlinkHref={`${sprite}#icon-pencil-01`}/>
              </EditSVG>
            </button>
            <button type="button">
              <EditSVG>
                <use xlinkHref={`${sprite}#icon-container`}/>
              </EditSVG>
            </button>
          </div>
          {/* {columns.map(column =>
            <li key={column.id}> */}
                <CardList/>
                <button>ButtonAddAnotherCard</button>                 
            {/* </li>
          ) }   */}
        </>      
      );
};
