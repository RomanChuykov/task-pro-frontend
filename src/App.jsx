import { HomePage } from 'Pages/HomePage';
import WelcomePage  from 'Pages/WelcomePage';
import Auth from 'components/Auth/Auth';
import { HomeLayout, WelcomeLayout } from 'components/Layout/Layout';
import { LogInForm } from 'components/LogInForm/LogInForm';
import { PrivateRoute } from 'components/PrivateRoute';
import RegisterForm from 'components/Register/RegisterForm';
import { TaskCard } from 'components/TaskCard/TaskCard';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<WelcomeLayout />}>
        <Route index element={<WelcomePage />} />
        <Route path="auth/:id" element={<Auth />}>
          <Route path="register" element={<RegisterForm />} />
          <Route path="login" element={<LogInForm/>} />
        </Route>
        </Route> 
      <Route path="/home"  element={<HomeLayout />} >
        <Route path="/home" element={<TaskCard/>
            // <PrivateRoute redirectTo="/auth/login" component={<HomePage />} />
          } >
          <Route path="/home/:boardName" />
        </Route>
      </Route>
      
    </Routes>
  );
};
