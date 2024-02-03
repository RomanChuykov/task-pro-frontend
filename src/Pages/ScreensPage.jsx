import React from 'react';

import { HeaderDashboard } from 'components/HeaderDashboard/HeaderDashboard';
import { ColumnList } from 'components/ColumnList/ColumnList';

export const ScreensPage = () => {
  return (
    <>
    <HeaderDashboard/>    
    <ColumnList/>
    <button>ButtonAddAnotherColumn</button>
    </>
    
  )
}
