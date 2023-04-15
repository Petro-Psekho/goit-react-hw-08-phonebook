import styled from '@emotion/styled';

export const ErrMessage = styled.p`
  display: flex;
  justify-content: center;
  width: 300px;
  margin: 10px 0;
  font-size: 10px;
  color: red;
`;

export const FormWrap = styled.form`
  padding: 20px 30px;
`;

export const FormInput = styled.input`
  padding: 6px 10px;
  font-size: 16px;
  width: 300px;
  ::placeholder {
    color: #c2c2c2;
  }
`;

export const InputName = styled.label`
  display: flex;
  flex-direction: column;

  font-size: 16px;
`;

export const SubmitBtn = styled.div`
  display: flex;
  justify-content: space-between;
`;
