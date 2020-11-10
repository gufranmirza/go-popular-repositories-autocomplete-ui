import styled from 'styled-components';

export const Image = styled.div`
  max-width: 400px;
  img {
    max-width: 400px;
  }

  @media screen and (max-width: 1024px) {
    img {
      max-width: 320px;
    }
  }
`;
