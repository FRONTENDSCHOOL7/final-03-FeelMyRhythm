import styled from 'styled-components';

const styleConstants = {
  fontFamily: "'Orbit-Regular', sans-serif"
};
export const ContainerBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  padding: 16px 20px;
`;
export const AboutUserBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  cursor: pointer;
`;

export const Iframe = styled.iframe`
  width: 290px;
  height: 163px;
  border-radius: 15px;
  margin-top: 16px;
`;

export const ImgBox = styled.div`
  width: 295px;
  height: 168px;
  border-radius: 17px;
  overflow: hidden;
  margin-top: 16px;
  background-color: gray;
`;
export const Img = styled.img`
  height: 140%;
  transform: translate(-1%, -14%);
`;

export const StyledProfileImg = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 42px;
  border: none;
  background: lightgray;
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;

  margin-right: 12px;
`;

export const UserInfoBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const H2 = styled.p`
  height: 18px;
  color: ${({ $textColor }) => $textColor};
  font-family: ${styleConstants.fontFamily};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 2px;
`;
export const H3 = styled.h3`
  color: ${({ $textColor }) => $textColor};
  font-family: ${styleConstants.fontFamily};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
`;
export const H4 = styled.h4`
  margin-top: 5px;
  color: ${({ $textColor }) => $textColor};
  font-family: ${styleConstants.fontFamily};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const Button = styled.button`
  width: 18px;
  height: 18px;
  position: absolute;
  top: 0px;
  right: 0px;
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
`;
export const ContentsBox = styled.div`
  margin-left: 54px;
  cursor: pointer;
`;
export const DescriptionContent = styled.p`
  color: ${({ $textColor }) => $textColor};
  font-family: ${styleConstants.fontFamily};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 12px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const IconsBox = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 12px;
  padding-left: 54px;
  align-items: center;
  gap: 6px;
`;

export const StyledHeartBox = styled.div`
  width: 20px;
  height: 20px;

  cursor: pointer;
`;

export const StyledMessageBox = styled.div`
  width: 20px;
  height: 20px;

  cursor: pointer;
`;
export const NumBox = styled.div`
  color: ${({ $textColor }) => $textColor};
  font-size: 12px;
  padding-right: 10px;
`;
export const Date = styled.p`
  color: ${({ $textColor }) => $textColor};
  font-family: ${styleConstants.fontFamily};
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  padding-left: 54px;
  padding-top: 16px;
`;

export const DetailNavigateBtn = styled.div`
  cursor: pointer;
`;

export const VideoImgToggleBox = styled.div``;
