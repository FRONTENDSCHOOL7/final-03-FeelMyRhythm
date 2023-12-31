import styled from 'styled-components';

const mainColor = `#f26e22`;

export const ProfileInfoLayout = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 767px;
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.textColor};
  border: 0.5px solid #dbdbdb;
  border-left: none;
  border-right: none;
  padding-top: 78px;
  padding-bottom: 26px;
`;

export const RowBox = styled.div`
  display: flex;
  align-items: center;
`;

export const ColBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ImgBox = styled.div`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  margin: 0 40px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #dbdbdb;
  & img {
    min-width: 110px;
    min-height: 110px;
  }
`;

export const FollowText = styled.p`
  color: ${({ theme }) => theme.subTextColor};
  font-size: 10px;
  margin-bottom: 6px;
`;

export const FollowNum = styled.p`
  color: ${({ theme }) => theme.textColor};
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
`;

export const TitleContent = styled.p`
  font-size: 16px;
  font-weight: 700;
  margin-top: 16px;
`;

export const IDContent = styled.p`
  color: #767676;
  font-size: 12px;
  margin-top: 6px;
  color: ${({ theme }) => theme.subTextColor};
`;

export const IntroContent = styled.p`
  color: ${({ theme }) => theme.subTextColor};
  font-size: 14px;
  margin-top: 16px;
  word-wrap: break-word;
  text-align: center;
  width: 60vw;
`;

export const RowButtonBox = styled(RowBox)`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 24px;
  background-color: ${({ theme }) => theme.backgroundColor};
`;

// export const IconButton = styled.button`
//   width: 34px;
//   height: 34px;
//   border-radius: 30px;
//   border: 1px solid var(--DBDBDB, #dbdbdb);
//   background-color: #fff;
//   padding-top: 3px;
// `;

export const FollowButton = styled.button`
  color: ${({ $follow, theme }) => (!$follow ? theme.textColor : theme.btnTextColor)};
  border: ${({ $follow }) => (!$follow ? '1px solid #dbdbdb' : 'none')};
  background-color: ${({ $follow, theme }) => (!$follow ? theme.backgroundColor : theme.btnEnabledBgColor)};
  width: 120px;
  height: 34px;
  border-radius: 30px;
  font-size: 14px;
  font-weight: 500;
`;

export const LinkButton = styled.button`
  width: ${(props) => props.$width};
  height: 34px;
  color: ${({ theme }) => theme.btnTextColor};
  border-radius: 30px;
  border: none;
  /* border: 1px solid #dbdbdb; */
  background-color: ${({ theme }) => theme.btnEnabledBgColor};
  font-size: 14px;
`;
