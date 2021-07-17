import styled from 'styled-components';
import { media } from './tokens';

export const Container = styled.div`
  margin: 20px;
  padding: 20px;
`;

export const InputArea = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;

  input {
    width: 100%;
  }

  button {
    margin-top: 20px;
    text-align: center;
    width: 100%;

    ${media.md} {
      width: 20%;
    }
  }
`;

export const SearchArea = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;

  input {
    width: 100%;
    font-size: 17px;

    ${media.md} {
      width: 50%;
    }

    ${media.lg} {
      width: 20%;
    }
  }
`;

export const CardContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const CardArea = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  background: #ccc;
  width: 100%;
  padding: 20px;
  border-radius: 8px;

  ${media.sm} {
    width: 50%;
  }

  ${media.lg} {
    width: 40%;
  }

  ${media.xl} {
    width: 20%;
  }
`;
