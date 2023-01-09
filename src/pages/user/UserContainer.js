import axios from 'axios';
import { React, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import EndingGreeting from '../../components/EndingGreeting';
import { API } from '../../config';
import UserSurvey from './UserSurvey';
import * as S from './UserSurveyStyle';

const UserContainer = () => {
  const [form, setForm] = useState({}); // form 데이터 받는 State
  const location = useLocation();
  const url = location.pathname;
  const id = url.substring(12);

  useEffect(() => {
    axios(`${API.SURVEYPAGE}/${id}`).then(res => setForm(res));
  }, [id]);

  return (
    <S.Background>
      <S.SurveyForm>
        <S.Title>{form?.etc?.name}</S.Title>
        {form?.formData?.length === 0 && <EndingGreeting />}
        <UserSurvey form={form} userId={id} setForm={setForm} />
      </S.SurveyForm>
    </S.Background>
  );
};

export default UserContainer;
