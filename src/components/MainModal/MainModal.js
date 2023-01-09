import React from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import * as S from './MainModalStyle';
import { MainModalTemplates } from './MainModalTemplates.js';

const MainModal = ({ openModal, setOpenModal }) => {
  const modalRef = useRef();

  const modalClose = e => {
    if (openModal && modalRef.current === e.target) {
      setOpenModal(false);
    }
  };

  return (
    <S.Background ref={modalRef} onClick={e => modalClose(e)}>
      <S.ModalSize>
        <S.Layout>
          <S.TitleBox>
            <S.Title>설문 제작 방법을 선택하세요</S.Title>
          </S.TitleBox>
          <S.TemplateSelect>
            <S.Template>
              {MainModalTemplates.map(template => {
                const { id, name, src } = template;
                return (
                  <Link key={id} to={`/editor/${id}`} state={{ name: id }}>
                    <S.NewTemplateBox onClick={() => setOpenModal(false)}>
                      <S.NewTemplate alt="img" src={src} />
                      <S.NewTemplateTitle>{name} </S.NewTemplateTitle>
                    </S.NewTemplateBox>
                  </Link>
                );
              })}
            </S.Template>
          </S.TemplateSelect>
        </S.Layout>
      </S.ModalSize>
    </S.Background>
  );
};

export default MainModal;
