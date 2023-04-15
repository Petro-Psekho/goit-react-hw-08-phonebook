import styled from '@emotion/styled';

export const Container = styled.div`
  min-height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;

  /* font-size: 20px; */
  color: #4e4e4e;
`;

export const ContactsTitleWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6px;
  padding: 0, 20px;
`;

export const TitleWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 20px;
`;

export const Title = styled.h1`
  font-size: 30px;
  color: #396fa5;
  margin-left: 12px;
`;

export const ContactsTitle = styled.h2`
  padding-left: 14px;
  font-size: 22px;
  color: #396fa5;
`;

export const FindContactsTitle = styled.h3`
  margin-bottom: 4px;
  font-size: 18px;
  font-weight: 100;
  color: #4e4e4e;
`;
