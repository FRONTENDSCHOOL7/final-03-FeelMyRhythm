import styled from 'styled-components';

export const ProfileSettingLayout = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 767px;
  width: 100vw;
  height: 100vh;
  padding-top: 30px;
  background-color: white;
  padding-left: 34px;
  padding-right: 34px;
`;

export const Title = styled.h2`
  text-align: center;

  font-size: 24px;
  font-weight: 500;

  padding-bottom: 12px;
`;

export const SubTitle = styled.h3`
  text-align: center;
  color: #767676;

  font-size: 14px;
  font-weight: 400;
  line-height: 14px;

  padding-bottom: 30px;
`;

export const ImgBox = styled.div`
  position: relative;
  margin: 0 auto;
`;

export const ProfileImg = styled.img`
  width: 110px;
  height: 110px;
  z-index: 0;
  border-radius: 50%;
`;

export const ChangeImg = styled.img`
  position: absolute;
  width: 36px;
  height: 36px;
  right: 0;
  bottom: 0;
  z-index: 1;
  cursor: pointer;
`;

export const InputBox = styled.div`
  padding-top: 30px;
  border-bottom: 1px solid #dbdbdb;
`;

export const NonPaddingInputBox = styled(InputBox)`
  padding-top: 0;
`;

export const SubContent = styled.p`
  color: #767676;

  font-size: 12px;
  font-weight: 500;

  padding-bottom: 10px;
`;
export const Input = styled.input`
  width: 80%;
  height: 32px;

  padding: 0;
  border: none;
  outline: none;

  font-size: 14px;
  font-weight: 400;
  line-height: 14px;

  margin-bottom: 8px;

  &::placeholder {
    color: #dbdbdb;
  }
`;

export const WarningContent = styled.p`
  color: ${({ valid }) => (valid === '사용 가능한 계정ID 입니다.' ? 'green' : '#eb5757')};

  font-size: 12px;
  font-weight: 500;
  line-height: 14px;

  padding-top: 6px;
  padding-bottom: 16px;
`;

export const Button = styled.button`
  background-color: ${({ valid }) => (valid === 'done' ? '#F26E22' : '#FFC7A7')};
  border-radius: 44px;
  border: none;

  margin-top: 30px;
  padding: 13px 105.5px;

  color: #fff;

  font-size: 14px;
  font-weight: 500;
`;

export const CheckBox = styled.div`
  display: flex;
  align-items: center;
`;

export const CheckaccountButton = styled.button`
  width: 70px;
  height: 32px;
  background: #fff;

  font-size: ${({ valid }) => (valid === 'success' ? '16px' : '12px')};
  color: ${({ valid }) => (valid === 'success' ? 'green' : '#767676')};
  font-weight: 500;

  margin-bottom: ${({ valid }) => (valid === 'success' ? '5px' : '8px')};
  margin-left: auto;

  text-align: ${({ valid }) => (valid === 'success' ? 'right' : 'center')};
  border: ${({ valid }) => (valid === 'success' ? 'none' : '1px solid #dbdbdb')};

  cursor: ${({ valid }) => (valid === 'success' ? 'default' : 'pointer')};
  border-radius: 30px;
`;
