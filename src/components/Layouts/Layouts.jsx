import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const StyledLayout = styled.div`
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 16px;
`;

const StyledWelcomeLayout = styled(StyledLayout)`
  background: linear-gradient(180deg, rgba(196, 196, 196, 0.25) , ${p => p.theme.colors.lightGreen} );
`;

export const WelcomeLayout = () => {
  return (
    <StyledWelcomeLayout>     
      <Suspense fallback={null}> 
        <Outlet />   
      </Suspense>
    </StyledWelcomeLayout>
  );
};

export const HomeLayout = () => {
  return (
    <StyledLayout>     
	    <div>HeaderHomePage</div>( шапка HomePage)
	    <div>Sidebar</div>
    	<Suspense fallback={null}>
       	<Outlet />
      </Suspense>     
    </StyledLayout>
  );
};

