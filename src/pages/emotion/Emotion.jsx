import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NavBar from '../../components/common/NavBar/NavBar';
import EmotionCheck from '../../components/emotion/EmotionCheck';
import TabMenu from '../../components/common/TabMenu/TabMenu';
import { useNavigate } from 'react-router-dom';
import EmotionResult from '../../components/emotion/EmotionResult';

const ContBox = styled.div`
  max-width: 767px;
  width: 100vw;
  background-color: ${({ theme }) => theme.backgroundColor};
`;

export default function Emotion() {
  const [result, SetResult] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    token ?? navigate('/');
  }, []);

  return (
    <ContBox>
      <NavBar />
      {!result ? <EmotionCheck SetResult={SetResult} /> : <EmotionResult SetResult={SetResult} />}
      <TabMenu />
    </ContBox>
  );
}
