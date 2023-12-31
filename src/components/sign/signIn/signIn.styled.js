import styled from 'styled-components';

export const SignInLayout = styled.form`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  max-width: 767px;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.backgroundColor};
  padding-left: 34px;
  padding-right: 34px;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  color: ${({ theme }) => theme.textColor};
  padding-bottom: 40px;
`;

export const InputBox = styled.div`
  border-bottom: 1px solid #dbdbdb;
`;

export const SubContent = styled.p`
  color: #767676;
  color: ${({ theme }) => theme.subTextColor};
  font-size: 12px;
  font-weight: 500;

  padding-bottom: 10px;
`;

export const Input = styled.input`
  width: 70%;
  height: 32px;

  padding: 0;
  border: none;
  outline: none;

  font-size: 14px;
  font-weight: 400;
  line-height: 14px;

  margin-bottom: 8px;

  padding-left: 8px;

  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.textColor};

  &::placeholder {
    color: ${({ theme }) => theme.subTextColor};
  }
`;

export const WarningContent = styled.p`
  color: #eb5757;

  font-size: 12px;
  font-weight: 500;
  line-height: 14px;

  padding-top: 6px;
  padding-bottom: 16px;
`;

export const Button = styled.button`
  background-color: ${({ valid, theme }) => (valid === 'done' ? theme.btnEnabledBgColor : theme.btnDisabledBgColor)};
  border-radius: 44px;
  border: none;

  margin-top: 14px;
  padding: 13px 0;

  color: ${({ theme }) => theme.btnTextColor};

  font-size: 14px;
  font-weight: 500;
`;

export const EmailSignUp = styled.p`
  margin: 20px auto 0 auto;

  color: ${({ theme }) => theme.subTextColor};

  font-size: 12px;
  font-weight: 400;

  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
