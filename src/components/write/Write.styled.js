import styled from 'styled-components';
import addImg from '../../assets/images/write/upload-file.png';

export const WriteLayout = styled.div`
  position: relative;
  height: 100vh;
  padding-top: 68px;
  padding-left: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UploadBtn = styled.button`
  position: absolute;
  width: 50px;
  height: 50px;
  bottom: 0;
  right: 0;
  border: 0;
  margin: 0 16px 16px 0;
  background: url(${addImg});
`;

export const Upload = styled.div`
  display: flex;
  align-self: flex-start;
`;

export const UserImg = styled.img`
  width: 42px;
  height: 42px;
`;

export const TextInput = styled.textarea`
  border: 0;
  max-width: 687px;
  width: 80vw;
  resize: none;
  padding-left: 12px;
  padding-top: 12px;
  outline: none;
  color: ${({ $textColor }) => $textColor};
  font-weight: 400;

  &::placeholder {
    font-size: 14px;
    color: #c4c4c4;
  }
`;

export const VideoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Video = styled.iframe`
  max-width: 707px;
  width: 90%;
  height: 27vh;
  padding-top: 40px;
`;

export const VideoContent = styled.p`
  color: ${({ $textColor }) => $textColor};
  padding-right: 34px;
  padding-bottom: 50px;
`;

export const ShareBtn = styled.button`
  width: 80vw;
  height: 40px;
  border-radius: 50px;
`;
