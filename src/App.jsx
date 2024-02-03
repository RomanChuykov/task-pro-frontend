import { Route, Routes } from 'react-router-dom';

import HomePage from 'Pages/HomePage';
import { ScreensPage } from 'Pages/ScreensPage';
import WelcomePage  from 'Pages/WelcomePage';
import Auth from 'components/Auth/Auth';
import { Layout} from 'components/Layout/Layout';
import { LogInForm } from 'components/LogInForm/LogInForm';
import { PrivateRoute } from 'components/PrivateRoute';
import RegisterForm from 'components/Register/RegisterForm';
import { TaskCard } from 'components/TaskCard/TaskCard';


export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<WelcomePage />} />
        <Route path="auth/:id" element={<Auth />}>
          <Route path="register" element={<RegisterForm />} />
          <Route path="login" element={<LogInForm/>} />
        </Route>
        </Route> 
       {/* <PrivateRoute path="/home" redirectTo="/auth/login" component={<HomePage />} /> */}
        <Route path="/home"  element={<HomePage />} >
        <Route path="/home" element={<TaskCard/> } >
          <Route path="/home/:boardName" element={<ScreensPage/>}/>
        </Route>
      </Route>
      
    </Routes>
  );
};
