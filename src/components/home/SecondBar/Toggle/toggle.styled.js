import styled from 'styled-components';

export const Input = styled.input`
  display: none;
`;
export const ToggleBox = styled.div`
  cursor: pointer;
  width: 56px;
  height: 30px;
  position: relative;
  background-color: ${({ theme }) => theme.backgroundColor};
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 56px;
  height: 30px;
  background-color: #c9c9c9;
  border-radius: 20px;
  -webkit-transition: 0.4s;
  transition: 0.4s;

  &:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }

  ${Input}:checked + & {
    background-color: ${({ theme }) => theme.btnEnabledBgColor};
  }

  ${Input}:focus + & {
    box-shadow: 0 0 1px #fc7307;
  }

  ${Input}:checked + &::before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`;
