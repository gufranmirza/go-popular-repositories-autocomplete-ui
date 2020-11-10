import React from 'react';
import { AppContainer } from '@/core/components/AppContainer';
import Typography from 'antd/lib/typography';
import * as vars from '@/core/theme/vars';

import Right from './Right';
import Left from './Left';
import * as styles from './styles';

const { Title } = Typography;

type Props = {};

const Login: React.FC<Props> = (props: Props) => (
  <div>
    <styles.Root>
      <AppContainer>
        <styles.Container>
          <styles.ColumnLeft>
            <Left />
          </styles.ColumnLeft>
          <styles.Column>
            <Right />
          </styles.Column>
        </styles.Container>
      </AppContainer>
    </styles.Root>
    <styles.Info>
      <Title
        level={5}
        style={{
          fontWeight: 'normal',
          color: vars.HeadingColor1,
          margin: 0,
          textAlign: 'center',
          paddingTop: '25px',
          paddingBottom: '25px',
        }}
      >
        Foolter .
      </Title>
    </styles.Info>
  </div>
);

export default Login;
