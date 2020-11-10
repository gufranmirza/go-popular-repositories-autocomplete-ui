import styled from 'styled-components';
import * as vars from '@/core/theme/vars';

export const Root = styled.div`
  padding: ${vars.ApplicationPadding};
  padding-top: 70px;
  height: calc(100vh - 70px);
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Column = styled.div`
  flex: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 200px);
  @media screen and (max-width: 768px) {
    flex: 100%;
  }
`;

export const ColumnLeft = styled(Column)`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Info = styled.div`
  background: ${vars.Grey4};
  padding: ${vars.ApplicationPadding};
`;
