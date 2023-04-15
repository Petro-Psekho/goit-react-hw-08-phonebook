import styled from '@emotion/styled';

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 6px 16px;
  border: 1px solid #e7e7e7;
  border-radius: 4px;

  margin-bottom: 4px;

  color: #e7e7e7;
  background-color: #fff;

  /* :nth-of-type(2n) {
    background-color: #ecf1f4;
  } */
`;

export const ContactItem = styled.div`
  font-size: 18px;
  color: #4e4e4e;
`;

export const ContactItemName = styled.p`
  margin-bottom: 0;
  font-size: 20px;
  font-weight: 600;
  color: #396fa5;
`;

export const ContactItemPhone = styled.div`
  display: flex;
  align-items: center;

  font-size: 16px;
  color: #8f8f8f;
`;

export const ContactItemNumber = styled.p`
  margin-left: 10px;
  margin-bottom: 0;
`;

export const DeleteContactItem = styled.div`
  margin-left: 10px;
  cursor: pointer;

  color: #4e4e4e;
`;
