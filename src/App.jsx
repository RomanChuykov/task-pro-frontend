import { WelcomePage } from 'Pages/WelcomePage';
import { HomeLayout, WelcomeLayout } from 'components/Layouts/Layouts';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<WelcomeLayout />} >
        <Route path ="/welcome" element={<WelcomePage />} />
        <Route path="auth/:id" element={<h2>AuthPage</h2>} >
          <Route path="register" element={<h2>Registration</h2>} />
          <Route path="login" element={<h2>LogIn</h2>} />
        </Route> 
      </Route>      
	    <Route path="/home"  element={<HomeLayout />} >
        <Route index element={<h2>HomePage</h2>} />
          <Route path="home/:boardName" element={<h2>ScreensPage</h2>} />
        </Route>       
    </Routes>
  );
};
