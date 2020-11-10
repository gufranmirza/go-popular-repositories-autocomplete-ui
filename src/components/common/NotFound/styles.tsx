import styled from 'styled-components';
import * as vars from '@/core/theme/vars';
import { AppContainer } from '@/core/components/AppContainer';

export const Root = styled.div`
  padding: ${vars.ApplicationPadding};
  height: 100vh;
`;

export const Container = styled(AppContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  flex-direction: column;
`;

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
