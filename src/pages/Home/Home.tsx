import * as S from './Style';
import React, { useEffect, useState } from 'react';
import { Card, EmptyBox, Header, Toggle } from '@components/base';
import { Dropdowns } from '@components/domain';
import { ICardData } from '@models/CardData';
import useAxios from '@hooks/useAxios';
import { filterCard, makeCheckList } from '@utils/functions';

export type objectTypes = {
  [key: string]: boolean;
};

const Home = () => {
  const [isToggle, setIsToggle] = useState(false);
  const data = useAxios<ICardData[]>(
    'https://requestaquotedashboard.herokuapp.com/requests'
  );

  const [methodList, setMethodList] = useState<objectTypes>({});
  const [materialList, setMaterialList] = useState<objectTypes>({});

  useEffect(() => {
    setMethodList(makeCheckList(data, 'method'));
    setMaterialList(makeCheckList(data, 'material'));
  }, [data]);

  const onToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isToggle = e.target.checked;
    setIsToggle(isToggle);
  };

  const filteredCard =
    data && filterCard(data, methodList, materialList, isToggle);

  return (
    <S.HomeWrapper>
      <Header />
      <S.TitleWrapper>
        <S.Title>
          <h1>들어온 요청</h1>
          <div>파트너님에게 딱 맞는 요청서를 찾아보세요.</div>
        </S.Title>
        <S.FilterWrapper>
          <S.FilterTab>
            <Dropdowns
              methodList={methodList}
              materialList={materialList}
              setMethodList={setMethodList}
              setMaterialList={setMaterialList}
            />
          </S.FilterTab>
          <Toggle onChange={onToggle} children={'상담 중인 요청만 보기'} />
        </S.FilterWrapper>
      </S.TitleWrapper>

      {filteredCard && (
        <S.CardsContainer>
          {filteredCard.map((cardInfo) => (
            <Card key={cardInfo.id} requests={cardInfo} />
          ))}
        </S.CardsContainer>
      )}
      {!filteredCard?.length && <EmptyBox />}
    </S.HomeWrapper>
  );
};

export default Home;
