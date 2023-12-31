import React, { useState } from 'react';
import * as S from './ProfilePlayList.styled';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import PlayItem from './PlayItem';
import { readProductList } from '../../../apis/profile/productListAPI';

export default function ProfilePlaylist() {
  const { accountname } = useParams();
  const [playList, setPlayList] = useState([]);

  const { data } = useQuery({
    queryFn: () =>
      readProductList(accountname).then((res) => {
        setPlayList(res.product);
        return res;
      }),
    queryKey: [accountname]
  });

  if (!playList[0]) return <></>;
  return (
    <S.ProfilePlayListLayout>
      <S.TitleContent>좋아하는 글</S.TitleContent>
      <S.PLContainerBox>
        {playList.map((v, i) => (
          <PlayItem
            key={i}
            img={String(v.itemName).split('🈳')[3]}
            title={String(v.itemName).split('🈳')[2]}
            postId={v.link}
            userId={v.itemImage}
            productId={v.id}
            youtubeId={String(v.itemName).split('🈳')[1]}
          />
        ))}
      </S.PLContainerBox>
    </S.ProfilePlayListLayout>
  );
}
