import styled from 'styled-components';
import { Field } from 'formik';

export const FormWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const FormField = styled(Field)`
  width: calc(100%);
  height: 49px;
  padding: 14px 18px;
  font-size: 14px;
  letter-spacing: -0.28px;
  color: #ffffff;
  border-radius: 8px;
  border: 1px solid #bedbb0;
  background: #1f1f1f;
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);
  outline: none;
  transition: all 150ms ease;
  opacity: 0.4;

  &:placeholder {
    color: #fff;
    font-size: 14px;
    letter-spacing: -0.28px;
  }

  &:focus {
    opacity: 1;
  }
`;

export const FormIcon = styled.span`
  position: absolute;
  bottom: 15px;
  right: 18px;
  color: #fff;
  opacity: 0.4;
  cursor: pointer;
`;

export const WelcomeButton = styled.button`
  width: 100%;
  height: 49px;
  padding: 14px;
  border: none;
  background: #bedbb0;
  border-radius: 8px;
  line-height: 21px;
  letter-spacing: -0.02em;
  color: #161616;
`;

export const FormError = styled.div`
  margin-top: 3px;
  padding-left: 14px;
  color: #c04d4d;
  font-size: 12px;
`;

export const RegisterFormWrapper = styled.div`
  margin: 10px 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 14px;
`;

/* .welcome-button {
  width: 100%;
  height: 49px;
  padding: 14px;
  border: none;
  background: #bedbb0;
  border-radius: 8px;
  line-height: 21px;
  letter-spacing: -0.02em;
  color: #161616;
}

.form-icon {
  position: absolute;
  bottom: 15px;
  right: 18px;
  color: #fff;
  opacity: 0.4;
  cursor: pointer;
}
.form-wrapper {
  position: relative;
  width: 100%;
}

.form-field {
  width: calc(100%);
  height: 49px;
  padding: 14px 18px;
  font-size: 14px;
  letter-spacing: -0.28px;
  color: #ffffff;
  border-radius: 8px;
  border: 1px solid #bedbb0;
  background: #1f1f1f;
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);
  outline: none;
  transition: all 150ms ease;

  opacity: 0.4;
}

.form-field::placeholder {
  color: #fff;
  font-size: 14px;
  letter-spacing: -0.28px;
}

.form-field:focus {
  opacity: 1;
}
.form-error {
  margin-top: 3px;
  padding-left: 14px;
  color: #c04d4d;
  font-size: 12px;
}

.welcome-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(
    180deg,
    rgba(196, 196, 196, 0) 25%,
    #bedbb0 92.19%
  );
}
.link-wrapper {
  display: flex;
  margin-bottom: 20px;
  margin-top: 20px;
  gap: 14px;
}

.register-form {
  margin: 10px 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 14px;
}

.form-container {
  width: calc(100%-84px);
  background-color: #151515;
  height: 395px;
  border-radius: 8px;
}
@media (min-width: 375px) {
  .form-container {
    width: 335px;
  }
}
@media (min-width: 768px) {
  .form-container {
    width: 424px;
  }
}
.auth-links {
  margin-left: 29px;
  color: rgba(255, 255, 255, 0.3);
  text-decoration: none;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.02em;
  text-decoration: none;
  background: none;
  border: none;
  transition: color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
}
.auth-link:hover,
.active {
  color: #ffffff;
} */
