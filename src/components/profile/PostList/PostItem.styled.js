import styled from 'styled-components';

const set_ham = `
  margin-bottom: 20px;
`;

const set_ben = `
  display: flex;
  width: 114px;
  height: 114px;
  overflow: hidden;
  margin-right: 8px;
  margin-bottom: 8px;
  &:nth-child(3n) {
      margin-right: 0;
  }
`;
export const PostBox = styled.div`
  max-width: 767px;
  width: 100vw;
  cursor: pointer;
  ${({ $flag }) => {
    return $flag ? set_ham : set_ben;
  }}
`;

export const albumImg = styled.img`
  height: 135%;
  transform: translate(-20%, -13%);
`;
