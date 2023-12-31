import styled from 'styled-components';

export const ChatRoomLayout = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 72px;
  padding-bottom: 72px;
  gap: 9px;
  max-width: 767px;
  overflow-x: none;

  background-color: ${({ theme }) => theme.backgroundColor};
  min-height: 100vh;
`;
export const OthersChatBox = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 16px;
`;
export const MessageWrapperBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const TimeWrapperBox = styled.div`
  display: flex;
  align-items: flex-end;
  height: 100%;
`;

export const StyledProfileImg = styled.img`
  margin-right: 12px;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  margin-bottom: 10px;
`;
export const SpeechBubbleBox = styled.div`
  background-color: white;
  padding: 12px;
  max-width: 240px;
  word-wrap: break-word;
  color: #000;
  border: 1px solid #c4c4c4;
  border-radius: 0px 12px 12px 12px;

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 5px;
`;
export const Time = styled.p`
  color: #767676;

  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  transform: translate(6px, -50%);
`;

export const MeChatBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
  padding-right: 16px;
`;

export const MeMessageWrapperBox = styled.div`
  display: flex;
  flex-direction: row;
  padding-right: 16px;
`;

export const MeSpeechBubbleBox = styled.div`
  padding: 12px;
  max-width: 240px;
  word-wrap: break-word;
  background-color: ${({ theme }) => theme.BodyBgColor};
  border-radius: 12px 12px 0px 12px;
  color: ${({ theme }) => theme.textColor};

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 5px;
`;

export const MeTimeWrapperBox = styled.div`
  display: flex;
  align-items: flex-end;
  height: 100%;
`;
export const MeTime = styled.p`
  color: #767676;

  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  transform: translate(-6px, -50%);
`;

export const StyledSendImg = styled.img`
  max-width: calc(240 / 390 * 100%);
  height: auto;
  border-radius: 0px 12px 12px 12px;
`;
