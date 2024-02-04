import { HomePage } from 'Pages/HomePage';
import WelcomePage  from 'Pages/WelcomePage';
import Auth from 'components/Auth/Auth';
import { HomeLayout, WelcomeLayout } from 'components/Layout/Layout';
import { PrivateRoute } from 'components/PrivateRoute';
import RegisterForm from 'components/Register/RegisterForm';
import { Route, Routes } from 'react-router-dom';
import { AddBoard } from 'components/boardModals/addBoard';
import { EditBoard } from 'components/boardModals/editBoard';

export const App = () => {
  return (
    <div>
    <Routes>
      <Route path="/" element={<WelcomeLayout />}>
        <Route index element={<WelcomePage />} />
        <Route path="auth/:id" element={<Auth />}>
          <Route path="register" element={<RegisterForm />} />
          <Route path="login" element={<>login</>} />
        </Route>
        </Route> 
      <Route path="/home"  element={<HomeLayout />} >
        <Route path="/home" element={
            <PrivateRoute redirectTo="/auth/login" component={<HomePage />} />
          } >
          <Route path="/home/:boardName" />
        </Route>
      </Route>
      
    </Routes>
    <AddBoard />
    <EditBoard />
    </div>
  );
};
