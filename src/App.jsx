import { Route, Routes } from 'react-router-dom';

import { WelcomePage } from 'Pages/WelcomePage';
import { HomeLayout, WelcomeLayout } from 'components/Layout/Layouts';
import Auth from 'components/Auth/Auth';
import RegisterForm from 'components/Register/RegisterForm';
import { HomePage } from 'Pages/HomePage';
import { ScreenPage } from 'Pages/ScreenPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<WelcomeLayout />} >
        <Route path ="welcome" element={<WelcomePage />} /> 
        <Route path="auth/:id" element={<Auth />} >
          <Route path="register" element={<RegisterForm />} />
          <Route path="login" element={<h2>LogIn</h2>} />
        </Route> 
      </Route>      
	    <Route path="/home"  element={<HomeLayout />} >
        <Route index element={<HomePage/>} />
          <Route path="home/:boardName" element={<ScreenPage/>} />
        </Route>       
    </Routes>
  );
};
