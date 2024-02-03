import * as Yup from 'yup';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import './RegisterFormStyles.js';
import { register } from 'redux/auth/operations';
import { selectIsLoading } from 'redux/auth/selectors';
import {
  AuthForm,
  AuthFormField,
  AuthFormWrapper,
  ErrorSection,
  FormIcon,
  WelcomeButton,
} from './RegisterFormStyles.js';

const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required!')
    .min(2, 'Name must be at least 2 characters')
    .max(32, 'Name must be at most 32 characters'),
  email: Yup.string().email('Invalid email!').required('Email is required!'),
  password: Yup.string()
    .min(8, { length: 'Password is too short!' })
    .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/, {
      message: {
        number:
          'The password must contain a minimum of 6 characters, at least one letter, one number, and one special character!',
      },
    })
    .max(64, 'Password must be at most 64 characters')
    .required('Password is required!'),
});
const initialValues = {
  name: '',
  email: '',
  password: '',
  showPassword: false,
};

const RegisterForm = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const onSubmit = (values, { resetForm }) => {
    const { name, email, password } = values;
    dispatch();
    register({
      name,
      email,
      password,
    });
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={RegisterSchema}
      onSubmit={onSubmit}
    >
      <AuthForm>
        <AuthFormWrapper>
          <ErrorSection name="name" component="div" />
          <AuthFormField
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            autoComplete="off"
          />
        </AuthFormWrapper>

        <AuthFormWrapper>
          <ErrorSection name="email" component="div" />
          <AuthFormField
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            autoComplete="off"
          />
        </AuthFormWrapper>

        <AuthFormWrapper>
          <ErrorSection name="password" component="div" />
          <AuthFormField
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            placeholder="Create a password"
            autoComplete="off"
          />
          <FormIcon onClick={handleTogglePassword}>
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </FormIcon>
        </AuthFormWrapper>

        <WelcomeButton type="submit">
          {loading ? 'Register Now' : 'Register Now'}
        </WelcomeButton>
      </AuthForm>
    </Formik>
  );
};

export default RegisterForm;
