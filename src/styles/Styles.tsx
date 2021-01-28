import styled from 'styled-components';

export const H3 = styled.h3`
  padding: 0 1%;
`;

export const Container = styled.div`
  height: 100%;
  width: 100vw;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  & .formInput {
    width: 25%;
    padding: 1% 0;
  }
`;

export const HeaderDiv = styled.div`
  width: 100vw;
  background-color: rgba(72, 66, 237, 1);
  padding: 0 1%;
`;

export const Information = styled.div`
  display: flex;
  flex-direction: row;
  & h3 {
    padding: 0 0 0 5px;
  }
`;
