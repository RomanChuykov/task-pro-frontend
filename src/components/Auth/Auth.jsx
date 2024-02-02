import { NavLink, Outlet, useParams } from 'react-router-dom';
import { Suspense } from 'react';
import RegisterForm from 'components/Register/RegisterForm';

const Auth = () => {
  const { id } = useParams();

  return (
    <div className="welcome-wrapper">
      <div className="form-container">
        <div className="link-wrapper">
          <NavLink className="auth-links" to="/auth/register">
            Registration
          </NavLink>
          <NavLink className="auth-links" to="/auth/login">
            Log In
          </NavLink>
        </div>

        {id === 'login' && <>Login</>}
        {id === 'register' && <RegisterForm />}

        <Suspense fallback={<>Login...</>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default Auth;
