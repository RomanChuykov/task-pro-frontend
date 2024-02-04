import * as Yup from 'yup';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useSelector } from 'react-redux';
// import './RegisterFormStyles.js';
import { register } from 'redux/auth/operations';
import { selectIsLoading } from 'redux/auth/selectors';
import {
  FormContainer,
  InputContainer,
  MessageError,
  RegisterInBtn,
  StyledInput,
  StyledLabel,
  StyledSVG,
  StyledSVGButton,
} from './RegisterForm.styled.jsx';

import { useNavigate } from 'react-router-dom';
import sprite from '../../images/icons.svg';

const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required!')
    .min(2, 'Name must be at least 2 characters')
    .max(32, 'Name must be at most 32 characters'),
  email: Yup.string().email('Invalid email!').required('Email is required!'),
  password: Yup.string()
    .min(8, 'Password is too short!' )
    .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/, 'The password must contain a minimum of 6 characters, at least one letter, one number, and one special character!')
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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const onSubmit = (values, { resetForm }) => {
    const { name, email, password } = values;
    dispatch(
      register({
        name,
        email,
        password,
      })
    );

    navigate('/welcome');
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={RegisterSchema}
      onSubmit={onSubmit}
    >
      <FormContainer>
        <InputContainer>
          <StyledLabel>
            <StyledInput
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              autoComplete="off"
            />
            <MessageError name="name" component="div" />
          </StyledLabel>

          <StyledLabel>
            <StyledInput
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              autoComplete="off"
            />
            <MessageError name="email" component="div" />
          </StyledLabel>

          <StyledLabel>
            <StyledInput
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              placeholder="Create a password"
              autoComplete="off"
            />
            <MessageError name="password" component="div" />
            <StyledSVGButton type="button " onClick={handleTogglePassword}>
              <StyledSVG>
                <use xlinkHref={`${sprite}#icon-eye`}></use>
              </StyledSVG>
            </StyledSVGButton>
          </StyledLabel>
        </InputContainer>
        <RegisterInBtn type="submit">
          {loading ? 'waiting' : 'Register Now'}
        </RegisterInBtn>
      </FormContainer>
    </Formik>
  );
};

export default RegisterForm;
