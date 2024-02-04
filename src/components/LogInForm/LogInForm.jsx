import React, { useState } from 'react';
import sprite from '../../images/icons.svg';
import {
  FormContainer,
  InputContainer,
  LogInBtn,
  MessageError,
  StyledInput,
  StyledLabel,
  StyledSVG,
  StyledSVGButton,
} from './LogInForm.styled.jsx';
import * as Yup from 'yup';
import { Formik } from 'formik';

const LogInSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email!').required('Email is required!'),
  password: Yup.string()
    .min(8, 'Password is too short!' )
    .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/, 'The password must contain a minimum of 6 characters, at least one letter, one number, and one special character!')
    .max(64, 'Password must be at most 64 characters')
    .required('Password is required!'),
});

const initialValues = {
  email: '',
  password: '',
};

export const LogInForm = () => {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    form.reset();
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  //  const onSubmit = (values, { resetForm }) => {
  //    const {email, password } = values;
  //    dispatch();
  //    logIn({
  //      email,
  //      password,
  //    });
  //    resetForm();
  //  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={LogInSchema}
      onSubmit={handleSubmit}
    >
      <FormContainer>
        <InputContainer>
          <StyledLabel>
            <StyledInput
              type="text"
              id="email"
              name="email"
              autoComplete="off"
              placeholder="Enter your email"
            />
            <MessageError name="email" component="div" />
          </StyledLabel>
          <StyledLabel>
            <StyledInput
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              placeholder="Confirm a password"
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
        <LogInBtn type="submit">Log In Now</LogInBtn>
      </FormContainer>
    </Formik>
  );
};
